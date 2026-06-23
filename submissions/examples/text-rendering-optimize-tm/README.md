# Text Rendering Optimize

Demonstrates the CSS text-rendering property for controlling the browser's text rendering strategy, balancing rendering speed against visual quality and legibility.

## Features

- `text-rendering: auto` — browser's default heuristic balance
- `text-rendering: optimizeSpeed` — prioritize rendering performance
- `text-rendering: optimizeLegibility` — prioritize readability (enables kerning and ligatures)
- `text-rendering: geometricPrecision` — exact geometric rendering for SVG and responsive layouts
- Side-by-side rendering mode comparison
- Performance vs quality tradeoff visualization
- Dark mode support

## Usage

```html
<!-- Fast rendering for data displays -->
<p class="ease-text-optimizespeed">Stock price: $1,234.56</p>

<!-- Readable body text in design systems -->
<p class="ease-text-optimizelegibility">
  This paragraph uses kerning and ligatures for optimal readability.
</p>
```

Apply globally for text-heavy apps:

```css
body {
  text-rendering: optimizeLegibility;
}
```

## Why is it useful?

Text rendering in browsers involves tradeoffs between:

- **Speed**: faster rendering improves scroll performance and reduces CPU load
- **Legibility**: kerning, ligatures, and subpixel rendering improve readability
- **Precision**: geometric accuracy matters for responsive SVG text and logos

Different contexts benefit from different priorities:

- Real-time data (tickers, scores): `optimizeSpeed`
- Body text, long-form content: `optimizeLegibility`
- SVG logos and icons: `geometricPrecision`
- General UI: `auto` (browser's default)

## Browser Support

All major browsers support text-rendering. The degree to which each mode affects rendering varies by browser, OS, and font.

## Implementation Notes

This submission uses EaseMotion's CSS custom properties for consistent theming. Dark mode via `prefers-color-scheme: dark` and reduced motion via `prefers-reduced-motion` are fully supported.
