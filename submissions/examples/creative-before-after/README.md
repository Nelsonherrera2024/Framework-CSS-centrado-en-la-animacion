## Overview

Showcases five distinct decorative techniques implemented entirely with `::before` and `::after` pseudo-elements, requiring no additional markup beyond the host element. Techniques include: ribbon overlays with fold tails, large curly quote marks on blockquotes, decorative top/corner/bottom borders, directional tooltips with arrow pointers, and semi-transparent gradient overlays on cards.

## Techniques

- **Ribbon overlays** use `::before` for the ribbon bar and `::after` for the triangular fold shadow
- **Quote marks** use `::before` with a `\201C` unicode content value, oversized and positioned
- **Decorative borders** use `::before` and `::after` with absolute positioning and gradient backgrounds
- **Tooltips** use `::after` for the text bubble and `::before` for the directional arrow, with `attr(data-tooltip)` for content and hover-state opacity transitions
- **Gradient overlays** use `::after` with `inset: 0` and negative `z-index` behind the content layer
- `prefers-reduced-motion` disables tooltip transitions and background animations

## Usage

Open `demo.html` in any modern browser. Hover over tooltip buttons to see directional tooltips. Observe the ribbon fold tails, corner border accents, and gradient overlays — all created without extra HTML elements. The page is fully self-contained.
