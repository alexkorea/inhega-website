/**
 * /news/<slug> — 인허가 뉴스 해설 기사 (맥7 20260923-1715 지시 2).
 *
 * 본문은 맥6 로컬 모델이 원문을 읽고 만든 해설을 n8n(RW-04)이 ingest 로 보낸 것이다.
 * KV 를 **요청 시** 읽으므로 기사가 들어오면 재배포 없이 바로 공개된다.
 * 기사가 없는 항목에는 이 URL 이 없다 — 목록에서 링크도 걸리지 않고 여기서는 404.
 *
 * en/zh/ja 개별 페이지는 2단계라서 지금은 ko 만 있다. canonical 은 자기 자신.
 * 캐시는 워커 출구에서 s-maxage=600 (scripts/build-pages-bundle.mjs 의 NEWS_PATH 가
 * /news/ 하위까지 잡는다).
 */
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { findNewsBySlug, hasArticle, SOURCE_LABELS, type NewsItem } from '@/lib/news-data'
import {
  ORG_NAME,
  SITE,
  articleOgImage,
  parseBlocks,
  relatedServices,
  sanitize,
  toPlain,
} from '@/lib/news-article-render'
import { formatNewsDate } from '@/lib/i18n/news-i18n'
import NewsArticleBlocks from '@/components/news/NewsArticleBlocks'
import styles from '@/app/news-article.module.css'

// KV 를 요청 시 읽는다 — 프리렌더하면 배포 시점 데이터로 굳는다.
export const dynamic = 'force-dynamic'

/** 게시 기사만 통과시킨다. 요약만 있는 항목은 개별 페이지를 만들지 않는다. */
async function getArticleItem(slug: string): Promise<NewsItem | null> {
  const item = await findNewsBySlug(slug)
  if (!item || !hasArticle(item.article)) return null

  // 수신단 정화가 붙기 전에 들어온 원고가 KV 에 남아 있다(모델 종료 토큰 `<|im_end|>`
  // 가 본문 끝에 찍혀 라이브에 노출된 적이 있다). 본문 블록은 parseInline 이 걷어내고,
  // 그 밖의 필드는 여기서 한 번에 정화한다. 재전송을 기다리지 않기 위한 2차 방어.
  const a = item.article!
  return {
    ...item,
    article: {
      ...a,
      meta_title: sanitize(a.meta_title),
      meta_description: sanitize(a.meta_description),
      h1: sanitize(a.h1),
      lead: sanitize(a.lead),
      disclaimer: sanitize(a.disclaimer),
      sections: a.sections.map((sec) => ({ ...sec, h2: sanitize(sec.h2) })),
      faq: a.faq.map((f) => ({ q: sanitize(f.q), a: sanitize(f.a) })),
      keywords: a.keywords.map(sanitize).filter(Boolean),
    },
  }
}

