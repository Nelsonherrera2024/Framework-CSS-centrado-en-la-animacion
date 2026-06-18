# Scroll Entry + Exit Animations Demo

## What does this do?

Demonstrates CSS scroll-driven animations with entry and exit ranges using \nimation-timeline: view()\ and \nimation-range\. Cards fade and slide in as they enter the viewport, then fade and slide out as they leave.

## How is it used?

\\\css
.card {
  animation: fade-slide linear both;
  animation-timeline: view();
  animation-range: entry 0% exit 100%;
}

@keyframes fade-slide {
  entry 0%   { opacity: 0; transform: translateY(60px); }
  entry 100% { opacity: 1; transform: translateY(0); }
  exit 0%    { opacity: 1; transform: translateY(0); }
  exit 100%  { opacity: 0; transform: translateY(-60px); }
}
\\\

## Why is it useful?

Before scroll-driven animations, entry/exit effects required JavaScript scroll listeners and IntersectionObserver. With \nimation-timeline: view()\ and named keyframe ranges (\entry\/\exit\), you get performant, declarative scroll-linked animations that run on the compositor thread — no JavaScript needed.
