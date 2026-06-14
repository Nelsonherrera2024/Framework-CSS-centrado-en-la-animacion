## What

A demonstration of the native HTML `<dialog>` element with three size variants (small, medium, large). Each dialog opens via `showModal()`, features styled `::backdrop`, entrance/exit animations, and scroll locking (`overflow: hidden` on `<body>`). Dialogs close via the built-in `close()` method or `<form method="dialog">`.

## How

- `.dialog` uses `dialog` pseudo-class selectors (`[open]`, `::backdrop`) for styling and animation.
- `@keyframes dialog-in` / `dialog-out` control entrance (scale + fade) and exit (fade-out).
- `::backdrop` gets a semi-transparent dark overlay with a blur effect.
- Scroll locking: when `showModal()` is called, the browser automatically prevents background scrolling.
- Three dialog sizes (`--sm`, `--md`, `--lg`) set via `max-width` and `padding` custom properties.
- JavaScript is minimal: `showModal()` on button click, backdrop click to close.
- `prefers-reduced-motion` disables all dialog animations for accessibility.

## Why

The `<dialog>` element provides built-in focus trapping, ARIA roles, and modal semantics that are hard to replicate with custom solutions. This example shows how to style it visually while keeping it fully accessible, with smooth animations that respect user motion preferences.
