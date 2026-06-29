# ease-neumorphic — Neumorphic Soft Shadow Elevation Mixins

## What does this do?

Provides SCSS mixins for neumorphic (soft UI / neumorphism) shadow effects — raised (convex), pressed (concave), and flat states with configurable shadow colors, light sources, border radius, and background.

## How is it used?

```scss
@use 'mixins' as neumorphic;

.my-card {
  @include neumorphic.ease-neumorphic-card;
  padding: 2rem;
}

.my-button:active {
  @include neumorphic.ease-neumorphic-pressed;
}
```

### Mixins

| Mixin | Effect |
|---|---|
| `ease-neumorphic-raised` | Convex outer shadow (raised/embossed) |
| `ease-neumorphic-pressed` | Concave inner shadow (pressed/inset) |
| `ease-neumorphic-flat` | No shadow (flat state) |
| `ease-neumorphic-card` | Full card with background + raised shadow |

### Configuration

Customize via `$ease-neumorphic-config` before importing:

```scss
$ease-neumorphic-config: (
  'shadow-color': rgba(0, 0, 0, 0.15),
  'light-color': rgba(255, 255, 255, 0.9),
  'bg-color': #eef0f4,
  'border-radius': 1.25rem
);
```
