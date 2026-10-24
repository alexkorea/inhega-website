// 원고 은행 — INHEGA-BLOG-RESTART(2026-10-24, 맥4 하위 작성)
// 주제: urban-guesthouse(외국인관광 도시민박업) / 세부주제: change-report(변경신고·변경등록)
//
// 겹침 검사(ko-titles.txt·blog-i18n.ts 대조):
//   urban-guesthouse-registration-guide(신규 등록 요건·서류), urban-guesthouse-fix(무등록 처벌·위반건축물·폐업 신고),
//   urban-guesthouse-select(대행 선택), urban-guesthouse-airbnb-operation-guide(운영 노하우),
//   foreigner-homestay-*(소방·세금·영업일수), foreigner-urban-homestay-registration(신고 요건 — 제목 자체가 '신고' 오기)
//   → 이 글은 "등록 후 바뀌는 것": 변경등록 대상·기한·제출처, 양수 지위승계 신고, 휴업·폐업 통보만 다룬다.
//     처분·폐업은 짧게 쓰고 urban-guesthouse-fix 로 넘긴다. "변경등록" 을 제목에 쓴 기존 글 없음.
//
// 법령 대조(law.go.kr DRF, OC=visionlaw, 2026-10-24 조회):
//   관광진흥법            MST 279659, 공포번호 21087, 2026. 5. 12. 시행
//     제3조 제1항 제3호 라목(외국인관광 도시민박업 정의 — 관광객 이용시설업), 제4조 제1항·제4항·제5항(등록·변경등록),
//     제8조 제1항~제5항·제7항·제8항·제9항(양수·지위승계 신고 1개월·휴폐업 통보·직권말소), 제35조 제1항 제1호·제3호·제3호의2
//   관광진흥법 시행령     MST 288461, 2026. 8. 4. 시행
//     제2조 제1항 제3호 바목(주택 종류), 제3조 제1항, 제6조 제1항 제2호·제3호·제7호, 제2항(30일), 별표 1 제4호 바목(등록기준),
//     별표 2 제2호 가목 2)·바목·사목(행정처분기준)
//   관광진흥법 시행규칙   MST 282125, 2025. 12. 29. 시행
//     제2조 제7항, 제3조 제1항·제4항(변경등록 30일·별지 제6호서식), 제4조 제8호(등록대장: 객실 수·주택 연면적),
//     제16조 제1항·제2항(양수 신고서 별지 제23호·서류), 제17조 제1항·제3항(휴폐업 통보 30일·별지 제24호·부가세 폐업신고 동시 제출)
// 인허가 구분: 도시민박업 = '등록'(법 제4조 제1항, 관광객 이용시설업). 지정·허가 아님. 지위승계 = '신고'(법 제8조 제4항, 수리 규정 제5항).
//   휴업·폐업 = 법률은 '알려야 한다'(제8조 제8항), 서식은 '통보(신고)서' → 화면은 '통보'로 썼다.
// 조정·확인 못 한 점:
//   - 객실 수 변경: 시행령 제6조 제1항 제3호는 관광숙박업(휴양 콘도 제외), 제7호는 한옥체험업만 해당 → 도시민박업 변경등록 사항으로
//     문언상 적혀 있지 않다. 단 시행규칙 제4조 제8호상 등록대장 기재 사항이고 별표 1 연면적 기준과 연결 → "사전 확인"으로만 서술.
//     (시행규칙 별표 수수료표에 도시민박업 변경등록 항목이 따로 있으나 금액은 화면 금지라 쓰지 않음)
//   - '대표자 변경' 과 '운영자 교체(양수)' 경계: 개인 운영자가 바뀌는 양도·양수는 법 제8조 지위승계로 서술(해석 — 대조표 '조정').
//   - 처리기간: 법령에 변경등록 처리기간 수치 없음 → 쓰지 않음. 담당 부서명도 법령에 없어 '등록관청(시·군·구청)'으로만.
//   - 법정 수수료·과태료 금액은 쓰지 않음. 카지노 전용 벌칙(제83조)은 이 업종과 무관해 제외.
// 대조표: crosscheck/urban-guesthouse-change-registration.md

const SLUG = 'urban-guesthouse-change-registration'

