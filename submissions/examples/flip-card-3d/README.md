# 3D Flip Card with Dynamic Face Swap

A pure CSS-based 3D flip card component with smooth perspective transforms and keyboard accessibility.

## Features

- **3D Perspective**: Uses CSS `perspective` and `transform-style: preserve-3d` for authentic 3D depth
- **Dynamic Face Swap**: Smooth rotation between front and back faces using `rotateY(180deg)`
- **Keyboard Accessible**: Full keyboard support with Enter/Space keys and ARIA attributes
- **Responsive Design**: Works perfectly on all screen sizes
- **Smooth Animation**: Cubic-bezier easing for natural motion
- **Accessibility**: Respects `prefers-reduced-motion` preferences

## Technical Details

- `perspective: 1000px` - Creates 3D space depth
- `transform-style: preserve-3d` - Allows 3D positioning of children
- `backface-visibility: hidden` - Hides reversed faces
- `rotateY(180deg)` - Rotates card on Y axis
- `transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)` - Smooth animation curve
