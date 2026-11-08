/**
 * 뉴스 제목 품질 게이트(QA1107-INHEGA #1, 맥6 실측 11-07 · 맥7 지시 11-08).
 *
 * 자동번역 제목이 아래 중 하나면 한국어 카드로 내보내지 않는다(게시 보류 큐).
 * 저장은 하되 목록·기사·사이트맵에서 빼고, 수신 응답 `title_held` 로 n8n 에 알린다.
 * 정정(lib/news-corrections)으로 제목을 고치면 다시 게시된다 — 한자·가나 게이트와 같은 방식.
 *
 *  1) 제목이 영문 소문자 조각으로 시작 — "ula 밴드 기술의 발전에 따른 UWB 규칙 개정 공고"
 *     (원문 'Unleashing … Ultra-Wideband' 가 잘려 소문자 조각만 남은 오역)
 *  2) 세미콜론 포함 — 연방관보 제목의 분류 꼬리표("Medical Devices; Orthopedic Devices; …")를
 *     그대로 옮긴 "의료기기; 관절용 …" 꼴
 *  3) 원문 고유명사 누락 — 원문 주소(연방관보 슬러그 등)에 기관·회사·기술 고유명사가 있는데
 *     한국어 제목·요약 어디에도 그 이름(원어 또는 한국어 표기)이 없다
 *
 * 원문 제목은 저장하지 않으므로(수신 스키마에 없음) 3)은 원문 주소의 낱말로 본다.
 * 사전은 좁게 둔다 — 넓히면 멀쩡한 기사까지 보류된다. 추가할 때는 scripts/news-title-gate-test.mjs
 * 로 라이브 전체가 몇 건 걸리는지 먼저 본다.
 */

type TitleSource = { title_ko: string; summary_ko: string; url: string; ingested_at?: string }

/**
 * 이 시각 이후 처음 수신된 항목에만 보류를 건다(자동번역 '게시' 검사).
 * 그 전에 이미 게시·색인된 세미콜론 제목 16건(11-08 기준)을 한꺼번에 내리면 기사 URL 이 404 가 된다 —
 * 그 16건은 정정안과 함께 승인 후보로 보고했다(범위 확장 사전 승인 규칙, 보스 msg 3144).
 * 정정 여부와 무관하게 사유는 titleQualityReasons 로 언제든 볼 수 있다(시험 스크립트가 쓴다).
 */
export const TITLE_GATE_SINCE = '2026-11-08T00:00:00.000Z'

/** 원문 주소 낱말(소문자 kebab) → 한국어 쪽에 하나라도 있어야 하는 표기. */
export const PROPER_NOUNS: ReadonlyArray<{ src: RegExp; label: string; ko: RegExp }> = [
  { src: /(^|-)ultra-wideband(-|$)/, label: 'Ultra-Wideband(UWB)', ko: /UWB|초광대역/i },
  { src: /(^|-)fcc(-s)?(-|$)/, label: 'FCC', ko: /FCC|연방통신위원회/ },
  { src: /(^|-)robert-bosch(-|$)/, label: 'Robert Bosch', ko: /Bosch|보쉬/i },
  { src: /(^|-)cpsc(-|$)|consumer-product-safety-commission/, label: 'CPSC', ko: /CPSC|소비자제품안전위원회/ },
  { src: /(^|-)epa(-|$)|environmental-protection-agency/, label: 'EPA', ko: /EPA|환경보호청/ },
  { src: /(^|-)fda(-|$)|food-and-drug-administration/, label: 'FDA', ko: /FDA|식품의약국/ },
  { src: /(^|-)aphis(-|$)|animal-and-plant-health-inspection/, label: 'APHIS', ko: /APHIS|동식물검역소|동식물위생검사청/ },
  { src: /(^|-)nhtsa(-|$)|national-highway-traffic-safety/, label: 'NHTSA', ko: /NHTSA|도로교통안전국/ },
]

const LOWER_LATIN_START = /^[\s"'“‘「『(\[]*[a-z]/
const SEMICOLON = /[;；]/

/** 원문 주소에서 고유명사 판정에 쓸 낱말 줄. 연방관보는 /documents/YYYY/MM/DD/<번호>/<슬러그>. */
function sourceSlug(url: string): string {
  try {
    const u = new URL(url)
    if (u.hostname.endsWith('federalregister.gov')) {
      const parts = u.pathname.split('/').filter(Boolean)
      return (parts[parts.length - 1] || '').toLowerCase()
    }
  } catch {
    /* 주소가 깨졌으면 3)은 보지 않는다 */
  }
  return ''
}

/** 걸린 사유 목록. 비어 있으면 통과. */
export function titleQualityReasons(it: TitleSource): string[] {
  const title = (it.title_ko || '').trim()
  const reasons: string[] = []
  if (LOWER_LATIN_START.test(title)) reasons.push('제목이 영문 소문자 조각으로 시작')
  if (SEMICOLON.test(title)) reasons.push('제목에 세미콜론')
  const slug = sourceSlug(it.url || '')
  if (slug) {
    const hay = `${title} ${it.summary_ko || ''}`
    for (const p of PROPER_NOUNS) {
      if (p.src.test(slug) && !p.ko.test(hay)) reasons.push(`원문 고유명사 누락: ${p.label}`)
    }
  }
  return reasons
}

/** 게시 보류 여부 — 게이트 시행 이후 수신분만. 수신 시각이 없으면(시험 데이터) 새 항목으로 본다. */
export const hasTitleDefect = (it: TitleSource) =>
  (it.ingested_at || '9999') >= TITLE_GATE_SINCE && titleQualityReasons(it).length > 0
