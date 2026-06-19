#!/usr/bin/env bash
set -euo pipefail

RAW_LIMIT=180000
GZIP_LIMIT=30720
MAX_NESTING=3

PASS=0
FAIL=0
WARN=0

check() {
  local name="$1"
  shift
  if "$@" 2>&1; then
    echo "  ✅ $name"
    PASS=$((PASS + 1))
  else
    echo "  ❌ $name"
    FAIL=$((FAIL + 1))
  fi
}

warn_check() {
  local name="$1"
  shift
  if "$@" 2>&1; then
    echo "  ✅ $name"
    PASS=$((PASS + 1))
  else
    echo "  ⚠️  $name"
    WARN=$((WARN + 1))
  fi
}

echo ""
echo "╔════════════════════════════════════════╗"
echo "║  EaseMotion CSS Quality Checks         ║"
echo "╚════════════════════════════════════════╝"
echo ""

echo "── CSS Lint ──"
check "Stylelint" npx stylelint "**/*.css" --config .stylelintrc.json --allow-empty-input

echo ""
echo "── Bundle Size ──"
if [ -f "easemotion.min.css" ]; then
  if [ "$(uname)" = "Darwin" ]; then
    SIZE=$(stat -f%z "easemotion.min.css")
  else
    SIZE=$(stat -c%s "easemotion.min.css")
  fi
  check "Raw size ($SIZE / $RAW_LIMIT bytes)" test "$SIZE" -le "$RAW_LIMIT"

  GZ_SIZE=$(gzip -c "easemotion.min.css" | wc -c | tr -d ' ')
  check "Gzipped size ($GZ_SIZE / $GZIP_LIMIT bytes)" test "$GZ_SIZE" -le "$GZIP_LIMIT"
else
  echo "  ⚠️  easemotion.min.css not found — skipping bundle checks"
fi

echo ""
echo "── Custom Property Validation ──"
if [ -f "core/variables.css" ]; then
  DEFINED=$(grep -oP '--ease-[\w-]+(?=\s*:)' core/variables.css | sort -u)
  ALL_CSS=$(find core components -name '*.css' ! -name 'variables.css' 2>/dev/null || true)
  if [ -n "$ALL_CSS" ]; then
    USED=$(echo "$ALL_CSS" | xargs grep -roP '--ease-[\w-]+' 2>/dev/null | grep -oP '--ease-[\w-]+' | sort -u || true)
    MISSING=false
    for var in $USED; do
      if ! echo "$DEFINED" | grep -qF "$var"; then
        echo "    Undefined: $var"
        MISSING=true
      fi
    done
    if [ "$MISSING" = false ]; then
      echo "  ✅ All custom properties are defined"
      PASS=$((PASS + 1))
    else
      echo "  ❌ Undefined custom properties found"
      FAIL=$((FAIL + 1))
    fi
  else
    echo "  ✅ No CSS files to check"
  fi
else
  echo "  ⚠️  core/variables.css not found"
fi

echo ""
echo "── Naming Convention ──"
CSS_FILES=$(find core components submissions -name '*.css' 2>/dev/null || true)
if [ -n "$CSS_FILES" ]; then
  ISSUES=0
  for f in $CSS_FILES; do
    while IFS= read -r line; do
      CLASSES=$(echo "$line" | grep -oP '\.[a-zA-Z][\w-]*(?=[\s,{])' || true)
      for cls in $CLASSES; do
        cls_name="${cls#.}"
        case "$cls_name" in
          ease-*) ;;
          active|hover|focus|visited|focus-visible|focus-within|first-child|last-child|nth-child*) ;;
          from|to|0%|100%|50%) ;;
          *) echo "    $f: class '$cls_name' lacks ease- prefix"; ISSUES=$((ISSUES + 1)) ;;
        esac
      done
    done < "$f"
  done
  if [ "$ISSUES" -gt 0 ]; then
    echo "  ❌ $ISSUES classes without ease- prefix"
    FAIL=$((FAIL + 1))
  else
    echo "  ✅ All classes use ease- prefix"
    PASS=$((PASS + 1))
  fi
else
  echo "  ⚠️  No CSS files to check"
fi

echo ""
echo "── Nesting Depth ──"
WARN_NEST=0
for f in $CSS_FILES; do
  DEPTH=0
  while IFS= read -r line; do
    case "$line" in
      *{*) DEPTH=$((DEPTH + 1)) ;;
      *}*) DEPTH=$((DEPTH - 1)) ;;
    esac
    if [ "$DEPTH" -gt "$MAX_NESTING" ] && echo "$line" | grep -qP '^\s+\S'; then
      echo "    $f exceeds $MAX_NESTING levels (depth: $DEPTH)"
      WARN_NEST=$((WARN_NEST + 1))
    fi
  done < "$f"
done
if [ "$WARN_NEST" -gt 0 ]; then
  echo "  ⚠️  $WARN_NEST deep nesting warnings"
  WARN=$((WARN + 1))
else
  echo "  ✅ Nesting depth within limits"
  PASS=$((PASS + 1))
fi

echo ""
echo "╔════════════════════════════════════════╗"
echo "║  Results: $PASS passed, $FAIL failed, $WARN warnings"
echo "╚════════════════════════════════════════╝"

[ "$FAIL" -eq 0 ]
