# Animated Toggle Switch

## What does this do?
A modern, animated toggle switch component that serves as a CSS-only alternative to checkboxes for enabling and disabling settings. Features a smooth sliding knob animation, color transitions, and full keyboard accessibility.

## How is it used?
The toggle uses the CSS checkbox hack for state. Wrap the input and label:

    <label class="ease-toggle">
      <input type="checkbox" class="ease-toggle-input">
      <span class="ease-toggle-slider">
        <span class="ease-toggle-knob"></span>
      </span>
      <span class="ease-toggle-text">Enable notifications</span>
    </label>

Add `.ease-toggle-lg` or `.ease-toggle-sm` for size variants. Add `.ease-toggle-outline` for border-style variant. Add `.ease-toggle:disabled` for disabled state.

## Why is it useful?
Toggle switches are the preferred UI control for boolean settings over traditional checkboxes. They are more touch-friendly, visually expressive, and immediately communicate on/off state. The animated transition provides satisfying micro-feedback that improves perceived quality.

## Tech Stack
- HTML
- CSS (no frameworks, no JavaScript)

## Preview
Open demo.html directly in your browser to interact with the toggle switches.

## Contribution Notes
- Uses the CSS checkbox hack (`:checked` + sibling selectors) for state management — no JavaScript required
- Sliding knob animation uses `transform: translateX()` for 60fps performance
- Focus-visible ring for keyboard accessibility
- Reduced-motion safe: knob snaps instantly when `prefers-reduced-motion: reduce`
