/**
 * 인허가 뉴스 시행일 게이트 — 제목·본문의 시행일 = law.go.kr 시행일자 (QA1020-FIX 1).
 *
 * 2026-10-20 /news/krlaw-291321(의료기기법)이 제목·요약·FAQ 에 "2026년 10월 20일부터
 * 시행" 이라고 썼다. 원문은 공포 2026-10-20, 시행 2027-10-21(일부 조항 공포일·2027-12-31)
 * 이다. 수집기가 공포일을 시행일로 넘겼고(원문 링크의 efYd 도 공포일), 모델은 그 값을
 * 제목에 박은 채 본문에는 부칙을 읽고 다른 날짜를 적었다 — 같은 글 안에서 날짜가 엇갈렸다.
 *
 * 그래서 법제처(kr_law_go_kr) 항목은 수신 때마다 원문 XML 의 `<시행일자>` 를 직접 읽어
 * 글에 적힌 "시행·부터·적용" 날짜와 대조한다. 규칙은 둘이다.
 *   - **제목류**(title_ko·h1·meta_title)와 기한(deadline): 본시행일과 같아야 한다.
 *   - **요약·리드·설명문·본문·FAQ**: 본시행일이거나, 부칙 제1조가 따로 정한 날짜(단서 조항)면서 같은 문장에
 *     "다만·일부·규정·조항" 같은 한정어가 있어야 한다. 한정어 없이 단서 날짜를 쓰면
 *     독자는 그것을 전체 시행일로 읽는다(291321 FAQ 가 정확히 그 경우).
 * 불일치면 항목을 **게시 보류**(목록·기사·사이트맵에서 뺀다)하고 사유를 응답으로 돌려준다.
 * 원문을 못 읽으면(네트워크·형식) 시행 날짜가 적힌 글은 보류한다 — 확인 못 한 날짜를
 * 내보내지 않는다.
 *
 * 이 파일은 런타임 의존성이 없다 — 수신단(news-data)과 감사 스크립트
 * (scripts/news-date-gate.mjs)가 같은 판정을 쓴다.
 */

export type LawDates = {
  /** 본시행일 YYYY-MM-DD (`<시행일자>`) */
  effective: string
  /** 공포일 YYYY-MM-DD (`<공포일자>`) */
  promulgated: string
  /** 부칙 제1조가 단서로 정한 다른 시행일(공포일부터 시행 포함). */
  partial: string[]
  /** 판정 근거 표시용 부칙 제1조 원문(앞부분). */
  rule: string
  /** 법령명(`<법령명_한글>`). 다른 「법령」의 시행일을 말하는 문장을 가려내는 데 쓴다. */
  name: string
}

export type DateMention = { date: string; field: string; text: string; head: boolean }

const pad = (n: string) => n.padStart(2, '0')
const ymd = (s: string) => (/^\d{8}$/.test(s) ? `${s.slice(0, 4)}-${s.slice(4, 6)}-${s.slice(6, 8)}` : '')

