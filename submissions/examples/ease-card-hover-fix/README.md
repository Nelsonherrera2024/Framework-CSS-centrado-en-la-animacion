# ease-card-hover Grid Fix

## Problem
The `ease-card-hover` class was not triggering hover animations
when cards were placed inside a CSS grid layout.

## Root Cause
Missing `transition` and `will-change` properties on `.ease-card`
base class. Without these, the `:hover` transform had no animation.

## Fix
Added to `.ease-card`:
- `transition: transform 0.3s ease, box-shadow 0.3s ease`
- `will-change: transform`

Added to `.ease-card-hover:hover`:
- `transform: translateY(-8px) scale(1.02)`
- `box-shadow` and `border-color` transitions

## Usage
```html
<div class="ease-card-grid">
  <div class="ease-card ease-card-hover">...</div>
</div>
```

## Files
- `style.css` — fix + component styles
- `demo.html` — live working demo