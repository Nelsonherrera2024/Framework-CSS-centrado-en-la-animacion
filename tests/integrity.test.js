import { describe, expect, it } from "vitest";
import { spawnSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), "..");

describe("framework integrity", () => {
  it("builds a usable stylesheet from the SCSS entry point", () => {
    const build = spawnSync(
      process.execPath,
      [
        join(rootDir, "node_modules", "sass", "sass.js"),
        "scss/_index.scss",
        "dist/easemotion.scss.css",
      ],
      {
        cwd: rootDir,
        encoding: "utf8",
      },
    );

    expect(build.status, build.stderr || build.stdout).toBe(0);

    const output = readFileSync(
      join(rootDir, "dist", "easemotion.scss.css"),
      "utf8"
    );
    expect(output).toContain(".ease-btn");
    expect(output).toContain(".ease-card");
    expect(output).toContain(".ease-fade-in");
  });
});