/** law.go.kr lawService XML → 시행·공포일과 부칙 제1조 단서 날짜. 형식이 아니면 null. */
export function parseLawXml(xml: string): LawDates | null {
  const effective = ymd((xml.match(/<시행일자>\s*(\d{8})\s*</) || [])[1] || '')
  const promulgated = ymd((xml.match(/<공포일자>\s*(\d{8})\s*</) || [])[1] || '')
  const name = ((xml.match(/<법령명_한글>\s*(?:<!\[CDATA\[)?([^<\]]+)/) || [])[1] || '').trim()
  if (!effective) return null

  // 마지막 부칙단위가 이번 개정의 부칙이다. CDATA 를 먼저 풀고 태그를 걷는다(순서 바꾸면 0건).
  const at = xml.lastIndexOf('<부칙단위')
  const tail = at >= 0 ? xml.slice(at) : ''
  const plain = tail
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
  // 조가 하나뿐인 부칙은 "제1조(시행일)" 머리 없이 "이 규칙은 …부터 시행한다." 로 시작한다.
  const m = plain.match(/제1조\s*\(시행일\)([\s\S]*?)(?:제2조\s*\(|$)/) || plain.match(/(이\s*(?:법|영|규칙)은[\s\S]{0,600})/)
  const rule = (m ? m[1] : '').trim().slice(0, 600)

  const partial = new Set<string>()
  const proviso = rule.split(/다만[,，]?/).slice(1).join(' ')
  for (const d of datesIn(proviso)) if (d !== effective) partial.add(d)
  if (promulgated && /공포한\s*날부터|공포일부터/.test(proviso) && promulgated !== effective) partial.add(promulgated)
  return { effective, promulgated, partial: [...partial].sort(), rule, name }
}

/* ────────────────────────── 날짜 추출 ────────────────────────── */

const DATE_RE = /(\d{4})\s*년\s*(\d{1,2})\s*월\s*(\d{1,2})\s*일|(\d{4})-(\d{2})-(\d{2})|(\d{4})\.\s?(\d{1,2})\.\s?(\d{1,2})\.?/g

function datesIn(text: string): string[] {
  const out: string[] = []
  for (const m of text.matchAll(DATE_RE)) {
    const y = m[1] || m[4] || m[7]
    const mo = m[2] || m[5] || m[8]
    const d = m[3] || m[6] || m[9]
    out.push(`${y}-${pad(mo)}-${pad(d)}`)
  }
  return out
}

/**
 * 시행 시점을 말하는 날짜만 뽑는다.
 *   - 뒤: 같은 절(쉼표·마침표·"며" 전까지, 다음 날짜 전까지) 안에 부터/시행/적용/발효
 *   - 앞: 같은 절 안에 "시행일·시행 시기·적용일"
 * "시행령·시행규칙" 은 법령 이름이라 미리 가린다. "채택은 X에 이루어졌으며, 시행일은 …" 의
 * X 처럼 절이 끊긴 뒤의 '시행' 은 X 와 묶지 않는다.
 */
export type Mention = {
  date: string
  sentence: string
  /** 'effective' = 시행 날짜, 'promulgated' = 공포 날짜("…에 공포되어"). */
  kind: 'effective' | 'promulgated'
  /** 같은 절 앞에 「다른 법령」이 있으면 그 이름 — 그 법의 시행일이라 대조 대상이 아니다. */
  otherLaw: string
}

export function effectiveMentions(text: string, lawName = ''): Mention[] {
  const masked = text.replace(/시행령|시행규칙/g, (s) => '○'.repeat(s.length))
  const out: Mention[] = []
  const ms = [...masked.matchAll(DATE_RE)]
  ms.forEach((m, i) => {
    const start = m.index ?? 0
    const end = start + m[0].length
    const nextStart = i + 1 < ms.length ? ms[i + 1].index ?? masked.length : masked.length
    const prevEnd = i > 0 ? (ms[i - 1].index ?? 0) + ms[i - 1][0].length : 0
    let after = masked.slice(end, Math.min(nextStart, end + 30))
    after = after.split(/[,，.。;；\n]|며\s|고\s/)[0]
    let before = masked.slice(Math.max(prevEnd, start - 30), start)
    before = before.split(/[,，.。;；\n]|며\s|고\s/).pop() || ''
    const effAfter = /부터|시행|적용|발효/.test(after)
    const effBefore = /시행\s?일|시행\s?시기|시행\s?날짜|적용\s?일|시행은/.test(before)
    // "…에 공포되어 / 부터 공포되었으며" 는 공포 날짜다 — 시행이 아니라 공포일자와 대조한다.
    // 같은 절에 둘 다 있으면 먼저 나온 쪽이 이 날짜의 술어다("29일에 공포되어 30일 후부터 시행").
    const pAt = after.search(/공포/)
    const eAt = after.search(/시행|적용|발효|부터(?!\s*공포)/)
    const prom = (pAt >= 0 && (eAt < 0 || pAt < eAt)) || /공포\s?일은|공포는|공포\s?일자는/.test(before)
    if (!effAfter && !effBefore && !prom) return
    const cited = [...before.matchAll(/「([^」]+)」/g)].map((x) => x[1].replace(/\s+/g, ''))
    const self = lawName.replace(/\s+/g, '')
    const otherLaw = cited.find((n) => !self || (n !== self && !self.startsWith(n))) || ''
    const y = m[1] || m[4] || m[7]
    const mo = m[2] || m[5] || m[8]
    const d = m[3] || m[6] || m[9]
    // 날짜가 든 문장 한 개(원문 기준). 한정어 판정과 사유 메시지에 쓴다.
    // 마침표 날짜(2026. 10. 20.)에서 끊기지 않게 '한글 + 마침표 + 공백' 만 문장 끝으로 본다.
    const head = text.slice(0, start)
    const lastEnd = head.search(/[가-힣)]\.\s(?![\s\S]*[가-힣)]\.\s)/)
    const cut = Math.max(lastEnd >= 0 ? lastEnd + 3 : 0, head.lastIndexOf('\n') + 1)
    const rest = text.slice(end)
    const stop = rest.search(/[가-힣)]\.(?:\s|$)|\n/)
    const sentence = text.slice(cut, stop >= 0 ? end + stop + 2 : text.length).replace(/\s+/g, ' ').trim()
    out.push({ date: `${y}-${pad(mo)}-${pad(d)}`, sentence, kind: prom ? 'promulgated' : 'effective', otherLaw })
  })
  return out
}

