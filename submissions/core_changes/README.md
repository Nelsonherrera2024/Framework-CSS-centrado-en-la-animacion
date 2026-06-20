# Scroll to Top Animated Button

This submission implements a floating scroll-to-top button that appears after scrolling past 300px (Issue **#14188**).

## What It Does

A fixed-position FAB-style button in the bottom-right corner that fades in + slides up when the user scrolls past 300px. Clicking it smoothly scrolls to the top.

## Features

- Fixed position (bottom-right corner)
- Hidden by default, appears after 300px scroll
- Fade-in + slide-up entrance animation
- Smooth scroll to top on click (`window.scrollTo` with `behavior: smooth`)
- Hover effect with elevated shadow
- Active press effect (scale down)
- Focus-visible outline for accessibility
- `prefers-reduced-motion` disables entrance/active animations
- Responsive sizing on mobile

## Usage

```html
<button class="scroll-top-btn" onclick="scrollToTop()" aria-label="Scroll to top">
  &uarr;
</button>

<script>
  window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
</script>
```

## Files

- `demo.html` — Long page with scroll-to-top button, behavior docs, and lorem ipsum filler
- `style.css` — Button styles, visibility toggle, hover/active/focus states, reduced-motion
- `README.md` — This documentation
