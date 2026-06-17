/**
 * EaseMotion — Connection Status / Offline Indicator
 * script.js
 *
 * Detects network state via:
 *   - navigator.onLine (initial check)
 *   - window "online" / "offline" events (live updates)
 *
 * Exposes a minimal public API on window.ConnectionStatus for
 * programmatic control and demo simulation.
 */

(function () {
  "use strict";

  /* ---------------------------------------------------------- *
   *  Constants                                                  *
   * ---------------------------------------------------------- */
  const ONLINE_VISIBLE_MS = 3200; // how long to show the "restored" banner

  /* ---------------------------------------------------------- *
   *  State                                                      *
   * ---------------------------------------------------------- */
  let hideOnlineTimer = null;
  let isCurrentlyOnline = navigator.onLine;

  /* ---------------------------------------------------------- *
   *  DOM references                                             *
   * ---------------------------------------------------------- */
  const banner   = document.getElementById("connection-status");
  const msgEl    = banner  && banner.querySelector(".cs-message");
  const dismissBtn = banner && banner.querySelector(".cs-dismiss");

  if (!banner || !msgEl) {
    console.warn("[EaseMotion] connection-status element not found.");
    return;
  }

  /* ---------------------------------------------------------- *
   *  Helpers                                                    *
   * ---------------------------------------------------------- */

  /**
   * Update the banner's ARIA live region message without
   * triggering redundant screen-reader announcements.
   */
  function setAriaMessage(text) {
    banner.setAttribute("aria-label", text);
  }

  /**
   * Show / hide the banner by toggling state classes.
   * @param {"online"|"offline"|"hidden"} state
   */
  function setBannerState(state) {
    banner.classList.remove("is-online", "is-offline", "is-hidden");

    if (state === "hidden") {
      banner.classList.add("is-hidden");
      document.body.classList.remove("banner-visible");
      banner.setAttribute("aria-hidden", "true");
    } else {
      banner.classList.add(state === "online" ? "is-online" : "is-offline");
      document.body.classList.add("banner-visible");
      banner.removeAttribute("aria-hidden");
    }
  }

  /* ---------------------------------------------------------- *
   *  Core handlers                                              *
   * ---------------------------------------------------------- */

  function handleOffline() {
    clearTimeout(hideOnlineTimer);
    isCurrentlyOnline = false;

    msgEl.textContent = "You're Offline. Trying to reconnect…";
    setAriaMessage("Network offline. Trying to reconnect.");
    setBannerState("offline");
  }

  function handleOnline() {
    isCurrentlyOnline = true;

    msgEl.textContent = "Connection Restored";
    setAriaMessage("Connection restored successfully.");
    setBannerState("online");

    // Auto-hide after a short success window
    hideOnlineTimer = setTimeout(() => {
      setBannerState("hidden");
    }, ONLINE_VISIBLE_MS);
  }

  /* ---------------------------------------------------------- *
   *  Dismiss button (online state only)                         *
   * ---------------------------------------------------------- */
  if (dismissBtn) {
    dismissBtn.addEventListener("click", () => {
      clearTimeout(hideOnlineTimer);
      setBannerState("hidden");
    });

    dismissBtn.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        dismissBtn.click();
      }
    });
  }

  /* ---------------------------------------------------------- *
   *  Event listeners                                            *
   * ---------------------------------------------------------- */
  window.addEventListener("online",  handleOnline);
  window.addEventListener("offline", handleOffline);

  /* ---------------------------------------------------------- *
   *  Initial state check                                        *
   * ---------------------------------------------------------- */
  if (!navigator.onLine) {
    // Page loaded while already offline
    handleOffline();
  } else {
    // Page loaded online — banner hidden (default state)
    setBannerState("hidden");
  }

  /* ---------------------------------------------------------- *
   *  Public API (for demos / testing)                           *
   *                                                             *
   *  window.ConnectionStatus.simulateOffline()                 *
   *  window.ConnectionStatus.simulateOnline()                  *
   *  window.ConnectionStatus.isOnline()                        *
   * ---------------------------------------------------------- */
  window.ConnectionStatus = {
    simulateOffline() { handleOffline(); },
    simulateOnline()  { handleOnline();  },
    isOnline()        { return isCurrentlyOnline; },
  };

  /* ---------------------------------------------------------- *
   *  Demo page controls (wired up if present)                   *
   * ---------------------------------------------------------- */
  const btnOffline = document.getElementById("demo-btn-offline");
  const btnOnline  = document.getElementById("demo-btn-online");

  if (btnOffline) {
    btnOffline.addEventListener("click", () => {
      window.ConnectionStatus.simulateOffline();
    });
  }

  if (btnOnline) {
    btnOnline.addEventListener("click", () => {
      window.ConnectionStatus.simulateOnline();
    });
  }

})();