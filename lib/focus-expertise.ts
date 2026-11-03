// INHEGA-FOCUS-1103 3차(보스 msg 4803·4805~4808, 2026-11-03) — 중점 필러 '처리하는 업무'·'이런 고객이 맡깁니다'·'용어 설명' 원고 정본(생성물).
// 원고: ~/work/inhega-focus-1103/p3/content/expertise-{ko,en,zh,ja}.json → convert3.py --write. 이 파일을 직접 고치지 말 것.
// 화면에 조문 번호·출처·확인일·가격을 싣지 않는다. 처리 사례는 보스 제공분만(없으면 싣지 않음). 서버 전용.

export interface FocusExpertise {
  services: { name: string; href: string }[]
  clients: string[]
  glossary: { id: string; term: string; def: string }[]
}

export const FOCUS_EXPERTISE: Record<'ko' | 'en' | 'zh' | 'ja', Record<string, FocusExpertise>> = {
  "ko": {
    "nonprofit": {
      "services": [
        {
          "name": "비영리사단법인 설립허가 신청서 작성·제출 대행",
          "href": "#term-np-permit"
        },
        {
          "name": "주무관청 확인과 사전 협의 자료 준비",
          "href": "#term-np-competent-authority"
        },
        {
          "name": "정관 작성(목적·명칭·사무소·자산·이사 임면·사원 자격 등 필요적 기재사항 검토)",
          "href": "#term-np-articles"
        },
        {
          "name": "창립총회 회의록·임원 취임승낙서·설립발기인 인적사항 작성",
          "href": "#term-np-founding-meeting"
        },
        {
          "name": "재산목록·사업계획서·수입지출 예산서 작성",
          "href": "#svc-glance"
        },
        {
          "name": "설립허가 후 출연재산의 법인 이전과 증명서류 제출",
          "href": "#term-np-property-transfer"
        },
        {
          "name": "설립등기 기한 관리와 등기 후 주무관청 보고",
          "href": "#term-np-registration"
        },
        {
          "name": "고유번호증 신청 안내",
          "href": "#term-np-unique-number"
        },
        {
          "name": "정관 변경허가 신청·임원 변경 보고·사업실적 및 사업계획 보고",
          "href": "#term-np-competent-authority"
        },
        {
          "name": "재단법인 설립허가 신청(출연재산 중심 법인)",
          "href": "#term-np-foundation"
        }
      ],
      "clients": [
        "회원끼리 운영하던 동호회·협의회를 법인으로 바꾸려는 운영진",
        "업계 협회·학회·연구회를 새로 세우려는 기업과 전문가 모임",
        "장학·자선·문화 사업을 법인으로 운영하려는 개인과 가족",
        "한국에서 비영리 활동을 하려는 외국인·재외동포 발기인",
        "설립 후 정관 변경·임원 변경 보고를 처리해야 하는 기존 비영리법인"
      ],
      "glossary": [
        {
          "id": "term-np-association",
          "term": "비영리사단법인",
          "def": "학술·종교·자선·기예·사교 등 영리 아닌 사업을 목적으로 모인 사람의 단체가 주무관청의 설립허가를 받고 주된 사무소 소재지에서 설립등기를 하여 성립하는 법인입니다."
        },
        {
          "id": "term-np-competent-authority",
          "term": "주무관청",
          "def": "법인이 하려는 목적 사업을 관장하는 행정기관(중앙행정기관 또는 권한을 위임받은 시·도 등)으로, 설립허가와 설립 후 감독을 맡습니다."
        },
        {
          "id": "term-np-permit",
          "term": "설립허가",
          "def": "주무관청이 목적의 비영리성, 목적 사업을 수행할 재산적 기초와 실현 가능성을 심사해 비영리법인의 설립을 허락하는 행정처분입니다."
        },
        {
          "id": "term-np-articles",
          "term": "정관",
          "def": "법인의 목적·명칭·사무소 소재지·자산에 관한 규정·이사의 임면에 관한 규정·사원 자격의 득실에 관한 규정 등을 적은 법인의 근본 규칙으로, 설립자가 기명날인해 작성합니다."
        },
        {
          "id": "term-np-founding-meeting",
          "term": "창립총회 회의록",
          "def": "설립발기인과 회원이 모여 정관 확정, 임원 선출, 재산 출연, 사업계획을 의결한 내용을 적은 문서로, 설립허가 신청서에 함께 붙입니다."
        },
        {
          "id": "term-np-property-transfer",
          "term": "출연재산 이전",
          "def": "설립허가를 받은 뒤 발기인 등이 내기로 한 재산을 법인 명의로 옮기는 절차로, 부처별 규칙은 허가 후 1개월 이내에 이전하고 증명서류를 주무관청에 내도록 정하고 있습니다."
        },
        {
          "id": "term-np-registration",
          "term": "설립등기",
          "def": "설립허가를 받은 날부터 3주 이내에 주된 사무소 소재지에서 하는 법인 등기로, 이 등기를 마쳐야 법인이 성립합니다."
        },
        {
          "id": "term-np-unique-number",
          "term": "고유번호증",
          "def": "사업자등록 대상이 아닌 비영리법인·단체에 관할 세무서가 부여하는 고유번호를 적은 증명서로, 법인 명의 계좌 개설과 기부금 영수증 발급 등에 쓰입니다."
        },
        {
          "id": "term-np-foundation",
          "term": "재단법인",
          "def": "사람의 모임이 아니라 일정한 목적에 바쳐진 출연재산을 실체로 하는 비영리법인으로, 사원과 총회가 없고 출연자가 정한 정관에 따라 운영됩니다."
        }
      ]
    },
    "telecom-business": {
      "services": [
        {
          "name": "부가통신사업 신고",
          "href": "#term-tel-vas"
        },
        {
          "name": "소규모 부가통신사업 신고 의제 해당 여부 검토",
          "href": "#term-tel-vas-deemed"
        },
        {
          "name": "특수한 유형의 부가통신사업 등록(웹하드·P2P, 문자메시지 발송 중계)",
          "href": "#term-tel-special"
        },
        {
          "name": "기간통신사업 등록",
          "href": "#term-tel-facilities"
        },
        {
          "name": "전기통신역무 구분 판정(기간통신역무·부가통신역무·특수한 유형)",
          "href": "#term-tel-service"
        },
        {
          "name": "이용약관·이용자 보호계획 작성 지원",
          "href": "#term-tel-terms"
        },
        {
          "name": "사업계획서·통신망 구성도·설비 명세 정리",
          "href": "#svc-glance"
        },
        {
          "name": "외국 사업자의 부가통신사업 신고와 국내대리인 지정 검토",
          "href": "#term-tel-domestic-agent"
        },
        {
          "name": "부가통신사업 변경신고·사업 양도·양수 신고·휴업·폐업 신고",
          "href": "#term-tel-vas"
        },
        {
          "name": "소프트웨어사업자 신고(관련 업무)",
          "href": "#term-tel-sw"
        }
      ],
      "clients": [
        "앱·웹 플랫폼을 출시하거나 투자 유치로 자본금이 늘어난 스타트업",
        "대량 문자 발송·웹하드처럼 등록 대상 서비스를 시작하는 사업자",
        "한국 이용자를 대상으로 서비스를 여는 해외 IT 기업",
        "IoT 기기와 앱 서비스를 함께 출시하는 제조·서비스 기업",
        "통신망을 이용한 접속 서비스를 직접 판매하려는 법인"
      ],
      "glossary": [
        {
          "id": "term-tel-service",
          "term": "전기통신역무",
          "def": "전기통신설비를 이용해 타인의 통신을 매개하거나 전기통신설비를 타인의 통신용으로 제공하는 것으로, 기간통신역무와 부가통신역무로 나뉩니다."
        },
        {
          "id": "term-tel-facilities",
          "term": "기간통신사업",
          "def": "전화·인터넷접속처럼 음성·데이터·영상을 내용이나 형태의 변경 없이 송신·수신하게 하는 기간통신역무를 제공하는 사업으로, 과학기술정보통신부장관에게 등록합니다."
        },
        {
          "id": "term-tel-vas",
          "term": "부가통신사업",
          "def": "기간통신역무 외의 전기통신역무(부가통신역무)를 제공하는 사업으로, 앱 마켓·온라인 동영상 서비스·각종 플랫폼이 해당하며 과학기술정보통신부장관에게 신고합니다."
        },
        {
          "id": "term-tel-vas-deemed",
          "term": "부가통신사업 신고 의제",
          "def": "자본금 등이 대통령령으로 정하는 기준에 해당하는 소규모 부가통신사업자와 부가통신사업을 하려는 기간통신사업자는 따로 신고하지 않아도 신고한 것으로 보는 제도입니다."
        },
        {
          "id": "term-tel-special",
          "term": "특수한 유형의 부가통신사업",
          "def": "저작물 등을 전송하는 웹하드·P2P 같은 특수한 유형의 온라인서비스와 문자메시지 발송시스템을 통신설비에 연결해 문자를 발송하는 사업으로, 신고가 아니라 등록 대상입니다."
        },
        {
          "id": "term-tel-domestic-agent",
          "term": "국내대리인",
          "def": "국내에 주소나 영업소가 없는 일정 규모 이상의 부가통신사업자가 이용자 보호 업무 등을 대신하도록 지정하는 국내의 대리인입니다."
        },
        {
          "id": "term-tel-terms",
          "term": "이용약관",
          "def": "전기통신사업자가 제공하는 서비스별 요금과 이용 조건을 정한 약관으로, 기간통신사업 등록 신청 때 이용자 보호계획과 함께 준비합니다."
        },
        {
          "id": "term-tel-sw",
          "term": "소프트웨어사업자 신고",
          "def": "소프트웨어 진흥법에 따라 소프트웨어사업자가 하는 별개의 신고로, 부가통신사업 신고를 대신하지 않습니다."
        }
      ]
    },
    "location-based-service": {
      "services": [
        {
          "name": "위치기반서비스사업 신고",
          "href": "#term-lbs-lbs-business"
        },
        {
          "name": "소상공인·1인 창조기업의 위치기반서비스사업 사후 신고",
          "href": "#term-lbs-small"
        },
        {
          "name": "개인위치정보사업 등록",
          "href": "#term-lbs-personal-business"
        },
        {
          "name": "사물위치정보사업 신고",
          "href": "#term-lbs-object-business"
        },
        {
          "name": "신고·등록 대상 판정(개인위치정보 수집 주체인지 활용 주체인지 구분)",
          "href": "#term-lbs-personal-info"
        },
        {
          "name": "위치정보 관리적·기술적 보호조치 설계와 증명 서류 작성",
          "href": "#term-lbs-protection"
        },
        {
          "name": "위치정보관리책임자 지정과 위치정보 취급·관리 지침 정비",
          "href": "#term-lbs-manager"
        },
        {
          "name": "위치기반서비스 이용약관과 개인위치정보 이용 동의 절차 점검",
          "href": "#term-lbs-personal-info"
        },
        {
          "name": "외국법인 명의 신고 — 법인 서류 공증·아포스티유·한국어 번역 정리",
          "href": "#term-lbs-apostille"
        },
        {
          "name": "위치기반서비스사업 변경신고·휴업·폐업 신고",
          "href": "#term-lbs-lbs-business"
        }
      ],
      "clients": [
        "지도·주변 검색·위치 공유 기능을 넣은 앱을 출시하는 국내 스타트업",
        "한국 법인 없이 한국 이용자에게 위치 기반 앱을 서비스하는 해외 기업",
        "배달·호출·모빌리티처럼 이용자와 기사 위치를 함께 쓰는 플랫폼",
        "어린이·어르신 위치 확인 기기와 앱을 판매하는 제조사",
        "차량·물류·공유 킥보드처럼 사물 위치를 다루는 사업자"
      ],
      "glossary": [
        {
          "id": "term-lbs-act",
          "term": "위치정보법",
          "def": "「위치정보의 보호 및 이용 등에 관한 법률」의 약칭으로, 위치정보사업 등록·신고와 위치기반서비스사업 신고, 개인위치정보 보호 의무를 정한 법률입니다."
        },
        {
          "id": "term-lbs-personal-info",
          "term": "개인위치정보",
          "def": "특정 개인의 위치정보로, 위치정보만으로는 누구인지 알 수 없어도 다른 정보와 쉽게 결합해 특정 개인의 위치를 알 수 있는 것을 포함합니다."
        },
        {
          "id": "term-lbs-lbs-business",
          "term": "위치기반서비스사업",
          "def": "위치정보를 이용한 서비스를 제공하는 사업으로, 개인위치정보를 대상으로 하면 방송미디어통신위원회에 위치기반서비스사업 신고를 합니다."
        },
        {
          "id": "term-lbs-personal-business",
          "term": "개인위치정보사업",
          "def": "개인위치정보를 대상으로 위치정보를 수집해 위치기반서비스사업자에게 제공하는 사업으로, 신고가 아니라 방송미디어통신위원회 등록 대상입니다."
        },
        {
          "id": "term-lbs-object-business",
          "term": "사물위치정보사업",
          "def": "개인위치정보를 대상으로 하지 않는 위치정보사업(차량·물품 등 사물의 위치만 수집·제공)으로, 방송미디어통신위원회에 신고합니다."
        },
        {
          "id": "term-lbs-small",
          "term": "소상공인등의 사후 신고",
          "def": "소상공인이나 1인 창조기업이 위치기반서비스사업을 하는 경우 사업을 시작한 뒤 1개월 이내에 신고할 수 있게 한 특례입니다."
        },
        {
          "id": "term-lbs-protection",
          "term": "위치정보 보호조치",
          "def": "위치정보의 누출·변조·훼손을 막기 위한 관리적 조치(접근권한자 지정, 취급·관리 지침, 내부 점검)와 기술적 조치(접근 통제, 접근 기록 보관, 암호화 등)입니다."
        },
        {
          "id": "term-lbs-manager",
          "term": "위치정보관리책임자",
          "def": "관리적 보호조치의 하나로 위치정보사업자등이 지정하는 위치정보 보호 업무 책임자입니다."
        },
        {
          "id": "term-lbs-apostille",
          "term": "아포스티유",
          "def": "외국 공문서를 협약 가입국에서 영사확인 없이 쓸 수 있도록 발행국 권한기관이 붙이는 확인서로, 외국법인 등기 서류를 한국 관청에 낼 때 공증·번역과 함께 준비합니다."
        }
      ]
    },
    "cosmetics": {
      "services": [
        {
          "name": "화장품책임판매업 등록·변경등록",
          "href": "#term-cos-rs"
        },
        {
          "name": "화장품제조업 등록·변경등록",
          "href": "#term-cos-mfg"
        },
        {
          "name": "맞춤형화장품판매업 신고",
          "href": "#term-cos-custom"
        },
        {
          "name": "기능성화장품 심사·보고",
          "href": "#term-cos-functional"
        },
        {
          "name": "수입화장품 성분·원료 사용기준·표시 사항 검토",
          "href": "#term-cos-use-standard"
        },
        {
          "name": "표준화된 성분명이 없는 원료의 성분명 표준화 신청",
          "href": "#term-cos-inci"
        },
        {
          "name": "CGMP(우수화장품 제조 및 품질관리기준) 적합업소 평가 신청 지원",
          "href": "#term-cos-cgmp"
        },
        {
          "name": "영유아·어린이용 제품 안전성 자료와 화장품 안전성 평가 자료 작성 지원",
          "href": "#term-cos-safety"
        },
        {
          "name": "책임판매관리자 선임과 의무 교육 안내",
          "href": "#term-cos-rsm"
        },
        {
          "name": "등록 후 의무 안내 — 생산·수입실적 보고, 원료 목록 보고, 안전성 정보 보고·회수",
          "href": "#term-cos-report-duties"
        },
        {
          "name": "외국 브랜드의 국내 화장품책임판매업자 등록",
          "href": "#sit-cos-china-brand-no-entity"
        }
      ],
      "clients": [
        "OEM·ODM으로 위탁 생산해 자기 브랜드로 판매하려는 화장품 브랜드사",
        "한국 법인 없이 한국 시장에 진출하려는 해외 화장품 브랜드",
        "해외 화장품을 들여와 판매하려는 수입·유통 회사",
        "직접 제조 시설을 갖추려는 공방·제조사",
        "소분·리필 매장을 열려는 맞춤형화장품 판매자"
      ],
      "glossary": [
        {
          "id": "term-cos-rs",
          "term": "화장품책임판매업",
          "def": "취급하는 화장품의 품질과 안전을 관리하면서 직접·위탁 제조하거나 수입한 화장품을 유통·판매하는 영업으로, 소재지 관할 지방식품의약품안전청에 등록합니다."
        },
        {
          "id": "term-cos-mfg",
          "term": "화장품제조업",
          "def": "화장품의 전부 또는 일부를 제조하는 영업(2차 포장이나 표시만 하는 공정은 제외)으로, 시설기준을 갖춰 지방식품의약품안전청에 등록합니다."
        },
        {
          "id": "term-cos-custom",
          "term": "맞춤형화장품판매업",
          "def": "제조·수입된 화장품의 내용물에 다른 내용물이나 원료를 혼합하거나 내용물을 소분한 맞춤형화장품을 판매하는 영업으로, 맞춤형화장품조제관리사를 두고 신고합니다."
        },
        {
          "id": "term-cos-rsm",
          "term": "책임판매관리자",
          "def": "화장품책임판매업자가 두어야 하는 품질관리와 책임판매 후 안전관리 업무 책임자로, 학력·경력 자격 요건과 정기 교육 의무가 있습니다."
        },
        {
          "id": "term-cos-functional",
          "term": "기능성화장품",
          "def": "미백, 주름 개선, 자외선 차단, 모발 색상 변화, 탈모 증상 완화 등 총리령으로 정한 효능을 표방하는 화장품으로, 품목별로 식품의약품안전처 심사를 받거나 보고서를 냅니다."
        },
        {
          "id": "term-cos-use-standard",
          "term": "원료 사용기준",
          "def": "사용할 수 없는 원료와 보존제·색소·자외선차단제처럼 사용 한도가 정해진 원료에 관한 식품의약품안전처 기준으로, 고시되지 않은 원료는 사용기준 지정·변경을 신청할 수 있습니다."
        },
        {
          "id": "term-cos-inci",
          "term": "표준화된 일반명(성분명)",
          "def": "화장품 포장에 전성분을 표시할 때 쓰는 표준 성분명으로, 성분사전에 없는 원료는 화장품업 단체에 성분명 표준화를 신청해 정합니다."
        },
        {
          "id": "term-cos-cgmp",
          "term": "CGMP(우수화장품 제조 및 품질관리기준)",
          "def": "식품의약품안전처가 고시한 화장품 제조·품질관리 기준으로, 제조업자에게 준수를 권장하고 적합업소로 평가받은 곳에 기술·교육 지원을 할 수 있습니다."
        },
        {
          "id": "term-cos-safety",
          "term": "화장품 안전성 평가",
          "def": "화장품책임판매업자가 판매 전에 제품별 안전성 평가 자료를 작성해 안전성 평가자의 검토를 받는 제도로, 2028년 1월 1일부터 업소 규모와 제품 구분에 따라 단계적으로 시행됩니다."
        },
        {
          "id": "term-cos-report-duties",
          "term": "생산실적·원료 목록 보고",
          "def": "화장품책임판매업자가 지난해 생산·수입실적을 매년 2월 말까지 화장품업 단체를 통해 보고하고, 제조에 사용한 원료 목록을 유통·판매 전까지 보고하는 의무입니다."
        }
      ]
    },
    "health-food": {
      "services": [
        {
          "name": "건강기능식품일반판매업 신고",
          "href": "#term-hf-general"
        },
        {
          "name": "건강기능식품유통전문판매업 신고(자기 상표 위탁 생산 제품)",
          "href": "#term-hf-distribution"
        },
        {
          "name": "맞춤형건강기능식품판매업 신고",
          "href": "#term-hf-custom"
        },
        {
          "name": "건강기능식품전문제조업·벤처제조업 영업허가",
          "href": "#term-hf-mfg"
        },
        {
          "name": "품목제조신고 서류 작성",
          "href": "#term-hf-item-report"
        },
        {
          "name": "품질관리인 선임신고와 우수건강기능식품제조기준 준비 안내",
          "href": "#term-hf-quality-manager"
        },
        {
          "name": "수입식품등 수입·판매업 영업등록",
          "href": "#term-hf-import-reg"
        },
        {
          "name": "개별인정형 기능성 원료 인정 신청 절차 안내",
          "href": "#term-hf-individual"
        },
        {
          "name": "영업 전 안전위생교육 이수 안내",
          "href": "#svc-glance"
        },
        {
          "name": "영업소 이전·대표자 변경 등 변경신고와 폐업 신고",
          "href": "#sit-hf-change-closure"
        }
      ],
      "clients": [
        "온라인 쇼핑몰·스마트스토어에서 건강기능식품을 판매하려는 개인사업자",
        "OEM으로 위탁 생산해 자기 상표로 판매하려는 브랜드사",
        "해외 건강기능식품을 수입해 판매하려는 수입 회사",
        "건강기능식품 제조 시설을 갖추려는 식품 제조사",
        "한국에 판매 거점을 만들려는 외국 건강기능식품 기업"
      ],
      "glossary": [
        {
          "id": "term-hf-hff",
          "term": "건강기능식품",
          "def": "인체에 유용한 기능성을 가진 원료나 성분을 사용해 제조(가공 포함)한 식품으로, 고시된 원료나 개별 인정받은 원료로 만들어야 합니다."
        },
        {
          "id": "term-hf-mfg",
          "term": "건강기능식품제조업",
          "def": "건강기능식품을 제조하는 영업으로 건강기능식품전문제조업과, 벤처기업이 전문제조업자에게 위탁해 제조하는 건강기능식품벤처제조업이 있으며 지방식품의약품안전청의 영업허가를 받습니다."
        },
        {
          "id": "term-hf-general",
          "term": "건강기능식품일반판매업",
          "def": "건강기능식품을 판매하는 영업으로, 영업소 소재지 시장·군수·구청장에게 신고합니다."
        },
        {
          "id": "term-hf-distribution",
          "term": "건강기능식품유통전문판매업",
          "def": "건강기능식품전문제조업자에게 의뢰해 제조한 제품을 자신의 상표로 유통·판매하는 영업으로, 시장·군수·구청장에게 신고합니다."
        },
        {
          "id": "term-hf-custom",
          "term": "맞춤형건강기능식품판매업",
          "def": "제조 또는 수입된 건강기능식품을 개인의 필요에 따라 소분·조합한 맞춤형건강기능식품을 판매하는 영업입니다."
        },
        {
          "id": "term-hf-item-report",
          "term": "품목제조신고",
          "def": "건강기능식품제조업자가 제품을 제조하기 전에 품목마다 제조방법 설명서 등을 붙여 하는 신고입니다."
        },
        {
          "id": "term-hf-quality-manager",
          "term": "품질관리인",
          "def": "건강기능식품제조업자가 두어야 하는 품질관리 책임자로, 선임하거나 바꿀 때 신고합니다."
        },
        {
          "id": "term-hf-gmp",
          "term": "우수건강기능식품제조기준(GMP)",
          "def": "건강기능식품을 제조하는 영업자가 지켜야 하는 우수 건강기능식품 제조 및 품질관리 기준입니다."
        },
        {
          "id": "term-hf-individual",
          "term": "개별인정형 원료",
          "def": "식품의약품안전처장이 고시하지 않은 원료나 성분에 대해 영업자 등이 안전성·기능성 자료를 제출해 건강기능식품 원료로 개별 인정받은 원료입니다."
        },
        {
          "id": "term-hf-import-reg",
          "term": "수입식품등 수입·판매업 영업등록",
          "def": "「수입식품안전관리 특별법」에 따라 건강기능식품 등을 수입해 판매하려는 자가 지방식품의약품안전청에 하는 영업등록으로, 등록 뒤 품목별 수입신고를 합니다."
        }
      ]
    },
    "factory": {
      "services": [
        {
          "name": "공장 입지 검토(용도지역·인허가 의제 대상 확인)",
          "href": "#svc-glance"
        },
        {
          "name": "공장설립등의 승인 신청(신설·증설·업종 변경)",
          "href": "#term-fac-approval"
        },
        {
          "name": "산업단지 입주계약 신청 서류 준비",
          "href": "#term-fac-move-in"
        },
        {
          "name": "공장설립등의 완료신고",
          "href": "#term-fac-completion"
        },
        {
          "name": "공장등록 신청(공장건축면적 500제곱미터 미만 공장·임차 공장 포함)",
          "href": "#term-fac-registration"
        },
        {
          "name": "공장 변경등록(상호·대표자·업종·면적 변경)",
          "href": "#term-fac-change"
        },
        {
          "name": "공장등록증명서·공장등록대장 등본 발급 안내",
          "href": "#term-fac-certificate"
        },
        {
          "name": "외국인투자기업의 공장설립 절차 안내",
          "href": "#sit-fac-foreign-investor"
        },
        {
          "name": "건축물 용도변경 연계 검토",
          "href": "/services/building-usage"
        }
      ],
      "clients": [
        "공장을 새로 짓거나 증설하려는 제조 기업",
        "임대 공장·지식산업센터에서 제조업을 시작하는 중소기업",
        "공장등록증명서가 필요한 정책자금·입찰 준비 기업",
        "한국에 생산 거점을 세우려는 외국인투자기업",
        "상호·업종·면적이 바뀌어 변경등록이 필요한 기존 공장"
      ],
      "glossary": [
        {
          "id": "term-fac-act",
          "term": "산업집적법",
          "def": "「산업집적활성화 및 공장설립에 관한 법률」의 약칭으로, 공장설립등의 승인·완료신고·공장등록과 산업단지 입주를 정한 법률입니다."
        },
        {
          "id": "term-fac-building-area",
          "term": "공장건축면적",
          "def": "제조시설로 쓰는 기계·장치를 설치하기 위한 건축물 각 층의 바닥면적과 제조시설로 쓰는 옥외 공작물의 수평투영면적을 합한 면적으로, 500제곱미터 이상이면 공장설립등의 승인 대상입니다."
        },
        {
          "id": "term-fac-approval",
          "term": "공장설립등의 승인",
          "def": "공장건축면적 500제곱미터 이상 공장을 신설·증설하거나 업종을 바꿀 때 시장·군수·구청장에게 받는 승인으로, 승인과 함께 여러 인허가가 의제 처리될 수 있습니다."
        },
        {
          "id": "term-fac-move-in",
          "term": "입주계약",
          "def": "산업단지에 공장을 세우려는 기업이 관리기관과 맺는 계약으로, 산업단지 안에서는 공장설립등의 승인 대신 입주계약을 거칩니다."
        },
        {
          "id": "term-fac-completion",
          "term": "공장설립등의 완료신고",
          "def": "공장 건축물과 제조시설 설치를 마친 뒤 정해진 기간 안에 시장·군수·구청장(산업단지는 관리기관)에게 하는 신고로, 신고를 받으면 공장등록대장에 등록됩니다."
        },
        {
          "id": "term-fac-registration",
          "term": "공장등록",
          "def": "시장·군수·구청장 또는 관리기관이 공장을 공장등록대장에 올리는 것으로, 공장건축면적 500제곱미터 미만 공장도 소유자나 임차인 등 점유자가 신청할 수 있습니다."
        },
        {
          "id": "term-fac-change",
          "term": "공장 변경등록",
          "def": "공장등록대장에 등록한 사항 중 정해진 사항을 바꾼 경우 2개월 이내에 시장·군수·구청장에게 신청하는 등록입니다."
        },
        {
          "id": "term-fac-certificate",
          "term": "공장등록증명서",
          "def": "등록된 공장에서 제조업을 하는 자가 시장·군수·구청장이나 관리기관, 공장설립온라인지원시스템에서 발급받는 증명서입니다."
        },
        {
          "id": "term-fac-online",
          "term": "공장설립온라인지원시스템",
          "def": "공장설립 승인·등록 민원 신청과 공장등록증명서 발급을 온라인으로 처리하는 정부 시스템으로, 관할 지역 밖 공장의 증명서도 발급받을 수 있습니다."
        }
      ]
    }
  },
  "en": {
    "nonprofit": {
      "services": [
        {
          "name": "Preparation and filing of the establishment permit application for a nonprofit incorporated association (비영리사단법인 설립허가 신청)",
          "href": "#term-np-permit"
        },
        {
          "name": "Identifying the competent ministry (supervising authority) and preparing pre-consultation materials (주무관청 사전 협의)",
          "href": "#term-np-competent-authority"
        },
        {
          "name": "Drafting the articles of incorporation, including review of mandatory items such as purpose, name, office, assets, appointment and dismissal of directors and membership qualifications (정관 작성)",
          "href": "#term-np-articles"
        },
        {
          "name": "Preparing the minutes of the inaugural general meeting, officers' letters of acceptance and founders' personal details (창립총회 회의록·임원 취임승낙서·설립발기인 인적사항)",
          "href": "#term-np-founding-meeting"
        },
        {
          "name": "Preparing the list of assets, business plan and income and expenditure budget (재산목록·사업계획서·수입지출 예산서)",
          "href": "#svc-glance"
        },
        {
          "name": "Transfer of contributed assets to the corporation after the permit and submission of proof (출연재산 이전)",
          "href": "#term-np-property-transfer"
        },
        {
          "name": "Managing the incorporation registration deadline and the post-registration report to the competent ministry (설립등기·주무관청 보고)",
          "href": "#term-np-registration"
        },
        {
          "name": "Guidance on applying for a unique number certificate (고유번호증)",
          "href": "#term-np-unique-number"
        },
        {
          "name": "Applications for permission to amend the articles, officer change reports, and reports on business performance and business plans (정관 변경허가·임원 변경 보고·사업실적 및 사업계획 보고)",
          "href": "#term-np-competent-authority"
        },
        {
          "name": "Establishment permit applications for incorporated foundations, corporations based on contributed assets (재단법인 설립허가 신청)",
          "href": "#term-np-foundation"
        }
      ],
      "clients": [
        "Organisers of member-run clubs or councils that want to become a legal entity",
        "Companies and professionals setting up a new industry association, academic society or research group",
        "Individuals and families who want to run scholarship, charitable or cultural programmes through a corporation",
        "Foreign nationals and overseas Koreans acting as founders of nonprofit activities in Korea",
        "Existing nonprofit corporations that need to handle amendments to their articles or officer change reports after establishment"
      ],
      "glossary": [
        {
          "id": "term-np-association",
          "term": "nonprofit incorporated association (비영리사단법인)",
          "def": "A corporation formed by a group of people for academic, religious, charitable, artistic, social or other non-commercial purposes, which comes into existence once it obtains an establishment permit from the competent ministry and completes incorporation registration at the location of its main office."
        },
        {
          "id": "term-np-competent-authority",
          "term": "competent ministry (supervising authority, 주무관청)",
          "def": "The administrative body that oversees the corporation's intended purpose (a central government agency or a city or province to which the power has been delegated), responsible for the establishment permit and for supervision after establishment."
        },
        {
          "id": "term-np-permit",
          "term": "establishment permit (설립허가)",
          "def": "An administrative disposition by which the competent ministry allows a nonprofit corporation to be established after reviewing whether its purpose is non-commercial and whether it has the financial basis and feasibility to carry out its intended activities."
        },
        {
          "id": "term-np-articles",
          "term": "articles of incorporation (정관)",
          "def": "The basic rules of a corporation, setting out its purpose, name, office location, provisions on assets, provisions on the appointment and dismissal of directors and provisions on gaining and losing membership, which the founders sign and seal."
        },
        {
          "id": "term-np-founding-meeting",
          "term": "minutes of the inaugural general meeting (창립총회 회의록)",
          "def": "A document recording the resolutions passed when the founders and members meet to finalise the articles, elect officers, contribute assets and adopt the business plan, attached to the establishment permit application."
        },
        {
          "id": "term-np-property-transfer",
          "term": "transfer of contributed assets (출연재산 이전)",
          "def": "The procedure of transferring the assets that the founders or others agreed to contribute into the corporation's name after the establishment permit, which ministry rules require to be completed within 1 month of the permit with proof submitted to the competent ministry."
        },
        {
          "id": "term-np-registration",
          "term": "incorporation registration (설립등기)",
          "def": "The corporate registration made at the location of the main office within 3 weeks of the date the establishment permit is granted; the corporation comes into existence only once this registration is complete."
        },
        {
          "id": "term-np-unique-number",
          "term": "unique number certificate (고유번호증)",
          "def": "A certificate showing the unique number that the competent tax office assigns to a nonprofit corporation or organisation not subject to business registration, used for purposes such as opening a bank account in the corporation's name and issuing donation receipts."
        },
        {
          "id": "term-np-foundation",
          "term": "incorporated foundation (재단법인)",
          "def": "A nonprofit corporation whose substance is contributed assets dedicated to a specific purpose rather than a group of people; it has no members or general meeting and is run according to the articles set by the contributor."
        }
      ]
    },
    "telecom-business": {
      "services": [
        {
          "name": "Value-added telecommunications business report (부가통신사업 신고)",
          "href": "#term-tel-vas"
        },
        {
          "name": "Review of whether the deemed report for small value-added telecommunications businesses applies (부가통신사업 신고 의제)",
          "href": "#term-tel-vas-deemed"
        },
        {
          "name": "Special-type value-added telecommunications business registration for webhard and P2P services and text-message relay services (특수한 유형의 부가통신사업 등록)",
          "href": "#term-tel-special"
        },
        {
          "name": "Facilities-based telecommunications business registration (기간통신사업 등록)",
          "href": "#term-tel-facilities"
        },
        {
          "name": "Classification of telecommunications services as facilities-based, value-added or special-type (전기통신역무 구분)",
          "href": "#term-tel-service"
        },
        {
          "name": "Support with drafting terms of service and user protection plans (이용약관·이용자 보호계획)",
          "href": "#term-tel-terms"
        },
        {
          "name": "Preparing the business plan, network configuration diagram and equipment specifications (사업계획서·통신망 구성도·설비 명세)",
          "href": "#svc-glance"
        },
        {
          "name": "Value-added telecommunications business reports by foreign operators and review of domestic agent designation (국내대리인 지정)",
          "href": "#term-tel-domestic-agent"
        },
        {
          "name": "Value-added telecommunications business change reports, business transfer and acquisition reports, and suspension and closure reports (변경신고·양도·양수 신고·휴업·폐업 신고)",
          "href": "#term-tel-vas"
        },
        {
          "name": "Software business operator report as a related filing (소프트웨어사업자 신고)",
          "href": "#term-tel-sw"
        }
      ],
      "clients": [
        "Startups launching an app or web platform, or whose capital has grown through investment",
        "Businesses starting services that require registration, such as bulk text messaging or webhard",
        "Overseas IT companies launching services for users in Korea",
        "Manufacturers and service companies releasing IoT devices together with app services",
        "Corporations that want to sell access services using telecommunications networks directly"
      ],
      "glossary": [
        {
          "id": "term-tel-service",
          "term": "telecommunications service (전기통신역무)",
          "def": "Mediating others' communications using telecommunications facilities, or providing telecommunications facilities for others' communications; it is divided into facilities-based services and value-added services."
        },
        {
          "id": "term-tel-facilities",
          "term": "facilities-based telecommunications business (기간통신사업)",
          "def": "A business providing facilities-based telecommunications services, such as phone and internet access, that let users send and receive voice, data or video without changing its content or form; it is registered with the Minister of Science and ICT."
        },
        {
          "id": "term-tel-vas",
          "term": "value-added telecommunications business (부가통신사업)",
          "def": "A business providing telecommunications services other than facilities-based services (value-added services), including app marketplaces, online video services and various platforms; it is reported to the Minister of Science and ICT."
        },
        {
          "id": "term-tel-vas-deemed",
          "term": "deemed value-added telecommunications business report (부가통신사업 신고 의제)",
          "def": "A rule under which small value-added operators whose capital and other criteria fall within the thresholds set by Presidential Decree, and facilities-based operators that want to run a value-added business, are treated as having reported without filing separately."
        },
        {
          "id": "term-tel-special",
          "term": "special-type value-added telecommunications business (특수한 유형의 부가통신사업)",
          "def": "Special types of online services that transmit copyrighted works, such as webhard and P2P, and businesses that send text messages by connecting a messaging system to telecommunications facilities; these require registration rather than a report."
        },
        {
          "id": "term-tel-domestic-agent",
          "term": "domestic agent (국내대리인)",
          "def": "An agent in Korea whom a value-added operator above a certain size with no address or office in Korea designates to handle user protection and other duties on its behalf."
        },
        {
          "id": "term-tel-terms",
          "term": "terms of service (이용약관)",
          "def": "The terms setting the charges and conditions of use for each service a telecommunications business operator provides, prepared together with the user protection plan when applying for facilities-based telecommunications business registration."
        },
        {
          "id": "term-tel-sw",
          "term": "software business operator report (소프트웨어사업자 신고)",
          "def": "A separate report made by software business operators under the Software Promotion Act (소프트웨어 진흥법), which does not replace the value-added telecommunications business report."
        }
      ]
    },
    "location-based-service": {
      "services": [
        {
          "name": "Location-based service business report (위치기반서비스사업 신고)",
          "href": "#term-lbs-lbs-business"
        },
        {
          "name": "Post-launch location-based service business reports for small business owners and one-person creative companies (소상공인등의 사후 신고)",
          "href": "#term-lbs-small"
        },
        {
          "name": "Personal location information business registration (개인위치정보사업 등록)",
          "href": "#term-lbs-personal-business"
        },
        {
          "name": "Object location information business report (사물위치정보사업 신고)",
          "href": "#term-lbs-object-business"
        },
        {
          "name": "Determining whether a report or registration applies, by distinguishing whether you collect or use personal location information (신고·등록 대상 판정)",
          "href": "#term-lbs-personal-info"
        },
        {
          "name": "Designing administrative and technical location information protection measures and preparing supporting documents (위치정보 보호조치)",
          "href": "#term-lbs-protection"
        },
        {
          "name": "Designating a location information manager and preparing location information handling and management guidelines (위치정보관리책임자 지정)",
          "href": "#term-lbs-manager"
        },
        {
          "name": "Reviewing location-based service terms of service and consent procedures for using personal location information (이용약관·개인위치정보 이용 동의)",
          "href": "#term-lbs-personal-info"
        },
        {
          "name": "Reports filed in a foreign corporation's name, including notarization, apostille and Korean translation of corporate documents (외국법인 명의 신고)",
          "href": "#term-lbs-apostille"
        },
        {
          "name": "Location-based service business change reports, suspension reports and closure reports (변경신고·휴업·폐업 신고)",
          "href": "#term-lbs-lbs-business"
        }
      ],
      "clients": [
        "Korean startups launching apps with maps, nearby search or location-sharing features",
        "Overseas companies serving location-based apps to users in Korea without a Korean entity",
        "Delivery, ride-hailing and mobility platforms that use both user and driver locations",
        "Manufacturers selling location-checking devices and apps for children or older people",
        "Businesses handling object locations, such as vehicles, logistics or shared e-scooters"
      ],
      "glossary": [
        {
          "id": "term-lbs-act",
          "term": "Location Information Act (위치정보법)",
          "def": "The short name of the Act on the Protection, Use, etc. of Location Information (위치정보의 보호 및 이용 등에 관한 법률), which governs registration and reports for location information businesses, reports for location-based service businesses and duties to protect personal location information."
        },
        {
          "id": "term-lbs-personal-info",
          "term": "personal location information (개인위치정보)",
          "def": "Location information about a specific individual, including information that cannot identify the person on its own but can easily be combined with other information to reveal a specific individual's location."
        },
        {
          "id": "term-lbs-lbs-business",
          "term": "location-based service business (위치기반서비스사업)",
          "def": "A business providing services that use location information; where it involves personal location information, a location-based service business report is filed with the Korea Media and Communications Commission (방송미디어통신위원회)."
        },
        {
          "id": "term-lbs-personal-business",
          "term": "personal location information business (개인위치정보사업)",
          "def": "A business that collects personal location information and supplies it to location-based service businesses; it requires registration with the Korea Media and Communications Commission rather than a report."
        },
        {
          "id": "term-lbs-object-business",
          "term": "object location information business (사물위치정보사업)",
          "def": "A location information business that does not involve personal location information (collecting and supplying only the locations of objects such as vehicles and goods), reported to the Korea Media and Communications Commission."
        },
        {
          "id": "term-lbs-small",
          "term": "post-launch report for small business owners (소상공인등의 사후 신고)",
          "def": "A special rule that allows small business owners and one-person creative companies running a location-based service business to file the report within 1 month after starting the business."
        },
        {
          "id": "term-lbs-protection",
          "term": "location information protection measures (위치정보 보호조치)",
          "def": "Administrative measures (designating persons with access rights, handling and management guidelines, internal checks) and technical measures (access control, retention of access records, encryption and others) to prevent location information from being leaked, altered or damaged."
        },
        {
          "id": "term-lbs-manager",
          "term": "location information manager (위치정보관리책임자)",
          "def": "The person responsible for location information protection whom location information businesses and others designate as one of the administrative protection measures."
        },
        {
          "id": "term-lbs-apostille",
          "term": "apostille (아포스티유)",
          "def": "A certificate attached by a competent authority of the issuing country so that a foreign public document can be used in another Convention member country without consular legalization; it is prepared together with notarization and translation when a foreign corporation submits its registration documents to a Korean authority."
        }
      ]
    },
    "cosmetics": {
      "services": [
        {
          "name": "Cosmetics responsible seller registration and change registration (화장품책임판매업 등록·변경등록)",
          "href": "#term-cos-rs"
        },
        {
          "name": "Cosmetics manufacturer registration and change registration (화장품제조업 등록·변경등록)",
          "href": "#term-cos-mfg"
        },
        {
          "name": "Customized cosmetics seller report (맞춤형화장품판매업 신고)",
          "href": "#term-cos-custom"
        },
        {
          "name": "Functional cosmetics review or report (기능성화장품 심사·보고)",
          "href": "#term-cos-functional"
        },
        {
          "name": "Review of ingredients, ingredient use standards and labelling for imported cosmetics (원료 사용기준·표시 사항 검토)",
          "href": "#term-cos-use-standard"
        },
        {
          "name": "Applications to standardise the ingredient name of ingredients without a standardised name (성분명 표준화 신청)",
          "href": "#term-cos-inci"
        },
        {
          "name": "Support with applications for CGMP (Korean cosmetics good manufacturing practice) compliant facility assessment (우수화장품 제조 및 품질관리기준 적합업소 평가)",
          "href": "#term-cos-cgmp"
        },
        {
          "name": "Support with preparing safety data for infant and children's products and cosmetics safety assessment data (화장품 안전성 평가)",
          "href": "#term-cos-safety"
        },
        {
          "name": "Appointment of a responsible sales manager and guidance on mandatory training (책임판매관리자 선임·교육)",
          "href": "#term-cos-rsm"
        },
        {
          "name": "Guidance on post-registration duties: production and import performance reports, ingredient list reports, safety information reports and recalls (생산·수입실적 보고·원료 목록 보고·안전성 정보 보고·회수)",
          "href": "#term-cos-report-duties"
        },
        {
          "name": "Registration of a Korean cosmetics responsible seller for overseas brands (외국 브랜드의 국내 화장품책임판매업자 등록)",
          "href": "#sit-cos-overseas-brand"
        }
      ],
      "clients": [
        "Cosmetics brands that have products made under OEM or ODM contracts and sell them under their own brand",
        "Overseas cosmetics brands entering the Korean market without a Korean entity",
        "Import and distribution companies bringing overseas cosmetics into Korea for sale",
        "Workshops and manufacturers setting up their own manufacturing facilities",
        "Customized cosmetics sellers opening refill or decanting stores"
      ],
      "glossary": [
        {
          "id": "term-cos-rs",
          "term": "cosmetics responsible seller (화장품책임판매업)",
          "def": "A business that manages the quality and safety of the cosmetics it handles while distributing and selling cosmetics it manufactures itself, has manufactured under contract or imports; it is registered with the regional MFDS office (지방식품의약품안전청) for its location."
        },
        {
          "id": "term-cos-mfg",
          "term": "cosmetics manufacturer (화장품제조업)",
          "def": "A business that manufactures all or part of a cosmetic product (excluding processes limited to secondary packaging or labelling), registered with the regional MFDS office once it meets the facility standards."
        },
        {
          "id": "term-cos-custom",
          "term": "customized cosmetics seller (맞춤형화장품판매업)",
          "def": "A business selling customized cosmetics made by mixing other contents or ingredients into the contents of manufactured or imported cosmetics, or by dividing the contents into smaller portions; it is reported with a customized cosmetics compounding manager (맞춤형화장품조제관리사) in place."
        },
        {
          "id": "term-cos-rsm",
          "term": "responsible sales manager (책임판매관리자)",
          "def": "The person a cosmetics responsible seller must appoint to be responsible for quality control and post-market safety management, subject to educational and experience qualifications and a duty of regular training."
        },
        {
          "id": "term-cos-functional",
          "term": "functional cosmetics (기능성화장품)",
          "def": "Cosmetics claiming effects specified by Ordinance of the Prime Minister, such as whitening, wrinkle improvement, UV protection, changing hair colour and relieving hair-loss symptoms; each product is reviewed by the Ministry of Food and Drug Safety (MFDS) or a report is submitted for it."
        },
        {
          "id": "term-cos-use-standard",
          "term": "ingredient use standards (원료 사용기준)",
          "def": "MFDS standards on ingredients that cannot be used and on ingredients with set use limits, such as preservatives, colourants and UV filters; for ingredients not listed in a public notice, an application can be made to set or change a use standard."
        },
        {
          "id": "term-cos-inci",
          "term": "standardised generic (ingredient) name (표준화된 일반명·성분명)",
          "def": "The standard ingredient name used when listing all ingredients on cosmetics packaging; for ingredients not in the ingredient dictionary, the name is set by applying to a cosmetics industry association for ingredient name standardisation."
        },
        {
          "id": "term-cos-cgmp",
          "term": "CGMP (Korean cosmetics good manufacturing practice, 우수화장품 제조 및 품질관리기준)",
          "def": "The cosmetics manufacturing and quality control standards published by MFDS, which manufacturers are encouraged to follow; facilities assessed as compliant may receive technical and training support."
        },
        {
          "id": "term-cos-safety",
          "term": "cosmetics safety assessment (화장품 안전성 평가)",
          "def": "A system under which a cosmetics responsible seller prepares product-level safety assessment data before sale and has it reviewed by a safety assessor, phased in from 1 January 2028 according to business size and product category."
        },
        {
          "id": "term-cos-report-duties",
          "term": "production performance and ingredient list reports (생산실적·원료 목록 보고)",
          "def": "The duties of a cosmetics responsible seller to report the previous year's production and import performance through a cosmetics industry association by the end of February each year, and to report the list of ingredients used in manufacture before distribution and sale."
        }
      ]
    },
    "health-food": {
      "services": [
        {
          "name": "HFF general sales business report (건강기능식품일반판매업 신고)",
          "href": "#term-hf-general"
        },
        {
          "name": "HFF distribution sales business (own-brand) report for products manufactured under contract under your own brand (건강기능식품유통전문판매업 신고)",
          "href": "#term-hf-distribution"
        },
        {
          "name": "Customized HFF sales business report (맞춤형건강기능식품판매업 신고)",
          "href": "#term-hf-custom"
        },
        {
          "name": "Business licences for specialized HFF manufacturing businesses and venture HFF manufacturing businesses (건강기능식품전문제조업·벤처제조업 영업허가)",
          "href": "#term-hf-mfg"
        },
        {
          "name": "Preparing product manufacturing report documents (품목제조신고)",
          "href": "#term-hf-item-report"
        },
        {
          "name": "Quality manager appointment reports and guidance on preparing for HFF GMP (품질관리인 선임신고·우수건강기능식품제조기준)",
          "href": "#term-hf-quality-manager"
        },
        {
          "name": "Imported food import and sales business registration (수입식품등 수입·판매업 영업등록)",
          "href": "#term-hf-import-reg"
        },
        {
          "name": "Guidance on the application procedure for recognition of individually recognized functional ingredients (개별인정형 기능성 원료 인정 신청)",
          "href": "#term-hf-individual"
        },
        {
          "name": "Guidance on completing safety and hygiene training before starting business (영업 전 안전위생교육)",
          "href": "#svc-glance"
        },
        {
          "name": "Change reports, such as relocation of premises or change of representative, and closure reports (변경신고·폐업 신고)",
          "href": "#svc-situations"
        }
      ],
      "clients": [
        "Sole proprietors who want to sell health functional food through online shopping malls or Smart Store",
        "Brands that have products manufactured under OEM contracts and sell them under their own brand",
        "Import companies that want to import and sell overseas health functional food",
        "Food manufacturers setting up health functional food manufacturing facilities",
        "Overseas health functional food companies building a sales base in Korea"
      ],
      "glossary": [
        {
          "id": "term-hf-hff",
          "term": "health functional food (HFF, 건강기능식품)",
          "def": "Food manufactured (including processed) using ingredients or components with functionality useful to the human body, which must be made from ingredients listed in a public notice or individually recognized ingredients."
        },
        {
          "id": "term-hf-mfg",
          "term": "HFF manufacturing business (건강기능식품제조업)",
          "def": "A business that manufactures health functional food, divided into the specialized HFF manufacturing business and the venture HFF manufacturing business, in which a venture company has products manufactured by a specialized manufacturer; both obtain a business licence from the regional MFDS office (지방식품의약품안전청)."
        },
        {
          "id": "term-hf-general",
          "term": "HFF general sales business (건강기능식품일반판매업)",
          "def": "A business that sells health functional food, reported to the city/county/district office (mayor, county head or district head; 시장·군수·구청장) where the premises are located."
        },
        {
          "id": "term-hf-distribution",
          "term": "HFF distribution sales business (own-brand) (건강기능식품유통전문판매업)",
          "def": "A business that distributes and sells, under its own brand, products manufactured at its request by a specialized HFF manufacturing business, reported to the city/county/district office."
        },
        {
          "id": "term-hf-custom",
          "term": "customized HFF sales business (맞춤형건강기능식품판매업)",
          "def": "A business that sells customized health functional food made by dividing or combining manufactured or imported health functional food according to an individual's needs."
        },
        {
          "id": "term-hf-item-report",
          "term": "product manufacturing report (품목제조신고)",
          "def": "A report that an HFF manufacturing business files for each product before manufacturing it, attaching documents such as a description of the manufacturing method."
        },
        {
          "id": "term-hf-quality-manager",
          "term": "quality manager (품질관리인)",
          "def": "The person responsible for quality control whom an HFF manufacturing business must appoint, reported on appointment or replacement."
        },
        {
          "id": "term-hf-gmp",
          "term": "HFF GMP (우수건강기능식품제조기준)",
          "def": "The good manufacturing and quality control standards for health functional food that businesses manufacturing health functional food must follow."
        },
        {
          "id": "term-hf-individual",
          "term": "individually recognized functional ingredient (개별인정형 원료)",
          "def": "An ingredient or component not listed in a public notice by the Minister of Food and Drug Safety that has been individually recognized as a health functional food ingredient after a business operator or other applicant submits safety and functionality data."
        },
        {
          "id": "term-hf-import-reg",
          "term": "imported food import and sales business registration (수입식품등 수입·판매업 영업등록)",
          "def": "The business registration that a person intending to import and sell health functional food and other products files with the regional MFDS office under the Special Act on Imported Food Safety Management (수입식품안전관리 특별법), followed by an import declaration for each product."
        }
      ]
    },
    "factory": {
      "services": [
        {
          "name": "Factory site review, including zoning districts and permits deemed granted with approval (입지 검토·인허가 의제)",
          "href": "#svc-glance"
        },
        {
          "name": "Factory establishment approval applications for new construction, expansion and change of business type (공장설립등의 승인)",
          "href": "#term-fac-approval"
        },
        {
          "name": "Preparing move-in contract applications for industrial complexes (산업단지 입주계약)",
          "href": "#term-fac-move-in"
        },
        {
          "name": "Factory establishment completion reports (공장설립등의 완료신고)",
          "href": "#term-fac-completion"
        },
        {
          "name": "Factory registration applications, including factories with a factory building area under 500 square metres and leased factories (공장등록)",
          "href": "#term-fac-registration"
        },
        {
          "name": "Factory change registration for changes to trade name, representative, business type or area (공장 변경등록)",
          "href": "#term-fac-change"
        },
        {
          "name": "Guidance on obtaining a factory registration certificate and a copy of the factory register (공장등록증명서·공장등록대장 등본)",
          "href": "#term-fac-certificate"
        },
        {
          "name": "Guidance on factory establishment procedures for foreign-invested companies (외국인투자기업 공장설립)",
          "href": "#sit-fac-foreign-investor"
        },
        {
          "name": "Linked review of building use changes (건축물 용도변경)",
          "href": "/en/services/building-usage"
        }
      ],
      "clients": [
        "Manufacturers building a new factory or expanding an existing one",
        "Small and medium-sized companies starting manufacturing in a leased factory or a knowledge industry centre",
        "Companies preparing for policy funding or tenders that need a factory registration certificate",
        "Foreign-invested companies setting up a production base in Korea",
        "Existing factories that need change registration because their trade name, business type or area has changed"
      ],
      "glossary": [
        {
          "id": "term-fac-act",
          "term": "Industrial Cluster Development and Factory Establishment Act (산업집적법)",
          "def": "The Korean short name of the Industrial Cluster Development and Factory Establishment Act (산업집적활성화 및 공장설립에 관한 법률), the act that governs factory establishment approval, completion reports, factory registration and move-in to industrial complexes."
        },
        {
          "id": "term-fac-building-area",
          "term": "factory building area (공장건축면적)",
          "def": "The sum of the floor area of each storey of the buildings in which machinery and equipment used as manufacturing facilities are installed and the horizontal projected area of outdoor structures used as manufacturing facilities; 500 square metres or more requires factory establishment approval."
        },
        {
          "id": "term-fac-approval",
          "term": "factory establishment approval (공장설립등의 승인)",
          "def": "Approval obtained from the city/county/district office (mayor, county head or district head; 시장·군수·구청장) to build, expand or change the business type of a factory with a factory building area of 500 square metres or more; a number of other permits may be deemed granted together with the approval."
        },
        {
          "id": "term-fac-move-in",
          "term": "move-in contract (industrial complex) (입주계약)",
          "def": "A contract that a company intending to build a factory in an industrial complex concludes with the management agency; inside an industrial complex, the move-in contract takes the place of factory establishment approval."
        },
        {
          "id": "term-fac-completion",
          "term": "completion report (공장설립등의 완료신고)",
          "def": "A report filed with the city/county/district office (or the management agency in an industrial complex) within a set period after the factory building and manufacturing facilities are complete; once it is accepted, the factory is entered in the factory register."
        },
        {
          "id": "term-fac-registration",
          "term": "factory registration (공장등록)",
          "def": "The entry of a factory in the factory register by the city/county/district office or the management agency; the owner or occupier (such as a tenant) of a factory with a factory building area under 500 square metres can also apply."
        },
        {
          "id": "term-fac-change",
          "term": "factory change registration (공장 변경등록)",
          "def": "Registration applied for with the city/county/district office within 2 months when specified items entered in the factory register change."
        },
        {
          "id": "term-fac-certificate",
          "term": "factory registration certificate (공장등록증명서)",
          "def": "A certificate that a person carrying on manufacturing in a registered factory obtains from the city/county/district office, the management agency or the Factory-On online support system."
        },
        {
          "id": "term-fac-online",
          "term": "Factory-On online support system (공장설립온라인지원시스템)",
          "def": "A government system that handles factory establishment approval and registration applications and the issue of factory registration certificates online, including certificates for factories outside the local area."
        }
      ]
    }
  },
  "zh": {
    "nonprofit": {
      "services": [
        {
          "name": "代为起草并提交非营利社团法人设立许可申请书（비영리사단법인 설립허가 신청）",
          "href": "#term-np-permit"
        },
        {
          "name": "确认主管部门并准备事前协商资料（주무관청 확인·사전 협의）",
          "href": "#term-np-competent-authority"
        },
        {
          "name": "起草章程，审核目的、名称、事务所、资产、理事任免、会员资格等必要记载事项（정관 작성）",
          "href": "#term-np-articles"
        },
        {
          "name": "制作创立大会会议记录、高管就任承诺书及设立发起人基本信息（창립총회 회의록·임원 취임승낙서·설립발기인 인적사항）",
          "href": "#term-np-founding-meeting"
        },
        {
          "name": "编制财产目录、事业计划书及收支预算书（재산목록·사업계획서·수입지출 예산서）",
          "href": "#svc-glance"
        },
        {
          "name": "设立许可后将出捐财产转移至法人名下并提交证明文件（출연재산 이전·증명서류 제출）",
          "href": "#term-np-property-transfer"
        },
        {
          "name": "设立登记期限管理及登记后向主管部门报告（설립등기 기한 관리·등기 후 보고）",
          "href": "#term-np-registration"
        },
        {
          "name": "固有编号证申请指引（고유번호증 신청 안내）",
          "href": "#term-np-unique-number"
        },
        {
          "name": "章程变更许可申请、高管变更报告、事业实绩及事业计划报告（정관 변경허가·임원 변경 보고·사업실적 및 사업계획 보고）",
          "href": "#term-np-competent-authority"
        },
        {
          "name": "财团法人设立许可申请——以出捐财产为核心的法人（재단법인 설립허가 신청）",
          "href": "#term-np-foundation"
        }
      ],
      "clients": [
        "希望把会员自行运营的兴趣会、协议会改制为法人的运营团队",
        "计划新设行业协会、学会或研究会的企业与专业人士团体",
        "希望以法人形式开展奖学、慈善、文化事业的个人与家族",
        "希望在韩国开展非营利活动的外国人及海外侨胞发起人",
        "设立后需要办理章程变更、高管变更报告的现有非营利法人"
      ],
      "glossary": [
        {
          "id": "term-np-association",
          "term": "非营利社团法人（비영리사단법인）",
          "def": "以学术、宗教、慈善、技艺、社交等非营利事业为目的而集合的人的团体，取得主管部门设立许可并在主事务所所在地办理设立登记后成立的法人。"
        },
        {
          "id": "term-np-competent-authority",
          "term": "主管部门／主务官厅（주무관청）",
          "def": "主管法人拟开展的目的事业的行政机关（中央行政机关或受委托行使权限的市·道等），负责设立许可及设立后的监督。"
        },
        {
          "id": "term-np-permit",
          "term": "设立许可（설립허가）",
          "def": "主管部门审查目的的非营利性、开展目的事业所需的财产基础及其可实现性后，准许设立非营利法人的行政处分。"
        },
        {
          "id": "term-np-articles",
          "term": "章程（정관）",
          "def": "载明法人目的、名称、事务所所在地、资产相关规定、理事任免相关规定、会员资格得失相关规定等事项的法人根本规则，由设立人签名盖章制作。"
        },
        {
          "id": "term-np-founding-meeting",
          "term": "创立大会会议记录（창립총회 회의록）",
          "def": "记录设立发起人与会员集会议决确定章程、选任高管、出捐财产、事业计划等内容的文件，随设立许可申请书一并提交。"
        },
        {
          "id": "term-np-property-transfer",
          "term": "出捐财产转移（출연재산 이전）",
          "def": "取得设立许可后，将发起人等承诺出捐的财产转移至法人名下的程序；各部门规则规定须在许可后1个月内完成转移并向主管部门提交证明文件。"
        },
        {
          "id": "term-np-registration",
          "term": "设立登记（설립등기）",
          "def": "自取得设立许可之日起3周内在主事务所所在地办理的法人登记，完成该登记后法人方告成立。"
        },
        {
          "id": "term-np-unique-number",
          "term": "固有编号证（고유번호증）",
          "def": "辖区税务署向不属于营业登记对象的非营利法人、团体赋予固有编号并出具的证明，用于以法人名义开立账户、开具捐赠收据等。"
        },
        {
          "id": "term-np-foundation",
          "term": "财团法人（재단법인）",
          "def": "不是以人的集合，而是以奉献于特定目的的出捐财产为实体的非营利法人，没有会员与总会，按出捐人制定的章程运营。"
        }
      ]
    },
    "telecom-business": {
      "services": [
        {
          "name": "增值电信业务申报（부가통신사업 신고）",
          "href": "#term-tel-vas"
        },
        {
          "name": "审核是否适用小规模增值电信业务视为申报（소규모 부가통신사업 신고 의제）",
          "href": "#term-tel-vas-deemed"
        },
        {
          "name": "特殊类型增值电信业务登记——网盘·P2P、短信发送中继（특수한 유형의 부가통신사업 등록）",
          "href": "#term-tel-special"
        },
        {
          "name": "基础电信业务登记（기간통신사업 등록）",
          "href": "#term-tel-facilities"
        },
        {
          "name": "电信业务类别判定——基础电信业务、增值电信业务、特殊类型（전기통신역무 구분 판정）",
          "href": "#term-tel-service"
        },
        {
          "name": "协助起草使用条款及用户保护计划（이용약관·이용자 보호계획 작성 지원）",
          "href": "#term-tel-terms"
        },
        {
          "name": "整理事业计划书、通信网络结构图及设备明细（사업계획서·통신망 구성도·설비 명세）",
          "href": "#svc-glance"
        },
        {
          "name": "外国经营者的增值电信业务申报及国内代理人指定审核（외국 사업자의 부가통신사업 신고·국내대리인 지정 검토）",
          "href": "#term-tel-domestic-agent"
        },
        {
          "name": "增值电信业务变更申报、业务转让·受让申报、停业·歇业申报（부가통신사업 변경신고·양도·양수 신고·휴업·폐업 신고）",
          "href": "#term-tel-vas"
        },
        {
          "name": "软件经营者申报（相关业务）（소프트웨어사업자 신고）",
          "href": "#term-tel-sw"
        }
      ],
      "clients": [
        "推出App或网络平台，或因融资导致资本金增加的初创企业",
        "开展短信群发、网盘等须登记服务的经营者",
        "面向韩国用户上线服务的海外IT企业",
        "同时推出IoT设备与App服务的制造及服务企业",
        "拟直接销售利用通信网络的接入服务的法人"
      ],
      "glossary": [
        {
          "id": "term-tel-service",
          "term": "电信业务（전기통신역무）",
          "def": "利用电信设施为他人通信提供媒介，或将电信设施提供给他人用于通信，分为基础电信业务与增值电信业务。"
        },
        {
          "id": "term-tel-facilities",
          "term": "基础电信业务（기간통신사업）",
          "def": "提供电话、互联网接入等不改变内容或形态而收发语音、数据、影像的基础电信服务的业务，须向科学技术信息通信部长官登记。"
        },
        {
          "id": "term-tel-vas",
          "term": "增值电信业务（부가통신사업）",
          "def": "提供基础电信服务以外的电信服务（增值电信服务）的业务，App市场、在线视频服务及各类平台均属此类，须向科学技术信息通信部长官申报。"
        },
        {
          "id": "term-tel-vas-deemed",
          "term": "增值电信业务视为申报（부가통신사업 신고 의제）",
          "def": "资本金等符合总统令规定标准的小规模增值电信经营者，以及拟经营增值电信业务的基础电信经营者，无需另行申报即视为已申报的制度。"
        },
        {
          "id": "term-tel-special",
          "term": "特殊类型增值电信业务（특수한 유형의 부가통신사업）",
          "def": "传输著作物等的网盘、P2P等特殊类型在线服务，以及将短信发送系统接入通信设施发送短信的业务，属于登记对象而非申报对象。"
        },
        {
          "id": "term-tel-domestic-agent",
          "term": "国内代理人（국내대리인）",
          "def": "在韩国境内没有住所或营业所、达到一定规模以上的增值电信经营者，为代为处理用户保护等事务而指定的韩国境内代理人。"
        },
        {
          "id": "term-tel-terms",
          "term": "使用条款（이용약관）",
          "def": "电信经营者就所提供各项服务的资费与使用条件制定的条款，在申请基础电信业务登记时与用户保护计划一并准备。"
        },
        {
          "id": "term-tel-sw",
          "term": "软件经营者申报（소프트웨어사업자 신고）",
          "def": "软件经营者依《软件振兴法》办理的另一项申报，不能代替增值电信业务申报。"
        }
      ]
    },
    "location-based-service": {
      "services": [
        {
          "name": "位置服务事业申报（위치기반서비스사업 신고）",
          "href": "#term-lbs-lbs-business"
        },
        {
          "name": "小商工人·一人创业企业的位置服务事业事后申报（소상공인·1인 창조기업 사후 신고）",
          "href": "#term-lbs-small"
        },
        {
          "name": "个人位置信息事业登记（개인위치정보사업 등록）",
          "href": "#term-lbs-personal-business"
        },
        {
          "name": "物品位置信息事业申报（사물위치정보사업 신고）",
          "href": "#term-lbs-object-business"
        },
        {
          "name": "申报·登记对象判定——区分个人位置信息的采集主体与利用主体（신고·등록 대상 판정）",
          "href": "#term-lbs-personal-info"
        },
        {
          "name": "设计位置信息管理性·技术性保护措施并制作证明材料（위치정보 관리적·기술적 보호조치）",
          "href": "#term-lbs-protection"
        },
        {
          "name": "指定位置信息管理负责人并完善位置信息处理·管理规程（위치정보관리책임자 지정·취급·관리 지침）",
          "href": "#term-lbs-manager"
        },
        {
          "name": "检查位置服务使用条款及个人位置信息使用同意流程（위치기반서비스 이용약관·개인위치정보 이용 동의 절차）",
          "href": "#term-lbs-personal-info"
        },
        {
          "name": "以外国法人名义申报——整理法人文件公证、附加证明书（海牙认证）及韩文翻译（외국법인 명의 신고·공증·아포스티유·번역）",
          "href": "#term-lbs-apostille"
        },
        {
          "name": "位置服务事业变更申报、停业·歇业申报（위치기반서비스사업 변경신고·휴업·폐업 신고）",
          "href": "#term-lbs-lbs-business"
        }
      ],
      "clients": [
        "推出含地图、周边搜索、位置共享功能App的韩国初创企业",
        "未设韩国法人、向韩国用户提供位置类App服务的海外企业",
        "外卖、叫车、出行等同时使用用户与司机位置的平台",
        "销售儿童、老人定位设备及配套App的制造商",
        "车辆、物流、共享电动滑板车等处理物品位置的经营者"
      ],
      "glossary": [
        {
          "id": "term-lbs-act",
          "term": "位置信息法（위치정보법）",
          "def": "《位置信息保护及利用等相关法律》（위치정보의 보호 및 이용 등에 관한 법률）的简称，规定位置信息事业登记·申报、位置服务事业申报以及个人位置信息保护义务的法律。"
        },
        {
          "id": "term-lbs-personal-info",
          "term": "个人位置信息（개인위치정보）",
          "def": "特定个人的位置信息，包括仅凭位置信息无法识别本人、但与其他信息容易结合即可得知特定个人位置的信息。"
        },
        {
          "id": "term-lbs-lbs-business",
          "term": "位置服务事业（위치기반서비스사업）",
          "def": "利用位置信息提供服务的业务；以个人位置信息为对象的，须向放送媒体通信委员会办理位置服务事业申报。"
        },
        {
          "id": "term-lbs-personal-business",
          "term": "个人位置信息事业（개인위치정보사업）",
          "def": "以个人位置信息为对象采集位置信息并提供给位置服务经营者的业务，属于放送媒体通信委员会的登记对象而非申报对象。"
        },
        {
          "id": "term-lbs-object-business",
          "term": "物品位置信息事业（사물위치정보사업）",
          "def": "不以个人位置信息为对象的位置信息事业（仅采集、提供车辆、物品等物品的位置），须向放送媒体通信委员会申报。"
        },
        {
          "id": "term-lbs-small",
          "term": "小商工人等的事后申报（소상공인등의 사후 신고）",
          "def": "小商工人或一人创业企业经营位置服务事业时，可在开业后1个月内申报的特例。"
        },
        {
          "id": "term-lbs-protection",
          "term": "位置信息保护措施（위치정보 보호조치）",
          "def": "为防止位置信息泄露、篡改、毁损而采取的管理性措施（指定访问权限人、处理·管理规程、内部检查）与技术性措施（访问控制、访问记录保存、加密等）。"
        },
        {
          "id": "term-lbs-manager",
          "term": "位置信息管理负责人（위치정보관리책임자）",
          "def": "作为管理性保护措施之一，由位置信息经营者等指定的位置信息保护业务负责人。"
        },
        {
          "id": "term-lbs-apostille",
          "term": "附加证明书／海牙认证（아포스티유）",
          "def": "由文书出具国的主管机关附加的确认书，使外国公文书无需领事认证即可在公约缔约国使用；向韩国机关提交外国法人登记文件时，与公证、翻译一并准备。"
        }
      ]
    },
    "cosmetics": {
      "services": [
        {
          "name": "化妆品责任销售业注册·变更注册（화장품책임판매업 등록·변경등록）",
          "href": "#term-cos-rs"
        },
        {
          "name": "化妆品制造业注册·变更注册（화장품제조업 등록·변경등록）",
          "href": "#term-cos-mfg"
        },
        {
          "name": "定制化妆品销售业申报（맞춤형화장품판매업 신고）",
          "href": "#term-cos-custom"
        },
        {
          "name": "功能性化妆品审查·报告（기능성화장품 심사·보고）",
          "href": "#term-cos-functional"
        },
        {
          "name": "进口化妆品成分、原料使用标准及标示事项审核（수입화장품 성분·원료 사용기준·표시 사항 검토）",
          "href": "#term-cos-use-standard"
        },
        {
          "name": "无标准化成分名的原料申请成分名标准化（성분명 표준화 신청）",
          "href": "#term-cos-inci"
        },
        {
          "name": "协助申请CGMP（优秀化妆品制造及质量管理标准）合格企业评估（CGMP 적합업소 평가 신청）",
          "href": "#term-cos-cgmp"
        },
        {
          "name": "协助编制婴幼儿·儿童用产品安全性资料及化妆品安全性评估资料（영유아·어린이 제품 안전성 자료·화장품 안전성 평가 자료）",
          "href": "#term-cos-safety"
        },
        {
          "name": "责任销售管理人的选任与法定培训指引（책임판매관리자 선임·의무 교육 안내）",
          "href": "#term-cos-rsm"
        },
        {
          "name": "注册后义务指引——生产·进口实绩报告、原料目录报告、安全性信息报告与召回（생산·수입실적 보고·원료 목록 보고·안전성 정보 보고·회수）",
          "href": "#term-cos-report-duties"
        },
        {
          "name": "境外品牌在韩国办理化妆品责任销售业者注册（외국 브랜드의 국내 화장품책임판매업자 등록）",
          "href": "#sit-cos-china-brand-no-entity"
        }
      ],
      "clients": [
        "通过OEM·ODM委托生产、以自有品牌销售的化妆品品牌方",
        "未设韩国法人、希望进入韩国市场的海外化妆品品牌",
        "拟进口并销售海外化妆品的进口·流通企业",
        "拟自建制造设施的工作室与制造企业",
        "拟开设分装·补充装门店的定制化妆品销售者"
      ],
      "glossary": [
        {
          "id": "term-cos-rs",
          "term": "化妆品责任销售业（화장품책임판매업）",
          "def": "负责所经营化妆品的质量与安全管理，并流通、销售自行或委托制造、或进口的化妆品的营业，须向所在地辖区地方食品医药品安全厅注册。"
        },
        {
          "id": "term-cos-mfg",
          "term": "化妆品制造业（화장품제조업）",
          "def": "制造化妆品全部或部分工序的营业（仅做二次包装或标示的工序除外），须具备设施标准后向地方食品医药品安全厅注册。"
        },
        {
          "id": "term-cos-custom",
          "term": "定制化妆品销售业（맞춤형화장품판매업）",
          "def": "销售在已制造、进口的化妆品内容物中混合其他内容物或原料、或将内容物分装而成的定制化妆品的营业，须配备定制化妆品调配管理师后申报。"
        },
        {
          "id": "term-cos-rsm",
          "term": "责任销售管理人（책임판매관리자）",
          "def": "化妆品责任销售业者必须配备的质量管理及上市后安全管理业务负责人，设有学历·经历资格要求和定期培训义务。"
        },
        {
          "id": "term-cos-functional",
          "term": "功能性化妆品（기능성화장품）",
          "def": "宣称美白、改善皱纹、防晒、改变发色、缓解脱发症状等总理令规定功效的化妆品，须按品目接受食品医药品安全处（MFDS）审查或提交报告书。"
        },
        {
          "id": "term-cos-use-standard",
          "term": "原料使用标准（원료 사용기준）",
          "def": "食品医药品安全处（MFDS）就禁用原料以及防腐剂、色素、防晒剂等设有使用限量的原料制定的标准，未公布的原料可申请指定或变更使用标准。"
        },
        {
          "id": "term-cos-inci",
          "term": "标准化通用名（成分名）（표준화된 일반명）",
          "def": "在化妆品包装上标示全成分时使用的标准成分名，成分词典中没有的原料须向化妆品行业团体申请成分名标准化后确定。"
        },
        {
          "id": "term-cos-cgmp",
          "term": "CGMP（优秀化妆品制造及质量管理标准）（우수화장품 제조 및 품질관리기준）",
          "def": "食品医药品安全处（MFDS）公布的化妆品制造及质量管理标准，鼓励制造业者遵守，并可对评定为合格的企业提供技术与培训支持。"
        },
        {
          "id": "term-cos-safety",
          "term": "化妆品安全性评估（화장품 안전성 평가）",
          "def": "化妆品责任销售业者在销售前按产品编制安全性评估资料并接受安全性评估人员审核的制度，自2028年1月1日起按企业规模和产品类别分阶段实施。"
        },
        {
          "id": "term-cos-report-duties",
          "term": "生产实绩·原料目录报告（생산실적·원료 목록 보고）",
          "def": "化妆品责任销售业者每年2月底前通过化妆品行业团体报告上一年度生产·进口实绩，并在流通、销售前报告制造所用原料目录的义务。"
        }
      ]
    },
    "health-food": {
      "services": [
        {
          "name": "健康功能食品一般销售业申报（건강기능식품일반판매업 신고）",
          "href": "#term-hf-general"
        },
        {
          "name": "健康功能食品流通专门销售业申报——自有商标委托生产产品（건강기능식품유통전문판매업 신고）",
          "href": "#term-hf-distribution"
        },
        {
          "name": "定制健康功能食品销售业申报（맞춤형건강기능식품판매업 신고）",
          "href": "#term-hf-custom"
        },
        {
          "name": "健康功能食品专门制造业·风险制造业营业许可（건강기능식품전문제조업·벤처제조업 영업허가）",
          "href": "#term-hf-mfg"
        },
        {
          "name": "品目制造申报材料编制（품목제조신고 서류 작성）",
          "href": "#term-hf-item-report"
        },
        {
          "name": "质量管理人选任申报及优秀健康功能食品制造标准（GMP）准备指引（품질관리인 선임신고·우수건강기능식품제조기준 준비 안내）",
          "href": "#term-hf-quality-manager"
        },
        {
          "name": "进口食品等进口·销售业营业登记（수입식품등 수입·판매업 영업등록）",
          "href": "#term-hf-import-reg"
        },
        {
          "name": "个别认定型功能性原料认定申请程序指引（개별인정형 기능성 원료 인정 신청 절차 안내）",
          "href": "#term-hf-individual"
        },
        {
          "name": "营业前安全卫生教育完成指引（영업 전 안전위생교육 이수 안내）",
          "href": "#svc-glance"
        },
        {
          "name": "营业所迁移、代表人变更等变更申报及歇业申报（영업소 이전·대표자 변경 등 변경신고·폐업 신고）",
          "href": "#svc-situations"
        }
      ],
      "clients": [
        "拟在网店、Smart Store销售健康功能食品的个体经营者",
        "通过OEM委托生产、以自有商标销售的品牌方",
        "拟进口并销售海外健康功能食品的进口企业",
        "拟自建健康功能食品制造设施的食品制造商",
        "拟在韩国建立销售据点的外国健康功能食品企业"
      ],
      "glossary": [
        {
          "id": "term-hf-hff",
          "term": "健康功能食品（건강기능식품）",
          "def": "使用对人体具有有益功能性的原料或成分制造（含加工）的食品，须以已公布的原料或获得个别认定的原料制造。"
        },
        {
          "id": "term-hf-mfg",
          "term": "健康功能食品制造业（건강기능식품제조업）",
          "def": "制造健康功能食品的营业，分为健康功能食品专门制造业，以及风险企业委托专门制造业者制造的健康功能食品风险制造业，须取得地方食品医药品安全厅的营业许可。"
        },
        {
          "id": "term-hf-general",
          "term": "健康功能食品一般销售业（건강기능식품일반판매업）",
          "def": "销售健康功能食品的营业，须向营业所所在地的市长·郡守·区厅长申报。"
        },
        {
          "id": "term-hf-distribution",
          "term": "健康功能食品流通专门销售业（건강기능식품유통전문판매업）",
          "def": "委托健康功能食品专门制造业者制造产品、以自有商标流通销售的营业，须向市长·郡守·区厅长申报。"
        },
        {
          "id": "term-hf-custom",
          "term": "定制健康功能食品销售业（맞춤형건강기능식품판매업）",
          "def": "销售将已制造或进口的健康功能食品按个人需要分装、组合而成的定制健康功能食品的营业。"
        },
        {
          "id": "term-hf-item-report",
          "term": "品目制造申报（품목제조신고）",
          "def": "健康功能食品制造业者在制造产品前，按品目附上制造方法说明书等材料办理的申报。"
        },
        {
          "id": "term-hf-quality-manager",
          "term": "质量管理人（품질관리인）",
          "def": "健康功能食品制造业者必须配备的质量管理负责人，选任或更换时须申报。"
        },
        {
          "id": "term-hf-gmp",
          "term": "优秀健康功能食品制造标准（GMP）（우수건강기능식품제조기준）",
          "def": "制造健康功能食品的营业者应遵守的优秀健康功能食品制造及质量管理标准。"
        },
        {
          "id": "term-hf-individual",
          "term": "个别认定型原料（개별인정형 원료）",
          "def": "对于食品医药品安全处长未公布的原料或成分，由营业者等提交安全性·功能性资料，获个别认定为健康功能食品原料的原料。"
        },
        {
          "id": "term-hf-import-reg",
          "term": "进口食品等进口·销售业营业登记（수입식품등 수입·판매업 영업등록）",
          "def": "依《进口食品安全管理特别法》（수입식품안전관리 특별법），拟进口并销售健康功能食品等的人向地方食品医药品安全厅办理的营业登记，登记后按品目办理进口申报。"
        }
      ]
    },
    "factory": {
      "services": [
        {
          "name": "工厂选址审核——确认用途地区及许可拟制对象（공장 입지 검토·용도지역·인허가 의제 대상 확인）",
          "href": "#svc-glance"
        },
        {
          "name": "工厂设立批准申请——新设、扩建、变更业种（공장설립등의 승인 신청）",
          "href": "#term-fac-approval"
        },
        {
          "name": "准备产业园区入驻合同申请材料（산업단지 입주계약 신청 서류）",
          "href": "#term-fac-move-in"
        },
        {
          "name": "工厂设立完工申报（공장설립등의 완료신고）",
          "href": "#term-fac-completion"
        },
        {
          "name": "工厂登记申请——含工厂建筑面积不足500平方米的工厂及租赁工厂（공장등록 신청）",
          "href": "#term-fac-registration"
        },
        {
          "name": "工厂变更登记——商号、代表人、业种、面积变更（공장 변경등록）",
          "href": "#term-fac-change"
        },
        {
          "name": "工厂登记证明书及工厂登记簿副本领取指引（공장등록증명서·공장등록대장 등본 발급 안내）",
          "href": "#term-fac-certificate"
        },
        {
          "name": "外商投资企业工厂设立程序指引（외국인투자기업의 공장설립 절차 안내）",
          "href": "#sit-fac-foreign-company"
        },
        {
          "name": "建筑物用途变更衔接审核（건축물 용도변경 연계 검토）",
          "href": "/zh/services/building-usage"
        }
      ],
      "clients": [
        "拟新建或扩建工厂的制造企业",
        "在租赁厂房、知识产业中心开始制造业的中小企业",
        "为申请政策资金、参与投标而需要工厂登记证明书的企业",
        "拟在韩国建立生产据点的外商投资企业",
        "因商号、业种、面积变化而需办理变更登记的现有工厂"
      ],
      "glossary": [
        {
          "id": "term-fac-act",
          "term": "产业集聚法（산업집적법）",
          "def": "《产业集聚活性化及工厂设立相关法律》（산업집적활성화 및 공장설립에 관한 법률）的简称，规定工厂设立批准、完工申报、工厂登记及产业园区入驻的法律。"
        },
        {
          "id": "term-fac-building-area",
          "term": "工厂建筑面积（공장건축면적）",
          "def": "为安装用作制造设施的机械、装置而使用的建筑物各层地板面积，与用作制造设施的室外构筑物水平投影面积之和；达到500平方米以上的属于工厂设立批准对象。"
        },
        {
          "id": "term-fac-approval",
          "term": "工厂设立批准（공장설립등의 승인）",
          "def": "新设、扩建工厂建筑面积500平方米以上的工厂或变更业种时，向市长·郡守·区厅长取得的批准，批准时多项许可可一并拟制处理。"
        },
        {
          "id": "term-fac-move-in",
          "term": "入驻合同（입주계약）",
          "def": "拟在产业园区设立工厂的企业与管理机关签订的合同；在产业园区内以入驻合同代替工厂设立批准。"
        },
        {
          "id": "term-fac-completion",
          "term": "完工申报（공장설립등의 완료신고）",
          "def": "完成工厂建筑物建设和制造设施安装后，在规定期限内向市长·郡守·区厅长（产业园区为管理机关）办理的申报，申报受理后即记入工厂登记簿。"
        },
        {
          "id": "term-fac-registration",
          "term": "工厂登记（공장등록）",
          "def": "市长·郡守·区厅长或管理机关将工厂记入工厂登记簿的行为，工厂建筑面积不足500平方米的工厂也可由所有人或承租人等占有人申请。"
        },
        {
          "id": "term-fac-change",
          "term": "工厂变更登记（공장 변경등록）",
          "def": "工厂登记簿所载事项中的规定事项发生变更时，须在2个月内向市长·郡守·区厅长申请的登记。"
        },
        {
          "id": "term-fac-certificate",
          "term": "工厂登记证明书（공장등록증명서）",
          "def": "在已登记工厂从事制造业的人，向市长·郡守·区厅长、管理机关或通过工厂设立在线支援系统领取的证明书。"
        },
        {
          "id": "term-fac-online",
          "term": "工厂设立在线支援系统（공장설립온라인지원시스템）",
          "def": "在线办理工厂设立批准·登记民事申请及工厂登记证明书发放的政府系统，也可领取辖区外工厂的证明书。"
        }
      ]
    }
  },
  "ja": {
    "nonprofit": {
      "services": [
        {
          "name": "非営利社団法人の設立許可申請書の作成・提出代行（비영리사단법인 설립허가）",
          "href": "#term-np-permit"
        },
        {
          "name": "主務官庁の確認と事前協議資料の準備（주무관청）",
          "href": "#term-np-competent-authority"
        },
        {
          "name": "定款の作成（目的・名称・事務所・資産・理事の任免・社員資格などの必要的記載事項の検討）（정관）",
          "href": "#term-np-articles"
        },
        {
          "name": "創立総会議事録・役員就任承諾書・設立発起人の人的事項の作成（창립총회 회의록）",
          "href": "#term-np-founding-meeting"
        },
        {
          "name": "財産目録・事業計画書・収入支出予算書の作成（재산목록·사업계획서·수입지출 예산서）",
          "href": "#svc-glance"
        },
        {
          "name": "設立許可後の出捐財産の法人への移転と証明書類の提出（출연재산 이전）",
          "href": "#term-np-property-transfer"
        },
        {
          "name": "設立登記の期限管理と登記後の主務官庁への報告（설립등기）",
          "href": "#term-np-registration"
        },
        {
          "name": "固有番号証の申請案内（고유번호증）",
          "href": "#term-np-unique-number"
        },
        {
          "name": "定款変更許可申請・役員変更報告・事業実績及び事業計画の報告（정관 변경허가·임원 변경 보고）",
          "href": "#term-np-competent-authority"
        },
        {
          "name": "財団法人の設立許可申請（出捐財産を中心とする法人）（재단법인 설립허가）",
          "href": "#term-np-foundation"
        }
      ],
      "clients": [
        "会員同士で運営してきた同好会・協議会を法人化したい運営陣",
        "業界団体・学会・研究会を新たに設立したい企業や専門家のグループ",
        "奨学・慈善・文化事業を法人として運営したい個人やご家族",
        "韓国で非営利活動を行いたい外国人・在外同胞の発起人",
        "設立後の定款変更・役員変更の報告を処理する必要がある既存の非営利法人"
      ],
      "glossary": [
        {
          "id": "term-np-association",
          "term": "非営利社団法人（비영리사단법인）",
          "def": "学術・宗教・慈善・技芸・社交など営利でない事業を目的として集まった人の団体が、主務官庁の設立許可を受け、主たる事務所の所在地で設立登記をすることで成立する法人です。"
        },
        {
          "id": "term-np-competent-authority",
          "term": "主務官庁（주무관청）",
          "def": "法人が行おうとする目的事業を所管する行政機関（中央行政機関または権限の委任を受けた市・道など）で、設立許可と設立後の監督を担います。"
        },
        {
          "id": "term-np-permit",
          "term": "設立許可（설립허가）",
          "def": "主務官庁が目的の非営利性、目的事業を遂行するための財産的基礎と実現可能性を審査し、非営利法人の設立を認める行政処分です。"
        },
        {
          "id": "term-np-articles",
          "term": "定款（정관）",
          "def": "法人の目的・名称・事務所所在地・資産に関する規定・理事の任免に関する規定・社員資格の得喪に関する規定などを記載した法人の根本規則で、設立者が記名押印して作成します。"
        },
        {
          "id": "term-np-founding-meeting",
          "term": "創立総会議事録（창립총회 회의록）",
          "def": "設立発起人と会員が集まり、定款の確定、役員の選出、財産の出捐、事業計画を議決した内容を記載した文書で、設立許可申請書に添付します。"
        },
        {
          "id": "term-np-property-transfer",
          "term": "出捐財産の移転（출연재산 이전）",
          "def": "設立許可を受けた後、発起人などが拠出することとした財産を法人名義に移す手続きで、各省庁の規則は許可後1か月以内に移転して証明書類を主務官庁に提出するよう定めています。"
        },
        {
          "id": "term-np-registration",
          "term": "設立登記（설립등기）",
          "def": "設立許可を受けた日から3週間以内に主たる事務所の所在地で行う法人登記で、この登記を終えることで法人が成立します。"
        },
        {
          "id": "term-np-unique-number",
          "term": "固有番号証（고유번호증）",
          "def": "事業者登録の対象ではない非営利法人・団体に管轄税務署が付与する固有番号を記載した証明書で、法人名義の口座開設や寄付金領収書の発行などに使われます。"
        },
        {
          "id": "term-np-foundation",
          "term": "財団法人（재단법인）",
          "def": "人の集まりではなく、一定の目的に捧げられた出捐財産を実体とする非営利法人で、社員と総会がなく、出捐者が定めた定款に従って運営されます。"
        }
      ]
    },
    "telecom-business": {
      "services": [
        {
          "name": "付加通信事業の申告（부가통신사업 신고）",
          "href": "#term-tel-vas"
        },
        {
          "name": "小規模付加通信事業のみなし申告への該当性の検討（부가통신사업 신고 의제）",
          "href": "#term-tel-vas-deemed"
        },
        {
          "name": "特殊な類型の付加通信事業の登録（ウェブハード・P2P、SMS送信の中継）（특수한 유형의 부가통신사업 등록）",
          "href": "#term-tel-special"
        },
        {
          "name": "基幹通信事業の登録（기간통신사업 등록）",
          "href": "#term-tel-facilities"
        },
        {
          "name": "電気通信役務の区分判定（基幹通信役務・付加通信役務・特殊な類型）（전기통신역무 구분）",
          "href": "#term-tel-service"
        },
        {
          "name": "利用約款・利用者保護計画の作成支援（이용약관·이용자 보호계획）",
          "href": "#term-tel-terms"
        },
        {
          "name": "事業計画書・通信網構成図・設備明細の整理（사업계획서·통신망 구성도·설비 명세）",
          "href": "#svc-glance"
        },
        {
          "name": "外国事業者の付加通信事業の申告と国内代理人指定の検討（국내대리인 지정）",
          "href": "#term-tel-domestic-agent"
        },
        {
          "name": "付加通信事業の変更申告・事業譲渡・譲受の申告・休業・廃業の申告（변경신고·양도·양수 신고·휴업·폐업 신고）",
          "href": "#term-tel-vas"
        },
        {
          "name": "ソフトウェア事業者の申告（関連業務）（소프트웨어사업자 신고）",
          "href": "#term-tel-sw"
        }
      ],
      "clients": [
        "アプリ・ウェブプラットフォームをリリースする、または資金調達で資本金が増えたスタートアップ",
        "SMSの大量送信やウェブハードなど、登録対象のサービスを始める事業者",
        "韓国の利用者向けにサービスを開始する海外IT企業",
        "IoT機器とアプリサービスをあわせてリリースする製造・サービス企業",
        "通信網を利用した接続サービスを自ら販売したい法人"
      ],
      "glossary": [
        {
          "id": "term-tel-service",
          "term": "電気通信役務（전기통신역무）",
          "def": "電気通信設備を利用して他人の通信を媒介し、または電気通信設備を他人の通信用に提供することで、基幹通信役務と付加通信役務に分かれます。"
        },
        {
          "id": "term-tel-facilities",
          "term": "基幹通信事業（기간통신사업）",
          "def": "電話・インターネット接続のように音声・データ・映像を内容や形態を変更せずに送受信させる基幹通信役務を提供する事業で、科学技術情報通信部（과학기술정보통신부）長官に登録します。"
        },
        {
          "id": "term-tel-vas",
          "term": "付加通信事業（부가통신사업）",
          "def": "基幹通信役務以外の電気通信役務（付加通信役務）を提供する事業で、アプリマーケット・オンライン動画サービス・各種プラットフォームが該当し、科学技術情報通信部長官に申告します。"
        },
        {
          "id": "term-tel-vas-deemed",
          "term": "付加通信事業のみなし申告（부가통신사업 신고 의제）",
          "def": "資本金などが大統領令で定める基準に該当する小規模付加通信事業者と、付加通信事業を行おうとする基幹通信事業者は、別途申告しなくても申告したものとみなす制度です。"
        },
        {
          "id": "term-tel-special",
          "term": "特殊な類型の付加通信事業（특수한 유형의 부가통신사업）",
          "def": "著作物などを送信するウェブハード・P2Pのような特殊な類型のオンラインサービスと、SMS送信システムを通信設備に接続してSMSを送信する事業で、申告ではなく登録の対象です。"
        },
        {
          "id": "term-tel-domestic-agent",
          "term": "国内代理人（국내대리인）",
          "def": "国内に住所や営業所がない一定規模以上の付加通信事業者が、利用者保護業務などを代わりに行わせるために指定する国内の代理人です。"
        },
        {
          "id": "term-tel-terms",
          "term": "利用約款（이용약관）",
          "def": "電気通信事業者が提供するサービスごとの料金と利用条件を定めた約款で、基幹通信事業の登録申請の際に利用者保護計画とともに準備します。"
        },
        {
          "id": "term-tel-sw",
          "term": "ソフトウェア事業者の申告（소프트웨어사업자 신고）",
          "def": "ソフトウェア振興法（소프트웨어 진흥법）に基づいてソフトウェア事業者が行う別個の申告で、付加通信事業の申告に代わるものではありません。"
        }
      ]
    },
    "location-based-service": {
      "services": [
        {
          "name": "位置情報サービス事業の申告（위치기반서비스사업 신고）",
          "href": "#term-lbs-lbs-business"
        },
        {
          "name": "小商工人・1人創造企業による位置情報サービス事業の事後申告（소상공인등의 사후 신고）",
          "href": "#term-lbs-small"
        },
        {
          "name": "個人位置情報事業の登録（개인위치정보사업 등록）",
          "href": "#term-lbs-personal-business"
        },
        {
          "name": "事物位置情報事業の申告（사물위치정보사업 신고）",
          "href": "#term-lbs-object-business"
        },
        {
          "name": "申告・登録対象の判定（個人位置情報を収集する主体か、活用する主体かの区分）（신고·등록 대상 판정）",
          "href": "#term-lbs-personal-info"
        },
        {
          "name": "位置情報の管理的・技術的保護措置の設計と証明書類の作成（위치정보 보호조치）",
          "href": "#term-lbs-protection"
        },
        {
          "name": "位置情報管理責任者の指定と位置情報取扱・管理指針の整備（위치정보관리책임자）",
          "href": "#term-lbs-manager"
        },
        {
          "name": "位置情報サービス利用約款と個人位置情報利用同意手続きの点検（위치기반서비스 이용약관）",
          "href": "#term-lbs-personal-info"
        },
        {
          "name": "外国法人名義での申告 — 法人書類の公証・アポスティーユ・韓国語翻訳の整理（외국법인 명의 신고）",
          "href": "#term-lbs-apostille"
        },
        {
          "name": "位置情報サービス事業の変更申告・休業・廃業の申告（위치기반서비스사업 변경신고·휴업·폐업 신고）",
          "href": "#term-lbs-lbs-business"
        }
      ],
      "clients": [
        "地図・周辺検索・位置共有機能を備えたアプリをリリースする韓国国内のスタートアップ",
        "韓国法人を持たずに韓国の利用者へ位置情報アプリを提供する海外企業",
        "配達・配車・モビリティのように利用者とドライバーの位置をあわせて扱うプラットフォーム",
        "子ども・高齢者の位置確認機器とアプリを販売するメーカー",
        "車両・物流・シェア電動キックボードのように事物の位置を扱う事業者"
      ],
      "glossary": [
        {
          "id": "term-lbs-act",
          "term": "位置情報法（위치정보법）",
          "def": "「位置情報の保護及び利用等に関する法律」（위치정보의 보호 및 이용 등에 관한 법률）の略称で、位置情報事業の登録・申告と位置情報サービス事業の申告、個人位置情報の保護義務を定めた法律です。"
        },
        {
          "id": "term-lbs-personal-info",
          "term": "個人位置情報（개인위치정보）",
          "def": "特定の個人の位置情報で、位置情報だけでは誰か分からなくても、他の情報と容易に結合して特定の個人の位置が分かるものを含みます。"
        },
        {
          "id": "term-lbs-lbs-business",
          "term": "位置情報サービス事業（위치기반서비스사업）",
          "def": "位置情報を利用したサービスを提供する事業で、個人位置情報を対象とする場合は放送メディア通信委員会（방송미디어통신위원회）に位置情報サービス事業の申告を行います。"
        },
        {
          "id": "term-lbs-personal-business",
          "term": "個人位置情報事業（개인위치정보사업）",
          "def": "個人位置情報を対象に位置情報を収集して位置情報サービス事業者に提供する事業で、申告ではなく放送メディア通信委員会への登録の対象です。"
        },
        {
          "id": "term-lbs-object-business",
          "term": "事物位置情報事業（사물위치정보사업）",
          "def": "個人位置情報を対象としない位置情報事業（車両・物品など事物の位置のみを収集・提供）で、放送メディア通信委員会に申告します。"
        },
        {
          "id": "term-lbs-small",
          "term": "小商工人等の事後申告（소상공인등의 사후 신고）",
          "def": "小商工人や1人創造企業が位置情報サービス事業を行う場合に、事業を開始した後1か月以内に申告できるようにした特例です。"
        },
        {
          "id": "term-lbs-protection",
          "term": "位置情報の保護措置（위치정보 보호조치）",
          "def": "位置情報の漏えい・改ざん・毀損を防ぐための管理的措置（アクセス権限者の指定、取扱・管理指針、内部点検）と技術的措置（アクセス制御、アクセス記録の保管、暗号化など）です。"
        },
        {
          "id": "term-lbs-manager",
          "term": "位置情報管理責任者（위치정보관리책임자）",
          "def": "管理的保護措置の一つとして、位置情報事業者等が指定する位置情報保護業務の責任者です。"
        },
        {
          "id": "term-lbs-apostille",
          "term": "アポスティーユ（아포스티유）",
          "def": "外国の公文書を条約加盟国で領事認証なしに使えるよう発行国の権限機関が付す証明書で、外国法人の登記書類を韓国の官庁に提出する際に公証・翻訳とあわせて準備します。"
        }
      ]
    },
    "cosmetics": {
      "services": [
        {
          "name": "化粧品責任販売業の登録・変更登録（화장품책임판매업 등록·변경등록）",
          "href": "#term-cos-rs"
        },
        {
          "name": "化粧品製造業の登録・変更登録（화장품제조업 등록·변경등록）",
          "href": "#term-cos-mfg"
        },
        {
          "name": "オーダーメイド化粧品販売業の申告（맞춤형화장품판매업 신고）",
          "href": "#term-cos-custom"
        },
        {
          "name": "機能性化粧品の審査・報告（기능성화장품 심사·보고）",
          "href": "#term-cos-functional"
        },
        {
          "name": "輸入化粧品の成分・原料使用基準・表示事項の検討（원료 사용기준）",
          "href": "#term-cos-use-standard"
        },
        {
          "name": "標準化された成分名がない原料の成分名標準化申請（성분명 표준화 신청）",
          "href": "#term-cos-inci"
        },
        {
          "name": "CGMP（優秀化粧品製造及び品質管理基準・우수화장품 제조 및 품질관리기준）適合業所評価の申請支援",
          "href": "#term-cos-cgmp"
        },
        {
          "name": "乳幼児・子ども用製品の安全性資料と化粧品安全性評価資料の作成支援（화장품 안전성 평가）",
          "href": "#term-cos-safety"
        },
        {
          "name": "責任販売管理者の選任と受講義務のある教育の案内（책임판매관리자）",
          "href": "#term-cos-rsm"
        },
        {
          "name": "登録後の義務の案内 — 生産・輸入実績報告、原料目録報告、安全性情報の報告・回収（생산실적·원료 목록 보고）",
          "href": "#term-cos-report-duties"
        },
        {
          "name": "海外ブランドの韓国内での化粧品責任販売業者の登録（화장품책임판매업자 등록）",
          "href": "#sit-cos-japan-brand-no-entity"
        }
      ],
      "clients": [
        "OEM・ODMで委託生産し、自社ブランドで販売したい化粧品ブランド企業",
        "韓国法人を持たずに韓国市場へ進出したい海外化粧品ブランド",
        "海外の化粧品を輸入して販売したい輸入・流通会社",
        "自社の製造施設を整えたい工房・メーカー",
        "小分け・リフィル店舗を開きたいオーダーメイド化粧品の販売者"
      ],
      "glossary": [
        {
          "id": "term-cos-rs",
          "term": "化粧品責任販売業（화장품책임판매업）",
          "def": "取り扱う化粧品の品質と安全を管理しながら、直接・委託製造または輸入した化粧品を流通・販売する営業で、所在地を管轄する地方食品医薬品安全庁（지방식품의약품안전청）に登録します。"
        },
        {
          "id": "term-cos-mfg",
          "term": "化粧品製造業（화장품제조업）",
          "def": "化粧品の全部または一部を製造する営業（二次包装や表示のみを行う工程は除く）で、施設基準を備えて地方食品医薬品安全庁に登録します。"
        },
        {
          "id": "term-cos-custom",
          "term": "オーダーメイド化粧品販売業（맞춤형화장품판매업）",
          "def": "製造・輸入された化粧品の内容物に他の内容物や原料を混合し、または内容物を小分けしたオーダーメイド化粧品を販売する営業で、オーダーメイド化粧品調剤管理士（맞춤형화장품조제관리사）を置いて申告します。"
        },
        {
          "id": "term-cos-rsm",
          "term": "責任販売管理者（책임판매관리자）",
          "def": "化粧品責任販売業者が置かなければならない品質管理と責任販売後の安全管理業務の責任者で、学歴・経歴の資格要件と定期教育の義務があります。"
        },
        {
          "id": "term-cos-functional",
          "term": "機能性化粧品（기능성화장품）",
          "def": "美白、シワ改善、紫外線遮断、毛髪の色の変化、脱毛症状の緩和など総理令で定めた効能を標榜する化粧品で、品目ごとに食品医薬品安全処（MFDS）の審査を受けるか報告書を提出します。"
        },
        {
          "id": "term-cos-use-standard",
          "term": "原料使用基準（원료 사용기준）",
          "def": "使用できない原料と、保存剤・色素・紫外線遮断剤のように使用限度が定められた原料に関する食品医薬品安全処の基準で、告示されていない原料は使用基準の指定・変更を申請できます。"
        },
        {
          "id": "term-cos-inci",
          "term": "標準化された一般名・成分名（표준화된 일반명）",
          "def": "化粧品の包装に全成分を表示する際に使う標準成分名で、成分辞典にない原料は化粧品業界団体に成分名の標準化を申請して定めます。"
        },
        {
          "id": "term-cos-cgmp",
          "term": "CGMP（優秀化粧品製造及び品質管理基準・우수화장품 제조 및 품질관리기준）",
          "def": "食品医薬品安全処が告示した化粧品の製造・品質管理の基準で、製造業者に遵守を推奨し、適合業所と評価されたところに技術・教育の支援を行うことができます。"
        },
        {
          "id": "term-cos-safety",
          "term": "化粧品安全性評価（화장품 안전성 평가）",
          "def": "化粧品責任販売業者が販売前に製品ごとの安全性評価資料を作成し、安全性評価者の検討を受ける制度で、2028年1月1日から業所の規模と製品区分に応じて段階的に施行されます。"
        },
        {
          "id": "term-cos-report-duties",
          "term": "生産実績・原料目録の報告（생산실적·원료 목록 보고）",
          "def": "化粧品責任販売業者が前年の生産・輸入実績を毎年2月末までに化粧品業界団体を通じて報告し、製造に使用した原料の目録を流通・販売前までに報告する義務です。"
        }
      ]
    },
    "health-food": {
      "services": [
        {
          "name": "健康機能食品一般販売業の申告（건강기능식품일반판매업 신고）",
          "href": "#term-hf-general"
        },
        {
          "name": "健康機能食品流通専門販売業の申告（自社商標の委託生産製品）（건강기능식품유통전문판매업 신고）",
          "href": "#term-hf-distribution"
        },
        {
          "name": "オーダーメイド健康機能食品販売業の申告（맞춤형건강기능식품판매업 신고）",
          "href": "#term-hf-custom"
        },
        {
          "name": "健康機能食品専門製造業・ベンチャー製造業の営業許可（건강기능식품전문제조업·벤처제조업 영업허가）",
          "href": "#term-hf-mfg"
        },
        {
          "name": "品目製造申告の書類作成（품목제조신고）",
          "href": "#term-hf-item-report"
        },
        {
          "name": "品質管理人の選任申告と優秀健康機能食品製造基準（GMP）の準備案内（품질관리인 선임신고·우수건강기능식품제조기준）",
          "href": "#term-hf-quality-manager"
        },
        {
          "name": "輸入食品等輸入・販売業の営業登録（수입식품등 수입·판매업 영업등록）",
          "href": "#term-hf-import-reg"
        },
        {
          "name": "個別認定型機能性原料の認定申請手続きの案内（개별인정형 원료 인정 신청）",
          "href": "#term-hf-individual"
        },
        {
          "name": "営業前の安全衛生教育の受講案内（영업 전 안전위생교육）",
          "href": "#svc-glance"
        },
        {
          "name": "営業所の移転・代表者の変更などの変更申告と廃業申告（변경신고·폐업 신고）",
          "href": "#svc-situations"
        }
      ],
      "clients": [
        "オンラインショップ・スマートストアで健康機能食品を販売したい個人事業者",
        "OEMで委託生産し、自社商標で販売したいブランド企業",
        "海外の健康機能食品を輸入して販売したい輸入会社",
        "健康機能食品の製造施設を整えたい食品メーカー",
        "韓国に販売拠点を設けたい海外の健康機能食品企業"
      ],
      "glossary": [
        {
          "id": "term-hf-hff",
          "term": "健康機能食品（건강기능식품）",
          "def": "人体に有用な機能性を持つ原料や成分を使用して製造（加工を含む）した食品で、告示された原料または個別に認定を受けた原料で製造しなければなりません。"
        },
        {
          "id": "term-hf-mfg",
          "term": "健康機能食品製造業（건강기능식품제조업）",
          "def": "健康機能食品を製造する営業で、健康機能食品専門製造業と、ベンチャー企業が専門製造業者に委託して製造する健康機能食品ベンチャー製造業があり、地方食品医薬品安全庁（지방식품의약품안전청）の営業許可を受けます。"
        },
        {
          "id": "term-hf-general",
          "term": "健康機能食品一般販売業（건강기능식품일반판매업）",
          "def": "健康機能食品を販売する営業で、営業所所在地の市長・郡守・区庁長（시장·군수·구청장）に申告します。"
        },
        {
          "id": "term-hf-distribution",
          "term": "健康機能食品流通専門販売業（건강기능식품유통전문판매업）",
          "def": "健康機能食品専門製造業者に依頼して製造した製品を自社の商標で流通・販売する営業で、市長・郡守・区庁長に申告します。"
        },
        {
          "id": "term-hf-custom",
          "term": "オーダーメイド健康機能食品販売業（맞춤형건강기능식품판매업）",
          "def": "製造または輸入された健康機能食品を個人の必要に応じて小分け・組み合わせたオーダーメイド健康機能食品を販売する営業です。"
        },
        {
          "id": "term-hf-item-report",
          "term": "品目製造申告（품목제조신고）",
          "def": "健康機能食品製造業者が製品を製造する前に、品目ごとに製造方法説明書などを添付して行う申告です。"
        },
        {
          "id": "term-hf-quality-manager",
          "term": "品質管理人（품질관리인）",
          "def": "健康機能食品製造業者が置かなければならない品質管理の責任者で、選任または変更する際に申告します。"
        },
        {
          "id": "term-hf-gmp",
          "term": "優秀健康機能食品製造基準（GMP・우수건강기능식품제조기준）",
          "def": "健康機能食品を製造する営業者が守らなければならない、優秀健康機能食品の製造及び品質管理の基準です。"
        },
        {
          "id": "term-hf-individual",
          "term": "個別認定型原料（개별인정형 원료）",
          "def": "食品医薬品安全処長が告示していない原料や成分について、営業者などが安全性・機能性の資料を提出し、健康機能食品の原料として個別に認定を受けた原料です。"
        },
        {
          "id": "term-hf-import-reg",
          "term": "輸入食品等輸入・販売業の営業登録（수입식품등 수입·판매업 영업등록）",
          "def": "「輸入食品安全管理特別法」（수입식품안전관리 특별법）に基づき、健康機能食品などを輸入して販売しようとする者が地方食品医薬品安全庁に行う営業登録で、登録後は品目ごとに輸入申告を行います。"
        }
      ]
    },
    "factory": {
      "services": [
        {
          "name": "工場立地の検討（用途地域・許認可みなし対象の確認）（공장 입지 검토·인허가 의제）",
          "href": "#svc-glance"
        },
        {
          "name": "工場設立等の承認申請（新設・増設・業種変更）（공장설립등의 승인）",
          "href": "#term-fac-approval"
        },
        {
          "name": "産業団地の入居契約申請書類の準備（산업단지 입주계약）",
          "href": "#term-fac-move-in"
        },
        {
          "name": "工場設立等の完了申告（공장설립등의 완료신고）",
          "href": "#term-fac-completion"
        },
        {
          "name": "工場登録申請（工場建築面積500平方メートル未満の工場・賃借工場を含む）（공장등록）",
          "href": "#term-fac-registration"
        },
        {
          "name": "工場の変更登録（商号・代表者・業種・面積の変更）（공장 변경등록）",
          "href": "#term-fac-change"
        },
        {
          "name": "工場登録証明書・工場登録台帳謄本の発行案内（공장등록증명서·공장등록대장 등본）",
          "href": "#term-fac-certificate"
        },
        {
          "name": "外国人投資企業の工場設立手続きの案内（외국인투자기업 공장설립）",
          "href": "#sit-fac-japan-company"
        },
        {
          "name": "建築物の用途変更との連携検討（건축물 용도변경）",
          "href": "/ja/services/building-usage"
        }
      ],
      "clients": [
        "工場を新設・増設したい製造企業",
        "賃貸工場・知識産業センターで製造業を始める中小企業",
        "政策資金・入札の準備で工場登録証明書が必要な企業",
        "韓国に生産拠点を設けたい外国人投資企業",
        "商号・業種・面積が変わり変更登録が必要な既存工場"
      ],
      "glossary": [
        {
          "id": "term-fac-act",
          "term": "産業集積法（산업집적법）",
          "def": "「産業集積活性化及び工場設立に関する法律」（산업집적활성화 및 공장설립에 관한 법률）の略称で、工場設立等の承認・完了申告・工場登録と産業団地への入居を定めた法律です。"
        },
        {
          "id": "term-fac-building-area",
          "term": "工場建築面積（공장건축면적）",
          "def": "製造施設として使う機械・装置を設置するための建築物各階の床面積と、製造施設として使う屋外工作物の水平投影面積を合計した面積で、500平方メートル以上であれば工場設立等の承認の対象です。"
        },
        {
          "id": "term-fac-approval",
          "term": "工場設立等の承認（공장설립등의 승인）",
          "def": "工場建築面積500平方メートル以上の工場を新設・増設し、または業種を変更する際に市長・郡守・区庁長（시장·군수·구청장）から受ける承認で、承認とともに複数の許認可がみなし処理されることがあります。"
        },
        {
          "id": "term-fac-move-in",
          "term": "入居契約（입주계약）",
          "def": "産業団地に工場を設立しようとする企業が管理機関と結ぶ契約で、産業団地内では工場設立等の承認の代わりに入居契約を経ます。"
        },
        {
          "id": "term-fac-completion",
          "term": "工場設立等の完了申告（공장설립등의 완료신고）",
          "def": "工場建築物と製造施設の設置を終えた後、定められた期間内に市長・郡守・区庁長（産業団地では管理機関）に行う申告で、申告が受理されると工場登録台帳に登録されます。"
        },
        {
          "id": "term-fac-registration",
          "term": "工場登録（공장등록）",
          "def": "市長・郡守・区庁長または管理機関が工場を工場登録台帳に載せることで、工場建築面積500平方メートル未満の工場も所有者または賃借人などの占有者が申請できます。"
        },
        {
          "id": "term-fac-change",
          "term": "工場の変更登録（공장 변경등록）",
          "def": "工場登録台帳に登録した事項のうち定められた事項を変更した場合に、2か月以内に市長・郡守・区庁長に申請する登録です。"
        },
        {
          "id": "term-fac-certificate",
          "term": "工場登録証明書（공장등록증명서）",
          "def": "登録された工場で製造業を営む者が、市長・郡守・区庁長や管理機関、工場設立オンライン支援システムで発行を受ける証明書です。"
        },
        {
          "id": "term-fac-online",
          "term": "工場設立オンライン支援システム（공장설립온라인지원시스템）",
          "def": "工場設立の承認・登録の申請と工場登録証明書の発行をオンラインで処理する政府のシステムで、管轄地域外の工場の証明書も発行を受けることができます。"
        }
      ]
    }
  }
}
