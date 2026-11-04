// 사이트 공통 Organization JSON-LD — 단일 원천 (I3b, 맥3 명세 jsonld_final.json "inhega.co.kr" + 맥7 결정 2026-10-03)
// ko/en/zh/ja 레이아웃이 모두 이 노드 하나를 싣는다(같은 @id = 같은 실체이므로 신원 필드는 로캘마다 달리하지 않는다 —
// hasOfferCatalog 만 로캘별 개수, 0949 추가).
// - @type 은 [Organization, ProfessionalService]. LegalService 금지(법률 서비스 오인) — 보스 msg 4784 'LegalService/ProfessionalService' 중
//   ProfessionalService 를 유지한다(INHEGA-FOCUS-1103 2차).
// - sameAs: 보스 msg 4784(2026-11-03)로 '실재하는 것만' 싣는다 — 네이버 플레이스(유선행정사사무소, 퇴계로 324 3층 주소 일치)와
//   네이버 블로그(yousunnyvisa). 카카오 오픈채팅은 프로필이 아니라 제외. 빈 배열 금지는 그대로.
// - description·knowsAbout 은 로캘별 문장(중점 업무 6개 먼저). 이름·주소·전화·사업자번호 등 신원 필드는 로캘 공통.
// - logo 는 헤더가 실제로 쓰는 로고(/logo.webp 120px)의 원본 /logo.png(512px, 같은 그림). 히어로·OG 사진 금지.
// - hasOfferCatalog 는 서비스 레지스트리(lib/service-directory.ts → 경량판 services-menu)에서 만든다(0949 추가 2026-10-04 —
//   하드코딩 10건이 정본과 어긋나 있었다). 여기엔 분야 그룹별 OfferCatalog(이름·URL·개수)만, 업종 전체 목록은
//   각 로캘 /services 의 OfferCatalog 가 싣는다(components/services/ServiceDirectory).
import { getServiceMenuByGroup, getServiceMenuCount } from './services-menu'
import type { CatalogLocale } from './services-catalog'

export const SITE_URL = 'https://inhega.co.kr'
export const ORG_ID = `${SITE_URL}/#organization`
export const ORG_LOGO_URL = `${SITE_URL}/logo.png`

const organizationBase = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'ProfessionalService'],
  '@id': ORG_ID,
  name: '유선행정사사무소',
  alternateName: ['YouSun Administrative Agency', 'inhega', '인허가'],
  legalName: '유선행정사사무소',
  url: SITE_URL,
  logo: ORG_LOGO_URL,
  // AI-RECO-2 C-1(11-04): image = 실사진 OG(1200×630), availableLanguage = 상담 언어(화면 사무소 카드 '한국어·영어·중국어·일본어' 와 동일)
  image: `${SITE_URL}/og-image.png`,
  availableLanguage: ['ko', 'en', 'zh', 'ja'],
  sameAs: ['https://map.naver.com/p/entry/place/2048530498', 'https://blog.naver.com/yousunnyvisa'],
  knowsLanguage: ['ko', 'en', 'zh', 'ja'],
  taxID: '722-39-01297',
  founder: { '@type': 'Person', name: '정유선' },
  telephone: '+82-2-325-8222',
  email: 'help@inhega.co.kr',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '퇴계로 324, 3층(광희동2가, 성우빌딩)',
    addressLocality: '중구',
    addressRegion: '서울특별시',
    postalCode: '04614',
    addressCountry: 'KR',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      telephone: '+82-2-325-8222',
      areaServed: 'KR',
      email: 'help@inhega.co.kr',
    },
  ],
  areaServed: { '@type': 'Country', name: 'South Korea' },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:30',
    closes: '17:30',
  },
}

