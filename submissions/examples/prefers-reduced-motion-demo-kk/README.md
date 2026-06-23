# Prefers-Reduced-Motion Demo

## What does this do?
This is a self-contained demonstration of how to implement accessibility-friendly animations using the `@media (prefers-reduced-motion: reduce)` CSS feature. It features three distinct custom animations (fade, slide, and pulse) along with an animated heading, and shows how to gracefully halt them while preserving layout and usability when a user has indicated they prefer less motion at the OS or browser level.

## How is it used?
1. Open the `demo.html` file in any modern web browser.
2. Observe the continuous animations on the page.
3. Open your operating system's accessibility settings (e.g., "Reduce Motion" in macOS, "Show animations in Windows" in Windows).
4. Toggle the setting on and off.
5. Return to the browser (or refresh) to see the animations immediately halt, proving that the web page respects the user's motion preferences.

## Why is it useful?
Motion can cause discomfort, dizziness, or nausea for users with vestibular disorders. By utilizing `prefers-reduced-motion`, developers can provide a dynamic, animated experience for most users while automatically switching to a safer, static (but still aesthetically pleasing) experience for users who require it. This is a critical component of modern web accessibility (a11y).

## File Structure
- `demo.html`: The HTML5 document containing the markup for the demo card and animation examples.
- `style.css`: The custom stylesheet containing layout styling, keyframe animations, and the `prefers-reduced-motion` media query.
- `README.md`: This documentation file.

## Accessibility Benefits
- Prevents vestibular triggers for sensitive users.
- Maintains visual hierarchy and layout even when animations are disabled.
- Follows WCAG (Web Content Accessibility Guidelines) best practices for motion design.
