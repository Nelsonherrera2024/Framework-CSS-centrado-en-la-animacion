# Container Queries Demo

A demonstration of modern CSS Container Queries using six responsive card examples.

## Features

- CSS Container Queries
- Six demo cards
- Token-driven styling
- Dark mode support
- Reduced motion support
- Responsive layouts

## Design Tokens

```css
:root{
  --cq-bg
  --cq-card
  --cq-border
  --cq-primary
  --cq-radius
}
```

## Container Query Example

```css
.card-wrapper{
  container-type:inline-size;
}

@container (min-width: 450px){
  .card{
    flex-direction:row;
  }
}
```

## Files

- demo.html
- style.css
- README.md