# aspect-ratio-gallery

## What

A responsive media gallery that demonstrates the CSS `aspect-ratio` property across four common ratios (1:1, 4:3, 16:9, 3:2). Images and videos maintain their intrinsic shape regardless of viewport width. A comparison section highlights the difference between `aspect-ratio` and the traditional `height: auto` fallback approach.

## How

Each media card uses the `aspect-ratio` property directly on the `<img>` or `<video>` element (e.g., `aspect-ratio: 16 / 9`). Cards are arranged in a responsive CSS Grid that auto-fills columns with `grid-template-columns: repeat(auto-fill, minmax(280px, 1fr))`. The comparison section places two identical images side by side — one using `aspect-ratio` and one using the old `height: auto; width: 100%` pattern — to show the behavioral difference when images load asynchronously.

## Why

Before `aspect-ratio`, responsive media required either known intrinsic dimensions (hardcoded in HTML) or a percentage-padding trick that felt hacky. The `aspect-ratio` property lets developers declare a preferred shape declaratively, preventing cumulative layout shift (CLS) and making layouts more predictable. This gallery serves as a visual reference and testing ground for the four most common web ratios.
