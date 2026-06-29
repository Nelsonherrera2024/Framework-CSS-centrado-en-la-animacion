# API Error Resilience Guidelines

This guide details code resilience guidelines for scripting integrations, demonstrating caught rate-limit exception handlers.

---

## Technical Overview: The Guardless Request

Script integrations querying GitHub APIs (like assignment logs or comment updates) can crash if rate-limiting blocks requests or credentials expire:

```javascript
// VULNERABLE: A request failure throws an unhandled exception, crashing Node
await octokit.rest.issues.removeAssignees({ ... });
```

### The Remediation
Wrap all network queries inside `try-catch` structures. This allows logging failure metrics and scheduling backoff retries without terminating the process thread:

```javascript
// SECURE: Exceptions are caught, allowing recovery loops
try {
  await octokit.rest.issues.removeAssignees({ ... });
} catch (error) {
  console.error("API error encountered:", error.message);
  // Schedule backoff retry
  setTimeout(retryCall, 5000);
}
```

---

## Verification Steps

1. Open `demo.html` in a browser.
2. Click **Trigger Guardless API** — observe the unhandled exception error crash simulation.
3. Click **Trigger Resilient API** — verify that the try-catch handler intercepts the error, schedules a retry, and resolves the call successfully on the second pass.
