import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const baselinePath = path.join(__dirname, "duplicate-baseline.json");

const dirs = ["core", "components"];
const classPattern = /^\s*\.([a-zA-Z0-9_-]+)(?::[a-z-]+)?(?:\s*,\s*\.[a-zA-Z0-9_-]+)*\s*\{/;
const keyframePattern = /@keyframes\s+(\S+)/;

async function readBaseline() {
  try {
    return JSON.parse(await readFile(baselinePath, "utf8"));
  } catch (error) {
    if (error.code === "ENOENT") {
      console.warn(
        "No duplicate baseline at scripts/duplicate-baseline.json. Every known duplicate counts as a new violation.",
      );
    } else {
      console.warn(
        `Could not read duplicate baseline at scripts/duplicate-baseline.json (${error.message}). Known duplicates count as new violations.`,
      );
    }
    return { classes: {}, keyframes: {} };
  }
}

function allowedCount(baseline, kind, name) {
  return Number(baseline[kind]?.[name] ?? 1);
}

async function findDuplicates() {
  const baseline = await readBaseline();
  const classes = {};
  const keyframes = {};
  let scannedFiles = 0;

  for (const dir of dirs) {
    const dirPath = path.join(rootDir, dir);
    let entries;
    try {
      entries = await readdir(dirPath, { withFileTypes: true });
    } catch (error) {
      console.warn(
        `Could not scan ${dir}/ for duplicate selectors (${error.message}). Its CSS files were not checked.`,
      );
      continue;
    }

    for (const entry of entries) {
      if (!entry.isFile() || !entry.name.endsWith(".css")) continue;

      const filePath = path.join(dirPath, entry.name);
      const content = await readFile(filePath, "utf8");
      scannedFiles++;
      const lines = content.split("\n");

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        const cm = line.match(classPattern);
        if (cm) {
          const className = cm[1];
          if (!classes[className]) classes[className] = [];
          const fileLoc = `${dir}/${entry.name}`;
          if (!classes[className].some(loc => loc.startsWith(fileLoc + ":"))) {
            classes[className].push(`${dir}/${entry.name}:${i + 1}`);
          }
        }

        const km = line.match(keyframePattern);
        if (km) {
          const keyframeName = km[1];
          if (!keyframes[keyframeName]) keyframes[keyframeName] = [];
          const fileLoc = `${dir}/${entry.name}`;
          if (!keyframes[keyframeName].some(loc => loc.startsWith(fileLoc + ":"))) {
            keyframes[keyframeName].push(`${dir}/${entry.name}:${i + 1}`);
          }
        }
      }
    }
  }

  let exitCode = 0;
  let knownDuplicateCount = 0;

  for (const [name, locations] of Object.entries(classes)) {
    if (locations.length > allowedCount(baseline, "classes", name)) {
      console.log(`Duplicate class .${name}:`);
      locations.forEach((loc) => console.log(`  ${loc}`));
      exitCode = 1;
    } else if (locations.length > 1) {
      knownDuplicateCount++;
    }
  }

  for (const [name, locations] of Object.entries(keyframes)) {
    if (locations.length > allowedCount(baseline, "keyframes", name)) {
      console.log(`Duplicate @keyframes ${name}:`);
      locations.forEach((loc) => console.log(`  ${loc}`));
      exitCode = 1;
    } else if (locations.length > 1) {
      knownDuplicateCount++;
    }
  }

  if (exitCode === 0) {
    if (knownDuplicateCount > 0) {
      console.log(
        `No new duplicate class names or @keyframes found in ${scannedFiles} CSS files. ${knownDuplicateCount} known duplicate entries are tracked in scripts/duplicate-baseline.json.`,
      );
    } else {
      console.log(
        `No duplicate class names or @keyframes found in ${scannedFiles} CSS files.`,
      );
    }
  }

  process.exit(exitCode);
}

findDuplicates().catch((error) => {
  console.error('Duplicate check failed:', error);
  process.exitCode = 1;
});
