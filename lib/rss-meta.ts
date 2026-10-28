// NAVER-RSS(10-23): 피드 경로·제목 — 레이아웃 <head> alternate 링크와 라우트가 같이 쓴다(본문 데이터를 레이아웃에 끌어오지 않도록 분리).
export const RSS_META = {
  ko: { path: '/rss.xml', title: '유선행정사사무소 인허가 블로그', desc: '인허가·등록·신고 실무 안내 — 유선행정사사무소 블로그' },
  en: { path: '/en/rss.xml', title: 'YouSun Administrative Agency Blog', desc: 'Practical guides to business licenses and registrations in Korea' },
  zh: { path: '/zh/rss.xml', title: 'YouSun Administrative Agency 博客', desc: '韩国营业许可与登记实务指南' },
  ja: { path: '/ja/rss.xml', title: 'YouSun Administrative Agency ブログ', desc: '韓国の許認可・登録の実務ガイド' },
} as const
