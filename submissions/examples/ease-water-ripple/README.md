# ease-water-ripple

Continuous water ripple rings expand outward from the element centre.

## Usage

Add `.ease-water-ripple` to the container and include three `.wr-ring` children.

```html
<div class="ease-water-ripple">
  Content
  <div class="wr-ring"></div>
  <div class="wr-ring"></div>
  <div class="wr-ring"></div>
</div>
```

## Why it fits EaseMotion CSS

Staggered `animation-delay` on identical ring elements creates the continuous ripple from a single keyframe.