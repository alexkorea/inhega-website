/**
 * 인허가 뉴스 국가 표기 — 저장은 ISO 3166-1 alpha-2 코드, 화면은 국가명.
 *
 * 수집원마다 국가를 다르게 적어 보낸다. 연방관보·법제처·e-Gov 는 `US`·`KR`·`JP` 코드,
 * WTO ePing 은 회원국 정식 영문명(`United States of America`, `Korea, Republic of`)이다.
 * 그대로 두면 같은 나라가 필터에 두 줄로 나뉘고(QA1020: 일본을 고르면 9건 중 3건만 나옴)
 * 카드 뱃지도 섞인다. 그래서 수신 시점에 코드로 접고(news-data mergeItem),
 * 이미 저장된 옛 값도 읽을 때 한 번 더 접는다(hydrateItem).
 *
 * EU 는 국가가 아니지만 ISO 3166 예약 코드 `EU` 를 쓴다(ePing 이 회원국처럼 통보한다).
 * 표에 없는 이름은 버리지 않고 원문 그대로 둔다 — 빈칸이 되면 필터에서 사라진다.
 */

/** 코드 → 국가명(ko/en/zh/ja). 화면 라벨 전용. */
const NAMES: Record<string, [ko: string, en: string, zh: string, ja: string]> = {
  KR: ['한국', 'South Korea', '韩国', '韓国'],
  US: ['미국', 'United States', '美国', '米国'],
  JP: ['일본', 'Japan', '日本', '日本'],
  CN: ['중국', 'China', '中国', '中国'],
  EU: ['유럽연합(EU)', 'European Union', '欧盟', '欧州連合'],
  CA: ['캐나다', 'Canada', '加拿大', 'カナダ'],
  TW: ['대만', 'Taiwan', '中国台湾', '台湾'],
  HK: ['홍콩', 'Hong Kong', '中国香港', '香港'],
  MO: ['마카오', 'Macao', '中国澳门', 'マカオ'],
  VN: ['베트남', 'Viet Nam', '越南', 'ベトナム'],
  TH: ['태국', 'Thailand', '泰国', 'タイ'],
  ID: ['인도네시아', 'Indonesia', '印度尼西亚', 'インドネシア'],
  MY: ['말레이시아', 'Malaysia', '马来西亚', 'マレーシア'],
  SG: ['싱가포르', 'Singapore', '新加坡', 'シンガポール'],
  PH: ['필리핀', 'Philippines', '菲律宾', 'フィリピン'],
  KH: ['캄보디아', 'Cambodia', '柬埔寨', 'カンボジア'],
  LA: ['라오스', 'Lao PDR', '老挝', 'ラオス'],
  MM: ['미얀마', 'Myanmar', '缅甸', 'ミャンマー'],
  MN: ['몽골', 'Mongolia', '蒙古', 'モンゴル'],
  IN: ['인도', 'India', '印度', 'インド'],
  PK: ['파키스탄', 'Pakistan', '巴基斯坦', 'パキスタン'],
  BD: ['방글라데시', 'Bangladesh', '孟加拉国', 'バングラデシュ'],
  LK: ['스리랑카', 'Sri Lanka', '斯里兰卡', 'スリランカ'],
  NP: ['네팔', 'Nepal', '尼泊尔', 'ネパール'],
  KZ: ['카자흐스탄', 'Kazakhstan', '哈萨克斯坦', 'カザフスタン'],
  AU: ['호주', 'Australia', '澳大利亚', 'オーストラリア'],
  NZ: ['뉴질랜드', 'New Zealand', '新西兰', 'ニュージーランド'],
  GB: ['영국', 'United Kingdom', '英国', '英国'],
  CH: ['스위스', 'Switzerland', '瑞士', 'スイス'],
  NO: ['노르웨이', 'Norway', '挪威', 'ノルウェー'],
  IS: ['아이슬란드', 'Iceland', '冰岛', 'アイスランド'],
  RU: ['러시아', 'Russia', '俄罗斯', 'ロシア'],
  UA: ['우크라이나', 'Ukraine', '乌克兰', 'ウクライナ'],
  TR: ['튀르키예', 'Türkiye', '土耳其', 'トルコ'],
  IL: ['이스라엘', 'Israel', '以色列', 'イスラエル'],
  SA: ['사우디아라비아', 'Saudi Arabia', '沙特阿拉伯', 'サウジアラビア'],
  AE: ['아랍에미리트', 'United Arab Emirates', '阿联酋', 'アラブ首長国連邦'],
  QA: ['카타르', 'Qatar', '卡塔尔', 'カタール'],
  KW: ['쿠웨이트', 'Kuwait', '科威特', 'クウェート'],
  OM: ['오만', 'Oman', '阿曼', 'オマーン'],
  BH: ['바레인', 'Bahrain', '巴林', 'バーレーン'],
  JO: ['요르단', 'Jordan', '约旦', 'ヨルダン'],
  EG: ['이집트', 'Egypt', '埃及', 'エジプト'],
  MA: ['모로코', 'Morocco', '摩洛哥', 'モロッコ'],
  TN: ['튀니지', 'Tunisia', '突尼斯', 'チュニジア'],
  ZA: ['남아프리카공화국', 'South Africa', '南非', '南アフリカ'],
  NG: ['나이지리아', 'Nigeria', '尼日利亚', 'ナイジェリア'],
  KE: ['케냐', 'Kenya', '肯尼亚', 'ケニア'],
  UG: ['우간다', 'Uganda', '乌干达', 'ウガンダ'],
  TZ: ['탄자니아', 'Tanzania', '坦桑尼亚', 'タンザニア'],
  RW: ['르완다', 'Rwanda', '卢旺达', 'ルワンダ'],
  BI: ['부룬디', 'Burundi', '布隆迪', 'ブルンジ'],
  ZM: ['잠비아', 'Zambia', '赞比亚', 'ザンビア'],
  ZW: ['짐바브웨', 'Zimbabwe', '津巴布韦', 'ジンバブエ'],
  MW: ['말라위', 'Malawi', '马拉维', 'マラウイ'],
  MZ: ['모잠비크', 'Mozambique', '莫桑比克', 'モザンビーク'],
  BW: ['보츠와나', 'Botswana', '博茨瓦纳', 'ボツワナ'],
  NA: ['나미비아', 'Namibia', '纳米比亚', 'ナミビア'],
  GH: ['가나', 'Ghana', '加纳', 'ガーナ'],
  CI: ['코트디부아르', "Côte d'Ivoire", '科特迪瓦', 'コートジボワール'],
  SN: ['세네갈', 'Senegal', '塞内加尔', 'セネガル'],
  CM: ['카메룬', 'Cameroon', '喀麦隆', 'カメルーン'],
  MG: ['마다가스카르', 'Madagascar', '马达加斯加', 'マダガスカル'],
  MU: ['모리셔스', 'Mauritius', '毛里求斯', 'モーリシャス'],
  MX: ['멕시코', 'Mexico', '墨西哥', 'メキシコ'],
  BR: ['브라질', 'Brazil', '巴西', 'ブラジル'],
  AR: ['아르헨티나', 'Argentina', '阿根廷', 'アルゼンチン'],
  CL: ['칠레', 'Chile', '智利', 'チリ'],
  PE: ['페루', 'Peru', '秘鲁', 'ペルー'],
  CO: ['콜롬비아', 'Colombia', '哥伦比亚', 'コロンビア'],
  EC: ['에콰도르', 'Ecuador', '厄瓜多尔', 'エクアドル'],
  UY: ['우루과이', 'Uruguay', '乌拉圭', 'ウルグアイ'],
  PY: ['파라과이', 'Paraguay', '巴拉圭', 'パラグアイ'],
  BO: ['볼리비아', 'Bolivia', '玻利维亚', 'ボリビア'],
  CR: ['코스타리카', 'Costa Rica', '哥斯达黎加', 'コスタリカ'],
  PA: ['파나마', 'Panama', '巴拿马', 'パナマ'],
  GT: ['과테말라', 'Guatemala', '危地马拉', 'グアテマラ'],
  HN: ['온두라스', 'Honduras', '洪都拉斯', 'ホンジュラス'],
  SV: ['엘살바도르', 'El Salvador', '萨尔瓦多', 'エルサルバドル'],
  NI: ['니카라과', 'Nicaragua', '尼加拉瓜', 'ニカラグア'],
  DO: ['도미니카공화국', 'Dominican Republic', '多米尼加', 'ドミニカ共和国'],
  JM: ['자메이카', 'Jamaica', '牙买加', 'ジャマイカ'],
  TT: ['트리니다드토바고', 'Trinidad and Tobago', '特立尼达和多巴哥', 'トリニダード・トバゴ'],
}

