// 이 파일은 scripts/build-services-menu.mjs 가 만든다. 직접 고치지 말 것.
// 정본: lib/services-data.ts + lib/i18n/services-i18n.ts
// 왜 나눠 굽는지는 생성기 머리말 참고 (클라이언트 번들에서 본문 코퍼스를 뺀다).
export interface ServiceMenuItem {
  slug: string
  href: string
  shortTitle: string
  category: string
}

/** 정본 getServiceCatalog() 와 같은 순서. 폼 select 순서가 여기에 달려 있다. */
export const SERVICE_MENU: Record<'ko' | 'en' | 'zh' | 'ja', ServiceMenuItem[]> = {
  "ko": [
    {
      "slug": "logistics",
      "href": "/services/logistics",
      "shortTitle": "국제물류주선업",
      "category": "물류/유통"
    },
    {
      "slug": "currency-exchange",
      "href": "/services/currency-exchange",
      "shortTitle": "환전업 등록",
      "category": "금융"
    },
    {
      "slug": "urban-guesthouse",
      "href": "/services/urban-guesthouse",
      "shortTitle": "외국인도시민박업",
      "category": "숙박/관광"
    },
    {
      "slug": "hostel",
      "href": "/services/hostel",
      "shortTitle": "호스텔업",
      "category": "숙박/관광"
    },
    {
      "slug": "hanok",
      "href": "/services/hanok",
      "shortTitle": "한옥체험업",
      "category": "숙박/관광"
    },
    {
      "slug": "building-usage",
      "href": "/services/building-usage",
      "shortTitle": "건축물 용도변경",
      "category": "건축/부동산"
    },
    {
      "slug": "food-manufacturing",
      "href": "/services/food-manufacturing",
      "shortTitle": "식품제조가공업",
      "category": "식품"
    },
    {
      "slug": "women-enterprise",
      "href": "/services/women-enterprise",
      "shortTitle": "여성기업인증",
      "category": "기업인증"
    },
    {
      "slug": "nonprofit",
      "href": "/services/nonprofit",
      "shortTitle": "비영리사단법인",
      "category": "법인설립"
    },
    {
      "slug": "tobacco",
      "href": "/services/tobacco",
      "shortTitle": "담배수입판매업",
      "category": "유통/판매"
    },
    {
      "slug": "venture-cert",
      "href": "/services/venture-cert",
      "shortTitle": "벤처/이노비즈 인증",
      "category": "기업인증"
    },
    {
      "slug": "haccp",
      "href": "/services/haccp",
      "shortTitle": "HACCP 인증",
      "category": "식품"
    },
    {
      "slug": "cosmetics",
      "href": "/services/cosmetics",
      "shortTitle": "의약외품/화장품 허가",
      "category": "식품/의약"
    },
    {
      "slug": "procurement",
      "href": "/services/procurement",
      "shortTitle": "조달청 나라장터",
      "category": "공공조달"
    },
    {
      "slug": "research-lab",
      "href": "/services/research-lab",
      "shortTitle": "기업부설연구소",
      "category": "기업인증"
    },
    {
      "slug": "ecig",
      "href": "/services/ecig",
      "shortTitle": "전자담배 수입허가",
      "category": "유통/판매"
    },
    {
      "slug": "sports-club",
      "href": "/services/sports-club",
      "shortTitle": "지정스포츠클럽",
      "category": "체육시설업"
    },
    {
      "slug": "location-based-service",
      "href": "/services/location-based-service",
      "shortTitle": "위치기반서비스사업신고",
      "category": "IT·통신"
    },
    {
      "slug": "medical-device",
      "href": "/services/medical-device",
      "shortTitle": "의료기기 수입",
      "category": "식품/의약"
    },
    {
      "slug": "health-food",
      "href": "/services/health-food",
      "shortTitle": "건강기능식품 수입",
      "category": "식품/의약"
    },
    {
      "slug": "factory",
      "href": "/services/factory",
      "shortTitle": "공장등록",
      "category": "건축/부동산"
    },
    {
      "slug": "freight-trucking",
      "href": "/services/freight-trucking",
      "shortTitle": "화물운송업 허가",
      "category": "물류/유통"
    },
    {
      "slug": "rnd-support",
      "href": "/services/rnd-support",
      "shortTitle": "R&D지원사업",
      "category": "기업인증"
    },
    {
      "slug": "functional-cosmetics",
      "href": "/services/functional-cosmetics",
      "shortTitle": "기능성화장품 심사",
      "category": "식품/의약"
    }
  ],
  "en": [
    {
      "slug": "logistics",
      "href": "/en/services/logistics",
      "shortTitle": "Intl. Freight Forwarding",
      "category": "Logistics"
    },
    {
      "slug": "currency-exchange",
      "href": "/en/services/currency-exchange",
      "shortTitle": "Currency Exchange",
      "category": "Finance"
    },
    {
      "slug": "urban-guesthouse",
      "href": "/en/services/urban-guesthouse",
      "shortTitle": "Foreign Tourist Guesthouse",
      "category": "Hospitality"
    },
    {
      "slug": "hostel",
      "href": "/en/services/hostel",
      "shortTitle": "Hostel Business",
      "category": "Hospitality"
    },
    {
      "slug": "hanok",
      "href": "/en/services/hanok",
      "shortTitle": "Hanok Experience",
      "category": "Hospitality"
    },
    {
      "slug": "building-usage",
      "href": "/en/services/building-usage",
      "shortTitle": "Building Use Change",
      "category": "Construction"
    },
    {
      "slug": "food-manufacturing",
      "href": "/en/services/food-manufacturing",
      "shortTitle": "Food Manufacturing",
      "category": "Food"
    },
    {
      "slug": "women-enterprise",
      "href": "/en/services/women-enterprise",
      "shortTitle": "Women-Owned Business",
      "category": "Certification"
    },
    {
      "slug": "nonprofit",
      "href": "/en/services/nonprofit",
      "shortTitle": "Non-Profit Corporation",
      "category": "Legal Entity"
    },
    {
      "slug": "tobacco",
      "href": "/en/services/tobacco",
      "shortTitle": "Tobacco Import & Sales",
      "category": "Retail"
    },
    {
      "slug": "venture-cert",
      "href": "/en/services/venture-cert",
      "shortTitle": "Venture / Innobiz Cert.",
      "category": "Certification"
    },
    {
      "slug": "haccp",
      "href": "/en/services/haccp",
      "shortTitle": "HACCP Certification",
      "category": "Food"
    },
    {
      "slug": "cosmetics",
      "href": "/en/services/cosmetics",
      "shortTitle": "Cosmetics License",
      "category": "Pharmaceutical"
    },
    {
      "slug": "procurement",
      "href": "/en/services/procurement",
      "shortTitle": "Government Procurement",
      "category": "Procurement"
    },
    {
      "slug": "research-lab",
      "href": "/en/services/research-lab",
      "shortTitle": "Corporate Research Lab",
      "category": "R&D"
    },
    {
      "slug": "ecig",
      "href": "/en/services/ecig",
      "shortTitle": "E-Cigarette Import",
      "category": "Retail"
    },
    {
      "slug": "sports-club",
      "href": "/en/services/sports-club",
      "shortTitle": "Sports Club Registration",
      "category": "Sports"
    },
    {
      "slug": "location-based-service",
      "href": "/en/services/location-based-service",
      "shortTitle": "Location-Based Service",
      "category": "IT/Telecom"
    },
    {
      "slug": "medical-device",
      "href": "/en/services/medical-device",
      "shortTitle": "Medical Device Import",
      "category": "Pharmaceutical"
    },
    {
      "slug": "health-food",
      "href": "/en/services/health-food",
      "shortTitle": "Health Food Import",
      "category": "Food"
    },
    {
      "slug": "factory",
      "href": "/en/services/factory",
      "shortTitle": "Factory Registration",
      "category": "Construction"
    },
    {
      "slug": "freight-trucking",
      "href": "/en/services/freight-trucking",
      "shortTitle": "Trucking Licence",
      "category": "Logistics"
    },
    {
      "slug": "rnd-support",
      "href": "/en/services/rnd-support",
      "shortTitle": "R&D Programme",
      "category": "R&D"
    },
    {
      "slug": "functional-cosmetics",
      "href": "/en/services/functional-cosmetics",
      "shortTitle": "Functional Cosmetics",
      "category": "Pharmaceutical"
    }
  ],
  "zh": [
    {
      "slug": "logistics",
      "href": "/zh/services/logistics",
      "shortTitle": "国际货运代理",
      "category": "物流/流通"
    },
    {
      "slug": "currency-exchange",
      "href": "/zh/services/currency-exchange",
      "shortTitle": "外汇兑换业",
      "category": "金融"
    },
    {
      "slug": "urban-guesthouse",
      "href": "/zh/services/urban-guesthouse",
      "shortTitle": "外国人城市民宿",
      "category": "住宿/旅游"
    },
    {
      "slug": "hostel",
      "href": "/zh/services/hostel",
      "shortTitle": "青年旅社",
      "category": "住宿/旅游"
    },
    {
      "slug": "hanok",
      "href": "/zh/services/hanok",
      "shortTitle": "韩屋体验业",
      "category": "住宿/旅游"
    },
    {
      "slug": "building-usage",
      "href": "/zh/services/building-usage",
      "shortTitle": "建筑物用途变更",
      "category": "建筑"
    },
    {
      "slug": "food-manufacturing",
      "href": "/zh/services/food-manufacturing",
      "shortTitle": "食品制造加工业",
      "category": "食品"
    },
    {
      "slug": "women-enterprise",
      "href": "/zh/services/women-enterprise",
      "shortTitle": "女性企业认证",
      "category": "企业认证"
    },
    {
      "slug": "nonprofit",
      "href": "/zh/services/nonprofit",
      "shortTitle": "非营利社团法人",
      "category": "法人/团体"
    },
    {
      "slug": "tobacco",
      "href": "/zh/services/tobacco",
      "shortTitle": "烟草进口销售",
      "category": "流通"
    },
    {
      "slug": "venture-cert",
      "href": "/zh/services/venture-cert",
      "shortTitle": "风险/创新企业认证",
      "category": "企业认证"
    },
    {
      "slug": "haccp",
      "href": "/zh/services/haccp",
      "shortTitle": "HACCP认证",
      "category": "食品"
    },
    {
      "slug": "cosmetics",
      "href": "/zh/services/cosmetics",
      "shortTitle": "化妆品/准药品许可",
      "category": "医药"
    },
    {
      "slug": "procurement",
      "href": "/zh/services/procurement",
      "shortTitle": "政府采购",
      "category": "采购"
    },
    {
      "slug": "research-lab",
      "href": "/zh/services/research-lab",
      "shortTitle": "企业附属研究所",
      "category": "研发"
    },
    {
      "slug": "ecig",
      "href": "/zh/services/ecig",
      "shortTitle": "电子烟进口",
      "category": "流通"
    },
    {
      "slug": "sports-club",
      "href": "/zh/services/sports-club",
      "shortTitle": "体育俱乐部",
      "category": "体育/休闲"
    },
    {
      "slug": "location-based-service",
      "href": "/zh/services/location-based-service",
      "shortTitle": "位置信息服务",
      "category": "信息通信"
    },
    {
      "slug": "medical-device",
      "href": "/zh/services/medical-device",
      "shortTitle": "医疗器械进口",
      "category": "医药"
    },
    {
      "slug": "health-food",
      "href": "/zh/services/health-food",
      "shortTitle": "健康功能食品进口",
      "category": "食品"
    },
    {
      "slug": "factory",
      "href": "/zh/services/factory",
      "shortTitle": "工厂登记",
      "category": "建筑"
    },
    {
      "slug": "freight-trucking",
      "href": "/zh/services/freight-trucking",
      "shortTitle": "货运事业许可",
      "category": "物流/流通"
    },
    {
      "slug": "rnd-support",
      "href": "/zh/services/rnd-support",
      "shortTitle": "研发支援事业",
      "category": "研发"
    },
    {
      "slug": "functional-cosmetics",
      "href": "/zh/services/functional-cosmetics",
      "shortTitle": "功能性化妆品审查",
      "category": "医药"
    }
  ],
  "ja": [
    {
      "slug": "logistics",
      "href": "/ja/services/logistics",
      "shortTitle": "国際貨物運送取扱業",
      "category": "物流/流通"
    },
    {
      "slug": "currency-exchange",
      "href": "/ja/services/currency-exchange",
      "shortTitle": "外貨両替業",
      "category": "金融"
    },
    {
      "slug": "urban-guesthouse",
      "href": "/ja/services/urban-guesthouse",
      "shortTitle": "外国人都市民泊業",
      "category": "宿泊/観光"
    },
    {
      "slug": "hostel",
      "href": "/ja/services/hostel",
      "shortTitle": "ホステル業",
      "category": "宿泊/観光"
    },
    {
      "slug": "hanok",
      "href": "/ja/services/hanok",
      "shortTitle": "韓屋体験業",
      "category": "宿泊/観光"
    },
    {
      "slug": "building-usage",
      "href": "/ja/services/building-usage",
      "shortTitle": "建物用途変更",
      "category": "建設/建築"
    },
    {
      "slug": "food-manufacturing",
      "href": "/ja/services/food-manufacturing",
      "shortTitle": "食品製造加工業",
      "category": "食品"
    },
    {
      "slug": "women-enterprise",
      "href": "/ja/services/women-enterprise",
      "shortTitle": "女性企業認証",
      "category": "企業認証"
    },
    {
      "slug": "nonprofit",
      "href": "/ja/services/nonprofit",
      "shortTitle": "非営利社団法人",
      "category": "法人/団体"
    },
    {
      "slug": "tobacco",
      "href": "/ja/services/tobacco",
      "shortTitle": "たばこ輸入販売業",
      "category": "流通"
    },
    {
      "slug": "venture-cert",
      "href": "/ja/services/venture-cert",
      "shortTitle": "ベンチャー/イノビズ認証",
      "category": "企業認証"
    },
    {
      "slug": "haccp",
      "href": "/ja/services/haccp",
      "shortTitle": "HACCP認証",
      "category": "食品"
    },
    {
      "slug": "cosmetics",
      "href": "/ja/services/cosmetics",
      "shortTitle": "化粧品・医薬部外品許可",
      "category": "医薬品"
    },
    {
      "slug": "procurement",
      "href": "/ja/services/procurement",
      "shortTitle": "政府調達",
      "category": "調達"
    },
    {
      "slug": "research-lab",
      "href": "/ja/services/research-lab",
      "shortTitle": "企業付設研究所",
      "category": "研究開発"
    },
    {
      "slug": "ecig",
      "href": "/ja/services/ecig",
      "shortTitle": "電子タバコ輸入",
      "category": "流通"
    },
    {
      "slug": "sports-club",
      "href": "/ja/services/sports-club",
      "shortTitle": "指定スポーツクラブ",
      "category": "スポーツ/レジャー"
    },
    {
      "slug": "location-based-service",
      "href": "/ja/services/location-based-service",
      "shortTitle": "位置情報サービス業",
      "category": "IT/通信"
    },
    {
      "slug": "medical-device",
      "href": "/ja/services/medical-device",
      "shortTitle": "医療機器輸入",
      "category": "医薬品"
    },
    {
      "slug": "health-food",
      "href": "/ja/services/health-food",
      "shortTitle": "健康機能食品輸入",
      "category": "食品"
    },
    {
      "slug": "factory",
      "href": "/ja/services/factory",
      "shortTitle": "工場登録",
      "category": "建設/建築"
    },
    {
      "slug": "freight-trucking",
      "href": "/ja/services/freight-trucking",
      "shortTitle": "貨物運送業許可",
      "category": "物流/流通"
    },
    {
      "slug": "rnd-support",
      "href": "/ja/services/rnd-support",
      "shortTitle": "R&D支援事業",
      "category": "研究開発"
    },
    {
      "slug": "functional-cosmetics",
      "href": "/ja/services/functional-cosmetics",
      "shortTitle": "機能性化粧品審査",
      "category": "医薬品"
    }
  ]
}

export const SERVICE_MENU_OTHER: Record<'ko' | 'en' | 'zh' | 'ja', string> = {
  "ko": "기타",
  "en": "Other",
  "zh": "其他",
  "ja": "その他"
}
