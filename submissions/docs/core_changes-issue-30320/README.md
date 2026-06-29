# SCSS Color Palette — Issue #30320

SCSS-based color palette generator with mixins for tone/variant generation.

## Files

- `_palette.scss` — Color palette variables and generator mixins

## Mixins

| Mixin | Purpose |
|-------|---------|
| `ease-color-variant($name, $color-map)` | Emits `--ease-{name}-{shade}` CSS vars |
| `ease-color-tone($base, $lighten, $darken)` | Lightens/darkens a base color |
| `ease-semantic-colors($primary, $success, $warning, $danger)` | Generates themed CSS vars |

## Usage

```scss
@use 'palette' as *;

:root {
  @include ease-color-variant("blue", $ease-blue);
  @include ease-semantic-colors(#6366f1, #22c55e, #f59e0b, #ef4444);
}
```
