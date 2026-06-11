# base.css: Link transition missing prefers-reduced-motion guard

**Issue:** #5952
**File:** `core/base.css`

## Problem

Line 56 sets `transition: color var(--ease-speed-fast) var(--ease-ease)` on `a` elements but there is no `@media (prefers-reduced-motion: reduce)` guard for this transition.

## Expected

```css
@media (prefers-reduced-motion: reduce) {
  a {
    transition: none !important;
  }
}
```

## Demo

Open `demo.html` and enable reduced motion to see the link color transition still animating.
