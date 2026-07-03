# User Activity Card — EaseMotion CSS

A beautiful, modular, pure CSS component configuration that displays user stream updates, logs, and workflow events across modern SaaS interfaces, dashboards, and profile feeds cleanly.

## Key Features Built In

- **Zero JavaScript Needed**: Utilizes transitions and transforms natively optimized for render performant layout pipelines.
- **Multiple Visual Flairs**: Accompanied by 4 utility variants out of the box (`basic`, `glass`, `filled`, `minimal`, `gradient`).
- **Completely Responsive**: Breaks intelligently from long horizontal flex rows into accessible vertical block nodes under `640px` viewports.
- **Accessible Support Ready**: Respects `prefers-reduced-motion` settings natively to limit visual strain and includes focus indicators for screen readers.

## Structural Usage Pattern

```html
<div class="ease-activity-card ease-activity-basic" tabindex="0">
    <div class="activity-avatar">JD</div>
    <div class="activity-content">
        <h3>User Identity Node</h3>
        <p>Activity logs summary details metadata goes here.</p>
        <span class="activity-time">Timestamp details</span>
    </div>
    <span class="activity-badge success">Status State</span>
</div>