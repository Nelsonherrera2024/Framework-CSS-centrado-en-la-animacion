"""
Build docs/contributors.html from /tmp/contributors.json.

Reuses the SAME contributor data fetched by update-contributor-wall.yml
(no extra API calls). Run this immediately after build-contributor-wall.py,
in the same job, while /tmp/contributors.json still exists.

Fallback: if /tmp/contributors.json is missing or empty, leave the existing
docs/contributors.html untouched and exit 0 (never overwrite a working
page with empty data).
"""

import json
import os
import sys
from datetime import datetime, timezone

INPUT = "contributors.json"
OUTPUT = "docs/contributors.html"


def escape(text):
    return (
        str(text)
        .replace("&", "&amp;")
        .replace("<", "&lt;")
        .replace(">", "&gt;")
        .replace('"', "&quot;")
    )


def render_card(c):
    login = c["login"]
    count = c["contributions"]
    return f'''      <li class="contributor-card">
        <a class="contributor-card__link"
           href="https://github.com/{login}"
           target="_blank" rel="noopener noreferrer"
           aria-label="View {escape(login)}'s GitHub profile">
          <img class="contributor-card__avatar"
               src="https://avatars.githubusercontent.com/{login}?s=64"
               alt="{escape(login)}'s avatar" loading="lazy"
               width="64" height="64" />
          <span class="contributor-card__name">{escape(login)}</span>
          <span class="contributor-card__count">{count} commit{"s" if count != 1 else ""}</span>
        </a>
      </li>'''


def build_page(contributors):
    timestamp = datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M UTC")
    cards = "\n".join(render_card(c) for c in contributors)

    return f'''<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Contributors · EaseMotion CSS</title>
  <meta name="description" content="Meet the contributors who help build EaseMotion CSS." />
  <link rel="stylesheet" href="../easemotion.css" />
  <link rel="stylesheet" href="assets/css/contributors-wall.css" />
</head>
<body>
  <main class="contributor-wall" aria-labelledby="contributor-wall-heading">
    <header class="contributor-wall__header">
      <h1 id="contributor-wall-heading">Our Contributors</h1>
      <p>EaseMotion CSS is built with help from {len(contributors)} contributors and counting.</p>
      <p class="contributor-wall__updated">Last synced: {timestamp}</p>
    </header>
    <ul class="contributor-wall__grid" role="list">
{cards}
    </ul>
    <p class="contributor-wall__footer">
      <a href="https://github.com/SAPTARSHI-coder/EaseMotion-css/graphs/contributors">View all on GitHub →</a>
    </p>
  </main>
</body>
</html>
'''


def main():
    if not os.path.exists(INPUT):
        print("contributors.json not found — leaving docs/contributors.html untouched.")
        sys.exit(0)

    with open(INPUT) as f:
        contributors = json.load(f)

    if not contributors:
        print("contributors.json is empty — leaving docs/contributors.html untouched.")
        sys.exit(0)

    contributors.sort(key=lambda c: c.get("contributions", 0), reverse=True)
    html = build_page(contributors)

    with open(OUTPUT, "w", encoding="utf-8") as f:
        f.write(html)

    print(f"Generated {OUTPUT} with {len(contributors)} contributors.")


if __name__ == "__main__":
    main()