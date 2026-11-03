/**
 * 뉴스 표기 게이트(INHEGA-QA1102-FIX B-1, 보스눈 검수 11-02).
 *
 * 1) 한자·가나 게이트 — 자동번역이 중국어·일본어 원문을 그대로 흘린 항목("형성木质复合材料…")은
 *    한국어 카드로 내보내지 않는다. 저장은 하되 목록·기사·사이트맵에서 빼고(게시 보류),
 *    수신 응답 `script_held` 로 n8n 에 알린다. 정정(lib/news-corrections)으로 한자가 사라지면 다시 게시된다.
 *    기사 keywords 는 dropHanKeywords 가 따로 걸러내므로 보지 않는다.
 * 2) 품목명 정리 — 카드 '품목' 칸에 붙는 영문·원어 괄호("차고문 자동개폐기 (Automatic residential …)")를 뗀다.
 *    표시 경로에서만 바꾸고 KV 원본은 그대로 둔다.
 */
import type { NewsArticle } from './news-article-schema'

/** 한자(확장 A·호환 포함)·히라가나·가타카나. */
const FOREIGN_SCRIPT = /[぀-ヿㇰ-ㇿ㐀-䶿一-鿿豈-﫿ｦ-ﾟ]/

type ScriptSource = {
  title_ko: string
  summary_ko: string
  product: string
  opportunity_reason: string
  article: NewsArticle | null
}

/** 한자·가나가 섞인 필드 이름 목록. 비어 있으면 통과. */
export function foreignScriptFields(it: ScriptSource): string[] {
  const hits: string[] = []
  const check = (name: string, v: unknown) => {
    if (typeof v === 'string' && FOREIGN_SCRIPT.test(v)) hits.push(name)
  }
  check('title_ko', it.title_ko)
  check('summary_ko', it.summary_ko)
  check('product', it.product)
  check('opportunity_reason', it.opportunity_reason)
  const a = it.article
  if (a) {
    check('article.meta_title', a.meta_title)
    check('article.meta_description', a.meta_description)
    check('article.h1', a.h1)
    check('article.lead', a.lead)
    ;(a.sections || []).forEach((s, i) => {
      check(`article.sections[${i}].h2`, s.h2)
      ;(s.body || []).forEach((b) => check(`article.sections[${i}].body`, b))
    })
    ;(a.faq || []).forEach((f, i) => {
      check(`article.faq[${i}]`, `${f.q} ${f.a}`)
    })
  }
  return [...new Set(hits)]
}

export const hasForeignScript = (it: ScriptSource) => foreignScriptFields(it).length > 0

const HANGUL = /[가-힣]/
/** 영어 낱말(소문자 3자 이상) — 'MRI'·'THOR-50M'·'PT 18'·'HS 8507' 같은 약어·코드는 남긴다. */
const LATIN_WORD = /[a-z]{3,}/

/** 괄호 속 한 조각을 버릴지. 한글이 있으면 남긴다. */
const dropPart = (p: string) => !HANGUL.test(p) && (LATIN_WORD.test(p) || FOREIGN_SCRIPT.test(p))

/**
 * 품목명에서 영문·원어 괄호를 뗀다.
 * - `(영문)`·`(漢字)` → 통째 삭제, `(염화콜린, choline chloride)` → `(염화콜린)`
 * - 끝이 잘려 닫는 괄호가 없는 꼬리(`… (electronic …, microwave ove`)도 같은 규칙으로 삭제
 */
export function cleanProductLabel(product: string): string {
  if (!product) return product
  const clean = (inner: string) => {
    const parts = inner.split(/[,;]\s*/).map((p) => p.trim()).filter(Boolean)
    const kept = parts.filter((p) => !dropPart(p))
    // 일부를 버렸는데 남은 조각에 한글이 없으면(영문 나열 속 'MRI' 같은 약어) 괄호째 뗀다.
    if (kept.length < parts.length && !kept.some((p) => HANGUL.test(p))) return ''
    return kept.length ? `(${kept.join(', ')})` : ''
  }
  let out = product.replace(/\s*\(([^()]*)\)/g, (_m, inner: string) => {
    const c = clean(inner)
    return c ? c : ''
  })
  out = out.replace(/\s*\(([^()]*)$/, (_m, inner: string) => clean(inner))
  return out.replace(/\s{2,}/g, ' ').replace(/\s+([,;—])/g, ' $1').trim()
}

/** 표시용 — 품목명 정리. 바뀔 것이 없으면 같은 객체를 돌려준다. */
export function cleanNewsProduct<T extends { product: string }>(item: T): T {
  const p = cleanProductLabel(item.product)
  return p === item.product ? item : { ...item, product: p }
}
