import Link from 'next/link'
import { FillImage } from '@/components/ui/FillImage'
import { getServiceCatalog, type CatalogLocale } from '@/lib/services-catalog'
import { getServiceDirectory, type DirectoryEntry, type DirectoryGroup } from '@/lib/service-directory'
import { industryPhotoBase, industryPhotoAlt } from '@/lib/service-card-images'
import DirectoryTabs from './DirectoryTabs'
import styles from './ServiceDirectory.module.css'

/**
 * 서비스 전체 목록(기존 24종 + 신규 업종) — 분야별 (0949, 2026-10-04).
 *   mode="cards"    홈: 분야 소제목 + 사진 카드 전부 펼침(INH-RESTORE 2026-10-05 — 탭·접기 금지, 보스 msg 2257~2262)
 *   mode="tabs"     (구 홈) 분야 탭 — 현재 미사용
 *   mode="sections" /services: 분야 바로가기 + 분야 소제목 + 사진 카드 전부 펼침(보스 msg 2266·2267 "이미지가 하나도 없어")
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

/** 카드 사진 — 60업종 전부 lib/service-card-images.ts 하나(INH-PHOTO60). 없으면 빌드 중단(회색 빈 카드 금지).
    기존 24종은 services-data 의 image 와 같은 파일이어야 한다 — 어긋나면 카드·상세가 다른 사진이 된다. */
function cardImageBase(slug: string, catalogImage: Map<string, string>): string {
  const base = industryPhotoBase(slug)
  const cat = catalogImage.get(slug)
  if (cat && cat !== `${base}.webp`) throw new Error(`[ServiceDirectory] ${slug}: services-data image(${cat}) ≠ 업종 사진(${base}.webp)`)
  return base
}

// 실제 카드 폭(ServiceDirectory.module.css): ≤768 2열(좌우 1.25rem·간격 0.75rem), ≤1024 2열, ≤1199 3열, 그 위 4열(콘텐츠 1120px)
const CARD_SIZES = '(max-width: 768px) calc(50vw - 1.7rem), (max-width: 1024px) calc(50vw - 3rem), (max-width: 1199px) calc(33vw - 2.5rem), 270px'

/* 예전 홈(배포 657ffb7a) 사진 카드 그리드 — 사진 + 분야 배지 + 업종명 + 한 줄 설명 + 자세히 보기.
   홈은 분야 소제목 h3·카드 h4, /services 는 h2·h3 + 풋터 바로가기 앵커(#grp-<id>). */
function PhotoGroups({ locale, groups, page }: { locale: CatalogLocale; groups: DirectoryGroup[]; page: 'home' | 'index' }) {
  const catalogImage = new Map(getServiceCatalog(locale).map((s) => [s.slug, s.image]))
  const GroupH = page === 'home' ? 'h3' : 'h2'
  const CardH = page === 'home' ? 'h4' : 'h3'
  return (
    <>
      {groups.map((g) => {
        const gid = page === 'home' ? `home-grp-${g.id}` : `grp-${g.id}`
        return (
          <section key={g.id} id={page === 'index' ? gid : undefined} className={styles.photoGroup} aria-labelledby={`${gid}-t`}>
            <GroupH id={`${gid}-t`} className={styles.photoGroupTitle}>
              {g.label}
              <span className={styles.groupCount}>{g.items.length}</span>
            </GroupH>
            <ul className={styles.photoGrid}>
              {g.items.map((e) => (
                <li key={e.slug}>
                  <Link prefetch={false} href={e.href} className={styles.photoCard}>
                    <div className={styles.photoImage}>
                      {/* 전부 lazy — 홈은 첫 화면 밖, /services 는 LCP 가 히어로 제목(텍스트)이다.
                          sizes = 실제 카드 폭(CARD_SIZES). */}
                      <FillImage
                        base={cardImageBase(e.slug, catalogImage)}
                        widths={[800, 1200]}
                        alt={industryPhotoAlt(e.slug, locale, e.title)}
                        sizes={CARD_SIZES}
                      />
                      <div className={styles.photoOverlay} />
                    </div>
                    <div className={styles.photoBody}>
                      <span className={`badge badge-white ${styles.photoBadge}`}>{g.label}</span>
                      <CardH className={styles.photoTitle}>{e.title}</CardH>
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
        )
      })}
    </>
  )
}

export default function ServiceDirectory({ locale, mode }: { locale: CatalogLocale; mode: 'cards' | 'tabs' | 'sections' }) {
  const groups = getServiceDirectory(locale)
  const cjk = locale === 'zh' || locale === 'ja' ? styles.cjk : ''
  if (mode === 'cards') {
    return (
      <div className={`${styles.directory} ${cjk}`}>
        <PhotoGroups locale={locale} groups={groups} page="home" />
      </div>
    )
  }

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
    <div className={`${styles.directory} ${styles.directoryIndex} ${cjk}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(catalogJsonLd) }} />
      {/* 분야 바로가기 — 모바일은 한 줄 가로 스크롤(줄바꿈하면 13분야가 첫 화면 사진 자리를 먹는다) */}
      <nav aria-label={UI[locale].groups} className={`${styles.tabs} ${styles.jumpNav}`}>
        {groups.map((g) => (
          <a key={g.id} href={`#grp-${g.id}`} className={styles.tab}>
            {g.label}
            <span className={styles.tabCount}>{g.items.length}</span>
          </a>
        ))}
      </nav>
      <PhotoGroups locale={locale} groups={groups} page="index" />
    </div>
  )
}
