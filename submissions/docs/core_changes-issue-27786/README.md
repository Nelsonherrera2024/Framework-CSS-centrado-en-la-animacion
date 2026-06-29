# ease-grid-fit — Flexible CSS Grid Auto-Fit Generator Mixin

## What does this do?

SCSS mixins for responsive CSS Grid layouts using `auto-fit` and `auto-fill` with `minmax()`. Generates flexible grids that automatically adjust column count.

## How is it used?

```scss
@use 'mixins' as grid;

.gallery { @include grid.ease-grid-auto-fit(200px, 0.75rem); }
```
