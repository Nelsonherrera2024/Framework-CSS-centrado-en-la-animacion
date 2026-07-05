:root {
  --ease-clock-size: 220px;
  --ease-clock-bg: #111827;
  --ease-clock-border: #1e293b;
  --ease-clock-accent: #38bdf8;
  --ease-clock-sec-color: #ef4444;
  --ease-clock-hand-color: #f8fafc;
}

.ease-clock-face {
  position: relative;
  width: var(--ease-clock-size);
  height: var(--ease-clock-size);
  background-color: var(--ease-clock-bg);
  border: 4px solid var(--ease-clock-border);
  border-radius: 50%;
  box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.5), inset 0 4px 12px rgba(0, 0, 0, 0.4);
  box-sizing: border-box;
}

.clock-center-pin {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 10px;
  height: 10px;
  background-color: var(--ease-clock-sec-color);
  border-radius: 50%;
  z-index: 10;
  box-shadow: 0 2px 4px rgba(0,0,0,0.3);
}

.clock-marker {
  position: absolute;
  background-color: #475569;
}

.marker-12, .marker-6 { width: 4px; height: 12px; left: calc(50% - 2px); }
.marker-3, .marker-9 { width: 12px; height: 4px; top: calc(50% - 2px); }
.marker-12 { top: 6px; }
.marker-6  { bottom: 6px; }
.marker-3  { right: 6px; }
.marker-9  { left: 6px; }

.clock-hand {
  position: absolute;
  bottom: 50%;
  left: 50%;
  border-radius: 4px;
  transform-origin: bottom center;
  will-change: transform;
}

.hand-hour {
  width: 6px;
  height: 50px;
  margin-left: -3px;
  background-color: var(--ease-clock-hand-color);
  z-index: 5;
  animation: easeClockRotate 43200s linear infinite;
}

.hand-minute {
  width: 4px;
  height: 75px;
  margin-left: -2px;
  background-color: var(--ease-clock-hand-color);
  z-index: 6;
  animation: easeClockRotate 3600s linear infinite;
}

.hand-second {
  width: 2px;
  height: 85px;
  margin-left: -1px;
  background-color: var(--ease-clock-sec-color);
  z-index: 7;
  animation: easeClockRotate 60s steps(60) infinite;
}

@keyframes easeClockRotate {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}

.ease-clock-face:hover {
  border-color: var(--ease-clock-accent);
  transition: border-color 0.3s ease;
}

@media (prefers-reduced-motion: reduce) {
  .hand-second { animation-timing-function: linear !important; }
}