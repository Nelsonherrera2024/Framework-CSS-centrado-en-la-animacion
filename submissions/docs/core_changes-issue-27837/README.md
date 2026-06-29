# ease-text-underline — Text Highlight Underline Draw Mixins

## What does this do?

SCSS mixins for animated text underline effects — highlight (thick marker-style underline) and draw (thin animated underline that slides in from left on hover).

## How is it used?

```scss
@use 'mixins' as underline;

.highlight { @include underline.ease-underline-highlight(#fef08a, 0.3em); }
.link { @include underline.ease-underline-draw(#6c5ce7, 2px); }
```
