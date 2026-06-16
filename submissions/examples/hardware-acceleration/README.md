# Hardware Acceleration Utility (`.ease-gpu`)

This example demonstrates how to implement GPU hardware acceleration for core animation utilities to resolve stuttering and micro-jank on lower-end mobile devices and Safari browsers.

## How it works
By using `will-change` alongside the `translate3d` composite-layer hack, the browser offloads the heavy rendering work from the main CPU to the device's GPU graphics hardware.

## Usage
Simply apply the `.ease-gpu` class to any element experiencing heavy animations or transitions:

```html
<div class="your-animated-element ease-gpu"></div>