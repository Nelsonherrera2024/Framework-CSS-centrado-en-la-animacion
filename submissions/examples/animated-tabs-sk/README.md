# Animated Tabs

A CSS-only tabbed interface using the radio button hack. Features a sliding underline indicator and smooth content fade transitions across 4 tabs. Created by @saurabhhhcodes.

## Features

- Pure CSS tabs (no JavaScript)
- Radio button hack for tab selection
- Sliding underline indicator with `cubic-bezier` animation
- Smooth content fade transition
- BEM naming conventions
- 4 tabs with distinct content panels

## Usage

Include `style.css`. Each tab is a hidden radio input (`.tabs__radio`) paired with a `<label>` (`.tabs__label`). The active indicator position is driven by `:checked` combinator selectors. Content panels fade in/out using `opacity` + `visibility` transitions.
