# Subscription Seat Utilization Table

## Overview

A subscription seat utilization table for SaaS administration dashboards. Displays assigned, available, pending, and over-limit seat states across teams using semantic HTML table markup with compact utilization meters and visible text values — pure CSS, zero JavaScript.

## Features

* Semantic `<table>` markup with proper `<thead>`, `<tbody>`, scoped headers
* Compact utilization meter bars with percentage fills
* Four seat states: assigned, available, pending, over-limit
* Color-coded tags and meter fills (green, blue, yellow, red)
* Text labels on all status indicators so meaning is clear without color alone
* Staggered row fade-in entrance animation
* Dark theme with glassmorphism surface
* Responsive horizontal scroll on narrow screens
* Summary chips showing total counts per state
* Totals row at the bottom
* Reduced-motion accessibility support

## Use Cases

* SaaS admin dashboards
* Team subscription management
* License allocation tracking
* Billing and usage reporting

## Example Usage

```html
<table>
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
      <td>Engineering</td>
      <td>25</td>
      <td>
        <div class="seat-meter">
          <div class="meter-track">
            <div class="meter-fill green" style="width: 80%"></div>
          </div>
          <span class="meter-text">20/25</span>
        </div>
      </td>
      <td><span class="seat-tag assigned">Assigned</span></td>
    </tr>
  </tbody>
</table>
```

## Seat States

| State | Color | Tag Text | Description |
|-------|-------|----------|-------------|
| Assigned | Green (#22c55e) | Assigned | Seats allocated and in use |
| Available | Blue (#3b82f6) | Available | Seats purchased but unassigned |
| Pending | Yellow (#eab308) | Pending | Invitations sent, not yet accepted |
| Over Limit | Red (#ef4444) | Over Limit | Usage exceeds purchased seats |

## Accessibility

Status is conveyed through both color and text label. The component respects `prefers-reduced-motion` to disable all animations.

## Browser Compatibility

Compatible with modern browsers supporting:

* CSS Animations
* CSS Transforms
* CSS Keyframes
* CSS Backdrop Filter
* Media Queries

## Acceptance Criteria

* Uses CSS keyframes.
* Smooth and reusable animation.
* Lightweight implementation.
* Accessible design.
* Easy integration into existing projects.
* Consistent with EaseMotion CSS principles.
