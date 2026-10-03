// 원고 은행 — inhega-daily
// 주제(풀 18개 중): research-lab(기업부설연구소설립) / 세부주제: documents(구비서류)
//
// 법령 대조(law.go.kr DRF API, OC=test, 2026-10-03 확인):
//   기업부설연구소등의 연구개발 지원에 관한 법률     법률 제21309호(2025. 12. 31. 타법개정), 2026. 2. 1. 시행 (MST 282553)
//     — 제정 법률 제20727호(2025. 1. 31. 공포, 부칙 제1조 "공포 후 1년이 경과한 날부터 시행")
//     제2조, 제7조, 제8조, 제9조, 제10조, 제21조, 제23조, 제27조, 부칙(제20727호) 제4조
//   같은 법 시행령    대통령령 제36055호(2026. 1. 27. 공포), 2026. 2. 1. 시행 (MST 282915)
//     제2조, 제6조, 제7조, 제16조 제1항, 제17조
//   같은 법 시행규칙  과학기술정보통신부령 제163호(2026. 1. 30. 공포), 2026. 2. 1. 시행 (MST 283223)
//     제2조 제2항·제8항, 제3조, 제4조, 제7조 / 별지 제1호~제7호서식(처리기간 10일, 수수료 없음, 작성방법)
//   기업부설연구소와 연구개발전담부서 신고요령  과학기술정보통신부고시 제2026-6호(2026. 1. 30. 발령), 2026. 2. 1. 시행
//     (행정규칙일련번호 2100000273808) 제3조(처리기간), 제4조(보완요구), 제5조 제2항(사후관리 확인서류)
//   기초연구진흥 및 기술개발지원에 관한 법률 (MST 268777) — 제14조의2~제14조의6 "삭제 <2025.1.31>" 확인.
//     같은 법 시행령 (MST 282943) 제16조의2·제16조의3·제17조 "삭제 <2026.1.27>" 확인.
// 즉 2026-10-03 현재 연구소 인정·서류의 근거는 신법(기업부설연구소법)이고, 구법 제14조의2는 현행이 아니다.
// 신청 요건(인원 수·공간 기준)은 corporate-rnd-center-requirements 글 소관이라 서류 판단에 필요한 만큼만 언급했다.
// 우리 서비스 가격·수수료 금액은 한 건도 쓰지 않았다(지침서 X41). 금액은 법 제27조의 법정 과태료 상한뿐.
// 처리기간 10일은 고시 제3조·별지 서식의 법정 표기다(현장조사 기간 불산입 단서 병기).

