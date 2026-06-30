# Clip Path Utilities

CSS utility classes for the `clip-path` property.

## Usage

```html
<div class="clip-none">...</div>
```

## Classes

- `.clip-none` — clip-path: none;
- `.clip-circle` — clip-path: circle(50%);
- `.clip-circle-sm` — clip-path: circle(30%);
- `.clip-circle-lg` — clip-path: circle(70%);
- `.clip-ellipse` — clip-path: ellipse(50% 30%);
- `.clip-inset` — clip-path: inset(10% 20% 30% 40%);
- `.clip-inset-sm` — clip-path: inset(5% 10% 15% 20%);
- `.clip-polygon` — clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
- `.clip-polygon-sm` — clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
- `.clip-polygon-lg` — clip-path: polygon(0% 0%, 100% 50%, 0% 100%);
- `.clip-url` — clip-path: url(#clipShape);
- `.clip-border-box` — clip-path: border-box;
- `.clip-padding-box` — clip-path: padding-box;
- `.clip-content-box` — clip-path: content-box;

## Responsive

- `sm:` prefix for 640px+
- `lg:` prefix for 1024px+

## Dark Mode

- `dark:` prefix for `prefers-color-scheme: dark`
## Reduced Motion

- `motion-safe:` prefix for `prefers-reduced-motion: reduce`
