/**
 * ────────────────────────────────────────────────────────────────────────────
 * 홈 '전문 서비스' 사진 카드의 업종별 사진 (2026-10-05 맥7 INH-RESTORE, 보스 msg 2257~2262)
 *
 * 기존 24종은 정본(services-data 의 image)을 그대로 쓰고, 여기엔 **사진이 없던 신규 업종만** 적는다.
 * 보스 지시: "기존에 있던 이미지를 활용" — 새 이미지 생성·외부 이미지 금지.
 * 그래서 값은 예전 홈 카드(배포 657ffb7a)가 쓰던 public/images/service-*.webp 17장 중 하나이고,
 * 원칙은 같은 분야(lib/service-groups.ts) 기존 카드의 사진이다. 분야에 기존 사진이 없는 경우
 * (환경·화학·에너지 / 생활·위생 서비스 / 교육 분야 일부)만 업무 성격이 가장 가까운 기존 사진을 쓴다.
 *
 * 여기 없는 신규 업종이 생기면 ServiceDirectory 가 빌드를 멈춘다 — 회색 빈 카드는 만들지 않는다.
 * ──────────────────────────────────────────────────────────────────────────── */

export const INDUSTRY_CARD_IMAGE: Record<string, string> = {
  // 식품·주류 — food·haccp
  'restaurant-business-report': '/images/service-haccp.webp',
  'import-food-sales': '/images/service-food.webp',
  'liquor-import-sales-license': '/images/service-haccp.webp',
  'entertainment-bar-business-permit': '/images/service-food.webp',
  // 숙박·관광·여행 — guesthouse·hostel·hanok
  'accommodation-business-report': '/images/service-hostel.webp',
  'residential-lodging-business-report': '/images/service-guesthouse.webp',
  'rural-minbak-business-report': '/images/service-hanok.webp',
  'campground-business-registration': '/images/service-hanok.webp',
  'travel-agency-registration': '/images/service-guesthouse.webp',
  // 건설·부동산·개발 — renovation
  'construction-business-registration': '/images/service-renovation.webp',
  'real-estate-development-business-registration': '/images/service-renovation.webp',
  'development-act-farmland-conversion-permit': '/images/service-renovation.webp',
  // 환경·화학·에너지 — 분야 기존 사진 없음: 실험실(research)·현장(renovation)
  'hazardous-chemical-business-permit': '/images/service-research.webp',
  'waste-treatment-business-permit': '/images/service-renovation.webp',
  'emission-facility-permit-report': '/images/service-renovation.webp',
  'solar-power-business-permit': '/images/service-renovation.webp',
  // 의료·제약·화장품·요양 — cosmetics·license
  'pharmaceutical-wholesale-license': '/images/service-cosmetics.webp',
  'foreign-patient-attraction': '/images/service-license.webp',
  'long-term-care-institution-designation': '/images/service-license.webp',
  // 금융·환전·대부·송금 — currency
  'money-lending-business-registration': '/images/service-currency.webp',
  'overseas-remittance-business-registration': '/images/service-currency.webp',
  // 인증·기업확인·조달 — startup·research
  'mainbiz-management-innovation-sme': '/images/service-startup.webp',
  'kc-radio-certification': '/images/service-research.webp',
  // 법인·단체 설립 — legal
  'cooperative-establishment-report': '/images/service-legal.webp',
  'foundation-establishment-permit': '/images/service-legal.webp',
  // 교육·문화·체육 — baseball(체육), 학원·기획업은 회의·발표 사진
  'sports-facility-business-report': '/images/service-baseball.webp',
  'academy-establishment-registration': '/images/service-startup.webp',
  'entertainment-agency-business-registration': '/images/service-women.webp',
  // 운송·물류·자동차·항공 — logistics
  'car-dealer-rental-business-registration': '/images/service-logistics.webp',
  'drone-business-registration': '/images/service-logistics.webp',
  // 유통·판매·수입 — logistics(담배와 같은 사진)
  'mail-order-sales-report': '/images/service-logistics.webp',
  // IT·통신 — 분야 기존 사진은 logistics(위치정보), 소프트웨어는 사무실 사진
  'software-business-performance-management': '/images/service-startup.webp',
  // 생활·위생 서비스 — 분야 기존 사진 없음: 위생 현장(haccp)·상담(consultation)
  'beauty-salon-business-report': '/images/service-consultation.webp',
  'disinfection-business-report': '/images/service-haccp.webp',
  'pet-business-permit-registration': '/images/service-consultation.webp',
  'marriage-brokerage-business-registration': '/images/service-consultation.webp',
}
