# Text Stroke — EaseMotion CSS

A comprehensive CSS utility submission demonstrating the `text-stroke` CSS property
and related design tokens from the EaseMotion CSS framework.

## Overview

This submission adds **Text Stroke CSS utilities** to the EaseMotion framework,
providing reusable, token-driven CSS classes for rapid UI development.

## Features

- **Token-driven design**: Uses CSS custom properties from `core/variables.css`
- **Dark mode support**: Full `prefers-color-scheme: dark` variants
- **Reduced motion**: `prefers-reduced-motion: reduce` media query support
- **Accessibility**: Focus-visible states, semantic HTML, keyboard navigation
- **Responsive**: Mobile-first utility classes with fluid sizing

## Components Included

| Component | Class | Description |
|-----------|-------|-------------|
| Card | `.text-stroke-card` | Shadow card with header/body/footer |
| Badges | `.text-stroke-badge-*` | Primary, success, warning, danger, info |
| Chips | `.text-stroke-chip` | Interactive pill-shaped chips |
| Buttons | `.text-stroke-btn` | Primary, ghost, sm, lg variants |
| Input | `.text-stroke-input` | Text input with focus ring |
| Avatar | `.text-stroke-avatar` | User avatars with sm/lg variants |
| Tag | `.text-stroke-tag` | Inline label tag |
| Progress | `.text-stroke-progress` | Progress bar with animated fill |
| Loader | `.text-stroke-loader` | Animated loading spinner |
| Sidebar | `.text-stroke-sidebar-item` | Navigation sidebar items |
| Tooltip | `.text-stroke-tooltip` | Hover tooltip component |
| Grid | `.text-stroke-grid` | Auto-fill responsive grid |
| Stack | `.text-stroke-stack` | Vertical flex stack |
| Row | `.text-stroke-row` | Horizontal flex row |

## Installation

```html
<link rel="stylesheet" href="easemotion.css" />
```

## Usage

### Card Component

```html
<div class="text-stroke-card">
  <div class="text-stroke-card-header">
    <span class="text-stroke-badge text-stroke-badge-primary">New</span>
  </div>
  <div class="text-stroke-card-body">
    <p>Your content here.</p>
    <button class="text-stroke-btn">Action</button>
  </div>
  <div class="text-stroke-card-footer">Footer text</div>
</div>
```

### Responsive Grid

```html
<div class="text-stroke-grid">
  <div class="text-stroke-demo">Item 1</div>
  <div class="text-stroke-demo">Item 2</div>
  <div class="text-stroke-demo">Item 3</div>
</div>
```

### Dark Mode

Dark mode is automatically applied via CSS media queries.
No JavaScript required.

### Reduced Motion

Animations are disabled for users with `prefers-reduced-motion: reduce`.

## Design Tokens Used

| Token | Value | Usage |
|-------|-------|-------|
| `--ease-color-primary` | `#6c63ff` | Primary actions, highlights |
| `--ease-color-bg` | Light/dark bg | Page background |
| `--ease-color-surface` | `#ffffff` | Card/surface backgrounds |
| `--ease-color-muted` | `#64748b` | Secondary text |
| `--ease-radius-md` | `0.5rem` | Border radius |
| `--ease-radius-full` | `9999px` | Pills, avatars |
| `--ease-shadow-md` | medium shadow | Card shadows |
| `--ease-space-4` | `1rem` | Spacing scale |
| `--ease-space-6` | `1.5rem` | Card padding |
| `--ease-speed-fast` | `150ms` | Fast transitions |
| `--ease-speed-slow` | `600ms` | Slow transitions |
| `--ease-ease-bounce` | bezier | Bouncy easing |
| `--ease-glow-primary` | primary glow | Focus/hover glow |

## Browser Support

Modern browsers with CSS Custom Properties support:
- Chrome 60+
- Firefox 55+
- Safari 11+
- Edge 79+

## License

MIT — same as EaseMotion CSS framework.
