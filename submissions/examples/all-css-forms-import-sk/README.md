# all.css Missing forms.css Import Fix

Fixes #4620

## Problem

`easemotion/all.css` imports every component file except `components/forms.css`. Any user importing the full bundle via `all.css` gets no form styles — `.ease-input`, `.ease-field`, `.ease-textarea`, `.ease-select` are all silently missing.

## Fix

Added `@import "../components/forms.css";` to `easemotion/all.css` after the existing `modals.css` import.

## Demo

Open `demo.html` — form inputs render using the framework styles loaded from `all.css`.
