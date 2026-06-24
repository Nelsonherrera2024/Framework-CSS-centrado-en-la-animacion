# Incident Communication Channel Roster

## Overview

An incident communication channel roster for operations teams listing primary, backup, degraded, and unavailable communication channels with owner and response details — pure CSS, zero JavaScript.

## Features

* Four channel states: primary, backup, degraded, unavailable
* Color-coded left accent bar and status badges (green, blue, yellow, red)
* Text labels on all status badges so meaning is clear without color alone
* Channel icon, name, and owner information
* Response time details for each channel
* Hover slide effect for interactive feel
* Staggered slide-in entrance animation
* Dark theme with glassmorphism cards
* Fully responsive layout
* Reduced-motion accessibility support

## Channel States

| State | Color | Badge Text | Description |
|-------|-------|------------|-------------|
| Primary | Green (#22c55e) | Primary | Fully operational, first-line channel |
| Backup | Blue (#3b82f6) | Backup | Operational but secondary priority |
| Degraded | Yellow (#eab308) | Degraded | Functioning with reduced capacity |
| Unavailable | Red (#ef4444) | Unavailable | Currently not operational |

## Realistic Entries

- **Status Page** (primary) — hosted status dashboard with 1min response
- **Slack Incident Channel** (primary) — real-time chat with 30s response
- **Conference Bridge** (backup) — dial-in for voice coordination with 2min response
- **Email Updates** (backup) — mass notification distribution with 5min response
- **SMS Alert Gateway** (degraded) — text message relay with 10min response
- **PagerDuty Integration** (unavailable) — automated paging currently down

## Example Usage

```html
<div class="channel-card primary">
  <div class="channel-icon">📡</div>
  <div class="channel-info">
    <div class="channel-name">Status Page</div>
    <div class="channel-owner">Infrastructure Team</div>
  </div>
  <div class="channel-meta">
    <span class="channel-status primary">Primary</span>
    <div class="channel-response">ETA: <strong>1 min</strong></div>
  </div>
</div>
```

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
