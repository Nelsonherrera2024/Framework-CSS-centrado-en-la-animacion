# Issue #10073 — Fix README file structure diagram and roadmap accuracy

## Problem

The `README.md` file structure and roadmap sections are significantly outdated:

1. **File Structure** (`components/`) — lists only `buttons.css` and `cards.css`, but the actual directory contains **15 CSS component files** plus `chip-demo.html` (16 files total). Missing: badges, chip, ease-marquee, footer, forms, loaders, masonry, modals, navbar, scroll-progress, sidebar, tabs, tooltips.

2. **File Structure** (`submissions/examples/`) — shows only 4 entries (hover-grow, hover-shimmer, card-lift, button-glow), while the actual directory contains **3,754 submissions**.

3. **File Structure** — missing entries for `scss/`, `scripts/`, `tests/`, `vitest.config.js`, `package.json`, `node_modules/`.

4. **File Structure** — `docs/` directory shows only 2 files but contains 10+ files/dirs (including accessibility-guide.md, css-variable-theming.md, masonry-layout-guide.md, etc.).

5. **Roadmap** — marks modals, tooltips, navbar, sidebar, tabs, badges as "Planned — v1.2/v1.3" when they are **already shipped** in `components/`. Form components also exist (`components/forms.css`) but are marked as Planned.

6. **Project Statistics** — "Components: Buttons (6 variants), Cards (13 variants)" doesn't reflect the expanded component library.

## Changes Proposed

### 1. File Structure — `components/`
Replace the 2-entry component list with all 15 CSS files + chip-demo.html:

```markdown
├── components/                 ← MAINTAINER-ONLY
│   ├── badges.css              ← Badge component
│   ├── buttons.css             ← 6 variants, 4 sizes, pill, icon, group
│   ├── cards.css               ← 13 card variants
│   ├── chip.css                ← Multi-select chip group
│   ├── ease-marquee.css        ← Marquee animation component
│   ├── footer.css              ← Grid footer with social icons
│   ├── forms.css               ← Input, checkbox, toggle form components
│   ├── loaders.css             ← Spinner, pulse, ping, dots loaders
│   ├── masonry.css             ← 2/3/4 column masonry layouts
│   ├── modals.css              ← Modal via :target pseudo-class
│   ├── navbar.css              ← Glass navbar (sticky, blur variants)
│   ├── scroll-progress.css     ← Scroll-driven progress bar
│   ├── sidebar.css             ← Collapsible sidebar layout
│   ├── tabs.css                ← CSS-only tabs (radio button pattern)
│   ├── tooltips.css            ← Pure CSS tooltip (data-position)
│   └── chip-demo.html          ← Chip component demo
```

### 2. File Structure — `submissions/examples/`
Use a truncated representation showing the count:

```markdown
├── submissions/                ← CONTRIBUTOR AREA
│   ├── README.md               ← full submission workflow
│   ├── docs/                   ← documentation improvements
│   └── examples/               ← 3,754+ submissions — see folder
```

### 3. File Structure — Add missing directories

Add `scss/`, `scripts/`, `tests/` directories to the tree.

### 4. File Structure — `docs/` 
Expand docs listing to show the key files:

```markdown
├── docs/
│   ├── accessibility-guide.md  ← WCAG compliance guide
│   ├── css-variable-theming.md ← Design token theming guide
│   ├── index.html              ← full documentation site
│   ├── demo.html               ← deployed live demo page
│   ├── masonry-layout-guide.md ← Masonry grid documentation
│   ├── scroll-snap-utilities.md ← Scroll snap reference
│   └── ...
```

### 5. Roadmap Updates
Move shipped features from "Planned" to "Shipped":

| Feature | Status |
|---------|--------|
| ✅ Modal components | **Shipped — v1.2** |
| ✅ Tooltip components | **Shipped — v1.2** |
| ✅ Navigation components (navbar, sidebar) | **Shipped — v1.3** |
| ✅ CSS-only tabs | **Shipped — v1.3** |
| ✅ Badge components | **Shipped — v1.3** |
| ✅ Form components (inputs, checkboxes, toggles) | **Shipped — v1.4** |
| 🔜 Dark mode token layer | **Planned — v1.4** |
| 🔜 Scroll-triggered animations (IntersectionObserver) | **Planned — v1.4** |
| 🔜 Avatar, progress bar components | **Planned — v1.4** |
| 🔜 Accordion component | **Planned — v1.5** |
| 🔜 Theming CLI | **Exploring** |

### 6. Project Statistics
Update components count: "15 component files"

## Affected File
- `README.md` — File structure tree, Roadmap table, Project Statistics table
