# Alert Dialog Modal Component

An interactive, responsive, and accessible CSS-animated Alert Dialog Modal component developed for **GSSoC 2026**.

## 🚀 Features

- **Interactive CSS Animation**: Smooth backdrop fade and modal spring/bounce scaling effect using advanced `cubic-bezier` timing variables.
- **CSS Custom Properties**: Fully themeable and customizable using CSS native variables (`:root`). Easily tweak background colors, text colors, button states, and animation speed.
- **Dark Mode Support**: Out-of-the-box system-driven dark mode configuration using `@media (prefers-color-scheme: dark)`.
- **Accessibility (A11y)**:
  - Uses standard attributes like `role="alertdialog"`, `aria-modal="true"`.
  - Accessible naming setup via `aria-labelledby` and `aria-describedby`.
  - Simple, robust JavaScript focus trapping and `Escape` key close listener.
- **Responsive Layout**: Adapts flawlessly to mobile viewports, stacking action buttons smoothly on micro-screens.
- **Performance Optimization**: Implements standard fallback configurations for `prefers-reduced-motion`.

## 📂 Submission File Layout

```bash
submissions/examples/alert-dialog-modal/
├── demo.html
├── style.css
└── README.md