# Testimonial Carousel Component

**What does this do?**
An animated testimonial carousel with auto-play, navigation controls, dot indicators, and accessible keyboard and screen reader support.

**How is it used?**
```html
<div class="carousel-container-bb">
  <div class="carousel-viewport-bb">
    <div class="carousel-track-bb" id="carouselTrack-bb">
      <figure class="carousel-slide-bb">
        <div class="carousel-card-bb">
          <div class="carousel-stars-bb">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
          <blockquote class="carousel-quote-bb">"Great product!"</blockquote>
          <div class="carousel-author-bb">
            <div class="carousel-avatar-bb">JD</div>
            <cite class="carousel-name-bb">John Doe</cite>
          </div>
        </div>
      </figure>
    </div>
  </div>
  <div class="carousel-controls-bb">
    <button class="carousel-prev-bb">Prev</button>
    <div class="carousel-dots-bb"><button class="carousel-dot-bb active"></button></div>
    <button class="carousel-next-bb">Next</button>
  </div>
</div>
```

**Why is it useful?**
Testimonials are a core UI pattern for landing pages, SaaS dashboards, and marketing sites. This component brings EaseMotion CSS's animation-first philosophy to a real-world layout, using smooth bouncy transitions, staggered star animations, and full accessibility support — while remaining lightweight and dependency-free. The auto-play pauses on hover, respecting user interaction.
