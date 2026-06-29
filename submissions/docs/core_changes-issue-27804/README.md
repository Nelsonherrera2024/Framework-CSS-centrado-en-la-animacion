# ease-truncate — Multi-Line Clamp SCSS Mixins

## What does this do?

SCSS mixins for text truncation — single-line with ellipsis and multi-line clamp via `-webkit-line-clamp`. Supports responsive line counts.

## How is it used?

```scss
@use 'mixins' as truncate;

.card-text {
  @include truncate.ease-clamp(3);
}

.single-line {
  @include truncate.ease-truncate;
}

.responsive-text {
  @include truncate.ease-clamp-responsive(2, 4, 6);
}
```

### Mixins

| Mixin | Effect |
|---|---|
| `ease-clamp` | Multi-line clamp with configurable line count |
| `ease-truncate` | Single-line ellipsis truncation |
| `ease-clamp-responsive` | Different line counts at breakpoints |