const entry = {
  topic: 'urban-guesthouse',
  angle: 'change-report',
  slug: SLUG,
  kind: 'seo3958',
  keyword: '외국인관광 도시민박업 변경등록',
  pexelsId: 9582660,
  coverImage: '',
  relatedServices: [
    { title: '외국인관광 도시민박업 등록', href: '/services/urban-guesthouse' },
  ],

  ko: {
    title: '외국인관광 도시민박업 변경등록 — 상호·대표자 변경 기한과 지위승계 신고·휴폐업 통보',
    category: '숙박/관광',
    metaTitle: '외국인관광 도시민박업 변경등록 — 30일 기한·지위승계 신고·휴폐업 통보',
    metaDescription: '외국인관광 도시민박업은 등록 업종이라 상호나 대표자가 바뀌면 30일 이내에 변경등록을 해야 합니다. 객실 수를 바꿀 때의 확인 사항, 양수 후 1개월 이내 지위승계 신고, 휴업·폐업 통보까지 정리했습니다.',
    excerpt: '외국인관광 도시민박업 등록 후 상호나 대표자가 바뀌었다면 30일 이내에 변경등록을 해야 합니다. 변경등록 대상과 제출처, 객실 수 변경 시 확인할 점, 영업을 넘겨받았을 때의 지위승계 신고, 휴업·폐업 통보 기한을 한 번에 정리했습니다.',
    content: `<div class="toc"><p>목차</p><ol><li>변경등록이 필요한 사항</li><li>변경등록 신청 기한과 제출처</li><li>양수·지위승계 신고와 휴업·폐업 통보</li><li>자주 묻는 질문 (FAQ)</li></ol></div>
<p><strong>외국인관광 도시민박업은 「관광진흥법」에 따라 시장·군수·구청장에게 등록하는 관광객 이용시설업이고, 등록 후 상호나 대표자가 바뀌면 그 사유가 생긴 날부터 30일 이내에 변경등록을 신청해야 합니다.</strong><!-- 근거: 관광진흥법 제3조 제1항 제3호 라목, 제4조 제1항·제4항, 같은 법 시행령 제6조 제1항 제2호·제2항 --> 허가나 지정이 아니라 등록 제도이므로 바뀐 내용도 처음 등록한 관청에 변경등록으로 반영합니다. 영업 자체를 넘겨받았다면 변경등록이 아니라 지위승계 신고를, 1개월 이상 쉬거나 문을 닫는다면 휴업·폐업 통보를 해야 합니다.<!-- 근거: 관광진흥법 제8조 제4항·제8항 --></p>
<p>처음 등록할 때의 요건과 서류는 <a href="/blog/urban-guesthouse-registration-guide">외국인관광 도시민박업 등록 요건과 절차</a>에서, 무등록 영업과 처분 문제는 <a href="/blog/urban-guesthouse-fix">도시민박업 불법 숙박 처벌·폐업 신고 문제 해결</a>에서 다루었습니다. 여기서는 등록 이후 달라지는 사항에 집중합니다.</p>

<h2>변경등록이 필요한 사항</h2>
<p>「관광진흥법」은 등록한 사항 중 대통령령으로 정하는 중요 사항을 바꿀 때 변경등록을 하도록 하고, 시행령이 그 목록을 업종별로 나누어 둡니다. 이 목록에서 외국인관광 도시민박업에 적용되는 항목은 상호 또는 대표자의 변경입니다.<!-- 근거: 관광진흥법 제4조 제4항, 같은 법 시행령 제6조 제1항 제2호 --> 객실 수 변경은 관광숙박업과 한옥체험업에 한정된 항목으로 적혀 있어, 문언상 도시민박업의 변경등록 사항에는 들어 있지 않습니다.<!-- 근거: 관광진흥법 시행령 제6조 제1항 제3호·제7호 --></p>
<table><thead><tr><th>바뀌는 내용</th><th>해야 할 절차</th></tr></thead><tbody>
<tr><td>상호 변경</td><td>변경등록 신청, 사유 발생일부터 30일 이내<!-- 근거: 관광진흥법 시행령 제6조 제1항 제2호·제2항 --></td></tr>
<tr><td>대표자 변경</td><td>변경등록 신청, 사유 발생일부터 30일 이내<!-- 근거: 관광진흥법 시행령 제6조 제1항 제2호·제2항, 시행규칙 제3조 제1항 --></td></tr>
<tr><td>객실 수·주택 연면적 변경</td><td>변경등록 목록에는 없으나 등록대장 기재 사항이므로 공사 전에 등록관청과 처리 방법 확인<!-- 근거: 관광진흥법 시행규칙 제4조 제8호 --></td></tr>
<tr><td>영업 양도·양수, 경매 등으로 시설 인수</td><td>지위승계 신고, 승계한 날부터 1개월 이내<!-- 근거: 관광진흥법 제8조 제1항·제2항·제4항 --></td></tr>
<tr><td>1개월 이상 휴업 또는 폐업<!-- 근거: 관광진흥법 제8조 제8항 --></td><td>휴업·폐업 통보, 휴업·폐업한 날부터 30일 이내<!-- 근거: 관광진흥법 제8조 제8항, 시행규칙 제17조 제1항 --></td></tr>
</tbody></table>
<p>객실 구성을 바꿀 때 특히 조심할 이유는 등록기준입니다. 등록기준에 맞지 않게 되면 등록취소, 6개월 이내의 사업정지, 개선명령의 대상이 될 수 있습니다.<!-- 근거: 관광진흥법 제35조 제1항 제1호 --> 도시민박업은 도시지역 주민이 자신이 거주하는 단독주택·다가구주택·아파트·연립주택·다세대주택을 이용하는 업이고, 주요 등록기준은 다음과 같습니다.<!-- 근거: 관광진흥법 제3조 제1항 제3호 라목, 같은 법 시행령 제2조 제1항 제3호 바목 --></p>
<ul><li>주택의 연면적이 230㎡ 미만일 것<!-- 근거: 관광진흥법 시행령 별표 1 제4호 바목 (1) --></li><li>외국어 안내 서비스가 가능한 체제를 갖출 것</li><li>소화기를 1개 이상 두고, 객실마다 단독경보형 감지기를, 개별난방이면 일산화탄소 경보기도 설치할 것<!-- 근거: 관광진흥법 시행령 별표 1 제4호 바목 (3) --></li></ul>

<h2>변경등록 신청 기한과 제출처</h2>
<p>변경등록은 변경사유가 발생한 날부터 30일 이내에 관광사업 변경등록신청서에 변경사실을 증명하는 서류를 첨부해 특별자치시장·특별자치도지사·시장·군수·구청장에게 제출합니다. 신청 내용이 등록기준에 맞으면 변경된 등록증이 발급됩니다.<!-- 근거: 관광진흥법 시행령 제6조 제2항, 시행규칙 제3조 제1항·제4항, 제2조 제7항 --></p>
<ol><li>상호를 바꾼 날, 대표자가 바뀐 날처럼 변경사유가 생긴 날을 먼저 확정합니다.</li><li>그날부터 30일이 되는 날을 신청 기한으로 잡습니다.<!-- 근거: 관광진흥법 시행령 제6조 제2항 --></li><li>관광사업 변경등록신청서를 작성하고, 변경 전후를 보여 주는 증명 서류를 준비합니다.<!-- 근거: 관광진흥법 시행규칙 제3조 제1항(별지 제6호서식) --></li><li>등록증을 받은 시·군·구청 등 등록관청에 제출합니다.</li><li>변경된 등록증을 받아 영업장에 보관합니다.<!-- 근거: 관광진흥법 시행규칙 제3조 제4항 --></li></ol>
<p>기한 안에 변경등록을 하지 않으면 처분 기준상 1차 위반은 시정명령, 2차는 사업정지 15일, 3차는 사업정지 1개월, 4차는 등록취소입니다.<!-- 근거: 관광진흥법 제35조 제1항 제1호, 같은 법 시행령 별표 2 제2호 가목 2) --> 상호 변경은 간판이나 예약 플랫폼 표시를 바꾸면서 잊기 쉬우니, 바꾸는 날 바로 신청 일정을 함께 잡아 두는 것이 좋습니다.</p>

<h2>양수·지위승계 신고와 휴업·폐업 통보</h2>
<p>도시민박업을 양수한 사람은 등록에 따른 관광사업자의 권리·의무를 승계합니다. 경매, 파산 절차의 환가, 압류 재산 매각 등으로 영업에 쓰는 토지·건물과 등록기준 시설 전부를 인수한 사람도 지위를 승계합니다.<!-- 근거: 관광진흥법 제8조 제1항·제2항, 같은 법 시행규칙 제16조 제1항 --> 승계한 사람은 승계한 날부터 1개월 이내에 관광사업 양수(지위승계) 신고서를 등록관청에 제출해야 하고, 등록관청은 내용이 법에 맞으면 신고를 수리합니다.<!-- 근거: 관광진흥법 제8조 제4항·제5항, 시행규칙 제16조 제2항 --></p>
<p>신고서에는 승계인의 성명·주민등록번호를 적은 서류(외국인이면 결격사유가 없음을 증명하는 서류)와 시설인수 명세를 포함한 양도·양수 증명 서류를 붙입니다.<!-- 근거: 관광진흥법 시행규칙 제16조 제2항 제1호·제1호의2·제2호 --> 양도인이 받은 취소·정지처분이나 개선명령의 효과도 승계인에게 넘어가므로, 양수인이 그 사실을 몰랐다고 증명하지 못하면 그대로 떠안게 됩니다. 또 도시민박업은 운영자가 거주하는 주택을 전제로 한 업이므로, 승계인도 그 주택에 거주하는지 확인해야 합니다.<!-- 근거: 관광진흥법 제8조 제3항, 제3조 제1항 제3호 라목 --></p>
<p>사업의 전부나 일부를 1개월 이상 휴업하거나 폐업하면 등록관청에 알려야 하며, 휴업 또는 폐업한 날부터 30일 이내에 휴업·폐업 통보서를 냅니다. 세무서 폐업신고서를 함께 낼 수도 있고, 세무서에 폐업신고를 하면 등록관청이 등록을 직권으로 말소할 수 있습니다.<!-- 근거: 관광진흥법 제8조 제8항·제9항, 시행규칙 제17조 제1항·제3항 --> 지위승계 신고를 늦추면 1차 시정명령부터, 휴업·폐업을 알리지 않으면 1차 시정명령 뒤 2차에 등록취소까지 이어질 수 있습니다.<!-- 근거: 관광진흥법 시행령 별표 2 제2호 바목·사목 --></p>

<div class="faq-section"><h2>자주 묻는 질문 (FAQ)</h2>
<div class="faq-item"><p class="faq-q">Q. 객실을 하나 늘리면 변경등록을 해야 하나요?</p><p class="faq-a">A. 시행령의 객실 수 변경등록 항목은 관광숙박업과 한옥체험업에만 적용됩니다. 다만 객실 수는 등록대장에 기재되고 연면적 230㎡ 미만 기준도 지켜야 하므로, 공사 전에 등록관청에 처리 방법을 확인하십시오.<!-- 근거: 관광진흥법 시행령 제6조 제1항 제3호·제7호, 별표 1 제4호 바목, 시행규칙 제4조 제8호 --></p></div>
<div class="faq-item"><p class="faq-q">Q. 상호만 바꿨는데도 신청해야 하나요?</p><p class="faq-a">A. 네. 상호 변경은 대표자 변경과 함께 도시민박업의 변경등록 사항이며, 바꾼 날부터 30일 이내에 신청합니다.<!-- 근거: 관광진흥법 시행령 제6조 제1항 제2호·제2항 --></p></div>
<div class="faq-item"><p class="faq-q">Q. 가족에게 영업을 넘기면 어떤 절차를 밟나요?</p><p class="faq-a">A. 운영자가 바뀌는 양도·양수라면 넘겨받은 사람이 승계한 날부터 1개월 이내에 지위승계 신고를 합니다. 승계인도 그 주택에 거주해야 하는지 함께 확인하십시오.<!-- 근거: 관광진흥법 제8조 제1항·제4항, 제3조 제1항 제3호 라목 --></p></div>
<div class="faq-item"><p class="faq-q">Q. 비수기에 몇 주만 쉬어도 통보해야 하나요?</p><p class="faq-a">A. 법은 1개월 이상 휴업하는 경우를 통보 대상으로 정합니다. 영업일수 관련 규정은 <a href="/blog/foreigner-homestay-operating-days">외국인도시민박업 연간 영업일수 제한과 운영 규정</a>을 참고하십시오.<!-- 근거: 관광진흥법 제8조 제8항 --></p></div>
</div>

<div class="cta-block"><h3>도시민박업 변경등록과 지위승계 신고, 기한 안에 준비하세요</h3><p>상호·대표자 변경, 양수 후 지위승계 신고, 휴업·폐업 통보까지 유선행정사사무소가 서류 준비와 제출을 돕습니다. 진행 범위는 <a href="/services/urban-guesthouse">외국인관광 도시민박업 등록 안내</a>에서 확인하실 수 있습니다. 전화 02-363-2251, 평일 09:30~17:30 KST.</p><a href="/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">상담 신청하기</a></div>
<p class="author-block">유선행정사사무소 (대표 행정사 정유선)<!-- 근거: 관광진흥법 제3조·제4조·제8조·제35조, 관광진흥법 시행령 제2조·제6조·별표 1·별표 2, 관광진흥법 시행규칙 제2조·제3조·제4조·제16조·제17조 --></p>`,
  },

  en: {
    title: 'Urban Guesthouse Change Registration in Korea — Business Name and Representative Changes, Succession Report, Suspension Notice',
    category: 'Accommodation',
    metaTitle: 'Foreign Tourist Urban Guesthouse Change Registration in Korea',
    metaDescription: 'Urban guesthouse owners in Korea must file a change registration within 30 days of a name or representative change. Succession and closure rules explained.',
    excerpt: 'Changed the business name or representative of your registered urban guesthouse? You have 30 days to file a change registration. This guide covers what counts as a change, where to file, the succession report after a transfer and the notice for suspension or closure.',
    content: `<div class="toc"><p>Contents</p><ol><li>Which changes need a change registration</li><li>Deadline and where to file</li><li>Succession report and suspension or closure notice</li><li>FAQ</li></ol></div>
<p><strong>A foreign tourist urban guesthouse (외국인관광 도시민박업) is a tourist-use facility business that is <em>registered</em> with the city, county or district head under the Tourism Promotion Act. If the business name or the representative changes after registration, you must apply for a change registration within 30 days of the day the change occurred.</strong> It is a registration system, not a permit or a designation, so changes are recorded with the same office that registered you. If the business itself is taken over, the new operator files a succession report instead, and a suspension of 1 month or more or a closure must be notified.</p>
<p>Initial requirements and documents are covered in <a href="/en/blog/urban-guesthouse-registration-guide">our urban guesthouse registration guide</a>, and day-to-day operation in <a href="/en/blog/urban-guesthouse-airbnb-operation-guide">our Airbnb host and urban guesthouse operation guide</a>. This page focuses on what happens after registration.</p>

<h2>Which changes need a change registration</h2>
<p>The Act requires a change registration when an important registered matter set by Presidential Decree changes, and the Enforcement Decree lists those matters by business type. For an urban guesthouse, the item that applies is a change of business name or representative. Changes in the number of rooms appear only as items for tourist accommodation businesses and hanok experience businesses, so they are not listed as change registration items for urban guesthouses.</p>
<table><thead><tr><th>What changes</th><th>What to do</th></tr></thead><tbody>
<tr><td>Business name</td><td>Change registration within 30 days</td></tr>
<tr><td>Representative</td><td>Change registration within 30 days</td></tr>
<tr><td>Number of rooms or floor area of the house</td><td>Not on the list, but recorded in the registry — confirm with the registering office before any works</td></tr>
<tr><td>Transfer of the business, or takeover of the facilities by auction and similar procedures</td><td>Succession report within 1 month of succession</td></tr>
<tr><td>Suspension of 1 month or more, or closure</td><td>Suspension or closure notice within 30 days</td></tr>
</tbody></table>
<p>The reason to be careful with room changes is the registration standards. If the business no longer meets them, the office may cancel the registration, suspend the business for up to 6 months or order improvements. An urban guesthouse is run by a resident of an urban area in the detached house, multi-household house, apartment, row house or multi-family house where that person lives. The main standards are:</p>
<ul><li>total floor area of the house under 230㎡</li><li>a system able to provide guidance in foreign languages</li><li>at least 1 fire extinguisher, a stand-alone smoke detector in every guest room, and a carbon monoxide alarm where heating is individual</li></ul>

<h2>Deadline and where to file</h2>
<p>File the tourism business change registration application, with documents proving the change, with the head of the special self-governing city or province, city, county or district within 30 days of the change. If the application meets the standards, an amended registration certificate is issued.</p>
<ol><li>Fix the date the change occurred, such as the day the name changed or the new representative took office.</li><li>Count 30 days from that date as your filing deadline.</li><li>Complete the change registration application and prepare documents showing the situation before and after the change.</li><li>Submit them to the registering office, such as the city, county or district office that issued your certificate.</li><li>Keep the amended registration certificate at the premises.</li></ol>
<p>Missing the deadline leads, under the disposition standards, to a corrective order for the 1st violation, a 15-day business suspension for the 2nd, a 1-month suspension for the 3rd and cancellation of registration for the 4th. Name changes are easy to forget while updating signs and booking platforms, so schedule the filing on the day you rename.</p>

<h2>Succession report and suspension or closure notice</h2>
<p>A person who takes over an urban guesthouse succeeds to the operator's rights and duties under the registration. So does a person who acquires all the land, buildings and standard facilities through an auction, a bankruptcy sale or a sale of seized property. The successor must submit a tourism business transfer (succession) report to the registering office within 1 month of succession, and the office accepts the report if it complies with the Act.</p>
<p>Attach a document with the successor's name and resident registration number (a foreign national submits proof of no disqualification) and proof of the transfer including a list of the facilities taken over. Cancellation, suspension or improvement orders against the previous operator also carry over unless the successor proves they did not know. Because the business assumes the operator lives in the house, check that the successor will live there too.</p>
<p>If you suspend all or part of the business for 1 month or more, or close it, you must notify the registering office within 30 days of the suspension or closure. A tax office closure report may be filed together, and once a closure is reported to the tax office, the registering office may cancel the registration ex officio. A late succession report can lead to a corrective order for the 1st violation, and failing to notify a suspension or closure can lead to cancellation at the 2nd.</p>

<div class="faq-section"><h2>FAQ</h2>
<div class="faq-item"><p class="faq-q">Q. Do I need a change registration if I add 1 room?</p><p class="faq-a">A. The room-number item in the Decree applies only to tourist accommodation and hanok experience businesses. However, the number of rooms is recorded in the registry and the house must stay under 230㎡, so confirm the procedure with the registering office before construction.</p></div>
<div class="faq-item"><p class="faq-q">Q. I only changed the business name. Do I still have to file?</p><p class="faq-a">A. Yes. A name change, like a representative change, is a change registration item for urban guesthouses. File within 30 days.</p></div>
<div class="faq-item"><p class="faq-q">Q. What if I hand the business over to a family member?</p><p class="faq-a">A. If the operator changes through a transfer, the new operator files a succession report within 1 month of succession. Also confirm whether the successor must live in the house.</p></div>
<div class="faq-item"><p class="faq-q">Q. Do I need to notify a break of a few weeks in the off-season?</p><p class="faq-a">A. The Act makes a suspension of 1 month or more subject to notice. For help with any of these filings, see <a href="/en/services/urban-guesthouse">our urban guesthouse registration service</a>.</p></div>
</div>

<div class="cta-block"><h3>File your urban guesthouse changes on time</h3><p>Yuseon Administrative Scrivener Office helps prepare and submit change registrations, succession reports and suspension or closure notices. Call 02-363-2251, weekdays 09:30~17:30 KST.</p><a href="/en/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">Request a consultation</a></div>
<p class="author-block">Yuseon Administrative Scrivener Office (Chief Scrivener Jeong Yuseon)</p>`,
  },

  zh: {
    title: '外国人观光城市民宿业变更登记 — 商号·代表人变更期限、地位继承申报与停业·歇业通报',
    category: '住宿/旅游',
    metaTitle: '外国人观光城市民宿业变更登记 — 30日期限·地位继承申报·停业歇业通报',
    metaDescription: '外国人观光城市民宿业属于登记业种，商号或代表人变更后须在30日内申请变更登记。本文说明客房数变化时的注意事项、受让后1个月内的地位继承申报及停业·歇业通报。',
    excerpt: '外国人观光城市民宿业登记后，商号或代表人发生变化时须在30日内申请变更登记。本文整理变更登记的对象与提交机关、客房数变化的确认要点、受让经营时的地位继承申报以及停业·歇业通报期限。',
    content: `<div class="toc"><p>目录</p><ol><li>需要变更登记的事项</li><li>变更登记的期限与提交机关</li><li>受让·地位继承申报与停业·歇业通报</li><li>常见问题</li></ol></div>
<p><strong>外国人观光城市民宿业（외국인관광 도시민박업）是依据韩国《旅游振兴法》向市长·郡守·区厅长<em>登记</em>的观光客利用设施业。登记后商号或代表人发生变化的，须自变更事由发生之日起30日内申请变更登记。</strong>这是登记制度，而不是许可或指定，因此变更内容同样向原登记机关办理变更登记。若是整个营业被他人受让，则由受让人办理地位继承申报；停业1个月以上或歇业时，须进行通报。</p>
<p>首次登记的条件与材料请参阅<a href="/zh/blog/urban-guesthouse-registration-guide">外国人城市民宿业登记条件与流程</a>，日常运营请参阅<a href="/zh/blog/urban-guesthouse-airbnb-operation-guide">爱彼迎房东与城市民宿业运营指南</a>。本文只讲登记之后发生的变化。</p>

<h2>需要变更登记的事项</h2>
<p>《旅游振兴法》规定，已登记事项中由总统令规定的重要事项发生变更时须办理变更登记，施行令按业种列出了这些事项。适用于外国人观光城市民宿业的是商号或代表人的变更。客房数变更仅列为观光住宿业和韩屋体验业的事项，因此从条文看并不属于城市民宿业的变更登记事项。</p>
<table><thead><tr><th>变化内容</th><th>应办手续</th></tr></thead><tbody>
<tr><td>商号变更</td><td>30日内申请变更登记</td></tr>
<tr><td>代表人变更</td><td>30日内申请变更登记</td></tr>
<tr><td>客房数·住宅总面积变化</td><td>不在变更登记清单中，但属于登记台账记载事项，施工前应向登记机关确认处理方式</td></tr>
<tr><td>营业转让·受让，或通过拍卖等接收设施</td><td>自继承之日起1个月内办理地位继承申报</td></tr>
<tr><td>停业1个月以上或歇业</td><td>30日内提交停业·歇业通报</td></tr>
</tbody></table>
<p>调整客房时要格外注意登记标准。不再符合登记标准的，可能被撤销登记、处以6个月以内的停业或改善命令。城市民宿业是城市地区居民利用本人居住的独栋住宅、多户住宅、公寓、联排住宅或多世代住宅经营的业种，主要登记标准如下：</p>
<ul><li>住宅总面积未满230㎡</li><li>具备可提供外语接待的体制</li><li>配备1个以上灭火器，每间客房安装独立式火灾报警器，采用分户供暖的还须安装一氧化碳报警器</li></ul>

<h2>变更登记的期限与提交机关</h2>
<p>变更登记须自变更事由发生之日起30日内，将观光事业变更登记申请书连同证明变更事实的材料，提交给特别自治市长·特别自治道知事·市长·郡守·区厅长。申请内容符合登记标准的，将发给变更后的登记证。</p>
<ol><li>先确定变更事由发生之日，例如商号变更日或新代表人就任日。</li><li>以该日起第30日作为申请期限。</li><li>填写观光事业变更登记申请书，准备能说明变更前后情况的证明材料。</li><li>向核发登记证的市·郡·区厅等登记机关提交。</li><li>领取变更后的登记证并保存在营业场所。</li></ol>
<p>未在期限内办理变更登记的，按处分标准，第1次违规为纠正命令，第2次停业15日，第3次停业1个月，第4次撤销登记。更换招牌或预订平台名称时容易忘记申请，建议在更名当天同时安排申请日程。</p>

<h2>受让·地位继承申报与停业·歇业通报</h2>
<p>受让城市民宿业的人继承登记所产生的观光事业者权利与义务。通过拍卖、破产程序中的变价、扣押财产出售等方式接收营业所用土地·建筑物及全部登记标准设施的人，也继承其地位。继承人须自继承之日起1个月内向登记机关提交观光事业受让（地位继承）申报书，登记机关审查后认为符合法律的，予以受理。</p>
<p>申报书须附上记载继承人姓名与居民登录号码的材料（外国人须提交无欠格事由的证明材料），以及包含设施接收明细的转让·受让证明材料。原经营者受到的撤销·停业处分或改善命令的效力也会转移给继承人，除非受让人能证明当时并不知情。此外，城市民宿业以经营者居住的住宅为前提，因此也要确认继承人是否居住在该住宅。</p>
<p>全部或部分营业停业1个月以上或歇业的，须通知登记机关，并在停业或歇业之日起30日内提交停业·歇业通报书。可同时提交税务署歇业申报书；向税务署申报歇业后，登记机关可依职权注销登记。迟延地位继承申报的，第1次即为纠正命令；未通报停业·歇业的，第2次可能被撤销登记。</p>

<div class="faq-section"><h2>常见问题</h2>
<div class="faq-item"><p class="faq-q">Q. 增加1间客房需要变更登记吗？</p><p class="faq-a">A. 施行令中的客房数变更登记事项只适用于观光住宿业和韩屋体验业。但客房数记载于登记台账，住宅也须保持未满230㎡，施工前请向登记机关确认处理方式。</p></div>
<div class="faq-item"><p class="faq-q">Q. 只改了商号也要申请吗？</p><p class="faq-a">A. 是的。商号变更与代表人变更同属城市民宿业的变更登记事项，须在变更之日起30日内申请。</p></div>
<div class="faq-item"><p class="faq-q">Q. 把营业交给家人经营，要办什么手续？</p><p class="faq-a">A. 如果经营者通过转让·受让发生变化，由接手的人自继承之日起1个月内办理地位继承申报，同时确认继承人是否须居住在该住宅。</p></div>
<div class="faq-item"><p class="faq-q">Q. 淡季只休息几周也要通报吗？</p><p class="faq-a">A. 法律以停业1个月以上作为通报对象。具体办理可参阅<a href="/zh/services/urban-guesthouse">外国人观光城市民宿业登记服务</a>。</p></div>
</div>

<div class="cta-block"><h3>城市民宿业变更登记与地位继承申报，请在期限内准备</h3><p>유선행정사사무소（代表行政士 정유선）协助准备并提交变更登记、地位继承申报以及停业·歇业通报。电话 02-363-2251，工作日 09:30~17:30 KST。</p><a href="/zh/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">申请咨询</a></div>
<p class="author-block">유선행정사사무소（代表行政士 정유선）</p>`,
  },

  ja: {
    title: '外国人観光都市民泊業の変更登録 — 商号・代表者変更の期限、地位承継申告と休業・廃業通報',
    category: '宿泊/観光',
    metaTitle: '外国人観光都市民泊業の変更登録 — 30日の期限・地位承継申告・休廃業通報',
    metaDescription: '外国人観光都市民泊業は登録業種のため、商号や代表者が変わったら30日以内に変更登録が必要です。客室数を変える際の確認点、譲受後1か月以内の地位承継申告、休業・廃業通報まで解説します。',
    excerpt: '外国人観光都市民泊業の登録後に商号や代表者が変わった場合は、30日以内に変更登録を申請しなければなりません。変更登録の対象と提出先、客室数を変える際の確認点、営業を引き継いだときの地位承継申告、休業・廃業通報の期限をまとめました。',
    content: `<div class="toc"><p>目次</p><ol><li>変更登録が必要な事項</li><li>変更登録の期限と提出先</li><li>譲受・地位承継申告と休業・廃業通報</li><li>よくある質問</li></ol></div>
<p><strong>外国人観光都市民泊業（외국인관광 도시민박업）は、韓国「観光振興法」に基づき市長・郡守・区庁長に<em>登録</em>する観光客利用施設業です。登録後に商号や代表者が変わった場合は、その事由が生じた日から30日以内に変更登録を申請しなければなりません。</strong>許可や指定ではなく登録の制度なので、変更内容も最初に登録した官庁で変更登録として反映します。営業そのものを引き継いだ場合は変更登録ではなく地位承継申告を、1か月以上休む場合や廃業する場合は休業・廃業の通報を行います。</p>
<p>最初の登録要件と書類は<a href="/ja/blog/urban-guesthouse-registration-guide">外国人都市民泊業登録ガイド</a>で、日々の運営は<a href="/ja/blog/urban-guesthouse-airbnb-operation-guide">エアビーアンドビーのホスト登録と都市民泊業の運営ガイド</a>で扱っています。ここでは登録後に変わる事項に絞って説明します。</p>

<h2>変更登録が必要な事項</h2>
<p>「観光振興法」は、登録事項のうち大統領令で定める重要事項を変更するときに変更登録をするよう定め、施行令がその項目を業種別に挙げています。外国人観光都市民泊業に当てはまるのは、商号または代表者の変更です。客室数の変更は観光宿泊業と韓屋体験業に限った項目として書かれているため、条文上は都市民泊業の変更登録事項に入っていません。</p>
<table><thead><tr><th>変わる内容</th><th>必要な手続</th></tr></thead><tbody>
<tr><td>商号の変更</td><td>30日以内に変更登録を申請</td></tr>
<tr><td>代表者の変更</td><td>30日以内に変更登録を申請</td></tr>
<tr><td>客室数・住宅の延べ面積の変更</td><td>変更登録の項目にはないが登録台帳の記載事項のため、工事前に登録官庁へ処理方法を確認</td></tr>
<tr><td>営業の譲渡・譲受、競売などによる施設の引受け</td><td>承継した日から1か月以内に地位承継申告</td></tr>
<tr><td>1か月以上の休業または廃業</td><td>30日以内に休業・廃業通報</td></tr>
</tbody></table>
<p>客室構成を変えるときに注意すべき理由は登録基準です。登録基準に適合しなくなると、登録取消し、6か月以内の事業停止、改善命令の対象になり得ます。都市民泊業は、都市地域の住民が自ら居住する一戸建て住宅・多世帯住宅・アパート・連立住宅・多世代住宅を利用する業であり、主な登録基準は次のとおりです。</p>
<ul><li>住宅の延べ面積が230㎡未満であること</li><li>外国語による案内サービスができる体制を整えること</li><li>消火器を1個以上備え、客室ごとに単独警報型感知器を、個別暖房の場合は一酸化炭素警報器も設置すること</li></ul>

<h2>変更登録の期限と提出先</h2>
<p>変更登録は、変更事由が生じた日から30日以内に、観光事業変更登録申請書に変更事実を証明する書類を添えて、特別自治市長・特別自治道知事・市長・郡守・区庁長に提出します。申請内容が登録基準に適合すれば、変更後の登録証が交付されます。</p>
<ol><li>商号を変えた日、代表者が交代した日など、変更事由が生じた日をまず確定します。</li><li>その日から30日目を申請期限として設定します。</li><li>観光事業変更登録申請書を作成し、変更前後が分かる証明書類を準備します。</li><li>登録証を受けた市・郡・区庁などの登録官庁に提出します。</li><li>変更後の登録証を受け取り、営業所に保管します。</li></ol>
<p>期限内に変更登録をしないと、処分基準上、1次違反は是正命令、2次は事業停止15日、3次は事業停止1か月、4次は登録取消しです。看板や予約サイトの表示を変える際に申請を忘れがちなので、商号を変えるその日に申請日程も決めておくと安心です。</p>

<h2>譲受・地位承継申告と休業・廃業通報</h2>
<p>都市民泊業を譲り受けた人は、登録に基づく観光事業者の権利・義務を承継します。競売、破産手続での換価、差押財産の売却などにより、営業に使う土地・建物と登録基準の施設をすべて引き受けた人も地位を承継します。承継した人は承継した日から1か月以内に観光事業譲受（地位承継）申告書を登録官庁に提出しなければならず、登録官庁は内容が法に適合すれば申告を受理します。</p>
<p>申告書には、承継人の氏名・住民登録番号を記載した書類（外国人の場合は欠格事由がないことを証明する書類）と、施設引受明細を含む譲渡・譲受の証明書類を添付します。前の事業者が受けた取消し・停止処分や改善命令の効果も承継人に引き継がれ、譲受人がその事実を知らなかったと証明できなければそのまま負うことになります。また都市民泊業は運営者が居住する住宅を前提とする業なので、承継人もその住宅に居住するかを確認する必要があります。</p>
<p>事業の全部または一部を1か月以上休業したり廃業したりした場合は登録官庁に知らせなければならず、休業または廃業した日から30日以内に休業・廃業通報書を提出します。税務署への廃業申告書を一緒に提出することもでき、税務署に廃業申告をすると登録官庁が職権で登録を抹消することがあります。地位承継申告が遅れると1次で是正命令、休業・廃業を知らせないと2次で登録取消しに至ることがあります。</p>

<div class="faq-section"><h2>よくある質問</h2>
<div class="faq-item"><p class="faq-q">Q. 客室を1室増やす場合、変更登録が必要ですか。</p><p class="faq-a">A. 施行令の客室数変更登録の項目は観光宿泊業と韓屋体験業にのみ適用されます。ただし客室数は登録台帳に記載され、延べ面積230㎡未満の基準も守る必要があるため、工事前に登録官庁へ処理方法を確認してください。</p></div>
<div class="faq-item"><p class="faq-q">Q. 商号だけ変えた場合も申請が必要ですか。</p><p class="faq-a">A. はい。商号の変更は代表者の変更と同じく都市民泊業の変更登録事項であり、変えた日から30日以内に申請します。</p></div>
<div class="faq-item"><p class="faq-q">Q. 家族に営業を引き継ぐ場合はどうなりますか。</p><p class="faq-a">A. 譲渡・譲受で運営者が変わるなら、引き継いだ人が承継した日から1か月以内に地位承継申告をします。承継人もその住宅に居住する必要があるかを併せて確認してください。</p></div>
<div class="faq-item"><p class="faq-q">Q. 閑散期に数週間だけ休む場合も通報が必要ですか。</p><p class="faq-a">A. 法は1か月以上の休業を通報の対象としています。手続の詳細は<a href="/ja/services/urban-guesthouse">外国人観光都市民泊業の登録サービス</a>をご覧ください。</p></div>
</div>

<div class="cta-block"><h3>都市民泊業の変更登録・地位承継申告は期限内に</h3><p>ユソン行政士事務所が、変更登録、地位承継申告、休業・廃業通報の書類準備と提出をお手伝いします。電話 02-363-2251、平日 09:30~17:30 KST。</p><a href="/ja/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">相談を申し込む</a></div>
<p class="author-block">ユソン行政士事務所（代表行政士 チョン・ユソン）</p>`,
  },
}

// 이 주제에서 틀리기 쉬운 인허가 구분 오기(4언어) — 도시민박업은 '등록', 지위승계는 '신고', 휴폐업은 '통보'
entry.wrongTerms = [
    '도시민박업 허가', '도시민박업 영업신고', '도시민박업 지정', '민박업 영업허가', '변경신고서', '휴업신고',
    'guesthouse permit', 'guesthouse license', 'business permit',
    '城市民宿业许可', '城市民宿业营业申报', '民宿许可证',
    '都市民泊業許可', '都市民泊業の指定', '民泊許可',
  ]

export default entry
