// inhega 일일 블로그 — 발행 게이트(기계 검증 가능한 항목만).
//
// 근거: NAS `directives/inhega-블로그-발행지침서-v1.0.md`
//   제0장 절대금지 40 / 제4장 URL·슬러그 / 제5장 정량 / 제6장 구조 / 제11장 발행게이트
// 철칙1 "SEO 자산 깎느니 미발행이 낫다" → 한 건이라도 FAIL 이면 그날 발행하지 않는다.
// 사람(맥7 검수봇)이 해야 하는 항목(법령 원문 대조 C1 실질검증, 문체·번역 품질)은
// 여기서 대신하지 않는다. 이 게이트는 "형식·정량·중복·금칙"의 자동 방어선이다.

import { POOL_KEYS, ANGLE_KEYS, topicByKey } from './pool.mjs'

// 제5장 정량 — Cluster 기준(Pillar 은 entry.kind='pillar' 로 상향).
// 단위는 지침서 표기("EN1000-1800단어")를 네 언어 모두 단어로 읽는다.
// 이렇게 읽어야 네 수치가 같은 글을 가리켜 제5장 "4언어 정보량 동등"과 모순되지 않는다
// (CN 을 문자로 읽으면 KR 1500단어=약 4,800자 와 CN 2,200자 가 양립 불가).
// 중국어·일본어는 형태소 분석기 없이 단어를 셀 수 없으므로 문자수를 평균 어휘길이로
// 나눈 추정치를 쓴다(zh 1.6자/词, ja 1.8자/語). 게이트 출력에 원시 문자수도 함께 찍는다.
// ※ 이 환산계수는 맥4가 정한 추정치다 — 맥7 확정치가 오면 이 상수만 바꾼다.
export const QUANT = {
  cluster: { ko: [1500, 2500], en: [1000, 1800], zh: [1200, 2200], ja: [1500, 2800] },
  pillar:  { ko: [3000, 4000], en: [2000, 2800], zh: [2500, 3500], ja: [3000, 4500] },
}
export const UNIT = { ko: 'word', en: 'word', zh: 'cjk', ja: 'cjk' }
export const CJK_CHARS_PER_WORD = { zh: 1.6, ja: 1.8 }

const stripTags = (html) =>
  html.replace(/<!--[\s\S]*?-->/g, '').replace(/<[^>]+>/g, ' ').replace(/&[a-z]+;/g, ' ')

export const textLen = (html) => stripTags(html).replace(/\s+/g, '').length
export const wordCount = (html) => stripTags(html).trim().split(/\s+/).filter(Boolean).length

