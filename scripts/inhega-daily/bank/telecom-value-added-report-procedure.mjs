// 원고 은행 — INHE-BANK-1119 보충(담당 A, 2026-11-19, kind=seo3958, angle=procedure)
// 주제(풀): telecom(부가통신사업신고) / 질문: "부가통신사업 신고는 실제로 어떻게 하나 — 신고서·첨부서류·접수 기관·신고증명서·신고 후 변경"
// 검색어: '부가통신사업 신고 방법'(배정표 대표 검색어안, NaverAC "부가통신사업 신고방법" — telecom-report-online-mall-app 머리 주석의 출처 검색어)
//
// 겹침 검사: telecom-report-online-mall-app(대상 판정·신고 간주·특수유형 등록 구분) → 대상 판정은 링크만, 이 글은 "대상으로 판단된 뒤
//   신고서 기재 항목·첨부서류·접수 위임 기관·보완·신고증명서·1년 내 개시·변경/양도/상속/휴폐업 신고"만 다룬다. 특수유형 등록 서류는 다루지 않음.
//   라이브 블로그에 부가통신 절차 전용 글 없음(lib/blog-posts-data.ts telecom-* 1편뿐).
//
// 법령 대조(law.go.kr DRF OC=visionlaw, 2026-11-19 로컬 사본 ~/work/inhebank-1119/law):
//   전기통신사업법 MST 285185(2026. 10. 1. 시행) — 제22조 제1항(신고, 정보통신망 신고 포함)·제5항(신고 간주)·제6항(1년 이내 개시),
//     제23조(변경신고), 제24조(양도·양수·합병·상속 신고), 제26조 제1항(휴폐업 30일 전 이용자 통지·신고), 제27조 제1항 제3호(1년 내 미개시 → 폐업명령 등),
//     제104조 제5항 제3호(제26조 신고 미이행 과태료 — 금액 미표시)
//   같은 법 시행령 MST 290813(2026. 10. 1. 시행) — 제29조 제1항(신고서+통신망구성도[요구 시]·개인정보보호조치 구축 명세서[개인정보 취급 시])·
//     제3항(법인 등기사항증명서·사업자등록증명 공동이용 확인, 미동의 시 첨부)·제4항(10일 이내 보완, 연장)·제5항(신고증명서)·제7항(재발급),
//     제30조 제2항(신고 간주 사업자 기준 초과 시 1개월 이내 신고), 제31조 제1항~제3항(변경신고 대상·서류·변경 신고증명서),
//     제32조 제1항~제3항(양도·합병 계약 후 30일, 상속 30일), 제33조 제1항(휴폐업 신고서+통보 증명, 예정일 15일 전), 제65조 제1항 제6호·제7호의2~7의4(중앙전파관리소장 위임)
//   전기통신사업법 시행에 관한 과학기술정보통신부규정(행정규칙 ID 2100000278444, 2026. 4. 28. 시행) — 제13조 별지 제4호서식(신고서 기재 항목:
//     상호·대표자·주민(외국인)/법인등록번호·주소·종업원·자본금·홈페이지·담당자·제공서비스 명칭/내용, 처리기간 '즉시'), 제15조 별지 제6호(신고증명서), 제17조 별지 제8호(변경신고, 부가통신 '즉시')
// 인허가 구분: 부가통신사업 = '신고'(정보통신망 신고 포함), 변경 = '변경신고', 특수한 유형만 '등록'·'변경등록'. 허가·승인 아님.
// 확신 없어 뺀 것: 온라인 신고 시스템의 명칭·주소(법령에 없음 → '전자문서로 제출'만), 실제 처리 소요일(서식 '즉시' 외 실무 일수),
//   변경신고 기한(법령에 'N일 이내' 없음 → '변경하려면' 표현만), 변경신고 미이행 제재(과태료 조항에서 제23조 확인 못 함 → 서술 안 함),
//   과태료·벌금 금액(S4), 온라인 동영상 서비스 신고 통보(제22조 제7항 — 신고인 의무 아님, 뺌).

const SLUG = 'telecom-value-added-report-procedure'

