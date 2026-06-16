## Overview

Demonstrates the CSS `attr()` function used within the `content` property of `::before` and `::after` pseudo-elements to dynamically display data attribute values without JavaScript. Examples include: badges showing `data-label` and `data-value`, tooltips reading from `data-tip`, progress bars displaying `data-progress`, link type indicators analyzing `href`, and buttons showing `data-key` keyboard shortcuts.

## Techniques

- **`attr(data-label)`** in `::before` content builds badge tooltips with label: value format
- **`attr(data-tip)`** in `::after` content creates hover tooltips on navigation links
- **`attr(data-progress)`** in `::after` displays percentage text centered on progress bars
- **`attr(data-key)`** in `::after` shows keyboard shortcut hints on buttons
- Link `::after` elements use literal strings alongside `attr()` to append type indicators
- All tooltips use `opacity` transitions on hover with `pointer-events: none` to avoid interference
- `prefers-reduced-motion` disables all hover transitions

## Usage

Open `demo.html` in any modern browser. Hover over badges, links, and buttons to see tooltips generated from data attributes. Progress bars display their percentage value from `data-progress`. All dynamic content is driven purely by CSS — no JavaScript required.
