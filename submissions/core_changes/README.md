# .ease-card-info Dark Mode Fix

This submission demonstrates and fixes a bug where `.ease-card-info` text color is unreadable in dark mode (Issue **#14078**).

## The Bug

`.ease-card-info` sets `color: var(--ease-color-primary-dark, #4b44cc)` with no dark-mode override. In dark mode (~#0f172a bg), the dark purple text renders at ~2.3:1 contrast — failing WCAG AA.

## The Fix

```css
@media (prefers-color-scheme: dark) {
  .ease-card-info,
  .ease-dark .ease-card-info {
    color: var(--ease-color-primary-light, #a09af8);
  }
}
```

Switches to `--ease-color-primary-light` (#a09af8) in dark mode, achieving ~7.1:1 contrast (WCAG AA ✅).

## Files

- `demo.html` — Side-by-side comparison of broken vs fixed card with dark mode + fix toggles
- `style.css` — The CSS fix, demo styling, contrast table
- `README.md` — This documentation
