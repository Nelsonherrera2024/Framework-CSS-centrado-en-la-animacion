# ease-keyframe-wobble — Wobble & Pulse Animation Mixins

## What does this do?

SCSS mixins for common keyframe animations — wobble (shake/rotate) and pulse (scale/opacity breathing). Includes both `@keyframes` generation and application mixins.

## How is it used?

```scss
@use 'mixins' as wobble;

@include wobble.ease-keyframes-wobble(10deg);
@include wobble.ease-keyframes-pulse;

.element-wobble { @include wobble.ease-anim-wobble; }
.element-pulse { @include wobble.ease-anim-pulse(1.5s); }
```

### Mixins

| Mixin | Effect |
|---|---|
| `ease-keyframes-wobble` | Generates `@keyframes ease-wobble` |
| `ease-keyframes-pulse` | Generates `@keyframes ease-pulse` |
| `ease-keyframes-pulse-soft` | Generates `@keyframes ease-pulse-soft` |
| `ease-anim-wobble` | Applies wobble animation |
| `ease-anim-pulse` | Applies infinite pulse |
| `ease-anim-pulse-soft` | Applies soft opacity pulse |
