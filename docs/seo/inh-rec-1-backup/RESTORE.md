# INH-REC-1 후보 5쪽 원본 백업·복원 절차

백업 일시: 2026-10-11 (INH-REC-1A, 보스 msg 3043·3046·3048). **이 단계에서는 5쪽을 고치지 않았다** — B(제목·메타·H1·첫 문단)는 보스 승인 뒤.

## 백업 내용

| 페이지 | 백업 JSON | 라이브 HTML 사본 | 원고 위치(백업 시점) |
|---|---|---|---|
| /blog/accommodation-business-registration | accommodation-business-registration.json | accommodation-business-registration.live.html | lib/blog-posts-data.ts 9421-9523 |
| /blog/corporate-rnd-center-requirements | corporate-rnd-center-requirements.json | corporate-rnd-center-requirements.live.html | lib/blog-posts-data.ts 1504-1574 |
| /blog/urban-guesthouse-registration-guide | urban-guesthouse-registration-guide.json | urban-guesthouse-registration-guide.live.html | lib/blog-posts-data.ts 452-521 |
| /services/hostel | services-hostel.json | services-hostel.live.html | lib/services-data.ts 334-427 |
| /blog/building-usage-change-guide | building-usage-change-guide.json | building-usage-change-guide.live.html | lib/blog-posts-data.ts 112-171 |

JSON 필드:
- `live.*` — 라이브(배포 e5e727ad)에서 받은 그대로: title, meta_description, h1, canonical, first_paragraph(text/html), body_text, body_html(article 본문), html_sha256
- `source.raw_entry` — 원고 파일의 해당 slug 항목 원문 전체(`{ … },`). 백업 시점 git HEAD 와 동일함을 확인함
- `source.title / meta_title / meta_description / content_first_paragraph_html` — 원고 쪽 필드
- `*.live.html` — 라이브 응답 원본 바이트(CF 이메일 난독화가 적용된 엣지 응답이라 로컬 빌드와 몇 글자 다를 수 있음)
- `manifest.json` — 5쪽 요약(해시·제목·H1·canonical)
- `backup.py` — 백업을 만든 스크립트(다시 돌리면 그 시점 라이브로 덮어쓰니 B 이후에는 돌리지 말 것)

ko 원고만 백업했다. en/zh/ja(`lib/i18n/blog-i18n.ts`)는 B 대상이 아니다. B가 외국어까지 바꾸게 되면 그 전에 따로 백업할 것.

## 복원 절차(B 이후 되돌릴 때)

```bash
cd ~/sites/inhega-website
# 1) 원고 항목 복원 — 쪽마다(바뀔 줄 수만 보려면 --dry-run)
python3 docs/seo/inh-rec-1-backup/restore.py services-hostel --dry-run
python3 docs/seo/inh-rec-1-backup/restore.py services-hostel
#    (다른 이름: accommodation-business-registration · corporate-rnd-center-requirements ·
#     urban-guesthouse-registration-guide · building-usage-change-guide)
git diff --stat            # 해당 원고 파일만 바뀌었는지 확인
# 2) 빌드(게이트 포함) + Pages 번들 조립
export PATH=$HOME/.local/bin:$PATH
npx @opennextjs/cloudflare build && node scripts/build-pages-bundle.mjs
ls .open-next/assets | grep -E '^(_worker.js|cloudflare|middleware|server-functions|cdn-cgi)$'   # 5개 모두 있어야 함
# 3) 배포(프로덕션)
cd .open-next/assets && CLOUDFLARE_API_TOKEN=$(cat ~/.local/secrets/cf_pages_token.txt) \
  CLOUDFLARE_ACCOUNT_ID=$(cat ~/.local/secrets/cf_account_id.txt) \
  npx wrangler pages deploy . --project-name inhega-pages --branch main
# 4) 확인: 라이브 title·description·H1·canonical 이 백업 JSON live.* 와 같은지
```

- `restore.py` 는 slug 로 항목을 찾아 `{` ~ `},` 블록을 통째 바꾼다. 다른 항목·파일은 건드리지 않는다.
- 더 빠른 대안: 이전 배포로 되돌리기(CF 대시보드 Rollback 또는 B 배포 보고서의 롤백 ID). 단, 그 사이 일일 블로그(19:00) 배포가 있었다면 새 글이 사라지므로 원고 복원 방식을 쓸 것.
- 작업트리의 일일 블로그 미커밋 변경(blog-log·blog-posts-data 등)은 그대로 둔다. `git checkout -- lib/blog-posts-data.ts` 로 되돌리면 일일 블로그 글까지 지워지니 금지.

## 복원 검증(2026-10-11)

- 5쪽 모두 `--dry-run` → 변경 줄 0 (백업 = 현재 원고)
- 임시 사본(/tmp)에서 services-hostel seoTitle, building-usage-change-guide meta_title 을 일부러 바꾼 뒤 restore.py 실행 → 원본 파일과 바이트 동일(cmp OK)
