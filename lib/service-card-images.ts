/**
 * ────────────────────────────────────────────────────────────────────────────
 * 업종별 사진 정본 — 홈 사진 카드·/services 사진 카드·업종 상세 히어로·og:image·JSON-LD image·
 * 사이트맵 image:image 가 전부 이 표 하나를 쓴다(2026-10-05 맥7 INH-PHOTO60, 보스 msg 2338~2345).
 *
 * 60개 업종(기존 24종 + 신규 업종 36) 각각 업종 실체에 맞는 Pexels 사진 1장, 60장 전부 다른 사진.
 * 예전 '기존 이미지 17장 돌려쓰기'(INH-RESTORE)는 야영장에 한옥, 건설·부동산·환경 7개 업종에 같은
 * 공사 사진이 걸려 보스가 직접 지적했다 — 그 방식으로 되돌리지 말 것.
 *
 * 파일(public/images/industry/, scripts/photo-gate.mjs 가 빌드 전에 전부 검사):
 *   <slug>.webp            1200×750 q75 ≤150KB — 정본 1장(JSON-LD·사이트맵)
 *   <slug>-{800,1200,2000}.webp  q80, 2000w ≤400KB — 카드(800·1200)·히어로(800·1200·2000) srcset
 *   <slug>-og.jpg          1200×630 — og:image·twitter:image
 * 원본은 전부 폭 3000px 이상(업스케일 0). 출처·사진가는 docs/IMAGE-CREDITS.md.
 *
 * 새 업종을 추가하면 여기 한 줄 + 위 파일 5개를 같이 넣을 것 — 없으면 photo-gate 와 ServiceDirectory 가
 * 빌드를 멈춘다. 같은 pexels id 를 두 업종에 쓰면 이 모듈이 로드 시점에 throw 한다(빌드 실패).
 * ──────────────────────────────────────────────────────────────────────────── */

export type PhotoLocale = 'ko' | 'en' | 'zh' | 'ja'

type Photo = { pexels: number } & Record<PhotoLocale, string>

