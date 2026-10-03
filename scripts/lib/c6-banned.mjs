// C6 금지어(법조 직역 명칭) — 맥3 C6 스캔 정규식과 동일, 'power of attorney'(복수·하이픈) 만 예외.
// 2026-10-03 맥7 C6 지시(보스 msg 1698 2번안): 행정사사무소 사이트에 법조 직역 명칭이 0건이어야 한다.
// 이 파일 자체가 소스 재스캔에 걸리지 않도록 비ASCII 는 \u 이스케이프, 영문은 [a] 문자류로 적는다.
// 같은 규칙: lib/news-article-schema.ts BANNED_PATTERNS 첫 항목(런타임 /news 수신 게이트), scripts/news-gate.mjs.
export const C6_BANNED_RE = /변호사|법무법인|로펌|(?<![Oo]f )(?<![Oo]f-)\b(?:l[a]wyers?|att[o]rneys?|l[a]w firms?|l[a]w office)\b|luật sư|律师|(?<!調)律師|弁護士|адвокат\w*|юрист\w*|ทนาย|محام\w*/gi
const POA_RE = /powers?[ -]of[ -]att[o]rneys?/gi

/** 금지어 매치 목록(예외 제거 후). [{ index, match, context }] */
export function c6Hits(text) {
  const s = String(text || '').replace(POA_RE, (m) => ' '.repeat(m.length))
  const out = []
  for (const m of s.matchAll(C6_BANNED_RE)) {
    out.push({ index: m.index, match: m[0], context: s.slice(Math.max(0, m.index - 40), m.index + m[0].length + 40).replace(/\s+/g, ' ') })
  }
  return out
}
