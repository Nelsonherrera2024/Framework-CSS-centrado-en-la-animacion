# Sticky Navigation Bar

**What does this do?**
This component makes a website's navigation header sticky, keeping it locked to the top of the viewport when scrolling, with a modern translucent glass effect (backdrop blur) and a subtle drop shadow to cleanly separate it from background content.

**How is it used?**

```html
<header class="sticky-navbar">
  <div class="navbar-logo">BrandLogo</div>
  <nav class="navbar-links">
    <a href="#" class="nav-link active">Home</a>
    <a href="#" class="nav-link">About</a>
    <a href="#" class="nav-link">Services</a>
    <a href="#" class="nav-link">Contact</a>
  </nav>
</header>
```

**Why is it useful?**
A sticky navigation bar solves a major usability problem where a user must scroll all the way back to the top of a page to access site navigation links. By keeping the header visible, it dramatically improves accessibility and user experience.

This matches EaseMotion CSS's focus on user-centric layouts, offering a reusable structural element that works seamlessly on both desktop (where it is fixed) and mobile/tablet devices (where it acts as a sticky element).
