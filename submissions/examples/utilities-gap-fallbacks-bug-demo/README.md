# Utilities: gap-1, gap-3, gap-10 missing var() fallback values

**Issue:** #5953
**File:** `core/utilities.css`

## Problem

Lines 127, 129, 134 — `.ease-gap-1`, `.ease-gap-3`, `.ease-gap-10` use `var(--ease-space-*)` without fallback values. Other gap utilities have fallbacks.

## Expected

```css
.ease-gap-1  { gap: var(--ease-space-1, 0.25rem) !important; }
.ease-gap-3  { gap: var(--ease-space-3, 0.75rem) !important; }
.ease-gap-10 { gap: var(--ease-space-10, 2.5rem) !important; }
```

## Demo

Open `demo.html` to see which gap utilities have fallbacks and which don't.