/** 같은 문장 안의 한정어 — 단서 조항 날짜를 "일부" 로 읽히게 하는 말. */
// "20일부터" 의 '일부', 법령 개정 형식 "일부 개정" 은 한정어가 아니다.
const QUALIFIER = /다만|(?<!\d)일부(?!터|\s?개정(?:은|이|되|으로|법률|안|,))|규정|조항|조문|단서|제\d+조|개정규정|면제|부분/

/* ────────────────────────── 판정 ────────────────────────── */

export type DateCheckInput = {
  title_ko: string
  summary_ko: string
  deadline: string
  article?: {
    meta_title: string
    meta_description: string
    h1: string
    lead: string
    sections: { h2: string; body: string[] }[]
    faq: { q: string; a: string }[]
  } | null
}

/** 불일치 사유 목록. 빈 배열이면 통과. */
export function checkEffectiveDates(item: DateCheckInput, law: LawDates): string[] {
  const bad: string[] = []
  const a = item.article
  // 제목류는 본시행일만. 요약·리드·설명문은 본문과 같이 한정어 붙은 단서 날짜까지 허용한다.
  const head: [string, string][] = [
    ['title_ko', item.title_ko],
    ...(a ? ([['meta_title', a.meta_title], ['h1', a.h1]] as [string, string][]) : []),
  ]
  const body: [string, string][] = [
    ['summary_ko', item.summary_ko],
    ...(a ? ([['meta_description', a.meta_description], ['lead', a.lead]] as [string, string][]) : []),
    ...(a
      ? [
        ...a.sections.flatMap((s, i) => [[`sections[${i}].h2`, s.h2], ...s.body.map((b, j) => [`sections[${i}].body[${j}]`, b])] as [string, string][]),
        ...a.faq.map((f, i) => [`faq[${i}].a`, f.a] as [string, string]),
      ]
      : []),
  ]

  const promBad = (field: string, m: Mention) =>
    law.promulgated && m.date !== law.promulgated
      ? [`${field}: 공포 ${m.date} ≠ 원문 공포일자 ${law.promulgated} — "${m.sentence}"`]
      : []
  for (const [field, text] of head) {
    for (const m of effectiveMentions(text || '', law.name)) {
      if (m.otherLaw) continue
      if (m.kind === 'promulgated') bad.push(...promBad(field, m))
      else if (m.date !== law.effective) bad.push(`${field}: 시행 ${m.date} ≠ 원문 시행일자 ${law.effective} — "${m.sentence}"`)
    }
  }
  for (const [field, text] of body) {
    for (const m of effectiveMentions(text || '', law.name)) {
      const { date, sentence } = m
      if (m.otherLaw) continue
      if (m.kind === 'promulgated') {
        bad.push(...promBad(field, m))
        continue
      }
      if (date === law.effective) continue
      if (law.partial.includes(date) && QUALIFIER.test(sentence)) continue
      bad.push(`${field}: 시행 ${date} ≠ 원문 시행일자 ${law.effective}${law.partial.length ? `(단서 ${law.partial.join('·')})` : ''} — "${sentence}"`)
    }
  }
  if (item.deadline && item.deadline !== law.effective) {
    bad.push(`deadline: ${item.deadline} ≠ 원문 시행일자 ${law.effective}`)
  }
  return bad
}

/** 글에 시행 날짜가 하나라도 적혀 있는지 — 원문을 못 읽었을 때 보류 여부를 가른다. */
export function mentionsEffectiveDate(item: DateCheckInput): boolean {
  const a = item.article
  const all = [
    item.title_ko,
    item.summary_ko,
    ...(a ? [a.meta_title, a.meta_description, a.h1, a.lead, ...a.sections.flatMap((s) => [s.h2, ...s.body]), ...a.faq.map((f) => f.a)] : []),
  ].join('\n')
  return effectiveMentions(all).length > 0 || !!item.deadline
}

/** 원문 링크에서 MST 를 뽑아 lawService XML 주소를 만든다. 법제처 링크가 아니면 ''. */
export function lawXmlUrl(url: string): string {
  const mst = (url.match(/[?&]MST=(\d+)/i) || [])[1]
  if (!mst || !/law\.go\.kr/i.test(url)) return ''
  const oc = (url.match(/[?&]OC=([A-Za-z0-9_]+)/) || [])[1] || 'test'
  return `https://www.law.go.kr/DRF/lawService.do?OC=${oc}&target=law&MST=${mst}&type=XML`
}
