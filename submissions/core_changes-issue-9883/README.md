# Core Changes — Issue #9883: CSS Containment Utility Classes

## Overview

Add CSS containment utility classes to EaseMotion CSS. These classes leverage `content-visibility` and `contain` properties to optimize rendering performance by telling the browser which subtrees are independent, enabling skipped layout/paint calculations for off-screen content.

## Problem

EaseMotion CSS provides extensive animation and layout utilities but has no utility classes for CSS containment. Developers building long-scrolling pages with many sections or dynamic widgets must write custom CSS to enable rendering optimizations like `content-visibility: auto` and `contain: strict`.

## Solution

Added the following utility classes to be merged into `core/utilities.css`:

### Content Visibility
- `ease-content-visibility-auto` — automatically skips rendering of off-screen elements
- `ease-content-visibility-hidden` — hides content and skips rendering (unlike `display: none`, preserves rendering state)
- `ease-content-visibility-visible` — default behavior, always renders

### Containment
- `ease-contain-none` — no containment
- `ease-contain-strict` — `contain: strict` (layout + paint + size + style)
- `ease-contain-content` — `contain: content` (layout + paint + style)
- `ease-contain-layout` — `contain: layout` (isolates layout)
- `ease-contain-paint` — `contain: paint` (clips paint to bounds)
- `ease-contain-size` — `contain: size` (element size computed without children)
- `ease-contain-style` — `contain: style` (counters/quotes scoped)
- `ease-contain-layout-paint` — `contain: layout paint` (common performance combo)

All classes use `!important` to follow the existing convention.

## Demo

See `demo.html` for:
- A side-by-side comparison showing rendering performance improvement with `content-visibility: auto`
- Practical examples of containment on card grids and dynamic widgets
- DevTools performance panel recommendations

## Affected Files

- `core/utilities.css` — new block to be added in the utilities section

## Labels

- type:feature
- level:intermediate
- GSSoC-26
