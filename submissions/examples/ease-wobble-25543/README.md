# `ease-wobble`

Wobble animation — combines `translateX` and `rotate` for a horizontal shake with rotation.

Ideal for error states, invalid form inputs, and playful hover effects.

## Usage

```html
<div class="ease-wobble">Shake me</div>
```

## Modifiers

- `.ease-infinite` — loop continuously

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--ease-animation-iterations` | `1` | Number of iterations |

## Accessibility

Respects `prefers-reduced-motion: reduce` — disables the animation.
