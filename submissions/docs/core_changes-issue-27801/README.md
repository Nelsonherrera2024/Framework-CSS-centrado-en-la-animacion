# ease-accordion — Accordion Expand/Collapse Max-Height Mixins

## What does this do?

SCSS mixins for accordion-style expand/collapse using `max-height` transitions. Smoothly animates content reveal without JavaScript.

## How is it used?

```scss
@use 'mixins' as accordion;

.panel-content { @include accordion.ease-accordion-collapse(600px); }
.panel.open .panel-content { @include accordion.ease-accordion-expand(600px); }
```
