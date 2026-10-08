// BEYE-1007-FIX #12 (맥7·보스눈 QA): 서비스 상세 본문·FAQ 문장 끝의 괄호 조문 나열 "(법 제37조 제5항, 시행령 …)" 을
// 고객 화면에서 빼고, 페이지 맨 끝 '근거 법령' 접기(details) 1개로 모은다. 원고(services-data·industry-pages)는
// 그대로 두고 렌더 단계에서만 옮긴다 — 문장·숫자는 바꾸지 않는다.
//
// 괄호 안이 '조문 표시만'일 때만 뺀다. 기한·금액·대상·'위반'·'허가'·시행일 같은 사실이 섞인 괄호는 그대로 둔다.
// (2026-10-08 빌드 실측: ko 서비스 60쪽 본문에 남는 조문 괄호는 사실이 섞인 19개뿐)
const W = String.raw`[가-힣·]+`
const LAW = String.raw`(?:「[^」]{1,60}」|같은\s?(?:법|영|규칙)|(?:${W}\s){0,5}[가-힣·]*(?:법률|법|령|규칙|규정)|법|영|시행령|시행규칙|규칙)`
const UNIT = String.raw`(?:제\s?\d+(?:조의\d+|조|항|호의\d+|호|목)(?:의\d+)?|[가-하]목(?:\s?\d+)?|별표\s?\d+(?:의\d+)?|별지\s?제?\d+호(?:의\d+)?\s?서식|제\d+호(?:의\d+)?\s?서식|같은\s?조|같은\s?항|단서|본문|전단|후단|각\s?호|각\s?목|별지|부칙|준용|괄호|~|및|또는)`
const DATE = String.raw`\d{4}-\d{2}-\d{2}\s?조회\s?기준`
const PURE = new RegExp(String.raw`^(?:\s|,|·|${DATE}|${LAW}|${UNIT})+$`)
const DATE_TAIL = new RegExp(String.raw`,?\s*${DATE}`, 'g')
const PAREN = /\s?[(（]([^()（）]*)[)）]/g

export function isPureLawRef(inner: string): boolean {
  const t = inner.replace(/<\/?strong>/g, '').trim()
  if (!/(제\s?\d+\s?조|별표|별지|조의\d|같은\s?조\s?제)/.test(t)) return false
  return PURE.test(t)
}

/** 텍스트(HTML 가능)에서 순수 조문 괄호를 빼고, 뺀 조문을 refs 에 순서대로(중복 없이) 모은다. */
export function pullLawRefs(text: string, refs: string[]): string {
  return text.replace(PAREN, (all, inner: string) => {
    if (!isPureLawRef(inner)) return all
    let label = inner.replace(/<\/?strong>/g, '').replace(DATE_TAIL, '').trim()
    // '(같은 조 제13항)' 은 따로 떼면 뜻이 없다 — 바로 앞 조문의 조 번호로 풀어 적는다.
    if (/^같은\s?조/.test(label)) {
      const prev = refs.length ? refs[refs.length - 1].match(/^(.*?제\s?\d+조(?:의\d+)?)/) : null
      if (!prev) return all
      label = label.replace(/^같은\s?조/, prev[1])
    }
    if (label && !refs.includes(label)) refs.push(label)
    return ''
  })
}

/**
 * services-data overview 의 '근거 법령' 절(<h2 id="svc-law"> ~ 다음 <h2>)을 잘라 낸다.
 * 목차의 같은 항목도 함께 뺀다. 잘라 낸 HTML 은 맨 끝 접기 안으로 옮겨진다.
 */
export function splitLawSection(html: string): { body: string; law: string } {
  const start = html.indexOf('<h2 id="svc-law">')
  if (start < 0) return { body: html, law: '' }
  const next = html.indexOf('<h2', start + 4)
  const end = next < 0 ? html.length : next
  const section = html.slice(start, end).replace(/^<h2 id="svc-law">[\s\S]*?<\/h2>\s*/, '')
  const body = (html.slice(0, start) + html.slice(end)).replace(/<li><a href="#svc-law">[\s\S]*?<\/a><\/li>/, '')
  return { body, law: section }
}

export const LAW_REFS_HEADING: Record<'ko' | 'en' | 'zh' | 'ja', string> = {
  ko: '근거 법령',
  en: 'Legal basis',
  zh: '法律依据',
  ja: '根拠法令',
}

export const LAW_REFS_INLINE_LABEL = '본문에 인용한 조문'
