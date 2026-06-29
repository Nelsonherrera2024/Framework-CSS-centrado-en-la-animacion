# ease-border-draw — Animated Border Draw & Glow Mixins

## What does this do?

SCSS mixins for animated border effects — sequential border-color draw (top → right → bottom → left) and pulsing border glow via box-shadow.

## How is it used?

```scss
@use 'mixins' as border;

@include border.ease-keyframes-border-draw;
@include border.ease-keyframes-border-glow;

.card { @include border.ease-border-draw(#6c5ce7, 2px, 1.5s); }
.glow { @include border.ease-border-glow(#6c5ce7, 2s); }
```
