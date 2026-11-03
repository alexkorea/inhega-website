import Link from 'next/link'
import { FOCUS_SERVICES, FOCUS_SERVICES_I18N, type FocusLocale } from '@/lib/focus-services'

// 기존 블로그 글 → 중점 업무 필러 링크 보강(INHEGA-FOCUS-1103 2차, 보스 msg 4781 ④).
// 글 슬러그 접두어로 주제를 판정한다(일일 엔진 pool.mjs slugStems 와 같은 기준). 중점 6개가 아니면 아무것도 그리지 않는다.
const STEMS: [string, string][] = [
  ['nonprofit', 'nonprofit'],
  ['telecom', 'telecom-business'],
  ['value-added-telecom', 'telecom-business'],
  ['location-based-service', 'location-based-service'],
  ['location-information', 'location-based-service'],
  ['cosmetics', 'cosmetics'],
  ['functional-cosmetics', 'cosmetics'],
  ['health-food', 'health-food'],
  ['health-functional-food', 'health-food'],
  ['factory', 'factory'],
]

export function focusSlugOfPost(postSlug: string): string | null {
  let best: string | null = null
  let len = 0
  for (const [stem, focus] of STEMS) {
    if ((postSlug === stem || postSlug.startsWith(stem + '-')) && stem.length > len) { best = focus; len = stem.length }
  }
  return best
}

const TEXT: Record<'ko' | FocusLocale, { badge: string; body: string; more: string }> = {
  ko: { badge: '중점 업무 안내', body: '대상·요건·절차·필요서류·처리기간과 상황별 질문을 한 페이지에 정리했습니다.', more: '바로 보기' },
  en: { badge: 'Focus service', body: 'Who needs it, requirements, steps, documents, timelines and common situations on one page.', more: 'View the guide' },
  zh: { badge: '重点业务', body: '适用对象、要件、流程、所需材料、处理期限与常见情境问答，一页看懂。', more: '立即查看' },
  ja: { badge: '重点業務', body: '対象・要件・手続き・必要書類・期間と状況別の質問を1ページにまとめています。', more: '詳しく見る' },
}

export default function FocusPillarLink({ postSlug, locale }: { postSlug: string; locale: 'ko' | FocusLocale }) {
  const focus = focusSlugOfPost(postSlug)
  const f = focus ? FOCUS_SERVICES.find((x) => x.slug === focus) : null
  if (!f) return null
  const label = locale === 'ko' ? f.label : FOCUS_SERVICES_I18N[locale].items[f.slug].label
  const href = locale === 'ko' ? f.href : `/${locale}${f.href}`
  const tx = TEXT[locale]
  return (
    <aside aria-label={tx.badge} style={{ marginTop: '2rem', background: 'var(--white)', border: '1px solid var(--border)', borderLeft: '4px solid var(--burgundy)', borderRadius: '12px', padding: '1.125rem 1.25rem' }}>
      <p style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--burgundy)', marginBottom: '0.375rem' }}>{tx.badge}</p>
      <p style={{ fontWeight: 700, color: 'var(--navy)', fontSize: '1.0625rem', marginBottom: '0.25rem' }}>{label}</p>
      <p style={{ fontSize: '0.9rem', color: 'var(--slate)', lineHeight: 1.7 }}>{tx.body}</p>
      <Link prefetch={false} href={href} style={{ display: 'inline-flex', alignItems: 'center', minHeight: '44px', fontWeight: 700, color: 'var(--navy)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>{tx.more} →</Link>
    </aside>
  )
}
