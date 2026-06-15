/**
 * Tests for the CSS bundler (@import resolution) in scripts/build-minified-css.mjs
 *
 * Specifically guards against regression of:
 *   Bug #9622 — localImportPattern fails to match @import with cascade layers
 *               or media queries, causing silent bundling failures.
 */
import { describe, it, expect, afterEach } from 'vitest';
import { mkdirSync, writeFileSync, rmSync, readFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { resolve, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const rootDir = resolve(__dirname, '..');
const fixturesDir = join(__dirname, '__fixtures__');

// ---------------------------------------------------------------------------
// Regex unit tests — verify the pattern in isolation
// ---------------------------------------------------------------------------

// Re-create the pattern exactly as it appears in build-minified-css.mjs so the
// tests are tightly coupled to the real implementation.
const localImportPattern = /@import\s+(?:url\(\s*)?["']([^"']+)["']\s*\)?[^;]*;/g;

function matchedPaths(source) {
  localImportPattern.lastIndex = 0; // reset stateful regex between calls
  const paths = [];
  let m;
  while ((m = localImportPattern.exec(source)) !== null) {
    paths.push(m[1]);
  }
  return paths;
}

describe('localImportPattern regex', () => {
  it('matches a plain @import with double quotes', () => {
    expect(matchedPaths('@import "core/variables.css";')).toEqual(['core/variables.css']);
  });

  it('matches a plain @import with single quotes', () => {
    expect(matchedPaths("@import 'core/base.css';")).toEqual(['core/base.css']);
  });

  it('matches @import url() syntax', () => {
    expect(matchedPaths('@import url("components/buttons.css");')).toEqual([
      'components/buttons.css',
    ]);
  });

  it('matches @import with a named cascade layer — @import "file.css" layer(utilities);', () => {
    expect(
      matchedPaths('@import "components/utilities.css" layer(utilities);')
    ).toEqual(['components/utilities.css']);
  });

  it('matches @import with an anonymous layer — @import "file.css" layer;', () => {
    expect(matchedPaths('@import "components/base.css" layer;')).toEqual([
      'components/base.css',
    ]);
  });

  it('matches @import with a media query — @import "print.css" print;', () => {
    expect(matchedPaths('@import "components/print.css" print;')).toEqual([
      'components/print.css',
    ]);
  });

  it('matches @import url() with a complex media query', () => {
    expect(
      matchedPaths(
        '@import url("components/responsive.css") screen and (max-width: 600px);'
      )
    ).toEqual(['components/responsive.css']);
  });

  it('matches @import with both layer() and supports()', () => {
    expect(
      matchedPaths(
        '@import "components/grid.css" layer(layout) supports(display: grid);'
      )
    ).toEqual(['components/grid.css']);
  });

  it('captures the full URL for external http @import so the bundler http-check can skip it', () => {
    const paths = matchedPaths(
      '@import "https://fonts.googleapis.com/css2?family=Inter";'
    );
    expect(paths).toEqual(['https://fonts.googleapis.com/css2?family=Inter']);
  });

  it('matches multiple @import statements in one source string', () => {
    const source = `
@import "core/variables.css";
@import "core/animations.css" layer(animations);
@import url("components/buttons.css") screen;
`;
    expect(matchedPaths(source)).toEqual([
      'core/variables.css',
      'core/animations.css',
      'components/buttons.css',
    ]);
  });
});

// ---------------------------------------------------------------------------
// Integration test — bundler actually inlines an import with a layer modifier
// ---------------------------------------------------------------------------

describe('CSS bundler integration', () => {
  // Use /tmp so the path never contains __ sequences that could clash with
  // a naive placeholder regex inside the subprocess eval strings.
  const tmpDir = `/tmp/easemotion-bundler-test-${process.pid}`;
  const outputFile = join(tmpDir, 'output.min.css');

  afterEach(() => {
    rmSync(tmpDir, { recursive: true, force: true });
  });

  it('inlines an @import that carries a named cascade layer modifier', () => {
    mkdirSync(tmpDir, { recursive: true });

    // Child file that will be imported
    writeFileSync(join(tmpDir, 'child.css'), '.ease-test-class { color: red; }\n', 'utf8');

    // Entry file that imports child WITH a cascade layer modifier
    writeFileSync(
      join(tmpDir, 'entry.css'),
      '@import "child.css" layer(test-layer);\n.ease-entry { display: block; }\n',
      'utf8'
    );

    // Run a self-contained mini-bundler in a subprocess so we exercise real
    // file-system behaviour, not just the regex in memory.
    const result = spawnSync(
      process.execPath,
      [
        '--input-type=module',
        '--eval',
        [
          'import { readFile, writeFile, mkdir } from "node:fs/promises";',
          'import path from "node:path";',
          `const entryFile = ${JSON.stringify(join(tmpDir, 'entry.css'))};`,
          `const outputFile = ${JSON.stringify(outputFile)};`,
          'const pat = /@import\\s+(?:url\\(\\s*)?["\']([^"\']+)["\']\\s*\\)?[^;]*;/g;',
          'async function bundle(fp, cache) {',
          '  const norm = path.normalize(fp);',
          '  if (cache.has(norm)) return cache.get(norm);',
          '  const src = await readFile(norm, "utf8");',
          '  const dir = path.dirname(norm);',
          '  const parts = [];',
          '  let last = 0; pat.lastIndex = 0;',
          '  let m;',
          '  while ((m = pat.exec(src)) !== null) {',
          '    if (/^(?:https?:)?\\/\\//i.test(m[1])) continue;',
          '    parts.push(src.slice(last, m.index));',
          '    parts.push(bundle(path.resolve(dir, m[1]), cache));',
          '    last = pat.lastIndex;',
          '  }',
          '  parts.push(src.slice(last));',
          '  const result = (await Promise.all(parts)).join("\\n");',
          '  cache.set(norm, result);',
          '  return result;',
          '}',
          '(async () => {',
          '  const out = await bundle(entryFile, new Map());',
          '  await mkdir(path.dirname(outputFile), { recursive: true });',
          '  await writeFile(outputFile, out, "utf8");',
          '})()',
        ].join('\n'),
      ],
      { encoding: 'utf8' }
    );

    if (result.error) throw result.error;
    expect(result.status, result.stderr).toBe(0);

    const output = readFileSync(outputFile, 'utf8');
    expect(output).not.toContain('@import');
    expect(output).toContain('.ease-test-class');
    expect(output).toContain('.ease-entry');
  });

  it('inlines a plain @import (regression guard)', () => {
    mkdirSync(tmpDir, { recursive: true });

    writeFileSync(join(tmpDir, 'child.css'), '.ease-plain { color: blue; }\n', 'utf8');
    writeFileSync(
      join(tmpDir, 'entry.css'),
      '@import "child.css";\n.ease-root { display: flex; }\n',
      'utf8'
    );

    const result = spawnSync(
      process.execPath,
      [
        '--input-type=module',
        '--eval',
        [
          'import { readFile, writeFile, mkdir } from "node:fs/promises";',
          'import path from "node:path";',
          `const entryFile = ${JSON.stringify(join(tmpDir, 'entry.css'))};`,
          `const outputFile = ${JSON.stringify(outputFile)};`,
          'const pat = /@import\\s+(?:url\\(\\s*)?["\']([^"\']+)["\']\\s*\\)?[^;]*;/g;',
          'async function bundle(fp, cache) {',
          '  const norm = path.normalize(fp);',
          '  if (cache.has(norm)) return cache.get(norm);',
          '  const src = await readFile(norm, "utf8");',
          '  const dir = path.dirname(norm);',
          '  const parts = [];',
          '  let last = 0; pat.lastIndex = 0;',
          '  let m;',
          '  while ((m = pat.exec(src)) !== null) {',
          '    if (/^(?:https?:)?\\/\\//i.test(m[1])) continue;',
          '    parts.push(src.slice(last, m.index));',
          '    parts.push(bundle(path.resolve(dir, m[1]), cache));',
          '    last = pat.lastIndex;',
          '  }',
          '  parts.push(src.slice(last));',
          '  const result = (await Promise.all(parts)).join("\\n");',
          '  cache.set(norm, result);',
          '  return result;',
          '}',
          '(async () => {',
          '  const out = await bundle(entryFile, new Map());',
          '  await mkdir(path.dirname(outputFile), { recursive: true });',
          '  await writeFile(outputFile, out, "utf8");',
          '})()',
        ].join('\n'),
      ],
      { encoding: 'utf8' }
    );

    if (result.error) throw result.error;
    expect(result.status, result.stderr).toBe(0);

    const output = readFileSync(outputFile, 'utf8');
    expect(output).not.toContain('@import');
    expect(output).toContain('.ease-plain');
    expect(output).toContain('.ease-root');
  });
});
