# High-Performance Fitness Architecture Showcases

A full-page landing page deployment that showcases the core layout engine tokens and compositing micro-interactions of EaseMotion CSS without using outside JavaScript dependencies.

## Class Index Reference Catalog

### 1. Structural & Layout Grid Subsystems
- `.ease-layout-section` : Formulates clean spatial padding boundaries to keep sections cleanly separated.
- `.ease-container` : Enforces maximum width limits ($1200\text{px}$) to keep elements aligned across large displays.
- `.ease-grid-3x` : Deploys responsive 3-column layouts that adapt cleanly across mobile and tablet viewports.
- `.ease-grid-2x` : Sets up multi-axis structures to cleanly arrange text alongside media elements.

### 2. Hardware-Accelerated Animation Layers
- `.ease-fade-up` : Promotes target objects directly onto hardware layers using vector offsets (`translate3d`) to ensure smooth entry animations.
- `.ease-delay-1` / `.ease-delay-2` / `.ease-delay-3` : Triggers sequential, staggered entry arrays by managing delay properties natively.

### 3. Interactive Components & States
- `.ease-btn-primary` : Configures spring-based hover transformations (`cubic-bezier`) for high-energy call-to-action buttons.
- `.ease-card-surface` : Creates rich, interactive background containers that leverage non-composite scaling to scale cleanly on high-DPI viewports.
- `.ease-table-scroll` : Encapsulates data tables in safe containers, providing smooth overflow scrolling on mobile layouts.