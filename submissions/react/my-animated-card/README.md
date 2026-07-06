# EaseMotion React Components

React wrapper components for EaseMotion CSS animations — declarative props instead of hand-written class names.

## Components

- [`<Animate>`](#animate) — apply a keyframe animation, with duration, delay, iteration, hover, and lifecycle callbacks
- [`<Hover>`](#hover) — dedicated hover-only effects (lift, scale, shake, glow)
- [`<ScrollReveal>`](#scrollreveal) — trigger an entry animation when an element scrolls into view

## Installation

Copy `components/Animate.jsx`, `components/Hover.jsx`, and `components/ScrollReveal.jsx` into your project (e.g. `examples/react-vite/src/components/`). They have no runtime dependencies beyond React — the EaseMotion CSS classes they reference must already be loaded on the page.

---

## `<Animate>`

Applies an `ease-animate-{type}` keyframe class, with optional duration, delay, iteration count, hover effect, and animation lifecycle callbacks.

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `type` | `string` | — | Animation type, e.g. `'fade-in'`, `'slide-up'`, `'zoom-in'`, `'spin'`, `'bounce'` → `ease-animate-{type}` |
| `duration` | `'fast' \| 'medium' \| 'slow' \| number` | `'medium'` | Keyword adds `ease-duration-{duration}`; a number (ms) is set as an inline `animationDuration` |
| `delay` | `number` | `0` | Delay in ms, applied as inline `animationDelay` |
| `iteration` | `number \| 'infinite'` | `1` | Applied as inline `animationIterationCount` |
| `hover` | `string` | — | Hover effect, e.g. `'lift'`, `'glow'`, `'scale'`, `'shake'` → `ease-hover-{hover}` |
| `onStart` | `(event) => void` | — | Fired on the native `animationstart` event |
| `onEnd` | `(event) => void` | — | Fired on the native `animationend` event |
| `tag` | `string \| Component` | `'div'` | Element/component to render |
| `className` | `string` | `''` | Additional classes, merged in |
| `style` | `object` | `{}` | Additional inline styles, merged in |

### Usage

```jsx
import Animate from './components/Animate';

<Animate type="fade-in" duration="fast" delay={150}>
  <p>I fade in quickly, after a short delay.</p>
</Animate>

<Animate type="spin" iteration="infinite" onEnd={() => console.log('cycle complete')}>
  <LoaderIcon />
</Animate>

// Staggered list
{items.map((item, i) => (
  <Animate key={item.id} type="slide-up" delay={i * 100}>
    <ListItem item={item} />
  </Animate>
))}
```

---

## `<Hover>`

A focused component for hover-only interactions — use this instead of `<Animate hover="...">` when an element has no entry animation, just a hover effect.

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `effect` | `'lift' \| 'scale' \| 'shake' \| 'glow'` | `'lift'` | → `ease-hover-{effect}` |
| `tag` | `string \| Component` | `'div'` | Element/component to render |
| `className` | `string` | `''` | Additional classes, merged in |
| `style` | `object` | `{}` | Additional inline styles |

### Usage

```jsx
import Hover from './components/Hover';

<Hover effect="lift" className="card">
  <h3>Pricing Card</h3>
</Hover>

<Hover effect="glow" tag="button" onClick={handleClick}>
  Get Started
</Hover>
```

---

## `<ScrollReveal>`

Wraps `IntersectionObserver` to trigger an EaseMotion entry animation the first time (or every time) an element enters the viewport — no manual scroll-listener wiring required.

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `type` | `string` | `'fade-in'` | Animation applied on reveal → `ease-animate-{type}` |
| `duration` | `'fast' \| 'medium' \| 'slow' \| number` | `'medium'` | Same behavior as `<Animate>` |
| `delay` | `number` | `0` | Delay in ms before the reveal animation starts |
| `threshold` | `number` | `0.15` | `IntersectionObserver` threshold (0–1) |
| `rootMargin` | `string` | `'0px'` | `IntersectionObserver` rootMargin |
| `once` | `boolean` | `true` | If `true`, reveals once and stops observing. If `false`, re-triggers on every enter/exit |
| `tag` | `string \| Component` | `'div'` | Element/component to render |
| `className` | `string` | `''` | Additional classes, always applied |
| `hiddenClassName` | `string` | `'ease-reveal-hidden'` | Class applied before reveal — your core CSS should define this (typically `opacity: 0`) |
| `onReveal` | `() => void` | — | Fired the first time the element becomes visible |

### Usage

```jsx
import ScrollReveal from './components/ScrollReveal';

<ScrollReveal type="slide-up">
  <FeatureCard />
</ScrollReveal>

// Re-animates every time it scrolls in and out of view
<ScrollReveal type="fade-in" once={false} threshold={0.3}>
  <StatBanner />
</ScrollReveal>
```

**Required CSS:** make sure your EaseMotion stylesheet defines the hidden state so elements don't flash visible before the observer fires, e.g.:

```css
.ease-reveal-hidden {
  opacity: 0;
}
```

---

## Testing

Tests live in `tests/` and use Jest + [React Testing Library](https://testing-library.com/react). Install the dev dependencies if not already present:

```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom jest-environment-jsdom
```

Make sure your Jest config uses the jsdom environment (needed for DOM assertions and the `ScrollReveal` intersection mock):

```json
{
  "testEnvironment": "jsdom"
}
```

Run the suite:

```bash
npx jest
```

`ScrollReveal.test.jsx` mocks `IntersectionObserver` (not implemented in jsdom) with a minimal stub that lets each test manually fire intersection events — see the top of that file if you need to extend it.
