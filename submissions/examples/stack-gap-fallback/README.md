# Stack Gap Fallback Values
**Fix #3653:** `ease-stack-*` gap utilities add CSS variable fallback values to prevent layout collapse.

## What changed
- `.ease-stack-sm` → `gap: var(--ease-space-2, 0.5rem)`
- `.ease-stack` → `gap: var(--ease-space-4, 1rem)`
- `.ease-stack-lg` → `gap: var(--ease-space-6, 1.5rem)`
- `.ease-stack-xl` → `gap: var(--ease-space-8, 2rem)`

## Files
- `demo.html` — live demo
- `style.css` — demo styles
- `README.md` — this file

## How to test
Open `demo.html` in a browser. Try removing `--ease-space-4` from `:root` and observe that the gap still works (falls back to `1rem`).
