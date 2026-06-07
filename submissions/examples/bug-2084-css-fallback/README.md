# Bug Fix: CSS Custom Property Fallback Consistency

## What does this do?

Fixes three CSS custom property inconsistencies in the EaseMotion CSS framework:

1. **`core/variables.css`**: Removed duplicate CSS variable declarations. `--ease-glass-bg`, `--ease-glass-border`, and `--ease-color-*-alpha` tokens now use a single clean `color-mix()` declaration instead of the redundant fallback + override pattern.

2. **`components/cards.css`**: Fixed `.ease-card` background-color fallback from `var(--ease-color-surface, #141e33)` (hardcoded dark value) to `var(--ease-color-surface, #ffffff)` to correctly match the light-mode default defined in `variables.css`.

3. **`components/navbar.css`**: Replaced hardcoded `rgba(255, 255, 255, 0.18)` and `rgba(255, 255, 255, 0.24)` with CSS variable tokens `var(--ease-glass-bg)` and `var(--ease-glass-border)`. The glass navbar now correctly adapts to dark mode and theme changes.

## How is it used?

Apply the CSS classes to elements. The fixes ensure fallbacks and variable references work correctly:

```html
<!-- Card with correct fallback -->
<div class="ease-card">Content</div>

<!-- Glass navbar using CSS variable tokens -->
<nav class="ease-navbar-glass">Brand</nav>
```

## Why is this useful?

CSS frameworks need a single source of truth for design tokens. When components hardcode fallback values that differ from token defaults, or when variables are declared twice, subtle visual bugs emerge:

- **Consistency**: All fallbacks now match token defaults in `variables.css`
- **Dark mode correctness**: Components using `--ease-glass-*` tokens properly adapt to `prefers-color-scheme: dark`
- **Maintainability**: No duplicate variable declarations to cause confusion
- **Predictability**: Overriding a design token in `:root` correctly affects all components

## Files changed (core)

| File | Change |
|------|--------|
| `core/variables.css` | Removed duplicate `--ease-glass-bg`, `--ease-glass-border`, `--ease-color-*-alpha` declarations |
| `components/cards.css` | Fixed `.ease-card` fallback from `#141e33` to `#ffffff` |
| `components/navbar.css` | Replaced hardcoded `rgba()` with `var(--ease-glass-bg)` and `var(--ease-glass-border)` |

---

**Issue:** [#2084](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/2084)  
**Labels:** `type:bug`, `level:beginner`, `GSSoC-26`