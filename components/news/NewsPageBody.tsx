/**
 * /news 본문(서버 컴포넌트). ko·en·zh·ja 네 라우트가 같은 데이터를 쓰고
 * 라벨만 갈아끼운다. 데이터는 KV 에서 요청 시 읽으므로 재배포 없이 갱신된다.
 */
import { hasArticle, listableNews, readAllNews, sortNews, toCard } from '@/lib/news-data'
import { getNewsStrings, type NewsLocale } from '@/lib/i18n/news-i18n'
import NewsBrowser from './NewsBrowser'
import styles from '@/app/news.module.css'

/** 클라이언트로 내려보내는 최대 건수 — 탭·필터·검색이 전부 브라우저에서 돈다. */
const RENDER_LIMIT = 150
/** JSON-LD ItemList 에 싣는 상위 건수. */
const ITEMLIST_LIMIT = 20

const BASE = 'https://inhega.co.kr'

const pathFor = (locale: NewsLocale) => (locale === 'ko' ? '/news' : `/${locale}/news`)

/** 개별 기사 페이지는 ko 만 있다(en/zh/ja 는 2단계). 없는 로케일은 카드 펼침을 유지한다. */
const articleBaseFor = (locale: NewsLocale) => (locale === 'ko' ? '/news' : null)
const contactFor = (locale: NewsLocale) => (locale === 'ko' ? '/contact' : `/${locale}/contact`)

export default async function NewsPageBody({ locale }: { locale: NewsLocale }) {
  const t = getNewsStrings(locale)
  // 제목 없는 항목은 빈 카드가 되므로 렌더 단계에서 걸러낸다(수신단 방어의 2중화).
  const all = listableNews(sortNews(await readAllNews())).slice(0, RENDER_LIMIT)
  // 클라이언트로는 기사 본문을 뺀 카드만 내려보낸다 — 본문은 /news/<slug> 가 직접 읽는다.
  const cards = all.map(toCard)

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${BASE}${pathFor(locale)}#webpage`,
      url: `${BASE}${pathFor(locale)}`,
      name: t.metaTitle,
      description: t.metaDescription,
      inLanguage: locale === 'ko' ? 'ko-KR' : locale,
      isPartOf: { '@type': 'WebSite', '@id': `${BASE}/#website`, url: BASE, name: '유선행정사사무소' },
      publisher: { '@id': `${BASE}/#organization` },
      ...(all.length > 0 ? { dateModified: all[0].published_date || undefined } : {}),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: '유선행정사사무소', item: `${BASE}${locale === 'ko' ? '' : `/${locale}`}` },
        { '@type': 'ListItem', position: 2, name: t.navLabel, item: `${BASE}${pathFor(locale)}` },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: t.metaTitle,
      itemListOrder: 'https://schema.org/ItemListOrderDescending',
      numberOfItems: all.length,
      // 기사가 있으면 우리 기사 페이지를, 없으면 원문을 가리킨다.
      itemListElement: all.slice(0, ITEMLIST_LIMIT).map((it, i) => {
        const href = locale === 'ko' && hasArticle(it.article) && it.slug
          ? `${BASE}/news/${it.slug}`
          : it.url
        return {
          '@type': 'ListItem',
          position: i + 1,
          name: it.title_ko,
          ...(href ? { url: href } : {}),
        }
      }),
    },
  ]

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section style={{ background: 'var(--navy)', padding: '2.25rem 0', paddingTop: 'calc(72px + 2.25rem)' }}>
        <div className="container">
          <span className="badge badge-white text-label">{t.badge}</span>
          <h1 className="text-display" style={{ color: 'white', marginTop: '1rem' }}>{t.h1}</h1>
          <p className="text-body-lg" style={{ color: 'rgba(255,255,255,0.65)', marginTop: '1rem', maxWidth: '46rem' }}>
            {t.heroSub}
          </p>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="container">
          <NewsBrowser
            items={cards}
            t={t}
            locale={locale}
            contactHref={contactFor(locale)}
            articleBase={articleBaseFor(locale)}
          />

          <p className={styles.notice}>
            <strong className={styles.noticeTitle}>{t.disclaimerTitle}</strong>
            {t.disclaimerBody}
          </p>
        </div>
      </section>
    </div>
  )
}
