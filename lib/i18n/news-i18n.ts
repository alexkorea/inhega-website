/**
 * /news 라벨 번역. **데이터(title_ko·summary_ko)는 한국어 원본 그대로 쓰고
 * 화면 라벨만 번역한다**(맥7 20260922-1845 지시). 번역 본문이 아니므로
 * en/zh/ja 는 canonical 을 ko 로 돌리고 noindex 한다 — 같은 사이트의
 * 다국어 폴백 블로그와 같은 처리(중복 색인 차단).
 */
export type NewsLocale = 'ko' | 'en' | 'zh' | 'ja'

export type NewsStrings = {
  navLabel: string
  badge: string
  h1: string
  heroSub: string
  metaTitle: string
  metaDescription: string
  tabs: { all: string; overseas: string; domestic: string }
  filterCountry: string
  filterProduct: string
  filterImpact: string
  filterAll: string
  searchPlaceholder: string
  /** '{n}' 자리에 건수를 끼워 넣는다. 서버→클라이언트 경계로 함수는 넘길 수 없다. */
  countTemplate: string
  product: string
  stage: string
  deadline: string
  deadlineNone: string
  impact: string
  opportunity: string
  opportunityReason: string
  relevance: string
  source: string
  published: string
  original: string
  cta: string
  expand: string
  collapse: string
  /** 개별 기사 페이지로 가는 카드 버튼. 기사가 붙은 항목에만 쓴다. */
  readMore: string
  more: string
  empty: string
  emptyHint: string
  disclaimerTitle: string
  disclaimerBody: string
  impactValues: Record<string, string>
  opportunityValues: Record<string, string>
  scopeValues: Record<string, string>
}

const ko: NewsStrings = {
  navLabel: '인허가 뉴스',
  badge: '인허가 뉴스',
  h1: '인허가·규제 동향 뉴스',
  heroSub: '국내외 정부·기관이 공개한 법령 제·개정과 규제 통보문을 매일 정리해 올립니다.',
  metaTitle: '인허가 뉴스 | 국내외 규제·법령 동향 — 유선행정사사무소',
  metaDescription:
    '미국 연방관보, WTO ePing 통보문, 일본 e-Gov 의견공모, EU EUR-Lex, 국가법령정보센터가 공개한 인허가·규제 동향을 매일 정리합니다. 품목·국가·영향도별로 확인하고 필요한 인허가는 행정사에게 바로 문의하세요.',
  tabs: { all: '전체', overseas: '해외 규제', domestic: '국내 법령' },
  filterCountry: '국가',
  filterProduct: '품목',
  filterImpact: '영향',
  filterAll: '전체',
  searchPlaceholder: '제목·요약·품목 검색',
  countTemplate: '{n}건',
  product: '품목',
  stage: '단계',
  deadline: '기한',
  deadlineNone: '미정',
  impact: '영향',
  opportunity: '사업 기회',
  opportunityReason: '판단 근거',
  relevance: '관련도',
  source: '출처',
  published: '공개일',
  original: '원문 보기',
  cta: '관련 인허가 상담',
  expand: '요약 더 보기',
  collapse: '접기',
  readMore: '자세히 보기',
  more: '더 보기',
  empty: '업데이트 준비 중',
  emptyHint: '수집된 규제 동향이 아직 없습니다. 인허가 문의는 상담으로 바로 연결됩니다.',
  disclaimerTitle: '자료 안내',
  disclaimerBody:
    '이 페이지는 각국 정부·공공기관이 공개한 공식 자료(관보·통보문·입법예고)를 자동으로 수집해 요약한 것입니다. 요약은 자동 분석 결과이므로 실제 적용 여부는 반드시 원문으로 확인하시기 바랍니다.',
  impactValues: { 상: '상', 중: '중', 하: '하' },
  opportunityValues: { 있음: '있음', 없음: '없음', 검토필요: '검토 필요' },
  scopeValues: { 해외: '해외', 국내: '국내' },
}

const en: NewsStrings = {
  ...ko,
  navLabel: 'Regulatory News',
  badge: 'Regulatory News',
  h1: 'Licensing & Regulatory News',
  heroSub:
    'Daily digest of laws, amendments and regulatory notifications published by government bodies in Korea and abroad. Summaries are in Korean.',
  metaTitle: 'Regulatory News | Korea & Global Licensing Updates — Yuseon Office',
  metaDescription:
    'Daily digest of licensing and regulatory changes from the US Federal Register, WTO ePing, Japan e-Gov, EU EUR-Lex and Korea Law Service. Ask us about permits.',
  tabs: { all: 'All', overseas: 'Overseas regulation', domestic: 'Korean law' },
  filterCountry: 'Country',
  filterProduct: 'Product',
  filterImpact: 'Impact',
  filterAll: 'All',
  searchPlaceholder: 'Search title, summary or product',
  countTemplate: '{n} items',
  product: 'Product',
  stage: 'Stage',
  deadline: 'Deadline',
  deadlineNone: 'Not set',
  impact: 'Impact',
  opportunity: 'Business opportunity',
  opportunityReason: 'Reasoning',
  relevance: 'Relevance',
  source: 'Source',
  published: 'Published',
  original: 'View original',
  cta: 'Ask about this licence',
  expand: 'Details',
  collapse: 'Close',
  readMore: 'Read article',
  more: 'Load more',
  empty: 'Update in preparation',
  emptyHint: 'No regulatory updates have been collected yet. You can still send us a licensing enquiry.',
  disclaimerTitle: 'About this page',
  disclaimerBody:
    'This page automatically collects and summarises official material published by government and public bodies (official gazettes, TBT/SPS notifications, legislative notices). Summaries are machine-generated — always confirm against the original document before acting.',
  impactValues: { 상: 'High', 중: 'Medium', 하: 'Low' },
  opportunityValues: { 있음: 'Yes', 없음: 'No', 검토필요: 'Needs review' },
  scopeValues: { 해외: 'Overseas', 국내: 'Korea' },
}