const entry = {
  topic: 'telecom',
  angle: 'procedure',
  slug: SLUG,
  kind: 'seo3958',
  keyword: '부가통신사업 신고 방법',
  source: { type: 'NaverAC', query: '부가통신사업 신고방법' },
  pexelsId: 5073493,
  coverImage: '',
  relatedServices: [
    { title: '정보통신분야 인허가 — 부가통신사업 신고·기간통신사업 등록', href: '/services/telecom-business' },
  ],

  ko: {
    title: '부가통신사업 신고 방법 — 신고서·첨부서류부터 신고증명서, 신고 후 변경까지',
    category: 'IT·통신',
    metaTitle: '부가통신사업 신고 방법 — 신고서·첨부서류·접수 기관·변경신고',
    metaDescription: '부가통신사업 신고서에 적는 항목과 첨부서류, 접수 기관과 보완 요구, 신고증명서 발급과 1년 이내 사업 개시, 신고 후 변경·양도·휴폐업 신고까지 순서대로 안내합니다.',
    excerpt: '부가통신사업 신고는 신고서와 첨부서류를 과학기술정보통신부장관에게 내는 방식이고 전자문서로도 됩니다. 개인정보를 다루면 개인정보보호조치 구축 명세서를 붙이고, 신고증명서를 받은 뒤 1년 이내에 사업을 시작합니다. 바뀌는 사항은 변경신고로 처리합니다.',
    content: `<div class="toc"><p>목차</p><ol><li>신고서와 첨부서류</li><li>접수 기관과 처리 흐름</li><li>신고 후 변경·양도·휴폐업 신고</li><li>자주 묻는 질문 (FAQ)</li></ol></div>
<p><strong>부가통신사업 신고는 부가통신사업 신고서에 첨부서류를 붙여 과학기술정보통신부장관에게 내는 방식이며, 전자문서로도 할 수 있습니다. 첨부서류는 개인정보를 취급하면 개인정보보호조치 구축 명세서, 새로운 유형의 역무로서 요구를 받으면 통신망구성도이고, 법인 등기사항증명서나 사업자등록증명은 담당 공무원이 행정정보 공동이용으로 확인합니다.</strong><!-- 근거: 전기통신사업법 제22조 제1항, 시행령 제29조 제1항·제3항 --> 신고가 끝나면 부가통신사업 신고증명서가 발급됩니다.</p>
<p>우리 서비스가 애초에 신고 대상인지, 소규모라서 신고한 것으로 보는 경우인지는 <a href="/blog/telecom-report-online-mall-app">부가통신사업 신고 대상 판단 기준</a>에서 먼저 확인하세요. 아래는 신고 대상으로 판단된 뒤 서류를 내고 신고증명서를 받는 과정과, 그 뒤 바뀌는 사항의 신고입니다. 기간통신사업 등록까지 포함한 전체 구분은 <a href="/services/telecom-business#svc-glance">정보통신분야 인허가 한눈에 보기</a>에 있습니다.</p>

<h2>신고서와 첨부서류</h2>
<p>신고서에는 상호 또는 명칭, 대표자 성명, 주민등록번호·외국인등록번호 또는 법인등록번호, 주된 사무소 주소, 종업원 수, 자본금, 홈페이지 주소, 담당자 연락처, 제공 서비스의 명칭과 내용을 적습니다. 제공 서비스 칸은 나중에 변경신고 대상이 되는 '제공 역무의 종류'와 이어지므로 실제 기능을 빠짐없이 적어 두는 것이 좋습니다.<!-- 근거: 전기통신사업법 시행에 관한 과학기술정보통신부규정 제13조 별지 제4호서식, 시행령 제31조 제1항 제3호 --></p>
<table><thead><tr><th>서류</th><th>언제 내나</th><th>참고</th></tr></thead><tbody>
<tr><td>부가통신사업 신고서</td><td>항상</td><td>전자문서로 된 신고서도 됩니다</td></tr>
<tr><td>개인정보보호조치 구축 명세서</td><td>개인정보를 취급하는 경우</td><td>회원 정보·주문 정보를 받는 구조인지 먼저 확인합니다</td></tr>
<tr><td>통신망구성도</td><td>새로운 유형의 역무를 신고하면서 장관이 필요하다고 보아 요구한 경우</td><td>요구가 없으면 내지 않습니다</td></tr>
<tr><td>법인 등기사항증명서 또는 사업자등록증명</td><td>담당 공무원이 행정정보 공동이용으로 확인</td><td>사업자등록증명 확인에 동의하지 않으면 직접 붙입니다<!-- 근거: 시행령 제29조 제1항·제3항 --></td></tr>
</tbody></table>

<h2>접수 기관과 처리 흐름</h2>
<p>신고는 법률상 과학기술정보통신부장관에게 하지만, 부가통신사업 신고의 접수·처리 권한은 중앙전파관리소장에게 위임되어 있습니다. 신고서 서식의 처리기간은 '즉시'로 적혀 있습니다.<!-- 근거: 전기통신사업법 제22조 제1항, 시행령 제65조 제1항 제6호, 과기정통부규정 별지 제4호서식 --></p>
<ol><li>제공 서비스의 명칭과 내용을 정하고 신고서 항목을 채웁니다.</li><li>개인정보 취급 여부를 확인해 개인정보보호조치 구축 명세서를 준비합니다.</li><li>신고서와 첨부서류를 전자문서 또는 서면으로 제출합니다.</li><li>기재 사항에 흠이 있거나 서류가 빠지면 10일 이내의 기간을 정한 보완 요구를 받으며, 신청하면 보완기간을 늘릴 수 있습니다.<!-- 근거: 시행령 제29조 제4항 --></li><li>부가통신사업 신고증명서를 받고, 신고한 날부터 1년 이내에 사업을 시작합니다.<!-- 근거: 시행령 제29조 제5항, 전기통신사업법 제22조 제6항 --></li></ol>
<p>신고증명서를 잃어버리거나 헐어 못 쓰게 되면 재발급을 신청할 수 있습니다. 정당한 사유 없이 신고한 날부터 1년 이내에 사업을 시작하지 않으면 폐업명령이나 사업정지 사유가 될 수 있으니, 신고 시점을 출시 일정에 맞추는 것이 좋습니다.<!-- 근거: 시행령 제29조 제7항, 전기통신사업법 제27조 제1항 제3호 --></p>

<h2>신고 후 변경·양도·휴폐업 신고</h2>
<p>신고한 뒤 일정한 사항이 바뀌면 다시 신고합니다. 변경신고 대상은 상호·명칭·주소, 대표자, 제공 역무의 종류, 문자메시지를 발송하는 인터넷 사이트의 주소, 부가통신사업 내용의 변경입니다.<!-- 근거: 전기통신사업법 제23조, 시행령 제31조 제1항 --></p>
<table><thead><tr><th>상황</th><th>할 신고</th><th>시기·서류</th></tr></thead><tbody>
<tr><td>상호·주소·대표자·제공 역무 변경</td><td>부가통신사업 변경신고</td><td>변경 사항을 확인할 수 있는 서류를 붙이고, 변경 사항이 적힌 신고증명서를 받습니다<!-- 근거: 시행령 제31조 제2항·제3항 --></td></tr>
<tr><td>사업 양도·양수, 법인 합병</td><td>양도·양수 신고, 합병신고</td><td>계약 체결 후 30일 이내, 계약서 사본과 신고 때의 첨부서류<!-- 근거: 전기통신사업법 제24조, 시행령 제32조 제1항·제2항 --></td></tr>
<tr><td>상속</td><td>상속신고</td><td>상속 원인이 생긴 날부터 30일 이내, 상속인임을 증명하는 서류<!-- 근거: 시행령 제32조 제3항 --></td></tr>
<tr><td>휴업·폐업</td><td>휴업·폐업 신고</td><td>예정일 30일 전까지 이용자에게 알리고, 통보 증명 서류를 붙여 예정일 15일 전까지 제출<!-- 근거: 전기통신사업법 제26조 제1항, 시행령 제33조 제1항 --></td></tr>
</tbody></table>
<p>유선행정사사무소는 신고서 작성, 개인정보보호조치 구축 명세서 준비, 접수와 보완 대응, 신고 뒤 변경신고 일정 관리까지 돕습니다. 앱이 이용자 위치를 쓰면 <a href="/services/location-based-service">위치기반서비스사업 신고</a>도 함께 검토합니다.</p>

<div class="faq-section"><h2>자주 묻는 질문 (FAQ)</h2>
<div class="faq-item"><p class="faq-q">Q. 신고서를 온라인으로 낼 수 있나요?</p><p class="faq-a">A. 네. 법은 정보통신망에 의한 신고를 포함하고, 신고서와 첨부서류 모두 전자문서로 낼 수 있습니다.<!-- 근거: 전기통신사업법 제22조 제1항, 시행령 제29조 제1항 --></p></div>
<div class="faq-item"><p class="faq-q">Q. 개인정보보호조치 구축 명세서는 모든 사업자가 내나요?</p><p class="faq-a">A. 아닙니다. 개인정보를 취급하는 경우에만 붙입니다. 다만 회원가입이나 주문을 받는 서비스라면 대부분 개인정보를 다루므로 미리 준비해 두는 것이 안전합니다.<!-- 근거: 시행령 제29조 제1항 제2호 --></p></div>
<div class="faq-item"><p class="faq-q">Q. 소규모라서 신고한 것으로 보는 사업자도 이 절차를 거치나요?</p><p class="faq-a">A. 처음에는 신고서를 내지 않습니다. 자본금이 기준을 넘게 되면 그날부터 1개월 이내에 위 절차대로 신고합니다.<!-- 근거: 전기통신사업법 제22조 제5항 제1호, 시행령 제30조 제2항 --></p></div>
<div class="faq-item"><p class="faq-q">Q. 휴업·폐업 신고를 빠뜨리면 어떻게 되나요?</p><p class="faq-a">A. 과태료 대상입니다. 이용자 통지와 신고 기한이 다르므로 날짜를 거꾸로 계산해 두세요.<!-- 근거: 전기통신사업법 제104조 제5항 제3호 --></p></div>
</div>

<div class="cta-block"><h3>부가통신사업 신고 서류를 한 번에 준비하세요</h3><p>서비스 기능과 회사 정보를 알려 주시면 유선행정사사무소가 신고서와 첨부서류를 준비하고 접수·보완까지 처리합니다. 진행 범위는 <a href="/services/telecom-business">정보통신분야 인허가 안내</a>에서 확인하실 수 있습니다. 전화 02-325-8222, 평일 09:30~17:30 KST.</p><a href="/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">상담 신청하기</a></div>
<p class="author-block">유선행정사사무소 (대표 행정사 정유선)<!-- 근거: 전기통신사업법 제22조·제23조·제24조·제26조·제27조·제104조, 시행령 제29조~제33조·제65조, 과기정통부규정 별지 제4호·제6호·제8호서식 --></p>`,
  },

  en: {
    title: 'How to File a Value-Added Telecom Business Report in Korea: Forms, Documents and Later Changes',
    category: 'IT & Telecom',
    metaTitle: 'How to File a Value-Added Telecom Report in Korea',
    metaDescription: 'Step-by-step guide to the value-added telecom business report in Korea: the form, attachments, who processes it, the certificate and later change reports.',
    excerpt: 'A value-added telecom business report in Korea is a form plus attachments filed with the Minister of Science and ICT, and it can be filed electronically. Attach a personal data protection measures statement if you handle personal data, start business within 1 year, and file change reports when details change.',
    content: `<div class="toc"><p>Contents</p><ol><li>The form and attachments</li><li>Who processes it and how</li><li>Reports after filing</li><li>FAQ</li></ol></div>
<p><strong>A value-added telecommunications business report in Korea is made by filing the report form with attachments to the Minister of Science and ICT, and electronic filing is allowed. If you handle personal data, attach a personal data protection measures statement; a network diagram is needed only if requested for a new type of service. The official checks your corporate register or business registration through shared government data.</strong> Once accepted, you receive a report certificate.</p>
<p>First confirm whether you must report at all, or are deemed to have reported as a small operator, on <a href="/en/blog/telecom-report-online-mall-app">our guide to who must report</a>. The overall licensing picture is on <a href="/en/services/telecom-business#svc-glance">our telecom licensing overview</a>.</p>

<h2>The form and attachments</h2>
<p>The form asks for your trade name, representative, resident, alien or corporate registration number, head office address, number of employees, capital, website, contact person, and the name and description of the services you provide. Describe the actual features carefully, because the type of service is later subject to change reports.</p>
<table><thead><tr><th>Document</th><th>When</th><th>Note</th></tr></thead><tbody>
<tr><td>Report form</td><td>Always</td><td>Electronic form accepted</td></tr>
<tr><td>Personal data protection measures statement</td><td>If you handle personal data</td><td>Check whether you collect member or order data</td></tr>
<tr><td>Network diagram</td><td>Only if requested for a new type of service</td><td>Not filed otherwise</td></tr>
<tr><td>Corporate register or business registration</td><td>Checked by the official through shared data</td><td>Attach it yourself if you do not consent</td></tr>
</tbody></table>

<h2>Who processes it and how</h2>
<p>By law the report goes to the Minister of Science and ICT, but processing is delegated to the Director of the Central Radio Management Service. The form lists the processing period as immediate.</p>
<ol><li>Decide the service name and description and complete the form.</li><li>Check whether you handle personal data and prepare the statement.</li><li>File the form and attachments electronically or on paper.</li><li>If something is missing, you will be asked to correct it within a set period of up to 10 days, which can be extended on request.</li><li>Receive the report certificate and start business within 1 year of reporting.</li></ol>
<p>A lost or damaged certificate can be reissued. Failing to start within 1 year without good reason can lead to a closure or suspension order, so time the filing to your launch.</p>

<h2>Reports after filing</h2>
<p>Changes to your trade name, address, representative, type of service, SMS-sending website address or business content require a change report.</p>
<table><thead><tr><th>Event</th><th>Report</th><th>Timing and documents</th></tr></thead><tbody>
<tr><td>Name, address, representative or service change</td><td>Change report</td><td>Attach proof of the change; an updated certificate is issued</td></tr>
<tr><td>Business transfer or merger</td><td>Transfer or merger report</td><td>Within 30 days of the contract, with a copy and the original attachments</td></tr>
<tr><td>Inheritance</td><td>Inheritance report</td><td>Within 30 days, with proof of heirship</td></tr>
<tr><td>Suspension or closure</td><td>Suspension or closure report</td><td>Notify users 30 days before and file 15 days before, with proof of notice</td></tr>
</tbody></table>
<p>YouSun Administrative Agency prepares the form and attachments, files them, handles corrections and tracks later change reports. If your app uses user location, we also review the <a href="/en/services/location-based-service">location-based service report</a>.</p>

<div class="faq-section"><h2>FAQ</h2>
<div class="faq-item"><p class="faq-q">Q. Can I file online?</p><p class="faq-a">A. Yes. The law covers filing over information networks, and both the form and attachments may be electronic.</p></div>
<div class="faq-item"><p class="faq-q">Q. Does everyone attach the personal data statement?</p><p class="faq-a">A. No, only operators handling personal data. Most services with sign-up or orders do, so prepare it early.</p></div>
<div class="faq-item"><p class="faq-q">Q. Does a deemed small operator follow these steps?</p><p class="faq-a">A. Not at first. Once capital exceeds the threshold, it must report within 1 month using this procedure.</p></div>
<div class="faq-item"><p class="faq-q">Q. What if I skip the closure report?</p><p class="faq-a">A. It is subject to an administrative fine. User notice and filing deadlines differ, so count back from your closure date.</p></div>
</div>

<div class="cta-block"><h3>Prepare your telecom report in one go</h3><p>Share your service features and company details, and YouSun Administrative Agency will prepare, file and follow up on your report. Call 02-325-8222, weekdays 09:30~17:30 KST.</p><a href="/en/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">Request a consultation</a></div>
<p class="author-block">YouSun Administrative Agency (Chief Administrative Agent Jung Yu-sun)</p>`,
  },

  zh: {
    title: '韩国增值电信业务申报怎么做：申报书、附件、申报证明书与申报后变更',
    category: 'IT·通信',
    metaTitle: '韩国增值电信业务申报方法 — 材料·受理机关·变更申报',
    metaDescription: '韩国增值电信业务申报的申报书填写项目、附件、受理机关与补正要求、申报证明书发放和1年内开业，以及申报后的变更、转让、停业与歇业申报，按顺序说明。',
    excerpt: '韩国增值电信业务申报是向科学技术信息通信部长官提交申报书和附件，也可电子提交。处理个人信息的须附个人信息保护措施构建明细，取得申报证明书后1年内开业，事项变更时做变更申报。',
    content: `<div class="toc"><p>目录</p><ol><li>申报书与附件</li><li>受理机关与处理流程</li><li>申报后的变更·转让·停业歇业</li><li>常见问题</li></ol></div>
<p><strong>韩国增值电信业务（부가통신사업）申报，是把申报书和附件提交给科学技术信息通信部长官，也可以用电子文件提交。处理个人信息的须附个人信息保护措施构建明细；只有在申报新类型服务并被要求时才需提交网络构成图。法人登记事项证明书或营业执照证明由公务员通过行政信息共享确认。</strong>申报完成后发放增值电信业务申报证明书。</p>
<p>是否须申报、是否属于小规模视为申报，请先看<a href="/zh/blog/telecom-report-online-mall-app">增值电信申报对象判断</a>。包括基础电信登记在内的整体分类见<a href="/zh/services/telecom-business#svc-glance">信息通信领域许可概览</a>。</p>

<h2>申报书与附件</h2>
<p>申报书填写商号或名称、代表人姓名、居民·外国人登录号码或法人登记号码、主要事务所地址、员工人数、资本、网站、负责人联系方式，以及所提供服务的名称和内容。服务类型日后属于变更申报事项，应如实写全。</p>
<table><thead><tr><th>材料</th><th>何时提交</th><th>说明</th></tr></thead><tbody>
<tr><td>增值电信业务申报书</td><td>必须</td><td>可用电子申报书</td></tr>
<tr><td>个人信息保护措施构建明细</td><td>处理个人信息时</td><td>先确认是否收集会员或订单信息</td></tr>
<tr><td>网络构成图</td><td>申报新类型服务且被要求时</td><td>未被要求则不交</td></tr>
<tr><td>法人登记事项证明书或营业执照证明</td><td>公务员通过信息共享确认</td><td>不同意确认的须自行附上</td></tr>
</tbody></table>

<h2>受理机关与处理流程</h2>
<p>法律上向科学技术信息通信部长官申报，受理和处理权限委任给中央电波管理所所长。申报书格式上的处理期限为"即时"。</p>
<ol><li>确定服务名称和内容，填写申报书。</li><li>确认是否处理个人信息，准备保护措施明细。</li><li>以电子或纸质方式提交申报书和附件。</li><li>如有瑕疵或材料不全，会被要求在10日以内的期限内补正，可申请延长。</li><li>取得申报证明书，自申报之日起1年内开业。</li></ol>
<p>申报证明书遗失或损坏可申请补发。无正当理由1年内未开业，可能被命令停业或暂停营业，申报时间应配合上线计划。</p>

<h2>申报后的变更·转让·停业歇业</h2>
<p>商号·名称·地址、代表人、服务类型、发送短信的网站地址、业务内容发生变更时，须做变更申报。</p>
<table><thead><tr><th>情形</th><th>申报</th><th>时间·材料</th></tr></thead><tbody>
<tr><td>商号·地址·代表人·服务变更</td><td>变更申报</td><td>附变更证明材料，发放记载变更事项的申报证明书</td></tr>
<tr><td>业务转让·法人合并</td><td>转让·合并申报</td><td>签约后30日内，附合同副本和原申报附件</td></tr>
<tr><td>继承</td><td>继承申报</td><td>继承原因发生之日起30日内</td></tr>
<tr><td>停业·歇业</td><td>停业·歇业申报</td><td>预定日30日前通知用户，15日前附通知证明提交</td></tr>
</tbody></table>
<p>YouSun Administrative Agency协助制作申报书和附件、提交与补正应对，并管理申报后的变更申报。App使用用户位置的，也一并检查<a href="/zh/services/location-based-service">位置基础服务事业申报</a>。</p>

<div class="faq-section"><h2>常见问题</h2>
<div class="faq-item"><p class="faq-q">Q. 可以在线申报吗？</p><p class="faq-a">A. 可以。法律包括通过信息通信网申报，申报书和附件都可用电子文件。</p></div>
<div class="faq-item"><p class="faq-q">Q. 所有经营者都要交个人信息保护措施明细吗？</p><p class="faq-a">A. 不是，只有处理个人信息的才交。有会员注册或订单的服务大多涉及个人信息，宜提前准备。</p></div>
<div class="faq-item"><p class="faq-q">Q. 小规模视为申报的经营者也走这个流程吗？</p><p class="faq-a">A. 起初不用交申报书。资本超过标准后，须在1个月内按此流程申报。</p></div>
<div class="faq-item"><p class="faq-q">Q. 漏报停业·歇业会怎样？</p><p class="faq-a">A. 属于罚款（过怠金）对象。通知用户和申报的期限不同，要倒推日期。</p></div>
</div>

<div class="cta-block"><h3>一次备齐增值电信申报材料</h3><p>告诉我们服务功能和公司信息，YouSun Administrative Agency为你准备申报书和附件，并负责提交与补正。电话 02-325-8222，工作日 09:30~17:30 KST。</p><a href="/zh/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">申请咨询</a></div>
<p class="author-block">YouSun Administrative Agency（代表行政士 Jung Yu-sun）</p>`,
  },

  ja: {
    title: '韓国の付加通信事業の申告方法：申告書・添付書類から申告証明書、申告後の変更まで',
    category: 'IT・通信',
    metaTitle: '韓国の付加通信事業申告の方法 — 書類・受付機関・変更申告',
    metaDescription: '韓国の付加通信事業申告について、申告書の記載項目と添付書類、受付機関と補正要求、申告証明書の発給と1年以内の事業開始、申告後の変更・譲渡・休廃業の申告まで順に解説します。',
    excerpt: '韓国の付加通信事業の申告は、申告書と添付書類を科学技術情報通信部長官に提出する方式で、電子申請もできます。個人情報を扱うなら個人情報保護措置構築明細書を添付し、申告証明書を受け取ってから1年以内に事業を始めます。',
    content: `<div class="toc"><p>目次</p><ol><li>申告書と添付書類</li><li>受付機関と処理の流れ</li><li>申告後の変更・譲渡・休廃業</li><li>よくある質問</li></ol></div>
<p><strong>韓国の付加通信事業（부가통신사업）の申告は、申告書に添付書類を付けて科学技術情報通信部長官に提出する方式で、電子文書でも行えます。個人情報を扱う場合は個人情報保護措置構築明細書、新しい類型の役務で求められた場合のみ通信網構成図を添付し、法人登記事項証明書や事業者登録証明は担当公務員が行政情報の共同利用で確認します。</strong>申告が終わると付加通信事業申告証明書が発給されます。</p>
<p>そもそも申告が必要か、小規模でみなし申告になるかは<a href="/ja/blog/telecom-report-online-mall-app">付加通信事業申告の対象判断</a>で先に確認してください。基幹通信の登録を含む全体の区分は<a href="/ja/services/telecom-business#svc-glance">情報通信分野の許認可の概要</a>にあります。</p>

<h2>申告書と添付書類</h2>
<p>申告書には商号または名称、代表者氏名、住民・外国人登録番号または法人登録番号、主たる事務所の住所、従業員数、資本金、ホームページ、担当者連絡先、提供サービスの名称と内容を記載します。提供役務の種類は後に変更申告の対象になるため、実際の機能を漏れなく書いておくと安心です。</p>
<table><thead><tr><th>書類</th><th>提出する場合</th><th>補足</th></tr></thead><tbody>
<tr><td>付加通信事業申告書</td><td>常に</td><td>電子文書の申告書も可</td></tr>
<tr><td>個人情報保護措置構築明細書</td><td>個人情報を扱う場合</td><td>会員情報・注文情報を受け取るかを先に確認</td></tr>
<tr><td>通信網構成図</td><td>新しい類型の役務で長官が求めた場合</td><td>求めがなければ不要</td></tr>
<tr><td>法人登記事項証明書または事業者登録証明</td><td>担当公務員が共同利用で確認</td><td>確認に同意しない場合は自ら添付</td></tr>
</tbody></table>

<h2>受付機関と処理の流れ</h2>
<p>法律上の提出先は科学技術情報通信部長官ですが、申告の受付・処理権限は中央電波管理所長に委任されています。申告書の様式上、処理期間は「即時」です。</p>
<ol><li>提供サービスの名称と内容を決め、申告書を作成します。</li><li>個人情報の取扱いの有無を確認し、明細書を用意します。</li><li>申告書と添付書類を電子文書または書面で提出します。</li><li>記載に不備や書類の不足があれば、10日以内の期間を定めて補正を求められ、申請により延長できます。</li><li>申告証明書を受け取り、申告日から1年以内に事業を始めます。</li></ol>
<p>申告証明書を紛失・毀損したら再発給を申請できます。正当な理由なく1年以内に事業を始めないと廃業命令や事業停止の理由になり得るので、申告時期はリリース日程に合わせましょう。</p>

<h2>申告後の変更・譲渡・休廃業</h2>
<p>商号・名称・住所、代表者、提供役務の種類、SMSを送信するウェブサイトの住所、事業内容が変わる場合は変更申告をします。</p>
<table><thead><tr><th>状況</th><th>申告</th><th>時期・書類</th></tr></thead><tbody>
<tr><td>商号・住所・代表者・役務の変更</td><td>変更申告</td><td>変更を確認できる書類を添付、変更事項入りの申告証明書を発給</td></tr>
<tr><td>事業の譲渡・法人の合併</td><td>譲渡・合併の申告</td><td>契約後30日以内、契約書の写しと申告時の添付書類</td></tr>
<tr><td>相続</td><td>相続の申告</td><td>相続開始の日から30日以内</td></tr>
<tr><td>休業・廃業</td><td>休業・廃業の申告</td><td>予定日の30日前までに利用者へ通知し、15日前までに通知の証明を付けて提出</td></tr>
</tbody></table>
<p>YouSun Administrative Agencyは、申告書と添付書類の作成、提出と補正対応、申告後の変更申告の管理までサポートします。アプリで利用者の位置を使う場合は<a href="/ja/services/location-based-service">位置基盤サービス事業の申告</a>もあわせて確認します。</p>

<div class="faq-section"><h2>よくある質問</h2>
<div class="faq-item"><p class="faq-q">Q. オンラインで申告できますか。</p><p class="faq-a">A. できます。法律は情報通信網による申告を含み、申告書も添付書類も電子文書で提出できます。</p></div>
<div class="faq-item"><p class="faq-q">Q. 個人情報保護措置構築明細書は全員が出しますか。</p><p class="faq-a">A. いいえ、個人情報を扱う場合のみです。会員登録や注文を受けるサービスはほぼ該当するので、早めに用意しましょう。</p></div>
<div class="faq-item"><p class="faq-q">Q. 小規模のみなし申告事業者もこの手続ですか。</p><p class="faq-a">A. 最初は申告書を出しません。資本金が基準を超えたら、1か月以内にこの手続で申告します。</p></div>
<div class="faq-item"><p class="faq-q">Q. 休廃業の申告を忘れるとどうなりますか。</p><p class="faq-a">A. 過料の対象です。利用者への通知と申告の期限が違うので、日付を逆算しておきましょう。</p></div>
</div>

<div class="cta-block"><h3>付加通信事業の申告書類をまとめて準備</h3><p>サービスの機能と会社情報をお知らせいただければ、YouSun Administrative Agencyが申告書と添付書類を準備し、提出・補正まで対応します。電話 02-325-8222、平日 09:30~17:30 KST。</p><a href="/ja/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">相談を申し込む</a></div>
<p class="author-block">YouSun Administrative Agency（代表行政士 Jung Yu-sun）</p>`,
  },
}

// 틀리기 쉬운 인허가 구분 오기(4언어) — 부가통신사업은 '신고'·'변경신고', 특수한 유형만 '등록', 허가·승인 아님
entry.wrongTerms = [
  '부가통신사업 허가', '부가통신사업 등록증', '부가통신사업 변경허가', '부가통신사업 신고필증', '신고증명서 승인',
  'value-added telecom license', 'telecom business permit', 'change permit',
  '增值电信业务许可', '增值电信经营许可证',
  '付加通信事業の許可', '付加通信事業許可', '変更許可',
]

export default entry
