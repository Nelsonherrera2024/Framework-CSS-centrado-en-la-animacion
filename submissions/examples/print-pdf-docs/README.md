# Print PDF Docs

A build script that generates a print-friendly PDF version of the full EaseMotion CSS documentation.

## Directory Structure

- `build-pdf.sh` — Executable bash script that detects available PDF engines and generates the documentation PDF
- `demo.html` — Demo page explaining the PDF build tool
- `style.css` — Dark theme styling

## How to Use

1. Make sure one of these PDF engines is installed:
   - **Playwright**: `npm install playwright && npx playwright install chromium`
   - **WeasyPrint**: `pip install weasyprint`
   - **wkhtmltopdf**: `apt install wkhtmltopdf`

2. Run the script:
   ```bash
   bash build-pdf.sh
   ```

3. The output file `EaseMotion-CSS-Docs.pdf` will be created in the current directory.
