#!/bin/bash
# Pre-deploy validation — run before every Vercel deployment
# Catches: missing images, category translation gaps, WordPress refs
ERRORS=0
ROOT="$(cd "$(dirname "$0")/.." && pwd)"

echo "=== 1. Image existence check ==="
grep -h "cover_image:\|'image':\|image:" "$ROOT/lib/blog-posts-data.ts" "$ROOT/lib/services-data.ts" 2>/dev/null \
  | grep -oP "'/images/[^']+'" | tr -d "'" | sort -u | while read img; do
    if [ ! -f "$ROOT/public$img" ]; then
      echo "  FAIL: missing $img"
      echo "1" >> /tmp/predeploy_errors
    fi
  done

echo "=== 2. WordPress reference check ==="
WP_COUNT=$(grep -rn "wordpress\|wp-content\|wp-json" "$ROOT" --include="*.tsx" --include="*.ts" --include="*.js" 2>/dev/null | grep -v node_modules | grep -v ".next" | wc -l)
if [ "$WP_COUNT" -gt 0 ]; then
  echo "  FAIL: $WP_COUNT WordPress references found"
  ERRORS=$((ERRORS+1))
else
  echo "  OK: 0 WordPress references"
fi

echo "=== 3. Korean text in foreign language pages ==="
for locale in en zh ja; do
  page="$ROOT/app/$locale/page.tsx"
  if [ -f "$page" ]; then
    KO_COUNT=$(grep -c "[가-힣]" "$page" 2>/dev/null || echo 0)
    # categoryLabels keys with Korean are expected (object keys, not rendered)
    RENDERED=$(grep -v "categoryLabels\|serviceLabels\|#\|//" "$page" | grep -c "[가-힣]" 2>/dev/null || echo 0)
    if [ "$RENDERED" -gt 0 ]; then
      echo "  WARN: /$locale/page.tsx has $RENDERED rendered Korean chars"
    else
      echo "  OK: /$locale/page.tsx"
    fi
  fi
done

ERROR_COUNT=$(cat /tmp/predeploy_errors 2>/dev/null | wc -l)
rm -f /tmp/predeploy_errors
TOTAL=$((ERRORS + ERROR_COUNT))
echo ""
echo "=== Result: $TOTAL error(s) found ==="
[ "$TOTAL" -gt 0 ] && exit 1 || exit 0
