# Subscription Seat Utilization Table

A dark-themed, glassmorphism-styled table component for displaying subscription seat utilization across teams.

## Overview

This component provides a clear overview of how subscription seats are allocated across teams. It includes a summary row with key metrics, a detailed table with per-team utilization data, and visual indicators for seat status.

## Features

- **Dark glassmorphism design** — translucent backdrop blur on a `#0a0e17` background
- **Summary chips** — assigned / available / pending / over-limit counts with colored indicator dots
- **Meter bars** — 120×8px progress bars with green, blue, yellow, and red fills
- **Status tags** — color-coded pill badges for each seat state
- **Sticky table header** — remains visible on scroll
- **Row hover** — subtle highlight on hover
- **Staggered fade-in animation** — rows animate in sequentially on load
- **Horizontal scroll** — table scrolls on narrow viewports
- **Reduced-motion support** — respects `prefers-reduced-motion`

## Example Usage

```html
<table class="seat-table">
  <thead>
    <tr>
      <th>Team</th>
      <th>Total Seats</th>
      <th>Utilization</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <div class="team-cell">
          <span class="team-icon" style="background:#4a8cff;">E</span>
          Engineering
        </div>
      </td>
      <td>25</td>
      <td>
        <div class="meter">
          <div class="meter-bar">
            <div class="meter-fill meter-fill--green" style="width:80%"></div>
          </div>
          <span class="meter-text">20/25</span>
        </div>
      </td>
      <td><span class="tag tag--assigned">Assigned</span></td>
    </tr>
  </tbody>
</table>
```

## Seat States

| State       | Dot Color | Tag Class         | Tag Color |
|-------------|-----------|-------------------|-----------|
| Assigned    | Green     | `tag--assigned`   | Green     |
| Available   | Blue      | `tag--available`  | Blue      |
| Pending     | Yellow    | `tag--pending`    | Yellow    |
| Over Limit  | Red       | `tag--over`       | Red       |

## Accessibility

- Semantic `<table>` with `<thead>`, `<tbody>`, and `<tfoot>`
- Sufficient color contrast on all text and UI elements
- `prefers-reduced-motion` media query disables animations
- Keyboard-navigable (native table semantics)

## Browser Compatibility

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Acceptance Criteria

- Summary row accurately reflects table data
- Meter bars reflect utilization percentage
- Status tags match seat states
- Table is horizontally scrollable on narrow screens
- Sticky header functions correctly
- All colors and styling use `style.css`
- No JavaScript required

Fixes #19154
