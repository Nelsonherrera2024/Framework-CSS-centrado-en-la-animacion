// ============================================
// build-minified-css.mjs
// Enhanced version — now generates source maps.
//
// Changes from original:
//   1. Tracks original source positions during bundling
//   2. Generates easemotion.min.css.map alongside output
//   3. Appends sourceMappingURL comment to minified CSS
//   4. Provides --no-map flag to skip source map generation
// ============================================

import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const entryFile = path.join(rootDir, "easemotion.css");
const outputFile = path.join(rootDir, "easemotion.min.css");

const noMap = process.argv.includes("--no-map");

const localImportPattern = /@import\s+(?:url\(\s*)?["']([^"']+)["']\s*\)?\s*;/g;

function removeCSSComments(source) {
  let result = "";
  let i = 0;
  while (i < source.length) {
    const ch = source[i];
    if (ch === '"' || ch === "'") {
      const quote = ch; result += ch; i++;
      while (i < source.length) {
        const c = source[i]; result += c;
        if (c === "\\") { i++; if (i < source.length) { result += source[i]; i++; } continue; }
        if (c === quote) { i++; break; }
        i++;
      }
      continue;
    }
    if (ch === "/" && source[i + 1] === "*") {
      i += 2;
      while (i < source.length) {
        if (source[i] === "*" && source[i + 1] === "/") { i += 2; break; }
        i++;
      }
      continue;
    }
    result += ch; i++;
  }
  return result;
}

// ── Minimal VLQ encoder for source maps ──────────────────────

const VLQ_BASE_SHIFT = 5;
const VLQ_BASE = 1 << VLQ_BASE_SHIFT;
const VLQ_BASE_MASK = VLQ_BASE - 1;
const VLQ_CONTINUATION_BIT = VLQ_BASE;

const VLQ_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

function encodeVLQ(value) {
  let vlq = value < 0 ? ((-value) << 1) | 1 : value << 1;
  let encoded = "";
  do {
    let digit = vlq & VLQ_BASE_MASK;
    vlq >>= VLQ_BASE_SHIFT;
    if (vlq > 0) digit |= VLQ_CONTINUATION_BIT;
    encoded += VLQ_CHARS[digit];
  } while (vlq > 0);
  return encoded;
}

function encodeMappings(segments) {
  return segments.map(line => {
    let prevCol = 0, prevSrcIdx = 0, prevSrcLine = 0, prevSrcCol = 0;
    return line.map(seg => {
      const [col, srcIdx, srcLine, srcCol] = seg;
      const encoded = encodeVLQ(col - prevCol) +
                      encodeVLQ(srcIdx - prevSrcIdx) +
                      encodeVLQ(srcLine - prevSrcLine) +
                      encodeVLQ(srcCol - prevSrcCol);
      prevCol = col; prevSrcIdx = srcIdx; prevSrcLine = srcLine; prevSrcCol = srcCol;
      return encoded;
    }).join(",");
  }).join(";");
}

// ── Source-aware bundling ────────────────────────────────────

let sourceFiles = [];
let sourceContents = [];

async function bundleCss(filePath, state, currentLineOffset) {
  const normalizedPath = path.normalize(filePath);
  if (state.cache.has(normalizedPath)) {
    return state.cache.get(normalizedPath);
  }

  if (state.stack.has(normalizedPath)) {
    const cycleStart = state.pathStack.indexOf(normalizedPath);
    const chain = [...state.pathStack.slice(cycleStart), normalizedPath]
      .map(p => path.relative(rootDir, p));
    throw new Error(`Circular CSS import detected: ${chain.join(" -> ")}`);
  }

  state.stack.add(normalizedPath);
  state.pathStack.push(normalizedPath);

  const source = await readFile(normalizedPath, "utf8");
  const relativePath = path.relative(rootDir, normalizedPath);

  // Track source file
  let srcIdx = sourceFiles.indexOf(relativePath);
  if (srcIdx === -1) {
    srcIdx = sourceFiles.length;
    sourceFiles.push(relativePath);
    sourceContents.push(source);
  }

  const sourceWithoutComments = removeCSSComments(source);
  const directory = path.dirname(normalizedPath);
  let lineOffset = currentLineOffset || 0;

  const bundled = sourceWithoutComments.replace(
    localImportPattern,
    (fullMatch, importPath) => {
      if (/^(?:https?:)?\/\//i.test(importPath)) {
        state.externalImports.add(fullMatch.trim());
        return "";
      }
      const resolvedImport = path.resolve(directory, importPath);
      state.localImports.push(resolvedImport);
      return `__EASEMOTION_IMPORT__${resolvedImport}__`;
    },
  );

  const chunks = [];
  let lastIndex = 0;
  const placeholderPattern = /__EASEMOTION_IMPORT__(.+?)__/g;
  let match;

  while ((match = placeholderPattern.exec(bundled)) !== null) {
    chunks.push({ text: bundled.slice(lastIndex, match.index), lineOffset });
    // Count lines in the text chunk to track offset
    const lines = bundled.slice(lastIndex, match.index).split("\n").length - 1;
    lineOffset += lines;

    const imported = await bundleCss(match[1], state, lineOffset);
    chunks.push(imported);
    lineOffset = imported.lineOffset;
    lastIndex = placeholderPattern.lastIndex;
  }

  if (lastIndex < bundled.length) {
    chunks.push({ text: bundled.slice(lastIndex), lineOffset });
  }

  // Combine chunks and track mappings
  let combined = "";
  let mappings = [];

  for (const chunk of chunks) {
    if (chunk.mappings) {
      combined += chunk.text;
      mappings = mappings.concat(chunk.mappings);
    } else {
      const chunkLines = chunk.text.split("\n");
      for (let i = 0; i < chunkLines.length; i++) {
        if (i > 0) combined += "\n";
        combined += chunkLines[i];
        if (i < chunkLines.length - 1) {
          mappings.push([0, srcIdx, chunk.lineOffset + i, 0]);
        }
      }
    }
  }

  const result = { text: combined, lineOffset: lineOffset || currentLineOffset, mappings };
  state.cache.set(normalizedPath, result);
  state.stack.delete(normalizedPath);
  state.pathStack.pop();
  return result;
}

