# Cards: References undefined --ease-color-text-dark token

**Issue:** #5945
**File:** `components/cards.css`

## Problem

Line 180 references `var(--ease-color-text-dark, #f8fafc)` but `--ease-color-text-dark` is never defined in `variables.css` or elsewhere.

## Expected

Either define `--ease-color-text-dark` in `variables.css` or use an existing token.

## Demo

Open `demo.html` to see the glass card in dark mode where the text color falls back to `#f8fafc` via the hardcoded fallback instead of a proper design token.
