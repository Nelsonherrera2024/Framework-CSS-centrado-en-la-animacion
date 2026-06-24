# Procurement Bid Comparison Table

A dark-themed, glassmorphism-styled HTML/CSS component for displaying and evaluating vendor bids in a procurement workflow.

## Overview

This component presents bid data in a clean, accessible table with visual indicators for price, delivery timelines, warranty terms, compliance status, evaluation scores, and award state.

## Features

- **Dark theme** (`#0a0e17` base) with glassmorphism table wrapper (`backdrop-filter: blur`)
- **Semantic table** markup with `<thead>`, `<tbody>`, `<th>`, `<td>`
- **Row hover** highlights and staggered `fadeInRow` CSS animation
- **Vendor cells** with coloured initial icons and subtitle metadata
- **State tags** with distinct colours for bid status
- **Score bars** (64px fixed track) with high/mid/low fills
- **Indicator icons** — check, warning, cross — for compliance
- **Responsive** horizontal scroll on narrow viewports; `prefers-reduced-motion` respected

## Bid States

| Tag            | Colour  | Meaning                           |
|----------------|---------|-----------------------------------|
| Best Value     | Green   | Most advantageous bid             |
| Review         | Yellow  | Requires further evaluation       |
| Disqualified   | Red     | Does not meet mandatory criteria  |

## Comparison Criteria

| Column       | Description                                   |
|--------------|-----------------------------------------------|
| Vendor       | Name, category, and colour-coded initial icon |
| Price        | Total bid amount in INR (&#x20B9;)              |
| Delivery     | Estimated delivery timeline                   |
| Warranty     | Warranty / support period                     |
| Compliance   | Compliance check with visual indicator        |
| Score        | Numerical score (0&ndash;100) with fill bar   |
| Status       | Current bid state tag                         |

## Example Usage

Include the stylesheet and wrap the table markup inside a `.bid-wrapper` container:

```html
<link rel="stylesheet" href="style.css" />

<div class="bid-wrapper">
  <header class="bid-header">...</header>
  <div class="table-container">
    <table>...</table>
  </div>
</div>
```

## Accessibility

- Semantic table structure with `<th>` for column headers
- Sufficient colour contrast against the dark background
- `prefers-reduced-motion` media query disables animations
- Screen-reader-friendly text labels accompany all icon indicators

## Browser Compatibility

- Chrome / Edge 90+
- Firefox 85+
- Safari 14+
- iOS Safari 14+

## Acceptance Criteria

- [x] Dark theme applied consistently
- [x] Glassmorphism blur effect present on table wrapper
- [x] Vendor rows display initials, name, and subtitle
- [x] Compliance indicators use check / warn / cross icons
- [x] Score bars render at correct widths with appropriate colours
- [x] State tags use green / yellow / red colour scheme
- [x] Rows animate in with staggered fade-in
- [x] Table scrolls horizontally on small screens
- [x] Animations disabled when `prefers-reduced-motion` is active
- [x] No JavaScript dependency

---

Fixes #19162
