# Overscroll Behavior

Demonstrates the CSS overscroll-behavior property for controlling scroll chaining and pull-to-refresh gestures in nested scroll containers.

## Features

- `overscroll-behavior: auto` — default, allows scroll to propagate to parent (scroll chaining)
- `overscroll-behavior: contain` — prevents scroll chaining, contains bounce effect within the element
- `overscroll-behavior: none` — same as contain but also suppresses pull-to-refresh on mobile
- Side-by-side comparison demos
- Mobile pull-to-refresh suppression demo
- Dark mode support

## Usage

```html
<div class="ease-overscroll-contain">
  <!-- Scrollable content — scrolling stops here, not in the parent -->
</div>
```

Apply globally:

```css
body {
  overscroll-behavior: contain;
}
```

## Why is it useful?

Scroll chaining is the default browser behavior where scrolling past a scroll container's boundary propagates the scroll action to the nearest scrollable ancestor. This is often undesirable in:

- Nested scrollable areas (maps, feeds, chat threads)
- Single-page applications where body scroll should be locked when a modal is open
- Games and interactive canvases that manage their own scroll
- Preventing accidental pull-to-refresh on non-refreshable pages

## Implementation Notes

This submission uses EaseMotion's CSS custom properties (`--ease-color-primary`, `--ease-space-6`, `--ease-radius-lg`, etc.) for consistent theming. Dark mode via `prefers-color-scheme: dark` and reduced motion via `prefers-reduced-motion` are fully supported.