/** 값의 언어별 문자열 = 사진에 보이는 장면(alt 앞부분). alt 는 `${장면} — ${업종명}` 으로 만든다. */
export const INDUSTRY_PHOTOS: Record<string, Photo> = {
  // 숙박·관광·여행
  'campground-business-registration': { pexels: 10513799, ko: '숲속 캠핑장에 쳐진 텐트들', en: 'Tents pitched at a forest campsite', zh: '林间露营地搭起的帐篷', ja: '森のキャンプ場に張られたテント' },
  'rural-minbak-business-report': { pexels: 17973243, ko: '텃밭과 농가 건물이 있는 전원 농가', en: 'Farmhouse with a vegetable garden in the countryside', zh: '带菜园的乡村农舍', ja: '菜園のある田園の農家' },
  hostel: { pexels: 5137980, ko: '2층 침대가 놓인 호스텔 도미토리 객실', en: 'Hostel dormitory room with bunk beds', zh: '摆放上下铺的青年旅舍多人间', ja: '二段ベッドが並ぶホステルのドミトリー' },
  'accommodation-business-report': { pexels: 6876834, ko: '더블 침대가 놓인 호텔 객실', en: 'Hotel guest room with a double bed', zh: '配有双人床的酒店客房', ja: 'ダブルベッドのホテル客室' },
  'urban-guesthouse': { pexels: 7546638, ko: '밝은 소형 게스트룸 침실', en: 'Bright, compact guest bedroom', zh: '明亮的小型客房卧室', ja: '明るいコンパクトなゲストルーム' },
  hanok: { pexels: 39037957, ko: '북촌 한옥마을의 기와지붕 한옥들', en: 'Tiled-roof hanok houses in Bukchon Hanok Village', zh: '北村韩屋村的瓦顶韩屋', ja: '北村韓屋村の瓦屋根の韓屋' },
  'residential-lodging-business-report': { pexels: 6636296, ko: '거실과 주방이 함께 있는 레지던스 객실', en: 'Serviced residence unit with living room and kitchen', zh: '客厅与厨房一体的公寓式客房', ja: 'リビングとキッチン付きのレジデンス客室' },
  'travel-agency-registration': { pexels: 7368308, ko: '여권·카메라 옆 세계지도에 여행지를 표시하는 손', en: 'Hands marking destinations on a world map beside a passport and camera', zh: '在护照和相机旁的世界地图上标记目的地', ja: 'パスポートとカメラの横で世界地図に行き先を記す手' },
  // 식품·주류
  'food-manufacturing': { pexels: 11679691, ko: '식품 원료를 선별·이송하는 가공 라인', en: 'Food processing line sorting raw ingredients', zh: '分拣输送食品原料的加工生产线', ja: '食品原料を選別・搬送する加工ライン' },
  haccp: { pexels: 5953714, ko: '위생복 차림 작업자가 일하는 청결한 식품 공장', en: 'Worker in hygiene gear in a clean food plant', zh: '身穿卫生服的工人在洁净食品工厂作业', ja: '衛生服の作業員が働く清潔な食品工場' },
  'health-food': { pexels: 17820707, ko: '캡슐·분말 건강보조제', en: 'Dietary supplement capsules and powders', zh: '胶囊与粉末状营养补充剂', ja: 'カプセルと粉末のサプリメント' },
  'restaurant-business-report': { pexels: 17318176, ko: '조리사들이 일하는 업소 주방', en: 'Chefs at work in a restaurant kitchen', zh: '厨师们在餐厅后厨工作', ja: '料理人が働く飲食店の厨房' },
  'import-food-sales': { pexels: 4174773, ko: '수입 가공식품이 진열된 식료품점 통로', en: 'Grocery aisle stocked with imported packaged foods', zh: '陈列进口加工食品的超市货架通道', ja: '輸入加工食品が並ぶ食料品店の通路' },
  'liquor-import-sales-license': { pexels: 30447488, ko: '진열대에 놓인 와인병들', en: 'Wine bottles on a display shelf', zh: '陈列架上的葡萄酒瓶', ja: '陳列棚に並ぶワインボトル' },
  'entertainment-bar-business-permit': { pexels: 36092373, ko: '조명이 켜진 야간 바 카운터', en: 'Lit bar counter at night', zh: '夜间灯光下的酒吧吧台', ja: '夜の照明に照らされたバーカウンター' },
  // 건설·부동산·개발
  'building-usage': { pexels: 2505120, ko: '칸막이 없는 빈 사무 공간', en: 'Empty open-plan office space', zh: '空置的开放式办公空间', ja: '間仕切りのない空きオフィス' },
  factory: { pexels: 34718922, ko: '설비와 상자가 놓인 공장 내부', en: 'Factory floor with machinery and crates', zh: '摆放设备与货箱的工厂车间', ja: '設備と木箱が置かれた工場内部' },
  'construction-business-registration': { pexels: 17770160, ko: '시공 중인 건물 위 타워크레인', en: 'Tower cranes over a building under construction', zh: '施工中楼宇上方的塔吊', ja: '建設中の建物の上のタワークレーン' },
  'real-estate-development-business-registration': { pexels: 5612883, ko: '새로 지은 고층 아파트 단지', en: 'Newly built high-rise apartment complex', zh: '新建的高层公寓小区', ja: '新築の高層マンション団地' },
  'development-act-farmland-conversion-permit': { pexels: 27130444, ko: '수로 옆 농지를 정지하는 굴착기', en: 'Excavator grading farmland beside a canal', zh: '在水渠旁农地平整土地的挖掘机', ja: '水路脇の農地を整地する掘削機' },
  // 환경·화학·에너지
  'hazardous-chemical-business-permit': { pexels: 20379378, ko: '안전조끼 작업자가 화학물질 드럼을 옮기는 창고', en: 'Worker in a safety vest moving chemical drums in a warehouse', zh: '身穿安全背心的工人在仓库搬运化学品桶', ja: '安全ベストの作業員が化学品ドラムを運ぶ倉庫' },
  'waste-treatment-business-permit': { pexels: 36751335, ko: '컨베이어에서 폐기물을 선별하는 재활용 시설', en: 'Recycling facility sorting waste on a conveyor', zh: '在传送带上分拣废弃物的回收设施', ja: 'コンベヤーで廃棄物を選別するリサイクル施設' },
  'emission-facility-permit-report': { pexels: 39787370, ko: '굴뚝에서 배출가스가 나오는 산업 설비', en: 'Industrial plant with emissions rising from its stacks', zh: '烟囱排放废气的工业设施', ja: '煙突から排ガスが出る産業設備' },
  'solar-power-business-permit': { pexels: 15751131, ko: '들판에 펼쳐진 태양광 발전단지', en: 'Solar farm spread across a field', zh: '铺满田野的太阳能发电场', ja: '野原に広がる太陽光発電所' },
  // 의료·제약·화장품·요양
  cosmetics: { pexels: 7670676, ko: '크림 단지와 화장품 용기들', en: 'Skincare jars and cosmetic bottles', zh: '护肤霜罐与化妆品瓶', ja: 'クリーム容器と化粧品ボトル' },
  'functional-cosmetics': { pexels: 10819538, ko: '앰버병 위 스포이트에서 떨어지는 세럼', en: 'Serum dropping from a dropper into an amber bottle', zh: '滴管中的精华液滴入琥珀色瓶', ja: '琥珀色の瓶に落ちるスポイトの美容液' },
  'medical-device': { pexels: 13176452, ko: '병원 영상검사실의 CT 스캐너', en: 'CT scanner in a hospital imaging room', zh: '医院影像检查室的CT扫描仪', ja: '病院の画像検査室のCTスキャナー' },
  'foreign-patient-attraction': { pexels: 8459996, ko: '밝은 병원 대기실과 접수대', en: 'Bright hospital waiting area and reception', zh: '明亮的医院候诊区与接待台', ja: '明るい病院の待合室と受付' },
  'long-term-care-institution-designation': { pexels: 16364306, ko: '요양시설에서 휠체어 어르신을 돕는 요양보호사', en: 'Caregiver assisting an elderly resident in a wheelchair at a care home', zh: '养老机构中护理员协助轮椅上的老人', ja: '介護施設で車いすの高齢者を支える介護職員' },
  'pharmaceutical-wholesale-license': { pexels: 13119976, ko: '약품 선반에 의약품 상자를 정리하는 약사', en: 'Pharmacist organizing medicine boxes on shelves', zh: '药剂师在药架上整理药品盒', ja: '棚に医薬品の箱を整理する薬剤師' },
  // 금융·환전·대부·송금
  'currency-exchange': { pexels: 29915967, ko: '엔화·달러·위안화 지폐', en: 'Yen, US dollar and yuan banknotes', zh: '日元、美元与人民币纸币', ja: '円・ドル・人民元の紙幣' },
  'money-lending-business-registration': { pexels: 35230300, ko: '현금과 서명한 대출 서류·만년필', en: 'Cash with signed loan papers and a fountain pen', zh: '现金与已签署的借贷文件和钢笔', ja: '現金と署名済みの貸付書類・万年筆' },
  'overseas-remittance-business-registration': { pexels: 31035096, ko: '지폐 위 스마트폰의 환율·송금 화면', en: 'Smartphone with an exchange-rate screen on banknotes', zh: '纸币上显示汇率与汇款画面的手机', ja: '紙幣の上で為替・送金画面を表示するスマートフォン' },
  // 인증·기업확인·조달
  'women-enterprise': { pexels: 5413719, ko: '자기 꽃 공방에서 일하는 여성 창업가', en: 'Woman entrepreneur working in her own flower studio', zh: '在自己花艺工作室工作的女性创业者', ja: '自分の花の工房で働く女性起業家' },
  'venture-cert': { pexels: 7653569, ko: '노트북을 펼친 스타트업 팀의 작업 테이블', en: 'Startup team working with laptops at a shared desk', zh: '初创团队在共享办公桌用笔记本电脑工作', ja: 'ノートPCを広げたスタートアップチームの作業机' },
  'research-lab': { pexels: 8540819, ko: '실험대 위의 플라스크와 시약', en: 'Flasks and reagents on a laboratory bench', zh: '实验台上的烧瓶与试剂', ja: '実験台の上のフラスコと試薬' },
  'rnd-support': { pexels: 8439084, ko: '연구개발 중인 협동로봇 팔', en: 'Collaborative robot arm under development', zh: '研发中的协作机械臂', ja: '研究開発中の協働ロボットアーム' },
  procurement: { pexels: 8730998, ko: '계약 서류에 서명하는 정장 차림의 손', en: 'Signing contract documents at a desk', zh: '在办公桌上签署合同文件', ja: '契約書類に署名する手' },
  'mainbiz-management-innovation-sme': { pexels: 7989092, ko: '화이트보드 앞 경영 전략 회의', en: 'Management strategy meeting at a whiteboard', zh: '白板前的经营战略会议', ja: 'ホワイトボード前の経営戦略会議' },
  'kc-radio-certification': { pexels: 34007243, ko: '오실로스코프 등 전자파 시험 장비', en: 'Oscilloscopes and electronic test equipment', zh: '示波器等电子测试设备', ja: 'オシロスコープなどの電子試験機器' },
  // 법인·단체 설립
  nonprofit: { pexels: 6994869, ko: '기부 물품을 분류하는 자원봉사자들', en: 'Volunteers sorting donated goods', zh: '整理捐赠物资的志愿者', ja: '寄付品を仕分けるボランティア' },
  'cooperative-establishment-report': { pexels: 6340688, ko: '회의 테이블 위에 함께 손을 모은 사람들', en: 'Hands stacked together over a meeting table', zh: '会议桌上叠在一起的手', ja: '会議テーブルの上で重ね合わせた手' },
  'foundation-establishment-permit': { pexels: 36279882, ko: '서가가 늘어선 도서관 열람 통로', en: 'Library aisle lined with bookshelves', zh: '书架林立的图书馆通道', ja: '書架が並ぶ図書館の通路' },
  // 교육·문화·체육
  'sports-club': { pexels: 8941613, ko: '코치와 훈련하는 유소년 축구팀', en: 'Youth soccer team training with a coach', zh: '与教练一起训练的青少年足球队', ja: 'コーチと練習するユースサッカーチーム' },
  'sports-facility-business-report': { pexels: 4716814, ko: '러닝머신과 운동기구가 놓인 체력단련장', en: 'Gym with treadmills and fitness machines', zh: '摆放跑步机和健身器械的健身房', ja: 'トレッドミルとマシンが並ぶトレーニングジム' },
  'academy-establishment-registration': { pexels: 18870256, ko: '강사가 학생을 지도하는 학원 교실', en: 'Teacher helping students in a classroom', zh: '老师在教室辅导学生', ja: '講師が生徒を指導する教室' },
  'entertainment-agency-business-registration': { pexels: 2263436, ko: '조명과 대형 스크린이 켜진 공연 무대', en: 'Concert stage with lights and large screens', zh: '灯光与大屏幕亮起的演出舞台', ja: '照明と大型スクリーンが灯るライブステージ' },
  // 운송·물류·자동차·항공
  logistics: { pexels: 14020705, ko: '크레인과 컨테이너가 쌓인 항만', en: 'Container port with cranes and stacked containers', zh: '吊机林立、集装箱堆积的港口', ja: 'クレーンとコンテナが並ぶ港湾' },
  'freight-trucking': { pexels: 14005602, ko: '고속도로를 달리는 컨테이너 화물차', en: 'Container truck on a highway', zh: '行驶在高速公路上的集装箱货车', ja: '高速道路を走るコンテナトラック' },
  'car-dealer-rental-business-registration': { pexels: 5992514, ko: '주차장에 줄지어 선 신차들', en: 'Rows of new cars in a parking lot', zh: '停车场里成排的新车', ja: '駐車場に並ぶ新車' },
  'drone-business-registration': { pexels: 28861948, ko: '설산 위를 나는 촬영용 드론', en: 'Camera drone flying over snowy peaks', zh: '在雪山上空飞行的航拍无人机', ja: '雪山の上を飛ぶ空撮ドローン' },
  // 유통·판매·수입
  tobacco: { pexels: 27793716, ko: '창고에 쌓아 둔 잎담배 더미', en: 'Bundled tobacco leaves stored in a warehouse', zh: '仓库中堆放的烟叶', ja: '倉庫に積まれた葉たばこ' },
  ecig: { pexels: 19901864, ko: '전자담배 기기 3종', en: 'Three electronic cigarette devices', zh: '三款电子烟设备', ja: '電子たばこ機器3種' },
  'mail-order-sales-report': { pexels: 6170458, ko: '배송 차량에 실린 택배 상자들', en: 'Parcels loaded in a delivery van', zh: '装在配送车里的快递箱', ja: '配送車に積まれた宅配の箱' },
  // IT·통신
  'location-based-service': { pexels: 15548360, ko: '차량 거치대 스마트폰의 지도 길안내', en: 'Smartphone map navigation in a car mount', zh: '车载支架上手机的地图导航', ja: '車載ホルダーのスマートフォン地図ナビ' },
  'software-business-performance-management': { pexels: 5380792, ko: '코드가 떠 있는 개발자 듀얼 모니터', en: 'Developer dual monitors showing code', zh: '显示代码的开发者双显示器', ja: 'コードを表示した開発者のデュアルモニター' },
  // 생활·위생 서비스
  'beauty-salon-business-report': { pexels: 853427, ko: '의자와 거울이 늘어선 미용실 내부', en: 'Hair salon interior with styling chairs and mirrors', zh: '摆放座椅与镜子的美发店内部', ja: '椅子と鏡が並ぶ美容室の店内' },
  'disinfection-business-report': { pexels: 19789841, ko: '연무기로 주택가를 소독하는 방역 작업', en: 'Fogging disinfection outside a house', zh: '在住宅外用喷雾机消毒', ja: '住宅の外で行う煙霧消毒作業' },
  'pet-business-permit-registration': { pexels: 6130995, ko: '미용 테이블에서 강아지를 손질하는 반려동물 미용실', en: 'Groomer trimming a dog at a pet grooming salon', zh: '宠物美容店里为小狗修剪毛发', ja: 'トリミングテーブルで犬を整えるペットサロン' },
  'marriage-brokerage-business-registration': { pexels: 30666743, ko: '결혼반지를 낀 두 사람의 손', en: 'Two hands wearing wedding rings', zh: '戴着结婚戒指的两只手', ja: '結婚指輪をはめた二人の手' },
}

