/**
 * 업무 페이지 '최종 수정일'(AI-RECO-2 E-4, 맥7 2026-11-04) — 화면 한 줄 · JSON-LD WebPage.dateModified · sitemap lastmod 가 같은 값.
 * 원천은 prebuild scripts/page-lastmod.mjs 가 만든 PAGE_LASTMOD(원고 파일 마지막 커밋일, [lastmod-skip] 제외)뿐 — 빌드 시각은 쓰지 않는다.
 * 쪽 하나의 날짜 = 그 쪽을 그리는 원고 묶음의 커밋일 중 가장 늦은 날:
 *   · 쪽 골격: 업종 페이지면 ind:<slug>.<lang>(content/industry-pages), 아니면 svc:<lang>(services-data·services-i18n·쪽 파일)
 *   · 항목 블록: 12절 항목이면 ru:<lang>/<slug>(content/reco-units), 중점 6이면 focus:<lang>(lib/focus-*.ts)
 *   · 블록 공통 화면: pillar-ui(FocusPillar.tsx·focus-pillar-view.ts·이 파일)
 * sitemap.ts 에서도 쓰므로 본문 정본(reco-units.generated 등)을 import 하지 말 것(워커 크기).
 */
import { PAGE_LASTMOD } from './page-lastmod.generated'

export type LastmodLocale = 'ko' | 'en' | 'zh' | 'ja'

export function servicePageLastmod(locale: LastmodLocale, slug: string): string | undefined {
  const ind = PAGE_LASTMOD[`ind:${slug}.${locale}`]
  const base = ind ?? PAGE_LASTMOD[`svc:${locale}`]
  const unit = PAGE_LASTMOD[`ru:${locale}/${slug}`] ?? PAGE_LASTMOD[`focus:${locale}`]
  const ui = PAGE_LASTMOD['pillar-ui']
  const all = [base, unit, ui].filter((d): d is string => !!d && /^\d{4}-\d{2}-\d{2}$/.test(d))
  all.sort()
  return all.length ? all[all.length - 1] : undefined
}
