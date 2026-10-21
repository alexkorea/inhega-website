#!/usr/bin/env node
/**
 * 서비스 상세 조문·기준일·작성 메타 문장 게이트 — QA1020-FIX 3 (보스 msg 3373, 맥6 순환검수 10-20 #11)
 * + QA1020-FIX2 (맥7 10-21): en/zh/ja 번역판 패턴 추가, 배포 보류(noindex) 페이지도 검사.
 *
 * 공용 nocite-gate(scripts/nocite-gate.mjs, 7사 바이트 동일)는 "근거 법령" 박스·확인일 같은 블록을 잡지만
 * 본문 속 "식품위생법 제37조 제5항에 따른…" 나열은 잡지 않는다. 그래서 서비스 상세에만
 * 더 좁은 기준을 건다. 한 건이라도 있으면 빌드 실패.
 *   ko: 제N조 · 별표 N · (YYYY년 기준) · "법정 수수료가 아니므로" · "민간 서비스 보수는" · "이번 대조에서" ·
 *       "조문은 확인되지 않아" · "근거는 …입니다"
 *   en: Article N / Art. N · Annex·Appendix N · (As of YYYY · "not statutory fees" · "this review" · "The basis is"
 *   zh: 第N条 · 附表/别表 N · 以YYYY年为准 · 不属于法定 · 民间服务报酬 · 本次核对 · 依据为
 *   ja: 第N条 · 別表 N · YYYY年時点 · 法定手数料ではない · 民間サービスの報酬 · 今回の照合 · 根拠は…条
 * FAQ 질문("What is the statutory fee?" "法的根拠は何ですか")은 질문이라 대상이 아니다.
 *
 *   node scripts/svc-nocite-gate.mjs [.next/server/app]
 * 별지 서식 번호(별지 제41호의2서식)는 서식 이름이라 대상이 아니다. HTML 주석은 화면에 안 나오므로 뺀다.
 * 배포 보류 페이지(DEPLOY_HOLD_SLUGS, noindex)도 200 으로 열려 있으므로 같이 센다(건수는 따로 알린다).
 */
import { readdirSync, readFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const APP = process.argv[2] || '.next/server/app'
const DIRS = [
  ['ko', join(APP, 'services')],
  ['en', join(APP, 'en', 'services')],
  ['zh', join(APP, 'zh', 'services')],
  ['ja', join(APP, 'ja', 'services')],
]
const RULES = {
  ko: [
    ['제N조', /제\s?\d+\s?조/g],
    ['별표 N', /별표\s?\d/g],
    ['(YYYY년 기준)', /\(\s?\d{4}년\s?기준/g],
    ['법정 수수료가 아니므로', /법정\s?(?:수수료가|비용이)\s?아니므로/g],
    ['민간 서비스 보수', /민간\s?서비스\s?보수/g],
    ['이번 대조에서', /이번\s?대조에서/g],
    ['조문은 확인되지 않아', /조문은\s?(?:[^.]{0,20})?확인(?:되지\s?않아|하지\s?못해)/g],
    ['근거는 …입니다', /(?:^|[.>]\s?)(?:수수료\s)?근거는\s[^.?]{0,80}입니다\./g],
  ],
  en: [
    ['Article N', /\bArt(?:icle)?s?\.?\s?\d/g],
    ['Annex N', /\b(?:Annex(?:es)?|Appendi(?:x|ces)|Appended Table)\s?\d/g],
    ['(As of YYYY', /\(\s?As of\s?20\d\d/gi],
    ['not statutory fees', /not (?:a )?statutory (?:fee|cost)s?/gi],
    ['this review', /\bthis review\b/gi],
    ['The basis is', /\b(?:legal )?basis is\b/gi],
  ],
  zh: [
    ['第N条', /第\s?\d+\s?条/g],
    ['附表 N', /(?:附表|别表)\s?\d/g],
    ['以YYYY年为准', /以\s?20\d\d\s?年为准/g],
    ['不属于法定', /不属于法定/g],
    ['民间服务报酬', /民间服务报酬/g],
    ['本次核对', /本次(?:核对|比对)/g],
    ['依据为', /依据[为是][^。？?]{0,40}第/g],
  ],
  ja: [
    ['第N条', /第\s?\d+\s?条/g],
    ['別表 N', /別表\s?\d/g],
    ['YYYY年時点', /20\d\d年(?:時点|基準)/g],
    ['法定手数料ではない', /法定(?:手数料|費用)ではない/g],
    ['民間サービスの報酬', /民間サービスの報酬/g],
    ['今回の照合', /今回の照合/g],
    ['根拠は…条', /根拠は[^。？?]{0,40}条/g],
  ],
}

if (!existsSync(DIRS[0][1])) {
  console.error(`[svc-nocite-gate] ${DIRS[0][1]} 없음 — next build 뒤에 돌릴 것`)
  process.exit(2)
}
let hits = 0
const summary = []
for (const [lang, dir] of DIRS) {
  if (!existsSync(dir)) continue
  let pages = 0
  let held = 0
  for (const f of readdirSync(dir).filter((x) => x.endsWith('.html'))) {
    const raw = readFileSync(join(dir, f), 'utf8')
    pages++
    if (/<meta name="robots" content="noindex/.test(raw)) held++
    const text = raw
      .replace(/<script(?![^>]*ld\+json)[^>]*>[\s\S]*?<\/script>|<style[\s\S]*?<\/style>|<!--[\s\S]*?-->/g, '')
      .replace(/<[^>]+>/g, ' ')
      .replace(/&quot;/g, '"')
      .replace(/&#x27;|&#39;/g, "'")
      .replace(/&amp;/g, '&')
    for (const [label, re] of RULES[lang]) {
      for (const m of text.matchAll(re)) {
        hits++
        if (hits <= 20) console.error(`  ✗ [${lang} ${label}] ${lang === 'ko' ? '' : lang + '/'}services/${f} …${text.slice(Math.max(0, m.index - 40), m.index + 40).replace(/\s+/g, ' ')}…`)
      }
    }
  }
  summary.push(`${lang} ${pages}쪽(noindex ${held})`)
}
console.log(`[svc-nocite-gate] services ${summary.join(' · ')} · 위반 ${hits}건`)
process.exit(hits ? 1 : 0)
