// inhega 일일 블로그 — 발행 게이트(기계 검증 가능한 항목만).
//
// 근거: NAS `directives/inhega-블로그-발행지침서-v1.0.md`
//   제0장 절대금지 40 / 제4장 URL·슬러그 / 제5장 정량 / 제6장 구조 / 제11장 발행게이트
// 철칙1 "SEO 자산 깎느니 미발행이 낫다" → 한 건이라도 FAIL 이면 그날 발행하지 않는다.
// 사람(맥7 검수봇)이 해야 하는 항목(법령 원문 대조 C1 실질검증, 문체·번역 품질)은
// 여기서 대신하지 않는다. 이 게이트는 "형식·정량·중복·금칙"의 자동 방어선이다.

import { POOL_KEYS, ANGLE_KEYS, topicByKey } from './pool.mjs'
import { c6Hits } from '../lib/c6-banned.mjs'
import { scanHtml } from '../nocite-gate.mjs'
import { scanText as nofreeHits } from '../nofree-gate.mjs'
import { scanText as brandHits } from '../brandname-gate.mjs'

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
  // INHEGA-BLOG-RESTART(2026-10-24 맥7, 보스 msg 3958 SEO 기준): 분량 1,800~3,000자·소제목 3~5.
  // ko 는 글자 단위 — 공백 제외 ≥1,800 이고 공백 포함 ≤3,000(어느 쪽으로 세도 범위 안).
  // en/zh/ja 는 ko 와 정보량을 맞춘 맥4 추정 범위(en 단어, zh·ja 공백 제외 글자) — 맥7 확정치가 오면 이 줄만 바꾼다.
  seo3958: { ko: [1800, 3000], en: [550, 1100], zh: [1200, 2400], ja: [1600, 3200] },
}
export const UNIT = { ko: 'word', en: 'word', zh: 'cjk', ja: 'cjk' }
const UNIT_3958 = { ko: 'char', en: 'word', zh: 'char', ja: 'char' }
export const CJK_CHARS_PER_WORD = { zh: 1.6, ja: 1.8 }

const stripTags = (html) =>
  html.replace(/<!--[\s\S]*?-->/g, '').replace(/<[^>]+>/g, ' ').replace(/&[a-z]+;/g, ' ')

