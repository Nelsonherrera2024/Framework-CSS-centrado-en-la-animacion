## What

This example demonstrates color animation using the OKLCH color space compared to traditional sRGB. Two panels show background and text color cycling animations: one using `oklch()` (varying only the hue channel while keeping lightness and chroma constant) and the other using hex/sRGB values (interpolating between predefined keyframe colors). A quality assessment section explains the visual differences in transition smoothness.

## How

OKLCH animations are driven by `@keyframes` that only modify the hue (`h`) parameter while holding lightness (`l`) and chroma (`c`) constant. This produces transitions that stay at a consistent perceived brightness and saturation throughout the cycle. The sRGB counterpart uses hex color keyframes that the browser interpolates in the default sRGB color space, causing the animation to pass through desaturated intermediate values. Both panels use identical 4-second `ease-in-out` alternating durations.

## Why

When animating color in sRGB, intermediate values often land in muddy, desaturated regions because sRGB interpolation does not account for human perception. OKLCH, a perceptually uniform color space, ensures that equal numerical changes produce equal perceived color differences. For UI animations (pulse effects, loading states, ambient backgrounds), using `oklch()` produces visibly smoother and more vibrant transitions, improving the perceived quality of motion without additional performance cost.
