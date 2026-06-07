## docs: premium UI redesign — AI integration, mobile sidebar, richer dark/light theme

Built entirely with EaseMotion CSS's own classes + vanilla CSS. No external frameworks, no build tools.

### Changes

**`docs/index.html`** — Complete documentation page overhaul:

**🎨 Colors & Theme**
- Richer dark/light palette — deeper bg (`#050715`), vivid purple accent (`#8b5cf6`), indigo light theme (`#6366f1`)
- Consistent `--shadow`, `--rds` (border-radius), `--grad-start/end` vars across components
- Dual-layer ambient glow adapts to theme
- `clip-path: circle()` GPU-accelerated theme transition animation

**🤖 AI Integration**
- "AI" header button (gradient-styled) with dropdown → ChatGPT / Claude / Gemini
- Sends ALL documentation + code samples as a markdown prompt with project-context instructions
- ChatGPT/Claude pre-fill via `?prompt=` / `new?q=` URL params; Gemini copies to clipboard + opens
- Per-code-block Copy & AI toolbar injected on hover — branded SVG logos per AI
- Dropdowns close on outside click / Escape

**📱 Mobile Sidebar**
- 3-tier responsive: fixed sidebar (>900px), horizontal nav (769–900px), slide-out drawer (≤768px)
- Close button inside drawer, backdrop-filter blur overlay, smooth `cubic-bezier` transform
- AI toolbar always visible on touch devices via `@media (hover: none)`

**📋 Docs UX**
- IntersectionObserver sidebar highlighting
- Copy-class buttons on table code cells
- Shadow-elevated code blocks with border glow on hover
- Responsive tables with horizontal scroll
