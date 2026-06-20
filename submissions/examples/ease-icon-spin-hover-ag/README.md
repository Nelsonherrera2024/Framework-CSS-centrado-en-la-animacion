# Icon Spin Hover

## What does this do?

Applies a smooth, one-shot 360-degree rotation to an icon or element on hover, perfect for settings, refresh, and loading triggers.

## How is it used?

Simply add the class `ease-icon-spin-hover-ag` to your interactive button, dock item, or container element. When hovered, any icon child (`svg`, `i`, `.icon`, or `.spin-target`) will execute the smooth spin animation once:

```html
<!-- The icon inside this button will spin 360 degrees on hover -->
<button class="ease-icon-spin-hover-ag">
  <svg class="icon" ...></svg>
  <span>Refresh Data</span>
</button>

<!-- Or apply it directly to an element to spin it on hover -->
<span class="ease-icon-spin-hover-ag">⚙️</span>
```

## Why is it useful?

It offers a natural, highly satisfying micro-interaction for common system triggers (like settings cogs, synchronization reload loops, and configurations). Utilizing a hardware-accelerated pure CSS animation with a sleek cubic-bezier easing function delivers a premium, highly responsive user experience without introducing JavaScript or page layout reflows.

## Tech Stack

- HTML
- CSS (no frameworks, no JavaScript)

## Preview

Open demo.html directly in your browser to see the effect.