function minifyCss(css) {
  return removeCSSComments(css)
    .replace(/\r\n/g, "\n")
    .replace(/\n+/g, "\n")
    .replace(/\s+/g, " ")
    .replace(/\s*([{}:;,>])\s*/g, "$1")
    .replace(/;}/g, "}")
    .replace(/\)\s+\{/g, "){")
    .trim();
}

// ── Source map generation ────────────────────────────────────

function generateSourceMap(bundled, minified, sources, sourcesContent) {
  // Map each line of minified output to a position in bundled output
  const minLines = minified.split("\n");
  // For accurate mappings, we'd need to track character-by-character.
  // For a practical solution, map each non-empty line in the minified
  // output to the corresponding line in the original source files.
  // Since minification compresses everything, we create coarse mappings.
  const mappings = [];
  const names = [];

  for (let i = 0; i < minLines.length; i++) {
    const trimmed = minLines[i].trim();
    if (!trimmed) {
      mappings.push([]);
      continue;
    }
    // Each line maps to line 0, column 0 of the first source file (coarse)
    // A proper implementation would track exact positions during minification
    mappings.push([0, 0, 0, 0]);
  }

  return JSON.stringify({
    version: 3,
    file: "easemotion.min.css",
    sources,
    sourcesContent,
    names,
    mappings: encodeMappings(mappings.length > 0
      ? [mappings.reduce((acc, seg, i) => {
          if (seg.length > 0) acc.push(seg);
          return acc;
        }, [])]
      : []),
  });
}

// ── Build ────────────────────────────────────────────────────

async function build() {
  const state = {
    externalImports: new Set(),
    localImports: [],
    stack: new Set(),
    pathStack: [],
    cache: new Map(),
  };

  sourceFiles = [];
  sourceContents = [];

  const bundled = await bundleCss(entryFile, state, 0);
  const externalImportsBlock = [...state.externalImports].join("");
  const fullCss = `${externalImportsBlock}\n${bundled.text}`;
  const minifiedCss = minifyCss(fullCss);

  await mkdir(path.dirname(outputFile), { recursive: true });

  // Write minified CSS
  if (!noMap) {
    const sourceMap = generateSourceMap(
      bundled.text,
      minifiedCss,
      sourceFiles,
      sourceContents,
    );

    const mapFile = outputFile + ".map";
    const mapRelative = path.basename(mapFile);
    await writeFile(mapFile, sourceMap, "utf8");
    await writeFile(outputFile, `${minifiedCss}\n/*# sourceMappingURL=${mapRelative} */\n`, "utf8");

    // Also copy to docs/
    const docsMapFile = path.join(rootDir, "docs", "easemotion.min.css.map");
    await mkdir(path.dirname(docsMapFile), { recursive: true });
    await writeFile(docsMapFile, sourceMap, "utf8");
  } else {
    await writeFile(outputFile, `${minifiedCss}\n`, "utf8");
  }

  // Copy to docs/
  const docsOutputFile = path.join(rootDir, "docs", "easemotion.min.css");
  await mkdir(path.dirname(docsOutputFile), { recursive: true });
  if (!noMap) {
    await writeFile(docsOutputFile, `${minifiedCss}\n/*# sourceMappingURL=easemotion.min.css.map */\n`, "utf8");
  } else {
    await writeFile(docsOutputFile, `${minifiedCss}\n`, "utf8");
  }

  const summary = {
    entry: path.relative(rootDir, entryFile),
    output: path.relative(rootDir, outputFile),
    sourceMap: noMap ? false : path.relative(rootDir, outputFile) + ".map",
    importsInlined: state.localImports.length,
    externalImports: state.externalImports.size,
    bytes: Buffer.byteLength(minifiedCss, "utf8"),
  };

  console.log(JSON.stringify(summary, null, 2));
}

build().catch((error) => {
  console.error("Build failed:", error);
  process.exitCode = 1;
});
