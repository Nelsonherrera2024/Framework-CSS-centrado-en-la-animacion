# Deep-Brain Stimulation Neural Tuning Suite — Phase #737

**EaseMotion CSS Showcase** · `submissions/examples/deep-brain-stimulation-neural-tuning-suite-phase-737/`

A dark-mode, clinical neurotech UI showcase simulating an interface for deep-brain stimulation. Features CSS-simulated EEG waveforms, interactive sliders, and animated brain-map nodes.

---

## Live Preview

Open `demo.html` directly in any modern browser:

```bash
open submissions/examples/deep-brain-stimulation-neural-tuning-suite-phase-737/demo.html
```

---

## Design Theme

Neurotech, clinical dark mode, bright neon status colors, data-heavy dashboard.

| Token | Value | Purpose |
|---|---|---|
| `--clr-bg` | `#020617` | Deep slate background |
| `--clr-accent-1`| `#0ea5e9` | Neon Blue / Primary tuning |
| `--clr-accent-2`| `#f472b6` | Cortical Pink / Active states |
| `--clr-accent-3`| `#fde047` | Synaptic Yellow / Diagnostics |

---

## Component Breakdown

### 1. EEG Oscilloscope Simulation
- The bottom panel contains three `.eeg-line` layers that simulate live brainwaves entirely via CSS — no SVG, no JS.
- Each line uses an animated `clip-path: polygon(...)` that morphs between hand-plotted wave shapes (`wave-morph-1`, `wave-morph-2`, `wave-morph-3` keyframes), producing a smooth, connected waveform trace rather than a static pattern.
- Layering three lines at different animation durations (3.2s / 4.5s / 6s) mimics the look of overlapping theta/alpha/beta bands at different frequencies.
- A vertical scanning bar (`eeg-sweep`) runs across the container to mimic a CRT oscilloscope refresh rate.

### 2. Brain Map Visualizer
- A stylized overhead view using an elliptical `border-radius` and `radial-gradient` shading.
- **Electrodes**: `.electrode` nodes support both `:hover` and `:focus-visible` states, and are keyboard-reachable via `tabindex="0"` with `role="button"` and descriptive `aria-label`s. The active node triggers a `ripple-node` keyframe utilizing the `::after` pseudo-element to simulate a continuous electrical pulse.
- **Scanner**: A horizontal laser line sweeps top-to-bottom over the map using the `scan-brain` keyframe.

### 3. Custom Tuning Sliders
- CSS-styled tracks and thumbs to represent hardware tuning dials. Uses absolute positioning and box-shadow glows.
- Each `.slider-track` is keyboard-focusable (`tabindex="0"`, `role="slider"` with `aria-valuenow`/`aria-valuemin`/`aria-valuemax`) and shows a distinct `:focus-visible` outline, separate from the mouse `:hover` treatment.

### 4. Flagged Diagnostics
- Diagnostic cards use a shared `.diag-card` style, but a card can opt into `.is-flagged` to signal an out-of-range reading (used here for **Sync Variance**).
- Flagged cards get a tinted pink border/background plus an inline `.diag-flag` tag ("OUT OF RANGE") so the warning state reads as an intentional design decision, not a stray style.

### 5. Grid Background & Glass Panels
- The `body` features a faint grid made with overlapping `linear-gradient` backgrounds.
- UI panels utilize `backdrop-filter: blur(5px)` over the grid to create depth.

---

## Accessibility Notes

- All interactive elements (sliders, electrodes) are keyboard-reachable and expose `role`/`aria-*` attributes for assistive tech.
- `:focus-visible` states are styled distinctly from `:hover` so keyboard users get clear feedback without affecting mouse interaction.
- `@media (prefers-reduced-motion: reduce)` collapses all animations/transitions to near-zero duration for users who request reduced motion.

---

## File Structure

```
deep-brain-stimulation-neural-tuning-suite-phase-737/
├── demo.html   — Full single-page UI
├── style.css   — Design system + animations
└── README.md   — This documentation
```