export const textLen = (html) => stripTags(html).replace(/\s+/g, '').length
// 공백 포함 글자수(연속 공백은 1칸) — seo3958 ko 상한용
export const textLenSpaced = (html) => stripTags(html).replace(/\s+/g, ' ').trim().length
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
  const kind = entry.kind === 'pillar' ? 'pillar' : entry.kind === 'seo3958' ? 'seo3958' : 'cluster'
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
  if (kind === 'seo3958') {
    for (const loc of ['ko', 'en', 'zh', 'ja']) {
      const [min, max] = Q[loc]
      const html = entry[loc]?.content || ''
      if (UNIT_3958[loc] === 'word') {
        const n = wordCount(html)
        add(`Q1 ${loc} 분량 ${min}~${max}단어`, n >= min && n <= max, `${n}단어`)
      } else if (loc === 'ko') {
        const n = textLen(html), sp = textLenSpaced(html)
        add(`Q1 ko 분량 공백제외 ≥${min}자·공백포함 ≤${max}자`, n >= min && sp <= max, `공백제외 ${n}자 / 공백포함 ${sp}자`)
      } else {
        const n = textLen(html)
        add(`Q1 ${loc} 분량 ${min}~${max}자(공백 제외)`, n >= min && n <= max, `${n}자`)
      }
    }
  } else {
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
  }
  const h2 = (entry.ko?.content.match(/<h2/g) || []).length
  const [h2min, h2max] = kind === 'pillar' ? [7, 10] : kind === 'seo3958' ? [3, 5] : [5, 7]
  add(`Q2 KO H2 ${h2min}~${h2max}개`, h2 >= h2min && h2 <= h2max, `${h2}개`)
  add('Q3 H4 이하 없음', !/<h[4-6][\s>]/.test(entry.ko?.content || ''), 'ok')
  const faq = (entry.ko?.content.match(/faq-q/g) || []).length
  const [fqmin, fqmax] = kind === 'seo3958' ? [3, 5] : [4, 6]
  add(`Q4 FAQ ${fqmin}~${fqmax}개`, faq >= fqmin && faq <= fqmax, `${faq}개`)
  add('Q5 TOC 존재', /class="toc"/.test(entry.ko?.content || ''), 'ok')
  add('Q6 표 1개 이상', /<table/.test(entry.ko?.content || ''), 'ok')
  // Q7(법령인용 박스 1개 이상)은 NOCITE-ALL-4(보스 msg 3373·3377, 2026-10-17)로 폐지 — 근거·출처 박스를 요구하지 않는다.
  const internal = [...(entry.ko?.content || '').matchAll(/href="\/(blog|services)\/[^"]+"/g)].length
  add('Q8 내부링크 3~6개', internal >= 3 && internal <= 6, `${internal}개`)
  // NOCITE-ALL-4: 국가법령정보센터(law.go.kr) 링크·'원문은 …에서 볼 수 있습니다' 류 안내는 싣지 않는다. 실무 포털 링크만 0~3개.
  const external = [...(entry.ko?.content || '').matchAll(/href="https?:\/\/[^"]+"/g)]
    .filter((m) => /(\.go\.kr|\.or\.kr)/.test(m[0])).length
  const lawLinks = ['ko', 'en', 'zh', 'ja'].reduce((n, l) => n + [...(entry[l]?.content || '').matchAll(/href="https?:\/\/(?:www\.)?law\.go\.kr/g)].length, 0)
  add('Q9 정부 외부링크 0~3개·law.go.kr 0건', external <= 3 && lawLinks === 0, `${external}개, law.go.kr ${lawLinks}건`)
  add('Q10 meta_title 30~60자', (entry.ko?.metaTitle || '').length >= 30 && (entry.ko?.metaTitle || '').length <= 60, `${(entry.ko?.metaTitle || '').length}자`)
  add('Q11 meta_description 80~155자', (entry.ko?.metaDescription || '').length >= 80 && (entry.ko?.metaDescription || '').length <= 155, `${(entry.ko?.metaDescription || '').length}자`)
  // Q12: 빌드의 scripts/seo-gate.mjs 는 description 70~160자를 언어 구분 없이 강제하고
  // 우회 플래그가 없다. 여기서 en/zh/ja 를 막지 않으면 원고는 PASS 를 찍고 그날 빌드가 죽는다
  // (2026-09-25 building-usage-change-requirements 의 en 이 215자로 빌드를 실패시킨 실사고).
  for (const loc of ['en', 'zh', 'ja']) {
    const n = (entry[loc]?.metaDescription || '').length
    add(`Q12 ${loc} meta_description 70~160자`, n >= 70 && n <= 160, `${n}자`)
  }

  // ── B. 구조·디자인 금칙(제6장) ──────────────────────────────────────────────
  add('B1 CTA 블록 존재', /class="cta-box"|class="cta-block"/.test(entry.ko?.content || ''), 'ok')
  add('B2 대표번호 기재·개인번호 없음', /02-363-2251/.test(entry.ko?.content || '') && !/01[016789]-\d{3,4}-\d{4}/.test(entry.ko?.content || ''), 'ok')
  add('B3 금지색 #3b82f6 없음', !/#3b82f6/i.test(JSON.stringify(entry)), 'ok')
  add('B4 --- 구분선·Q1. 형식 없음', !/^---$/m.test(entry.ko?.content || '') && !/Q\d\./.test(entry.ko?.content || ''), 'ok')
  // B5: C6(2026-10-03 맥7, 보스 msg 1698) — 법조 직역 명칭 0건(4언어·메타·FAQ 전부, 'power of attorney' 만 예외).
  // 빌드 조립(build-pages-bundle.mjs)의 C6 게이트가 최후 방어선이지만, 원고 단계에서 막아야 그날 배포 전체가 죽지 않는다.
  { const h = c6Hits(JSON.stringify(entry)); add('B5 C6 법조 직역 명칭 0건', h.length === 0, h.length ? `${h.length}건: ${h[0].match} …${h[0].context}…` : 'ok') }

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

  // ── N. NOCITE-ALL-4(보스 msg 3373·3377, 2026-10-17) ─────────────────────────
  // 화면·메타에 근거·출처·확인일·검토일·국가법령정보센터·'원문 기준으로 작성' 류 표시 0건.
  // 패턴 정본은 scripts/nocite-gate.mjs(빌드 산출물 게이트와 같은 파일). HTML 주석(<!-- 근거: -->)은 화면에 안 나가므로 제외.
  for (const loc of ['ko', 'en', 'zh', 'ja']) {
    const a = entry[loc] || {}
    const html = [a.title, a.metaTitle, a.metaDescription, a.excerpt, a.content].filter(Boolean).join('\n<p>')
      .replace(/<!--[\s\S]*?-->/g, '')
    const hits = scanHtml(`<div>${html}</div>`)
    add(`N1 ${loc} 근거·출처·확인일 표시 0건`, hits.length === 0, hits.length ? `${hits.length}건: [${hits[0].rule}] …${hits[0].ctx}…` : 'ok')
  }

  // ── S. INHEGA-BLOG-RESTART(2026-10-24 맥7 지시, 보스 msg 3958·3373·3382) — seo3958 원고만 ─────────
  if (kind === 'seo3958') {
    const kw = String(entry.keyword || '').trim()
    const t = entry.ko?.title || '', mt = entry.ko?.metaTitle || ''
    // 제목 앞쪽 검색어: 대표 검색어가 제목·메타제목 맨 앞(앞 2자 이내)에서 시작
    add('S1 대표 검색어가 제목·meta_title 앞쪽', !!kw && t.indexOf(kw) >= 0 && t.indexOf(kw) <= 2 && mt.indexOf(kw) >= 0 && mt.indexOf(kw) <= 2, `keyword=${kw} title@${t.indexOf(kw)} meta@${mt.indexOf(kw)}`)
    for (const loc of ['ko', 'en', 'zh', 'ja']) {
      const html = (entry[loc]?.content || '').replace(/<div class="toc">[\s\S]*?<\/div>/, '')
      add(`S2 ${loc} 번호 목록(본문 ol) 1개 이상`, /<ol[\s>]/.test(html), 'ok')
    }
    // 화면에 조문 번호 0건(근거는 <!-- 근거: --> 주석에만) — 법령 이름은 허용
    const ART_RE = /제\s*\d+\s*조(의\s*\d+)?|\bArticles?\s+\d+|第\s*\d+\s*条|別表|별표\s*\d|\bAnnex\s+\d|附表\s*\d/
    for (const loc of ['ko', 'en', 'zh', 'ja']) {
      const a = entry[loc] || {}
      const vis = stripTags([a.title, a.metaTitle, a.metaDescription, a.excerpt, a.content].filter(Boolean).join(' '))
      const m = vis.match(ART_RE)
      add(`S3 ${loc} 화면 조문·별표 번호 0건`, !m, m ? `…${vis.slice(Math.max(0, m.index - 30), m.index + 30)}…` : 'ok')
    }
    // 무료·가격·수수료 표현 0건(법정 금액 포함 — 이 원고 형식은 금액 자체를 싣지 않는다)
    const FREE_RE = /무료|공짜|\bfree\b|免费|免費|無料|タダ/i
    const FEE_RE = /수수료|대행료|상담료|비용은|견적|\bfees?\b|\bprices?\b|\bcosts?\b|费用|手续费|收费|料金|手数料|費用/i
    for (const loc of ['ko', 'en', 'zh', 'ja']) {
      const a = entry[loc] || {}
      const vis = stripTags([a.title, a.metaTitle, a.metaDescription, a.excerpt, a.content].filter(Boolean).join(' '))
      const f = vis.match(FREE_RE), g = vis.match(FEE_RE), mo = vis.match(MONEY_RE)
      add(`S4 ${loc} 무료·수수료·금액 표현 0건`, !f && !g && !mo, f || g || mo ? `「${(f || g || mo)[0]}」 …${vis.slice(Math.max(0, (f || g || mo).index - 30), (f || g || mo).index + 30)}…` : 'ok')
    }
    // 사무소 브랜드: 유선행정사사무소(대표 행정사 정유선)만 — 옛 브랜드·다른 사무소명 0건
    const all = JSON.stringify(entry)
    add('S5 브랜드 유선행정사사무소·정유선 표기', /유선행정사사무소/.test(entry.ko?.content || '') && /정유선/.test(entry.ko?.content || '') && !/비전행정사|이원중|Vision Administrative/i.test(all), 'ok')
    // 허가/등록/신고 오기: 원고가 선언한 틀린 표현(wrongTerms) 4언어 0건
    // wrongTerms 목록 자체는 검사 대상이 아니다 — 4언어 화면 필드만 본다
    const shown = stripTags(['ko', 'en', 'zh', 'ja'].map((l) => { const a = entry[l] || {}; return [a.title, a.metaTitle, a.metaDescription, a.excerpt, a.category, a.content].join(' ') }).join(' '))
    const wrong = (entry.wrongTerms || []).filter((w) => shown.includes(w))
    add('S6 인허가 구분 오기(wrongTerms) 0건', Array.isArray(entry.wrongTerms) && wrong.length === 0, Array.isArray(entry.wrongTerms) ? (wrong.length ? `발견: ${wrong.join(', ')}` : `${entry.wrongTerms.length}개 검사`) : 'wrongTerms 미선언')
    // 사진: 이 글 전용 Pexels 사진 ID 선언(중복 검사는 photo-check.mjs 가 og index·전 사이트 대조)
    add('S7 전용 사진(pexelsId) 선언', Number.isInteger(entry.pexelsId) && entry.pexelsId > 0, `pexelsId=${entry.pexelsId}`)
  }

  // INHEGA-EN-BRAND 2(맥7 10-28): 모든 글·4언어 '무료/free/免费/無料' 0건(scripts/nofree-gate.mjs 와 같은 패턴)
  const nf = ['ko', 'en', 'zh', 'ja'].flatMap((l) => { const a = entry[l] || {}; return nofreeHits([a.title, a.metaTitle, a.metaDescription, a.excerpt, a.category, a.content].join(' ')) })
  add('N1 무료 표현 0건(4언어, NOFREE)', nf.length === 0, nf.length ? `「${nf[0].word}」 …${nf[0].ctx}…` : 'ok')
  // INHEGA-EN-NAME(보스 msg 4270, 10-28): 영문 상호는 'YouSun Administrative Agency' 하나 — 4언어(메타 포함) 다른 꼴 0건(scripts/brandname-gate.mjs)
  //   INHEGA-LOCAL-NAME(10-28): zh·ja 현지 문자 상호(ユソン行政士事務所·柳善行政士事务所 등)도 같은 검사에서 금지
  const bn = ['ko', 'en', 'zh', 'ja'].flatMap((l) => { const a = entry[l] || {}; return brandHits([a.title, a.metaTitle, a.metaDescription, a.excerpt, a.category, a.content].join(' ')) })
  add('N2 상호 YouSun Administrative Agency·대표 Jung Yu-sun 단일 표기(4언어, zh·ja 현지 문자 상호·鄭柳善 금지)', bn.length === 0, bn.length ? `「${bn[0].word}」 …${bn[0].ctx}…` : 'ok')

  const failed = checks.filter((c) => !c.ok)
  return { pass: failed.length === 0, checks, failed }
}

export function printGate(result, label) {
  console.log(`\n── 발행게이트: ${label} ─────────────────────────────`)
  for (const c of result.checks) console.log(`  ${c.ok ? '✓' : '✗'} ${c.id} — ${c.detail}`)
  console.log(result.pass ? '  => PASS' : `  => FAIL ${result.failed.length}건`)
}
