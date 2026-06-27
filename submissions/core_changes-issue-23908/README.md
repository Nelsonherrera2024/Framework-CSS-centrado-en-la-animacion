# ease-carousel — CSS-only Image Carousel with Scroll-Snap

## 1. What does this do?

Adds a CSS-only carousel component using `scroll-snap-type: x mandatory` for native, smooth, touch-friendly scrolling. Includes navigation dots, prev/next buttons, caption overlays, and responsive sizing.

**Classes:**
- `.ease-carousel` — Container with overflow hidden and rounded corners
- `.ease-carousel-track` — Flex container with `scroll-snap-type: x mandatory`
- `.ease-carousel-slide` — Each slide (100% width, `scroll-snap-align: start`)
- `.ease-carousel-dots` — Navigation dots container
- `.ease-carousel-dot` — Individual dot with `.active` state
- `.ease-carousel-btn` — Prev/next buttons (`.ease-carousel-btn-prev`, `.ease-carousel-btn-next`)
- `.ease-carousel-caption` — Bottom overlay caption
- `.ease-carousel-rounded` — Extra border radius
- `.ease-carousel-shadow` — Box shadow elevation

## 2. How is it used?

```html
<div class="ease-carousel" id="gallery">
  <div class="ease-carousel-track">
    <div class="ease-carousel-slide">
      <img src="slide1.jpg" alt="Description" />
    </div>
    <div class="ease-carousel-slide">
      <img src="slide2.jpg" alt="Description" />
    </div>
  </div>

  <button class="ease-carousel-btn ease-carousel-btn-prev" onclick="scrollCarousel('gallery', -1)">&#8249;</button>
  <button class="ease-carousel-btn ease-carousel-btn-next" onclick="scrollCarousel('gallery', 1)">&#8250;</button>

  <div class="ease-carousel-dots" id="dots-gallery"></div>
</div>
```

Dots and button JS is minimal (~20 lines total) and optional — the carousel works with touch/swipe without JS.

## 3. Why is this useful?

- **Touch-friendly** — Native scroll-snap with swipe support
- **CSS-only scrolling** — Works without JS for basic use
- **Minimal JS** — Only for dot indicators and button navigation
- **Responsive** — Buttons shrink on mobile
- **Reduced motion** — Respects `prefers-reduced-motion`
- **Variants** — Rounded corners, shadow elevation, caption overlays
