# react-showcase-tests-ja

## What does this do?

Adds a comprehensive automated test suite (64 tests, 4 files) for the **EaseMotion CSS React + Vite showcase** application using **Vitest** and **React Testing Library**, plus a self-contained visual demo (`demo.html`) that documents the test coverage.

Resolves issue **#35169** — *Enhancement: Add Automated Tests for the React Showcase Application*.

---

## How is it used?

### Run the tests

```bash
# from the repository root
cd submissions/examples/react-showcase
npm ci
npm test                 # run all 64 tests once
npm run test:watch       # watch mode
npm run test:coverage    # with coverage report
```

### Test files

| File | Tests | Coverage |
|---|---|---|
| `src/__tests__/App.test.jsx` | 8 | Application renders, sections visible, heading, footer |
| `src/__tests__/Animate.test.jsx` | 22 | Children, class mapping, hover variant, delay/duration, className forwarding |
| `src/__tests__/Modal.test.jsx` | 12 | Visibility, content, ARIA, close via ✕ / Got it / backdrop / Escape |
| `src/__tests__/AnimationPlayground.test.jsx` | 22 | Rendering, default state, all dropdown options, selector interaction |

### HTML class usage

The `demo.html` file uses standard EaseMotion CSS animation utilities exactly as documented:

```html
<!-- Entry animations -->
<header class="ease-slide-down"> … </header>
<section class="ease-fade-in"> … </section>

<!-- Staggered entrance with delay -->
<div class="ease-slide-up" style="animation-delay: 100ms"> … </div>
<div class="ease-zoom-in"  style="animation-delay: 180ms"> … </div>
```

---

## Why is it useful?

EaseMotion CSS philosophy is to **prevent regressions and build contributor confidence**. Without automated tests, any change to the React showcase's `Animate`, `Modal`, or `AnimationPlayground` components could silently break expected behaviour, only discovered through manual testing.

This submission:

- **Prevents regressions** — UI behaviours are machine-verified on every commit.
- **Documents component contracts** — each test is a living specification of how the component should behave.
- **Integrates with CI** — a dedicated `react-showcase-tests` job in `.github/workflows/test.yml` runs the full suite automatically on push/PR.
- **Enables confident refactoring** — contributors can modify the showcase knowing a safety net exists.

---

## Tech Stack

| Tool | Purpose |
|---|---|
| [Vitest v2](https://vitest.dev) | Fast, Vite-native test runner |
| [React Testing Library](https://testing-library.com/react) | DOM-focused component testing |
| [@testing-library/user-event v14](https://testing-library.com/docs/user-event/intro) | Realistic user interaction simulation |
| [@testing-library/jest-dom](https://github.com/testing-library/jest-dom) | Custom DOM matchers (`toBeInTheDocument`, `toHaveClass`, etc.) |
| jsdom | Browser environment simulation for Node.js |

---

## Acceptance Criteria Met

- [x] Tests added for the main `App` component
- [x] `Animate` component behaviour is fully covered (rendering, class mapping, hover, delay, duration)
- [x] `Modal` interactions tested (open/close via button, backdrop, Escape, ARIA)
- [x] Animation selector behaviour verified (dropdown → preview class update)
- [x] All 64 tests pass in CI (`npm test` exit code 0)

---

*Submitted by [@jayshreerathoreai32-hue](https://github.com/jayshreerathoreai32-hue) for GSSoC — EaseMotion CSS*
