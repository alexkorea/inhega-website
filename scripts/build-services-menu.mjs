/**
 * lib/services-menu.generated.ts 생성기 (2026-09-25 맥7 승인 — 홈 JS 389KB 분할)
 *
 * 왜 있나
 * ───────
 * 헤더 메가메뉴(Navbar/NavbarLang)와 상담·견적 폼은 'use client' 다. 이들이
 * lib/services-catalog.ts 를 import 하면 그 체인으로 lib/services-data.ts(730KB)와
 * lib/i18n/services-i18n.ts(163KB)가 통째로 클라이언트 번들에 실린다 — documents·
 * process·faqs·overview 까지 전부. 2026-09-25 라이브 실측에서 단일 청크
 * 0puyk4_pf6ecq.js 가 873KB(br 207KB)였고 그 중 20만 자가 CJK 본문이었다.
 * 메뉴와 폼이 실제로 쓰는 필드는 slug·href·shortTitle·category 넷뿐이다.
 *
 * 그래서 그 네 필드만 담은 모듈을 여기서 굽고, 클라이언트는 그것만 import 한다.
 * 정본은 여전히 services-data.ts + services-i18n.ts 하나다 — 이 스크립트는
 * getServiceCatalogByCategory() 를 *실행해서* 값을 받아 적기 때문에 손으로 고친
 * 목록이 끼어들 자리가 없다. 생성 파일을 직접 편집하지 말 것.
 *
 * 사용
 * ────
 *   node scripts/build-services-menu.mjs           # 생성(prebuild 가 매번 실행)
 *   node scripts/build-services-menu.mjs --check   # 산출물이 정본과 어긋나면 exit 1
 */
import { register } from 'node:module'
import { pathToFileURL } from 'node:url'
import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
register(pathToFileURL(join(ROOT, 'scripts/lib/ts-esm-loader.mjs')).href, pathToFileURL(ROOT + '/'))

const catalog = await import(pathToFileURL(join(ROOT, 'lib/services-catalog.ts')).href)
// 0949(2026-10-04): 헤더 메뉴가 신규 업종 페이지까지 분야 그룹으로 보여 준다. 업종 원고 본문은
// 클라이언트로 보내지 않고 slug·href·h1 만 굽는다. 그룹 배정은 lib/service-groups.ts.
const directory = await import(pathToFileURL(join(ROOT, 'lib/service-directory.ts')).href)
const LOCALES = ['ko', 'en', 'zh', 'ja']
const OUT = join(ROOT, 'lib/services-menu.generated.ts')

const menu = {}
for (const locale of LOCALES) {
  // 평탄 배열로 굽는다. 카테고리 묶음은 services-menu.ts 가 이 순서에서 만든다 —
  // 묶음 구조로 구우면 폼 select 순서가 카테고리順으로 바뀐다(2026-09-25에 실제로 그랬다).
  menu[locale] = catalog.getServiceCatalog(locale).map((s) => ({
    slug: s.slug,
    href: s.href,
    shortTitle: s.shortTitle,
    category: s.category,
  }))
  if (menu[locale].length === 0) {
    console.error(`[services-menu] ${locale}: 서비스 0건 — 정본을 못 읽었다`)
    process.exit(1)
  }
}

// 신규 업종 메뉴 항목 = 정본 디렉터리에서 기존 24종을 뺀 나머지(번역본 없는 로케일은 자동 제외).
const industryMenu = {}
for (const locale of LOCALES) {
  const base = new Set(menu[locale].map((m) => m.slug))
  industryMenu[locale] = directory.getDirectoryEntries(locale)
    .filter((e) => !base.has(e.slug))
    .map((e) => ({ slug: e.slug, href: e.href, shortTitle: e.title }))
  // 그룹 미배정이면 getServiceDirectory 가 예외를 던진다 — 여기서 빌드를 멈춘다.
  directory.getServiceDirectory(locale)
}

const body = `// 이 파일은 scripts/build-services-menu.mjs 가 만든다. 직접 고치지 말 것.
// 정본: lib/services-data.ts + lib/i18n/services-i18n.ts
// 왜 나눠 굽는지는 생성기 머리말 참고 (클라이언트 번들에서 본문 코퍼스를 뺀다).
export interface ServiceMenuItem {
  slug: string
  href: string
  shortTitle: string
  category: string
}

/** 정본 getServiceCatalog() 와 같은 순서. 폼 select 순서가 여기에 달려 있다. */
export const SERVICE_MENU: Record<'ko' | 'en' | 'zh' | 'ja', ServiceMenuItem[]> = ${JSON.stringify(menu, null, 2)}

/** 신규 업종 페이지(lib/industry-pages.ts) — 메뉴 전용. 폼 select 에는 들어가지 않는다. */
export const INDUSTRY_MENU: Record<'ko' | 'en' | 'zh' | 'ja', { slug: string; href: string; shortTitle: string }[]> = ${JSON.stringify(industryMenu, null, 2)}

export const SERVICE_MENU_OTHER: Record<'ko' | 'en' | 'zh' | 'ja', string> = ${JSON.stringify(
  Object.fromEntries(LOCALES.map((l) => [l, catalog.OTHER_OPTION[l]])),
  null,
  2,
)}
`

