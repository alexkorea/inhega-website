#!/usr/bin/env node
/**
 * 서비스 상세(ko) 조문·기준일·작성 메타 문장 게이트 — QA1020-FIX 3 (보스 msg 3373, 맥6 순환검수 10-20 #11).
 *
 * 공용 nocite-gate(scripts/nocite-gate.mjs, 7사 바이트 동일)는 "근거 법령" 박스·확인일 같은 블록을 잡지만
 * 본문 속 "식품위생법 제37조 제5항에 따른…" 나열은 잡지 않는다. 그래서 서비스 상세 60종(ko)에만
 * 더 좁은 기준을 건다: 제N조 · 별표 N · (YYYY년 기준) · "법정 수수료가 아니므로" · "민간 서비스 보수는" ·
 * "이번 대조에서" · "조문은 확인되지 않아" · "근거는 …입니다". 한 건이라도 있으면 빌드 실패.
 *
 *   node scripts/svc-nocite-gate.mjs [.next/server/app]
 * 별지 서식 번호(별지 제41호의2서식)는 서식 이름이라 대상이 아니다. HTML 주석은 화면에 안 나오므로 뺀다.
 * noindex 페이지(배포 보류 DEPLOY_HOLD_SLUGS — 사이트맵·메뉴 밖)는 세지 않고 건수만 알린다.
 */
import { readdirSync, readFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const APP = process.argv[2] || '.next/server/app'
const DIR = join(APP, 'services')
const RULES = [
  ['제N조', /제\s?\d+\s?조/g],
  ['별표 N', /별표\s?\d/g],
  ['(YYYY년 기준)', /\(\s?\d{4}년\s?기준/g],
  ['법정 수수료가 아니므로', /법정\s?(?:수수료가|비용이)\s?아니므로/g],
  ['민간 서비스 보수', /민간\s?서비스\s?보수/g],
  ['이번 대조에서', /이번\s?대조에서/g],
  ['조문은 확인되지 않아', /조문은\s?(?:[^.]{0,20})?확인(?:되지\s?않아|하지\s?못해)/g],
  ['근거는 …입니다', /(?:^|[.>]\s?)(?:수수료\s)?근거는\s[^.?]{0,80}입니다\./g],
]

if (!existsSync(DIR)) {
  console.error(`[svc-nocite-gate] ${DIR} 없음 — next build 뒤에 돌릴 것`)
  process.exit(2)
}
let pages = 0
let held = 0
let hits = 0
for (const f of readdirSync(DIR).filter((x) => x.endsWith('.html'))) {
  const raw = readFileSync(join(DIR, f), 'utf8')
  if (/<meta name="robots" content="noindex/.test(raw)) {
    held++
    continue
  }
  pages++
  const text = raw
    .replace(/<script(?![^>]*ld\+json)[^>]*>[\s\S]*?<\/script>|<style[\s\S]*?<\/style>|<!--[\s\S]*?-->/g, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&amp;/g, '&')
  for (const [label, re] of RULES) {
    for (const m of text.matchAll(re)) {
      hits++
      if (hits <= 20) console.error(`  ✗ [${label}] services/${f} …${text.slice(Math.max(0, m.index - 40), m.index + 40).replace(/\s+/g, ' ')}…`)
    }
  }
}
console.log(`[svc-nocite-gate] services ko ${pages}쪽(noindex 보류 ${held}쪽 제외) · 위반 ${hits}건`)
process.exit(hits ? 1 : 0)
