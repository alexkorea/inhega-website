#!/bin/bash
# npm run build 본체(맥7 0948, 2026-10-04). next build → 글꼴 게이트 → SEO 게이트.
# 서브셋 밖 글자가 있으면 font-gate 가 home-chars.txt/extra-chars.txt 를 채우고 2 를 돌려준다 →
# 서브셋을 다시 굽고 한 번 더 빌드한다. 홈 문구를 고쳤거나 코퍼스(소스) 밖 글자가 HTML 에 생겼을 때만 일어난다.
set -e
cd "$(dirname "$0")/.."
next build
set +e
node scripts/font-gate.mjs --fix
rc=$?
set -e
if [ $rc -eq 2 ]; then
  python3 scripts/build-font-subset.py
  next build
  node scripts/font-gate.mjs
elif [ $rc -ne 0 ]; then
  exit $rc
fi
# NOCITE-ALL-4(보스 msg 3373·3377, 2026-10-17): 화면·JSON-LD 에 근거·출처·확인일 류 표시가 1건이라도 있으면 빌드 실패.
# 패턴 정본은 scripts/nocite-gate.mjs(맥4 공용 게이트 사본 — 고치지 말 것). 오탐 면제는 scripts/nocite-allow.txt(문구 1줄=1건).
node scripts/nocite-gate.mjs $( [ -f scripts/nocite-allow.txt ] && echo --allow scripts/nocite-allow.txt ) .next/server/app
node scripts/seo-gate.mjs
node scripts/url-preserve-gate.mjs
