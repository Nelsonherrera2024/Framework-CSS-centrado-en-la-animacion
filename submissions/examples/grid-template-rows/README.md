# Grid Template Rows Utilities

CSS utility classes for the `grid-template-rows` property.

## Usage

```html
<div class="grid-rows-none">...</div>
```

## Classes

- `.grid-rows-none` — grid-template-rows: none;
- `.grid-rows-1` — grid-template-rows: repeat(1, minmax(0, 1fr));
- `.grid-rows-2` — grid-template-rows: repeat(2, minmax(0, 1fr));
- `.grid-rows-3` — grid-template-rows: repeat(3, minmax(0, 1fr));
- `.grid-rows-4` — grid-template-rows: repeat(4, minmax(0, 1fr));
- `.grid-rows-5` — grid-template-rows: repeat(5, minmax(0, 1fr));
- `.grid-rows-6` — grid-template-rows: repeat(6, minmax(0, 1fr));
- `.grid-rows-auto` — grid-template-rows: auto;
- `.grid-rows-min` — grid-template-rows: minmax(min-content, auto);
- `.grid-rows-max` — grid-template-rows: minmax(max-content, auto);
- `.grid-rows-fr` — grid-template-rows: minmax(0, 1fr);
- `.grid-rows-subgrid` — grid-template-rows: subgrid;
- `.grid-rows-dense` — grid-template-rows: dense;

## Responsive

- `sm:` prefix for 640px+
- `lg:` prefix for 1024px+

## Dark Mode

- `dark:` prefix for `prefers-color-scheme: dark`
## Reduced Motion

- `motion-safe:` prefix for `prefers-reduced-motion: reduce`
