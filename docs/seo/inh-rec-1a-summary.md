# INH-REC-1A A·A2 옛 주소 복구 검증 요약 (2026-10-11, 맥4)

입력: ~/km-runs/gsc_known_urls_56d.json(362) + broken_known_urls_1007.json inhega 7건 → 중복 제거 **367 URL**.
산출: `inh-rec-1a-url-audit.csv`(URL별 수정 전·후), `inh-rec-1a-redirect-map.csv`(옛 URL → 최종 URL, 목록 367 + apex↔www 변형 353 = 720행).
도구: ~/work/inh-rec-1a/{audit.py, pasttitle.py, mkcsv.py, regress.py}. 과거 제목은 CF 과거 프로덕션 배포(05-29~09-30, 10개)에 같은 경로를 요청해 받은 H1.

## 건수
| 구분 | 수정 전 | 수정 후 |
|---|---|---|
| 정상 | 341 | **358** |
| 수정필요 | 17 | 0 |
| 미해결 | 9 | 9 |

- 정상 기준: 최종 200 · 리디렉션 1단계 이하 · noindex 없음(meta·X-Robots) · canonical 자기 자신 · 사이트맵 포함 · 내부 링크 유입 1 이상 · 주제 동일/관련.
- 관련성: 동일 358 / 관련 3 / 무관 0 / 최종 404 6. 홈으로 보내는 리디렉션 0.
  - 관련 3: restaurant-permit-vs-report-guide → restaurant-food-service-license-guide, neighborhood-living-facility-conversion-requirements → building-usage-change-case-studies-guide, haccp-mandatory-voluntary → haccp-mandatory-industries.
- 내부 링크 유입 최소 1(고아 0), noindex 0, X-Robots-Tag 0.

## 수정(배포 1회)
- 문제: www 판 옛 slug 가 `www→apex 301` + `앱 308` **2단계 체인**. 목록 안 17건 + 목록 밖 www 변형 43건 = 60건. (`/ko/…` 옛 경로는 www 에서 3단계였다)
- 수정: `scripts/build-pages-bundle.mjs` 워커 래퍼 — www 요청이면 apex 에서 앱 리디렉션(next.config redirects)을 먼저 풀어 **최종 URL 로 한 번에 301**. 리디렉션 규칙(lib/blog-redirects.ts) 자체는 무변경.
- 프로덕션 **17044f97** (롤백 **e5e727ad**). 프리뷰 727b50a6 에서 사이트맵 549쪽+α 553쪽 라이브 대비 HTML 동일(정규화: buildId·CF 이메일 난독화) — 다른 점은 sitemap lastmod(원래 요청 시각으로 찍힘, 기존 동작).
- 재검증: 목록 367 + 변형 367 전부 리디렉션 1단계 이하. 체인 0.

## 미해결 9 (사유)
1~6. 최종 404 — 대응 페이지 없음(관련 페이지로 보낼 곳이 없어 404 유지; 홈·무관 페이지 이동은 soft-404 라 금지)
   - /blog/personal-taxi-license-transfer-202605 (개인택시 면허 양수)
   - /blog/employment-agency-staffing-registration-guide (직업소개소·근로자파견업)
   - /blog/taxi-transportation-business-license-guide (택시·버스·화물운송업)
   - /blog/daycare-center-establishment-guide (어린이집 설치·인가)
   - /blog/security-service-license-guide (경비업 허가)
   - /blog/childcare-service-business-registration-guide (아이돌봄서비스업)
   (www·apex 둘 다 404. 원고는 content/blog/*.md 아카이브에만 있음 — 2026-05 작성, 8/16~9/5 옛 빌드에서 라이브.)
   보스 결정 필요: (a) 아카이브 원고를 행정사 검수 후 복구(200) — 업종 풀(18주제) 밖 주제, (b) 410 으로 명시 종료, (c) 현행 404 유지.
7~9. /blog?page=6·8·9 — 200 이지만 canonical 이 /blog(1쪽)이고 사이트맵에 없음. 목록 템플릿 정책(app/(ko)/blog/page.tsx)이라 A 범위(리디렉션·404) 밖 → 손대지 않음. 글은 전부 사이트맵·내부 링크로 연결돼 있음. 바꾸려면 쪽별 자기 canonical(검토 요청).
