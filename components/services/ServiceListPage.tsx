import Link from 'next/link'
import type { Metadata } from 'next'
import BreadcrumbLd from '@/components/seo/BreadcrumbLd'
import { getServiceList, getServiceListCount } from '@/lib/service-list'
import { ORG_ID } from '@/lib/org-jsonld'
import type { AgencyLocale } from '@/lib/service-list-agency'
import styles from './ServiceListPage.module.css'

/**
 * 처리 업무 전체 목록(AI-RECO-2 E-2) — /services/all, /en|zh|ja/services/all.
 * 정식 명칭·관할 기관·대상·관련 페이지 링크. 사무소 소개·상담 문의와 상호 링크(풋터·소개·문의 쪽에서 이 쪽으로).
 * 가격·조문 번호·확인일 표기 없음.
 */
const BASE = 'https://inhega.co.kr'
const PREFIX: Record<AgencyLocale, string> = { ko: '', en: '/en', zh: '/zh', ja: '/ja' }

export const SERVICE_LIST_UI: Record<AgencyLocale, {
  title: (n: number) => string; h1: string; lead: (n: number) => string; desc: (n: number) => string
  colName: string; colAgency: string; colTarget: string; colLink: string; view: string
  about: string; contact: string; footer: string; crumbHome: string; inLanguage: string
}> = {
  ko: {
    title: (n) => `처리 업무 전체 목록 ${n}종 — 인허가 업무·관할 기관 | 유선행정사사무소`,
    h1: '처리 업무 전체 목록',
    lead: (n) => `유선행정사사무소가 처리하는 인허가 업무 ${n}종을 분야별로 정리했습니다. 업무마다 정식 명칭, 신청서를 내는 관할 기관, 대상과 자세한 안내 페이지를 확인할 수 있습니다.`,
    desc: (n) => `유선행정사사무소가 처리하는 인허가 업무 ${n}종의 정식 명칭·관할 기관·대상을 분야별 표로 정리했습니다. 업무마다 자세한 안내 페이지로 이동할 수 있습니다.`,
    colName: '업무(정식 명칭)', colAgency: '관할 기관', colTarget: '대상', colLink: '관련 페이지', view: '안내 보기',
    about: '사무소 소개', contact: '상담 문의', footer: '처리 업무 전체 목록', crumbHome: '홈', inLanguage: 'ko-KR',
  },
  en: {
    title: (n) => `Full List of Services (${n}) — Korean Licensing | YouSun Administrative Agency`,
    h1: 'Full list of services we handle',
    lead: (n) => `The ${n} Korean licensing and permit services handled by YouSun Administrative Agency, grouped by field. For each service you can see the official name, the authority you file with, who it applies to and a link to the detailed guide.`,
    desc: (n) => `All ${n} Korean licensing services handled by YouSun Administrative Agency in one table: official name, competent authority and who it applies to, with links to each guide.`,
    colName: 'Service (official name)', colAgency: 'Competent authority', colTarget: 'Who it applies to', colLink: 'Guide', view: 'View guide',
    about: 'About us', contact: 'Contact', footer: 'Full list of services', crumbHome: 'Home', inLanguage: 'en',
  },
  zh: {
    title: (n) => `业务一览(${n}项)— 韩国许可业务与受理机关 | YouSun Administrative Agency`,
    h1: '办理业务一览',
    lead: (n) => `按领域整理了 YouSun Administrative Agency 办理的 ${n} 项韩国许可业务。每项业务都列出正式名称、受理申请的主管机关、适用对象，并可进入详细说明页面。`,
    desc: (n) => `YouSun Administrative Agency 办理的 ${n} 项韩国许可业务一览:按领域列出正式名称、主管受理机关和适用对象,并附各业务详细说明页面链接,方便查找。`,
    colName: '业务(正式名称)', colAgency: '主管机关', colTarget: '适用对象', colLink: '相关页面', view: '查看说明',
    about: '事务所介绍', contact: '咨询', footer: '办理业务一览', crumbHome: '首页', inLanguage: 'zh-CN',
  },
  ja: {
    title: (n) => `取扱業務一覧(${n}件)— 韓国の許認可と管轄機関 | YouSun Administrative Agency`,
    h1: '取扱業務一覧',
    lead: (n) => `YouSun Administrative Agency が取り扱う韓国の許認可業務 ${n} 件を分野別にまとめました。業務ごとに正式名称、申請先の管轄機関、対象と詳しい案内ページを確認できます。`,
    desc: (n) => `YouSun Administrative Agency が取り扱う韓国の許認可業務 ${n} 件の正式名称・管轄機関・対象を分野別の表にまとめ、各業務の詳しい案内ページへのリンクも掲載しています。`,
    colName: '業務(正式名称)', colAgency: '管轄機関', colTarget: '対象', colLink: '関連ページ', view: '案内を見る',
    about: '事務所紹介', contact: 'お問い合わせ', footer: '取扱業務一覧', crumbHome: 'ホーム', inLanguage: 'ja-JP',
  },
}

