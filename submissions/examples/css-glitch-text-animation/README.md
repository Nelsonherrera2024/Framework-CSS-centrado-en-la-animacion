# CSS Glitch Text Animation Effect

A highly requested cyberpunk-style text glitch overlay.

## Design
- Uses `data-text` attribute to duplicate the text into `::before` and `::after` pseudo-elements.
- Employs `clip-path` to selectively slice horizontal bands of the duplicated text.
- Shifts the slices rapidly using chaotic `@keyframes` and offset `text-shadow` colors.
