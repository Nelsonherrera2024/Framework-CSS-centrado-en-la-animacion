/** @vitest-environment jsdom */
import { describe, it, expect } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import Hover from '../submissions/react/my-animated-card/Hover';

describe('Hover', () => {
  it('defaults to the lift effect', () => {
    render(<Hover>Card</Hover>);
    expect(screen.getByText('Card')).toHaveClass('ease-hover-lift');
  });

  it('applies the requested effect', () => {
    render(<Hover effect="glow">Card</Hover>);
    expect(screen.getByText('Card')).toHaveClass('ease-hover-glow');
  });

  it('supports the scale and shake effects', () => {
    const { rerender } = render(<Hover effect="scale">Card</Hover>);
    expect(screen.getByText('Card')).toHaveClass('ease-hover-scale');

    rerender(<Hover effect="shake">Card</Hover>);
    expect(screen.getByText('Card')).toHaveClass('ease-hover-shake');
  });

  it('merges a custom className', () => {
    render(
      <Hover effect="scale" className="my-card">
        Card
      </Hover>
    );
    const el = screen.getByText('Card');
    expect(el).toHaveClass('ease-hover-scale');
    expect(el).toHaveClass('my-card');
  });

  it('renders the given tag', () => {
    render(
      <Hover tag="button" data-testid="btn">
        Click
      </Hover>
    );
    expect(screen.getByTestId('btn').tagName).toBe('BUTTON');
  });

  it('forwards additional props to the rendered element', () => {
    render(
      <Hover data-testid="card" aria-label="Profile card">
        Card
      </Hover>
    );
    expect(screen.getByTestId('card')).toHaveAttribute('aria-label', 'Profile card');
  });
});