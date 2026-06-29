# SCSS Responsive Breakpoint Mixins — Issue #30321

SCSS mixin library for responsive breakpoints following the framework's design tokens.

## Files

- `_responsive.scss` — Breakpoint mixins

## Mixins

| Mixin | Effect |
|-------|--------|
| `ease-sm` | ≥640px |
| `ease-md` | ≥768px |
| `ease-lg` | ≥1024px |
| `ease-xl` | ≥1280px |
| `ease-below-sm/md/lg/xl` | Max-width variants |
| `ease-between($min, $max)` | Custom range |
| `ease-motion-ok` / `ease-motion-reduce` | prefers-reduced-motion |
| `ease-dark-scheme` / `ease-light-scheme` | prefers-color-scheme |

## Usage

```scss
@use 'responsive' as *;

.ease-hero {
  font-size: 1rem;
  @include ease-md { font-size: 1.25rem; }
  @include ease-lg { font-size: 1.5rem; }
}
```
