import { describe, it, expect, beforeAll, vi } from 'vitest';
import { JSDOM } from 'jsdom';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const cssPath = resolve(__dirname, '../core/scroll-trigger.css');
const jsPath = resolve(__dirname, '../core/scroll-trigger.js');
const variablesPath = resolve(__dirname, '../core/variables.css');

describe('EaseScroll Scroll-Triggered Transitions', () => {
  let css;
  let jsCode;

  beforeAll(() => {
    css = readFileSync(variablesPath, 'utf8') + readFileSync(cssPath, 'utf8');
    jsCode = readFileSync(jsPath, 'utf8');
  });

  it('should define classes in CSS correctly', () => {
    expect(css).toContain('.ease-scroll');
    expect(css).toContain('.ease-scroll.ease-scroll-pending');
    expect(css).toContain('.ease-scroll.ease-scroll-active');
    expect(css).toContain('.ease-scroll-fade-up');
    expect(css).toContain('.ease-scroll-slide-up');
    expect(css).toContain('.ease-scroll-scale-in');
    expect(css).toContain('.ease-scroll-blur-in');
    expect(css).toContain('.ease-scroll-flip-up');
  });

  it('should override style rules in prefers-reduced-motion: reduce', () => {
    const dom = new JSDOM('<!DOCTYPE html><html><head></head><body></body></html>');
    const document = dom.window.document;
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);

    const sheet = document.styleSheets[0];
    let foundMediaRule = false;
    let foundEaseScrollInMedia = false;

    const findMediaRules = (rules) => {
      let result = [];
      for (const rule of rules) {
        if (rule.media) {
          result.push(rule);
        }
        if (rule.cssRules) {
          result.push(...findMediaRules(rule.cssRules));
        }
      }
      return result;
    };

    const mediaRules = findMediaRules(sheet.cssRules);
    for (const rule of mediaRules) {
      if (rule.media.mediaText.includes("prefers-reduced-motion: reduce")) {
        foundMediaRule = true;
        for (const subRule of rule.cssRules) {
          if (subRule.selectorText === ".ease-scroll") {
            foundEaseScrollInMedia = true;
            expect(subRule.style.opacity).toBe("1");
            expect(subRule.style.transform).toBe("none");
            expect(subRule.style.filter).toBe("none");
            expect(subRule.style.transition).toBe("none");
          }
        }
      }
    }
    expect(foundMediaRule).toBe(true);
    expect(foundEaseScrollInMedia).toBe(true);
  });

  it('should parse custom attributes and set custom properties in JS', () => {
    const dom = new JSDOM(`
      <!DOCTYPE html>
      <html>
        <body>
          <div class="ease-scroll ease-scroll-fade-up" 
               id="test-el"
               data-ease-scroll-delay="250ms" 
               data-ease-scroll-duration="1.2s" 
               data-ease-scroll-easing="ease-in-out">
          </div>
        </body>
      </html>
    `, { runScripts: "dangerously", url: "http://localhost" });

    const win = dom.window;
    const doc = win.document;

    // Mock IntersectionObserver
    const observeMock = vi.fn();
    win.IntersectionObserver = class {
      constructor(callback, options) {
        this.callback = callback;
        this.options = options;
      }
      observe = observeMock;
      unobserve = vi.fn();
    };

    // Mock matchMedia
    win.matchMedia = vi.fn().mockReturnValue({
      matches: false,
      addEventListener: vi.fn()
    });

    // Execute the scroll-trigger script
    const script = doc.createElement("script");
    script.textContent = jsCode;
    doc.body.appendChild(script);

    // Dispatch DOMContentLoaded to trigger initialization
    const event = new win.Event('DOMContentLoaded');
    doc.dispatchEvent(event);

    const el = doc.getElementById("test-el");
    expect(el.style.getPropertyValue('--ease-scroll-delay')).toBe('250ms');
    expect(el.style.getPropertyValue('--ease-scroll-duration')).toBe('1.2s');
    expect(el.style.getPropertyValue('--ease-scroll-easing')).toBe('ease-in-out');
    expect(observeMock).toHaveBeenCalledWith(el);
  });

  it('should immediately activate all elements if reduced motion is preferred', () => {
    const dom = new JSDOM(`
      <!DOCTYPE html>
      <html>
        <body>
          <div class="ease-scroll ease-scroll-fade-up" id="test-el"></div>
        </body>
      </html>
    `, { runScripts: "dangerously", url: "http://localhost" });

    const win = dom.window;
    const doc = win.document;

    // Mock matchMedia to return true for prefers-reduced-motion
    win.matchMedia = vi.fn().mockReturnValue({
      matches: true,
      addEventListener: vi.fn()
    });

    // Execute script
    const script = doc.createElement("script");
    script.textContent = jsCode;
    doc.body.appendChild(script);

    // Dispatch DOMContentLoaded
    const event = new win.Event('DOMContentLoaded');
    doc.dispatchEvent(event);

    const el = doc.getElementById("test-el");
    expect(el.classList.contains('ease-scroll-active')).toBe(true);
  });
});
