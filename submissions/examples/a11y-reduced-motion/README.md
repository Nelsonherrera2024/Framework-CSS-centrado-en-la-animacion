# Accessibility: Reduced Motion Support

## Problem
Users with vestibular disorders or specific accessibility profiles can experience discomfort or dizziness from rapid UI animations.

## Solution
Implemented a CSS media query `@media (prefers-reduced-motion: reduce)` override. This ensures that when a user requests reduced motion via their OS settings, all heavy transitions and keyframe animations are disabled or simplified, providing a safer and more inclusive experience.

## Usage
Simply define your animations normally. The framework's core accessibility layer will automatically detect the user's preference and apply the necessary overrides.

## Browser Testing
- Chrome (System setting: Accessibility > Display > Reduce Motion)
- Firefox
- Edge
- Safari (macOS Accessibility settings)