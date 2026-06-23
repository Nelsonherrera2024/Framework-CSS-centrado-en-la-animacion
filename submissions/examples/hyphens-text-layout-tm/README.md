# Hyphens Text Layout

Demonstrates CSS hyphens property for controlling word breaking and hyphenation in multi-column layouts, narrow containers, and multilingual content.

## Features

- `hyphens: none` — prevents all hyphenation
- `hyphens: auto` — browser applies dictionary-based hyphenation at soft wrap points
- `hyphens: manual` — only hyphenates at explicit `&shy;` characters in HTML
- Full RTL language support (Arabic, Hebrew)
- Multi-column magazine layout demonstration
- Dark mode and reduced-motion support

## Usage

```html
<p class="ease-hyphens-auto">
  Your paragraph text here — the browser will automatically
  insert hyphens at appropriate break points.
</p>
```

Or apply per-element:

```css
.article-text {
  hyphens: auto;
  -webkit-hyphens: auto;
  -moz-hyphens: auto;
}
```

## Why is it useful?

Hyphenation improves text readability in narrow columns by preventing excessive white space and orphans. It is especially important for:

- Multi-column magazine or newspaper layouts
- Dynamic content areas with constrained width
- RTL languages with long words (Arabic, Hebrew, German)
- Internationalized interfaces where horizontal space is precious

The `auto` value relies on the browser's built-in hyphenation dictionary, which covers most major languages out of the box.

## Implementation Notes

This submission uses EaseMotion's CSS custom properties (`--ease-color-primary`, `--ease-space-6`, `--ease-radius-lg`, etc.) to ensure the demo is fully themeable and consistent with the rest of the framework. It includes dark mode via `prefers-color-scheme: dark` and respects `prefers-reduced-motion` for accessibility.
