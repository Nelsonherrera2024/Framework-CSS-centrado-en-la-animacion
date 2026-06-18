# KBD Dark Mode Support

Adds `[data-theme="dark"]` dark mode support to the `kbd.css` component.

## What Changed

- Added `[data-theme="dark"] .ease-kbd` block inside the `@layer easemotion-components` wrapper in `components/kbd.css`
- Flips `color`, `background`, `border-color`, and `box-shadow` to dark-appropriate values

## Usage

```html
<kbd class="ease-kbd">Ctrl</kbd>
```

Switch to dark mode:
```html
<html data-theme="dark">
  <kbd class="ease-kbd">Ctrl</kbd>
</html>
```

## Browser Support

All modern browsers. CSS custom properties and attribute selectors are widely supported.
