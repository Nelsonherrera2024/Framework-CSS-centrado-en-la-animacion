# Tooltips: CSS variables defined in :root inside @layer (wrong layer)

**Issue:** #5948
**File:** `components/tooltips.css`

## Problem

Lines 3-12 define `--ease-tooltip-*` custom properties in `:root` inside `@layer easemotion-components`. CSS custom properties inside a `@layer` have lower cascade priority than unlayered ones. These should be in the `easemotion-base` layer (like other design tokens in `variables.css`).

## Expected

Move tooltip token definitions to the base layer, or remove the `:root` block from inside the component layer.

## Demo

Open `demo.html` to see the tooltip and its layer-related CSS issue.
