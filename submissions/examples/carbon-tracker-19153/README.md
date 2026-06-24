# Carbon Emissions Tracker

A lightweight, single-page emissions dashboard built with semantic HTML and hand-crafted CSS. No JavaScript or frameworks required.

## Overview

Carbon Tracker displays organizational carbon metrics through summary figures, emission-source progress bars, and color-coded site status cards. The design uses a dark green palette with frosted-glass card surfaces and staggered entrance animations.

## Features

- **Summary cards** — current emissions, annual target, and reduction percentage
- **Progress bars** — per-source emission levels with colour thresholds (good / warn / danger)
- **State cards** — per-site compliance status with `border-left` colour accent
- **Drift-in animation** — staggered `opacity` + `translateY` keyframe on each card row
- **Responsive layout** — columns stack at 700px breakpoint
- **Reduced motion** — respects `prefers-reduced-motion` by disabling animations per class
- **CSS custom properties** — `--bar-width` drives progress fill via `::after` pseudo-element

## Example Usage

Open `demo.html` in any modern browser. No build step or server required.

```html
<div class="track-card">
  <div class="bar-row">
    <span class="bar-label">Energy Consumption</span>
    <span class="bar-value">820 tCO₂</span>
  </div>
  <div class="bar-track" style="--bar-width: 68%;"></div>
</div>
```

## State Indicators

| Status     | Colour   | Description                        |
| ---------- | -------- | ---------------------------------- |
| On Track   | Green    | Below or meeting emission targets  |
| Attention  | Amber    | At threshold, no net change        |
| Off Track  | Red      | Exceeding emission targets         |

## Accessibility

- Semantic HTML5 elements (`header`, `section`, `p`, `span`)
- Sufficient colour contrast against `#0b1a14` background
- `prefers-reduced-motion` media query disables animations
- Tabular-nums variant for numerical alignment
- Relative units (`rem`) for scalable typography

## Browser Compatibility

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Opera 76+
- Supports `backdrop-filter`, CSS Grid / Flexbox, `::after` pseudo-elements, CSS custom properties

## Acceptance Criteria

- [x] HTML5 reset includes article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section
- [x] `@import` loads Outfit from Google Fonts
- [x] Body background `#0b1a14`, colour `#e2f0e8`, font stack includes Outfit
- [x] Cards use `rgba(20, 45, 35, 0.5)`, `backdrop-filter: blur(12px)`, `border: 1px solid rgba(255,255,255,0.05)`
- [x] Progress bars: 12px height, 4px radius, `rgba(255,255,255,0.05)` track, `::after` fill
- [x] State cards use `border-left: 3px solid` for accent colour
- [x] `driftIn` keyframe (`opacity` + `translateY(24px)`), staggered `animation-delay` on `nth-child`
- [x] Badge tags: `letter-spacing: 0.08em`, `font-size: 0.65rem`
- [x] Reduced motion: per-class selectors, not universal `*`
- [x] Responsive at 700px
- [x] Legend uses `inline-flex` with `flex-wrap`

Fixes #19153
