## What does this do?

Provides `ease-break` utility classes for controlling CSS break behavior — break-inside, break-before, and break-after for print and multi-column layouts.

## How is it used?

```html
<div class="ease-break-inside-avoid-za">
  Element won't split across columns/pages
</div>
<div class="ease-break-before-za">Starts at top of next column/page</div>
```

## Why is it useful?

EaseMotion core has no break utilities. These are essential for print stylesheets and multi-column layouts to control where elements split across pages or columns.
