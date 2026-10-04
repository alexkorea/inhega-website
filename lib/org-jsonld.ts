// 사이트 공통 Organization JSON-LD — 단일 원천 (I3b, 맥3 명세 jsonld_final.json "inhega.co.kr" + 맥7 결정 2026-10-03)
// ko/en/zh/ja 레이아웃이 모두 이 노드 하나를 싣는다(같은 @id = 같은 실체이므로 로캘마다 내용을 달리하지 않는다).
// - @type 은 [Organization, ProfessionalService]. LegalService 금지(법률 서비스 오인).
// - sameAs 필드는 두지 않는다(브랜드 D 단독 사이트 — 빈 배열도 금지).
// - logo 는 헤더가 실제로 쓰는 로고(/logo.webp 120px)의 원본 /logo.png(512px, 같은 그림). 히어로·OG 사진 금지.
// - hasOfferCatalog 는 서비스 레지스트리(lib/service-directory.ts → 경량판 services-menu)에서 만든다(0949 추가 2026-10-04 —
//   하드코딩 10건이 정본과 어긋나 있었다). 여기엔 분야 그룹별 OfferCatalog(이름·URL·개수)만, 업종 전체 목록은
//   각 로캘 /services 의 OfferCatalog 가 싣는다(components/services/ServiceDirectory).
// - knowsAbout 은 맥3 I3b 명세의 전문분야 표기라 그대로 둔다(개수·목록 문구 아님).
import { getServiceMenuByGroup, getServiceMenuCount } from './services-menu'

export const SITE_URL = 'https://inhega.co.kr'
export const ORG_ID = `${SITE_URL}/#organization`
export const ORG_LOGO_URL = `${SITE_URL}/logo.png`

const SERVICE_GROUPS_KO = getServiceMenuByGroup('ko')

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'ProfessionalService'],
  '@id': ORG_ID,
  name: '유선행정사사무소',
  alternateName: 'YouSun Administrative Agency',
  legalName: '유선행정사사무소',
  url: SITE_URL,
  logo: ORG_LOGO_URL,
  description:
    '위치기반서비스사업, 국제물류주선업, 건축물용도변경, 기업부설연구소, 의약품·의약외품 허가 등 인허가 전문 행정사사무소.',
  taxID: '722-39-01297',
  founder: { '@type': 'Person', name: '정유선' },
  telephone: '+82-2-363-2251',
  email: 'teamone1163@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '퇴계로 324, 3층 (성우빌딩)',
    addressLocality: '중구',
    addressRegion: '서울특별시',
    postalCode: '04614',
    addressCountry: 'KR',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      telephone: '+82-2-363-2251',
      areaServed: 'KR',
      email: 'teamone1163@gmail.com',
    },
  ],
  areaServed: { '@type': 'Country', name: 'South Korea' },
  knowsAbout: [
    '위치기반서비스사업 신고',
    '국제물류주선업 등록',
    '건축물 용도변경 허가',
    '기업부설연구소 인정',
    '의약품 제조·수입 허가',
    '의약외품 허가·신고',
    '비영리사단법인 설립',
    '호스텔업 등록',
  ],
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:30',
    closes: '17:30',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: '인허가 서비스',
    url: `${SITE_URL}/services`,
    numberOfItems: getServiceMenuCount('ko'),
    itemListElement: SERVICE_GROUPS_KO.map((g) => ({
      '@type': 'OfferCatalog',
      name: g.label,
      url: `${SITE_URL}/services#grp-${g.id}`,
      numberOfItems: g.items.length,
    })),
  },
}

// Article/NewsArticle 의 publisher 로고 — 조직 노드와 같은 로고 파일.
export const publisherLogo = { '@type': 'ImageObject', url: ORG_LOGO_URL }
