# Animation Composition via CSS Custom Properties (Slots)

## 1. What does this do?
This submission implements a composable animation utility system utilizing slot-based CSS Custom Properties and `animation-composition: accumulate` to stack and run multiple animation classes (such as fade, slide, scale, and rotate) concurrently on a single HTML element without conflicts.

## 2. How is it used?
Simply chain the desired animation utility classes directly on your element. The engine maps them to specific slot variables automatically.

```html
<!-- Fades, slides up, and zooms in simultaneously -->
<div class="fade-in slide-up zoom-in">
  Animated Content
</div>

<!-- Fades in and spins infinitely -->
<div class="fade-in spin">
  Rotating Element
</div>
```

## 3. Why is it useful?
In traditional utility frameworks, animation utilities define individual shorthands (`animation: ...`) or override the `animation-name` longhand. This causes subsequent classes in the DOM/CSS specificity order to cancel out previous ones, making animation composition impossible. 

By grouping animations into separate category variables (`--anim-fade`, `--anim-translate`, `--anim-scale`, `--anim-rotate`) mapped into a single base `animation` definition, this system enables true utility-first animation combining with zero-conflict, pure CSS execution.
