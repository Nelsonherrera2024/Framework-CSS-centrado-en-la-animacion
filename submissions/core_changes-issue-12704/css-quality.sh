# EaseMotion CSS Quality Scripts
# Local validation helpers mirroring the CI pipeline.
# Usage: bash scripts/css-quality.sh

CDN_LINK="https://cdn.jsdelivr.net/npm/easemotion-css@latest/easemotion.min.css"

echo "=== EaseMotion CSS Quality Checks ==="
echo ""

# 1. Bundle size
FILE="easemotion.min.css"
echo "--- Bundle Size ---"
if [ -f "$FILE" ]; then
  RAW=$(stat -c%s "$FILE" 2>/dev/null || stat -f%z "$FILE" 2>/dev/null)
  GZIPPED=$(gzip -c "$FILE" 2>/dev/null | wc -c | tr -d ' ')
  RAW_LIMIT=180000
  GZIP_LIMIT=32000
  echo "  Raw:    $RAW bytes  (limit: $RAW_LIMIT)  $([ "$RAW" -le "$RAW_LIMIT" ] && echo '✓' || echo '✗')"
  echo "  GZip:   $GZIPPED bytes  (limit: $GZIP_LIMIT)  $([ "$GZIPPED" -le "$GZIP_LIMIT" ] && echo '✓' || echo '✗')"
else
  echo "  $FILE not found (run from repo root)"
fi
echo ""

# 2. CSS variable validation
echo "--- CSS Variable Validation ---"
VARS_FILE="core/variables.css"
if [ -f "$VARS_FILE" ]; then
  DEFINED=$(grep -oP '--ease-[\w-]+(?=\s*:)' "$VARS_FILE" | sort -u)
  USED=$(grep -roP '--ease-[\w-]+' core/ components/ 2>/dev/null | grep -v "$VARS_FILE" | grep -oP '--ease-[\w-]+' | sort -u)
  MISSING=0
  for var in $USED; do
    if ! echo "$DEFINED" | grep -q "^$var$"; then
      echo "  Undefined: $var"
      MISSING=$((MISSING + 1))
    fi
  done
  [ "$MISSING" -eq 0 ] && echo "  All variables defined ✓"
else
  echo "  $VARS_FILE not found"
fi
echo ""

# 3. Naming convention
echo "--- Naming Convention ---"
ISSUES=0
for f in core/*.css components/*.css; do
  [ ! -f "$f" ] && continue
  while IFS= read -r line; do
    if echo "$line" | grep -qP '\.(?!ease-)[a-z][\w-]*(?=\s*\{)'; then
      echo "  Non ease- class in $f"
      ISSUES=$((ISSUES + 1))
    fi
  done < "$f"
done
[ "$ISSUES" -eq 0 ] && echo "  All classes use ease- prefix ✓"
echo ""

# 4. Nesting depth
echo "--- Nesting Depth ---"
MAX_DEPTH=3
WARNINGS=0
for f in core/*.css components/*.css; do
  [ ! -f "$f" ] && continue
  DEPTH=0
  while IFS= read -r line; do
    case "$(echo "$line" | tr -d ' ')" in
      \{*) DEPTH=$((DEPTH + 1)) ;;
      \}*) DEPTH=$((DEPTH - 1)) ;;
    esac
    if [ "$DEPTH" -gt "$MAX_DEPTH" ]; then
      echo "  Deep nesting in $f (depth $DEPTH)"
      WARNINGS=$((WARNINGS + 1))
      DEPTH=$MAX_DEPTH
    fi
  done < "$f"
done
[ "$WARNINGS" -eq 0 ] && echo "  Nesting depth OK ✓"
echo ""

echo "=== Done ==="
