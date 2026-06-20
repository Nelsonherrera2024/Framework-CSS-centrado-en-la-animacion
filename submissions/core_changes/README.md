# Table Skeleton Loading

This submission implements a 5-row, 4-column skeleton table with staggered shimmer animation for dashboard loading states (Issue **#14190**).

## Features

- 5-row, 4-column skeleton table with `.skeleton-cell` placeholders
- Staggered shimmer via `animation-delay` on each column (0.1s offset)
- Shimmer animation using `background-position` keyframes
- Toggle between skeleton loading and real data
- Real cells fade in on transition
- `prefers-reduced-motion` disables shimmer

## Files

- `demo.html` — Interactive table skeleton with loading/reset toggle, usage code
- `style.css` — Shimmer keyframes, table styles, staggered delays, reduced-motion
- `README.md` — This documentation
