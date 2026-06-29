# SCSS Component Variant Generators — Issue #30322

SCSS mixins for generating custom component variants (buttons, cards, badges, alerts).

## Files

- `_components.scss` — Component variant mixins

## Mixins

| Mixin | Purpose |
|-------|---------|
| `ease-btn-variant($bg, $color, $bg-hover, ...)` | Generate button color variants |
| `ease-btn-size($padding-y, $padding-x, $font-size, $radius)` | Generate button size variants |
| `ease-card-variant($bg, $border, $shadow, $hover-shadow, $radius)` | Generate card variants |
| `ease-badge-variant($bg, $color, $radius)` | Generate badge color variants |
| `ease-alert-variant($bg, $border, $color)` | Generate alert color variants |

## Usage

```scss
@use 'components' as *;

.ease-btn-custom {
  @include ease-btn-variant(#8b5cf6, #fff, #7c3aed);
  @include ease-btn-size(0.75rem, 1.5rem, 0.875rem, 0.5rem);
}
```
