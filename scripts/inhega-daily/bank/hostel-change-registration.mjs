// 원고 은행 — INHE-BANK-1119(2026-11-19, 맥4 하위 작성 담당 D, kind=seo3958, angle=change-report)
// 주제(풀): hostel(호스텔업등록) / 세부주제: change-report(변경신고·변경등록) — 호스텔업 등록 후 변경등록 대상·기한·서류·사업계획 변경승인
// 검색어(안): "호스텔업 변경등록"(SPEC 배정표 대표 검색어)
//
// ※ SPEC 배정표는 호스텔업을 '관광객 이용시설업'으로 적었으나, 현행 시행령 제2조 제1항 제2호 마목상 호스텔업은 관광숙박업 중 '호텔업'의 한 종류다.
//   이 원고는 법령 원문을 따라 관광숙박업(호텔업)으로 썼다 — 도시민박업(관광객 이용시설업)과 갈리는 지점이 바로 여기다.
//
// 겹침 검사(lib/blog-posts-data.ts·blog-i18n.ts·bank/hostel-violation-penalties.mjs·bank/urban-guesthouse-change-registration.mjs):
//   hostel-violation-penalties('운영 중 신고·변경 의무'에 변경등록 30일·지위승계·휴폐업을 각 한 줄), hostel-registration-facility('7. 변경 등록 절차'
//   항목 나열), hostel-registration-guide(등록 일반), hostel-room-fire-standards·hostel-vs-guesthouse·hostel-select,
//   urban-guesthouse-change-registration(도시민박업 변경등록 — 다른 업종)
//   → 이 글은 호스텔업 변경등록의 서류·담당 공무원 확인사항·서식 처리기간·등록심의·사업계획 변경승인 선행(10%·호텔업 종류 간 업종 변경)과
//     대표자 변경과 양수(지위승계)의 경계, 외국인 양수인 서류를 다룬다. 처분은 hostel-violation-penalties 로 링크만.
//
// 법령 대조(law.go.kr DRF OC=visionlaw, 2026-11-19 조회, 사본 ~/work/inhebank-1119/law/):
//   관광진흥법 MST 285653(2026. 10. 29. 시행) — 제4조 제1항·제4항(등록·변경등록), 제8조 제1항~제5항·제8항(양수·지위승계 1개월 신고·휴폐업 알림),
//     제15조 제1항(관광숙박업 사업계획 승인·변경승인), 제17조 제1항·제4항(등록사항 변경 포함 등록심의위원회 심의, 경미한 사항 예외),
//     제35조 제1항 제1호(변경등록기간 내 미이행 시 취소·정지·개선명령)
//   관광진흥법 시행령 MST 291395(2026. 10. 29. 시행) — 제2조 제1항 제2호 마목(호스텔업 = 호텔업의 종류), 제6조 제1항 제1호~제4호·제2항(변경등록 사항·30일),
//     제9조 제1항 제1호·제2호·제4호(사업계획 변경승인: 부지·대지·연면적 100분의 10 이상, 호텔업 종류 간 업종 변경), 제20조 제2항(심의 생략 경미한 변경:
//     관계 기관 둘 이하), 별표 1 제2호 마목(호스텔업 등록기준 4가지)
//   관광진흥법 시행규칙 MST 291551(2026. 10. 29. 시행) — 제3조 제1항~제4항(변경등록신청서 별지 제6호서식·변경사실 증명 서류·전기안전점검확인서
//     행정정보 확인·변경등록증), 별지 제6호서식(처리기간 4일), 제16조 제2항 제1호의2·제2호(지위승계 신고 서류 — 외국인 결격사유 부존재 증명:
//     정부 발행 서류 또는 공증 진술서에 영사 확인이나 아포스티유), 제17조 제1항(휴폐업 통보 30일 이내)
// 인허가 구분: 호스텔업 = 관광숙박업 '등록'(허가·신고 아님), 변경 = '변경등록', 면적·업종 변경 = 사업계획 '변경승인' 선행, 양수 = 지위승계 '신고'.
// 확신 없어 뺀 것: 주사업장 소재지 이전의 처리 방식(관광숙박업 변경등록 사항 목록에 없음 → 화면은 "등록관청과 먼저 확인"만),
//   도미토리 침대 수 조정이 '객실 형태 변경'에 해당하는지(법령 문언 없음), 등록심의를 거치는 경우의 실제 소요기간, 공중위생관리법상 숙박업 의제와의 관계,
//   법정 금액(서식 수수료란 포함) 전부, 지자체별 담당 부서명.

