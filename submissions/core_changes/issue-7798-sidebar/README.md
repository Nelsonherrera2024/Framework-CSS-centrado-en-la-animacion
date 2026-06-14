# Sidebar Navigation Component

## 1. What does this do?
Adds a vertical sidebar navigation component with collapsible mode and mobile slide-in animation for dashboards, admin panels, and documentation sites.

## 2. How is it used?

```html
<!-- Sidebar overlay for mobile -->
<div class="ease-sidebar-overlay"></div>

<!-- Toggle button -->
<button class="ease-sidebar-toggle">☰</button>

<!-- Sidebar -->
<aside class="ease-sidebar">
  <div class="ease-sidebar-header">Dashboard</div>
  <nav class="ease-sidebar-nav">
    <a href="#" class="ease-sidebar-item active">🏠 Home</a>
    <a href="#" class="ease-sidebar-item">📊 Analytics</a>
    <a href="#" class="ease-sidebar-item">👥 Users</a>
  </nav>
</aside>
```

## 3. Why is it useful?
EaseMotion CSS had `.ease-navbar-glass` for horizontal navigation but no sidebar component for vertical/dashboard navigation. Sidebars are common in admin panels, dashboards, and documentation sites. This fills that gap with a mobile-responsive off-canvas sidebar.

## Issue
Fixes #7798