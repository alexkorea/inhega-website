// 견적문의 폼에 사용되는 질문 데이터
// - commonQuestions: 모든 카테고리 공통 4문항
// - categories: 16개 인허가 카테고리, 각 5문항

export type Option = string

export type Question = {
  id: string
  label: string
  options: Option[]
}

export type Category = {
  slug: string
  name: string
  questions: Question[]
}

export const commonQuestions: Question[] = [
  {
    id: "stage",
    label: "현재 진행 단계가 어떻게 되시나요?",
    options: [
      "처음 알아보는 단계",
      "준비 중",
      "장소/사무실은 확보함",
      "서류 준비 중",
      "최대한 빨리 진행 원함",
    ],
  },
  {
    id: "business_type",
    label: "사업 형태는 무엇인가요?",
    options: ["개인사업자", "법인사업자", "법인 설립 예정", "외국법인/외국인", "아직 미정"],
  },
  {
    id: "place",
    label: "사업장 또는 대상 장소는 확보되었나요?",
    options: ["이미 확보함", "계약 예정", "후보지 검토 중", "아직 없음", "해당 없음"],
  },
  {
    id: "scope",
    label: "희망 진행 방식은 무엇인가요?",
    options: [
      "서류 안내만 받기",
      "일부 대행 원함",
      "처음부터 끝까지 전체 대행 원함",
      "상담 후 결정",
    ],
  },
]

