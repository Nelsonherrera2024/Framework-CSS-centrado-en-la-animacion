# Perspective 3D Scene

## What it does

Creates a 3D scene with four layers stacked along the Z axis using CSS `perspective` and `translateZ`. The camera follows mouse or touch input, and an optional auto-rotate mode slowly pans the view. A perspective slider lets the user adjust the vanishing-point distance in real time.

## How to use it

Open `demo.html` in a browser that supports CSS 3D transforms. Move the mouse over the scene to tilt the camera; drag the "Perspective" slider to change depth strength. Toggle "Auto-rotate" on/off. Each layer is labelled with its `translateZ` value in the chart below.

## Why it fits EaseMotion CSS

Understanding `perspective` and `translateZ` is essential for building 3D motion effects — carousels, parallax scrolls, and layered reveal animations. This example provides an interactive sandbox that makes the depth axis tangible, directly supporting the library's 3D transform utilities and easing functions.
