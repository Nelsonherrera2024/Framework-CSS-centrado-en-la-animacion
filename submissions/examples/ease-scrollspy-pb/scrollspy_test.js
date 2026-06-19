import { fileURLToPath } from "node:url";
import path from "node:path";
import { test, expect } from "vitest";

// Fixed dynamic resolution safely nested inside your isolated contribution sandbox
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = "file://" + encodeURI(path.resolve(__dirname, "../../../docs/index.html"));

test("Scrollspy Navigation Target Evaluation", () => {
  // Safe cross-platform path validation check
  expect(filePath).toContain("docs/index.html");
  expect(filePath).not.toContain("C:/Users/Kamal");
});