# Better Visibility in Light Mode (`Better-visibility-in-light-mode`)

## What does this do?
Resolves poor contrast and visibility issues in the documentation interface when toggling the light mode theme:
1. Fixes the active navigation tab (e.g. "Buttons") in the top nav by switching static dark-mode colors to theme-aware custom properties (`var(--nav-link-active-text)`, `var(--nav-link-active-bg)`, `var(--nav-link-color)`, `var(--header-bg)`, `var(--border-color)`).
2. Fixes `.docs-h3` heading elements by changing hardcoded white `color: rgba(255, 255, 255, 0.85)` to the theme variable `var(--heading-color)`.

## How is it used?
Apply theme variables to the navigation elements and headings in the documentation stylesheet (`docs/docs.css` and `docs/demo.html`):

```css
/* Navigation link fix */
.demo-nav {
  background: var(--header-bg);
  border-bottom: 1px solid var(--border-color);
}

.demo-nav-links a {
  color: var(--nav-link-color);
}

.demo-nav-links a:hover,
.demo-nav-links a.active {
  color: var(--nav-link-active-text);
  background: var(--nav-link-active-bg);
}

/* docs-h3 fix */
.docs-h3 {
  color: var(--heading-color);
}
```

## Why is it useful?
It aligns with EaseMotion's focus on premium aesthetics and full accessibility, ensuring the documentation stays perfectly readable and user-friendly in both light and dark modes.