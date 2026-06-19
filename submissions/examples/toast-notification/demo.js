// Tiny JS helper for demo: programmatic creation of toasts using the CSS component
// Keeps core CSS unchanged; this script only inserts/removes demo elements.

(function () {
  function parseCssTime(timeStr) {
    if (!timeStr) return 3000;
    // animation-duration may include multiple comma-separated values, take the first
    const first = timeStr.split(',')[0].trim();
    if (first.endsWith('ms')) return parseFloat(first);
    if (first.endsWith('s')) return parseFloat(first) * 1000;
    return parseFloat(first);
  }

  function getToastDurationMs() {
    const root = getComputedStyle(document.documentElement);
    const varVal = root.getPropertyValue('--ease-toast-duration').trim();
    if (varVal) {
      if (varVal.endsWith('ms')) return parseFloat(varVal);
      if (varVal.endsWith('s')) return parseFloat(varVal) * 1000;
      return parseFloat(varVal) * 1000;
    }
    // fallback to computed animation-duration on a temporary element
    const temp = document.createElement('div');
    temp.className = 'ease-toast';
    temp.style.position = 'absolute';
    temp.style.visibility = 'hidden';
    document.body.appendChild(temp);
    const cs = getComputedStyle(temp).animationDuration;
    const ms = parseCssTime(cs);
    temp.remove();
    return ms || 3000;
  }

  window.showToast = function (type = 'info') {
    const positionSelect = document.getElementById('demoPosition');
    const positionClass = positionSelect ? positionSelect.value : 'ease-toast-top-right';

    const toast = document.createElement('div');
    toast.className = `ease-toast ${positionClass} ease-toast-${type}`;
    toast.style.setProperty('--toast-offset', '1rem');

    const icons = { success: '✓', error: '✕', warning: '!', info: 'i' };
    const titles = { success: 'Success', error: 'Error', warning: 'Warning', info: 'Info' };
    const messages = {
      success: 'Your changes have been saved successfully.',
      error: 'Something went wrong. Please try again.',
      warning: 'Please review your input before continuing.',
      info: 'New updates are available for download.'
    };

    toast.innerHTML = `
      <div class="ease-toast__icon">${icons[type] || 'i'}</div>
      <div class="ease-toast__body">
        <div class="ease-toast__title">${titles[type] || 'Notice'}</div>
        <div class="ease-toast__message">${messages[type] || ''}</div>
      </div>
      <button class="ease-toast__close" aria-label="Dismiss">✕</button>
    `;

    // Close button handler
    toast.querySelector('.ease-toast__close').addEventListener('click', () => removeToast(toast));

    // Append directly to body so fixed positioning works as expected
    document.body.appendChild(toast);

    // Auto-remove after CSS animation duration. Respect hover pause by tracking remaining time.
    const totalMs = getToastDurationMs();
    let start = Date.now();
    let remaining = totalMs;
    let timeoutId = setTimeout(() => removeToast(toast), remaining + 50);

    function clearTimer() { clearTimeout(timeoutId); timeoutId = null; }
    function setTimer(ms) { start = Date.now(); remaining = ms; timeoutId = setTimeout(() => removeToast(toast), ms + 50); }

    function onMouseEnter() {
      if (!timeoutId) return;
      clearTimer();
      const elapsed = Date.now() - start;
      remaining = Math.max(0, remaining - elapsed);
    }

    function onMouseLeave() {
      if (timeoutId) return;
      setTimer(remaining);
    }

    toast.addEventListener('mouseenter', onMouseEnter);
    toast.addEventListener('mouseleave', onMouseLeave);

    // Remove helper with a small exit buffer
    function removeToast(node) {
      if (!node) return;
      node.style.pointerEvents = 'none';
      // Let the CSS exit animation (if any) continue; remove after short delay
      node.addEventListener('animationend', () => node.remove(), { once: true });
      // Fallback: remove after 350ms
      setTimeout(() => node.remove(), 350);
      // cleanup listeners
      node.removeEventListener('mouseenter', onMouseEnter);
      node.removeEventListener('mouseleave', onMouseLeave);
      clearTimer();
    }
  };
})();
