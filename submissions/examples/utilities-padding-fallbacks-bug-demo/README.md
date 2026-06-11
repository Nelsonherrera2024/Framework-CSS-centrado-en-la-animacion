# Utilities: Padding classes missing var() fallback values

**Issue:** #5954
**File:** `core/utilities.css`

## Problem

Lines 141-148 use `var(--ease-space-*)` without fallback values for padding utility classes.

## Expected

Every padding utility should include a fallback, e.g. `padding: var(--ease-space-1, 0.25rem) !important;`.

## Demo

Open `demo.html` to see padding utilities resolve to `initial` without the base layer.
