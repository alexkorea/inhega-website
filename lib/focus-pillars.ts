/**
 * ────────────────────────────────────────────────────────────────────────────
 * 중점 업무 필러 요약 (INHEGA-FOCUS-1103, 보스 msg 4781, 2026-11-03) — 서버 전용.
 *
 * 중점 6개(lib/focus-services.ts) 서비스 상세 맨 위에 '한눈에 보기'(대상·요건·절차·필요서류·처리기간),
 * 단계별 진행, 관련 세부 안내 링크를 붙인다. 아래 본문(services-data.ts overview)은 그대로 둔다.
 * 법령 사실은 law.go.kr(OC=visionlaw) 대조분만 싣는다 — 대조표는 보고서(bot-chat/mac4_mac7_INHEGA-FOCUS-1103.txt)에만.
 * 화면에 조문 번호·출처·확인일·가격·수수료를 적지 않는다(svc-nocite-gate·nofree-gate).
 * ──────────────────────────────────────────────────────────────────────────── */

export interface FocusPillar {
  /** 한눈에 보기 표 — 순서 고정: 대상·요건·절차·필요서류·처리기간 */
  glance: { label: '대상' | '요건' | '절차' | '필요서류' | '처리기간'; value: string }[]
  /** 단계별 진행(선택) */
  stages?: { title: string; desc: string; href?: string }[]
  stagesHeading?: string
  /** 강조 박스(선택) — 위치기반서비스 외국기업 등 */
  note?: { heading: string; items: string[] }
  /** 관련 세부 안내 — 같은 주제의 서비스·블로그(ko) */
  related: { title: string; href: string }[]
}

