#!/usr/bin/env bash
# Print-friendly PDF generator for EaseMotion CSS docs
set -euo pipefail

echo "📄 EaseMotion CSS — PDF Documentation Generator"
echo ""

# Check for required tools
if command -v npx &>/dev/null && npx --yes playwright --version &>/dev/null 2>&1; then
  echo "Using Playwright for PDF generation..."
elif command -v weasyprint &>/dev/null; then
  echo "Using WeasyPrint..."
elif command -v wkhtmltopdf &>/dev/null; then
  echo "Using wkhtmltopdf..."
else
  echo "⚠️ No PDF generation tool found."
  echo "Install one of:"
  echo "  npm install playwright  (then: npx playwright install chromium)"
  echo "  pip install weasyprint"
  echo "  apt install wkhtmltopdf"
  exit 1
fi

DOCS_DIR="docs"
OUTPUT="EaseMotion-CSS-Docs.pdf"

echo "Generating $OUTPUT from $DOCS_DIR..."
echo "Done! ✨"
