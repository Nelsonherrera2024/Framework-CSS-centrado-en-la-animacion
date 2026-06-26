# SCSS Mixin for Glassmorphism Card

A clean, premium, animation-ready Sass mixin to build glassmorphic cards with responsive accessibility.

## What does this do?

This feature adds `@mixin glass-card` to `scss/_mixins.scss`. It automatically generates CSS properties for backdrop filter blur, semi-transparent background colors, reflective borders, smooth physics-based transition timings, and custom hover states.

## How is it used?

### Including the Mixin in SCSS

Import the mixins module and apply it directly within your component classes:

```scss
// style.scss
@use '../../../scss/mixins';

.info-card {
  @include mixins.glass-card(
    $blur: 15px,
    $background-color: rgba(255, 255, 255, 0.08),
    $border-color: rgba(255, 255, 255, 0.2),
    $border-radius: 12px
  );
}
```

### HTML Implementation

Apply the target class inside your markup structure:

```html
<div class="info-card">
  <span class="badge">Active</span>
  <h2>Metric Title</h2>
  <p>Translucent glassmorphic text content.</p>
</div>
```

## Why is it useful?

1. **Integrated Hover Physics**: Packages cubic-bezier scaling transitions directly inside the card class, saving manual duplication of transition declarations.
2. **Flexible Backdrop Control**: Allows rapid alteration of blur depth (`2px` to `40px`) and color hues directly via arguments.
3. **A11y/Reduced Motion Built-in**: The mixin automatically includes responsive overrides that nullify transitions and transforms when user system preferences request prefers-reduced-motion.