const SLUG = 'hostel-change-registration'

const entry = {
  topic: 'hostel',
  angle: 'change-report',
  slug: SLUG,
  kind: 'seo3958',
  keyword: '호스텔업 변경등록',
  source: { type: 'SPEC', query: '호스텔업 변경등록' },
  pexelsId: 7031881,
  coverImage: '',
  relatedServices: [
    { title: '호스텔업 등록', href: '/services/hostel' },
  ],

  ko: {
    title: '호스텔업 변경등록 — 상호·대표자·객실·부대시설이 바뀔 때 30일 기한과 서류',
    category: '숙박/관광',
    metaTitle: '호스텔업 변경등록 — 대상·30일 기한·서류와 사업계획 변경승인',
    metaDescription: '호스텔업은 관광숙박업이라 상호·대표자, 객실 수·형태, 부대시설이 바뀌면 30일 이내 변경등록을 해야 합니다. 면적 10% 이상·업종 변경 때의 사업계획 변경승인과 양수 신고 구분까지 정리했습니다.',
    excerpt: '호스텔업은 관광진흥법상 호텔업의 한 종류입니다. 상호·대표자, 객실 수·형태, 부대시설이 바뀌면 사유가 생긴 날부터 30일 이내 변경등록을 하고, 면적을 크게 바꾸거나 다른 호텔업으로 바꾸려면 사업계획 변경승인을 먼저 받습니다.',
    content: `<div class="toc"><p>목차</p><ol><li>변경등록 대상과 먼저 받을 승인</li><li>서류와 진행 순서</li><li>유선행정사사무소가 돕는 범위</li><li>자주 묻는 질문 (FAQ)</li></ol></div>
<p><strong>호스텔업은 관광진흥법상 관광숙박업 가운데 호텔업의 한 종류라, 등록한 뒤 상호나 대표자, 객실 수와 형태, 부대시설의 위치·면적·종류가 바뀌면 변경사유가 생긴 날부터 30일 이내에 변경등록신청서를 특별자치시장·특별자치도지사·시장·군수·구청장에게 내야 합니다.</strong><!-- 근거: 관광진흥법 제4조 제4항, 같은 법 시행령 제2조 제1항 제2호 마목, 제6조 제1항 제1호~제4호·제2항 --> 외국인관광 도시민박업은 관광객 이용시설업이라 변경등록 사항이 다르므로, 두 업종을 섞어 보지 않아야 합니다.</p>
<p>도시민박업의 변경 절차는 <a href="/blog/urban-guesthouse-change-registration">외국인관광 도시민박업 변경등록</a>, 기한을 놓쳤을 때의 처분은 <a href="/blog/hostel-violation-penalties">호스텔업 위반 시 제재</a>, 시설 기준 일반은 <a href="/blog/hostel-registration-facility">호스텔업 등록 시설 기준</a>에서 다룹니다.</p>

<h2>변경등록 대상과 먼저 받을 승인</h2>
<table><thead><tr><th>바뀌는 것</th><th>절차</th><th>기한</th></tr></thead><tbody>
<tr><td>상호, 대표자</td><td>변경등록</td><td>사유 발생일부터 30일 이내<!-- 근거: 시행령 제6조 제1항 제2호·제2항 --></td></tr>
<tr><td>객실 수와 형태</td><td>변경등록. 바꾼 뒤에도 개별 관광객용 객실, 화장실·샤워장·취사장 같은 편의시설, 문화·정보 교류시설 기준을 유지해야 합니다.</td><td>30일 이내<!-- 근거: 시행령 제6조 제1항 제3호, 별표 1 제2호 마목 --></td></tr>
<tr><td>부대시설의 위치·면적·종류</td><td>변경등록</td><td>30일 이내<!-- 근거: 시행령 제6조 제1항 제4호 --></td></tr>
<tr><td>부지·대지 면적이나 건축 연면적을 당초 승인 면적의 10% 이상 변경, 소형호텔업 등 다른 호텔업으로 업종 변경<!-- 근거: 시행령 제9조 제1항 제1호·제2호·제4호 --></td><td>바꾸기 전에 사업계획 변경승인을 받고, 승인받은 사항을 변경등록</td><td>승인 후 30일 이내 변경등록<!-- 근거: 관광진흥법 제15조 제1항, 시행령 제9조 제1항 제1호·제2호·제4호, 제6조 제1항 제1호 --></td></tr>
<tr><td>사업 양수, 법인 합병, 경매 등으로 주요 시설 전부 인수</td><td>지위승계 신고</td><td>승계한 날부터 1개월 이내<!-- 근거: 관광진흥법 제8조 제1항·제2항·제4항 --></td></tr>
<tr><td>1개월 이상 휴업, 폐업<!-- 근거: 관광진흥법 제8조 제8항 --></td><td>휴업·폐업 통보</td><td>휴업·폐업한 날부터 30일 이내<!-- 근거: 관광진흥법 제8조 제8항, 시행규칙 제17조 제1항 --></td></tr>
</tbody></table>
<p>법인 호스텔의 대표이사만 바뀌는 경우는 사업자는 그대로이므로 대표자 변경등록입니다. 개인 운영자가 다른 사람에게 사업을 넘기면 사업자 자체가 바뀌므로 변경등록이 아니라 양수인의 지위승계 신고로 처리합니다. 한편 사업장 주소를 옮기는 것은 관광숙박업 변경등록 사항에 들어 있지 않아, 계획 단계에서 등록관청과 처리 방식을 먼저 확인해야 합니다.</p>

<h2>서류와 진행 순서</h2>
<p>변경등록신청서에는 변경사실을 증명하는 서류를 각 1부 붙입니다. 면적 변경 등으로 전기안전점검을 받아야 하는 호텔업 변경등록이면 담당 공무원이 전기안전점검확인서를 행정정보로 확인하고, 확인에 동의하지 않으면 신청인이 직접 붙입니다. 서식에 적힌 처리기간은 4일이며, 등록관청은 기준에 맞으면 변경등록증을 발급합니다.<!-- 근거: 시행규칙 제3조 제1항·제2항·제4항, 별지 제6호서식 --> 다만 관광숙박업 등록사항의 변경은 원칙적으로 등록심의위원회 심의를 거치고, 관계되는 기관이 둘 이하인 경미한 변경만 심의를 생략할 수 있습니다.<!-- 근거: 관광진흥법 제17조 제1항·제4항, 시행령 제20조 제2항 --></p>
<ol><li>바뀌는 사항이 변경등록, 사업계획 변경승인, 지위승계 가운데 어디에 해당하는지 나눕니다.</li><li>면적·업종 변경이면 공사나 전환 전에 사업계획 변경승인을 신청합니다.</li><li>객실·부대시설을 바꾸면 도면과 사진 등 변경사실 증명 서류를 준비합니다.</li><li>사유가 생긴 날부터 기한 안에 변경등록신청서를 냅니다.</li><li>변경등록증을 받아 사업장에 새 등록 내용을 반영합니다.</li></ol>
<p>변경등록기간 안에 변경등록을 하지 않으면 등록취소, 사업정지 또는 개선명령의 사유가 됩니다.<!-- 근거: 관광진흥법 제35조 제1항 제1호 --></p>

<h2>유선행정사사무소가 돕는 범위</h2>
<p>유선행정사사무소는 바뀌는 사항의 절차 구분, 사업계획 변경승인 신청, 변경등록신청서와 증명 서류 작성, 등록심의 보완 대응, 양수 시 지위승계 신고까지 함께합니다. 객실이나 부대시설 공사를 앞두고 있다면 공사 전에 변경 범위가 등록기준과 사업계획에 맞는지부터 함께 점검합니다. 진행 범위는 <a href="/services/hostel">호스텔업 등록 안내</a>에서 확인하실 수 있습니다.</p>

<div class="faq-section"><h2>자주 묻는 질문 (FAQ)</h2>
<div class="faq-item"><p class="faq-q">Q. 호스텔 이름만 바꿔도 변경등록을 하나요?</p><p class="faq-a">A. 네. 상호 변경은 변경등록 사항이라 바꾼 날부터 30일 이내에 신청합니다.<!-- 근거: 시행령 제6조 제1항 제2호·제2항 --></p></div>
<div class="faq-item"><p class="faq-q">Q. 외국인이 운영 중인 호스텔을 인수하면 어떤 서류가 필요한가요?</p><p class="faq-a">A. 지위승계 신고서에 양도·양수 증명 서류(시설인수 명세 포함)와, 외국인 양수인(법인은 대표자·임원)이 결격사유에 해당하지 않음을 증명하는 서류를 붙입니다. 이 서류는 해당 국가 정부 등이 발행한 서류나 공증 진술서로서 영사 확인 또는 아포스티유를 받은 것이어야 합니다.<!-- 근거: 시행규칙 제16조 제2항 제1호의2·제2호 --></p></div>
<div class="faq-item"><p class="faq-q">Q. 호스텔을 소형호텔로 바꿀 수 있나요?</p><p class="faq-a">A. 새 업종의 등록기준을 갖추면 호텔업 종류 간 업종 변경으로 사업계획 변경승인을 받은 뒤 변경등록을 합니다.</p></div>
<div class="faq-item"><p class="faq-q">Q. 인수하면서 과거 처분도 넘어오나요?</p><p class="faq-a">A. 종전 사업자가 받은 취소·정지처분이나 개선명령의 효과는 원칙적으로 승계되지만, 양수 당시 그 처분·명령이나 위반 사실을 몰랐음을 증명하면 승계되지 않습니다. 인수 계약 전에 등록관청에서 행정처분 이력을 확인해 두면 이 증명 부담을 줄일 수 있습니다.<!-- 근거: 관광진흥법 제8조 제3항 --></p></div>
</div>

<div class="cta-block"><h3>바꾸기 전에 절차부터 정하세요</h3><p>등록증과 바꾸려는 내용을 알려 주시면 유선행정사사무소가 변경등록·변경승인·지위승계 가운데 필요한 절차와 서류, 기한을 정리해 드립니다. 전화 02-325-8222, 평일 09:30~17:30 KST.</p><a href="/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">상담 신청하기</a></div>
<p class="author-block">유선행정사사무소 (대표 행정사 정유선)<!-- 근거: 관광진흥법 제4조·제8조·제15조·제17조·제35조, 시행령 제2조·제6조·제9조·제20조, 시행규칙 제3조·제16조·제17조 --></p>`,
  },

  en: {
    title: 'Hostel Change Registration in Korea — 30-Day Deadline for Name, Representative, Rooms and Facilities',
    category: 'Accommodation',
    metaTitle: 'Hostel Change Registration in Korea: Scope and Deadline',
    metaDescription: 'A Korean hostel is tourist accommodation, so changes to its name, representative, rooms or ancillary facilities need change registration within 30 days.',
    excerpt: 'Under the Tourism Promotion Act, a hostel is a type of hotel business. Changes to the trade name, representative, number and type of rooms or ancillary facilities require change registration within 30 days, and large area changes or a switch to another hotel type need prior business plan change approval.',
    content: `<div class="toc"><p>Contents</p><ol><li>What needs change registration and prior approval</li><li>Documents and steps</li><li>How we help</li><li>FAQ</li></ol></div>
<p><strong>A hostel in Korea is a type of hotel business within tourist accommodation under the Tourism Promotion Act, so after registration, changes to the trade name or representative, the number and type of rooms, or the location, area and type of ancillary facilities require a change registration application to the city, county or district office within 30 days of the change.</strong> A foreign tourist urban homestay is a different category with different change items, so do not mix the two.</p>
<p>See <a href="/en/blog/urban-guesthouse-change-registration">urban homestay change registration</a>, <a href="/en/blog/hostel-violation-penalties">hostel violation penalties</a> and <a href="/en/blog/hostel-registration-guide">our hostel registration guide</a>.</p>

<h2>What needs change registration and prior approval</h2>
<table><thead><tr><th>Change</th><th>Procedure</th><th>Deadline</th></tr></thead><tbody>
<tr><td>Trade name, representative</td><td>Change registration</td><td>Within 30 days</td></tr>
<tr><td>Number and type of rooms</td><td>Change registration; rooms for individual travellers, shared facilities and a cultural exchange space must still meet the standards</td><td>Within 30 days</td></tr>
<tr><td>Location, area or type of ancillary facilities</td><td>Change registration</td><td>Within 30 days</td></tr>
<tr><td>Site or floor area change of 10% or more of the approved plan, or a switch to another hotel type such as a small hotel</td><td>Business plan change approval first, then change registration</td><td>Within 30 days after approval</td></tr>
<tr><td>Acquisition, merger or purchase of all main facilities at auction</td><td>Succession report</td><td>Within 1 month</td></tr>
<tr><td>Suspension of 1 month or more, closure</td><td>Notice</td><td>Within 30 days</td></tr>
</tbody></table>
<p>If only the representative director of a corporate hostel changes, the operator stays the same, so it is a change registration. If an individual operator sells the business, the operator itself changes, so the buyer files a succession report. Moving the premises is not on the list of change items for tourist accommodation, so confirm the process with the registration office first.</p>

<h2>Documents and steps</h2>
<p>Attach documents proving the change. Where an electrical safety inspection is needed, the official checks the inspection record electronically unless you decline. The form lists 4 days for processing, and a new certificate is issued. Changes to tourist accommodation registrations generally go through the registration review committee, except minor changes involving two or fewer agencies.</p>
<ol><li>Decide whether the change needs change registration, plan change approval or a succession report.</li><li>Apply for plan change approval before works or conversion.</li><li>Prepare plans and photos proving room or facility changes.</li><li>File within the deadline.</li><li>Receive the new certificate and update your premises.</li></ol>
<p>Missing the change registration deadline is a ground for cancellation, suspension or an improvement order.</p>

<h2>How we help</h2>
<p>YouSun Administrative Agency classifies the change, applies for plan change approval, prepares the application and proof, responds to committee requests and files succession reports. See <a href="/en/services/hostel">our hostel registration service</a>.</p>

<div class="faq-section"><h2>FAQ</h2>
<div class="faq-item"><p class="faq-q">Q. Does a name change alone need change registration?</p><p class="faq-a">A. Yes, within 30 days.</p></div>
<div class="faq-item"><p class="faq-q">Q. What does a foreign buyer of a hostel submit?</p><p class="faq-a">A. Proof of the transfer including the facilities taken over, and proof that the buyer (for a corporation, its representative and officers) is not disqualified: a government-issued document or notarised statement with consular confirmation or an apostille.</p></div>
<div class="faq-item"><p class="faq-q">Q. Can a hostel become a small hotel?</p><p class="faq-a">A. Yes, if it meets the new standards, through plan change approval followed by change registration.</p></div>
<div class="faq-item"><p class="faq-q">Q. Do past sanctions pass to the buyer?</p><p class="faq-a">A. In principle yes, unless the buyer proves it did not know of them at the time of acquisition.</p></div>
</div>

<div class="cta-block"><h3>Decide the procedure before you change</h3><p>Send your registration certificate and planned change, and YouSun Administrative Agency will set out the procedure, documents and deadline. Call 02-325-8222, weekdays 09:30~17:30 KST.</p><a href="/en/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">Request a consultation</a></div>
<p class="author-block">YouSun Administrative Agency (Chief Administrative Agent Jung Yu-sun)</p>`,
  },

  zh: {
    title: '韩国青年旅舍业变更登记 — 商号、代表人、客房、附属设施变化时的30日期限与材料',
    category: '住宿/旅游',
    metaTitle: '韩国青年旅舍业变更登记 — 对象、30日期限与材料',
    metaDescription: '韩国青年旅舍业属于观光住宿业，商号、代表人、客房数量和形态、附属设施变化时须在30日内办理变更登记。本文还说明面积变更10%以上或业种变更时的事业计划变更批准及受让申报的区别。',
    excerpt: '根据旅游振兴法，青年旅舍业是酒店业的一种。商号、代表人、客房数量和形态、附属设施变化时须在30日内办理变更登记；大幅变更面积或转为其他酒店业种的，须先取得事业计划变更批准。',
    content: `<div class="toc"><p>目录</p><ol><li>变更登记对象与须先取得的批准</li><li>材料与步骤</li><li>我们可以协助的范围</li><li>常见问题</li></ol></div>
<p><strong>韩国青年旅舍业（호스텔업）在旅游振兴法上属于观光住宿业中酒店业的一种，登记后商号或代表人、客房数量和形态、附属设施的位置·面积·种类发生变化的，须自变更事由发生之日起30日内向特别自治市长、特别自治道知事、市长、郡守、区厅长提交变更登记申请书。</strong>外国人观光城市民宿业属于观光客利用设施业，变更登记事项不同，不可混为一谈。</p>
<p>城市民宿的变更见<a href="/zh/blog/urban-guesthouse-change-registration">外国人观光城市民宿业变更登记</a>，逾期处分见<a href="/zh/blog/hostel-violation-penalties">青年旅舍业违规制裁</a>，登记总体见<a href="/zh/blog/hostel-registration-guide">青年旅舍业登记指南</a>。</p>

<h2>变更登记对象与须先取得的批准</h2>
<table><thead><tr><th>变更事项</th><th>程序</th><th>期限</th></tr></thead><tbody>
<tr><td>商号、代表人</td><td>变更登记</td><td>30日内</td></tr>
<tr><td>客房数量和形态</td><td>变更登记；变更后仍须满足个人游客客房、卫生间·淋浴·厨房等便利设施、文化信息交流设施标准</td><td>30日内</td></tr>
<tr><td>附属设施的位置·面积·种类</td><td>变更登记</td><td>30日内</td></tr>
<tr><td>用地或建筑面积变更达原批准面积10%以上，或转为小型酒店业等其他酒店业种</td><td>先取得事业计划变更批准，再办理变更登记</td><td>批准后30日内</td></tr>
<tr><td>受让、合并或通过拍卖接收全部主要设施</td><td>地位承继申报</td><td>1个月内</td></tr>
<tr><td>停业1个月以上、歇业</td><td>停业·歇业通报</td><td>30日内</td></tr>
</tbody></table>
<p>法人旅舍仅更换代表理事的，经营者不变，属于代表人变更登记；个人经营者将业务转让他人的，经营者本身变化，由受让人办理地位承继申报。迁移营业场所不在观光住宿业变更登记事项中，应事先与登记机关确认处理方式。</p>

<h2>材料与步骤</h2>
<p>变更登记申请书须附证明变更事实的材料各1份。因面积变更等须接受电气安全检查的，由经办公务员通过行政信息确认检查确认书，不同意确认的由申请人自行附上。表格所列处理期限为4日，符合标准即发放变更登记证。观光住宿业登记事项的变更原则上须经登记审议委员会审议，仅涉及两个以下相关机关的轻微变更可免审议。</p>
<ol><li>区分属于变更登记、事业计划变更批准还是地位承继。</li><li>面积或业种变更的，在施工或转换前申请事业计划变更批准。</li><li>客房或附属设施变更的，准备图纸、照片等证明材料。</li><li>在期限内提交变更登记申请书。</li><li>领取变更登记证并在营业场所反映新内容。</li></ol>
<p>未在变更登记期限内办理的，构成取消登记、停业或改善命令的事由。</p>

<h2>我们可以协助的范围</h2>
<p>YouSun Administrative Agency负责区分程序、申请事业计划变更批准、制作变更登记申请书和证明材料、应对审议补正，以及受让时的地位承继申报。详见<a href="/zh/services/hostel">青年旅舍业登记服务</a>。</p>

<div class="faq-section"><h2>常见问题</h2>
<div class="faq-item"><p class="faq-q">Q. 只改旅舍名称也要变更登记吗？</p><p class="faq-a">A. 要。商号变更属于变更登记事项，须在30日内申请。</p></div>
<div class="faq-item"><p class="faq-q">Q. 外国人收购旅舍需要哪些材料？</p><p class="faq-a">A. 地位承继申报书须附转让证明（含设施接收明细），以及证明外国人受让人（法人为代表人和高管）不属于欠格事由的材料，须为该国政府等出具的文件或公证陈述书，并经领事确认或附海牙认证。</p></div>
<div class="faq-item"><p class="faq-q">Q. 可以把青年旅舍改为小型酒店吗？</p><p class="faq-a">A. 符合新业种登记标准的，作为酒店业种之间的变更，取得事业计划变更批准后办理变更登记。</p></div>
<div class="faq-item"><p class="faq-q">Q. 收购时以前的处分也会承继吗？</p><p class="faq-a">A. 原则上承继，但受让人能证明受让时不知情的除外。</p></div>
</div>

<div class="cta-block"><h3>变更前先确定程序</h3><p>告诉我们登记证内容和拟变更事项，YouSun Administrative Agency为你整理所需程序、材料和期限。电话 02-325-8222，工作日 09:30~17:30 KST。</p><a href="/zh/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">申请咨询</a></div>
<p class="author-block">YouSun Administrative Agency（代表行政士 Jung Yu-sun）</p>`,
  },

  ja: {
    title: '韓国のホステル業の変更登録 — 商号・代表者・客室・付帯施設が変わるときの30日期限と書類',
    category: '宿泊/観光',
    metaTitle: '韓国のホステル業の変更登録 — 対象・30日期限・書類',
    metaDescription: '韓国のホステル業は観光宿泊業なので、商号・代表者、客室の数と形態、付帯施設が変われば30日以内に変更登録が必要です。面積10%以上の変更や業種変更時の事業計画変更承認、譲受届出との区別も解説します。',
    excerpt: '観光振興法上、ホステル業はホテル業の一種です。商号・代表者、客室の数と形態、付帯施設が変われば事由発生日から30日以内に変更登録をし、面積を大きく変えたり他のホテル業に変えたりするには先に事業計画の変更承認を受けます。',
    content: `<div class="toc"><p>目次</p><ol><li>変更登録の対象と先に受ける承認</li><li>書類と進め方</li><li>サポートの範囲</li><li>よくある質問</li></ol></div>
<p><strong>韓国のホステル業は観光振興法上、観光宿泊業のうちホテル業の一種であり、登録後に商号や代表者、客室の数と形態、付帯施設の位置・面積・種類が変われば、変更事由が生じた日から30日以内に変更登録申請書を特別自治市長・特別自治道知事・市長・郡守・区庁長に提出しなければなりません。</strong>外国人観光都市民泊業は観光客利用施設業で変更登録の事項が異なるため、混同しないよう注意が必要です。</p>
<p>都市民泊業の変更は<a href="/ja/blog/urban-guesthouse-change-registration">外国人観光都市民泊業の変更登録</a>、期限を逃した場合の処分は<a href="/ja/blog/hostel-violation-penalties">ホステル業の違反と制裁</a>、登録全般は<a href="/ja/blog/hostel-registration-guide">ホステル業登録ガイド</a>をご覧ください。</p>

<h2>変更登録の対象と先に受ける承認</h2>
<table><thead><tr><th>変わるもの</th><th>手続</th><th>期限</th></tr></thead><tbody>
<tr><td>商号、代表者</td><td>変更登録</td><td>30日以内</td></tr>
<tr><td>客室の数と形態</td><td>変更登録。変更後も個人旅行者向け客室、トイレ・シャワー・炊事場などの便益施設、文化・情報交流施設の基準を保つ必要があります。</td><td>30日以内</td></tr>
<tr><td>付帯施設の位置・面積・種類</td><td>変更登録</td><td>30日以内</td></tr>
<tr><td>敷地・建築延べ面積を当初承認面積の10%以上変更、小型ホテル業など他のホテル業への業種変更</td><td>変更前に事業計画の変更承認を受け、承認事項を変更登録</td><td>承認後30日以内</td></tr>
<tr><td>事業の譲受、法人の合併、競売などによる主要施設全部の引受け</td><td>地位承継の届出</td><td>1か月以内</td></tr>
<tr><td>1か月以上の休業、廃業</td><td>休業・廃業の通報</td><td>30日以内</td></tr>
</tbody></table>
<p>法人ホステルで代表理事だけが代わる場合は事業者は同じなので代表者の変更登録です。個人の運営者が事業を他人に譲る場合は事業者そのものが代わるため、変更登録ではなく譲受人の地位承継の届出になります。事業所の移転は観光宿泊業の変更登録事項に含まれていないため、計画段階で登録官庁に手続を確認してください。</p>

<h2>書類と進め方</h2>
<p>変更登録申請書には変更事実を証明する書類を各1部添えます。面積の変更などで電気安全点検が必要なホテル業の変更登録では、担当公務員が点検確認書を行政情報で確認し、同意しない場合は申請人が添付します。様式上の処理期間は4日で、基準に合えば変更登録証が発給されます。観光宿泊業の登録事項の変更は原則として登録審議委員会の審議を経ますが、関係機関が二つ以下の軽微な変更は審議を省略できます。</p>
<ol><li>変更登録、事業計画の変更承認、地位承継のどれに当たるかを分けます。</li><li>面積・業種の変更なら工事や転換の前に変更承認を申請します。</li><li>客室・付帯施設を変えるなら図面や写真などの証明書類を用意します。</li><li>期限内に変更登録申請書を提出します。</li><li>変更登録証を受け取り、事業所に新しい登録内容を反映します。</li></ol>
<p>変更登録期間内に変更登録をしないと、登録取消し、事業停止または改善命令の事由になります。</p>

<h2>サポートの範囲</h2>
<p>YouSun Administrative Agencyは、手続の区分、事業計画の変更承認の申請、変更登録申請書と証明書類の作成、審議の補正対応、譲受時の地位承継の届出まで行います。詳しくは<a href="/ja/services/hostel">ホステル業登録サービス</a>をご覧ください。</p>

<div class="faq-section"><h2>よくある質問</h2>
<div class="faq-item"><p class="faq-q">Q. ホステルの名前を変えるだけでも変更登録ですか。</p><p class="faq-a">A. はい。商号の変更は変更登録事項で、30日以内に申請します。</p></div>
<div class="faq-item"><p class="faq-q">Q. 外国人がホステルを買い取るときの書類は？</p><p class="faq-a">A. 地位承継届出書に譲渡・譲受の証明書類（施設引受けの明細を含む）と、外国人の譲受人（法人は代表者・役員）が欠格事由に当たらないことを証明する書類を添えます。その国の政府などが発行した書類または公証を受けた陳述書で、領事の確認かアポスティーユを受けたものが必要です。</p></div>
<div class="faq-item"><p class="faq-q">Q. ホステルを小型ホテルに変えられますか。</p><p class="faq-a">A. 新しい業種の登録基準を満たせば、ホテル業の種類間の業種変更として事業計画の変更承認を受けた後に変更登録をします。</p></div>
<div class="faq-item"><p class="faq-q">Q. 買い取ると過去の処分も引き継がれますか。</p><p class="faq-a">A. 原則として引き継がれますが、譲受時にその事実を知らなかったことを証明すれば引き継がれません。</p></div>
</div>

<div class="cta-block"><h3>変える前に手続を決めましょう</h3><p>登録証と変更予定の内容をお知らせいただければ、YouSun Administrative Agencyが必要な手続、書類、期限を整理します。電話 02-325-8222、平日 09:30~17:30 KST。</p><a href="/ja/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">相談を申し込む</a></div>
<p class="author-block">YouSun Administrative Agency（代表行政士 Jung Yu-sun）</p>`,
  },
}

// 틀리기 쉬운 인허가 구분 오기(4언어) — 호스텔업은 '등록'·'변경등록', 면적·업종은 사업계획 '변경승인', 양수는 지위승계 '신고'
entry.wrongTerms = [
  '호스텔업 허가', '호스텔업 변경신고', '호스텔업 영업신고', '호스텔 영업허가',
  'hostel business permit', 'hostel license', 'hostel change report',
  '青年旅舍业许可', '青年旅舍业变更申报', '旅舍营业许可',
  'ホステル業の許可', 'ホステル業変更届出', 'ホステル営業許可',
]

export default entry