const norm = (s) => (s || '').replace(/\s+/g, '').replace(/[·•\-–—:,."'()「」『』]/g, '').toLowerCase()

// 절차·기간 수치(1~999 정수)만 비교한다 — 금액은 언어별 표기(3억원 / KRW 300 million)가
// 달라 단순 비교가 불가능하므로 C2 금액 대조는 사람 검수로 넘긴다.
function procNumbers(html) {
  const text = stripTags(html)
  const out = []
  for (const m of text.matchAll(/(?<![\d,])(\d{1,3})(?![\d,])/g)) out.push(Number(m[1]))
  return out.sort((a, b) => a - b)
}

// 돈 표현. 법정 금액(과태료·벌금·자본금 등)은 근거주석과 함께면 허용,
// 우리 서비스 가격·수수료는 금액이 있으면 그 자체로 위반(X41 / B3).
const MONEY_RE = /(\d[\d,.]*\s*(?:억|천만|백만|만)?\s*원|KRW\s*[\d,.]+|₩\s*[\d,.]+|[\d,.]+\s*(?:万|億)?\s*(?:元|円|ウォン))/g
const OUR_PRICE_RE = /(대행료|수수료는|상담료|착수금|보수액|서비스\s*비용|견적가|费用为|料金は|our\s+fee)/

export function gateArticle(entry, ctx) {
  const checks = []
  const add = (id, ok, detail) => checks.push({ id, ok: !!ok, detail })
  const kind = entry.kind === 'pillar' ? 'pillar' : 'cluster'
  const Q = QUANT[kind]

  // ── P. 주제 풀 ──────────────────────────────────────────────────────────────
  const topic = topicByKey(entry.topic)
  add('P1 주제 풀(18개) 내', POOL_KEYS.has(entry.topic), `topic=${entry.topic}`)
  add('P2 세부주제(angle) 카탈로그 내', ANGLE_KEYS.has(entry.angle), `angle=${entry.angle}`)

  // ── U. URL·중복 ────────────────────────────────────────────────────────────
  const slug = entry.slug || ''
  const words = slug.split('-').filter(Boolean)
  add('U1 슬러그 형식(영소문자·하이픈)', /^[a-z][a-z0-9-]*[a-z0-9]$/.test(slug) && !slug.includes('--'), slug)
  add('U2 슬러그 3~6단어·60자 이내', words.length >= 3 && words.length <= 6 && slug.length <= 60, `${words.length}단어/${slug.length}자`)
  add('U3 슬러그 날짜·연도·자동번호 없음(X1)', !/\d{4}/.test(slug) && !/-\d+$/.test(slug) && !/_/.test(slug), slug)
  add('U4 슬러그 키워드앞(주제 접두어 일치)', !!topic && topic.slugStems.some((s) => slug === s || slug.startsWith(s + '-')), topic ? topic.slugStems.join('|') : '-')
  add('U5 슬러그 신규(라이브 KO·다국어·아카이브·리다이렉트 전수 대조)',
    !ctx.koSlugs.has(slug) && !ctx.i18nSlugs.has(slug) && !ctx.archiveSlugs.has(slug) && !ctx.redirectedSlugs.has(slug),
    slug)
  const dupTitle = ctx.koTitles.get(norm(entry.ko?.title))
  add('U6 KO 제목 신규(기존 전수 대조)', !dupTitle, dupTitle ? `기존 충돌: ${dupTitle}` : 'ok')
  for (const loc of ['en', 'zh', 'ja']) {
    const d = ctx.i18nTitles[loc].get(norm(entry[loc]?.title))
    add(`U7 ${loc} 제목 신규`, !d, d ? `기존 충돌: ${d}` : 'ok')
  }

  // ── L. 4언어 완비(제9장 hreflang 편측 금지 X11) ─────────────────────────────
  for (const loc of ['ko', 'en', 'zh', 'ja']) {
    const a = entry[loc]
    const okFields = a && ['title', 'metaTitle', 'metaDescription', 'excerpt', 'category', 'content'].every((f) => a[f] && String(a[f]).trim())
    add(`L1 ${loc} 필수필드 완비`, okFields, okFields ? 'ok' : `누락: ${a ? ['title','metaTitle','metaDescription','excerpt','category','content'].filter((f)=>!a?.[f]).join(',') : '전체'}`)
  }

  // ── Q. 정량(제5장) ─────────────────────────────────────────────────────────
  const sizes = {}
  const raw = {}
  for (const loc of ['ko', 'en', 'zh', 'ja']) {
    raw[loc] = textLen(entry[loc]?.content || '')
    sizes[loc] = UNIT[loc] === 'word'
      ? wordCount(entry[loc]?.content || '')
      : Math.round(raw[loc] / CJK_CHARS_PER_WORD[loc])
  }
  for (const loc of ['ko', 'en', 'zh', 'ja']) {
    const [min, max] = Q[loc]
    const detail = UNIT[loc] === 'word' ? `${sizes[loc]}단어` : `${sizes[loc]}단어(추정, ${raw[loc]}자)`
    add(`Q1 ${loc} 분량 ${min}~${max}단어`, sizes[loc] >= min && sizes[loc] <= max, detail)
  }
  const h2 = (entry.ko?.content.match(/<h2/g) || []).length
  const [h2min, h2max] = kind === 'pillar' ? [7, 10] : [5, 7]
  add(`Q2 KO H2 ${h2min}~${h2max}개`, h2 >= h2min && h2 <= h2max, `${h2}개`)
  add('Q3 H4 이하 없음', !/<h[4-6][\s>]/.test(entry.ko?.content || ''), 'ok')
  const faq = (entry.ko?.content.match(/faq-q/g) || []).length
  add('Q4 FAQ 4~6개', faq >= 4 && faq <= 6, `${faq}개`)
  add('Q5 TOC 존재', /class="toc"/.test(entry.ko?.content || ''), 'ok')
  add('Q6 표 1개 이상', /<table/.test(entry.ko?.content || ''), 'ok')
  add('Q7 법령인용 박스 1개 이상', /class="highlight-box"/.test(entry.ko?.content || ''), 'ok')
  const internal = [...(entry.ko?.content || '').matchAll(/href="\/(blog|services)\/[^"]+"/g)].length
  add('Q8 내부링크 3~6개', internal >= 3 && internal <= 6, `${internal}개`)
  const external = [...(entry.ko?.content || '').matchAll(/href="https?:\/\/[^"]+"/g)]
    .filter((m) => /(law\.go\.kr|\.go\.kr|\.or\.kr)/.test(m[0])).length
  add('Q9 정부·법령 외부링크 2~3개', external >= 2 && external <= 3, `${external}개`)
  add('Q10 meta_title 30~60자', (entry.ko?.metaTitle || '').length >= 30 && (entry.ko?.metaTitle || '').length <= 60, `${(entry.ko?.metaTitle || '').length}자`)
  add('Q11 meta_description 80~155자', (entry.ko?.metaDescription || '').length >= 80 && (entry.ko?.metaDescription || '').length <= 155, `${(entry.ko?.metaDescription || '').length}자`)

  // ── B. 구조·디자인 금칙(제6장) ──────────────────────────────────────────────
  add('B1 CTA 블록 존재', /class="cta-box"|class="cta-block"/.test(entry.ko?.content || ''), 'ok')
  add('B2 대표번호 기재·개인번호 없음', /02-363-2251/.test(entry.ko?.content || '') && !/01[016789]-\d{3,4}-\d{4}/.test(entry.ko?.content || ''), 'ok')
  add('B3 금지색 #3b82f6 없음', !/#3b82f6/i.test(JSON.stringify(entry)), 'ok')
  add('B4 --- 구분선·Q1. 형식 없음', !/^---$/m.test(entry.ko?.content || '') && !/Q\d\./.test(entry.ko?.content || ''), 'ok')

  // ── C. YMYL(제11장 C) ──────────────────────────────────────────────────────
  // C1: 수치가 든 KO 문단마다 근거주석이 있어야 한다.
  const paras = (entry.ko?.content || '').split(/(?=<(?:p|li|div|td)[\s>])/)
  const badParas = paras.filter((p) => {
    const t = stripTags(p)
    if (!/\d/.test(t)) return false
    if (!/\d+\s*(일|개월|년|주|㎡|점|원|%|회|명|배|건|호)/.test(t)) return false
    return !/<!--\s*근거:/.test(p) && !/제\s*\d+\s*조/.test(t)
  })
  add('C1 KO 수치문단 전건 근거주석/조문 병기', badParas.length === 0,
    badParas.length ? `근거 없는 수치문단 ${badParas.length}건: ${stripTags(badParas[0]).slice(0, 60)}…` : 'ok')

  // C2: 절차·기간 수치 4언어 일치
  const nums = { ko: procNumbers(entry.ko?.content || ''), en: procNumbers(entry.en?.content || ''), zh: procNumbers(entry.zh?.content || ''), ja: procNumbers(entry.ja?.content || '') }
  const koSet = new Set(nums.ko)
  for (const loc of ['en', 'zh', 'ja']) {
    const extra = nums[loc].filter((n) => !koSet.has(n))
    add(`C2 ${loc} 절차수치 KO 대조`, extra.length === 0, extra.length ? `KO 에 없는 수치: ${[...new Set(extra)].join(',')}` : 'ok')
  }

  // C3/X41: 우리 서비스 가격 금액 0건, 법정 금액은 근거 병기
  for (const loc of ['ko', 'en', 'zh', 'ja']) {
    const html = entry[loc]?.content || ''
    const offenders = []
    for (const m of html.matchAll(MONEY_RE)) {
      const around = html.slice(Math.max(0, m.index - 260), m.index + 260)
      const hasBasis = /<!--\s*근거:/.test(around) || /제\s*\d+\s*조|Article\s*\d+|第\s*\d+\s*条/.test(stripTags(around))
      if (!hasBasis || OUR_PRICE_RE.test(stripTags(around))) offenders.push(m[0].trim())
    }
    add(`C3 ${loc} 가격금액 0건(X41)`, offenders.length === 0, offenders.length ? `근거 없는 금액: ${offenders.slice(0, 3).join(' / ')}` : 'ok')
  }

  const failed = checks.filter((c) => !c.ok)
  return { pass: failed.length === 0, checks, failed }
}

export function printGate(result, label) {
  console.log(`\n── 발행게이트: ${label} ─────────────────────────────`)
  for (const c of result.checks) console.log(`  ${c.ok ? '✓' : '✗'} ${c.id} — ${c.detail}`)
  console.log(result.pass ? '  => PASS' : `  => FAIL ${result.failed.length}건`)
}
