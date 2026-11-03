/**
 * 블로그 상세 정적 전용화 — INHEGA-QA1102-FIX A-3(맥7 승인, 11-03).
 *
 * 왜: 블로그 본문 정본(lib/blog-posts-data.ts ko 2.2MB · lib/i18n/blog-i18n.ts 1.2MB)이 상세 라우트를 통해
 * 워커 번들(CF 한도 25 MiB)에 실린다. 글은 매일 늘어 한도에 다시 닿는다(11-01 8000101 거부 전례).
 * 상세 776쪽(ko·en·zh·ja × 194)은 전부 빌드 때 프리렌더되고 요청마다 바뀌는 것이 없으므로
 * 프리렌더 HTML·RSC 를 정적 자산으로 옮기고, 워커에서는 상세 라우트와 본문 청크를 뺀다.
 * 응답은 여전히 워커 래퍼가 낸다(scripts/build-pages-bundle.mjs 의 blogStatic) — www→apex 301·
 * Link 조기 힌트·Next 스크립트 지연·HTML 캐시 헤더가 다른 페이지와 똑같이 붙는다.
 *
 * 순서: scripts/build.sh(next build + 게이트) 끝에서 실행 → opennextjs-cloudflare 가 남은 .next 로 번들
 *       → build-pages-bundle.mjs 가 .blog-static 을 assets/_blog-static 으로 복사.
 * 한 가지라도 어긋나면(개수 부족·남은 코드가 본문 청크 참조) 빌드를 실패시킨다 — 조용히 배포하지 않는다.
 *
 *   node scripts/blog-static-extract.mjs
 */
