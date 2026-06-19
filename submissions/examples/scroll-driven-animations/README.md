# Scroll-Driven Animation Utilities

An isolated utility package delivering modern CSS Scroll-Driven Animation tokens (`animation-timeline`) to sync visual keyframe scales with layout scroll offsets entirely without JavaScript runtime layers.

## Utility Roster API

- `.ease-scroll-progress`: Generates a fixed global tracking line utilizing `animation-timeline: scroll(root)`. It scales horizontally from `0%` to `100%` in step with document height scroll parameters.
- `.ease-scroll-reveal`: Leverages `animation-timeline: view()` combined with intentional entry thresholds to scale visibility and slide container blocks upward smoothly upon viewport crossover.
- `.ease-scroll-rotate`: Syncs standard 360-degree rotational matrices across active page tracking progressions, suited for continuous parallax gear or scroll indicator shapes.

## Architectural Advantages
- **Compositor Accelerated Processing:** Operations compute directly via browser hardware compositor layers, eliminating main-thread evaluation bottlenecks.
- **Zero Script Dependencies:** Fully eliminates heavy, redundant calculation libraries like ScrollMagic, GSAP ScrollTrigger, or complex event listeners, reducing vendor bundle weights.

## Usage Layout Structure
```html

<div class="ease-scroll-progress"></div>


<section class="card-grid ease-scroll-reveal">
  <h3>Viewport Reveal Block</h3>
</section>
```

Closes #13395
