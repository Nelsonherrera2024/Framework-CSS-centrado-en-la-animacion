# ease-container-query — CSS Container Query Wrapper Mixins

## What does this do?

SCSS mixins for CSS Container Queries — establishes containment and generates `@container` queries for responsive components.

## How is it used?

```scss
@use 'mixins' as cq;

.parent { @include cq.ease-container; }

.child {
  @include cq.ease-container-query(400px) {
    font-size: 1.5rem;
  }
}
```