export const SERVICE_LIST_PATH = (l: AgencyLocale) => `${PREFIX[l]}/services/all`

export function serviceListMetadata(locale: AgencyLocale): Metadata {
  const n = getServiceListCount(locale)
  const ui = SERVICE_LIST_UI[locale]
  const url = `${BASE}${SERVICE_LIST_PATH(locale)}`
  return {
    title: { absolute: ui.title(n) },
    description: ui.desc(n),
    alternates: {
      canonical: url,
      languages: {
        ko: `${BASE}/services/all`,
        en: `${BASE}/en/services/all`,
        zh: `${BASE}/zh/services/all`,
        ja: `${BASE}/ja/services/all`,
        'x-default': `${BASE}/services/all`,
      },
    },
    openGraph: { title: ui.title(n), description: ui.desc(n), url, images: [{ url: '/images/hero-seoul.png', width: 1200, height: 630 }], type: 'website' },
    twitter: { card: 'summary_large_image', title: ui.title(n), images: ['/images/hero-seoul.png'] },
  }
}

export default function ServiceListPage({ locale }: { locale: AgencyLocale }) {
  const groups = getServiceList(locale)
  const n = groups.reduce((s, g) => s + g.items.length, 0)
  const ui = SERVICE_LIST_UI[locale]
  const p = PREFIX[locale]
  const url = `${BASE}${SERVICE_LIST_PATH(locale)}`
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${url}#webpage`,
    url,
    name: ui.h1,
    inLanguage: ui.inLanguage,
    publisher: { '@id': ORG_ID },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: n,
      itemListElement: groups.flatMap((g) => g.items).map((it, i) => ({
        '@type': 'ListItem', position: i + 1, name: it.name, url: `${BASE}${it.href}`,
      })),
    },
  }
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <BreadcrumbLd items={[{ name: ui.crumbHome, path: p || '/' }, { name: ui.h1, path: SERVICE_LIST_PATH(locale) }]} />
      <div style={{ paddingTop: '72px' }}>
        <section style={{ background: 'var(--navy)', padding: '1.75rem 0 1.5rem' }}>
          <div className="container">
            <h1 className="text-display" style={{ color: 'white', marginTop: '0.5rem' }}>{ui.h1}</h1>
            <p className="text-body-lg" style={{ color: 'rgba(255,255,255,0.75)', marginTop: '1rem', maxWidth: '72ch' }}>{ui.lead(n)}</p>
            <p className={styles.heroLinks}>
              <Link prefetch={false} href={`${p}/about`}>{ui.about}</Link>
              <Link prefetch={false} href={`${p}/contact`}>{ui.contact}</Link>
            </p>
          </div>
        </section>
        <section className="bg-cream" style={{ padding: '2rem 0 var(--section-py-sm)' }}>
          <div className="container">
            <nav className={styles.jump} aria-label={ui.h1}>
              {groups.map((g) => <a key={g.id} href={`#list-${g.id}`}>{g.label}</a>)}
            </nav>
            {groups.map((g) => (
              <section key={g.id} id={`list-${g.id}`} className={styles.group}>
                <h2 className={styles.groupHeading}>{g.label}</h2>
                <div className={styles.tableWrap}>
                  <table className={styles.table}>
                    <thead>
                      <tr><th scope="col">{ui.colName}</th><th scope="col">{ui.colAgency}</th><th scope="col">{ui.colTarget}</th><th scope="col">{ui.colLink}</th></tr>
                    </thead>
                    <tbody>
                      {g.items.map((it) => (
                        <tr key={it.slug}>
                          <th scope="row" data-label={ui.colName}>
                            {it.name}
                            {it.nameKo && <span className={styles.ko} lang="ko">{it.nameKo}</span>}
                          </th>
                          <td data-label={ui.colAgency}>{it.agency}</td>
                          <td data-label={ui.colTarget}>{it.target}</td>
                          <td data-label={ui.colLink}><Link prefetch={false} href={it.href}>{ui.view}</Link></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            ))}
            <p className={styles.footLinks}>
              <Link prefetch={false} href={`${p}/about`}>{ui.about}</Link>
              <Link prefetch={false} href={`${p}/contact`}>{ui.contact}</Link>
            </p>
          </div>
        </section>
      </div>
    </>
  )
}
