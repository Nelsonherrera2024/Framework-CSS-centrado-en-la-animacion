# SCSS Mixins Module Migration

A showcase showing how EaseMotion CSS animation and transition mixins are refactored to use the modern Sass module system (`@use`) with namespaced variable resolution.

## What does this do?

This feature migrates the global variable usage inside `scss/_mixins.scss` to use explicit namespaced references from `scss/_variables.scss`, preventing namespace collisions and conforming to the modern Sass standards.

## How is it used?

### Loading & Invoking Mixins in SCSS

Load the mixins module inside your workspace theme files using the Sass `@use` statement:

```scss
// style.scss
@use '../../../scss/mixins';

.card-fade {
  // Apply a standard fade animation
  @include mixins.fade-in();
}

.card-slide {
  // Apply a customized slow slide-up transition
  @include mixins.slide-up($duration: 800ms);
}
```

### HTML Implementation

Provide the target container classes inside your markup:

```html
<div id="demo-area" class="demo-grid">
  <div class="animate-box slide-box"></div>
  <button onclick="toggleActive()">Trigger Animations</button>
</div>
```

## Why is it useful?

1. **Explicit Module Scopes**: Replaces ambiguous global variables with namespaced resolution scopes (e.g. `variables.$duration-normal`), making dependencies clear and robust.
2. **Prevent Name Collisions**: Multiple theme modules can load separate variables and mixin systems without variables overwriting each other globally.
3. **Sass Compile Warning Prevention**: Aligns with modern Sass specifications that deprecate the old `@import` mechanism and global prefixing.
