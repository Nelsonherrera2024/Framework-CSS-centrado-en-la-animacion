# Core Changes — Issue #9882: Source Map Generation for Minified CSS

## Overview

Enable source map generation alongside `easemotion.min.css` so developers can debug production CSS in DevTools with full source file references.

## Problem

The current build produces only `easemotion.min.css` with no `.map` file. Browser DevTools show minified single-line CSS — impossible to trace which source file (`core/animations.css`, `components/buttons.css`, etc.) contains a given rule.

## Solution

### `build-minified-css.mjs`
- Replace the custom regex-based `minifyCss` with `csso`'s minify + source map support
- Call `minify(css, { filename: "easemotion.css", sourceMap: true })`
- Append `/*# sourceMappingURL=easemotion.min.css.map */` to the minified CSS
- Write `easemotion.min.css.map` alongside the CSS bundle

### `validate-bundle.mjs`
- Read and restore the `.map` file alongside `.css` during staleness checks
- Validate source map integrity: `version === 3`, non-empty `sources`, non-empty `mappings`

### `validate-pack.mjs`
- Add `easemotion.min.css.map` to the `required` files list

## Affected Files
- `scripts/build-minified-css.mjs`
- `scripts/validate-bundle.mjs`
- `scripts/validate-pack.mjs`

## Labels
- type:feature
- type:devops
- level:intermediate
- GSSoC-26
