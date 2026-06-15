import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { minify } from "csso";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const entryFile = path.join(rootDir, "easemotion.css");
const outputFile = path.join(rootDir, "easemotion.min.css");
const outputMapFile = path.join(rootDir, "easemotion.min.css.map");

const localImportPattern = /@import\s+(?:url\(\s*)?["']([^"']+)["']\s*\)?\s*;/g;

function removeCSSComments(source) {
  let result = "";
  let i = 0;

  while (i < source.length) {
    const ch = source[i];

    if (ch === '"' || ch === "'") {
      const quote = ch;
      result += ch;
      i++;

      while (i < source.length) {
        const c = source[i];
        result += c;

        if (c === "\\") {
          i++;
          if (i < source.length) {
            result += source[i];
            i++;
          }
          continue;
        }

        if (c === quote) {
          i++;
          break;
        }

        i++;
      }

      continue;
    }

    if (ch === "/" && source[i + 1] === "*") {
      i += 2;

      while (i < source.length) {
        if (source[i] === "*" && source[i + 1] === "/") {
          i += 2;
          break;
        }
        i++;
      }

      continue;
    }

    result += ch;
    i++;
  }

  return result;
}

async function bundleCss(filePath, state) {
  const normalizedPath = path.normalize(filePath);
  if (state.cache.has(normalizedPath)) {
    return state.cache.get(normalizedPath);
  }

  if (state.stack.has(normalizedPath)) {
    const cycleStart = state.pathStack.indexOf(normalizedPath);

    const chain = [
      ...state.pathStack.slice(cycleStart),
      normalizedPath,
    ].map((item) => path.relative(rootDir, item));

    throw new Error(
      `Circular CSS import detected while processing "${path.relative(
        rootDir,
        normalizedPath,
      )}": ${chain.join(" -> ")}`
    );
  }

  state.stack.add(normalizedPath);
  state.pathStack.push(normalizedPath);

  const source = await readFile(normalizedPath, "utf8");
  const sourceWithoutComments = removeCSSComments(source);
  const directory = path.dirname(normalizedPath);

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
    chunks.push(bundled.slice(lastIndex, match.index));
    chunks.push(bundleCss(match[1], state));
    lastIndex = placeholderPattern.lastIndex;
  }

  chunks.push(bundled.slice(lastIndex));

  try {
    const resolvedChunks = await Promise.all(chunks);
    const result = resolvedChunks.join("\n");

    state.cache.set(normalizedPath, result);
    return result;
  } finally {
    state.stack.delete(normalizedPath);
    state.pathStack.pop();
  }
}

function minifyCss(css) {
  // Use csso with source map support
  const result = minify(css, {
    filename: "easemotion.css",
    sourceMap: true,
  });

  return result;
}

async function build() {
  const state = {
    externalImports: new Set(),
    localImports: [],
    stack: new Set(),
    pathStack: [],
    cache: new Map(),
  };

  const bundledCss = await bundleCss(entryFile, state);
  const externalImportsBlock = [...state.externalImports].join("");
  const fullCss = `${externalImportsBlock}\n${bundledCss}`;

  // Minify with csso and generate source map
  const result = minifyCss(fullCss);

  // Write minified CSS with source map comment
  const cssWithMap = `${result.css}\n/*# sourceMappingURL=easemotion.min.css.map */`;

  await mkdir(path.dirname(outputFile), { recursive: true });
  await writeFile(outputFile, cssWithMap, "utf8");

  // Write source map file
  if (result.map) {
    await writeFile(outputMapFile, JSON.stringify(result.map), "utf8");
  }

  const summary = {
    entry: path.relative(rootDir, entryFile),
    output: path.relative(rootDir, outputFile),
    sourceMap: path.relative(rootDir, outputMapFile),
    importsInlined: state.localImports.length,
    externalImports: state.externalImports.size,
    bytes: Buffer.byteLength(result.css, "utf8"),
    mapBytes: result.map ? Buffer.byteLength(JSON.stringify(result.map), "utf8") : 0,
  };

  console.log(JSON.stringify(summary, null, 2));
}

build().catch((error) => {
  console.error('Build failed:', error);
  process.exitCode = 1;
});