// 로캘별 소개문·전문 분야(중점 업무 6개 먼저 — 보스 msg 4781·4784). 업무 범위는 사무소 단위로만 적는다.
const ORG_TEXT: Record<CatalogLocale, { description: string; knowsAbout: string[] }> = {
  ko: {
    description: '비영리사단법인 설립, 정보통신분야 인허가(부가통신사업 신고·기간통신사업 등록), 위치기반서비스사업 신고, 화장품 책임판매업·제조업 등록, 건강기능식품 영업 인허가, 공장등록을 중점으로 처리하는 인허가 전문 행정사사무소.',
    knowsAbout: ['비영리사단법인 설립허가', '재단법인 설립허가', '부가통신사업 신고', '특수한 유형의 부가통신사업 등록', '기간통신사업 등록', '위치기반서비스사업 신고', '개인위치정보사업 등록', '사물위치정보사업 신고', '화장품책임판매업 등록', '화장품제조업 등록', '맞춤형화장품판매업 신고', '기능성화장품 심사·보고', '건강기능식품일반판매업 신고', '건강기능식품유통전문판매업 신고', '건강기능식품전문제조업 허가', '수입식품등 수입·판매업 영업등록', '공장설립등의 승인', '공장등록', '국제물류주선업 등록', '건축물 용도변경 허가', '기업부설연구소 인정', '의약외품 허가·신고', '호스텔업 등록'],
  },
  en: {
    description: 'Licensed administrative agent office in Seoul handling Korean permits and registrations, focusing on nonprofit association incorporation, value-added telecommunications reports, location-based service reports, cosmetics responsible seller and manufacturer registration, health functional food licensing and factory registration.',
    knowsAbout: ['Nonprofit incorporated association establishment permit (비영리사단법인 설립허가)', 'Value-added telecommunications business report (부가통신사업 신고)', 'Special-type value-added telecommunications business registration (특수한 유형의 부가통신사업 등록)', 'Facilities-based telecommunications business registration (기간통신사업 등록)', 'Location-based service business report (위치기반서비스사업 신고)', 'Personal location information business registration (개인위치정보사업 등록)', 'Cosmetics responsible seller registration (화장품책임판매업 등록)', 'Cosmetics manufacturer registration (화장품제조업 등록)', 'Functional cosmetics review or report (기능성화장품 심사·보고)', 'Health functional food sales business report (건강기능식품판매업 신고)', 'Imported food import and sales business registration (수입식품등 수입·판매업 영업등록)', 'Factory establishment approval and factory registration (공장설립등의 승인·공장등록)', 'International freight forwarding registration', 'Building use change permit', 'Corporate R&D center recognition'],
  },
  zh: {
    description: '位于首尔的行政士事务所，办理韩国各类许可与登记，重点业务为非营利社团法人设立、增值电信业务申报、位置服务事业申报、化妆品责任销售业与制造业注册、健康功能食品营业许可及工厂登记。',
    knowsAbout: ['非营利社团法人设立许可（비영리사단법인 설립허가）', '增值电信业务申报（부가통신사업 신고）', '特殊类型增值电信业务登记（특수한 유형의 부가통신사업 등록）', '基础电信业务登记（기간통신사업 등록）', '位置服务事业申报（위치기반서비스사업 신고）', '个人位置信息事业登记（개인위치정보사업 등록）', '化妆品责任销售业注册（화장품책임판매업 등록）', '化妆品制造业注册（화장품제조업 등록）', '功能性化妆品审查·报告（기능성화장품 심사·보고）', '健康功能食品销售业申报（건강기능식품판매업 신고）', '进口食品等进口·销售业营业登记（수입식품등 수입·판매업 영업등록）', '工厂设立批准与工厂登记（공장설립등의 승인·공장등록）', '国际货运代理业登记', '建筑物用途变更许可', '企业附属研究所认定'],
  },
  ja: {
    description: 'ソウルの行政士事務所。韓国の許認可・登録を扱い、非営利社団法人の設立、付加通信事業の申告、位置情報サービス事業の申告、化粧品責任販売業・製造業の登録、健康機能食品の営業許認可、工場登録を重点業務としています。',
    knowsAbout: ['非営利社団法人の設立許可（비영리사단법인 설립허가）', '付加通信事業の申告（부가통신사업 신고）', '特殊な類型の付加通信事業の登録（특수한 유형의 부가통신사업 등록）', '基幹通信事業の登録（기간통신사업 등록）', '位置情報サービス事業の申告（위치기반서비스사업 신고）', '個人位置情報事業の登録（개인위치정보사업 등록）', '化粧品責任販売業の登録（화장품책임판매업 등록）', '化粧品製造業の登録（화장품제조업 등록）', '機能性化粧品の審査・報告（기능성화장품 심사·보고）', '健康機能食品販売業の申告（건강기능식품판매업 신고）', '輸入食品等輸入・販売業の営業登録（수입식품등 수입·판매업 영업등록）', '工場設立承認・工場登録（공장설립등의 승인·공장등록）', '国際物流斡旋業の登録', '建築物の用途変更許可', '企業附属研究所の認定'],
  },
}

const CATALOG_NAME: Record<CatalogLocale, string> = { ko: '인허가 서비스', en: 'Licensing Services', zh: '许可代办服务', ja: '許認可サービス' }
const PREFIX: Record<CatalogLocale, string> = { ko: '', en: '/en', zh: '/zh', ja: '/ja' }

/** 조직 노드 — 신원 필드는 로캘 공통, hasOfferCatalog 만 그 로캘에 실제로 열린 업종(개수 포함)이다. */
export function organizationJsonLd(locale: CatalogLocale) {
  const base = `${SITE_URL}${PREFIX[locale]}/services`
  const groups = getServiceMenuByGroup(locale)
  return {
    ...organizationBase,
    description: ORG_TEXT[locale].description,
    knowsAbout: ORG_TEXT[locale].knowsAbout,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: CATALOG_NAME[locale],
      url: base,
      numberOfItems: getServiceMenuCount(locale),
      itemListElement: groups.map((g) => ({
        '@type': 'OfferCatalog',
        name: g.label,
        url: `${base}#grp-${g.id}`,
        numberOfItems: g.items.length,
      })),
    },
  }
}

// Article/NewsArticle 의 publisher 로고 — 조직 노드와 같은 로고 파일.
export const publisherLogo = { '@type': 'ImageObject', url: ORG_LOGO_URL }
