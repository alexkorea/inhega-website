import { cleanArticleHtml } from '@/lib/article-clean'

const LEAD = { ko: '공식 사이트에서 확인하기', en: 'Check on the official website', zh: '在官方网站确认', ja: '公式サイトで確認する' } as const

/** 블로그 본문 — 출처·기준일 문구를 거르고 외부 링크를 맨 끝 1곳으로 모은다(WQA-1007-FIX). */
export default function ArticleBody({ html, locale }: { html: string; locale: 'ko' | 'en' | 'zh' | 'ja' }) {
  const { html: clean, official } = cleanArticleHtml(html, locale)
  return (
    <>
      <div
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: clean }}
        style={{ lineHeight: 1.8, color: 'var(--charcoal)', fontSize: '1rem' }}
      />
      {official && (
        <p style={{ marginTop: '2rem', fontSize: '0.875rem', color: 'var(--slate)' }}>
          <strong>{LEAD[locale]}: </strong>
          <a href={official.href} target="_blank" rel="noopener noreferrer" style={{ color: '#235099' }}>{official.label}</a>
        </p>
      )}
    </>
  )
}