const prev = existsSync(OUT) ? readFileSync(OUT, 'utf8') : ''
const isCheck = process.argv.includes('--check')

if (isCheck && prev !== body) {
  console.error('[services-menu] 생성물이 정본과 어긋난다 — `node scripts/build-services-menu.mjs` 를 돌리고 커밋할 것')
  process.exit(1)
}
if (!isCheck && prev !== body) writeFileSync(OUT, body)

/* 굽는 것으로 끝내지 않고, 경량판 API 가 정본과 **순서까지** 같은 값을 내는지 단언한다.
   2026-09-25: 카테고리 묶음을 평탄화해 select 를 만들었더니 24개 집합은 같은데
   순서가 카테고리順으로 바뀌었다. 집합 비교만 했으면 그대로 배포될 뻔했다. */
const menuApi = await import(pathToFileURL(join(ROOT, 'lib/services-menu.ts')).href + '?v=' + Date.now())
let drift = 0
for (const locale of LOCALES) {
  const expGroups = catalog.getServiceCatalogByCategory(locale).map((g) => ({
    category: g.category,
    items: g.items.map((s) => ({ slug: s.slug, href: s.href, shortTitle: s.shortTitle, category: s.category })),
  }))
  const gotGroups = menuApi.getServiceMenuByCategory(locale)
  if (JSON.stringify(expGroups) !== JSON.stringify(gotGroups)) {
    console.error(`[services-menu] ${locale}: 카테고리 묶음이 정본과 다르다`)
    drift++
  }
  // 0949 추가(2026-10-04): 폼 선택지 = 정본 디렉터리 전체(분야 순서) + 기타
  const expOpts = directory.getDirectorySelectOptions(locale)
  const gotOpts = menuApi.getServiceMenuSelectOptions(locale)
  if (new Set(expOpts).size !== expOpts.length) {
    console.error(`[services-menu] ${locale}: 폼 선택지에 같은 이름이 둘 — 선택 값으로 업종을 구분할 수 없다`)
    drift++
  }
  if (JSON.stringify(expOpts) !== JSON.stringify(gotOpts)) {
    console.error(`[services-menu] ${locale}: 폼 select 선택지가 정본과 다르다 (순서 포함)`)
    console.error(`  정본: ${expOpts.join(' | ')}`)
    console.error(`  경량: ${gotOpts.join(' | ')}`)
    drift++
  }
  // 분야 그룹 메뉴 = 정본 디렉터리 그룹(순서·항목·라벨까지)
  const expDir = directory.getServiceDirectory(locale).map((g) => ({ id: g.id, label: g.label, items: g.items.map((e) => [e.slug, e.href, e.title]) }))
  const gotDir = menuApi.getServiceMenuByGroup(locale).map((g) => ({ id: g.id, label: g.label, items: g.items.map((e) => [e.slug, e.href, e.shortTitle]) }))
  if (JSON.stringify(expDir) !== JSON.stringify(gotDir)) {
    console.error(`[services-menu] ${locale}: 분야 그룹 메뉴가 정본 디렉터리와 다르다`)
    drift++
  }
  if (menuApi.getServiceMenuCount(locale) !== directory.getDirectoryCount(locale)) {
    console.error(`[services-menu] ${locale}: 서비스 수 불일치`)
    drift++
  }
}
if (drift) process.exit(1)

/* public/llms.txt 전체를 여기서 굽는다 (INHEGA-1111 B-5, 2026-11-11 — llmstxt.org 형식:
   "# 제목 → > 한 줄 요약 → ## 절 → - [쪽 이름](URL): 설명". Lighthouse 'llms-txt' 감사는 [..](..) 링크가 있어야 통과).
   원고: content/llms/llms.template.md(사무소 정보·문의·다른 언어 등 손으로 쓰는 부분) + content/llms/guides.txt(주요 가이드 slug).
   업무 목록·설명은 정본에서 읽는다 — 중점 6 = lib/focus-services.ts desc, 나머지 = content/reco-units/ko 처리 업무 앞 3개.
   (설명에 금액·법령 근거·확인일을 싣지 않는다: 카드 desc 는 '~법에 따라' 가 섞여 있어 쓰지 않음.)
   public/llms.txt 를 손으로 고치지 말 것 — 다음 빌드에서 원고대로 돌아간다. */