const zh: NewsStrings = {
  ...ko,
  navLabel: '许可法规新闻',
  badge: '许可法规新闻',
  h1: '许可与法规动态',
  heroSub: '每日整理韩国及各国政府、公共机构公开的法令修订与法规通报。摘要为韩文原文。',
  metaTitle: '许可法规新闻 | 韩国与全球法规动态 — 柳善行政士事务所',
  metaDescription:
    '每日汇总美国联邦公报、WTO ePing 通报、日本 e-Gov 意见征集、欧盟 EUR-Lex 与韩国国家法令信息中心公开的许可与法规动态。可按国家、品类、影响度筛选，并就所需许可直接咨询行政士。',
  tabs: { all: '全部', overseas: '海外法规', domestic: '韩国法令' },
  filterCountry: '国家',
  filterProduct: '品类',
  filterImpact: '影响',
  filterAll: '全部',
  searchPlaceholder: '搜索标题、摘要或品类',
  countTemplate: '{n} 条',
  product: '品类',
  stage: '阶段',
  deadline: '截止日',
  deadlineNone: '未定',
  impact: '影响',
  opportunity: '商机',
  opportunityReason: '判断依据',
  relevance: '相关度',
  source: '来源',
  published: '公开日',
  original: '查看原文',
  cta: '咨询相关许可',
  expand: '查看详情',
  collapse: '收起',
  readMore: '阅读全文',
  more: '加载更多',
  empty: '更新准备中',
  emptyHint: '尚未收集到法规动态。许可事务仍可随时咨询。',
  disclaimerTitle: '资料说明',
  disclaimerBody:
    '本页自动收集并摘要各国政府与公共机构公开的官方资料（公报、通报文、立法预告）。摘要由自动分析生成，实际适用请务必以原文为准。',
  impactValues: { 상: '高', 중: '中', 하: '低' },
  opportunityValues: { 있음: '有', 없음: '无', 검토필요: '需研判' },
  scopeValues: { 해외: '海外', 국내: '韩国' },
}

const ja: NewsStrings = {
  ...ko,
  navLabel: '許認可ニュース',
  badge: '許認可ニュース',
  h1: '許認可・規制の最新動向',
  heroSub: '韓国と各国の政府・公的機関が公開した法令改正や規制通報を毎日まとめています。要約は韓国語です。',
  metaTitle: '許認可ニュース | 韓国・海外の規制動向 — 柳善行政士事務所',
  metaDescription:
    '米国連邦官報、WTO ePing 通報、日本 e-Gov 意見公募、EU EUR-Lex、韓国国家法令情報センターが公開した許認可・規制動向を毎日整理します。国・品目・影響度で絞り込み、必要な許認可は行政士にそのままご相談ください。',
  tabs: { all: 'すべて', overseas: '海外規制', domestic: '韓国法令' },
  filterCountry: '国',
  filterProduct: '品目',
  filterImpact: '影響',
  filterAll: 'すべて',
  searchPlaceholder: 'タイトル・要約・品目を検索',
  countTemplate: '{n}件',
  product: '品目',
  stage: '段階',
  deadline: '期限',
  deadlineNone: '未定',
  impact: '影響',
  opportunity: '事業機会',
  opportunityReason: '判断根拠',
  relevance: '関連度',
  source: '出典',
  published: '公開日',
  original: '原文を見る',
  cta: '関連する許認可を相談',
  expand: '詳細を見る',
  collapse: '閉じる',
  readMore: '記事を読む',
  more: 'もっと見る',
  empty: '更新準備中',
  emptyHint: 'まだ収集された規制動向はありません。許認可のご相談はいつでも承ります。',
  disclaimerTitle: '資料について',
  disclaimerBody:
    '本ページは各国政府・公的機関が公開した公式資料（官報・通報文・立法予告）を自動収集し要約したものです。要約は自動分析の結果であるため、実際の適用は必ず原文でご確認ください。',
  impactValues: { 상: '高', 중: '中', 하: '低' },
  opportunityValues: { 있음: 'あり', 없음: 'なし', 검토필요: '要検討' },
  scopeValues: { 해외: '海外', 국내: '韓国' },
}

const TABLE: Record<NewsLocale, NewsStrings> = { ko, en, zh, ja }

export function getNewsStrings(locale: NewsLocale): NewsStrings {
  return TABLE[locale] ?? ko
}

/** 날짜 라벨. 값이 비어 있거나 형식이 다르면 원문 문자열을 그대로 보여준다. */
export function formatNewsDate(value: string, locale: NewsLocale): string {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return value || ''
  const [y, m, d] = value.split('-')
  if (locale === 'ko') return `${y}.${m}.${d}`
  if (locale === 'ja') return `${y}年${Number(m)}月${Number(d)}日`
  if (locale === 'zh') return `${y}年${Number(m)}月${Number(d)}日`
  return `${y}-${m}-${d}`
}
