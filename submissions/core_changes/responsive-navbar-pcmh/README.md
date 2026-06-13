# Responsive Navbar — Issue #7520

## Overview

Sticky, responsive navbar with logo, nav links, dropdown submenus, CTA button, and mobile hamburger toggle.

## Features

- Sticky positioning on scroll
- Horizontal nav with logo + brand
- Dropdown submenus on hover / focus-within
- CTA button with primary color
- Hamburger toggle on mobile (<768px)
- Slide-in mobile menu
- Clean transition effects

## States

| State | Behavior |
|-------|----------|
| Desktop | Horizontal nav with dropdowns |
| Mobile | Hamburger toggle, vertical menu |
| Dropdown hover | Fade + slide-down submenu |
| Nav link hover | Background tint |

## Usage

```html
<nav class="ease-navbar">
  <a href="#" class="ease-navbar-brand">Brand</a>
  <button class="ease-navbar-toggle">☰</button>
  <ul class="ease-navbar-nav">
    <li><a href="#">Home</a></li>
    <li class="ease-navbar-dropdown">
      <a href="#">Services ▾</a>
      <div class="ease-navbar-dropdown-content">
        <a href="#">Web Design</a>
      </div>
    </li>
    <li><a href="#" class="ease-navbar-cta">Get Started</a></li>
  </ul>
</nav>
```

## Files

- `demo.html` — Navbar with dropdown, CTA, hero section
- `style.css` — Navbar layout, dropdown, responsive breakpoint
- `README.md` — This documentation
