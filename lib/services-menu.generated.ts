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

/** 신규 업종 페이지(lib/industry-pages.ts) — 메뉴 전용. 폼 select 에는 들어가지 않는다. */
export const INDUSTRY_MENU: Record<'ko' | 'en' | 'zh' | 'ja', { slug: string; href: string; shortTitle: string }[]> = {
  "ko": [
    {
      "slug": "restaurant-business-report",
      "href": "/services/restaurant-business-report",
      "shortTitle": "일반음식점 영업신고"
    },
    {
      "slug": "import-food-sales",
      "href": "/services/import-food-sales",
      "shortTitle": "수입식품 수입판매업 영업등록"
    },
    {
      "slug": "travel-agency-registration",
      "href": "/services/travel-agency-registration",
      "shortTitle": "여행업 등록"
    },
    {
      "slug": "liquor-import-sales-license",
      "href": "/services/liquor-import-sales-license",
      "shortTitle": "주류 수입업 면허"
    },
    {
      "slug": "accommodation-business-report",
      "href": "/services/accommodation-business-report",
      "shortTitle": "숙박업 영업신고"
    },
    {
      "slug": "mail-order-sales-report",
      "href": "/services/mail-order-sales-report",
      "shortTitle": "통신판매업 신고"
    },
    {
      "slug": "academy-establishment-registration",
      "href": "/services/academy-establishment-registration",
      "shortTitle": "학원 설립·운영 등록"
    },
    {
      "slug": "kc-radio-certification",
      "href": "/services/kc-radio-certification",
      "shortTitle": "KC인증·전파인증"
    },
    {
      "slug": "construction-business-registration",
      "href": "/services/construction-business-registration",
      "shortTitle": "건설업 등록"
    },
    {
      "slug": "foreign-patient-attraction",
      "href": "/services/foreign-patient-attraction",
      "shortTitle": "외국인환자 유치업 등록"
    },
    {
      "slug": "hazardous-chemical-business-permit",
      "href": "/services/hazardous-chemical-business-permit",
      "shortTitle": "유해화학물질 영업허가"
    },
    {
      "slug": "pet-business-permit-registration",
      "href": "/services/pet-business-permit-registration",
      "shortTitle": "반려동물 영업 허가·등록"
    },
    {
      "slug": "beauty-salon-business-report",
      "href": "/services/beauty-salon-business-report",
      "shortTitle": "미용업 영업신고"
    },
    {
      "slug": "waste-treatment-business-permit",
      "href": "/services/waste-treatment-business-permit",
      "shortTitle": "폐기물처리업 허가"
    },
    {
      "slug": "emission-facility-permit-report",
      "href": "/services/emission-facility-permit-report",
      "shortTitle": "대기·폐수 배출시설 설치 허가·신고"
    },
    {
      "slug": "real-estate-development-business-registration",
      "href": "/services/real-estate-development-business-registration",
      "shortTitle": "부동산개발업 등록"
    },
    {
      "slug": "pharmaceutical-wholesale-license",
      "href": "/services/pharmaceutical-wholesale-license",
      "shortTitle": "의약품 도매업 허가"
    },
    {
      "slug": "car-dealer-rental-business-registration",
      "href": "/services/car-dealer-rental-business-registration",
      "shortTitle": "자동차매매업·자동차대여사업 등록"
    },
    {
      "slug": "long-term-care-institution-designation",
      "href": "/services/long-term-care-institution-designation",
      "shortTitle": "장기요양기관 지정"
    },
    {
      "slug": "development-act-farmland-conversion-permit",
      "href": "/services/development-act-farmland-conversion-permit",
      "shortTitle": "개발행위허가·농지전용허가"
    },
    {
      "slug": "sports-facility-business-report",
      "href": "/services/sports-facility-business-report",
      "shortTitle": "체육시설업 신고"
    },
    {
      "slug": "cooperative-establishment-report",
      "href": "/services/cooperative-establishment-report",
      "shortTitle": "협동조합 설립신고"
    },
    {
      "slug": "entertainment-bar-business-permit",
      "href": "/services/entertainment-bar-business-permit",
      "shortTitle": "유흥주점 영업허가"
    },
    {
      "slug": "campground-business-registration",
      "href": "/services/campground-business-registration",
      "shortTitle": "야영장업 등록"
    },
    {
      "slug": "solar-power-business-permit",
      "href": "/services/solar-power-business-permit",
      "shortTitle": "태양광 발전사업 허가"
    },
    {
      "slug": "marriage-brokerage-business-registration",
      "href": "/services/marriage-brokerage-business-registration",
      "shortTitle": "결혼중개업 신고·등록"
    },
    {
      "slug": "money-lending-business-registration",
      "href": "/services/money-lending-business-registration",
      "shortTitle": "대부업 등록"
    },
    {
      "slug": "entertainment-agency-business-registration",
      "href": "/services/entertainment-agency-business-registration",
      "shortTitle": "대중문화예술기획업 등록"
    },
    {
      "slug": "disinfection-business-report",
      "href": "/services/disinfection-business-report",
      "shortTitle": "소독업 신고"
    },
    {
      "slug": "drone-business-registration",
      "href": "/services/drone-business-registration",
      "shortTitle": "드론(초경량비행장치사용사업) 사업 등록"
    },
    {
      "slug": "software-business-performance-management",
      "href": "/services/software-business-performance-management",
      "shortTitle": "소프트웨어사업자 신고(일반 현황 관리신청)"
    },
    {
      "slug": "residential-lodging-business-report",
      "href": "/services/residential-lodging-business-report",
      "shortTitle": "생활숙박시설 숙박업 신고"
    },
    {
      "slug": "rural-minbak-business-report",
      "href": "/services/rural-minbak-business-report",
      "shortTitle": "농어촌민박업 신고"
    },
    {
      "slug": "foundation-establishment-permit",
      "href": "/services/foundation-establishment-permit",
      "shortTitle": "재단법인 설립 허가"
    },
    {
      "slug": "overseas-remittance-business-registration",
      "href": "/services/overseas-remittance-business-registration",
      "shortTitle": "소액해외송금업 등록"
    },
    {
      "slug": "mainbiz-management-innovation-sme",
      "href": "/services/mainbiz-management-innovation-sme",
      "shortTitle": "메인비즈(경영혁신형 중소기업) 선정"
    }
  ],
  "en": [
    {
      "slug": "restaurant-business-report",
      "href": "/en/services/restaurant-business-report",
      "shortTitle": "General Restaurant Business Report (Restaurant Business License) in Korea"
    },
    {
      "slug": "import-food-sales",
      "href": "/en/services/import-food-sales",
      "shortTitle": "Imported Food Importer / Distributor Business Registration in Korea"
    },
    {
      "slug": "travel-agency-registration",
      "href": "/en/services/travel-agency-registration",
      "shortTitle": "Travel Agency (Travel Business) Registration in Korea"
    },
    {
      "slug": "liquor-import-sales-license",
      "href": "/en/services/liquor-import-sales-license",
      "shortTitle": "Liquor Import License in Korea"
    },
    {
      "slug": "accommodation-business-report",
      "href": "/en/services/accommodation-business-report",
      "shortTitle": "Accommodation Business (Lodging) Report in Korea"
    },
    {
      "slug": "mail-order-sales-report",
      "href": "/en/services/mail-order-sales-report",
      "shortTitle": "Mail-Order Sales Business Report (Online Shop Registration) in Korea"
    },
    {
      "slug": "academy-establishment-registration",
      "href": "/en/services/academy-establishment-registration",
      "shortTitle": "Private Academy (Hagwon) Establishment & Operation Registration in Korea"
    },
    {
      "slug": "kc-radio-certification",
      "href": "/en/services/kc-radio-certification",
      "shortTitle": "KC Certification and Radio Equipment (EMC/Radio) Certification in Korea"
    },
    {
      "slug": "construction-business-registration",
      "href": "/en/services/construction-business-registration",
      "shortTitle": "Construction Business Registration in Korea"
    },
    {
      "slug": "foreign-patient-attraction",
      "href": "/en/services/foreign-patient-attraction",
      "shortTitle": "Foreign Patient Attraction Business Registration in Korea"
    },
    {
      "slug": "overseas-remittance-business-registration",
      "href": "/en/services/overseas-remittance-business-registration",
      "shortTitle": "Small Overseas Remittance Business Registration"
    },
    {
      "slug": "mainbiz-management-innovation-sme",
      "href": "/en/services/mainbiz-management-innovation-sme",
      "shortTitle": "Mainbiz (Management Innovation SME) Selection"
    }
  ],
  "zh": [
    {
      "slug": "restaurant-business-report",
      "href": "/zh/services/restaurant-business-report",
      "shortTitle": "韩国一般餐饮店营业申报"
    },
    {
      "slug": "import-food-sales",
      "href": "/zh/services/import-food-sales",
      "shortTitle": "韩国进口食品进口销售业营业登记"
    },
    {
      "slug": "travel-agency-registration",
      "href": "/zh/services/travel-agency-registration",
      "shortTitle": "韩国旅行社(旅行业)注册"
    },
    {
      "slug": "liquor-import-sales-license",
      "href": "/zh/services/liquor-import-sales-license",
      "shortTitle": "韩国酒类进口业执照"
    },
    {
      "slug": "accommodation-business-report",
      "href": "/zh/services/accommodation-business-report",
      "shortTitle": "韩国住宿业营业申报"
    },
    {
      "slug": "mail-order-sales-report",
      "href": "/zh/services/mail-order-sales-report",
      "shortTitle": "韩国通信销售业申报(网店注册)"
    },
    {
      "slug": "academy-establishment-registration",
      "href": "/zh/services/academy-establishment-registration",
      "shortTitle": "韩国补习班(学院)设立·运营登记"
    },
    {
      "slug": "kc-radio-certification",
      "href": "/zh/services/kc-radio-certification",
      "shortTitle": "韩国KC认证与电波(无线电)认证"
    },
    {
      "slug": "construction-business-registration",
      "href": "/zh/services/construction-business-registration",
      "shortTitle": "韩国建设业注册"
    },
    {
      "slug": "foreign-patient-attraction",
      "href": "/zh/services/foreign-patient-attraction",
      "shortTitle": "韩国外国患者招揽业登记"
    },
    {
      "slug": "overseas-remittance-business-registration",
      "href": "/zh/services/overseas-remittance-business-registration",
      "shortTitle": "小额海外汇款业注册"
    },
    {
      "slug": "mainbiz-management-innovation-sme",
      "href": "/zh/services/mainbiz-management-innovation-sme",
      "shortTitle": "Mainbiz(经营创新型中小企业)遴选"
    }
  ],
  "ja": [
    {
      "slug": "restaurant-business-report",
      "href": "/ja/services/restaurant-business-report",
      "shortTitle": "韓国の一般飲食店 営業届出"
    },
    {
      "slug": "import-food-sales",
      "href": "/ja/services/import-food-sales",
      "shortTitle": "韓国の輸入食品等 輸入・販売業 営業登録"
    },
    {
      "slug": "travel-agency-registration",
      "href": "/ja/services/travel-agency-registration",
      "shortTitle": "韓国の旅行業登録"
    },
    {
      "slug": "liquor-import-sales-license",
      "href": "/ja/services/liquor-import-sales-license",
      "shortTitle": "韓国の酒類輸入業免許"
    },
    {
      "slug": "accommodation-business-report",
      "href": "/ja/services/accommodation-business-report",
      "shortTitle": "韓国の宿泊業 営業届出"
    },
    {
      "slug": "mail-order-sales-report",
      "href": "/ja/services/mail-order-sales-report",
      "shortTitle": "韓国の通信販売業 届出(ネットショップ登録)"
    },
    {
      "slug": "academy-establishment-registration",
      "href": "/ja/services/academy-establishment-registration",
      "shortTitle": "韓国の学院(塾)設立・運営登録"
    },
    {
      "slug": "kc-radio-certification",
      "href": "/ja/services/kc-radio-certification",
      "shortTitle": "韓国のKC認証・電波(無線)認証"
    },
    {
      "slug": "construction-business-registration",
      "href": "/ja/services/construction-business-registration",
      "shortTitle": "韓国の建設業登録"
    },
    {
      "slug": "foreign-patient-attraction",
      "href": "/ja/services/foreign-patient-attraction",
      "shortTitle": "韓国の外国人患者誘致業 登録"
    },
    {
      "slug": "overseas-remittance-business-registration",
      "href": "/ja/services/overseas-remittance-business-registration",
      "shortTitle": "小額海外送金業の登録"
    },
    {
      "slug": "mainbiz-management-innovation-sme",
      "href": "/ja/services/mainbiz-management-innovation-sme",
      "shortTitle": "メインビズ(経営革新型中小企業)選定"
    }
  ]
}

export const SERVICE_MENU_OTHER: Record<'ko' | 'en' | 'zh' | 'ja', string> = {
  "ko": "기타",
  "en": "Other",
  "zh": "其他",
  "ja": "その他"
}
