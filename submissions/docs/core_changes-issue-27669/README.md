# ease-gradient-text — Gradient Text Flow & Animation Mixins

## What does this do?

SCSS mixins for gradient text effects — applies `background-clip: text` with configurable gradients, and provides an animated flow variant that shifts the gradient position for a shimmering text effect.

## How is it used?

```scss
@use 'mixins' as gradient;

// Include keyframes once
@include gradient.ease-gradient-text-keyframes;

.title {
  @include gradient.ease-gradient-text-flow(3s, 200% auto);
}
```

### Mixins

| Mixin | Effect |
|---|---|
| `ease-gradient-text-base` | Static gradient text fill |
| `ease-gradient-text-flow` | Animated gradient flow (shimmer) |
| `ease-gradient-text-keyframes` | `@keyframes ease-gradient-shift` |

### Configuration

```scss
$ease-gradient-text-config: (
  'gradient': linear-gradient(90deg, red, blue, red),
  'duration': 3s,
  'bg-size': 200% auto
);
```
