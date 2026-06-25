# Mouse Parallax Background

## Overview

This example demonstrates a subtle mouse parallax background effect. The background layer moves slightly in the opposite direction of the cursor to create a sense of depth while keeping the foreground content stationary.

## Features

* Tracks mouse movement using JavaScript.
* Updates CSS custom properties:

  * `--ease-mouse-x`
  * `--ease-mouse-y`
* Applies smooth background translation using CSS transforms.
* Lightweight and responsive implementation.
* Subtle animation that enhances the UI without being distracting.

## Files

* `index.html` – HTML structure and JavaScript for tracking mouse movement.
* `style.css` – Styling, background gradients, and parallax effect.

## How It Works

1. JavaScript listens for the `mousemove` event.
2. Cursor position is converted into small X and Y offsets.
3. The offsets are stored in CSS variables.
4. The background uses these variables with `transform: translate()` to create a smooth depth effect.

## Expected Result

Moving the mouse causes the background to shift gently in the opposite direction of the cursor, creating a subtle parallax depth effect while keeping the content fixed.
