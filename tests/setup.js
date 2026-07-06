// tests/setup.js
import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';

afterEach(() => {
  cleanup();
});

// fireEvent.animationStart/animationEnd dispatch a properly-typed event.
if (typeof window.AnimationEvent === 'undefined') {
  window.AnimationEvent = class AnimationEvent extends Event {
    constructor(type, init = {}) {
      const { animationName = '', elapsedTime = 0, pseudoElement = '', ...rest } = init;
      super(type, rest);
      this.animationName = animationName;
      this.elapsedTime = elapsedTime;
      this.pseudoElement = pseudoElement;
    }
  };
}