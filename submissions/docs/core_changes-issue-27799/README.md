# ease-card-lift — Card Hover Lift & Perspective Tilt Mixins

## What does this do?

SCSS mixins for card hover effects — lift (translate upward with shadow) and perspective tilt (3D rotation on hover).

## How is it used?

```scss
@use 'mixins' as lift;

.card { @include lift.ease-card-lift(-10px); }
.card-3d { @include lift.ease-card-perspective(1000px, 8deg); }
```
