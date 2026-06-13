# Sidebar Navigation — Issue #7524

## Overview

Collapsible sidebar navigation for dashboards and admin panels. Supports expanded/collapsed modes, nested submenus, active state highlighting, and mobile overlay.

## Features

- Fixed sidebar with smooth width transition (260px ↔ 64px)
- Collapsed mode: icon-only with expand on hover area
- Nested submenus with slide-toggle animation
- Active item: primary background tint + left border accent
- Badge support for notification counts
- Section headers for nav grouping
- Responsive: off-canvas overlay on mobile
- Logo + brand header with toggle button

## States

| State | Behavior |
|-------|----------|
| Expanded | Full width with labels, badges, submenus |
| Collapsed | Icon-only (64px) |
| Mobile | Off-canvas with dark overlay |
| Active | Primary tint + left accent border |
| Submenu | Slide-toggle open/close |

## Usage

```html
<aside class="ease-sidebar" id="sidebar">
  <div class="ease-sidebar-header">
    <div class="ease-sidebar-logo">E</div>
    <span class="ease-sidebar-brand">EaseMotion</span>
    <button class="ease-sidebar-toggle">◀</button>
  </div>
  <ul class="ease-sidebar-nav">
    <li class="ease-sidebar-section">Main</li>
    <li><a class="ease-sidebar-item active" href="#"><span class="ease-sidebar-item-icon">📊</span><span>Dashboard</span></a></li>
  </ul>
</aside>
<main class="ease-main-content"><!-- page content --></main>
```

## Files

- `demo.html` — Full demo with dashboard content, submenus, responsive behavior
- `style.css` — Sidebar, nav items, submenus, toggle, overlay, responsive
- `README.md` — This documentation
