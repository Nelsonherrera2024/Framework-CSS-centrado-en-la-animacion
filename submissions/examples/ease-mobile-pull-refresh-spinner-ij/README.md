# ease-mobile-pull-refresh-spinner

A mobile pull-to-refresh interaction using CSS transforms and a `--pull-progress` custom property. The circular spinner rotates in proportion to the pull distance. Past the threshold, releasing triggers a full rotation animation.

## Usage

Open `demo.html` in a browser. Drag the list downward to see the spinner rotate. Release past 80% pull to trigger the refresh animation.

## CSS Custom Properties

| Property | Default | Description |
|----------|---------|-------------|
| `--spinner-size` | `40px` | Diameter of the spinner |
| `--spinner-color` | `#4f46e5` | Active spinner arc color |
| `--spinner-track-color` | `#e0e7ff` | Spinner track color |
| `--spinner-duration` | `0.8s` | Full spin duration |

## Notes

- JavaScript sets `--pull-progress` from drag distance
- All visual rotation and animation is handled by CSS
- Touch and mouse input are both supported
