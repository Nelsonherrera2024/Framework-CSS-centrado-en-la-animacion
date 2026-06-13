# CSS Bundle Optimization Report

**Issue:** #7415 — Audit & optimize CSS bundle (unused keyframes, redundant vendor prefixes, duplicate rules)

**Author:** Pcmhacker-piro

## Summary

Audited the full CSS bundle (`easemotion.css` + all core + components files) for unused keyframes, redundant vendor prefixes, duplicate rule blocks, and hardcoded timing values.

## Findings

### 1. Unused `@keyframes ease-kf-morph-card`
- **File:** `core/animations.css` (line 626)
- Defined as `@keyframes ease-kf-morph-card` but **never referenced** by any `animation` or `animation-name` in any file.
- The class `.ease-hover-morph-card` uses direct `transition` on `border-radius`/`transform`, not this keyframe.
- **Action:** Remove the block (dead code).

### 2. Keyframe Name Mismatch — `.ease-zoom-out` is broken
- **File:** `core/animations.css` (line 650)
- `@keyframes` named `ease-zoom-out` (no `-kf-` infix) but class `.ease-zoom-out` references `ease-kf-zoom-out`
- The names don't match → **`.ease-zoom-out` does not animate** when using the main bundle.
- The sub-module `easemotion/zoom.css` has the correct name `ease-kf-zoom-out`.
- **Action:** Rename to `ease-kf-zoom-out`.

### 3. Redundant `-webkit-scroll-snap-type`
- **File:** `core/utilities.css` (lines 232, 237)
- `-webkit-scroll-snap-type` is redundant — unprefixed `scroll-snap-type` is supported since Safari 15 (2021), Chrome 69 (2018), Firefox 68 (2019). Global support is ~97.5%.
- **Action:** Remove both prefixed declarations.

### 4. Hardcoded `cubic-bezier` values
- `core/animations.css:925` — `.ease-ping` uses `cubic-bezier(0, 0, 0.2, 1)` instead of `var(--ease-ease-out)`
- `components/badges.css:61` — `.ease-badge-pulse::after` uses `cubic-bezier(0, 0, 0.2, 1)` instead of `var(--ease-ease-out)`
- `--ease-ease-out` is already defined in `core/variables.css` as the same curve.
- **Action:** Replace with `var(--ease-ease-out)`.

### 5. Duplicate Masonry Rules (structural, not a bug)
- `components/masonry.css` has repeated `> * { break-inside: avoid; ... }` blocks across all column variants.
- This is a structural pattern rather than a bug; could be refactored with a common class or CSS `:where()` in a future iteration.

## Bundle Size Comparison

| Metric | Before | After | Change |
|--------|--------|-------|--------|
| Minified bundle (`easemotion.min.css`) | 102,475 B | 102,160 B | **−315 B (−0.3%)** |
| `@keyframes` definitions | 58 | 57 | **−1** (removed dead code) |
| `-webkit-` prefixed declarations | 40 | 38 | **−2** |
| Hardcoded `cubic-bezier()` values | 2 | 0 | **−2** (now using CSS variables) |

## Changed Files

| File | Change |
|------|--------|
| `core/animations.css` | Removed unused `@keyframes ease-kf-morph-card`; renamed `@keyframes ease-zoom-out` → `ease-kf-zoom-out`; replaced cubic-bezier with `var(--ease-ease-out)` |
| `core/utilities.css` | Removed `-webkit-scroll-snap-type` from `.ease-snap-x` and `.ease-snap-y` |
| `components/badges.css` | Replaced `cubic-bezier(0, 0, 0.2, 1)` with `var(--ease-ease-out)` |
| `easemotion.min.css` | Regenerated via `npm run build` |

## Testing

- `npm run build` completes without errors
- All keyframes still resolve correctly (the removed keyframe had zero references)
- `.ease-zoom-out` now correctly references `ease-kf-zoom-out` (name match)
- Tested core animations for visual regression