import { readFileSync, writeFileSync, existsSync, readdirSync, rmSync, mkdirSync, copyFileSync, statSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const NEXT = join(ROOT, '.next')
const APP = join(NEXT, 'server', 'app')
const OUT = join(ROOT, '.blog-static')
const LOCALES = [
  { loc: 'ko', prefix: '', page: '(ko)/blog/[slug]', route: '/blog/[slug]' },
  { loc: 'en', prefix: 'en/', page: 'en/blog/[slug]', route: '/en/blog/[slug]' },
  { loc: 'zh', prefix: 'zh/', page: 'zh/blog/[slug]', route: '/zh/blog/[slug]' },
  { loc: 'ja', prefix: 'ja/', page: 'ja/blog/[slug]', route: '/ja/blog/[slug]' },
]
const fail = (m) => { console.error(`[blog-static] ✗ ${m}`); process.exit(1) }

// 정본 slug 수 — 목록 색인(prebuild 생성)에서 센다. 프리렌더가 이보다 적으면 실패.
const listIdx = readFileSync(join(ROOT, 'lib/blog-list-index.generated.ts'), 'utf8')
const koCount = JSON.parse(/LIST_POSTS_KO: ListPostKo\[\] = (\[.*\])\n/.exec(listIdx)[1]).length

rmSync(OUT, { recursive: true, force: true })
const prerender = JSON.parse(readFileSync(join(NEXT, 'prerender-manifest.json'), 'utf8'))
const walk = (d) => readdirSync(d).flatMap((f) => { const p = join(d, f); return statSync(p).isDirectory() ? walk(p) : [p] })
const chunkNames = (text) => [...text.matchAll(/server\/chunks\/ssr\/([^"'\s]+?\.js)/g)].map((m) => m[1])

// 1) 프리렌더 HTML·RSC 를 .blog-static 으로 복사(정본 .next 에서만).
// next.config 리디렉트 원본(옛 slug → 새 글 301/308)은 싣지 않는다 — 실으면 래퍼가 정적 HTML 을 먼저 내 리디렉트가 사라진다
// (프리뷰 7b0242bb 실측: ko 10편이 라이브 308 → 200). 자산이 없으면 래퍼가 앱으로 넘겨 리디렉트가 그대로 난다.
const redirectSources = new Set(JSON.parse(readFileSync(join(NEXT, 'routes-manifest.json'), 'utf8')).redirects.map((r) => r.source))
let skippedRedirect = 0
let copied = 0
const slugsBy = {}
for (const L of LOCALES) {
  const dir = join(APP, L.prefix + 'blog')
  const slugs = Object.entries(prerender.routes).filter(([, v]) => v.srcRoute === L.route).map(([k]) => k.split('/').pop())
  if (slugs.length < koCount) fail(`${L.loc} 프리렌더 ${slugs.length} < 정본 ${koCount}`)
  slugsBy[L.loc] = slugs
  mkdirSync(join(OUT, L.loc), { recursive: true })
  for (const s of slugs) {
    if (redirectSources.has(`/${L.prefix}blog/${s}`)) { skippedRedirect++; continue }
    const html = join(dir, `${s}.html`), rsc = join(dir, `${s}.rsc`)
    if (!existsSync(html) || !existsSync(rsc)) fail(`${L.loc}/${s} 프리렌더 파일 없음`)
    // 확장자 .html 은 Pages 가 308 로 벗긴다 — 확장자 없는 짝(.page)으로 둔다.
    copyFileSync(html, join(OUT, L.loc, `${s}.page`))
    copyFileSync(rsc, join(OUT, L.loc, `${s}.rsc`))
    copied++
  }
}

// 2) 상세 라우트 제거 — .next 와, OpenNext 가 실제로 라우트를 찾는 .next/standalone/.next 양쪽에.
const pageKeys = LOCALES.map((L) => `/${L.page}/page`)
function strip(base) {
  const app = join(base, 'server', 'app')
  const detailRefs = new Set()
  for (const L of LOCALES) {
    const dir = join(app, L.prefix + 'blog')
    for (const s of slugsBy[L.loc]) {
      for (const ext of ['.html', '.rsc', '.meta']) rmSync(join(dir, s + ext), { force: true })
      rmSync(join(dir, `${s}.segments`), { recursive: true, force: true })
    }
    const pageJs = join(app, L.page, 'page.js')
    if (!existsSync(pageJs)) fail(`${base.slice(ROOT.length)}: ${L.page}/page.js 없음`)
    for (const n of chunkNames(readFileSync(pageJs, 'utf8'))) detailRefs.add(n)
    rmSync(join(app, L.page), { recursive: true, force: true })
  }
  // 매니페스트에서 상세 라우트를 뺀다 — 남겨 두면 OpenNext 가 없는 페이지 모듈을 찾는다.
  const edit = (file, fn) => { const p = join(base, file); if (!existsSync(p)) return; const j = JSON.parse(readFileSync(p, 'utf8')); fn(j); writeFileSync(p, JSON.stringify(j)) }
  edit('server/app-paths-manifest.json', (j) => { for (const k of pageKeys) delete j[k] })
  edit('app-path-routes-manifest.json', (j) => { for (const k of pageKeys) delete j[k] })
  edit('prerender-manifest.json', (j) => {
    for (const [k, v] of Object.entries(j.routes)) if (LOCALES.some((L) => v.srcRoute === L.route)) delete j.routes[k]
    for (const L of LOCALES) delete j.dynamicRoutes[L.route]
  })
  edit('routes-manifest.json', (j) => { j.dynamicRoutes = j.dynamicRoutes.filter((r) => !LOCALES.some((L) => r.page === L.route)) })

  // 상세 라우트만 쓰던 청크 삭제 — 청크 이름은 빌드마다 바뀌므로(lib_blog-posts-data_ts_* · ArticleBody 합본 등) 이름이 아니라
  // 참조로 고른다: 지운 상세 page.js 가 부르던 청크 중, 남은 서버 파일 어디서도 이름이 나오지 않는 것만 지운다.
  const chunkDir = join(base, 'server', 'chunks', 'ssr')
  const candidates = new Set(detailRefs)
  const removed = []
  let freed = 0
  for (let round = 0; round < 5; round++) {
    const live = walk(join(base, 'server')).filter((p) => /\.(js|json)$/.test(p) && !p.endsWith('.map') && !candidates.has(p.slice(chunkDir.length + 1)))
    const used = new Set()
    for (const p of live) for (const n of chunkNames(readFileSync(p, 'utf8'))) used.add(n)
    const drop = [...candidates].filter((c) => !used.has(c) && existsSync(join(chunkDir, c)))
    if (!drop.length) break
    for (const c of drop) {
      freed += statSync(join(chunkDir, c)).size
      rmSync(join(chunkDir, c), { force: true }); rmSync(join(chunkDir, c + '.map'), { force: true })
      removed.push(c); candidates.delete(c)
    }
  }
  // 검증 — 블로그 본문(HTML 문자열 content)이 남은 서버 코드에 있으면 실패(본문이 워커에 그대로 실린다는 뜻).
  const leftovers = []
  for (const p of walk(join(base, 'server'))) {
    if (!/\.js$/.test(p)) continue
    const t = readFileSync(p, 'utf8')
    if (t.length > 300000 && /content:\s*['"`]<h2|"content":"<h2|content:`/.test(t)) leftovers.push(`${p.slice(ROOT.length)} (${(t.length / 1048576).toFixed(2)} MiB)`)
  }
  if (leftovers.length) fail(`블로그 본문이 남은 서버 파일:\n  ${leftovers.join('\n  ')}`)
  return { removed: removed.length, freed }
}
const main = strip(NEXT)
const SA = join(NEXT, 'standalone', '.next')
const sa = existsSync(join(SA, 'server', 'app')) ? strip(SA) : null
writeFileSync(join(OUT, 'BUILD_ID'), readFileSync(join(NEXT, 'BUILD_ID'), 'utf8').trim())
console.log(`[blog-static] 상세 ${copied}쪽(4언어, 리디렉트 원본 ${skippedRedirect}쪽 제외) → .blog-static, 라우트 4개·청크 ${main.removed}개(${(main.freed / 1048576).toFixed(2)} MiB) 워커에서 제외` +
  (sa ? ` · standalone 청크 ${sa.removed}개(${(sa.freed / 1048576).toFixed(2)} MiB)` : ' · standalone 없음'))
