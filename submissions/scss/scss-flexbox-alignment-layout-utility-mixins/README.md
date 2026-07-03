 # Flexbox Alignment & Layout Utility Mixins

A clean, reusable module for managing flexible grid alignment structures seamlessly within the design system.

## Mixins Included

### 1. `flex-layout`
Configures a container as a flexible box layout with full alignment configurations.

### 2. `flex-center`
A helper variant to instantly center inner nodes perfectly along both axes.

### 3. `flex-item`
Allows granular sizing configurations directly on child flex elements.

## Usage Example

```scss
.container {
  @include flex-layout(row, space-between, center, wrap);
}

.centered-card {
  @include flex-center;
}