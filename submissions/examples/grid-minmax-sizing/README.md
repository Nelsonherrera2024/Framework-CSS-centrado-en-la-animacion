## grid-minmax-sizing

Demonstrates the `minmax()` function for CSS Grid track sizing with flexible minimum and maximum constraints.

### Key Features

- `minmax(100px, 1fr)` for flexible columns with a minimum width floor
- `auto-fill` vs `auto-fit` with `minmax()` for responsive grid creation
- Mixed track patterns combining fixed, flexible, and `minmax()` columns

### How It Works

`auto-fill` preserves track space even when empty; `auto-fit` collapses empty tracks. Use `minmax()` to ensure tracks never shrink below a readable minimum while still filling available space with `fr` units.
