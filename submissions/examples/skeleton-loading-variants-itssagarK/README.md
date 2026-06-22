# Enhanced Skeleton Loading Variants

## What does this do?
Enhances the skeleton loading component with three distinct animation effects (shimmer reflection, animated wave, opacity pulse) and provides prebuilt skeleton templates for cards, table rows, and articles.

## How is it used?
Compose loaders using utility helper shapes or using prebuilt templates.

```html
<!-- Shimmer effect skeleton block -->
<div class="ease-skeleton ease-skeleton-shimmer" style="width: 200px; height: 20px"></div>

<!-- Prebuilt Card Skeleton -->
<div class="ease-skeleton-card">
  <div class="ease-skeleton ease-skeleton-shimmer" style="width: 100%; height: 200px"></div>
  <div class="ease-skeleton ease-skeleton-text"></div>
  <div class="ease-skeleton ease-skeleton-text-short"></div>
</div>
```

### Shapes & Templates
- `.ease-skeleton-shimmer` — Shining light reflection sweep
- `.ease-skeleton-wave` — Flowing gradient wave sweep
- `.ease-skeleton-pulse` — Smooth opacity fade transition
- `.ease-skeleton-text` — Text block loader (100% width)
- `.ease-skeleton-text-short` — Paragraph end text block loader (60% width)
- `.ease-skeleton-heading` — Heading-sized text block loader (40% width)
- `.ease-skeleton-avatar` — Circular avatar loader (50px diameter)
- `.ease-skeleton-thumbnail` — Image thumbnail loader (80px square)
- `.ease-skeleton-card` — Preassembled card layout wrapper
- `.ease-skeleton-row` — Preassembled 3-column table row wrapper
- `.ease-skeleton-article` — Preassembled article document wrapper

## Why is it useful?
Skeleton screens provide immediate visual feedback while content is loading, keeping user interest. Offering multiple animation variants (shimmer, wave, pulse) helps align loading states with specific design styles, and prebuilt templates save developer time when structuring standard grids and list templates.
