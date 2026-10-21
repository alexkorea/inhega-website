#!/usr/bin/env node
/**
 * 수신단 병합 규칙 재현 테스트 — `node scripts/news-merge-test.mjs`
 *
 * 2026-09-23 사고 재현이 목적이다. `{doc_key, slug, article}` 만 담긴 RW-04 payload 가
 * 기존 요약(FR:2026-19181·FR:2026-19277)의 country/title_ko/summary_ko/url/published_date
 * 를 빈 문자열로 덮어써 /news 에 빈 카드가 떴다. 그래서 "빈 값은 기존 값을 못 이긴다" 와
 * "필수 필드 없는 신규 doc_key 는 만들지 않는다" 를 **저장소 왕복으로** 확인한다.
 *
 * lib/news-data.ts 는 워커 전용 모듈이라 그냥 import 할 수 없다. esbuild 로 번들하면서
 * `@opennextjs/cloudflare` 만 메모리 KV 스텁으로 바꿔치기해 실제 upsertNews 를 돌린다
 * (mergeItem 만 따로 부르면 KV 왕복·정렬·절단 경로가 빠져 실제와 달라진다).
 */
import { build } from 'esbuild'
import { mkdtempSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { pathToFileURL } from 'node:url'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const tmp = mkdtempSync(join(tmpdir(), 'news-merge-'))

const stub = join(tmp, 'cf-stub.mjs')
writeFileSync(stub, 'export const getCloudflareContext = () => ({ env: { NEWS_KV: globalThis.__NEWS_KV } })\n')

const out = join(tmp, 'news-data.mjs')
await build({
  entryPoints: [join(ROOT, 'lib', 'news-data.ts')],
  outfile: out,
  bundle: true,
  format: 'esm',
  platform: 'node',
  alias: { '@opennextjs/cloudflare': stub },
  logLevel: 'warning',
})
const M = await import(pathToFileURL(out).href)

/* ───────── 메모리 KV ───────── */
const store = new Map()
globalThis.__NEWS_KV = {
  get: async (k) => store.get(k) ?? null,
  put: async (k, v) => void store.set(k, v),
}
const read = async () => JSON.parse(store.get(M.NEWS_LIST_KEY) || '[]')
const one = async (doc_key) => (await read()).find((it) => it.doc_key === doc_key)

/* ───────── 검증 ───────── */
let failed = 0
const ok = (cond, label, extra) => {
  console.log(`${cond ? '  PASS' : '  FAIL'}  ${label}`)
  if (!cond) {
    failed++
    if (extra !== undefined) console.log(`        ${JSON.stringify(extra)}`)
  }
}
const eq = (got, want, label) => ok(got === want, `${label} = ${JSON.stringify(want)}`, { got })
const section = (s) => console.log(`\n■ ${s}`)

const article = (h1) => ({
  meta_title: '미국 연방관보 식품 표시 규정 개정안 공고 주요 내용과 대응 정리',
  meta_description:
    '미국 연방관보에 실린 식품 표시 규정 개정안의 적용 범위와 시행 시기, 수출기업이 준비해야 할 서류를 정리했습니다. 의견 제출 기한도 함께 확인하세요.',
  h1,
  lead: '미국 식품의약국이 식품 표시 규정 개정안을 연방관보에 공고했다. 적용 대상과 시행 시기를 정리한다.',
  sections: [
    { h2: '개정 배경', body: ['소비자 정보 제공을 강화하기 위한 조치다.\n\n적용 대상은 수입 식품 전반이다.'] },
    { h2: '수출기업 대응', body: ['표시 사항 변경분을 확인하고 라벨 도안을 미리 손봐야 한다.'] },
  ],
  faq: [{ q: '언제 시행되나요?', a: '공고일로부터 180일 뒤 시행됩니다.' }],
  keywords: ['미국 식품 표시', '연방관보'],
  disclaimer: '본 글은 일반 정보 제공용입니다.',
  generated_at: '2026-09-23T08:00:00.000Z',
  model: 'test',
  og_image: '',
})

const SEED = {
  doc_key: 'TEST:merge-1',
  slug: 'us-food-labeling-rule',
  source_key: 'us_federal_register',
  country: '미국',
  scope: '해외',
  title_ko: '미국 식품 표시 규정 개정 공고',
  summary_ko: '미국 FDA 가 식품 표시 규정 개정안을 공고했다.',
  product: '식품',
  impact: '중',
  opportunity: '검토필요',
  opportunity_reason: '수출 서류 개정 수요',
  stage: '입법예고',
  deadline: '2026-11-30',
  relevance: 72,
  url: 'https://www.federalregister.gov/documents/2026/09/22/test',
  published_date: '2026-09-22',
  analyzed_at: '2026-09-23T08:00:00Z',
}

section('0. 기준 항목 저장')
{
  const r = await M.upsertNews([SEED])
  eq(r.upserted, 1, 'upserted')
  eq(r.rejected.length, 0, 'rejected 수')
}

section('1. 사고 재현 — {doc_key, slug, article} 만 수신')
{
  const r = await M.upsertNews([
    { doc_key: SEED.doc_key, slug: 'us-food-labeling-rule', article: article('미국 식품 표시 규정, 무엇이 바뀌나') },
  ])
  const it = await one(SEED.doc_key)
  eq(it.country, 'US', 'country 유지(ISO 코드로 접힘)')
  eq(it.title_ko, SEED.title_ko, 'title_ko 유지')
  eq(it.summary_ko, SEED.summary_ko, 'summary_ko 유지')
  eq(it.url, SEED.url, 'url 유지')
  eq(it.published_date, '2026-09-22', 'published_date 유지')
  ok(it.article !== null, '기사는 채워졌다', r.article_rejected)
  eq(r.articles, 1, 'articles')
}

section('2. 빈 문자열로 덮어쓰기 시도')
{
  const r = await M.upsertNews([
    { doc_key: SEED.doc_key, country: '', title_ko: '', summary_ko: '', url: '', published_date: '', product: '' },
  ])
  const it = await one(SEED.doc_key)
  eq(it.country, 'US', 'country 유지(ISO 코드로 접힘)')
  eq(it.title_ko, SEED.title_ko, 'title_ko 유지')
  eq(it.summary_ko, SEED.summary_ko, 'summary_ko 유지')
  eq(it.url, SEED.url, 'url 유지')
  eq(it.published_date, '2026-09-22', 'published_date 유지')
  eq(it.product, '식품', 'product 유지')
  const kept = r.preserved.find((p) => p.doc_key === SEED.doc_key)?.fields ?? []
  ok(
    ['country', 'title_ko', 'summary_ko', 'url', 'published_date', 'product'].every((f) => kept.includes(f)),
    'preserved 에 6개 필드 보고',
    kept
  )
}

section('3. 형식 불일치 값(enum 영문·숫자 아님·잘못된 날짜)')
{
  await M.upsertNews([
    { doc_key: SEED.doc_key, scope: 'overseas', impact: 'high', opportunity: 'yes', relevance: 'n/a', deadline: '30/11/2026', url: 'javascript:alert(1)' },
  ])
  const it = await one(SEED.doc_key)
  eq(it.scope, '해외', 'scope 유지')
  eq(it.impact, '중', 'impact 유지')
  eq(it.opportunity, '검토필요', 'opportunity 유지')
  eq(it.relevance, 72, 'relevance 유지')
  eq(it.deadline, '2026-11-30', 'deadline 유지')
  eq(it.url, SEED.url, 'url 유지(스킴 주입 차단)')
}

section('4. 정상 갱신은 그대로 덮어쓴다')
{
  await M.upsertNews([{ doc_key: SEED.doc_key, title_ko: '미국 식품 표시 규정 개정 최종안', relevance: 88, impact: '상' }])
  const it = await one(SEED.doc_key)
  eq(it.title_ko, '미국 식품 표시 규정 개정 최종안', 'title_ko 갱신')
  eq(it.relevance, 88, 'relevance 갱신')
  eq(it.impact, '상', 'impact 갱신')
  eq(it.summary_ko, SEED.summary_ko, 'summary_ko 는 그대로')
}

section('5. article:null 로 기사만 내리기(의도적 삭제 경로는 살아 있다)')
{
  await M.upsertNews([{ doc_key: SEED.doc_key, article: null }])
  const it = await one(SEED.doc_key)
  eq(it.article, null, 'article 제거')
  eq(it.title_ko, '미국 식품 표시 규정 개정 최종안', '요약은 유지')
}

section('6. 필수 필드 없는 신규 doc_key 는 생성 거부')
{
  const before = (await read()).length
  const r = await M.upsertNews([
    { doc_key: 'TEST:new-bad', slug: 'brand-new-thing', article: article('새 기사') },
    { doc_key: 'TEST:new-partial', title_ko: '제목만 있는 신규', url: 'https://example.gov/x' },
  ])
  eq(r.upserted, 0, 'upserted')
  eq(r.rejected.length, 2, 'rejected 수')
  eq((await read()).length, before, '저장 건수 불변(빈 카드 생성 안 됨)')
  ok(await one('TEST:new-bad') === undefined, 'TEST:new-bad 미생성')
  const reasons = r.rejected.find((x) => x.doc_key === 'TEST:new-partial')?.reasons ?? []
  ok(reasons.some((s) => s.includes('published_date')), '거부 사유에 published_date 명시', reasons)
  ok(r.article_rejected.length === 0, '거부된 신규의 기사 사유는 남기지 않는다')
}

section('7. 필수 필드가 갖춰진 신규는 정상 생성')
{
  const r = await M.upsertNews([
    { doc_key: 'TEST:new-good', title_ko: '일본 의견공모 공고', url: 'https://public-comment.e-gov.go.jp/x', published_date: '2026-09-23' },
  ])
  eq(r.upserted, 1, 'upserted')
  eq(r.rejected.length, 0, 'rejected 수')
  ok((await one('TEST:new-good')) !== undefined, '생성됨')
}

section('8. 목록 렌더 방어 — 제목 빈 항목은 숨긴다(저장소에는 남긴다)')
{
  const legacy = { ...M.hydrateItem({ doc_key: 'TEST:blank', slug: 'blank-card', title_ko: '', url: 'https://x.gov/1', published_date: '2026-09-20' }) }
  const all = [...(await read()), legacy]
  eq(M.listableNews(all).length, all.length - 1, '빈 제목 1건 숨김')
  ok(M.listableNews(all).every((it) => it.title_ko), '남은 항목은 전부 제목 보유')
  ok(M.isListable(legacy) === false, 'isListable(빈 제목) = false')
}

section('9. 같은 내용을 다시 받으면 updated_at 을 올리지 않는다')
{
  // KV 왕복을 거친 항목과 새로 병합한 항목은 키 순서가 달라, 통째 비교로는 늘 "변경" 이 났다.
  const before = (await one('TEST:new-good')).updated_at
  await new Promise((r) => setTimeout(r, 5))
  const r = await M.upsertNews([
    { doc_key: 'TEST:new-good', title_ko: '일본 의견공모 공고', url: 'https://public-comment.e-gov.go.jp/x', published_date: '2026-09-23' },
  ])
  eq((await one('TEST:new-good')).updated_at, before, 'updated_at 불변')
  eq(r.upserted, 1, 'upserted')
  // 내용이 바뀌면 올라간다
  await M.upsertNews([{ doc_key: 'TEST:new-good', title_ko: '일본 의견공모 공고(수정)' }])
  ok((await one('TEST:new-good')).updated_at !== before, '내용이 바뀌면 updated_at 갱신')
}

section('10. doc_key 없는 항목은 예전처럼 skipped')
{
  const r = await M.upsertNews([{ title_ko: '떠돌이', url: 'https://x.gov/2', published_date: '2026-09-23' }])
  eq(r.skipped, 1, 'skipped')
  eq(r.upserted, 0, 'upserted')
}

section('11. 국가 표기는 ISO 코드로 통일(QA1020-FIX 2)')
{
  await M.upsertNews([
    { doc_key: 'TEST:c1', country: 'United States of America', title_ko: 'c1', url: 'https://x.gov/c1', published_date: '2026-10-01' },
    { doc_key: 'TEST:c2', country: 'Korea, Republic of', title_ko: 'c2', url: 'https://x.gov/c2', published_date: '2026-10-01' },
    { doc_key: 'TEST:c3', country: 'jp', title_ko: 'c3', url: 'https://x.gov/c3', published_date: '2026-10-01' },
    { doc_key: 'TEST:c4', country: 'Atlantis', title_ko: 'c4', url: 'https://x.gov/c4', published_date: '2026-10-01' },
  ])
  eq((await one('TEST:c1')).country, 'US', 'United States of America')
  eq((await one('TEST:c2')).country, 'KR', 'Korea, Republic of')
  eq((await one('TEST:c3')).country, 'JP', '소문자 코드')
  eq((await one('TEST:c4')).country, 'Atlantis', '모르는 이름은 원문 유지')
  // 저장된 옛 원문 이름도 읽을 때 접힌다
  eq(M.hydrateItem({ doc_key: 'L', country: 'Japan' }).country, 'JP', 'hydrateItem 이 옛 값 접기')
  eq(M.filterNews(await read().then((a) => a.map(M.hydrateItem)), { country: 'United States of America' }).filter((x) => x.doc_key === 'TEST:c1').length, 1, '필터에 원문 이름을 줘도 코드로 매칭')
}

section('12. _lock 으로 잠근 필드는 재전송이 덮지 못한다')
{
  await M.upsertNews([{ doc_key: 'TEST:c1', title_ko: '정정 제목', _lock: ['title_ko'] }])
  eq((await one('TEST:c1')).title_ko, '정정 제목', '잠그는 수신은 반영')
  const r = await M.upsertNews([{ doc_key: 'TEST:c1', title_ko: '옛 제목', summary_ko: '요약은 잠그지 않음' }])
  eq((await one('TEST:c1')).title_ko, '정정 제목', '이후 수신은 무시')
  eq((await one('TEST:c1')).summary_ko, '요약은 잠그지 않음', '잠그지 않은 필드는 반영')
  ok(JSON.stringify(r.preserved).includes('locked:title_ko'), 'preserved 에 locked:title_ko 보고', r.preserved)
  await M.upsertNews([{ doc_key: 'TEST:c1', title_ko: '재정정', _lock: ['title_ko'] }])
  eq((await one('TEST:c1')).title_ko, '재정정', '다시 _lock 을 실으면 갱신 가능')
  await M.upsertNews([{ doc_key: 'TEST:c1', _lock: ['doc_key', 'slug'] }])
  ok(!(await one('TEST:c1')).locked_fields.includes('slug'), 'doc_key·slug 는 잠글 수 없음')
}

section('13. 법제처 항목 시행일 게이트(QA1020-FIX 1) — 불일치면 게시 보류')
{
  const xml = (ef, pr, rule) =>
    `<법령><기본정보><공포일자>${pr}</공포일자><시행일자>${ef}</시행일자></기본정보><부칙><부칙단위 부칙키="1"><부칙내용><![CDATA[부칙]]></부칙내용><부칙내용><![CDATA[제1조(시행일) ${rule}]]></부칙내용></부칙단위></부칙></법령>`
  const LAW = xml('20271021', '20261020', '이 법은 공포 후 1년이 경과한 날부터 시행한다. 다만, 제18조제5항의 개정규정은 공포한 날부터 시행하고, 제56조의 개정규정은 2027년 12월 31일부터 시행한다.')
  const fetchOk = async () => LAW
  const base = { doc_key: 'KRLAW:1', source_key: 'kr_law_go_kr', url: 'https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=1&type=HTML', published_date: '2026-10-19', title_ko: '의료기기법 일부 개정' }
  const wrong = { ...base, summary_ko: '의료기기법이 2026년 10월 20일부터 시행됩니다.', deadline: '2026-10-20' }
  const r1 = await M.upsertNews([wrong], fetchOk)
  eq(r1.date_held.length, 1, '불일치 → date_held 1건')
  const held = M.hydrateItem(await one('KRLAW:1'))
  ok(M.isHeld(held) && !M.isListable(held), '보류 항목은 목록에서 빠짐')
  const right = { doc_key: 'KRLAW:1', summary_ko: '의료기기법 개정이 2026년 10월 20일 공포되어 2027년 10월 21일부터 시행됩니다. 다만 지출보고서 면제 규정은 공포한 날인 2026년 10월 20일부터 적용됩니다.', deadline: '2027-10-21' }
  const r2 = await M.upsertNews([right], fetchOk)
  eq(r2.date_held.length, 0, '정정 수신 → 재대조 통과')
  ok(M.isListable(M.hydrateItem(await one('KRLAW:1'))), '보류 해제')
  // 원문을 못 읽으면 시행 날짜가 적힌 글은 보류
  const r3 = await M.upsertNews([{ ...base, doc_key: 'KRLAW:2', summary_ko: '2026년 10월 2일부터 시행됩니다.' }], async () => { throw new Error('timeout') })
  eq(r3.date_held.length, 1, 'law.go.kr 실패 + 시행 날짜 있음 → 보류')
  // 다른 수집원은 대조하지 않는다
  const r4 = await M.upsertNews([{ doc_key: 'FR:x', source_key: 'us_federal_register', title_ko: 'x', url: 'https://fr.gov/x', published_date: '2026-10-01', summary_ko: '2026년 10월 20일부터 시행' }], async () => { throw new Error('호출되면 안 됨') })
  eq(r4.date_held.length, 0, '연방관보 항목은 대조 대상 아님')
}

console.log(failed ? `\n✗ 실패 ${failed}건` : '\n✓ 전부 통과')
process.exit(failed ? 1 : 0)
