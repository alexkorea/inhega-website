#!/bin/bash
# npm run build 본체(맥7 0948, 2026-10-04). next build → 글꼴 게이트 → SEO 게이트.
# 서브셋 밖 글자가 있으면 font-gate 가 home-chars.txt/extra-chars.txt 를 채우고 2 를 돌려준다 →
# 서브셋을 다시 굽고 한 번 더 빌드한다. 홈 문구를 고쳤거나 코퍼스(소스) 밖 글자가 HTML 에 생겼을 때만 일어난다.
set -e
cd "$(dirname "$0")/.."
# A-3: 블로그 상세는 프리렌더 HTML 을 그대로 낸다 — 날짜 표기(toLocaleDateString)를 종전 워커 실행 시간대(UTC)와 같게 빌드한다.
export TZ=UTC
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
# QA1020-FIX 3(보스 msg 3373): 서비스 상세 본문의 조문 번호·기준일·작성 메타 문장 0 유지(FIX2: en/zh/ja·보류 페이지 포함).
node scripts/svc-nocite-gate.mjs .next/server/app
# TERM-UNIFY-1028(맥7): en 행정사 'Scrivener' 계열 0(slug·judicial scrivener 예외). 원천은 prebuild 에서 같은 게이트.
node scripts/scrivener-gate.mjs .next/server/app
# INHEGA-EN-BRAND 2(맥7 10-28): 전 로캘 '무료/free/免费/無料' 0. 원천은 prebuild 에서 같은 게이트.
node scripts/nofree-gate.mjs .next/server/app
# INHEGA-EN-NAME(보스 msg 4270, 10-28): 영문 상호는 'YouSun Administrative Agency' 하나(Yuseon·YuSun·Attorney 꼴 0). 원천은 prebuild 에서 같은 게이트.
# INHEGA-REP-NAME(보스 msg 4274, 10-28): 대표 영문 이름은 'Jung Yu-sun' 하나(Jeong Yuseon 등 0), 한자 鄭柳善·郑柳善 0 — 같은 게이트.
node scripts/brandname-gate.mjs .next/server/app
node scripts/seo-gate.mjs
node scripts/url-preserve-gate.mjs
# A-3(INHEGA-QA1102-FIX, 맥7 승인 11-03): 블로그 상세 정적 전용화.
# 풋터 사업자번호 게이트는 상세 라우트를 빼기 전에 돌린다(next start 표본에 블로그 상세가 섞인다). 통과 표식은 이번 BUILD_ID.
lsof -b -w -ti tcp:4396 | xargs kill 2>/dev/null || true
node /Users/mac4/scripts/bizno-footer-gate.mjs inhega --start "npx next start -p 4396" --url http://127.0.0.1:4396 --sample 30
cp .next/BUILD_ID .next/bizno-gate.pass
# 상세 776쪽 프리렌더 HTML·RSC → .blog-static, .next 에서 상세 라우트·본문 청크 제거(OpenNext 가 남은 .next 로 워커를 묶는다).
node scripts/blog-static-extract.mjs
