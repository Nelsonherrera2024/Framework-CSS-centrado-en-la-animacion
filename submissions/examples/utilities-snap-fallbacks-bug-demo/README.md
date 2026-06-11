# Utilities: Snap classes use var() without fallback values

**Issue:** #5957
**File:** `core/utilities.css`

## Problem

Lines 229-244 use `var(--ease-snap-axis)` and `var(--ease-snap-strictness)` without fallback values. Without these custom properties, `scroll-snap-type` falls back to `none`.

## Expected

```css
.ease-snap-x {
  scroll-snap-type: var(--ease-snap-axis, x) var(--ease-snap-strictness, proximity) !important;
}
```

## Demo

Open `demo.html` to see scroll snap not working without the custom properties defined.
