# Fix #3959: Fix #3959: @keyframes ease-kf-rotate and ease-kf-fade-* missing animation-fill-mode: both

### Proposed Change
`@keyframes ease-kf-rotate` and ease-kf-fade-* do not set `animation-fill-mode: both`, causing elements to jump to their non-animated state before the animation starts on page load.
```css
.ease-rotate { animation-fill-mode: both; }
.ease-fade-in { animation: ease-kf-fade-in 300ms var(--ease-ease) both; }
```
