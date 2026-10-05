import Link from 'next/link'
import { FillImage, responsiveBase } from '@/components/ui/FillImage'
import { getServiceCatalog, type CatalogLocale } from '@/lib/services-catalog'
import { getServiceDirectory, type DirectoryEntry } from '@/lib/service-directory'
import { INDUSTRY_CARD_IMAGE } from '@/lib/service-card-images'
import DirectoryTabs from './DirectoryTabs'
import styles from './ServiceDirectory.module.css'

/**
 * 서비스 전체 목록(기존 24종 + 신규 업종) — 분야별 (0949, 2026-10-04).
 *   mode="cards"    홈: 분야 소제목 + 사진 카드 전부 펼침(INH-RESTORE 2026-10-05 — 탭·접기 금지, 보스 msg 2257~2262)
 *   mode="tabs"     (구 홈) 분야 탭 — 현재 미사용
 *   mode="sections" /services: 분야 소제목 + 바로가기
 * 목록·문구 정본은 lib/service-directory.ts. 여기서 서비스 배열을 다시 적지 말 것.
 */
const UI: Record<CatalogLocale, { more: string; groups: string; reqs: string }> = {
  ko: { more: '자세히 보기', groups: '인허가 분야', reqs: '핵심 요건' },
  en: { more: 'Learn More', groups: 'Service categories', reqs: 'Key requirements' },
  zh: { more: '了解详情', groups: '服务领域', reqs: '核心要求' },
  ja: { more: '詳しく見る', groups: 'サービス分野', reqs: '主な要件' },
}

function Card({ e, locale, heading: H }: { e: DirectoryEntry; locale: CatalogLocale; heading: 'h3' | 'h4' }) {
  return (
    <li>
      <Link prefetch={false} href={e.href} className={styles.card}>
        <H className={styles.cardTitle}>{e.title}</H>
        <p className={styles.cardDesc}>{e.desc}</p>
        {e.reqs.length > 0 && (
          <ul className={styles.cardReqs} aria-label={UI[locale].reqs}>
            {e.reqs.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        )}
        <span className={styles.cardMore}>
          {UI[locale].more}
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </span>
      </Link>
    </li>
  )
}

/** 카드 사진 — 기존 24종은 정본 image, 신규 업종은 lib/service-card-images.ts. 없으면 빌드 중단(회색 빈 카드 금지). */
function cardImage(slug: string, catalogImage: Map<string, string>): string {
  const img = catalogImage.get(slug) ?? INDUSTRY_CARD_IMAGE[slug]
  if (!img) throw new Error(`[ServiceDirectory] 카드 사진 없음: ${slug} — lib/service-card-images.ts 에 기존 사진을 배정할 것`)
  return img
}

/* 예전 홈(배포 657ffb7a) 사진 카드 그리드 — 사진 + 분야 배지 + 업종명 + 한 줄 설명 + 자세히 보기 */
function PhotoCards({ locale }: { locale: CatalogLocale }) {
  const groups = getServiceDirectory(locale)
  const catalogImage = new Map(getServiceCatalog(locale).map((s) => [s.slug, s.image]))
  const cjk = locale === 'zh' || locale === 'ja' ? styles.cjk : ''
  return (
    <div className={`${styles.directory} ${cjk}`}>
      {groups.map((g) => (
        <section key={g.id} className={styles.photoGroup} aria-labelledby={`home-grp-${g.id}`}>
          <h3 id={`home-grp-${g.id}`} className={styles.photoGroupTitle}>
            {g.label}
            <span className={styles.groupCount}>{g.items.length}</span>
          </h3>
          <ul className={styles.photoGrid}>
            {g.items.map((e) => (
              <li key={e.slug}>
                <Link prefetch={false} href={e.href} className={styles.photoCard}>
                  <div className={styles.photoImage}>
                    {/* 전부 lazy — 첫 화면 밖이다. sizes 250px 은 밀도 상한(예전 홈과 같음, 09d8ada 참고). */}
                    <FillImage
                      base={responsiveBase(cardImage(e.slug, catalogImage))}
                      small={500}
                      large={800}
                      alt={e.title}
                      sizes="(max-width: 900px) 250px, 33vw"
                    />
                    <div className={styles.photoOverlay} />
                  </div>
                  <div className={styles.photoBody}>
                    <span className={`badge badge-white ${styles.photoBadge}`}>{g.label}</span>
                    <h4 className={styles.photoTitle}>{e.title}</h4>
                    <p className={styles.photoDesc}>{e.desc}</p>
                    <span className={styles.photoLink}>
                      {UI[locale].more}
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}

export default function ServiceDirectory({ locale, mode }: { locale: CatalogLocale; mode: 'cards' | 'tabs' | 'sections' }) {
  if (mode === 'cards') return <PhotoCards locale={locale} />
  const groups = getServiceDirectory(locale)
  const cjk = locale === 'zh' || locale === 'ja' ? styles.cjk : ''

  if (mode === 'tabs') {
    return (
      <div className={`${styles.directory} ${cjk}`}>
        <DirectoryTabs tabs={groups.map((g) => ({ id: g.id, label: g.label, count: g.items.length }))} label={UI[locale].groups}>
          {groups.map((g) => (
            <ul key={g.id} className={styles.grid}>
              {g.items.map((e) => (
                <Card key={e.slug} e={e} locale={locale} heading="h3" />
              ))}
            </ul>
          ))}
        </DirectoryTabs>
      </div>
    )
  }

  // 업종 전체 OfferCatalog(0949 추가) — 화면 목록과 같은 정본·같은 순서. 조직 노드(lib/org-jsonld.ts)는 분야 요약만.
  const site = 'https://inhega.co.kr'
  const catalogJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name: UI[locale].groups,
    url: `${site}${locale === 'ko' ? '' : `/${locale}`}/services`,
    numberOfItems: groups.reduce((n, g) => n + g.items.length, 0),
    itemListElement: groups.map((g) => ({
      '@type': 'OfferCatalog',
      name: g.label,
      numberOfItems: g.items.length,
      itemListElement: g.items.map((e) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: e.title, url: `${site}${e.href}` },
      })),
    })),
  }

  return (
    <div className={`${styles.directory} ${cjk}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(catalogJsonLd) }} />
      <nav aria-label={UI[locale].groups} className={styles.tabs}>
        {groups.map((g) => (
          <a key={g.id} href={`#grp-${g.id}`} className={styles.tab}>
            {g.label}
            <span className={styles.tabCount}>{g.items.length}</span>
          </a>
        ))}
      </nav>
      {groups.map((g) => (
        <section key={g.id} id={`grp-${g.id}`} className={styles.group}>
          <h2 className={styles.groupTitle}>
            {g.label}
            <span className={styles.groupCount}>{g.items.length}</span>
          </h2>
          <ul className={styles.grid}>
            {g.items.map((e) => (
              <Card key={e.slug} e={e} locale={locale} heading="h3" />
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}
