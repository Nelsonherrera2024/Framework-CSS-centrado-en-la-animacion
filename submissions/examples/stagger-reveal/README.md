# CSS Stagger Animation System for List/Grid Reveal on Scroll

A pure CSS animation system that creates staggered entrance effects for list and grid items using Intersection Observer and CSS animations.

## Features

- **Staggered Timing**: Sequential animation delays for smooth progressive reveal
- **Multiple Animation Types**: Fade-up, slide-left, and scale-up animations
- **Scroll-Triggered**: Uses Intersection Observer to trigger on viewport visibility
- **Responsive Grid**: Auto-fit grid layout with different configurations
- **Accessibility**: Respects `prefers-reduced-motion` for users preferring reduced animations
- **Pure CSS**: Animation effects are defined in CSS, minimal JavaScript overhead
- **Performance**: Optimized with hardware acceleration

## Animation Types

1. **Fade-up**: Opacity increase with vertical movement
2. **Slide-left**: Horizontal entrance from left with fade
3. **Scale-up**: Starts small and scales to full size

## Configuration

### Stagger Delay
Customize the delay between items:
```css
.card:nth-child(n) { animation-delay: (n-1) * 80ms; }
```

### Animation Duration
Adjust speed:
```css
animation: stagger-fade-up 0.6s ease-out forwards;
/* Change 0.6s to desired duration */
```

### Easing Functions
Available easing options:
- `ease-out`: Fast start, slow end (default)
- `ease-in-out`: Smooth throughout
- `cubic-bezier(0.4, 0, 0.2, 1)`: Custom curve

## Files

- `demo.html` - Complete example with 4 different layouts
- `style.css` - All animations and styling
- `README.md` - Documentation

## Browser Support

- Chrome: Full support
- Firefox: Full support
- Safari: Full support
- Edge: Full support
- IE: Not supported (requires Intersection Observer API)
