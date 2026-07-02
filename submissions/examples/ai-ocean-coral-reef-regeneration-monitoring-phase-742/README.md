# UI Design: AI Ocean Coral Reef Regeneration Monitoring (Phase #742)

A complete, responsive, 60fps HTML/CSS UI design showcase for an AI-powered ocean monitoring dashboard. Built using EaseMotion CSS principles, it features staggered layout entrances, sonar radar animations, and pulsing status indicators all rendered beautifully in a dark-mode, aquatic theme. Zero JavaScript is required for the animations.

## 📦 What's included?

- `demo.html`: The complete single-page interactive UI layout.
- `style.css`: The custom stylesheet powering the grid layout and all keyframe animations.
- `README.md`: This documentation file.

## 🛠 Features & Animations

- **Staggered Card Entrances**: Dashboard widgets fade and slide up using the signature `cubic-bezier(0.34, 1.56, 0.64, 1)` spring curve. The stagger is controlled dynamically via a `--card-delay` custom property defined in the HTML.
- **Sonar Radar Rings**: The live heatmap map utilizes multiple staggered `.ease-sonar-ring` elements that animate from `width: 0` to `width: 800px` using infinite linear keyframes (`ease-sonar-expand`) to simulate an active AI scan.
- **Pulsing Reef Nodes**: Data nodes on the map use `currentColor` box-shadows and infinite `transform: scale` animations to throb gently (healthy) or flash aggressively (warning).
- **Hover Micro-interactions**: The sidebar navigation items and the action list items slide slightly to the right (`translateX(4px)`) upon hover, providing tactile feedback without being disruptive.
- **Status Indicator Ring**: The sidebar footer features a continuous double-ring pulse using `scale` and `opacity` keyframes to indicate live AI synchronization.

## 🚀 How to use

Simply open `demo.html` in any modern web browser. 

The CSS is completely self-contained. To extract specific animations for your own projects, look for the following keyframes in `style.css`:
- `@keyframes ease-slide-up` (Card entrance)
- `@keyframes ease-sonar-expand` (Radar scan)
- `@keyframes ease-node-throb` (Healthy node pulse)
- `@keyframes ease-pulse-ring` (Status indicator pulse)

## 🎨 Why this fits EaseMotion

**EaseMotion** is about making UI elements behave with physical predictability and delight.

A static dashboard feels like a spreadsheet. An environmental monitoring dashboard should feel alive and constantly updating. By employing continuous, subtle animations (sonar rings, throbbing data points, a floating logo), the UI communicates its "live, scanning" state non-verbally. The spring-based staggered entrance of the cards also ensures that the initial load feels organized and organic rather than rigid.
