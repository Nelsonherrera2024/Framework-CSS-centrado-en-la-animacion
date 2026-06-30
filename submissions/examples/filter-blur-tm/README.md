# Filter Blur — EaseMotion CSS

A comprehensive CSS utility submission demonstrating the `filter-blur` CSS property
and related design tokens from the EaseMotion CSS framework.

## Overview

This submission adds **Filter Blur CSS utilities** to the EaseMotion framework,
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
| Card | `.filter-blur-card` | Shadow card with header/body/footer |
| Badges | `.filter-blur-badge-*` | Primary, success, warning, danger, info |
| Chips | `.filter-blur-chip` | Interactive pill-shaped chips |
| Buttons | `.filter-blur-btn` | Primary, ghost, sm, lg variants |
| Input | `.filter-blur-input` | Text input with focus ring |
| Avatar | `.filter-blur-avatar` | User avatars with sm/lg variants |
| Tag | `.filter-blur-tag` | Inline label tag |
| Progress | `.filter-blur-progress` | Progress bar with animated fill |
| Loader | `.filter-blur-loader` | Animated loading spinner |
| Sidebar | `.filter-blur-sidebar-item` | Navigation sidebar items |
| Tooltip | `.filter-blur-tooltip` | Hover tooltip component |
| Grid | `.filter-blur-grid` | Auto-fill responsive grid |
| Stack | `.filter-blur-stack` | Vertical flex stack |
| Row | `.filter-blur-row` | Horizontal flex row |

## Installation

```html
<link rel="stylesheet" href="easemotion.css" />
```

## Usage

### Card Component

```html
<div class="filter-blur-card">
  <div class="filter-blur-card-header">
    <span class="filter-blur-badge filter-blur-badge-primary">New</span>
  </div>
  <div class="filter-blur-card-body">
    <p>Your content here.</p>
    <button class="filter-blur-btn">Action</button>
  </div>
  <div class="filter-blur-card-footer">Footer text</div>
</div>
```

### Responsive Grid

```html
<div class="filter-blur-grid">
  <div class="filter-blur-demo">Item 1</div>
  <div class="filter-blur-demo">Item 2</div>
  <div class="filter-blur-demo">Item 3</div>
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
