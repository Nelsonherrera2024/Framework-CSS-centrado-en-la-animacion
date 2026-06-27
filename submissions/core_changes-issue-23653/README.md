# SCSS Modular Animation Partials

1. **What does this do?**
   Adds per-category SCSS partials (`_fade.scss`, `_slide.scss`, `_bounce.scss`, `_zoom.scss`, `_rotate.scss`, `_hover.scss`) that mirror the modular CSS architecture. Each partial contains only the mixins relevant to its animation category, allowing SCSS users to import selectively instead of importing the entire mixin set.

2. **How is it used?**

   ```scss
   @use "easemotion-css/scss/fade";
   @use "easemotion-css/scss/zoom";

   .my-element {
     @include fade.fade-in();
     @include zoom.zoom-out();
   }

   @use "easemotion-css/scss" as ease;
   .hero { @include ease.fade-in(); }
   ```

3. **Files added/updated:**

   | File | Mixins |
   |---|---|
   | `_fade.scss` | `fade-in`, `fade-out`, `blur-to-focus`, `fade-icon-exit` |
   | `_slide.scss` | `slide-up`, `slide-down`, `slide-in-left`, `slide-in-right`, `slide-in-from-top`, `slide-in-from-bottom`, `slide-image-exit` |
   | `_bounce.scss` | `bounce`, `bounce-in`, `bounce-text`, `bounce-button-exit`, `squish-border`, `squish-button` |
   | `_zoom.scss` | `zoom-in`, `zoom-out`, `scale-text-exit` |
   | `_rotate.scss` | `rotate`, `rotate-image-exit`, `gradient-rotation` |
   | `_hover.scss` | `hover-lift`, `hover-glow`, `hover-scale`, `hover-sink`, `hover-skew` |
   | `_index.scss` | Now forwards all 6 new partials + `variables` + `mixins` |

4. **Why is it useful?**
   Previously, SCSS users who only needed fade animations had to import the entire mixin set. These modular partials reduce import overhead and make the SCSS layer as composable as the CSS layer.
