import { describe, expect, it } from "vitest";
import { spawnSync } from "node:child_process";
import { readFileSync, readdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), "..");

function frameworkCss() {
  const directories = ["core", "components", "easemotion"];
  return directories
    .flatMap((directory) =>
      readdirSync(join(rootDir, directory))
        .filter((file) => file.endsWith(".css"))
        .map((file) => readFileSync(join(rootDir, directory, file), "utf8"))
    )
    .join("\n");
}

describe("framework integrity", () => {
  it("defines every prefixed animation referenced by the framework", () => {
    const css = frameworkCss();
    const definitions = new Set(
      [...css.matchAll(/@(?:-webkit-)?keyframes\s+([\w-]+)/g)].map(
        (match) => match[1]
      )
    );
    const references = new Set();

    for (const match of css.matchAll(
      /(?:^|[;{])\s*animation(?:-name)?\s*:\s*([^;}]*)/gm
    )) {
      const value = match[1].replace(/var\([^)]*\)/g, "");
      for (const token of value.match(/[A-Za-z_][\w-]*/g) ?? []) {
        if (
          token.startsWith("ease-") &&
          !["ease-in", "ease-out", "ease-in-out"].includes(token)
        ) {
          references.add(token);
        }
      }
    }

    const missing = [...references]
      .filter((name) => !definitions.has(name))
      .sort();

    expect(missing).toEqual([]);
  });

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
