// BEYE-1007-FIX #12 (맥7·보스눈 QA): 서비스 상세 본문·FAQ 문장 끝의 괄호 조문 나열 "(법 제37조 제5항, 시행령 …)" 을
// 고객 화면에서 뺀다 — 문장·숫자는 바꾸지 않는다.
// NOCITE-ALL-4 (보스 msg 3373·3377, 2026-10-17): 뺀 조문을 모아 보여 주던 맨 끝 '근거 법령' 접기(components/ui/LawRefs.tsx)는
// 없앴다. 화면에 근거·출처·확인일 블록을 다시 만들지 말 것 — 빌드 게이트 scripts/nocite-gate.mjs 가 막는다.
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


// BEYE-1007-FIX2 (맥7): 블로그 I4 가이드 47편도 서비스 상세와 같은 처리.
// ① '공식 기준 인용' 절(<h2> ~ 다음 <h2>)을 화면에서 뺀다(목차 항목도 뺀다). NOCITE-ALL-4 로 원고에서도 지웠고, 이 필터는 안전망이다.
// ② 상담 안내 끝 '상담 문의: /contact' 날 경로는 '상담 문의하기' 버튼으로.
const BLOG_CITE_SECTION = /<h2[^>]*>\s*공식 기준 인용\s*<\/h2>([\s\S]*?)(?=<h2|$)/
const BLOG_CITE_BQ = /<blockquote><p>([\s\S]*?)<\/p><p>—\s*([\s\S]*?)<\/p><\/blockquote>/g
const BLOG_CONTACT = /\s*상담 문의\s*[:：]\s*<a href="(\/(?:[a-z]{2}\/)?contact)">\/(?:[a-z]{2}\/)?contact<\/a>\s*<\/p>/g

export function splitBlogCitations(html: string): { html: string; citations: { text: string; source: string }[] } {
  const citations: { text: string; source: string }[] = []
  let s = html.replace(BLOG_CITE_SECTION, (all, inner: string) => {
    const rest = inner.replace(BLOG_CITE_BQ, (_m, text: string, source: string) => {
      citations.push({ text: text.trim(), source: source.trim() })
      return ''
    })
    // 인용 블록 말고 다른 내용이 섞여 있으면 손대지 않는다(원고 무가감).
    if (rest.trim()) {
      citations.length = 0
      return all
    }
    return ''
  })
  if (citations.length) s = s.replace(/<li>(?:<a[^>]*>)?\s*공식 기준 인용\s*(?:<\/a>)?<\/li>/, '')
  s = s.replace(BLOG_CONTACT, '</p><div class="blog-cta"><a href="$1" class="btn btn-primary">상담 문의하기</a></div>')
  return { html: s, citations }
}

// BEYE-1007-FIX2 (맥7): zh/ja 서비스 원고(lib/i18n/services-i18n.ts)의 조문 괄호도 ko 와 같은 렌더 단계 처리.
// 괄호 안이 법령명·조·항·별표·구분자뿐일 때만 뺀다. '依据…准用于进口'·'…により準用' 처럼 내용(준용·대상)이
// 섞인 괄호는 그대로 둔다 — ko 원고에서도 이 내용은 본문 문장("법 제15조 제6항에 따라 수입에 준용")으로 남아 있다.
const CJK_LAW = String.raw`(?:《[^》]{1,40}》|「[^」]{1,40}」|同法施行規則|同法|施行规则|施行規則|特别法|特別法|[一-鿿]{1,20}(?:法|规则|規則|令)|法)`
const CJK_UNIT = String.raw`(?:第\s?\d+\s?条(?:之\s?\d+|の\s?\d+)?|第\s?\d+\s?[款項项号號]|附表\s?\d+|別表\s?\d+|后段|後段|前段|、|，|,|・|及び|及|\s)`
const PURE_CJK = new RegExp(String.raw`^(?:${CJK_LAW}|${CJK_UNIT})+$`)
const PAREN_CJK = /[(（]([^()（）]*)[)）]/g

export function isPureLawRefCjk(inner: string): boolean {
  const t = inner.trim()
  return /第\s?\d+\s?条/.test(t) && PURE_CJK.test(t)
}

/** zh/ja 문장에서 순수 조문 괄호를 빼고 refs 에 모은다(중복 없이). */
export function pullLawRefsCjk(text: string, refs: string[]): string {
  return text.replace(PAREN_CJK, (all, inner: string) => {
    if (!isPureLawRefCjk(inner)) return all
    const label = inner.trim()
    if (!refs.includes(label)) refs.push(label)
    return ''
  })
}