/** published_date 는 YYYY-MM-DD, updated_at 은 ISO. 둘 다 없으면 JSON-LD 에서 뺀다. */
const isoDay = (v: string) => (/^\d{4}-\d{2}-\d{2}/.test(v) ? v.slice(0, 10) : '')

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const item = await getArticleItem(slug)
  if (!item?.article) {
    // 기사가 없으면 404 가 될 URL 이다 — 색인 신호를 남기지 않는다.
    return { title: '페이지를 찾을 수 없습니다', robots: { index: false, follow: false } }
  }

  const a = item.article
  const url = `${SITE}/news/${item.slug}`
  const image = articleOgImage(item)

  return {
    title: a.meta_title,
    description: a.meta_description,
    keywords: a.keywords.length ? a.keywords : undefined,
    robots: { index: true, follow: true },
    alternates: { canonical: url, languages: { ko: url, 'x-default': url } },
    openGraph: {
      title: a.meta_title,
      description: a.meta_description,
      url,
      siteName: ORG_NAME,
      type: 'article',
      locale: 'ko_KR',
      publishedTime: isoDay(item.published_date) || undefined,
      modifiedTime: item.updated_at || undefined,
      images: [{ url: image, width: 1200, height: 630, alt: a.h1 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: a.meta_title,
      description: a.meta_description,
      images: [image],
    },
  }
}

export default async function NewsArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const item = await getArticleItem(slug)
  if (!item?.article) notFound()

  const a = item.article
  const url = `${SITE}/news/${item.slug}`
  const image = articleOgImage(item)
  const sourceLabel = SOURCE_LABELS[item.source_key] ?? item.source_key
  const services = relatedServices(item)
  const published = isoDay(item.published_date)
  const modified = item.updated_at || a.generated_at || published

  const publisher = {
    '@type': 'Organization',
    name: ORG_NAME,
    url: SITE,
    logo: { '@type': 'ImageObject', url: `${SITE}/images/hero-seoul.png` },
  }

  const jsonLd: Record<string, unknown>[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'NewsArticle',
      headline: a.h1.slice(0, 110),
      description: a.meta_description,
      image: [image],
      inLanguage: 'ko-KR',
      ...(published ? { datePublished: published } : {}),
      ...(modified ? { dateModified: modified } : {}),
      author: { '@type': 'Organization', name: ORG_NAME, url: SITE },
      publisher,
      mainEntityOfPage: { '@type': 'WebPage', '@id': url },
      ...(a.keywords.length ? { keywords: a.keywords.join(', ') } : {}),
      ...(item.url ? { isBasedOn: item.url } : {}),
      articleSection: '인허가 뉴스',
      articleBody: toPlain([a.lead, ...a.sections.flatMap((s) => [s.h2, ...s.body])]).slice(0, 5000),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: '홈', item: SITE },
        { '@type': 'ListItem', position: 2, name: '인허가 뉴스', item: `${SITE}/news` },
        { '@type': 'ListItem', position: 3, name: a.h1, item: url },
      ],
    },
  ]

  if (a.faq.length) {
    jsonLd.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: a.faq.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    })
  }

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section style={{ background: 'var(--navy)', padding: '3rem 0', paddingTop: 'calc(72px + 3rem)' }}>
        <div className="container">
          <div className={styles.wrap}>
            <nav className={styles.breadcrumb} aria-label="현재 위치">
              <Link href="/">홈</Link>
              <span>/</span>
              <Link href="/news">인허가 뉴스</Link>
              <span>/</span>
              <span className={styles.breadcrumbCurrent}>{item.country || '규제 동향'}</span>
            </nav>

            <div className={styles.badges}>
              {item.scope && <span className={styles.badge}>{item.scope}</span>}
              {item.country && <span className={styles.badge}>{item.country}</span>}
              {item.product && <span className={styles.badge}>{item.product}</span>}
              {item.impact && <span className={styles.badge}>영향 {item.impact}</span>}
            </div>

            <h1 className={styles.h1}>{a.h1}</h1>

            <div className={styles.dates}>
              {published && <span>공개일 {formatNewsDate(published, 'ko')}</span>}
              {modified && <span>수정일 {formatNewsDate(isoDay(modified) || published, 'ko')}</span>}
              {sourceLabel && <span>출처 {sourceLabel}</span>}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="container">
          <div className={styles.wrap}>
            <article className={styles.card}>
              {a.lead && <p className={styles.lead}>{a.lead}</p>}

              {a.sections.map((s, i) => (
                <section key={i} className={styles.section}>
                  <h2 className={styles.h2}>{s.h2}</h2>
                  <NewsArticleBlocks blocks={parseBlocks(s.body)} />
                </section>
              ))}
            </article>

            <div className={styles.block}>
              <h2 className={styles.blockTitle}>원문 및 출처</h2>
              <div className={styles.metaList}>
                {item.country && <span><span className={styles.metaKey}>국가</span>{item.country}</span>}
                {sourceLabel && <span><span className={styles.metaKey}>발표 기관</span>{sourceLabel}</span>}
                {item.stage && <span><span className={styles.metaKey}>단계</span>{item.stage}</span>}
                <span>
                  <span className={styles.metaKey}>의견·시행 기한</span>
                  {item.deadline ? formatNewsDate(item.deadline, 'ko') : '미정'}
                </span>
                {item.url && (
                  <span>
                    <span className={styles.metaKey}>원문</span>
                    <a
                      className={styles.sourceLink}
                      href={item.url}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                    >
                      원문 문서 열기 (새 창)
                    </a>
                  </span>
                )}
              </div>
            </div>

            {a.faq.length > 0 && (
              <div className={styles.block}>
                <h2 className={styles.blockTitle}>자주 묻는 질문</h2>
                {a.faq.map((f, i) => (
                  <div key={i} className={styles.faqItem}>
                    <p className={styles.faqQ}>Q. {f.q}</p>
                    <p className={styles.faqA}>A. {f.a}</p>
                  </div>
                ))}
              </div>
            )}

            <div className={styles.block}>
              <h2 className={styles.blockTitle}>관련 인허가 서비스</h2>
              <div className={styles.serviceLinks}>
                {(services.length
                  ? services
                  : [{ slug: 'all', title: '인허가 서비스 전체 보기', href: '/services' }]
                ).map((s) => (
                  <Link key={s.slug} href={s.href} className={styles.serviceLink}>
                    <span>{s.title}</span>
                    <span className={styles.serviceArrow} aria-hidden="true">→</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className={styles.ctaBlock}>
              <p className={styles.ctaTitle}>이 규제가 우리 품목에 적용되는지 확인이 필요하신가요?</p>
              <p className={styles.ctaSub}>
                {ORG_NAME}가 해당 품목의 국내 인허가 요건과 준비 서류를 함께 확인해 드립니다.
              </p>
              <div className={styles.ctaRow}>
                <Link href="/contact" className={styles.ctaPrimary}>상담 신청</Link>
                <Link href="/quote" className={styles.ctaSecondary}>견적 문의</Link>
              </div>
            </div>

            <p className={styles.notice}>
              <strong className={styles.noticeTitle}>자동 생성 안내</strong>
              {a.disclaimer ||
                '이 기사는 각국 정부·공공기관이 공개한 공식 자료(관보·통보문·입법예고)를 바탕으로 자동 생성한 해설입니다. 원문 문장을 그대로 옮기지 않으며, 실제 적용 여부와 세부 요건은 반드시 원문과 담당 기관 공고로 확인하시기 바랍니다.'}
            </p>

            <div className={styles.backRow}>
              <Link href="/news" className={styles.backLink}>← 인허가 뉴스 목록으로</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