export default {
  topic: 'research-lab',
  angle: 'documents',
  slug: 'corporate-research-lab-required-documents',
  kind: 'cluster',
  coverImage: '/images/service-research.webp',
  relatedServices: [
    { title: '기업부설연구소 설립', href: '/services/research-lab' },
    { title: '벤처기업 확인', href: '/services/venture-cert' },
    { title: 'R&D 지원사업', href: '/services/rnd-support' },
  ],

  ko: {
    title: '기업부설연구소 설립 서류 — 인정 신청 첨부서류 10종과 각 서류가 증명하는 것',
    category: '기업인증',
    metaTitle: '기업부설연구소 설립 서류 — 인정 신청 첨부서류 총정리',
    metaDescription: '기업부설연구소 인정 신청 서류를 2026년 2월 시행 기업부설연구소법 시행규칙 제3조·제4조 기준으로 정리했습니다. 첨부서류 10종이 각각 무엇을 증명하는지와 보완이 잦은 실수까지 안내합니다.',
    excerpt: '기업부설연구소 인정 신청 서류는 2026년 2월부터 신법 시행규칙이 정합니다. 신청서와 첨부서류 10종, 연구개발전담부서와의 차이, 행정정보 공동이용으로 생략되는 서류, 보완 요구가 잦은 작성 실수를 원문 기준으로 정리했습니다.',
    content: `<div class="toc"><p>목차</p><ol><li>근거 법령 — 서류 규정은 신법으로 옮겨졌다</li><li>신청서에 적는 정보</li><li>첨부서류 목록과 각 서류가 증명하는 것</li><li>연구개발인력 현황 — 연구전담요원을 서류로 증명하는 법</li><li>도면·현판·사진과 연구 기자재 현황</li><li>제출 이후 절차와 보완이 잦은 실수</li><li>자주 묻는 질문</li></ol></div>
<p><strong>기업부설연구소 설립 서류</strong>는 2026년 2월 1일부터 「기업부설연구소등의 연구개발 지원에 관한 법률 시행규칙」 제3조가 정합니다. 기업부설연구소는 인정 신청서에 연구개발활동 개요서, 연구 기자재 현황, 연구개발인력 현황, 조직도, 도면과 사진 등 해당하는 첨부서류(최대 10종)를 붙여 한국산업기술진흥협회에 제출하고, 연구개발전담부서는 같은 규칙 제4조에 따라 최대 6종을 냅니다.<!-- 근거: 기업부설연구소등의 연구개발 지원에 관한 법률 시행규칙 제3조 제1항, 제4조 제1항 (MST 283223) --> 사업자등록증명과 소기업·중기업 증명서류는 신청인이 동의하면 협회가 행정정보 공동이용으로 직접 확인하므로 따로 떼어 낼 필요가 없습니다.<!-- 근거: 같은 규칙 제3조 제2항, 제4조 제2항 --></p>
<p>여기서 기업부설연구소란 기업이 연구개발을 수행하기 위하여 설립·운영하는 부설 연구기관으로서 같은 법 제7조에 따른 인정을 받은 기관을 말하고, 연구개발전담부서는 기업에서 연구개발을 전담하는 부서로서 같은 인정을 받은 부서를 말합니다.<!-- 근거: 기업부설연구소등의 연구개발 지원에 관한 법률 제2조 제1호·제2호 (MST 282553) --> 서류는 단순한 형식이 아니라, 인정기준인 "사람"과 "공간"을 심사기관이 확인하는 유일한 통로입니다.</p>
<p>이 글은 인정 요건 자체가 아니라 그 요건을 무슨 서류로 증명하는지에 집중합니다. 인원 수와 공간 기준은 <a href="/blog/corporate-rnd-center-requirements">기업부설연구소 설립 요건과 인원 기준</a>에서, 제도 전체 흐름은 <a href="/blog/corporate-research-lab-establishment-guide">기업부설연구소 설립 인정 가이드</a>에서 먼저 확인하실 수 있습니다.</p>

<h2>근거 법령 — 서류 규정은 신법으로 옮겨졌다</h2>
<p>예전 안내 글에는 「기초연구진흥 및 기술개발지원에 관한 법률」 제14조의2와 같은 법 시행령 제16조의2를 근거로 적은 것이 많습니다. 현행 원문을 보면 이 조문들은 모두 "삭제"로 표시되어 있습니다.<!-- 근거: 기초연구진흥 및 기술개발지원에 관한 법률 제14조의2 삭제 <2025.1.31> (MST 268777), 같은 법 시행령 제16조의2 삭제 <2026.1.27> (MST 282943) --> 대신 기업부설연구소와 연구개발전담부서만 다루는 별도 법률이 2025년 1월 31일 법률 제20727호로 제정되었고, 공포 후 1년이 지난 2026년 2월 1일부터 시행되고 있습니다.<!-- 근거: 기업부설연구소등의 연구개발 지원에 관한 법률 부칙(법률 제20727호) 제1조 --></p>
<table><thead><tr><th>규범</th><th>번호·시행일</th><th>서류와 관련된 내용</th></tr></thead><tbody>
<tr><td>「기업부설연구소등의 연구개발 지원에 관한 법률」</td><td>법률 제21309호, 2026. 2. 1. 시행<!-- 근거: MST 282553 --></td><td>제7조 인정 신청·인정서 발급, 제10조 부정행위 금지, 제27조 과태료<!-- 근거: 같은 법 제7조, 제10조, 제27조 --></td></tr>
<tr><td>같은 법 시행령</td><td>대통령령 제36055호, 2026. 2. 1. 시행<!-- 근거: MST 282915 --></td><td>제6조 인정기준, 제7조 신청서 기재사항, 제16조 협회 위탁<!-- 근거: 같은 법 시행령 제6조, 제7조, 제16조 --></td></tr>
<tr><td>같은 법 시행규칙</td><td>과학기술정보통신부령 제163호, 2026. 2. 1. 시행<!-- 근거: MST 283223 --></td><td>제3조·제4조 첨부서류, 별지 제1호~제7호서식<!-- 근거: 같은 법 시행규칙 제3조, 제4조, 별지 서식 --></td></tr>
<tr><td>기업부설연구소와 연구개발전담부서 신고요령(고시)</td><td>과학기술정보통신부고시 제2026-6호, 2026. 2. 1. 시행<!-- 근거: 행정규칙일련번호 2100000273808 --></td><td>제3조 처리기간, 제4조 보완요구, 제5조 사후관리 확인서류<!-- 근거: 같은 고시 제3조~제5조 --></td></tr>
</tbody></table>
<div class="highlight-box">「기업부설연구소등의 연구개발 지원에 관한 법률」 제7조 제2항: 제1항에 따른 인정을 받으려는 기업은 대통령령으로 정하는 바에 따라 과학기술정보통신부장관에게 인정을 신청하여야 한다. 제3항: 과학기술정보통신부장관은 기업부설연구소등에 인정서를 발급하여야 한다.<!-- 근거: 기업부설연구소등의 연구개발 지원에 관한 법률 제7조 제2항·제3항 --></div>
<p>법률상 인정권자는 과학기술정보통신부장관이지만, 인정 신청의 접수 처리와 인정, 인정서 발급 업무는 시행령에 따라 한국산업기술진흥협회에 위탁되어 있습니다. 그래서 신청서 서식의 수신처도 "(사)한국산업기술진흥협회 귀하"로 되어 있습니다.<!-- 근거: 같은 법 시행령 제16조 제1항 제4호·제5호, 시행규칙 별지 제1호서식 --> 신법 시행 전에 종전 법률에 따라 인정된 연구소는 신법에 따라 인정받은 것으로 보므로, 이미 인정을 받은 기업이 서류를 새로 낼 필요는 없습니다.<!-- 근거: 같은 법 부칙(법률 제20727호) 제4조 --></p>

<h2>신청서에 적는 정보</h2>
<p>기업부설연구소는 별지 제1호서식, 연구개발전담부서는 별지 제6호서식의 인정 신청서를 씁니다. 시행령은 신청서에 기업 명칭, 대표자, 소재지, 연구 분야, 주요 연구내용, 연구개발인력, 연구시설, 그 밖에 인정에 필요한 사항을 기재하도록 정하고 있습니다.<!-- 근거: 같은 법 시행령 제7조 제1항 제1호~제8호, 시행규칙 제3조 제1항·제4조 제1항 --> 두 서식 모두 처리기간은 10일, 수수료 칸은 "없음"으로 인쇄되어 있습니다.<!-- 근거: 시행규칙 별지 제1호서식·제6호서식 --></p>
<p>서식 뒤쪽의 작성방법에는 심사에서 자주 문제가 되는 기준이 들어 있습니다. 실무에서 틀리기 쉬운 항목만 추리면 다음과 같습니다.</p>
<ul>
<li><strong>업종</strong> — 기업의 주 업종을 한국표준산업분류(KSIC) 코드로 적습니다.<!-- 근거: 시행규칙 별지 제1호서식 작성방법 1 --></li>
<li><strong>매출액·종업원 수</strong> — 매출액은 신청일 기준 최종 결산자료로, 종업원 수는 가장 최근의 상시 종업원 수로 적고 일용직은 제외합니다.<!-- 근거: 시행규칙 별지 제1호서식 작성방법 4·5 --></li>
<li><strong>설립 연월일</strong> — 회사 개업일이 아니라 기업이 자체적으로 연구기관을 설립한 날짜입니다.<!-- 근거: 시행규칙 별지 제1호서식 작성방법 8 --></li>
<li><strong>신청분야</strong> — 과학기술과 서비스 중에서 고르며, 서비스를 고른 기업은 주 업종과 관련된 연구 분야를 선택해야 합니다.<!-- 근거: 시행규칙 별지 제1호서식 작성방법 10·11 --></li>
<li><strong>연구공간</strong> — "건물 전체", "독립공간", "분리구역" 가운데 하나와 소유·임대 여부, 면적을 적습니다.<!-- 근거: 시행규칙 별지 제1호서식 작성방법 15 --></li>
<li><strong>연구개발투자</strong> — 신청한 해부터 향후 1년간의 투자계획을 인건비, 연구시설비, 그 밖의 투자액으로 나눠 적습니다.<!-- 근거: 시행규칙 별지 제1호서식 작성방법 16 --></li>
</ul>
<p>같은 기업이 연구소를 2개 이상 신청한다면 각 연구소의 전문연구 분야(한국표준산업분류에 따른 업종) 또는 주소지가 서로 달라야 합니다. 같은 분야, 같은 주소로 두 번 신청하는 서류는 처음부터 인정 대상이 아닙니다.<!-- 근거: 같은 법 시행령 제6조 제3항 --></p>

<h2>첨부서류 목록과 각 서류가 증명하는 것</h2>
<p>시행규칙이 정한 첨부서류를 기업부설연구소와 연구개발전담부서로 나눠 보면 아래 표와 같습니다. "조건부"는 해당하는 기업만 내는 서류입니다.<!-- 근거: 시행규칙 제3조 제1항 제1호~제10호, 제4조 제1항 --></p>
<table><thead><tr><th>서류</th><th>연구소</th><th>전담부서</th><th>무엇을 증명하나</th></tr></thead><tbody>
<tr><td>연구개발활동 개요서(별지 제2호서식)<!-- 근거: 시행규칙 제3조 제1항 제1호 --></td><td>필수</td><td>필수</td><td>주요 업무, 전문 분야, 신청일부터 1년간 수행할 대표 연구과제<!-- 근거: 시행규칙 별지 제2호서식 --></td></tr>
<tr><td>연구 기자재 현황(별지 제3호서식)<!-- 근거: 시행규칙 제3조 제1항 제2호 --></td><td>필수</td><td>필수</td><td>연구공간 안에서 연구에 직접 쓰는 기계·기구·재료</td></tr>
<tr><td>연구개발인력 현황(별지 제4호서식)<!-- 근거: 시행규칙 제3조 제1항 제3호 --></td><td>필수</td><td>필수</td><td>연구전담요원 수와 자격, 겸직 여부</td></tr>
<tr><td>조직도</td><td>기업 및 연구기관 조직도</td><td>기업 조직도</td><td>연구 조직이 다른 부서와 구분되는 독립 조직인지</td></tr>
<tr><td>층 전체 도면·내부 도면(전용 출입구 현판·내부 사진 포함)</td><td>필수</td><td>필수</td><td>독립된 연구공간의 위치와 경계</td></tr>
<tr><td>안전 관련 예산 명세서<!-- 근거: 시행규칙 제3조 제1항 제6호 --></td><td>조건부(연구전담요원등 10명 이상)<!-- 근거: 시행규칙 제3조 제1항 제6호 --></td><td>해당 없음</td><td>「연구실 안전환경 조성에 관한 법률」 제22조 제2항의 안전 예산 편성</td></tr>
<tr><td>연구실 사고 보험 가입증명서<!-- 근거: 시행규칙 제3조 제1항 제7호 --></td><td>조건부(연구전담요원등 10명 이상)<!-- 근거: 시행규칙 제3조 제1항 제7호 --></td><td>해당 없음</td><td>「연구실 안전환경 조성에 관한 법률」 제26조 제1항의 보험 가입</td></tr>
<tr><td>중소기업 등 기준검토표 또는 부가가치세 신고서<!-- 근거: 시행규칙 제3조 제1항 제8호, 제4조 제1항 제3호 --></td><td>조건부(서비스 분야)</td><td>조건부(서비스 분야)</td><td>인정대상 서비스 분야를 주 업종으로 하는지</td></tr>
<tr><td>연구원·교원 창업기업 증명서류<!-- 근거: 시행규칙 제3조 제1항 제9호 --></td><td>조건부</td><td>해당 없음</td><td>연구전담요원 기준의 특례 대상인지</td></tr>
<tr><td>중견기업 증명서류<!-- 근거: 시행규칙 제3조 제1항 제10호 --></td><td>조건부</td><td>해당 없음</td><td>중견기업 기준이 적용되는지</td></tr>
</tbody></table>
<p>표에서 보듯 전담부서는 연구소보다 서류가 가볍습니다. 공통 3종(개요서·기자재·인력 현황)에 기업 조직도, 도면·사진, 서비스 분야 증빙만 붙이면 됩니다.<!-- 근거: 시행규칙 제4조 제1항 제1호~제3호 --> 두 제도 가운데 무엇을 고를지는 <a href="/blog/rnd-department-vs-center">연구개발전담부서와 기업부설연구소 비교</a>에서 따로 다룹니다.</p>
<p>제출하지 않아도 되는 서류도 있습니다. 협회는 「전자정부법」 제36조 제1항의 행정정보 공동이용으로 사업자등록증명(주민등록번호 제외)과, 소기업 또는 중기업인 경우 그 증명서류를 직접 확인해야 합니다. 신청인이 이 확인에 동의하지 않을 때에만 해당 서류를 직접 내도록 되어 있으므로, 서식 뒤쪽의 행정정보 공동이용 동의서에 서명하는 편이 빠릅니다.<!-- 근거: 시행규칙 제3조 제2항, 제4조 제2항, 별지 제1호서식 행정정보 공동이용 동의서 --></p>

<h2>연구개발인력 현황 — 연구전담요원을 서류로 증명하는 법</h2>
<p>심사의 중심은 별지 제4호서식인 연구개발인력 현황입니다. 연구전담요원, 연구보조원, 연구관리직원을 학위별로 집계하고, 연구원 한 사람마다 직위, 성명, 주민등록번호(외국인은 외국인등록번호), 소속 부서, 최종 학교와 전공, 최종 학위와 학위번호, 병적사항, 발령일, 연구시설 내 근무 여부를 적습니다.<!-- 근거: 시행규칙 별지 제4호서식 --> 작성방법은 연구보조원과 연구관리직원 보유가 필수 요건이 아니라고 명시합니다.<!-- 근거: 시행규칙 별지 제4호서식 작성방법 2·3 --></p>
<p>작성방법 가운데 특히 자주 틀리는 부분은 세 가지입니다. 첫째, 학위번호가 없는 고등학교·전문대 졸업자나 국외 학위자는 졸업연도를 적고, 기능사 이상 국가기술자격자는 학교 칸에 자격 종류, 학위 칸에 자격증번호를 적습니다.<!-- 근거: 시행규칙 별지 제4호서식 작성방법 6 --> 둘째, 발령일은 회사 입사일이 아니라 연구소나 전담부서로 발령받은 날짜입니다.<!-- 근거: 시행규칙 별지 제4호서식 작성방법 8 --> 셋째, 자택 등 연구시설 밖에서 근무하는 사람은 "연구시설 내 근무 여부"에 "부"로 표시해야 합니다.<!-- 근거: 시행규칙 별지 제4호서식 작성방법 10 --></p>
<p>서류상 이름을 올렸다고 모두 연구전담요원이 되는 것은 아닙니다. 시행규칙은 다음 사람을 연구전담요원으로 할 수 없다고 정합니다.<!-- 근거: 시행규칙 제2조 제8항 --></p>
<ol>
<li>건강보험 가입자 명부, 국민연금 사업장가입자 명부, 근로소득 원천징수부 등으로 해당 기업의 직원임을 증명할 수 없는 사람<!-- 근거: 시행규칙 제2조 제8항 제1호 --></li>
<li>대학원 주간 학위과정에서 수학하는 임직원(기업 연구개발과 관련된 박사과정 등 예외 있음)<!-- 근거: 시행규칙 제2조 제8항 제2호 가목 --></li>
<li>연구기관에서 계속하여 6개월 이상 연구개발활동을 수행할 수 없는 사람<!-- 근거: 시행규칙 제2조 제8항 제2호 나목 --></li>
<li>대표자, 감사, 비상임이사 등 직무상 상시 연구개발을 전담할 수 없는 사람(창업일부터 3년이 지나지 않은 소기업의 대표자로서 연구개발 업무를 하는 사람은 제외)<!-- 근거: 시행규칙 제2조 제8항 제2호 다목 --></li>
<li>산업연수를 목적으로 체류하는 산업연수생<!-- 근거: 시행규칙 제2조 제8항 제3호 --></li>
</ol>
<p>첫 번째 항목은 서류 준비와 직결됩니다. 협회는 같은 법 제23조 제1항과 시행령 제17조에 따라 국민건강보험공단, 국민연금공단, 근로복지공단에 사업장 가입 현황 자료를 요청할 수 있으므로, 인력 현황표의 명단과 4대보험 가입 내역이 어긋나면 그대로 드러납니다.<!-- 근거: 같은 법 제23조 제1항, 같은 법 시행령 제17조 제1호~제3호 --> 입사 직후 신청하는 경우에는 가입 신고가 반영되었는지부터 확인하는 것이 안전합니다.</p>
<p>학위증명서는 시행규칙의 첨부서류 목록에 없습니다. 그러나 인정 뒤 사후관리에서 협회는 연구전담요원의 학위증명서 또는 졸업증명서 사본(또는 자격증 사본), 인사발령서류, 연구노트와 연구 보고서 등을 확인할 수 있습니다.<!-- 근거: 기업부설연구소와 연구개발전담부서 신고요령 제5조 제2항 제1호~제3호 --> 따라서 신청 단계부터 인력 현황표에 적은 학위번호와 발령일을 뒷받침하는 원본 자료를 함께 묶어 보관해 두어야 합니다. 인정 이후의 관리 의무는 <a href="/blog/rnd-center-post-management">기업부설연구소 사후관리</a>에서 이어서 볼 수 있습니다.</p>

<h2>도면·현판·사진과 연구 기자재 현황</h2>
<p>연구소는 "기업부설 연구기관이 위치한 층의 전체 도면 및 기업부설 연구기관 내부 도면"을 내되, 전용 출입구 현판과 내부 사진을 포함해야 합니다. 전담부서도 같은 형식의 도면과 사진을 냅니다.<!-- 근거: 시행규칙 제3조 제1항 제5호, 제4조 제1항 제2호 --> 이 서류가 증명하는 것은 연구공간이 고정된 벽체와 별도의 출입문으로 다른 부서와 구분된 독립 공간이라는 점입니다.<!-- 근거: 시행규칙 제2조 제2항 제1호 가목 --></p>
<p>다만 중소기업, 연구개발형 중소기업·벤처기업이 설립한 연구기관, 정보서비스 또는 소프트웨어개발 공급업 기업의 전담부서가 50제곱미터를 초과하는 면적을 확보할 수 없는 경우에는 칸막이 등으로 구분한 공간도 인정됩니다. 환기·소방 등의 사유로 천장까지 막을 수 없을 때에는 바닥에서 2미터 이상의 고정된 벽체와 별도 출입문을 갖추는 방식도 있습니다.<!-- 근거: 시행규칙 제2조 제2항 제1호 가목 1)·2) --> 어느 경우든 도면의 경계선과 사진 속 벽체·출입문·현판이 서로 일치해야 합니다.</p>
<p>건물 자체도 확인 대상입니다. 법은 「건축법」상 단독주택, 공동주택, 허가받지 않은 건물이나 가건물에는 연구소를 설치하지 않도록 정하고 있어, 오피스텔·근린생활시설 등 건축물 용도를 미리 확인해야 합니다.<!-- 근거: 같은 법 제9조 제2호 --> 연구시설은 연구개발활동을 위하여 배타적으로 사용하는 독립된 연구공간과 연구 기자재, 부대시설을 말합니다.<!-- 근거: 같은 법 시행령 제2조 제2호 --></p>
<p>연구 기자재 현황(별지 제3호서식)에는 일련번호, 품명, 수량, 설치 부서·위치를 적습니다. 작성방법은 사무용 책상, 팩스, 전화기, 복사기 같은 사무기기와 서버·허브 등 통신수단, 일반 범용 소프트웨어는 해당하지 않고, 개발툴로 쓰는 전용 프로그램은 포함할 수 있다고 정합니다.<!-- 근거: 시행규칙 별지 제3호서식 작성방법 --> 연구 기자재는 연구공간 안에 위치해야 하므로, 사진에 찍힌 장비와 현황표의 품목도 맞아야 합니다.<!-- 근거: 시행규칙 제2조 제2항 제2호 --></p>

<h2>제출 이후 절차와 보완이 잦은 실수</h2>
<p>서식에 인쇄된 처리 절차는 신청서 작성, 접수, 검토(필요하면 현지 확인), 결재, 인정, 인정서 발급 순서입니다.<!-- 근거: 시행규칙 별지 제1호서식 신청서류 처리절차 --> 고시는 관련 서류를 접수한 날부터 10일 이내 처리를 원칙으로 하면서, 현장조사에 걸리는 기간은 처리기간에 넣지 않는다고 정합니다. 실제 소요 기간은 서류 상태와 현장조사 여부에 따라 달라집니다.<!-- 근거: 기업부설연구소와 연구개발전담부서 신고요령 제3조 --></p>
<p>인정 신청을 하면 같은 법 제21조의 현장조사 대상이 될 수 있고, 현장조사는 원칙적으로 조사 개시 7일 전까지 조사목적·기간·제출자료 등을 적은 현장출입조사서로 서면 통지됩니다.<!-- 근거: 같은 법 제21조 제1항 제1호·제2항 --> 서류가 미비하면 협회장은 기한을 정해 시정·보완을 요구하고, 그 기한까지 보완하지 않으면 서류를 반려할 수 있습니다.<!-- 근거: 기업부설연구소와 연구개발전담부서 신고요령 제4조 --> 인정되면 연구소는 별지 제5호서식, 전담부서는 별지 제7호서식의 인정서를 받습니다.<!-- 근거: 시행규칙 제3조 제3항, 제4조 제3항 --></p>
<p>보완 요구가 잦은 실수는 대체로 서류 사이의 불일치에서 나옵니다.</p>
<ul>
<li>인력 현황표의 연구전담요원이 영업·생산 업무를 겸하고 있는데 조직도에는 연구소 소속으로만 표시한 경우<!-- 근거: 같은 법 제9조 제1호, 시행령 제2조 제3호 --></li>
<li>발령일 칸에 입사일을 적어 연구소 설립일보다 앞선 날짜가 들어간 경우<!-- 근거: 시행규칙 별지 제4호서식 작성방법 8 --></li>
<li>도면에는 독립공간으로 그렸는데 사진에는 칸막이만 보이거나 현판이 없는 경우<!-- 근거: 시행규칙 제3조 제1항 제5호, 제2조 제2항 제1호 --></li>
<li>연구 기자재 현황에 복사기·사무용 PC·범용 소프트웨어만 적은 경우<!-- 근거: 시행규칙 별지 제3호서식 작성방법 --></li>
<li>서비스 분야로 신청하면서 중소기업 등 기준검토표나 부가가치세 신고서를 빠뜨린 경우<!-- 근거: 시행규칙 제3조 제1항 제8호 --></li>
</ul>
<p>서류를 사실과 다르게 꾸미는 것은 실수와 다르게 취급됩니다. 거짓이나 부정한 방법으로 인정을 받으면 같은 법 제8조에 따라 인정이 반드시 취소되고, 취소된 날부터 1년이 지날 때까지 다시 신청할 수 없습니다.<!-- 근거: 같은 법 제8조 제1항 제1호 단서, 제4항 --> 인정을 받은 자와 이를 도와준 자 모두 500만원 이하의 과태료 대상입니다.<!-- 근거: 같은 법 제10조 제1호·제2호, 제27조 제1항 제1호·제2호 --> 인정 후 명칭·소재지·연구 분야·연구개발인력 등이 바뀌면 사유 발생일부터 30일 이내에 변경신고서를 내야 하므로, 신청 서류 사본은 변경신고의 기준 자료로도 쓰입니다.<!-- 근거: 같은 법 제7조 제4항, 시행령 제7조 제2항, 시행규칙 제5조 --></p>
<p>정리하면, 서류 준비의 핵심은 장수가 아니라 신청서·인력 현황·조직도·도면·사진이 같은 사실을 가리키도록 맞추는 데 있습니다. 서류 점검과 신청 준비는 <a href="/services/research-lab">기업부설연구소 설립</a> 안내에서 확인하실 수 있습니다. 법령 원문은 <a href="https://www.law.go.kr/법령/기업부설연구소등의연구개발지원에관한법률" target="_blank" rel="noopener">기업부설연구소등의 연구개발 지원에 관한 법률</a>, <a href="https://www.law.go.kr/법령/기업부설연구소등의연구개발지원에관한법률시행령" target="_blank" rel="noopener">같은 법 시행령</a>, <a href="https://www.law.go.kr/법령/기업부설연구소등의연구개발지원에관한법률시행규칙" target="_blank" rel="noopener">같은 법 시행규칙</a>에서 볼 수 있습니다. 비용은 사례별로 상이하므로 무료 상담 시 정확히 안내드립니다.</p>

<div class="faq-section"><h2>자주 묻는 질문 (FAQ)</h2>
<div class="faq-item"><p class="faq-q">Q. 기업부설연구소 인정 신청에 학위증명서를 꼭 첨부해야 하나요?</p><p class="faq-a">A. 시행규칙 제3조 제1항의 첨부서류 목록에는 학위증명서가 없습니다. 다만 별지 제4호서식에 최종 학위와 학위번호를 적어야 하고, 신고요령 제5조 제2항에 따라 사후관리 때 학위증명서·졸업증명서 사본이나 자격증 사본을 확인할 수 있으므로 원본 자료를 보관해 두어야 합니다.</p></div>
<div class="faq-item"><p class="faq-q">Q. 사업자등록증 사본도 내야 하나요?</p><p class="faq-a">A. 동의하면 내지 않아도 됩니다. 시행규칙 제3조 제2항에 따라 한국산업기술진흥협회가 행정정보 공동이용으로 사업자등록증명과 소기업·중기업 증명서류를 확인하고, 신청인이 동의하지 않을 때에만 직접 제출합니다.</p></div>
<div class="faq-item"><p class="faq-q">Q. 안전 관련 예산 명세서와 보험 가입증명서는 누구나 내나요?</p><p class="faq-a">A. 아닙니다. 시행규칙 제3조 제1항 제6호·제7호에 따라 연구전담요원과 연구보조원 총수가 10명 이상인 기업부설 연구기관만 냅니다. 연구개발전담부서 신청에는 이 두 서류가 목록에 없습니다.<!-- 근거: 시행규칙 제3조 제1항 제6호·제7호, 제4조 제1항 --></p></div>
<div class="faq-item"><p class="faq-q">Q. 서류를 내면 언제 인정서가 나오나요?</p><p class="faq-a">A. 신고요령 제3조는 접수일부터 10일 이내 처리를 원칙으로 정하지만, 현장조사 기간은 여기에 넣지 않습니다. 보완 요구가 있으면 그만큼 늦어지므로 실제 기간은 관할 기관과 서류 상황에 따라 달라집니다.</p></div>
<div class="faq-item"><p class="faq-q">Q. 예전 법률로 인정받은 연구소도 새 서류를 내야 하나요?</p><p class="faq-a">A. 아닙니다. 「기업부설연구소등의 연구개발 지원에 관한 법률」 부칙(법률 제20727호) 제4조는 종전 법률에 따라 인정된 연구소를 신법에 따라 인정받은 것으로 봅니다. 다만 이후 변경 사항이 생기면 시행령 제7조 제2항에 따라 30일 이내에 변경신고를 해야 합니다.</p></div>
</div>

<div class="cta-block">
 <h3>서류를 내기 전에 한 번 맞춰 보고 싶다면</h3>
 <p>인력 현황표, 조직도, 도면과 사진이 서로 같은 사실을 가리키는지 유선행정사사무소가 먼저 점검해 드립니다. 전화 02-363-2251, 평일 09:30~17:30 KST.</p>
 <a href="/contact?utm_source=blog&utm_medium=cta&utm_campaign=corporate-research-lab-required-documents">무료 상담 신청하기</a>
</div>

<p class="author-block">유선행정사사무소 (대표 행정사 정유선) · 「기업부설연구소등의 연구개발 지원에 관한 법률」(법률 제21309호, 2026. 2. 1. 시행), 같은 법 시행령(대통령령 제36055호), 같은 법 시행규칙(과학기술정보통신부령 제163호), 「기업부설연구소와 연구개발전담부서 신고요령」(과학기술정보통신부고시 제2026-6호) 원문 기준으로 작성 · 최종 검토일 10월 3일<!-- 근거: MST 282553, 282915, 283223, 행정규칙일련번호 2100000273808 --></p>`,
  },

  en: {
    title: 'Corporate R&D Center Registration in Korea — Required Documents and What Each One Proves',
    category: 'Business Certification',
    metaTitle: 'Korean Corporate R&D Center Registration — Required Documents',
    metaDescription: 'The document set for recognition of a corporate R&D center or dedicated R&D department in Korea under the rules in force since 1 February 2026.',
    excerpt: 'Since February 2026 a separate statute governs corporate R&D centers in Korea. Here is the application form, the attachments, the documents you can skip and the mismatches that trigger supplementation requests.',
    content: `<div class="toc"><p>Table of Contents</p><ol><li>The Governing Law</li><li>What Goes Into the Application Form</li><li>The Attachments and What Each Proves</li><li>The R&D Personnel Statement</li><li>Floor Plans, Photos and the Equipment List</li><li>After Filing and Common Mistakes</li><li>FAQ</li></ol></div>
<p>Since 1 February 2026, the documents for recognising a <strong>corporate R&D center</strong> (기업부설연구소) in Korea are set by Article 3 of the Enforcement Rules of the Act on R&D Support for Corporate Research Institutes, etc. (기업부설연구소등의 연구개발 지원에 관한 법률). A corporate R&D center files an application with up to 10 applicable attachments with the Korea Industrial Technology Association (한국산업기술진흥협회, KOITA); a dedicated R&D department (연구개발전담부서) files up to 6 under Article 4. With the applicant's consent, KOITA checks business registration and SME status itself through shared administrative data.</p>
<p>A corporate R&D center is a research unit a company runs for R&D and that is recognised under Article 7 of the Act; a dedicated R&D department is a department devoted to R&D with the same recognition (Article 2). The documents are how the reviewer sees the two core criteria, people and space. This article covers the paperwork, not the criteria themselves.</p>

<h2>The Governing Law</h2>
<p>Older guides cite Article 14-2 of the Basic Research Promotion and Technology Development Support Act and Article 16-2 of its Decree; both are now marked "deleted". A separate statute, Act No. 20727, was promulgated on 31 January 2025 and took effect 1 year later, on 1 February 2026.</p>
<table><thead><tr><th>Instrument</th><th>Number, in force</th><th>Relevant content</th></tr></thead><tbody>
<tr><td>The Act</td><td>Act No. 21309, 1 February 2026</td><td>Art. 7 application, Art. 10 prohibited conduct, Art. 27 fines</td></tr>
<tr><td>Enforcement Decree</td><td>Presidential Decree No. 36055, 1 February 2026</td><td>Art. 6 criteria, Art. 7 form contents, Art. 16 delegation</td></tr>
<tr><td>Enforcement Rules</td><td>Ministry of Science and ICT Ordinance No. 163, 1 February 2026</td><td>Arts. 3 and 4 attachments, Forms 1 to 7</td></tr>
<tr><td>Reporting Guidelines (notice)</td><td>Notice No. 2026-6, 1 February 2026</td><td>Art. 3 processing, Art. 4 supplementation, Art. 5 follow-up</td></tr>
</tbody></table>
<div class="highlight-box">Act on R&D Support for Corporate Research Institutes, etc., Article 7(2): A company seeking recognition under paragraph (1) shall apply to the Minister of Science and ICT as prescribed by Presidential Decree. Article 7(3): The Minister shall issue a certificate of recognition to the corporate research institute, etc.</div>
<p>Receiving applications, recognition and certificates are delegated to KOITA (Decree Article 16(1)), so the form is addressed to it. Centers recognised under the old law are deemed recognised under the new Act (Addenda Article 4) and need not refile.</p>

<h2>What Goes Into the Application Form</h2>
<p>A center uses Form 1 and a department Form 6. The Decree requires the company name, representative, location, research field, main research content, R&D personnel, research facilities and other necessary matters (Decree Article 7(1)). Both forms state a processing time of 10 days and a fee of "none". Points that often go wrong:</p>
<ul>
<li><strong>Industry</strong> — the main industry as a KSIC code.</li>
<li><strong>Sales and employees</strong> — sales from the latest closed accounts; current regular employees, excluding day labourers.</li>
<li><strong>Date of establishment</strong> — when the research unit was set up, not the company's opening date.</li>
<li><strong>Field</strong> — science and technology or services; service companies pick a field tied to their main industry.</li>
<li><strong>Research space</strong> — "whole building", "independent space" or "separated area", owned or leased, with the area.</li>
<li><strong>R&D investment</strong> — the plan for 1 year from the year of application.</li>
</ul>
<p>If one company applies for 2 or more centers, their research fields or addresses must differ (Decree Article 6(3)).</p>

<h2>The Attachments and What Each Proves</h2>
<p>Under Rules Articles 3(1) and 4(1), the attachments are as follows. "Conditional" means only companies meeting the condition submit it.</p>
<table><thead><tr><th>Document</th><th>Center</th><th>Department</th><th>What it proves</th></tr></thead><tbody>
<tr><td>R&D activity summary (Form 2)</td><td>Required</td><td>Required</td><td>Tasks, field, lead project for 1 year</td></tr>
<tr><td>Research equipment list (Form 3)</td><td>Required</td><td>Required</td><td>Equipment used directly for research</td></tr>
<tr><td>R&D personnel statement (Form 4)</td><td>Required</td><td>Required</td><td>Researchers' number, qualifications, other duties</td></tr>
<tr><td>Organisation chart</td><td>Company and center</td><td>Company</td><td>Separation from other departments</td></tr>
<tr><td>Floor and interior plans, with entrance sign and photos</td><td>Required</td><td>Required</td><td>Location and boundary of the space</td></tr>
<tr><td>Safety budget statement</td><td>Conditional (10 or more researchers and assistants)</td><td>Not applicable</td><td>Laboratory Safety Act Art. 22(2)</td></tr>
<tr><td>Insurance certificate</td><td>Conditional (10 or more researchers and assistants)</td><td>Not applicable</td><td>Laboratory Safety Act Art. 26(1)</td></tr>
<tr><td>SME criteria review sheet or VAT return</td><td>Conditional (service field)</td><td>Conditional (service field)</td><td>Eligible service industry</td></tr>
<tr><td>Proof of founding by a researcher or professor</td><td>Conditional</td><td>Not applicable</td><td>Special personnel rule</td></tr>
<tr><td>Proof of mid-sized enterprise status</td><td>Conditional</td><td>Not applicable</td><td>Mid-sized enterprise standard</td></tr>
</tbody></table>
<p>A department's file is lighter: the 3 common forms plus a company chart, plans and photos, and service-field evidence. Under Article 36(1) of the Electronic Government Act, KOITA itself checks the business registration certificate and, for small or medium enterprises, proof of that status; only an applicant who refuses consent submits them (Rules Articles 3(2) and 4(2)).</p>

<h2>The R&D Personnel Statement</h2>
<p>Form 4 is the centre of the review. It counts dedicated researchers, assistants and administrators by degree and lists, per person, position, name, resident or alien registration number, department, school and major, degree and degree number, military service, date of assignment and whether they work on site. Assistants and administrators are not mandatory.</p>
<p>Three entries are often wrong. Without a degree number, as for high school graduates or foreign degrees, enter the graduation year; technical qualification holders enter the qualification and its number. The date of assignment is the posting to the unit, not the hiring date. Anyone working off site, for example from home, is marked "no".</p>
<p>Rules Article 2(8) excludes as dedicated researchers:</p>
<ol>
<li>anyone whose employment cannot be proven by health insurance, pension or payroll withholding records;</li>
<li>employees in full-time daytime graduate programmes, with exceptions;</li>
<li>anyone unable to do R&D at the unit continuously for 6 months or more;</li>
<li>representatives, auditors or non-standing directors, except the representative of a small enterprise within 3 years of founding who does R&D; and</li>
<li>industrial trainees.</li>
</ol>
<p>KOITA may request enrolment data from the National Health Insurance Service, the National Pension Service and the Korea Workers' Compensation and Welfare Service (Act Article 23(1), Decree Article 17), so a personnel list that does not match social insurance records will show.</p>
<p>Degree certificates are not on the attachment list, but in follow-up management KOITA may check copies of degree, graduation or qualification certificates, personnel orders, lab notebooks and reports (Guidelines Article 5(2)). Keep the originals from the start.</p>

<h2>Floor Plans, Photos and the Equipment List</h2>
<p>The plans cover the whole floor and the interior, with the entrance sign and interior photos (Rules Articles 3(1)5 and 4(1)2). They prove the space is separated by fixed walls and its own door (Rules Article 2(2)1). Where an SME, a research-founded SME or venture company, or an information service or software company's department cannot secure more than 50 square metres, a partitioned area is accepted; where walls cannot reach the ceiling for ventilation or fire safety, fixed walls of at least 2 metres with a door may qualify. The plan and the photos must match.</p>
<p>A center may not be in detached or multi-unit housing, an unpermitted building or a temporary structure (Act Article 9(2)). On Form 3, office equipment, servers, hubs and general-purpose software do not count; dedicated development tools may.</p>

<h2>After Filing and Common Mistakes</h2>
<p>The steps are receipt, review (with on-site checks if needed), approval, recognition and the certificate. Guidelines Article 3 sets processing within 10 days of receipt as the rule but excludes on-site inspection time, so actual time depends on the authority and the documents. An inspection is normally notified in writing 7 days ahead (Act Article 21). Incomplete files get a supplementation deadline and may be returned if it passes (Guidelines Article 4). Recognition brings a certificate on Form 5 or Form 7.</p>
<p>Supplementation requests usually come from inconsistencies:</p>
<ul>
<li>a dedicated researcher who also handles sales or production;</li>
<li>the hiring date entered as the assignment date;</li>
<li>plans showing an independent space while photos show only partitions or no sign;</li>
<li>an equipment list of copiers, office PCs and general software; and</li>
<li>a service-field application without the SME review sheet or VAT return.</li>
</ul>
<p>Falsification is different from error. Recognition obtained by false means must be revoked, with no reapplication for 1 year (Act Article 8), and both the company and anyone who helped face a fine of up to KRW 5 million (Act Articles 10 and 27(1)). Later changes to name, location, field or personnel must be reported within 30 days (Decree Article 7(2)). Costs vary case by case and are explained precisely during the free consultation. Texts: <a href="https://www.law.go.kr/법령/기업부설연구소등의연구개발지원에관한법률" target="_blank" rel="noopener">the Act</a> and <a href="https://www.law.go.kr/법령/기업부설연구소등의연구개발지원에관한법률시행규칙" target="_blank" rel="noopener">its Enforcement Rules</a>.</p>

<div class="faq-section"><h2>FAQ</h2>
<div class="faq-item"><p class="faq-q">Q. Must degree certificates be attached?</p><p class="faq-a">A. They are not on the list in Rules Article 3(1), but Form 4 asks for degree numbers and KOITA may check copies under Guidelines Article 5(2). Keep the originals.</p></div>
<div class="faq-item"><p class="faq-q">Q. Do I submit the business registration certificate?</p><p class="faq-a">A. Not if you consent. KOITA checks it through shared data under Rules Article 3(2).</p></div>
<div class="faq-item"><p class="faq-q">Q. Does everyone submit the safety budget and insurance certificate?</p><p class="faq-a">A. No. Under Rules Article 3(1)6 and 7, only a center with 10 or more researchers and assistants in total; a department does not.</p></div>
<div class="faq-item"><p class="faq-q">Q. How soon is the certificate issued?</p><p class="faq-a">A. Guidelines Article 3 sets 10 days from receipt as the rule, excluding inspection time; supplementation adds time.</p></div>
<div class="faq-item"><p class="faq-q">Q. Must a center recognised under the old law refile?</p><p class="faq-a">A. No. Addenda Article 4 of Act No. 20727 deems it recognised, though changes must be reported within 30 days under Decree Article 7(2).</p></div>
</div>

<div class="cta-block">
 <h3>Want your file checked before you submit?</h3>
 <p>We check whether the personnel statement, organisation chart, plans and photos all point to the same facts. Call 02-363-2251, weekdays 09:30–17:30 KST.</p>
 <a href="/contact?utm_source=blog&utm_medium=cta&utm_campaign=corporate-research-lab-required-documents">Request a free consultation</a>
</div>

<p class="author-block">Yuseon Administrative Scrivener Office (Chief Scrivener Jeong Yuseon) · Based on the Act on R&D Support for Corporate Research Institutes, etc. (Act No. 21309, in force 1 February 2026), its Enforcement Decree (Presidential Decree No. 36055), Enforcement Rules (Ordinance No. 163) and the Reporting Guidelines (Notice No. 2026-6) · Last reviewed 3 October</p>`,
  },

  zh: {
    title: '韩国企业附属研究所设立材料 — 认定申请附件10种及各自证明的内容',
    category: '企业认证',
    metaTitle: '韩国企业附属研究所设立材料 — 认定申请附件汇总',
    metaDescription: '依据2026年2月1日施行的韩国《企业附属研究所等研究开发支援法》施行规则第3条、第4条，说明企业附属研究所与研究开发专门部门认定申请需提交的材料、各材料证明的内容及常见补正原因。',
    excerpt: '自2026年2月起，韩国企业附属研究所的认定材料由新法施行规则规定。本文整理申请书、附件、可免交的材料以及常被要求补正的填写错误。',
    content: `<div class="toc"><p>目录</p><ol><li>依据法令 — 材料规定已移至新法</li><li>申请书需填写的信息</li><li>附件清单及各自证明的内容</li><li>研究开发人员现况</li><li>平面图、照片与研究器材现况</li><li>提交后的程序与常见错误</li><li>常见问题</li></ol></div>
<p><strong>韩国企业附属研究所设立材料</strong>自2026年2月1日起由《企业附属研究所等研究开发支援法施行规则》（기업부설연구소등의 연구개발 지원에 관한 법률 시행규칙）第3条规定。企业附属研究所须在认定申请书上附上研究开发活动概要书、研究器材现况、研究开发人员现况、组织图、平面图与照片等适用附件（最多10种），向韩国产业技术振兴协会（한국산업기술진흥협회）提交；研究开发专门部门依第4条最多提交6种。申请人同意时，营业执照证明和小企业·中企业证明由协会通过行政信息共享直接确认。</p>
<p>企业附属研究所是企业为研发设立运营、并依该法第7条获得认定的附属研究机构；研究开发专门部门是获得同样认定的研发专门部门（第2条）。材料是审查机关确认"人"和"空间"两项标准的途径。本文只讲如何用材料证明，不重复要件本身。</p>

<h2>依据法令 — 材料规定已移至新法</h2>
<p>旧说明常引用《基础研究振兴及技术开发支援法》第14条之2和其施行令第16条之2，现行原文中均已"删除"。专门法律于2025年1月31日以法律第20727号公布，经过1年，自2026年2月1日起施行。</p>
<table><thead><tr><th>规范</th><th>编号·施行日</th><th>相关内容</th></tr></thead><tbody>
<tr><td>该法</td><td>法律第21309号，2026年2月1日</td><td>第7条申请，第10条禁止行为，第27条罚款</td></tr>
<tr><td>施行令</td><td>总统令第36055号，2026年2月1日</td><td>第6条标准，第7条记载事项，第16条委托</td></tr>
<tr><td>施行规则</td><td>科学技术信息通信部令第163号，2026年2月1日</td><td>第3条·第4条附件，第1号至第7号书式</td></tr>
<tr><td>申报要领（告示）</td><td>告示第2026-6号，2026年2月1日</td><td>第3条处理期限，第4条补正，第5条事后管理</td></tr>
</tbody></table>
<div class="highlight-box">《企业附属研究所等研究开发支援法》第7条第2款：欲获得第1款认定的企业，应依总统令规定向科学技术信息通信部长官申请认定。第3款：科学技术信息通信部长官应向企业附属研究所等发放认定书。</div>
<p>受理、认定及发放认定书的业务依施行令第16条第1款委托给该协会。依旧法获认定的研究所视为依新法获认定（附则第4条），无需重新提交。</p>

<h2>申请书需填写的信息</h2>
<p>研究所使用第1号书式，专门部门使用第6号书式。施行令第7条第1款要求记载企业名称、代表人、所在地、研究领域、主要研究内容、研究开发人员、研究设施等。两种书式印有处理期限10日，手续费栏为"无"。容易出错的项目：</p>
<ul>
<li><strong>行业</strong> — 以KSIC代码填写主营行业。</li>
<li><strong>销售额·员工数</strong> — 以最终决算为准；员工数为最近常时员工数，不含日工。</li>
<li><strong>设立日期</strong> — 研究机构的设立日，而非公司开业日。</li>
<li><strong>领域</strong> — 科学技术或服务；服务企业须选与主营行业相关的领域。</li>
<li><strong>研究空间</strong> — "整栋建筑""独立空间""分隔区域"，自有或租赁及面积。</li>
<li><strong>研发投资</strong> — 自申请当年起未来1年的计划。</li>
</ul>
<p>同一企业申请2个以上研究所时，研究领域或地址须不同（施行令第6条第3款）。</p>

<h2>附件清单及各自证明的内容</h2>
<p>依施行规则第3条第1款和第4条第1款，附件如下。"附条件"指仅符合条件者提交。</p>
<table><thead><tr><th>材料</th><th>研究所</th><th>专门部门</th><th>证明什么</th></tr></thead><tbody>
<tr><td>研究开发活动概要书（第2号书式）</td><td>必交</td><td>必交</td><td>业务、领域、1年内代表课题</td></tr>
<tr><td>研究器材现况（第3号书式）</td><td>必交</td><td>必交</td><td>直接用于研究的器材</td></tr>
<tr><td>研究开发人员现况（第4号书式）</td><td>必交</td><td>必交</td><td>专职研究员人数、资格、兼职</td></tr>
<tr><td>组织图</td><td>企业及研究机构</td><td>企业</td><td>与其他部门区分</td></tr>
<tr><td>整层及内部平面图（含门牌、内部照片）</td><td>必交</td><td>必交</td><td>独立空间的位置与边界</td></tr>
<tr><td>安全预算明细</td><td>附条件（10名以上）</td><td>不适用</td><td>研究室安全法第22条第2款</td></tr>
<tr><td>保险加入证明</td><td>附条件（10名以上）</td><td>不适用</td><td>研究室安全法第26条第1款</td></tr>
<tr><td>中小企业等标准检讨表或增值税申报书</td><td>附条件（服务领域）</td><td>附条件（服务领域）</td><td>可认定的服务行业</td></tr>
<tr><td>研究员·教员创业证明</td><td>附条件</td><td>不适用</td><td>人员特例</td></tr>
<tr><td>中坚企业证明</td><td>附条件</td><td>不适用</td><td>中坚企业标准</td></tr>
</tbody></table>
<p>专门部门材料较轻。依《电子政府法》第36条第1款，协会自行确认营业执照证明及小企业·中企业证明，仅申请人不同意时自行提交（施行规则第3条第2款、第4条第2款）。</p>

<h2>研究开发人员现况</h2>
<p>审查核心是第4号书式。按学位统计专职研究员、研究助理、研究管理职员，并逐人填写职位、姓名、居民登记号或外国人登录号、部门、学校与专业、学位与编号、兵役、任命日及是否在设施内工作。研究助理和管理职员并非必备。</p>
<p>常见错误：没有学位编号的填毕业年份，技术资格者填资格证编号；任命日是调入研究机构之日，不是入职日；在家等设施外工作者须标"否"。</p>
<p>施行规则第2条第8款规定下列人员不得作为专职研究员：</p>
<ol>
<li>无法以健康保险、国民年金或工资代扣记录证明为本企业员工者；</li>
<li>就读全日制研究生课程的员工（有例外）；</li>
<li>无法连续6个月以上从事研发者；</li>
<li>代表人、监事、非常任理事（创业未满3年小企业的研发代表人除外）；</li>
<li>产业研修生。</li>
</ol>
<p>协会可向国民健康保险公团、国民年金公团、勤劳福祉公团请求加入资料（法第23条第1款、施行令第17条），名单与四大保险记录不符会暴露。学位证书不在附件清单内，但事后管理时可确认学位或资格证复印件、人事任命文件和研究笔记（申报要领第5条第2款），应保存原件。</p>

<h2>平面图、照片与研究器材现况</h2>
<p>平面图须含整层图和内部图，并附门牌和内部照片（施行规则第3条第1款第5项、第4条第1款第2项），证明以固定墙体和单独出入门区分的独立空间（第2条第2款第1项）。中小企业、研发型中小企业或风险企业，以及信息服务或软件企业的研发部门无法确保超过50平方米时，可用隔板区分；无法隔到天花板时，可用2米以上固定墙体加单独出入门。平面图与照片须一致。</p>
<p>独栋住宅、共同住宅、未经许可的建筑或临时建筑不得设立研究所（法第9条第2项）。第3号书式中办公设备、服务器、集线器和通用软件不计入，开发专用程序可计入。</p>

<h2>提交后的程序与常见错误</h2>
<p>程序为受理、审查（必要时现场确认）、审批、认定、发证。申报要领第3条原则上自受理起10日内处理，但不含现场调查期间，实际时间取决于主管机关和材料情况。现场调查原则上提前7日书面通知（法第21条）。材料不全会被限期补正，逾期可退回（申报要领第4条）。认定书为第5号或第7号书式。</p>
<p>常见补正原因：</p>
<ul>
<li>专职研究员兼任销售或生产；</li>
<li>任命日填成入职日；</li>
<li>平面图为独立空间，照片只有隔板或无门牌；</li>
<li>器材只列复印机、办公电脑和通用软件；</li>
<li>服务领域申请漏交检讨表或增值税申报书。</li>
</ul>
<p>以虚假方法获得认定的，必须撤销且1年内不得再申请（法第8条），获认定者和协助者均可被处500万韩元以下罚款（法第10条、第27条第1款）。认定后名称、所在地、领域、人员变更须在30日内申报（施行令第7条第2款）。费用因个案而异，将在免费咨询时准确说明。原文见<a href="https://www.law.go.kr/법령/기업부설연구소등의연구개발지원에관한법률" target="_blank" rel="noopener">该法</a>、<a href="https://www.law.go.kr/법령/기업부설연구소등의연구개발지원에관한법률시행규칙" target="_blank" rel="noopener">施行规则</a>。</p>

<div class="faq-section"><h2>常见问题</h2>
<div class="faq-item"><p class="faq-q">Q. 必须附学位证书吗？</p><p class="faq-a">A. 施行规则第3条第1款清单中没有，但第4号书式要填学位编号，事后管理可确认复印件（申报要领第5条第2款），应保存原件。</p></div>
<div class="faq-item"><p class="faq-q">Q. 需要交营业执照复印件吗？</p><p class="faq-a">A. 同意的话无需提交，协会依施行规则第3条第2款通过信息共享确认。</p></div>
<div class="faq-item"><p class="faq-q">Q. 安全预算明细和保险证明都要交吗？</p><p class="faq-a">A. 不是。依第3条第1款第6项、第7项，仅研究专职人员等合计10名以上的研究所提交，专门部门不交。</p></div>
<div class="faq-item"><p class="faq-q">Q. 多久发放认定书？</p><p class="faq-a">A. 申报要领第3条原则为受理起10日内，不含现场调查期间；补正会延后。</p></div>
<div class="faq-item"><p class="faq-q">Q. 旧法认定的研究所需重新提交吗？</p><p class="faq-a">A. 不需要，法律第20727号附则第4条视其为已认定；此后变更须依施行令第7条第2款在30日内申报。</p></div>
</div>

<div class="cta-block">
 <h3>提交前想先核对一遍材料？</h3>
 <p>유선행정사사무소会先检查人员现况、组织图、平面图和照片是否指向同一事实。电话 02-363-2251，平日 09:30~17:30 KST。</p>
 <a href="/contact?utm_source=blog&utm_medium=cta&utm_campaign=corporate-research-lab-required-documents">申请免费咨询</a>
</div>

<p class="author-block">유선행정사사무소（代表行政士 정유선）· 依据《企业附属研究所等研究开发支援法》（法律第21309号，2026年2月1日施行）、同法施行令（总统令第36055号）、施行规则（科学技术信息通信部令第163号）及《企业附属研究所与研究开发专门部门申报要领》（告示第2026-6号）原文撰写 · 最终审阅日 10月3日</p>`,
  },

  ja: {
    title: '韓国の企業付設研究所設立に必要な書類 — 認定申請の添付書類10種と各書類が証明するもの',
    category: '企業認証',
    metaTitle: '韓国 企業付設研究所設立の必要書類 — 認定申請の添付書類',
    metaDescription: '2026年2月1日施行の韓国「企業付設研究所等の研究開発支援に関する法律」施行規則第3条・第4条に基づき、企業付設研究所と研究開発専担部署の認定申請に必要な書類、各書類が証明する内容、補完になりやすい記載ミスを整理しました。',
    excerpt: '2026年2月から、韓国の企業付設研究所の認定書類は新法の施行規則が定めています。申請書と添付書類、提出不要の書類、補完を求められやすい記載ミスを原文基準で整理しました。',
    content: `<div class="toc"><p>目次</p><ol><li>根拠法令 — 書類の規定は新法へ移った</li><li>申請書に記載する情報</li><li>添付書類の一覧と各書類が証明するもの</li><li>研究開発人力現況 — 研究専担要員の証明</li><li>図面・表札・写真と研究機材現況</li><li>提出後の手続と補完が多いミス</li><li>よくあるご質問</li></ol></div>
<p><strong>韓国の企業付設研究所設立に必要な書類</strong>は、2026年2月1日から「企業付設研究所等の研究開発支援に関する法律施行規則」（기업부설연구소등의 연구개발 지원에 관한 법률 시행규칙）第3条が定めています。企業付設研究所は認定申請書に研究開発活動概要書、研究機材現況、研究開発人力現況、組織図、図面と写真など該当する添付書類（最大10種）を付けて韓国産業技術振興協会（한국산업기술진흥협회）に提出し、研究開発専担部署は同規則第4条により最大6種を提出します。事業者登録証明と小企業・中企業の証明書類は、申請人が同意すれば協会が行政情報の共同利用で直接確認します。</p>
<p>企業付設研究所とは、企業が研究開発のために設立・運営し同法第7条の認定を受けた付設研究機関、研究開発専担部署とは同じ認定を受けた研究開発専担の部署をいいます（第2条）。書類は、認定基準である「人」と「空間」を審査機関が確認する経路です。本稿は要件そのものではなく、その証明方法に焦点を当てます。</p>

<h2>根拠法令 — 書類の規定は新法へ移った</h2>
<p>以前の解説が根拠に挙げる「基礎研究振興及び技術開発支援に関する法律」第14条の2と同法施行令第16条の2は、現行原文ではいずれも「削除」です。代わりに単独の法律が2025年1月31日に法律第20727号として公布され、1年を経過した2026年2月1日から施行されています。</p>
<table><thead><tr><th>規範</th><th>番号・施行日</th><th>関連内容</th></tr></thead><tbody>
<tr><td>同法</td><td>法律第21309号、2026年2月1日</td><td>第7条 申請、第10条 禁止行為、第27条 過料</td></tr>
<tr><td>施行令</td><td>大統領令第36055号、2026年2月1日</td><td>第6条 基準、第7条 記載事項、第16条 委託</td></tr>
<tr><td>施行規則</td><td>科学技術情報通信部令第163号、2026年2月1日</td><td>第3条・第4条 添付書類、第1号〜第7号書式</td></tr>
<tr><td>届出要領（告示）</td><td>告示第2026-6号、2026年2月1日</td><td>第3条 処理期間、第4条 補完、第5条 事後管理</td></tr>
</tbody></table>
<div class="highlight-box">「企業付設研究所等の研究開発支援に関する法律」第7条第2項：第1項による認定を受けようとする企業は、大統領令で定めるところにより科学技術情報通信部長官に認定を申請しなければならない。第3項：科学技術情報通信部長官は、企業付設研究所等に認定書を発給しなければならない。</div>
<p>受付・認定・認定書発給の業務は施行令第16条第1項により同協会に委託されており、申請書の宛先も同協会です。旧法で認定された研究所は新法で認定されたものとみなされ（附則第4条）、改めて書類を出す必要はありません。</p>

<h2>申請書に記載する情報</h2>
<p>研究所は別紙第1号書式、専担部署は第6号書式を使います。施行令第7条第1項は企業名称、代表者、所在地、研究分野、主要研究内容、研究開発人力、研究施設などの記載を求めます。いずれの書式も処理期間は10日、手数料欄は「なし」です。間違えやすい項目は次のとおりです。</p>
<ul>
<li><strong>業種</strong> — 主業種を韓国標準産業分類（KSIC）コードで記載。</li>
<li><strong>売上高・従業員数</strong> — 最終決算資料と直近の常時従業員数（日雇いを除く）。</li>
<li><strong>設立年月日</strong> — 会社の開業日ではなく研究機関を設立した日。</li>
<li><strong>申請分野</strong> — 科学技術かサービス。サービスは主業種に関連する分野を選択。</li>
<li><strong>研究空間</strong> — 「建物全体」「独立空間」「分離区域」、所有・賃借の別と面積。</li>
<li><strong>研究開発投資</strong> — 申請年から今後1年間の計画。</li>
</ul>
<p>同じ企業が2つ以上の研究所を申請する場合、専門研究分野または所在地が異なっていなければなりません（施行令第6条第3項）。</p>

<h2>添付書類の一覧と各書類が証明するもの</h2>
<p>施行規則第3条第1項と第4条第1項の添付書類は次のとおりです。「条件付き」は該当企業のみ提出します。</p>
<table><thead><tr><th>書類</th><th>研究所</th><th>専担部署</th><th>何を証明するか</th></tr></thead><tbody>
<tr><td>研究開発活動概要書（第2号書式）</td><td>必須</td><td>必須</td><td>業務・分野・1年間の代表課題</td></tr>
<tr><td>研究機材現況（第3号書式）</td><td>必須</td><td>必須</td><td>研究に直接使う機材</td></tr>
<tr><td>研究開発人力現況（第4号書式）</td><td>必須</td><td>必須</td><td>研究専担要員の人数・資格・兼務</td></tr>
<tr><td>組織図</td><td>企業及び研究機関</td><td>企業</td><td>他部署との区分</td></tr>
<tr><td>フロア全体図面・内部図面（表札・内部写真を含む）</td><td>必須</td><td>必須</td><td>独立空間の位置と境界</td></tr>
<tr><td>安全関連予算明細書</td><td>条件付き（10名以上）</td><td>該当なし</td><td>研究室安全法第22条第2項</td></tr>
<tr><td>保険加入証明書</td><td>条件付き（10名以上）</td><td>該当なし</td><td>研究室安全法第26条第1項</td></tr>
<tr><td>中小企業等基準検討表または付加価値税申告書</td><td>条件付き（サービス分野）</td><td>条件付き（サービス分野）</td><td>認定対象のサービス業種</td></tr>
<tr><td>研究員・教員創業企業の証明書類</td><td>条件付き</td><td>該当なし</td><td>人力基準の特例</td></tr>
<tr><td>中堅企業の証明書類</td><td>条件付き</td><td>該当なし</td><td>中堅企業の基準</td></tr>
</tbody></table>
<p>専担部署の書類は研究所より軽く、共通3書式に企業組織図、図面・写真、サービス分野の証明を付ければ足ります。「電子政府法」第36条第1項により、協会は事業者登録証明（住民登録番号を除く）と小企業・中企業の証明書類を自ら確認し、申請人が同意しない場合に限り本人が提出します（施行規則第3条第2項、第4条第2項）。</p>

<h2>研究開発人力現況 — 研究専担要員の証明</h2>
<p>審査の中心は別紙第4号書式です。研究専担要員・研究補助員・研究管理職員を学位別に集計し、一人ずつ職位、氏名、住民登録番号（外国人は外国人登録番号）、所属部署、最終学校と専攻、最終学位と学位番号、兵役事項、発令日、研究施設内勤務の有無を記載します。研究補助員と研究管理職員は必須ではありません。</p>
<p>間違えやすい点は3つです。学位番号がない高校卒業者や海外学位は卒業年度を、国家技術資格者は資格の種類と資格証番号を記載します。発令日は入社日ではなく研究所または専担部署への発令日です。自宅など研究施設外で勤務する人は「否」と表示します。</p>
<p>施行規則第2条第8項は、次の人を研究専担要員にできないと定めています。</p>
<ol>
<li>健康保険・国民年金の加入者名簿や源泉徴収簿などで職員であることを証明できない人</li>
<li>大学院の昼間学位課程で修学する役職員（例外あり）</li>
<li>継続して6か月以上研究開発を行えない人</li>
<li>代表者・監事・非常勤理事など（創業3年以内の小企業で研究開発を行う代表者を除く）</li>
<li>産業研修生</li>
</ol>
<p>協会は国民健康保険公団・国民年金公団・勤労福祉公団に加入状況の資料を求めることができるため（法第23条第1項、施行令第17条）、名簿と4大保険の記録が食い違えば判明します。学位証明書は添付書類一覧にありませんが、事後管理では学位・卒業証明書または資格証の写し、人事発令書類、研究ノートなどが確認されることがあるため（届出要領第5条第2項）、原本資料を保管しておくべきです。</p>

<h2>図面・表札・写真と研究機材現況</h2>
<p>図面はフロア全体の図面と内部図面で、専用出入口の表札と内部写真を含めます（施行規則第3条第1項第5号、第4条第1項第2号）。これは固定壁体と別の出入口で区分された独立空間を証明します（第2条第2項第1号）。中小企業、研究開発型中小企業・ベンチャー企業、情報サービス・ソフトウェア企業の専担部署が50平方メートルを超える面積を確保できない場合はパーティションによる区分も認められ、天井まで仕切れない場合は床から2メートル以上の固定壁体と別の出入口でもよいとされます。図面と写真は一致していなければなりません。</p>
<p>単独住宅、共同住宅、無許可の建物や仮設建物には研究所を設置できません（法第9条第2号）。第3号書式では事務機器、サーバー・ハブ、汎用ソフトウェアは該当せず、開発ツールの専用プログラムは含められます。</p>

<h2>提出後の手続と補完が多いミス</h2>
<p>手続は受付、検討（必要に応じて現地確認）、決裁、認定、認定書発給の順です。届出要領第3条は受付日から10日以内の処理を原則としますが、現場調査の期間は算入しないため、実際の期間は管轄機関と書類の状況によって異なります。現場調査は原則として7日前までに書面で通知されます（法第21条）。不備があれば期限付きで補完を求められ、期限を過ぎると返戻されることがあります（届出要領第4条）。認定書は別紙第5号または第7号書式です。</p>
<p>補完を求められやすいのは書類間の不一致です。</p>
<ul>
<li>研究専担要員が営業や生産を兼務している</li>
<li>発令日欄に入社日を記載した</li>
<li>図面は独立空間なのに写真はパーティションだけ、または表札がない</li>
<li>機材現況がコピー機・事務用PC・汎用ソフトウェアのみ</li>
<li>サービス分野なのに基準検討表や付加価値税申告書がない</li>
</ul>
<p>虚偽の方法で認定を受けた場合は必ず取り消され、1年間は再申請できません（法第8条）。認定を受けた者も手助けした者も500万ウォン以下の過料の対象です（法第10条、第27条第1項）。認定後に名称・所在地・研究分野・人力が変わったら30日以内に変更届出が必要です（施行令第7条第2項）。費用は事案ごとに異なるため、無料相談時に正確にご案内します。原文は<a href="https://www.law.go.kr/법령/기업부설연구소등의연구개발지원에관한법률" target="_blank" rel="noopener">同法</a>、<a href="https://www.law.go.kr/법령/기업부설연구소등의연구개발지원에관한법률시행규칙" target="_blank" rel="noopener">同法施行規則</a>で確認できます。</p>

<div class="faq-section"><h2>よくあるご質問</h2>
<div class="faq-item"><p class="faq-q">Q. 学位証明書の添付は必要ですか。</p><p class="faq-a">A. 施行規則第3条第1項の一覧にはありませんが、第4号書式に学位番号を記載し、事後管理で写しが確認されることがあるため（届出要領第5条第2項）、原本を保管してください。</p></div>
<div class="faq-item"><p class="faq-q">Q. 事業者登録証の写しも提出しますか。</p><p class="faq-a">A. 同意すれば不要です。施行規則第3条第2項により協会が行政情報の共同利用で確認します。</p></div>
<div class="faq-item"><p class="faq-q">Q. 安全関連予算明細書と保険加入証明書は全員が提出しますか。</p><p class="faq-a">A. いいえ。第3条第1項第6号・第7号により、研究専担要員と研究補助員の合計が10名以上の研究所だけです。専担部署は不要です。</p></div>
<div class="faq-item"><p class="faq-q">Q. 認定書はいつ出ますか。</p><p class="faq-a">A. 届出要領第3条は受付日から10日以内を原則としますが、現場調査の期間は含まず、補完があれば遅れます。</p></div>
<div class="faq-item"><p class="faq-q">Q. 旧法で認定された研究所も書類を出し直しますか。</p><p class="faq-a">A. いいえ。法律第20727号附則第4条により認定済みとみなされます。変更があれば施行令第7条第2項により30日以内に届出が必要です。</p></div>
</div>

<div class="cta-block">
 <h3>提出前に書類を一度照合したい方へ</h3>
 <p>人力現況表、組織図、図面と写真が同じ事実を示しているかを、ユソン行政士事務所が先に点検します。電話 02-363-2251、平日 09:30〜17:30 KST。</p>
 <a href="/contact?utm_source=blog&utm_medium=cta&utm_campaign=corporate-research-lab-required-documents">無料相談を申し込む</a>
</div>

<p class="author-block">ユソン行政士事務所（代表行政士 チョン・ユソン）・「企業付設研究所等の研究開発支援に関する法律」（法律第21309号、2026年2月1日施行）、同法施行令（大統領令第36055号）、施行規則（科学技術情報通信部令第163号）および「企業付設研究所と研究開発専担部署の届出要領」（告示第2026-6号）の原文に基づき作成・最終確認日 10月3日</p>`,
  },
}
