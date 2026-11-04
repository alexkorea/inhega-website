/**
 * 처리 업무 전체 목록(AI-RECO-2 E-2) — 관할 기관 원고(요약 항목에 제출처·등록처 등이 없는 32개 항목).
 * 글자는 각 업무 페이지 본문(핵심 답변·한눈에 보기·상황 질문·services-data 본문)에 이미 적힌 기관 표기에서 옮긴 것이다 — 새 사실을 넣지 않는다.
 * 업종 페이지 요약에 제출처·등록처·등록기관·허가기관·선정기관 항목이 있으면 lib/service-list.ts 가 그 항목(언어별 같은 위치)을 그대로 쓴다.
 * 조문 번호·출처·확인일은 싣지 않는다(svc-nocite·nocite 게이트).
 */
export type AgencyLocale = 'ko' | 'en' | 'zh' | 'ja'
export const SERVICE_AGENCY: Record<string, Record<AgencyLocale, string>> = {
  "food-manufacturing": { ko: "영업소 관할 시장·군수·구청장(주류 제조는 식품의약품안전처장)", en: "Head of the si/gun/gu with jurisdiction over the premises (liquor manufacturing: Minister of Food and Drug Safety)", zh: "营业场所所在地的市长、郡守、区厅长(酒类制造为食品医药品安全处处长)", ja: "営業所を管轄する市長・郡守・区庁長(酒類製造は食品医薬品安全処長)" },
  "haccp": { ko: "한국식품안전관리인증원 등 인증기관", en: "Certification bodies such as the Korea Agency of HACCP Accreditation and Services", zh: "韩国食品安全管理认证院等认证机构", ja: "韓国食品安全管理認証院などの認証機関" },
  "health-food": { ko: "시·군·구청(판매업 신고), 지방식품의약품안전청(제조업 허가·수입판매업 등록)", en: "Si/gun/gu office (sales business report); Regional Office of Food and Drug Safety (manufacturing permit, import-sales registration)", zh: "市·郡·区厅(销售业申报)、地方食品医药品安全厅(制造业许可、进口销售业登记)", ja: "市・郡・区庁(販売業申告)、地方食品医薬品安全庁(製造業許可・輸入販売業登録)" },
  "import-food-sales": { ko: "지방식품의약품안전청장", en: "Head of the Regional Office of Food and Drug Safety", zh: "地方食品医药品安全厅厅长", ja: "地方食品医薬品安全庁長" },
  "urban-guesthouse": { ko: "주택 소재지 시장·군수·구청장", en: "Head of the si/gun/gu where the home is located", zh: "住宅所在地的市长、郡守、区厅长", ja: "住宅所在地の市長・郡守・区庁長" },
  "hostel": { ko: "시장·군수·구청장", en: "Head of the si/gun/gu", zh: "市长、郡守、区厅长", ja: "市長・郡守・区庁長" },
  "hanok": { ko: "시장·군수·구청장", en: "Head of the si/gun/gu", zh: "市长、郡守、区厅长", ja: "市長・郡守・区庁長" },
  "accommodation-business-report": { ko: "영업소 관할 시장·군수·구청장", en: "Head of the si/gun/gu with jurisdiction over the premises", zh: "营业场所所在地的市长、郡守、区厅长", ja: "営業所を管轄する市長・郡守・区庁長" },
  "building-usage": { ko: "특별자치시장·특별자치도지사 또는 시장·군수·구청장", en: "Mayor of a special self-governing city, Governor of a special self-governing province, or head of the si/gun/gu", zh: "特别自治市长、特别自治道知事或市长、郡守、区厅长", ja: "特別自治市長・特別自治道知事または市長・郡守・区庁長" },
  "factory": { ko: "시장·군수·구청장(산업단지는 관리기관)", en: "Head of the si/gun/gu (industrial complexes: the management agency)", zh: "市长、郡守、区厅长(产业园区为管理机构)", ja: "市長・郡守・区庁長(産業団地は管理機関)" },
  "construction-business-registration": { ko: "국토교통부장관(신청서는 시·도지사 또는 등록업무수탁기관에 제출)", en: "Minister of Land, Infrastructure and Transport (applications filed with the city/province governor or the entrusted registration agency)", zh: "国土交通部长官(申请书提交市·道知事或受托登记机构)", ja: "国土交通部長官(申請書は市・道知事または登録業務受託機関に提出)" },
  "development-act-farmland-conversion-permit": { ko: "시장·군수 등(개발행위허가), 농지전용신고는 시장·군수·구청장", en: "Head of the si/gun etc. (development activity permit); farmland conversion report: head of the si/gun/gu", zh: "市长、郡守等(开发行为许可),农地转用申报为市长、郡守、区厅长", ja: "市長・郡守など(開発行為許可)、農地転用申告は市長・郡守・区庁長" },
  "emission-facility-permit-report": { ko: "시·도지사(대기 배출시설), 폐수배출시설은 물환경보전법에 따라 별도 허가·신고", en: "City/province governor (air emission facilities); wastewater discharge facilities require a separate permit or report under the Water Environment Conservation Act", zh: "市·道知事(大气排放设施),废水排放设施依《水环境保全法》另行许可·申报", ja: "市・道知事(大気排出施設)、廃水排出施設は水環境保全法により別途許可・申告" },
  "cosmetics": { ko: "화장품책임판매업소 소재지 관할 지방식품의약품안전청", en: "Regional Office of Food and Drug Safety with jurisdiction over the responsible-seller premises", zh: "化妆品责任销售业所所在地管辖的地方食品医药品安全厅", ja: "化粧品責任販売業所の所在地を管轄する地方食品医薬品安全庁" },
  "functional-cosmetics": { ko: "식품의약품안전평가원장", en: "President of the National Institute of Food and Drug Safety Evaluation", zh: "食品医药品安全评价院院长", ja: "食品医薬品安全評価院長" },
  "medical-device": { ko: "지방식품의약품안전청장(수입업허가), 품목허가는 식약처장·인증·신고는 한국의료기기안전정보원장", en: "Head of the Regional Office of Food and Drug Safety (import business permit); product approval: Minister of Food and Drug Safety; certification and notification: President of the National Institute of Medical Device Safety Information", zh: "地方食品医药品安全厅厅长(进口业许可),品目许可为食药处处长、认证·申报为韩国医疗器械安全信息院院长", ja: "地方食品医薬品安全庁長(輸入業許可)、品目許可は食薬処長、認証・申告は韓国医療機器安全情報院長" },
  "currency-exchange": { ko: "관세청장(영업소 관할 세관 접수)", en: "Commissioner of the Korea Customs Service (filed at the customs office with jurisdiction over the premises)", zh: "关税厅厅长(由营业场所管辖海关受理)", ja: "関税庁長(営業所を管轄する税関で受付)" },
  "women-enterprise": { ko: "지방중소벤처기업청장(접수·조사는 한국여성경제인협회 위탁)", en: "Head of the Regional Office of SMEs and Startups (intake and review entrusted to the Korean Women Entrepreneurs Association)", zh: "地方中小风险企业厅厅长(受理·调查委托韩国女性经济人协会)", ja: "地方中小ベンチャー企業庁長(受付・調査は韓国女性経済人協会に委託)" },
  "venture-cert": { ko: "벤처기업확인기관의 장(벤처기업 확인), 중소벤처기업부장관(이노비즈 선정)", en: "Head of the venture business confirmation body (venture confirmation); Minister of SMEs and Startups (Inno-Biz selection)", zh: "风险企业确认机构负责人(风险企业确认)、中小风险企业部长官(Inno-Biz选定)", ja: "ベンチャー企業確認機関の長(ベンチャー企業確認)、中小ベンチャー企業部長官(イノビズ選定)" },
  "research-lab": { ko: "한국산업기술진흥협회", en: "Korea Industrial Technology Association (KOITA)", zh: "韩国产业技术振兴协会", ja: "韓国産業技術振興協会" },
  "rnd-support": { ko: "사업을 공고한 중앙행정기관·전문기관", en: "The central government agency and specialized agency that announced the program", zh: "发布公告的中央行政机关·专门机构", ja: "事業を公告した中央行政機関・専門機関" },
  "procurement": { ko: "국가종합전자조달시스템(나라장터)", en: "Korea ON-line E-Procurement System (KONEPS)", zh: "国家综合电子采购系统(Narajangteo)", ja: "国家総合電子調達システム(ナラジャント)" },
  "kc-radio-certification": { ko: "안전인증기관(KC 안전인증), 과학기술정보통신부장관(전파 적합인증)", en: "Safety certification bodies (KC safety certification); Minister of Science and ICT (radio conformity certification)", zh: "安全认证机构(KC安全认证)、科学技术信息通信部长官(电波适合认证)", ja: "安全認証機関(KC安全認証)、科学技術情報通信部長官(電波適合認証)" },
  "nonprofit": { ko: "목적 사업을 맡은 주무관청", en: "The competent authority in charge of the intended purpose", zh: "主管目的事业的主管机关", ja: "目的事業を所管する主務官庁" },
  "sports-club": { ko: "시·군·구(스포츠클럽 등록), 문화체육관광부장관(지정)", en: "Si/gun/gu (sports club registration); Minister of Culture, Sports and Tourism (designation)", zh: "市·郡·区(体育俱乐部登记)、文化体育观光部长官(指定)", ja: "市・郡・区(スポーツクラブ登録)、文化体育観光部長官(指定)" },
  "logistics": { ko: "주사무소 관할 시·도지사", en: "City/province governor with jurisdiction over the head office", zh: "主事务所管辖的市·道知事", ja: "主たる事務所を管轄する市・道知事" },
  "freight-trucking": { ko: "주사무소 소재지 관할 시·도지사", en: "City/province governor with jurisdiction over the head office", zh: "主事务所所在地管辖的市·道知事", ja: "主たる事務所の所在地を管轄する市・道知事" },
  "car-dealer-rental-business-registration": { ko: "사업장 소재지 시장·군수·구청장(자동차매매업), 시·도지사(자동차대여사업)", en: "Head of the si/gun/gu where the business is located (used car dealing); city/province governor (car rental)", zh: "营业场所所在地的市长、郡守、区厅长(汽车买卖业)、市·道知事(汽车租赁业)", ja: "事業場所在地の市長・郡守・区庁長(自動車売買業)、市・道知事(自動車貸渡事業)" },
  "tobacco": { ko: "본점 또는 주된 사무소 소재지 관할 시·도지사", en: "City/province governor with jurisdiction over the head office or main office", zh: "总店或主事务所所在地管辖的市·道知事", ja: "本店または主たる事務所の所在地を管轄する市・道知事" },
  "ecig": { ko: "본점 또는 주된 사무소 소재지 관할 시·도지사", en: "City/province governor with jurisdiction over the head office or main office", zh: "总店或主事务所所在地管辖的市·道知事", ja: "本店または主たる事務所の所在地を管轄する市・道知事" },
  "telecom-business": { ko: "과학기술정보통신부(중앙전파관리소)", en: "Ministry of Science and ICT (Central Radio Management Service)", zh: "科学技术信息通信部(中央电波管理所)", ja: "科学技術情報通信部(中央電波管理所)" },
  "location-based-service": { ko: "방송미디어통신위원회", en: "Korea Media and Communications Commission (방송미디어통신위원회)", zh: "广播媒体通信委员会", ja: "放送メディア通信委員会" },
}
