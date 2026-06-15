import { spawnSync, execSync } from "node:child_process";
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const bundlePath = path.join(rootDir, "easemotion.min.css");
const mapPath = path.join(rootDir, "easemotion.min.css.map");

// Skip validation in CI if the changed files do not affect the CSS bundle.
if (process.env.GITHUB_ACTIONS === "true") {
  try {
    const baseBranch = process.env.GITHUB_BASE_REF || "main";
    execSync(`git fetch origin ${baseBranch} --depth=1`, { stdio: "ignore" });

    const changedFiles = execSync(`git diff --name-only origin/${baseBranch}`, { encoding: "utf8" })
      .split("\n")
      .map(f => f.trim())
      .filter(Boolean);

    const affectsBundle = changedFiles.some(file =>
      file === "easemotion.css" ||
      file.startsWith("core/") ||
      file.startsWith("components/") ||
      file.startsWith("easemotion/") ||
      file === "scripts/build-minified-css.mjs"
    );

    if (!affectsBundle) {
      console.log("No core, component, or entrypoint files modified. Skipping bundle validation.");
      process.exit(0);
    }
  } catch (err) {
    console.warn("Could not determine changed files from git diff, running full validation:", err.message);
  }
}

const originalBundle = await readFile(bundlePath, "utf8").catch(() => "");
const originalMap = await readFile(mapPath, "utf8").catch(() => "");

const build = spawnSync(process.execPath, ["scripts/build-minified-css.mjs"], {
  cwd: rootDir,
  encoding: "utf8",
});

if (build.stdout) process.stdout.write(build.stdout);
if (build.stderr) process.stderr.write(build.stderr);

if (build.error || build.status !== 0) {
  if (build.error) console.error(build.error.message);
  process.exit(build.status ?? 1);
}

const rebuiltBundle = await readFile(bundlePath, "utf8");
const rebuiltMap = await readFile(mapPath, "utf8").catch(() => "");

if (originalBundle !== rebuiltBundle) {
  await writeFile(bundlePath, originalBundle, "utf8");
  await writeFile(mapPath, originalMap, "utf8");
  throw new Error(
    `${path.relative(rootDir, bundlePath)} is stale. Run \`npm run build\` and commit the regenerated bundle.`,
  );
}

// Validate source map integrity
const map = JSON.parse(rebuiltMap);

if (map.version !== 3) {
  throw new Error(`Source map version must be 3, got ${map.version}`);
}

if (!map.sources || map.sources.length === 0) {
  throw new Error("Source map must contain at least one source file");
}

if (!map.mappings || map.mappings.length === 0) {
  throw new Error("Source map mappings must not be empty");
}

console.log("easemotion.min.css and easemotion.min.css.map are valid and up to date.");
