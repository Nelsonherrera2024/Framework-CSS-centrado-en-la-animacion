# Break Inside Avoid

Demonstrates the CSS break-inside property for preventing unwanted column and page breaks inside elements. Essential for magazine layouts, card grids, and print stylesheets.

## Features

- `break-inside: auto` — allows default break behavior (element may be split)
- `break-inside: avoid` — prevents the element from being split across columns or pages
- `break-inside: avoid-column` — avoid column breaks within the element
- `break-inside: avoid-page` — avoid page breaks (useful for print stylesheets)
- Side-by-side comparison of break behavior
- 3-column magazine layout demo with 6 article cards
- Dark mode and reduced-motion support

## Usage

```html
<!-- Card in a multi-column layout -->
<article class="ease-break-avoid">
  <h3>Article Title</h3>
  <p>Article content that should not be split across columns.</p>
</article>
```

In a grid of cards:

```css
.card {
  break-inside: avoid;
  -webkit-column-break-inside: avoid; /* older WebKit */
  page-break-inside: avoid; /* older browsers / print */
}
```

## Why is it useful?

Multi-column layouts and print stylesheets frequently encounter the problem of content being split across columns or pages:

- An article card header appears at the bottom of one column with its body in the next
- A pull-quote or figure gets split between pages in print
- A table row breaks awkwardly in the middle

The `break-inside: avoid` rule ensures elements stay cohesive, dramatically improving readability and visual polish in:

- Magazine and newspaper web layouts
- Product card grids in e-commerce
- FAQ accordions with expandable content
- Print-optimized stylesheets

## Browser Support

All modern browsers support `break-inside`. The legacy `-webkit-column-break-inside` and `page-break-inside` properties provide backward compatibility.

## Implementation Notes

This submission uses EaseMotion's CSS custom properties (`--ease-color-primary`, `--ease-space-6`, `--ease-radius-lg`, etc.) for consistent theming. Dark mode via `prefers-color-scheme: dark` and reduced motion via `prefers-reduced-motion` are fully supported.