export const INDUSTRY_PHOTO_DIR = '/images/industry'

// 같은 사진이 두 업종에 걸리면 모듈 로드 시점에 throw → next build 실패(보스 msg 2341 ⑥).
{
  const seen = new Map<number, string>()
  for (const [slug, p] of Object.entries(INDUSTRY_PHOTOS)) {
    const prev = seen.get(p.pexels)
    if (prev) throw new Error(`[service-card-images] 같은 사진(pexels ${p.pexels})이 두 업종에 있다: ${prev}, ${slug}`)
    seen.set(p.pexels, slug)
  }
}

function photo(slug: string): Photo {
  const p = INDUSTRY_PHOTOS[slug]
  if (!p) throw new Error(`[service-card-images] 업종 사진 없음: ${slug} — lib/service-card-images.ts 와 public/images/industry/ 에 추가할 것`)
  return p
}

/** 폭 접미사를 뺀 경로 — FillImage base. 예: /images/industry/hostel */
export function industryPhotoBase(slug: string): string {
  photo(slug)
  return `${INDUSTRY_PHOTO_DIR}/${slug}`
}

/** 정본 1장(1200×750) — JSON-LD ImageObject·사이트맵 image:image. */
export function industryPhotoSrc(slug: string): string {
  return `${industryPhotoBase(slug)}.webp`
}

/** og:image·twitter:image(1200×630). */
export function industryPhotoOg(slug: string): string {
  return `${industryPhotoBase(slug)}-og.jpg`
}

/** alt = 사진 내용 + 업종명. 예: "숲속 캠핑장에 쳐진 텐트들 — 야영장업 등록" */
export function industryPhotoAlt(slug: string, locale: PhotoLocale, industryName: string): string {
  return `${photo(slug)[locale]} — ${industryName}`
}

/** og·JSON-LD 용 메타 한 묶음. */
export function industryPhotoMeta(slug: string, locale: PhotoLocale, industryName: string) {
  const alt = industryPhotoAlt(slug, locale, industryName)
  return {
    alt,
    og: { url: industryPhotoOg(slug), width: 1200, height: 630, alt },
    jsonLd: {
      '@type': 'ImageObject',
      url: `https://inhega.co.kr${industryPhotoSrc(slug)}`,
      contentUrl: `https://inhega.co.kr${industryPhotoSrc(slug)}`,
      width: 1200,
      height: 750,
      caption: alt,
    },
  }
}
