/** @vitest-environment jsdom */
import { describe, it, expect, vi } from 'vitest';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import Animate from '../submissions/react/my-animated-card/Animate';

describe('Animate', () => {
  it('applies the real "ease-{type}" class with no "-animate-" infix', () => {
    render(<Animate type="fade-in">Hello</Animate>);
    const el = screen.getByText('Hello');
    expect(el).toHaveClass('ease-fade-in');
    expect(el.className).not.toMatch(/ease-animate-/);
  });

  it('applies the real ease-duration-{keyword} class', () => {
    render(
      <Animate type="fade-in" duration="fast">
        Hi
      </Animate>
    );
    expect(screen.getByText('Hi')).toHaveClass('ease-duration-fast');
  });

  it('sets a numeric duration as a literal ms inline style instead of a class', () => {
    render(
      <Animate type="fade-in" duration={450}>
        Hi
      </Animate>
    );
    const el = screen.getByText('Hi');
    expect(el).toHaveStyle({ animationDuration: '450ms' });
    expect(el.className).not.toMatch(/ease-duration-/);
  });

  it('sets delay as an inline style', () => {
    render(
      <Animate type="fade-in" delay={200}>
        Hi
      </Animate>
    );
    expect(screen.getByText('Hi')).toHaveStyle({ animationDelay: '200ms' });
  });

  it('applies a hover effect class matching hover.css', () => {
    render(
      <Animate type="fade-in" hover="lift">
        Hi
      </Animate>
    );
    expect(screen.getByText('Hi')).toHaveClass('ease-hover-lift');
  });

  it('sets the animation iteration count', () => {
    render(
      <Animate type="rotate" iteration="infinite">
        Hi
      </Animate>
    );
    expect(screen.getByText('Hi')).toHaveStyle({ animationIterationCount: 'infinite' });
  });

  it('renders the given tag', () => {
    render(
      <Animate type="fade-in" tag="section" data-testid="wrapper">
        Hi
      </Animate>
    );
    expect(screen.getByTestId('wrapper').tagName).toBe('SECTION');
  });

  it('merges custom className with generated classes', () => {
    render(
      <Animate type="slide-up" className="card">
        Hi
      </Animate>
    );
    const el = screen.getByText('Hi');
    expect(el).toHaveClass('ease-slide-up');
    expect(el).toHaveClass('card');
  });

  it('fires onStart and onEnd on the native animation lifecycle events', () => {
    const onStart = vi.fn();
    const onEnd = vi.fn();
    render(
      <Animate type="fade-in" onStart={onStart} onEnd={onEnd} data-testid="el">
        Hi
      </Animate>
    );
    const el = screen.getByTestId('el');
    el.addEventListener('animationstart', () => console.log('NATIVE LISTENER FIRED'));
    fireEvent.animationStart(el);
    fireEvent.animationEnd(el);
    expect(onStart).toHaveBeenCalledTimes(1);
    expect(onEnd).toHaveBeenCalledTimes(1);
  });
});