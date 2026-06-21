# Scroll Snap Carousel

A horizontal carousel built with CSS scroll-snap (`scroll-snap-type: x mandatory`, `scroll-snap-align: center`), arrow navigation, and dot indicators updated via Intersection Observer.

## How it works

- The `.carousel` container uses `overflow-x: auto` with `scroll-snap-type: x mandatory`, so each scroll lands on a slide.
- Each `.carousel__slide` has `scroll-snap-align: center` to snap to the visual center.
- Arrow buttons call `carousel.scrollBy({ left: (slideWidth + gap) * direction, behavior: 'smooth' })`.
- An Intersection Observer watches slide visibility (threshold 0.6) and toggles `.carousel-dot--active`.
- Keyboard support: ArrowLeft / ArrowRight when the carousel is focused.

## Key features

- CSS-only snapping behavior; JS used only for arrows, dots, and keyboard nav.
- Dot indicators as small buttons with an active pill shape (wider + accent color).
- Smooth `scroll-behavior` on the container (disabled with `prefers-reduced-motion: reduce`).
- Fully responsive: slides shrink to 85% width on mobile; arrow buttons hidden.
- Dark theme with `#0a0f1e` background, `#e2e8f0` text, and a blue accent.
