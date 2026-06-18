# Scroll Snap Container Utilities

A utility class package containing CSS scroll-snapping design primitives to quickly build high-performance sliders, carousels, and presentation lanes using native thread optimizations.

## Utility Roster API

### Parent Configurations
- `.ease-snap-x`: Sets up horizontal overflow scroll fields running rigid mandatory locking targets.
- `.ease-snap-y`: Sets up vertical overflow scroll rails running rigid mandatory locking targets.
- `.ease-snap-proximity`: Weakens lock thresholds to evaluate alignment purely when stopping nearby.

### Child Alignments
- `.ease-snap-align-start`: Forces items to lock flush against the leading axis bounds.
- `.ease-snap-align-center`: Forces items to lock symmetrically into the central axis viewports.
- `.ease-snap-align-end`: Forces items to lock flush against the trailing axis bounds.

## Usage Layout Structure
```html

<div class="ease-snap-x">
  <div class="ease-carousel-card ease-snap-align-center"> Card 1 </div>
  <div class="ease-carousel-card ease-snap-align-center"> Card 2 </div>
</div>
```

Closes #12659
