# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.

## EaseMotion React wrapper components

`src/components/` provides declarative React wrappers over EaseMotion CSS. The
class/style resolution and IntersectionObserver logic live in framework-agnostic
helpers (`animationClasses.js`, `scrollRevealCore.js`) that are unit-tested from
the repo root with `npm test` (see `tests/react-*.test.js`).

### `<Animate>`

Plays a keyframe animation on mount.

```jsx
import Animate from './components/Animate';

// Keyword duration → utility class; delay → inline animation-delay
<Animate type="slide-up" duration="slow" delay={200}>Hello</Animate>

// Numeric duration (ms) is inlined; iteration + lifecycle callbacks
<Animate
  type="pulse"
  duration={800}
  iteration="infinite"
  onStart={() => console.log('start')}
  onEnd={() => console.log('end')}
>
  Live
</Animate>
```

| Prop | Type | Notes |
| --- | --- | --- |
| `type` | string | `fade-in`, `slide-up`, `zoom-in`, `spin`, `bounce`, `shake`, … (unknown → `ease-<type>`) |
| `duration` | `'fast' \| 'medium' \| 'slow'` or number (ms) | keyword → `.ease-duration-*`; number → inline |
| `delay` | number (ms) | inline `animation-delay` |
| `iteration` | `'infinite'` or number | `animation-iteration-count` |
| `hover` | string | inline hover effect (or use `<Hover>`) |
| `onStart` / `onEnd` | function | bound to `onAnimationStart` / `onAnimationEnd` |
| `tag` | string | element to render (default `div`) |

### `<Hover>`

Applies a hover interaction. `lift`, `scale`, `glow`, and `shrink` map to CSS
hover classes; `shake` plays the one-shot `ease-shake` keyframe on each hover-in.

```jsx
import Hover from './components/Hover';

<Hover effect="lift"><button>Lift me</button></Hover>
<Hover effect="shake"><span>Shake on hover</span></Hover>
```

### `<ScrollReveal>`

Reveals content when it scrolls into view using `IntersectionObserver`, honoring
`prefers-reduced-motion` and degrading gracefully where the API is unavailable.

```jsx
import ScrollReveal from './components/ScrollReveal';

<ScrollReveal variant="up" once>
  <section>Revealed on scroll</section>
</ScrollReveal>
```

| Prop | Type | Notes |
| --- | --- | --- |
| `variant` | `'up' \| 'down' \| 'left' \| 'right' \| 'scale' \| 'fade'` | entry direction (default `up`) |
| `once` | boolean | reveal only the first time (default `true`) |
| `threshold` / `rootMargin` | number / string | forwarded to `IntersectionObserver` |
| `onReveal` | function | called with the element once revealed |
