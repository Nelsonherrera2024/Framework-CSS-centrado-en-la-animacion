# glass-card

A glassmorphism card with animated glow border for EaseMotion CSS.

## Usage

```html
<div class="glass-card">
  <h3 class="glass-card-title">Card Title</h3>
  <p class="glass-card-body">Some content here.</p>
  <div class="glass-card-footer">
    <button class="glass-card-btn">Action</button>
  </div>
</div>
```

## Features
- Frosted glass background using backdrop-filter: blur()
- Animated gradient glow border on hover
- Smooth fade-in + slide-up entrance animation
- Semi-transparent background with CSS variables
- Pure CSS — zero JavaScript
- Respects prefers-reduced-motion

## Classes

| Class | Description |
|---|---|
| `glass-card` | Base glassmorphism card |
| `glass-card-title` | Card heading |
| `glass-card-body` | Card content text |
| `glass-card-footer` | Footer action area |
| `glass-card-btn` | Ghost button for card actions |

## Notes
Works best on a dark or colorful background.