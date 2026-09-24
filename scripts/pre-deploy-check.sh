#!/bin/bash
# Pre-deploy validation — run before every Vercel deployment
# Catches: missing images, category translation gaps, WordPress refs
ERRORS=0
ROOT="$(cd "$(dirname "$0")/.." && pwd)"

# macOS grep 에는 -P 가 없다 — 2026-09-25 이전까지 이 검사는 조용히 0건이었다. -oE 로 바꿨다.
echo "=== 1. Image existence check ==="
grep -h "cover_image:\|'image':\|image:" "$ROOT/lib/blog-posts-data.ts" "$ROOT/lib/services-data.ts" 2>/dev/null \
  | grep -oE "'/images/[^']+'" | tr -d "'" | sort -u | while read img; do
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

echo "=== 4. Client bundle guard: 'use client' → services-catalog ==="
# 왜: Navbar/폼이 'use client' 인 채로 lib/services-catalog.ts 를 import 하면
# 그 체인의 services-data.ts(730KB) + services-i18n.ts(163KB)가 통째로
# 클라이언트 번들에 실린다(2026-09-25 실측: 단일 청크 873KB / br 207KB).
# 클라이언트는 lib/services-menu.ts(경량 생성판)만 써야 한다.
LEAK=0
while IFS= read -r f; do
  if grep -q "from '@/lib/services-catalog'" "$f" && ! grep -q "^import type" <(grep "services-catalog" "$f"); then
    echo "  FAIL: $f 는 'use client' 인데 services-catalog 를 값으로 import 한다 → @/lib/services-menu 를 쓸 것"
    LEAK=$((LEAK+1))
  fi
done < <(grep -rl "'use client'" "$ROOT/app" "$ROOT/components" --include="*.tsx" 2>/dev/null)
if [ "$LEAK" -gt 0 ]; then ERRORS=$((ERRORS+LEAK)); else echo "  OK: 클라이언트 컴포넌트 0건 누수"; fi

echo "=== 5. services-menu.generated.ts 정본 일치 ==="
if node "$ROOT/scripts/build-services-menu.mjs" --check; then
  echo "  OK"
else
  echo "  FAIL: 생성물이 services-data.ts/services-i18n.ts 와 어긋난다"
  ERRORS=$((ERRORS+1))
fi

ERROR_COUNT=$(cat /tmp/predeploy_errors 2>/dev/null | wc -l)
rm -f /tmp/predeploy_errors
TOTAL=$((ERRORS + ERROR_COUNT))
echo ""
echo "=== Result: $TOTAL error(s) found ==="
[ "$TOTAL" -gt 0 ] && exit 1 || exit 0