export const categories: Category[] = [
  {
    slug: "international-logistics",
    name: "국제물류주선업",
    questions: [
      {
        id: "applicant",
        label: "신청 주체는 무엇인가요?",
        options: ["개인사업자", "법인", "설립 예정 법인", "외국법인 한국지사/법인", "미정"],
      },
      {
        id: "office",
        label: "현재 사무실은 준비되어 있나요?",
        options: ["있음", "계약 예정", "알아보는 중", "없음"],
      },
      {
        id: "mode",
        label: "주요 업무 형태는 무엇인가요?",
        options: ["해상운송 중심", "항공운송 중심", "해상+항공 모두", "아직 미정"],
      },
      {
        id: "experience",
        label: "기존 관련 업종 경험이 있으신가요?",
        options: ["있음", "일부 있음", "없음"],
      },
      {
        id: "schedule",
        label: "희망 일정은 어떻게 되시나요?",
        options: ["1개월 이내", "2~3개월 이내", "준비 후 진행", "상담 후 결정"],
      },
    ],
  },
  {
    slug: "currency-exchange",
    name: "환전업 등록",
    questions: [
      {
        id: "applicant",
        label: "신청인은 누구인가요?",
        options: ["개인", "법인", "외국인/외국법인", "미정"],
      },
      {
        id: "location",
        label: "영업장 확보 여부는 어떻게 되나요?",
        options: ["확보 완료", "계약 예정", "검토 중", "없음"],
      },
      {
        id: "operation",
        label: "운영 형태는 무엇인가요?",
        options: ["오프라인 매장형", "관광지/호텔 인근", "기존 업장 내 추가", "아직 미정"],
      },
      {
        id: "experience",
        label: "외국환 관련 경험 또는 유사업종 경험이 있으신가요?",
        options: ["있음", "없음"],
      },
      {
        id: "readiness",
        label: "준비 상태는 어느 정도인가요?",
        options: ["바로 신청 원함", "서류 검토 필요", "요건부터 확인 원함", "상담 후 결정"],
      },
    ],
  },
  {
    slug: "foreign-minbak",
    name: "외국인도시민박업",
    questions: [
      {
        id: "building_type",
        label: "운영 예정 건물 형태는 무엇인가요?",
        options: ["아파트", "단독주택", "다가구/다세대", "오피스텔", "기타"],
      },
      {
        id: "residence",
        label: "신청인 거주 형태는 무엇인가요?",
        options: ["실제 거주 중", "거주 예정", "거주하지 않음", "미정"],
      },
      {
        id: "status",
        label: "숙소 준비 상태는 어떤가요?",
        options: [
          "이미 운영 중",
          "곧 운영 예정",
          "인허가 가능 여부 먼저 확인 원함",
          "장소부터 찾는 중",
        ],
      },
      {
        id: "experience",
        label: "외국인 숙박업 경험이 있으신가요?",
        options: ["있음", "없음"],
      },
      {
        id: "concern",
        label: "가장 궁금한 부분은 무엇인가요?",
        options: ["가능 여부", "필요서류", "소요기간", "총비용", "전체 절차"],
      },
    ],
  },
  {
    slug: "hostel",
    name: "호스텔업",
    questions: [
      {
        id: "building",
        label: "대상 건물은 무엇인가요?",
        options: ["기존 숙박시설", "상가/근린생활시설", "건물 전체", "일부 층만 사용", "미정"],
      },
      {
        id: "secured",
        label: "건물 확보 상태는 어떤가요?",
        options: ["확보 완료", "계약 직전", "후보지 검토 중", "없음"],
      },
      {
        id: "scale",
        label: "운영 규모는 어떻게 예상하시나요?",
        options: ["소규모", "중규모", "대규모", "미정"],
      },
      {
        id: "need",
        label: "현재 가장 필요한 것은 무엇인가요?",
        options: [
          "가능 여부 검토",
          "시설 기준 검토",
          "용도변경 포함 전체 진행",
          "서류 준비",
          "상담 후 결정",
        ],
      },
      {
        id: "timeline",
        label: "오픈 희망 시점은 언제인가요?",
        options: ["1개월 이내", "3개월 이내", "6개월 이내", "미정"],
      },
    ],
  },
  {
    slug: "hanok-stay",
    name: "한옥체험업",
    questions: [
      {
        id: "is_hanok",
        label: "대상 건물은 실제 한옥인가요?",
        options: ["예", "일부 한옥 형태", "확인 필요", "잘 모르겠음"],
      },
      {
        id: "ownership",
        label: "건물 소유 형태는 무엇인가요?",
        options: ["본인 소유", "임차", "계약 예정", "미정"],
      },
      {
        id: "condition",
        label: "현재 건물 상태는 어떤가요?",
        options: ["바로 사용 가능", "일부 수리 필요", "리모델링 예정", "확인 필요"],
      },
      {
        id: "purpose",
        label: "운영 목적은 무엇인가요?",
        options: ["체험 숙박 중심", "관광객 숙박 중심", "문화체험 포함", "아직 미정"],
      },
      {
        id: "scope",
        label: "진행 희망 범위는 무엇인가요?",
        options: ["가능 여부 검토", "서류 대행", "전체 진행", "상담 후 결정"],
      },
    ],
  },
  {
    slug: "building-use-change",
    name: "건축물 용도변경",
    questions: [
      {
        id: "current_use",
        label: "현재 건축물 용도는 무엇인가요?",
        options: ["주택", "근린생활시설", "업무시설", "공장/창고", "잘 모르겠음"],
      },
      {
        id: "target_use",
        label: "변경하려는 용도는 무엇인가요?",
        options: ["숙박업", "사무실", "음식점", "제조업", "기타", "미정"],
      },
      {
        id: "condition",
        label: "대상 건물 상태는 어떤가요?",
        options: ["이미 사용 중", "공실", "계약 예정", "건물 검토 중"],
      },
      {
        id: "ownership",
        label: "소유 형태는 무엇인가요?",
        options: ["본인 소유", "임차", "계약 예정", "미정"],
      },
      {
        id: "service",
        label: "현재 필요한 서비스는 무엇인가요?",
        options: [
          "용도변경 가능 여부 검토",
          "서류 검토",
          "전체 대행",
          "다른 인허가와 함께 진행 원함",
        ],
      },
    ],
  },
  {
    slug: "food-manufacturing",
    name: "식품제조가공업",
    questions: [
      {
        id: "product",
        label: "생산 예정 품목은 무엇인가요?",
        options: [
          "일반식품",
          "건강기능식품 아님 일반가공식품",
          "음료류",
          "소스/조미식품",
          "기타",
        ],
      },
      {
        id: "facility",
        label: "제조시설은 준비되어 있나요?",
        options: ["있음", "계약 예정", "검토 중", "없음"],
      },
      {
        id: "business_status",
        label: "현재 사업 상태는 무엇인가요?",
        options: ["신규 시작", "기존 사업 확장", "다른 업종 운영 중 추가", "미정"],
      },
      {
        id: "method",
        label: "제조 방식은 무엇인가요?",
        options: ["직접 제조", "OEM/위탁 생산 중심", "둘 다 검토 중", "미정"],
      },
      {
        id: "need",
        label: "필요한 업무는 무엇인가요?",
        options: [
          "영업등록",
          "시설 기준 검토",
          "표시사항/서류 검토",
          "전체 컨설팅",
          "상담 후 결정",
        ],
      },
    ],
  },
  {
    slug: "women-enterprise-cert",
    name: "여성기업인증",
    questions: [
      {
        id: "entity",
        label: "사업체 형태는 무엇인가요?",
        options: ["개인사업자", "법인", "설립 예정", "미정"],
      },
      {
        id: "status",
        label: "현재 사업 운영 여부는 어떤가요?",
        options: ["운영 중", "개업 예정", "법인 설립 예정", "준비 중"],
      },
      {
        id: "purpose",
        label: "인증 목적은 무엇인가요?",
        options: ["공공입찰", "가점/지원사업", "대외 신뢰도", "거래처 요청", "아직 미정"],
      },
      {
        id: "representative",
        label: "대표자 성별 및 경영 참여 형태는 무엇인가요?",
        options: [
          "여성 대표가 실질 경영 중",
          "여성 대표이나 추가 확인 필요",
          "확인이 필요함",
          "잘 모르겠음",
        ],
      },
      {
        id: "other_certs",
        label: "기존 다른 인증 보유 여부는 어떤가요?",
        options: ["있음", "없음", "진행 중"],
      },
    ],
  },
  {
    slug: "nonprofit",
    name: "비영리사단법인",
    questions: [
      {
        id: "field",
        label: "설립 목적 분야는 무엇인가요?",
        options: ["교육", "문화", "복지", "환경", "국제교류", "기타"],
      },
      {
        id: "readiness",
        label: "현재 준비 수준은 어떤가요?",
        options: [
          "발기인 구성 완료",
          "정관 초안 있음",
          "아직 아이디어 단계",
          "상담이 먼저 필요",
        ],
      },
      {
        id: "address",
        label: "사무실 또는 주소지는 준비되어 있나요?",
        options: ["있음", "준비 중", "없음", "미정"],
      },
      {
        id: "purpose",
        label: "법인 설립 목적은 무엇인가요?",
        options: [
          "공익활동",
          "정부/지자체 사업 참여",
          "기부금/후원 운영",
          "단체 공식화",
          "기타",
        ],
      },
      {
        id: "need",
        label: "현재 가장 필요한 것은 무엇인가요?",
        options: ["설립 가능 여부", "필요서류 안내", "정관/사업계획 작성 지원", "전체 대행"],
      },
    ],
  },
  {
    slug: "tobacco-import",
    name: "담배수입판매업 등록",
    questions: [
      {
        id: "product",
        label: "취급 예정 품목은 무엇인가요?",
        options: ["일반 담배", "시가", "기타 담배제품", "아직 미정"],
      },
      {
        id: "importer",
        label: "수입 주체는 무엇인가요?",
        options: ["개인사업자", "법인", "외국법인 관련", "설립 예정", "미정"],
      },
      {
        id: "experience",
        label: "통관/수입 경험이 있으신가요?",
        options: ["있음", "없음", "일부 있음"],
      },
      {
        id: "distribution",
        label: "보관/유통 계획은 어떻게 되나요?",
        options: [
          "직접 보관 및 판매",
          "유통사 연계 예정",
          "온라인 중심",
          "오프라인 중심",
          "미정",
        ],
      },
      {
        id: "need",
        label: "현재 필요한 도움은 무엇인가요?",
        options: ["등록 가능 여부", "요건 검토", "서류 준비", "전체 대행", "상담 후 결정"],
      },
    ],
  },
  {
    slug: "venture-inno-biz",
    name: "기업 인증(벤처/이노비즈)",
    questions: [
      {
        id: "cert_type",
        label: "희망 인증 종류는 무엇인가요?",
        options: ["벤처기업 확인", "이노비즈", "둘 다 검토 중", "잘 모르겠음"],
      },
      {
        id: "entity",
        label: "사업체 상태는 무엇인가요?",
        options: ["개인사업자", "법인", "설립 예정", "미정"],
      },
      {
        id: "feature",
        label: "현재 기업의 특징은 무엇인가요?",
        options: [
          "기술 중심",
          "연구개발 중심",
          "제조업 중심",
          "서비스업 중심",
          "아직 정리 안됨",
        ],
      },
      {
        id: "purpose",
        label: "인증 목적은 무엇인가요?",
        options: [
          "투자/대출",
          "정부지원사업",
          "대외신뢰 확보",
          "세제/가점 검토",
          "거래처 요청",
        ],
      },
      {
        id: "docs",
        label: "현재 자료 준비 상태는 어떤가요?",
        options: [
          "재무/기술자료 준비됨",
          "일부만 준비됨",
          "거의 없음",
          "상담 후 준비 예정",
        ],
      },
    ],
  },
  {
    slug: "food-haccp",
    name: "식품 인허가 & HACCP",
    questions: [
      {
        id: "scope",
        label: "희망 업무는 무엇인가요?",
        options: ["식품 인허가만", "HACCP만", "둘 다", "아직 미정"],
      },
      {
        id: "industry",
        label: "업종 형태는 무엇인가요?",
        options: ["제조", "가공", "유통", "수입", "기타"],
      },
      {
        id: "facility",
        label: "현재 공장/작업장은 준비되어 있나요?",
        options: ["있음", "계약 예정", "검토 중", "없음"],
      },
      {
        id: "haccp_purpose",
        label: "HACCP 진행 목적은 무엇인가요?",
        options: ["의무 대상", "거래처 요구", "위생관리 강화", "아직 검토 중"],
      },
      {
        id: "need",
        label: "현재 가장 필요한 것은 무엇인가요?",
        options: [
          "가능 여부 진단",
          "시설 기준 점검",
          "서류 구축",
          "전체 컨설팅",
          "상담 후 결정",
        ],
      },
    ],
  },
  {
    slug: "cosmetics-quasi-drug",
    name: "의약외품/화장품 허가",
    questions: [
      {
        id: "product",
        label: "대상 품목은 무엇인가요?",
        options: [
          "화장품 제조",
          "화장품 수입",
          "의약외품 제조",
          "의약외품 수입",
          "아직 미정",
        ],
      },
      {
        id: "entity",
        label: "진행 주체는 누구인가요?",
        options: [
          "한국 법인",
          "한국 개인사업자",
          "외국회사",
          "법인 설립 예정",
          "미정",
        ],
      },
      {
        id: "product_status",
        label: "현재 제품 상태는 어떤가요?",
        options: ["이미 생산 중", "수입 예정", "샘플/개발 단계", "제품 검토 중"],
      },
      {
        id: "docs_held",
        label: "기존 해외 허가 또는 자료 보유 여부는 어떤가요?",
        options: ["있음", "일부 있음", "없음", "확인 필요"],
      },
      {
        id: "need",
        label: "필요한 업무는 무엇인가요?",
        options: [
          "가능 여부 검토",
          "인허가 절차 안내",
          "책임판매업/제조업 관련 상담",
          "서류 대행",
          "전체 진행",
        ],
      },
    ],
  },
  {
    slug: "g2b-registration",
    name: "조달청 나라장터 등록",
    questions: [
      {
        id: "entity",
        label: "사업체 형태는 무엇인가요?",
        options: ["개인사업자", "법인", "설립 예정", "미정"],
      },
      {
        id: "purpose",
        label: "등록 목적은 무엇인가요?",
        options: [
          "공공입찰 참여",
          "수의계약/판로 확대",
          "벤처나라/우선구매 연계",
          "거래처 요청",
          "아직 미정",
        ],
      },
      {
        id: "existing_cert",
        label: "현재 보유한 인증 또는 실적이 있나요?",
        options: ["있음", "없음", "일부 있음", "확인 필요"],
      },
      {
        id: "item",
        label: "취급 품목은 무엇인가요?",
        options: ["물품", "용역", "공사", "복합", "미정"],
      },
      {
        id: "scope",
        label: "진행 희망 범위는 무엇인가요?",
        options: [
          "가입 및 기본 등록",
          "입찰 가능 상태까지",
          "인증 연계 포함",
          "상담 후 결정",
        ],
      },
    ],
  },
  {
    slug: "research-lab",
    name: "기업부설연구소 설립",
    questions: [
      {
        id: "type",
        label: "희망 형태는 무엇인가요?",
        options: [
          "기업부설연구소",
          "연구개발전담부서",
          "아직 미정",
          "상담 후 결정",
        ],
      },
      {
        id: "entity",
        label: "사업체 형태는 무엇인가요?",
        options: ["법인", "개인사업자", "설립 예정", "미정"],
      },
      {
        id: "researchers",
        label: "전담 연구인력 확보 여부는 어떤가요?",
        options: ["확보 완료", "채용 예정", "검토 중", "없음"],
      },
      {
        id: "space",
        label: "연구 공간은 준비되어 있나요?",
        options: ["있음", "준비 중", "없음", "확인 필요"],
      },
      {
        id: "purpose",
        label: "설립 목적은 무엇인가요?",
        options: [
          "세제 혜택",
          "정부지원사업",
          "기술기업 이미지 강화",
          "인증/부설연구소 요건 충족",
          "기타",
        ],
      },
    ],
  },
  {
    slug: "ecig-import",
    name: "전자담배 수입허가",
    questions: [
      {
        id: "product",
        label: "취급 예정 제품은 무엇인가요?",
        options: [
          "액상형 전자담배",
          "기기류",
          "소모품/카트리지",
          "복합",
          "아직 미정",
        ],
      },
      {
        id: "importer",
        label: "수입 주체는 무엇인가요?",
        options: ["개인사업자", "법인", "외국법인 관련", "설립 예정", "미정"],
      },
      {
        id: "product_docs",
        label: "현재 제품 자료 보유 여부는 어떤가요?",
        options: ["성분/제품자료 있음", "일부 있음", "없음", "확인 필요"],
      },
      {
        id: "experience",
        label: "통관 또는 수입 경험이 있으신가요?",
        options: ["있음", "없음", "일부 있음"],
      },
      {
        id: "need",
        label: "현재 가장 필요한 것은 무엇인가요?",
        options: [
          "수입 가능 여부",
          "필요 인허가 확인",
          "서류 준비",
          "전체 대행",
          "상담 후 결정",
        ],
      },
    ],
  },
  {
    slug: "other",
    name: "기타 (위에 해당 없음)",
    questions: [],
  },
]

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug)
}