/**
 * 원문 이름 → 코드. 키는 소문자·공백 정리 후 비교한다.
 * ePing 회원국 정식 명칭(콤마 도치형 포함)과 흔한 약칭을 함께 둔다.
 */
const ALIASES: Record<string, string> = {
  'united states of america': 'US', 'united states': 'US', usa: 'US', 'u.s.': 'US', 'u.s.a.': 'US', 미국: 'US',
  'korea, republic of': 'KR', 'republic of korea': 'KR', 'south korea': 'KR', korea: 'KR', 한국: 'KR', 대한민국: 'KR',
  japan: 'JP', 일본: 'JP',
  china: 'CN', "china, people's republic of": 'CN', "people's republic of china": 'CN', 중국: 'CN',
  'european union': 'EU', 'european communities': 'EU', eu: 'EU', 유럽연합: 'EU',
  'chinese taipei': 'TW', taiwan: 'TW', 'separate customs territory of taiwan, penghu, kinmen and matsu': 'TW',
  'hong kong, china': 'HK', 'hong kong': 'HK', 'macao, china': 'MO', macao: 'MO', macau: 'MO',
  'viet nam': 'VN', vietnam: 'VN', "lao people's democratic republic": 'LA', laos: 'LA',
  'russian federation': 'RU', russia: 'RU', türkiye: 'TR', turkiye: 'TR', turkey: 'TR',
  'united kingdom': 'GB', uk: 'GB', 'great britain': 'GB',
  'kingdom of saudi arabia': 'SA', 'saudi arabia, kingdom of': 'SA',
  'tanzania, united republic of': 'TZ', 'united republic of tanzania': 'TZ',
  "côte d'ivoire": 'CI', "cote d'ivoire": 'CI', 'bolivia, plurinational state of': 'BO',
}
for (const [code, names] of Object.entries(NAMES)) {
  const en = names[1].toLowerCase()
  if (!(en in ALIASES)) ALIASES[en] = code
}

const keyOf = (s: string) => s.normalize('NFC').replace(/\s+/g, ' ').trim().toLowerCase()

/** 수신값 → ISO 코드. 이미 코드면 대문자로, 모르는 이름은 원문 그대로 돌려준다. */
export function normalizeCountry(raw: string): string {
  const s = (raw || '').replace(/\s+/g, ' ').trim()
  if (!s) return ''
  if (/^[A-Za-z]{2}$/.test(s)) return s.toUpperCase()
  return ALIASES[keyOf(s)] ?? s
}

const LOCALE_INDEX = { ko: 0, en: 1, zh: 2, ja: 3 } as const

/** 화면 라벨. 표에 없는 값(원문 유지분)은 그대로 보여 준다. */
export function countryLabel(code: string, locale: 'ko' | 'en' | 'zh' | 'ja' = 'ko'): string {
  const row = NAMES[code]
  return row ? row[LOCALE_INDEX[locale]] : code
}

/** 표에 없는 원문 이름인지 — 수신 응답·감사 스크립트가 보고용으로 쓴다. */
export const isKnownCountry = (code: string) => code in NAMES
