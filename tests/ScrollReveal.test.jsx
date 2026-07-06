/** @vitest-environment jsdom */
import { describe, it, expect, vi, beforeEach } from 'vitest';
import React from 'react';
import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import ScrollReveal from '../submissions/react/my-animated-card/ScrollReveal';
let observerInstances;

class MockIntersectionObserver {
  constructor(callback) {
    this.callback = callback;
    this.elements = [];
    observerInstances.push(this);
  }
  observe(el) {
    this.elements.push(el);
  }
  unobserve(el) {
    this.elements = this.elements.filter((e) => e !== el);
  }
  disconnect() {
    this.elements = [];
  }
  trigger(isIntersecting) {
    this.callback(this.elements.map((target) => ({ target, isIntersecting })));
  }
}

beforeEach(() => {
  observerInstances = [];
  global.IntersectionObserver = MockIntersectionObserver;
  // jsdom has no matchMedia implementation — default to "no preference"
  // unless a specific test overrides it.
  window.matchMedia = vi.fn().mockReturnValue({ matches: false });
});

describe('ScrollReveal — default mode (mirrors reveal.js + animations.css)', () => {
  it('applies the base .ease-reveal class before entering the viewport', () => {
    render(<ScrollReveal>Reveal me</ScrollReveal>);
    const el = screen.getByText('Reveal me');
    expect(el).toHaveClass('ease-reveal');
    expect(el).not.toHaveClass('ease-reveal-active');
  });

  it('adds "ease-reveal-active" once revealed (confirmed against animations.css)', () => {
    render(<ScrollReveal>Reveal me</ScrollReveal>);
    const [observer] = observerInstances;

    act(() => observer.trigger(true));

    const el = screen.getByText('Reveal me');
    expect(el).toHaveClass('ease-reveal');
    expect(el).toHaveClass('ease-reveal-active');
  });

  it('applies a direction variant class (confirmed: .ease-reveal-up/down/left/right/scale)', () => {
    render(<ScrollReveal direction="up">Reveal me</ScrollReveal>);
    expect(screen.getByText('Reveal me')).toHaveClass('ease-reveal-up');
  });

  it('supports an activeClassName override for custom setups', () => {
    render(<ScrollReveal activeClassName="is-visible">Reveal me</ScrollReveal>);
    const [observer] = observerInstances;

    act(() => observer.trigger(true));

    expect(screen.getByText('Reveal me')).toHaveClass('is-visible');
  });

  it('calls onReveal exactly once', () => {
    const onReveal = vi.fn();
    render(<ScrollReveal onReveal={onReveal}>Reveal me</ScrollReveal>);
    const [observer] = observerInstances;

    act(() => observer.trigger(true));
    act(() => observer.trigger(true));

    expect(onReveal).toHaveBeenCalledTimes(1);
  });

  it('stops observing after the first reveal when once=true (default)', () => {
    render(<ScrollReveal>Reveal me</ScrollReveal>);
    const [observer] = observerInstances;

    act(() => observer.trigger(true));

    expect(observer.elements).toHaveLength(0);
  });

  it('removes the active class on exit when once=false', () => {
    render(<ScrollReveal once={false}>Reveal me</ScrollReveal>);
    const [observer] = observerInstances;

    act(() => observer.trigger(true));
    expect(screen.getByText('Reveal me')).toHaveClass('ease-reveal-active');

    act(() => observer.trigger(false));
    expect(screen.getByText('Reveal me')).not.toHaveClass('ease-reveal-active');
  });
});

describe('ScrollReveal — explicit keyframe mode (type prop)', () => {
  it('has no animation class and is hidden before entering the viewport', () => {
    render(<ScrollReveal type="fade-in">Reveal me</ScrollReveal>);
    const el = screen.getByText('Reveal me');
    expect(el.className).not.toMatch(/ease-fade-in/);
    expect(el).toHaveStyle({ opacity: 0 });
  });

  it('applies the real "ease-{type}" class once revealed', () => {
    render(<ScrollReveal type="slide-up">Reveal me</ScrollReveal>);
    const [observer] = observerInstances;

    act(() => observer.trigger(true));

    const el = screen.getByText('Reveal me');
    expect(el).toHaveClass('ease-slide-up');
    expect(el.className).not.toMatch(/ease-animate-/);
  });

  it('applies the real ease-duration-{keyword} class in keyframe mode', () => {
    render(
      <ScrollReveal type="slide-up" duration="slow">
        Reveal me
      </ScrollReveal>
    );
    const [observer] = observerInstances;

    act(() => observer.trigger(true));

    expect(screen.getByText('Reveal me')).toHaveClass('ease-duration-slow');
  });
});

describe('ScrollReveal — reduced motion & environment fallbacks (parity with reveal.js)', () => {
  it('reveals immediately when prefers-reduced-motion is set, without observing', () => {
    window.matchMedia = vi.fn().mockReturnValue({ matches: true });
    render(<ScrollReveal>Reveal me</ScrollReveal>);
    expect(screen.getByText('Reveal me')).toHaveClass('ease-reveal-active');
    expect(observerInstances).toHaveLength(0);
  });

  it('falls back to visible immediately when IntersectionObserver is unavailable', () => {
    delete global.IntersectionObserver;
    render(<ScrollReveal type="fade-in">Reveal me</ScrollReveal>);
    expect(screen.getByText('Reveal me')).toHaveClass('ease-fade-in');
  });
});