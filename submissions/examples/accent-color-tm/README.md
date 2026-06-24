# Accent Color Utilities (`accent-color-tm`)

A robust, token-driven utility set for leveraging the CSS `accent-color` property. This allows instant theming of native form controls (checkboxes, radio buttons, ranges, and progress bars) without the need for complex custom CSS replacements.

## 🚀 Features

- **Token-Driven Design**: Uses CSS variables (`--ease-color-*`) to seamlessly integrate with EaseMotion's broader design system.
- **Dark Mode Support**: Colors automatically adapt when `@media (prefers-color-scheme: dark)` is triggered, ensuring legibility and contrast.
- **Reduced Motion Support**: Included hover effects on the demo cards gracefully degrade for users with motion sensitivity.
- **Extensible**: Includes a `.ease-accent-custom` class that accepts an inline CSS variable (`--ease-accent-custom`) for on-the-fly component overrides.

## 🛠️ Usage

Open `demo.html` in your browser. All code is contained within `style.css`.

### Available Utilities

```html
<!-- Primary Theme -->
<div class="ease-accent-primary">
  <input type="checkbox" checked>
</div>

<!-- Extensible Custom Variable Override -->
<div class="ease-accent-custom" style="--ease-accent-custom: #8b5cf6;">
  <input type="radio" checked>
</div>
