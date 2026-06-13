# Animated Tooltip — Issue #7523

## Overview

CSS-driven tooltip with 4 positions, fade+slide animation, arrow indicators, and light/dark variants. Triggered on hover.

## Positions

| Direction | Class | Arrow | Slide |
|-----------|-------|-------|-------|
| Top | `.ease-tooltip-top` | Downward | Up |
| Bottom | `.ease-tooltip-bottom` | Upward | Down |
| Left | `.ease-tooltip-left` | Right | Left |
| Right | `.ease-tooltip-right` | Left | Right |

## Variants

| Variant | Class | Style |
|---------|-------|-------|
| Default | — | Dark background (`#1e293b`) |
| Light | `.ease-tooltip-light` | White + border + shadow |
| Dark | `.ease-tooltip-dark` | Darker (`#0f172a`) |

## Features

- Fade + slide animation on hover
- Arrow pointer pointing to trigger
- Rich HTML content support
- White-space handling
- No JavaScript required

## Usage

```html
<div class="ease-tooltip ease-tooltip-top">
  <span>Hover me</span>
  <div class="ease-tooltip-content">Tooltip text</div>
</div>
```

## Files

- `demo.html` — Demo grid with 4 positions, rich content, light/dark variants
- `style.css` — Tooltip positioning, animations, arrows, variants
- `README.md` — This documentation
