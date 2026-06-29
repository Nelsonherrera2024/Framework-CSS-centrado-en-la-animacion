# CSS Parallax Scroll — Issue #30446

CSS parallax scrolling effect using perspective and transform.

## Classes

| Class | Effect |
|-------|--------|
| `.ease-parallax` | Scroll container with perspective |
| `.ease-parallax-layer` | Positioned layer inside |
| `.ease-parallax-slow` | translateZ(-2px) scale(3) |
| `.ease-parallax-medium` | translateZ(-1px) scale(2) |
| `.ease-parallax-fast` | translateZ(0) no parallax |
| `.ease-parallax-base` | Static foreground content |

## CSS Variables

- `--ease-parallax-perspective` (default 1px)
- `--ease-parallax-height` (default 100vh)