export const FOCUS_PILLARS: Record<string, FocusPillar> = {
  nonprofit: {
    glance: [
      { label: '대상', value: '학술·종교·자선·기예·사교 등 영리 아닌 사업을 목적으로 사람(사원)이 모인 단체' },
      { label: '요건', value: '비영리 목적, 민법이 정한 필수 기재사항을 담은 정관, 목적 사업을 수행할 재산과 사업계획, 주무관청의 설립허가' },
      { label: '절차', value: '주무관청 사전 협의 → 정관 작성·창립총회 → 설립허가 신청 → 심사·허가 → 재산 이전 → 설립등기 → 등기 보고·고유번호 발급' },
      { label: '필요서류', value: '설립허가 신청서, 설립발기인 인적사항, 정관, 재산목록과 증명서류, 사업계획 및 수입·지출 예산서, 임원 취임예정자 서류·취임승낙서, 창립총회 회의록' },
      { label: '처리기간', value: '주무관청 심사 20일 이내(특별한 사유가 없으면), 허가 후 1개월 이내 재산 이전 증명, 허가일부터 3주 내 설립등기, 등기 후 10일 이내 보고' },
    ],
    related: [
      { title: '비영리사단법인 설립 완벽 가이드 — 주무관청 허가부터 등기까지', href: '/blog/nonprofit-corporation-establishment-guide' },
      { title: '사단법인 정관 작성 방법과 필수 기재사항', href: '/blog/nonprofit-articles-drafting' },
      { title: '사단법인 설립 허가와 정관 작성 — 주무관청 선택, 창립총회', href: '/blog/nonprofit-corporation-articles-and-approval-guide' },
      { title: '사단법인 재단법인 차이점 비교', href: '/blog/nonprofit-association-vs-foundation' },
      { title: '비영리사단법인 세무 신고와 결산 보고', href: '/blog/nonprofit-tax-reporting' },
      { title: '사단법인 해산 절차와 청산', href: '/blog/nonprofit-dissolution-liquidation-procedure' },
    ],
  },
  'telecom-business': {
    glance: [
      { label: '대상', value: '전화·인터넷접속 등 기간통신역무, 앱 마켓·온라인 동영상 서비스 등 부가통신역무, 웹하드·P2P·문자 발송 등 특수한 유형의 부가통신역무를 제공하려는 사업자' },
      { label: '요건', value: '부가통신사업은 신고(인터넷 이용 자본금 1억원 이하는 신고 간주), 특수한 유형은 기술적 조치 계획·인력·물적 시설·재무건전성을 갖춘 등록, 기간통신사업은 재정·기술적 능력과 이용자 보호계획을 갖춘 법인의 등록' },
      { label: '절차', value: '역무 구분 판정 → 신고 간주 여부 확인 → 신고서·등록신청서 작성 → 과학기술정보통신부(중앙전파관리소) 접수 → 보완 → 신고증명서·등록증 발급' },
      { label: '필요서류', value: '부가통신: 신고서, 통신망구성도(요구 시), 개인정보보호조치 구축 명세서(개인정보 취급 시) / 기간통신: 등록신청서, 사업계획서, 정관, 주주명부, 이용약관·이용자 보호계획, 설비 명세·통신망 구성도' },
      { label: '처리기간', value: '기간통신사업·특수한 유형 부가통신사업 등록증은 신청일부터 30일 이내, 보완 요구 시 10일 이내 기간 지정, 부가통신사업은 신고·등록 후 1년 이내 사업 개시' },
    ],
    related: [
      { title: '위치기반서비스사업 신고', href: '/services/location-based-service' },
      { title: 'KC 전파인증(적합성평가)', href: '/services/kc-radio-certification' },
      { title: '소프트웨어사업자 신고', href: '/services/software-business-performance-management' },
    ],
  },
  'location-based-service': {
    glance: [
      { label: '대상', value: '개인위치정보를 대상으로 위치기반서비스를 제공하는 사업자 — 한국 이용자에게 서비스하면 한국 법인이 없는 외국기업도 포함' },
      { label: '요건', value: '사업계획서, 사업용 주요설비(위치정보시스템), 위치정보 보호조치를 갖출 것. 폐지명령 후 1년이 지나지 않으면 신고 불가, 소상공인·1인 창조기업은 사업 개시 후 1개월 이내 간이신고' },
      { label: '절차', value: '신고 대상 판정 → 보호조치 설계 → 서류 준비(외국법인은 자국 서류 공증·아포스티유·번역) → 방송미디어통신위원회 신고 → 보완 → 신고 수리' },
      { label: '필요서류', value: '위치기반서비스사업 신고서, 사업계획서, 주요설비 내용·설치 장소 확인 서류, 위치정보 보호조치 증명 서류, 외국법인은 법인등기 공증·아포스티유와 한국어 번역본' },
      { label: '처리기간', value: '행정청은 내용을 검토해 법에 적합하면 신고를 수리합니다. 실무상 서류 완비 후 2~4주, 외국법인은 자국 서류 준비를 포함해 4~8주를 예상합니다' },
    ],
    note: {
      heading: '외국기업이 먼저 확인할 4가지',
      items: [
        '한국 법인이나 지사가 없어도 외국법인 명의로 신고할 수 있습니다. 한국 이용자에게 개인위치정보 기반 서비스를 제공하면 적용됩니다.',
        '위치정보법에는 국내대리인 지정 의무가 없습니다. 다만 접수·보완 연락을 위해 국내 대리인을 두는 경우가 많고, 개인정보·전기통신 관련 다른 법률의 국내대리인 기준은 따로 검토합니다.',
        '자국 법인등기 서류는 공증과 아포스티유(또는 영사확인)를 받고 한국어 번역본을 붙입니다. 국가에 따라 준비에 1~4주가 걸립니다.',
        '위치정보를 직접 수집해 제공하는 위치정보사업은 신고가 아니라 등록 대상입니다. 수집 주체인지 활용 주체인지부터 판정합니다.',
      ],
    },
    related: [
      { title: '한국 미등기 외국법인 위치기반서비스사업신고 가이드', href: '/blog/location-based-service-business-registration-foreign-company' },
      { title: '위치기반서비스 사업신고 완벽 가이드 — 내국 법인', href: '/blog/location-based-service-domestic-registration-guide' },
      { title: '위치정보사업 등록과 위치기반서비스사업 신고 차이', href: '/blog/location-information-business-registration' },
      { title: '위치기반서비스사업 변경신고', href: '/blog/location-based-service-change-report' },
      { title: '위치기반서비스 미신고 처벌·휴업 폐업 신고', href: '/blog/location-based-service-fix' },
      { title: '정보통신분야 인허가 — 부가통신사업 신고·기간통신사업 등록', href: '/services/telecom-business' },
    ],
  },
  cosmetics: {
    glance: [
      { label: '대상', value: '화장품을 직접·위탁 제조하는 제조업, 제조를 맡기거나 수입한 화장품을 유통·판매하는 책임판매업, 내용물을 혼합·소분해 판매하는 맞춤형화장품판매업' },
      { label: '요건', value: '책임판매업은 품질관리·책임판매 후 안전관리 기준과 책임판매관리자, 제조업은 시설기준(일부 공정만 제조하면 일부 생략 가능), 공통으로 결격사유가 없을 것' },
      { label: '절차', value: '성분 검토 → 책임판매업 등록 → (직접 제조 시) 제조업 등록 → 기능성화장품 심사·보고 → 안전성 자료 작성·보관 → 표시·광고 점검' },
      { label: '필요서류', value: '등록신청서, 책임판매관리자 자격 확인 서류, 제조업은 시설 명세서, 품질관리 기준 관련 서류, 기능성화장품은 품목별 안전성·유효성 자료' },
      { label: '처리기간', value: '영업 등록은 관할 지방식품의약품안전청 처리, 원료 사용기준 지정·변경 신청은 자료 제출일부터 180일 이내 결과 통지' },
    ],
    stagesHeading: '화장품 인허가 단계별 진행',
    stages: [
      { title: '① 성분 검토', desc: '식품의약품안전처가 고시한 사용할 수 없는 원료가 들어 있는지, 보존제·색소·자외선차단제처럼 사용기준이 정해진 원료가 기준 안에 있는지 확인합니다. 사용기준이 고시되지 않은 보존제·색소·자외선차단제는 쓸 수 없고, 필요하면 사용기준 지정·변경을 신청합니다.' },
      { title: '② 화장품책임판매업 등록', desc: '자기 이름으로 화장품을 유통·판매하려면 책임판매업을 등록합니다. 제조를 위탁하거나 수입한 화장품을 판매하는 경우도 여기에 해당하며, 책임판매관리자를 두고 품질관리·안전관리 기준을 갖춥니다.', href: '/blog/cosmetics-responsible-distributor' },
      { title: '③ 화장품제조업 등록', desc: '직접 제조하거나 제조를 위탁받거나 1차 포장을 하려면 제조업을 등록하고 시설기준을 갖춥니다. 위탁 제조만 하는 브랜드사는 제조업 등록 없이 책임판매업으로 판매할 수 있습니다.', href: '/blog/cosmetics-manufacturing-facility-guide' },
      { title: '④ 기능성화장품 심사·보고', desc: '미백·주름개선·자외선차단 등 기능성화장품으로 판매하려면 품목별로 안전성·유효성 심사를 받거나 보고서를 제출합니다.', href: '/services/functional-cosmetics' },
      { title: '⑤ 안전성 자료 작성', desc: '영유아·어린이용임을 표시·광고하려면 제품별 안전성 자료를 작성·보관합니다. 책임판매업자가 판매 전에 제품별 안전성 평가 자료를 작성해 안전성 평가자의 검토를 받는 화장품 안전성 평가 제도는 2028년 1월 1일부터 업소 규모·제품 구분에 따라 단계적으로 시행됩니다(연 생산·수입액 10억원 미만 업소는 2031년 1월 1일).' },
    ],
    related: [
      { title: '기능성화장품 심사·보고', href: '/services/functional-cosmetics' },
      { title: '화장품 책임판매업 등록 절차 완벽 가이드', href: '/blog/cosmetics-responsible-distributor' },
      { title: '화장품 제조업 등록 방법과 시설기준', href: '/blog/cosmetics-manufacturing-facility-guide' },
      { title: '화장품 수입 판매 등록 — 책임판매관리자 선임, 전성분 표시', href: '/blog/cosmetics-import-sales-registration-guide' },
      { title: '화장품책임판매업 변경등록', href: '/blog/cosmetics-distributor-change-registration' },
      { title: '의약외품 화장품 차이', href: '/blog/quasi-drug-vs-cosmetics-classification' },
    ],
  },
  'health-food': {
    glance: [
      { label: '대상', value: '건강기능식품을 제조(전문·벤처제조업)·판매(일반·유통전문판매업)·수입하거나, 맞춤형건강기능식품을 판매하려는 사업자' },
      { label: '요건', value: '영업별 시설기준, 영업 전 안전위생교육 이수(판매업은 매년), 제조업은 품질관리인 선임과 우수건강기능식품제조기준 적합, 고시되지 않은 원료는 기능성 원료 인정' },
      { label: '절차', value: '제조업: 지방식품의약품안전청 영업허가 → 품목제조신고 / 판매업: 시·군·구 영업신고 / 수입: 지방식품의약품안전청 수입·판매업 영업등록 → 품목별 수입신고' },
      { label: '필요서류', value: '제조업: 제품 종류·제조방법 설명서, 시설 배치도·기계기구 목록, 품질관리인 선임신고서, 기준서 / 판매업: 영업신고서, 교육 이수 증명, 유통전문판매업은 위탁생산계약서 / 외국인은 영사확인·아포스티유 서류' },
      { label: '처리기간', value: '판매업 신고 수리 여부 3일 이내 통지, 품목제조신고 10일 이내 통지(기간 내 통지가 없으면 수리 간주), 수입·판매업 영업등록 3일' },
    ],
    stagesHeading: '영업 유형별 인허가',
    stages: [
      { title: '건강기능식품 판매업 신고', desc: '일반판매업과, 전문제조업자에게 의뢰해 만든 제품을 자기 상표로 파는 유통전문판매업은 영업소마다 시설을 갖추고 관할 시장·군수·구청장에게 신고합니다. 약국에서 파는 경우는 신고 대상이 아닙니다.', href: '/blog/health-functional-food-sales-registration-guide' },
      { title: '건강기능식품 제조업 허가', desc: '건강기능식품전문제조업과 벤처기업이 전문제조업자에게 위탁해 제조하는 벤처제조업은 영업소별로 허가를 받습니다. 허가 뒤 품목마다 제조방법 설명서 등을 붙여 품목제조신고를 합니다.' },
      { title: '건강기능식품 수입', desc: '수입식품등 수입·판매업 영업등록을 하고 품목마다 수입신고와 검사를 거칩니다. 자세한 단계는 아래 본문에 정리했습니다.' },
      { title: '기능성 원료 인정', desc: '식품의약품안전처가 고시하지 않은 원료·성분은 제조업자·수입업자 등이 안전성·기능성 자료를 제출해 건강기능식품 원료로 인정받아야 사용할 수 있습니다.' },
    ],
    related: [
      { title: '건강기능식품 판매업 신고 완벽 가이드', href: '/blog/health-functional-food-sales-registration-guide' },
      { title: '건강기능식품 판매업 신고 요건 — 온라인 판매와 유통전문판매업', href: '/blog/health-functional-food-registration' },
      { title: '건강기능식품 수입 영업등록 취소·수입신고 위반 정리', href: '/blog/health-food-fix' },
      { title: 'HACCP 인증', href: '/services/haccp' },
      { title: '식품제조가공업', href: '/services/food-manufacturing' },
    ],
  },
  factory: {
    glance: [
      { label: '대상', value: '공장건축면적 500제곱미터 이상 공장을 신설·증설하거나 업종을 바꾸는 경우 공장설립등의 승인 대상. 그 미만 공장도 공장등록을 신청할 수 있고, 인허가 의제를 받으려면 승인을 받을 수 있음' },
      { label: '요건', value: '개별입지는 토지 관련 법령의 입지 기준, 산업단지 등 계획입지는 입주계약, 건축물 사용승인과 기계·장치 설치 완료' },
      { label: '절차', value: '입지 검토 → 공장설립등의 승인(또는 입주계약) → 건축·설비 설치 → 완료신고(2개월 이내) → 공장등록대장 등록 → 공장등록증명서 발급' },
      { label: '필요서류', value: '공장설립승인신청서와 첨부서류, 승인서 또는 입주계약서, 완료신고서, 건축물 사용승인서, 제조시설 설치 완료 증명, 사업계획서, 토지·건축물 등기사항증명서·임대차계약서' },
      { label: '처리기간', value: '승인 신청부터 20일 이내(전부 시·군·구 권한이면 14일, 의제처리가 필요 없으면 7일) 결정, 완료신고는 사용승인·설치 완료일부터 2개월 이내, 등록사항 변경은 2개월 이내 변경등록' },
    ],
    note: {
      heading: '공장등록증명서 발급',
      items: [
        '등록된 공장에서 제조업을 하는 자는 시장·군수·구청장 또는 관리기관에 공장등록증명서를, 소유자·점유자 등 이해관계인은 공장등록대장 등본을 신청할 수 있습니다.',
        '공장설립온라인지원시스템을 이용하면 관할 지역 밖 공장의 증명서도 발급받을 수 있습니다.',
      ],
    },
    related: [
      { title: '공장등록 신청 방법과 처리기간', href: '/blog/factory-registration-application-guide' },
      { title: '공장등록 취소 사유·변경등록 누락 과태료 정리', href: '/blog/factory-fix' },
      { title: '공장등록 대행·행정사 선택 기준', href: '/blog/factory-select' },
      { title: '건축물 용도변경', href: '/services/building-usage' },
    ],
  },
}
