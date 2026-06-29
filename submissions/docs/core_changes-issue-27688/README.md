# ease-aspect-ratio — Responsive Aspect Ratio SCSS Mixins

## What does this do?

SCSS mixins for aspect-ratio containers — supports both the modern `aspect-ratio` CSS property and a padding-bottom fallback. Provides responsive overrides at breakpoints.

## How is it used?

```scss
@use 'mixins' as aspect;

.video-frame {
  @include aspect.ease-aspect-ratio(16/9);
}

.responsive-box {
  @include aspect.ease-aspect-responsive(
    $default: 1/1,
    $overrides: ('md': 4/3, 'lg': 16/9)
  );
}
```

### Mixins

| Mixin | Effect |
|---|---|
| `ease-aspect-box` | Padding-bottom fallback container |
| `ease-aspect-ratio` | Modern `aspect-ratio` CSS property |
| `ease-aspect-responsive` | Responsive ratio with breakpoint overrides |

### Configuration

```scss
$ease-aspect-config: (
  'default-ratio': 16/9,
  'breakpoints': ('sm': 640px, 'md': 768px, 'lg': 1024px, 'xl': 1280px)
);
```