const SITE = 'https://inhega.co.kr'
const LLMS = join(ROOT, 'public/llms.txt')
const LLMS_TPL = join(ROOT, 'content/llms/llms.template.md')
const LLMS_GUIDES = join(ROOT, 'content/llms/guides.txt')
const focusMod = await import(pathToFileURL(join(ROOT, 'lib/focus-services.ts')).href)
const blogMod = await import(pathToFileURL(join(ROOT, 'lib/blog-posts-data.ts')).href)
const redirMod = await import(pathToFileURL(join(ROOT, 'lib/blog-redirects.ts')).href)
const topicMod = await import(pathToFileURL(join(ROOT, 'lib/blog-topic-map.ts')).href)
const llmsErr = []
const koGroups = directory.getServiceDirectory('ko')
const koBySlug = new Map(koGroups.flatMap((g) => g.items.map((e) => [e.slug, e])))
const focusSlugs = new Set(focusMod.FOCUS_SERVICES.map((f) => f.slug))
const llmsFocus = focusMod.FOCUS_SERVICES.map((f) => {
  if (!koBySlug.has(f.slug)) llmsErr.push(`중점 ${f.slug} 이 업무 목록에 없다`)
  return `- [${f.label}](${SITE}${f.href}): ${f.desc}`
}).join('\n')
const recoDesc = (slug) => {
  const fp = join(ROOT, 'content/reco-units/ko', slug + '.json')
  if (!existsSync(fp)) { llmsErr.push(`처리 업무 원고 없음 content/reco-units/ko/${slug}.json`); return '' }
  // 괄호 속 세부(기준 수치·근거)는 빼고, 숫자가 남는 항목(금액·면적·기간 기준)은 건너뛴다 — llms.txt 엔 금액·근거를 싣지 않는다.
  const strip = (t) => { let o; do { o = t; t = t.replace(/\s*\(([^()]*)\)/g, (m, x) => (/^[\u4e00-\u9fff]+$/.test(x) ? `(${x})` : "")) } while (t !== o); return t.trim() }
  const names = JSON.parse(readFileSync(fp, 'utf8')).services.map((x) => strip(x.name)).filter((t) => t && !/\d/.test(t))
  if (names.length < 2) llmsErr.push(`처리 업무 설명이 2개 미만: ${slug}`)
  return names.slice(0, 3).join(', ')
}
const llmsGroups = koGroups.map((g) => {
  const rest = g.items.filter((e) => !focusSlugs.has(e.slug))
  if (!rest.length) return ''
  return `## ${g.label}\n\n` + rest.map((e) => `- [${e.title}](${SITE}${e.href}): ${recoDesc(e.slug)}`).join('\n')
}).filter(Boolean).join('\n\n')
const svcTitleByHref = new Map([...koBySlug.values()].map((e) => [e.href, e.title]))
for (const f of focusMod.FOCUS_SERVICES) svcTitleByHref.set(f.href, f.label)
const llmsGuides = readFileSync(LLMS_GUIDES, 'utf8').split('\n').map((x) => x.trim()).filter((x) => x && !x.startsWith('#')).map((slug) => {
  const p = blogMod.getBlogPostBySlug(slug)
  if (!p) { llmsErr.push(`가이드 slug 없음: ${slug}`); return '' }
  if (redirMod.REDIRECTED_BLOG_SLUGS.has(slug)) llmsErr.push(`가이드 slug 가 301 글: ${slug}`)
  const href = topicMod.BLOG_TOPIC_SERVICE[slug] ?? p.relatedServices?.[0]?.href
  const svc = href && svcTitleByHref.get(href)
  if (!svc) llmsErr.push(`가이드 관련 업무를 못 찾음: ${slug}`)
  return `- [${p.title}](${SITE}/blog/${slug}): 관련 업무 — ${svc}`
}).join('\n')
const llmsBody = readFileSync(LLMS_TPL, 'utf8')
  .replaceAll('{{COUNT}}', String(directory.getDirectoryCount('ko')))
  .replace('{{FOCUS}}', llmsFocus).replace('{{GROUPS}}', llmsGroups).replace('{{GUIDES}}', llmsGuides)
if (/\{\{[A-Z]+\}\}/.test(llmsBody)) llmsErr.push('템플릿 자리표시가 남았다')
const llmsLinks = (llmsBody.match(/^- \[[^\]]+\]\(https?:\/\/[^)]+\)/gm) || []).length
if (!/^# .+/.test(llmsBody) || !/^> .+/m.test(llmsBody) || llmsLinks < 20) llmsErr.push(`형식 확인 실패(H1·요약·링크 ${llmsLinks})`)
if (llmsErr.length) { for (const e of llmsErr) console.error('[services-menu] llms.txt: ' + e); process.exit(1) }
const llmsPrev = existsSync(LLMS) ? readFileSync(LLMS, 'utf8') : ''
if (llmsBody !== llmsPrev) {
  if (isCheck) {
    console.error('[services-menu] public/llms.txt 가 원고(content/llms)·정본과 어긋난다 — 생성기를 돌릴 것')
    process.exit(1)
  }
  writeFileSync(LLMS, llmsBody)
}

const total = LOCALES.map((l) => `${l}:${menu[l].length}+${industryMenu[l].length}`).join(' ')
console.log(`[services-menu] 정본 동등성 OK (${total}) — lib/services-menu.generated.ts ${prev === body ? '변경없음' : (isCheck ? 'check' : '갱신')}, ${Buffer.byteLength(body)}B`)
