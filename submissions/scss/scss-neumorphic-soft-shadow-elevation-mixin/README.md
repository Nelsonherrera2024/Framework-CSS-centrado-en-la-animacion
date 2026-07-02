# Neumorphic Soft Shadow Elevation Mixin

A lightweight SCSS mixin that generates soft, dual-direction "neumorphic" shadows — creating a raised or pressed (inset) UI effect using a light and dark shadow pair derived from the background color.

## Usage

```scss
@use 'neumorphic-soft-shadow-elevation-mixin' as *;

.card {
  @include neumorphic-elevation();
}

.card--pressed {
  @include neumorphic-elevation($inset: true);
}
```

## Parameters

| Parameter    | Type    | Default   | Description                                      |
|--------------|---------|-----------|---------------------------------------------------|
| `$bg`        | Color   | `#e0e5ec` | Base background color the shadows are derived from |
| `$distance`  | Length  | `8px`     | Offset distance of the shadow                     |
| `$blur`      | Length  | `16px`    | Blur radius of the shadow                          |
| `$intensity` | Number  | `0.15`    | Opacity of the dark shadow (0–1)                   |
| `$inset`     | Boolean | `false`   | If `true`, produces a pressed/inset effect         |

## Compilation Result

```css
.neumorphic-card {
  background: #e0e5ec;
  box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.15), -8px -8px 16px rgb(249, 296, 250.216, 251.504);
  width: 200px;
  height: 120px;
  border-radius: 20px;
}

.neumorphic-card--pressed {
  background: #e0e5ec;
  box-shadow: inset 8px 8px 16px rgba(0, 0, 0, 0.15), inset -8px -8px 16px rgb(249.296, 250.216, 251.504);
  width: 200px;
  height: 120px;
  border-radius: 20px;
}
```

## Browser Support

Uses standard `box-shadow` and modern Sass `@use`/`color.adjust` — works in all modern browsers. No vendor prefixes required.