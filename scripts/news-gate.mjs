#!/usr/bin/env node
/**
 * 뉴스 기사 페이지 SEO·금지표현 게이트 — 실측용.
 *
 * 기사 본문은 재배포 없이 KV 로 들어오므로 **빌드 게이트가 잡을 수 없다**.
 * 수신단(app/api/news/ingest)이 1차로 막고, 이 스크립트가 실제 발행된 페이지를
 * 다시 훑어 2차로 확인한다. 위반이 하나라도 있으면 exit 1.
 *
 *   node scripts/news-gate.mjs                       # 라이브(inhega.co.kr)
 *   node scripts/news-gate.mjs http://127.0.0.1:8788 # 로컬 wrangler pages dev
 *
 * 검사: HTTP 200 · canonical · og:image(절대 URL) · og:title · description 80~150자
 *       H1 1개 · NewsArticle JSON-LD(datePublished·dateModified·image·author·publisher)
 *       BreadcrumbList · FAQ 가 있으면 FAQPage · 금지 표현 · 원문 링크 rel=nofollow
 */
const BASE = (process.argv[2] || 'https://inhega.co.kr').replace(/[/]+$/, '')
/** canonical 은 어디서 받아 보든 **라이브 주소**여야 한다 — 로컬 검사에서도 이 값과 비교한다. */
const CANON = 'https://inhega.co.kr'

const DESC_MIN = 80
const DESC_MAX = 150

// lib/news-article-schema.ts 의 BANNED_PATTERNS 와 같은 규칙. 둘이 어긋나면
// 수신단은 통과시키는데 실측만 떨어지므로, 규칙을 고칠 때 둘 다 고칠 것.
const BANNED = [
  [/변호사|법무법인|법률사무소|로\s?펌/, '변호사·법무법인 표현'],
  [/보장(?:합니다|해\s?드립|해드립|됩니다|드립니다|을\s?약속)/, '결과 보장 표현'],
  [/100\s?%\s?(?:승인|허가|보장|성공)/, '100% 승인·보장 표현'],
  [/(?:반드시|무조건|틀림없이)\s?(?:승인|허가|통과)/, '무조건 승인 표현'],
  [/(?:수수료|수임료|상담료|대행료|비용|요금|가격|견적)[^.\n]{0,24}?[0-9][0-9,]*\s*(?:원|만원|천원|억원)/, '서비스 가격·수수료 금액'],
]

const attr = (html, re) => (html.match(re) || [])[1] ?? null
const text = (html) => html.replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ')

const violations = []

const listRes = await fetch(`${BASE}/api/news?has_article=1&article=1&limit=200`)
if (!listRes.ok) {
  console.error(`[NEWS GATE] /api/news 응답 ${listRes.status} — 검사 불가`)
  process.exit(1)
}
const { items = [] } = await listRes.json()
if (!items.length) {
  console.log('[NEWS GATE] 기사 0건 — 검사할 페이지가 없다(아직 article 미수신)')
  process.exit(0)
}

for (const it of items) {
  const url = `${BASE}/news/${it.slug}`
  const bad = (m) => violations.push(`${it.slug} :: ${m}`)

  const res = await fetch(url)
  if (res.status !== 200) {
    bad(`HTTP ${res.status}`)
    continue
  }
  const html = await res.text()

  const ogImage = attr(html, /<meta[^>]+property="og:image"[^>]+content="([^"]*)"/) ??
                  attr(html, /<meta[^>]+content="([^"]*)"[^>]+property="og:image"/)
  if (!ogImage) bad('og:image 없음')
  else if (!/^https?:\/\//.test(ogImage)) bad(`og:image 가 절대 URL 이 아님 (${ogImage})`)

  if (!(attr(html, /<meta[^>]+property="og:title"[^>]+content="([^"]*)"/) ??
        attr(html, /<meta[^>]+content="([^"]*)"[^>]+property="og:title"/))) bad('og:title 없음')

  const desc = attr(html, /<meta[^>]+name="description"[^>]+content="([^"]*)"/) ??
               attr(html, /<meta[^>]+content="([^"]*)"[^>]+name="description"/)
  if (!desc) bad('description 없음')
  else {
    const raw = desc.replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&amp;/g, '&')
    if (raw.length < DESC_MIN || raw.length > DESC_MAX) bad(`description ${raw.length}자 (허용 ${DESC_MIN}~${DESC_MAX})`)
  }

  const canonical = attr(html, /<link[^>]+rel="canonical"[^>]+href="([^"]*)"/)
  const wantCanon = `${CANON}/news/${it.slug}`
  if (!canonical) bad('canonical 없음')
  else if (canonical.replace(/[/]+$/, '') !== wantCanon) bad(`canonical 불일치 (${canonical})`)

  const h1 = (html.match(/<h1[\s>]/g) || []).length
  if (h1 !== 1) bad(`H1 ${h1}개 (정확히 1개여야 함)`)

  const blocks = [...html.matchAll(/<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((m) => m[1])
  const nodes = []
  for (const b of blocks) {
    let j
    try { j = JSON.parse(b.replace(/&quot;/g, '"').replace(/\\u003c/gi, '<')) } catch { continue }
    nodes.push(...[].concat(j['@graph'] ?? j))
  }
  const typed = (t) => nodes.find((n) => [].concat(n?.['@type'] ?? []).includes(t))

  const art = typed('NewsArticle')
  if (!art) bad('NewsArticle JSON-LD 없음')
  else {
    if (!art.datePublished) bad('JSON-LD datePublished 없음')
    if (!art.dateModified) bad('JSON-LD dateModified 없음')
    if (!([].concat(art.image ?? [])[0])) bad('JSON-LD image 없음')
    if (art.author?.name !== '유선행정사사무소') bad(`JSON-LD author 가 유선행정사사무소가 아님 (${art.author?.name ?? '없음'})`)
    if (!art.publisher?.name) bad('JSON-LD publisher 없음')
  }
  if (!typed('BreadcrumbList')) bad('BreadcrumbList JSON-LD 없음')
  if (it.article?.faq?.length && !typed('FAQPage')) bad('FAQ 가 있는데 FAQPage JSON-LD 없음')

  const body = text(html)
  for (const [re, label] of BANNED) if (re.test(body)) bad(`금지 표현: ${label}`)

  // 원문은 외부 링크다 — 링크주스를 넘기지 않는다.
  // href 는 HTML 이스케이프돼 나온다(`&` → `&amp;`). 원본 그대로 찾으면 전건 오탐.
  if (it.url) {
    const esc = it.url.replace(/&/g, '&amp;').replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    const a = html.match(new RegExp(`<a[^>]+href="${esc}"[^>]*>`))
    if (!a) bad('원문 링크 없음')
    else if (!/rel="[^"]*nofollow/.test(a[0])) bad('원문 링크에 rel=nofollow 없음')
  }
}

if (violations.length) {
  console.error(`\n[NEWS GATE] 실패 — 기사 ${items.length}건 중 위반 ${violations.length}건\n`)
  for (const v of violations.slice(0, 60)) console.error('  · ' + v)
  if (violations.length > 60) console.error(`  … 외 ${violations.length - 60}건`)
  process.exit(1)
}
console.log(`[NEWS GATE] 통과 — 기사 ${items.length}개 페이지 전항목 이상 없음 (${BASE})`)
