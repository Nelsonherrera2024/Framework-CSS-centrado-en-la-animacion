# Active Navigation Highlighting

## What does this do?

Automatically highlights the navigation item corresponding to the section currently visible on screen using a left border indicator.

## How is it used?

```html
<nav class="docs-nav">
  <a href="#getting-started" class="active">Getting Started</a>
  <a href="#utilities">Utilities</a>
  <a href="#components">Components</a>
</nav>
```

The active class is applied automatically as users scroll through sections. The active link features:
- `font-weight: 600` for emphasis
- `border-left: 3px solid currentColor` for visual indicator
- `padding-left: 8px` to accommodate the border

## Why is it useful?

This improves documentation usability by helping users understand their current location within long pages. The left border indicator provides clear visual feedback and makes navigation easier to follow, especially in sidebar navigation layouts.