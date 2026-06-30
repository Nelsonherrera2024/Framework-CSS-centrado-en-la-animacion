# Grid Auto Columns Utilities

CSS utility classes for the `grid-auto-columns` property.

## Usage

```html
<div class="grid-auto-col-auto">...</div>
```

## Classes

- `.grid-auto-col-auto` — grid-auto-columns: auto;
- `.grid-auto-col-min` — grid-auto-columns: min-content;
- `.grid-auto-col-max` — grid-auto-columns: max-content;
- `.grid-auto-col-fr` — grid-auto-columns: minmax(0, 1fr);
- `.grid-auto-col-fixed` — grid-auto-columns: 200px;
- `.grid-auto-col-100` — grid-auto-columns: 100px;
- `.grid-auto-col-150` — grid-auto-columns: 150px;
- `.grid-auto-col-250` — grid-auto-columns: 250px;
- `.grid-auto-col-300` — grid-auto-columns: 300px;
- `.grid-auto-col-400` — grid-auto-columns: 400px;
- `.grid-auto-col-minmax` — grid-auto-columns: minmax(100px, 1fr);
- `.grid-auto-col-minmax-lg` — grid-auto-columns: minmax(200px, 2fr);
- `.grid-auto-col-minmax-sm` — grid-auto-columns: minmax(50px, 1fr);
- `.grid-auto-col-fit` — grid-auto-columns: fit-content(200px);
- `.grid-auto-col-fill` — grid-auto-columns: minmax(100px, auto);
- `.grid-auto-col-px` — grid-auto-columns: 1px;
- `.grid-auto-col-rem` — grid-auto-columns: 1rem;

## Responsive

- `sm:` prefix for 640px+
- `lg:` prefix for 1024px+

## Dark Mode

- `dark:` prefix for `prefers-color-scheme: dark`
## Reduced Motion

- `motion-safe:` prefix for `prefers-reduced-motion: reduce`
