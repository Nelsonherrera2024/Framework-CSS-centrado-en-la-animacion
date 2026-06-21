# CSS Variable Validator Script (`ease-tooling-css-validator`)

A Node.js script designed to statically analyze all EaseMotion CSS files and ensure that every `var(--ease-*)` usage resolves to an actually declared custom property.

## 🚀 Features

- **AST-Free Parsing**: Uses lightweight Regex to quickly parse all `.css` files without heavy dependencies like PostCSS.
- **Cross-Referencing**: Builds a set of all declared `--ease-*` variables in `core/` and validates every `var()` usage in `core/` and `components/` against it.
- **CI/CD Ready**: Exits with code `1` if undefined variables are found, making it perfect for GitHub Actions or pre-commit hooks to prevent silent CSS failures.

## 🛠️ Usage

This script requires [Node.js](https://nodejs.org/) to be installed.

Run the script from your terminal:
```bash
node validate-css-vars.js
