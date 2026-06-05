# Responsive Animated Navbar

## What does this do?

Provides a modern, responsive navigation bar component with smooth hover animations, active link indicators, and a mobile-friendly hamburger menu—all built with pure CSS.

## How is it used?

```html
<nav class="navbar">
  <a href="#" class="logo">Brand</a>
  
  <input type="checkbox" id="nav-toggle" class="nav-toggle" aria-label="Toggle menu">
  <label for="nav-toggle" class="nav-hamburger" aria-hidden="true">
    <span></span><span></span><span></span>
  </label>
  
  <ul class="nav-links">
    <li><a href="#" class="active">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Services</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>