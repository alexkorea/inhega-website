// 원고 은행 — inhega-daily (INHEGA-BLOG-RESTART 1024, 맥4)
// 주제: lbs(위치기반서비스사업 신고) / 세부주제: change-report(신고 후 변경신고·지위승계 신고)
//
// 겹침 검사(ko-titles.txt·blog-i18n.ts):
//   location-based-service-domestic-registration-guide(최초 신고 절차·의무), location-based-service-business-registration-foreign-company
//   (외국법인 신고), location-based-service-fix(미신고 처벌·휴폐업 신고), location-based-service-select(대행 선택 기준),
//   location-information-business-registration(위치정보사업 등록 vs 위치기반서비스사업 신고 구분)
//   → '이미 신고한 사업자가 무엇을 바꿀 때 변경신고·양수 등 신고를 해야 하는가'를 다루는 글은 없음. 휴폐업은 fix 로 링크만.
//
// 법령 대조(law.go.kr DRF API, OC=visionlaw, 2026-10-24 조회):
//   위치정보의 보호 및 이용 등에 관한 법률   MST 277359, 2025. 10. 1. 시행 — 제2조 제7호·제8호, 제5조 제1항, 제9조 제1항·제3항·제5항,
//       제9조의2 제1항·제3항·제4항, 제10조 제1항~제3항, 제11조, 제22조, 제38조 제1항, 제38조의3, 제41조 제1호, 제43조 제2항 제1호·제3항 제1호
//   같은 법 시행령                           MST 283269, 2026. 2. 10. 시행 — 제9조 제2항·제3항, 제10조 제2항, 제11조 제1항~제4항,
//       제26조 제1항, 제37조의2 제1항 제6호·제7호·제8호·제10호, 제40조
// 관할: 법률상 '방송미디어통신위원회'(옛 방송통신위원회 아님). 시행령 제37조의2 제1항(2026.2.10 신설)에 따라 신고 수리·변경신고 접수 권한이
//   방송미디어통신사무소 소장에게 위임됨 → 화면에는 "방송미디어통신위원회(실무 접수는 소속 방송미디어통신사무소)"로 적음.
// 확인 못 한 점: ① 일반 신고사업자(법 제9조 제3항)의 변경신고 기한은 법·영 모두 '변경하려는 경우'로만 정하고 날수 기한이 없음 → 사전 신고로만 서술.
//   ② 대표자 변경·사업의 종류 변경은 법 제9조 제3항 각 호에 없음 → "법률 목록에 없다"로만 쓰고 별도 신고 불요라고 단정하지 않음.
//   ③ 방송미디어통신사무소의 개별 명칭·관할 구역, 처리기간, 서식 고시 번호(시행령 제40조 위임 고시)는 원문 미확인 → 쓰지 않음.
//   ④ 영문 공식 기관명 미확인 → 영문은 설명형 + 한글 병기.
// 금액: 0건(과태료·벌금 금액도 쓰지 않음). 대조표: crosscheck/location-based-service-change-report.md

export default {
  topic: 'lbs',
  angle: 'change-report',
  slug: 'location-based-service-change-report',
  kind: 'seo3958',
  keyword: '위치기반서비스사업 변경신고',
  wrongTerms: [
    '위치기반서비스사업 등록', '위치기반서비스사업 허가', '위치기반서비스 사업허가', '위치기반서비스사업 변경등록',
    'LBS license', 'LBS permit', 'location-based service registration', 'location-based service license',
    '位置服务业务许可', '位置基础服务事业许可', '位置基础服务事业登记',
    '位置情報サービス事業許可', '位置基盤サービス事業許可', '位置基盤サービス事業登録',
  ],
  pexelsId: 8824105,
  coverImage: '',
  relatedServices: [
    { title: '위치기반서비스사업 신고 — 앱 위치정보 수집 사업자', href: '/services/location-based-service' },
  ],

  ko: {
    title: '위치기반서비스사업 변경신고 — 상호·소재지·위치정보시스템 변경과 양수·합병 신고',
    category: 'IT·통신',
    metaTitle: '위치기반서비스사업 변경신고 — 대상 항목·기한·관할·양수 합병 신고',
    metaDescription: '위치기반서비스사업 신고를 마친 뒤 상호, 주된 사무소 소재지, 위치정보시스템을 바꿀 때 해야 하는 변경신고의 대상·시점·관할·서류와 사업 양수·상속·합병·분할 시 지위승계 신고를 정리했습니다.',
    excerpt: '위치기반서비스사업은 한 번 신고하면 끝이 아닙니다. 상호, 주된 사무소 소재지, 위치정보시스템을 바꾸면 방송미디어통신위원회에 변경신고를 해야 하고, 사업을 넘겨받거나 법인이 합병·분할되면 별도의 신고가 필요합니다. 대상 항목과 시점, 서류를 정리했습니다.',
    content: `<div class="toc"><p>목차</p><ol><li>변경신고 대상은 세 가지 항목입니다</li><li>언제, 어디에, 무엇을 내는가</li><li>양수·상속·합병·분할 시 지위승계 신고</li><li>자주 묻는 질문 (FAQ)</li></ol></div>
<p><strong>위치기반서비스사업 신고를 마친 사업자가 상호, 주된 사무소 소재지, 위치정보시스템 중 하나를 바꾸려면 방송미디어통신위원회에 변경신고를 해야 합니다.</strong> 위치기반서비스사업은 「위치정보의 보호 및 이용 등에 관한 법률」상 '신고' 대상이고, 개인위치정보를 대상으로 하는 위치정보사업은 '등록' 대상입니다. 두 제도는 변경 절차도 다르므로, 이 글은 위치기반서비스사업 신고를 한 사업자의 변경신고와 지위승계 신고만 다룹니다. 처음 신고하는 절차는 <a href="/blog/location-based-service-domestic-registration-guide">위치기반서비스 사업신고 가이드</a>를, 등록과 신고의 구분은 <a href="/blog/location-information-business-registration">위치정보사업 등록과 위치기반서비스사업 신고 차이</a>를 참고하시기 바랍니다.<!-- 근거: 위치정보법 제5조 제1항, 제9조 제1항·제3항 --></p>
<h2>변경신고 대상은 세 가지 항목입니다</h2>
<p>법률이 변경신고 대상으로 정한 항목은 상호, 주된 사무소의 소재지, 위치정보시스템입니다. 위치정보시스템은 위치정보를 수집·저장·분석·이용·제공하도록 연계된 하드웨어, 소프트웨어, 데이터베이스와 인적자원의 결합체를 말하므로, 서버 교체나 위치정보 처리 구조의 변경이 여기에 해당할 수 있습니다. 대표자나 사업의 종류는 이 목록에 들어 있지 않습니다. 다만 신고 때 낸 사업계획서 내용이 크게 달라진다면 관할 사무소에 미리 확인해 두는 편이 안전합니다.<!-- 근거: 위치정보법 제2조 제8호, 제9조 제3항 각 호 --></p>
<table><thead><tr><th>구분</th><th>일반 신고사업자</th><th>소상공인등</th></tr></thead><tbody>
<tr><td>변경신고 대상</td><td>상호, 주된 사무소 소재지, 위치정보시스템<!-- 근거: 위치정보법 제9조 제3항 --></td><td>상호, 주된 사무소 소재지<!-- 근거: 위치정보법 제9조의2 제3항 --></td></tr>
<tr><td>신고 시점</td><td>변경하려는 때(변경 전)<!-- 근거: 위치정보법 제9조 제3항 "변경하려는 경우" --></td><td>변경한 날부터 1개월 이내<!-- 근거: 위치정보법 제9조의2 제3항 --></td></tr>
<tr><td>처리 방식</td><td>상호·소재지는 접수, 위치정보시스템은 검토 후 수리<!-- 근거: 위치정보법 제9조 제5항, 시행령 제37조의2 제1항 제7호 --></td><td>변경신고서 제출 또는 지정 정보시스템 입력<!-- 근거: 시행령 제10조 제2항 --></td></tr>
<tr><td>신고 없이 바꾼 경우</td><td>위치정보시스템은 형사처벌, 상호·소재지는 과태료 대상<!-- 근거: 위치정보법 제41조 제1호, 제43조 제3항 제1호 --></td><td>상호·소재지 과태료 대상<!-- 근거: 위치정보법 제43조 제3항 제1호 --></td></tr>
</tbody></table>
<p>여기서 소상공인등은 「소상공인기본법」상 소상공인 등 법이 정한 소규모 사업자로서 신고 없이 사업을 시작한 뒤 개시일부터 1개월 이내에 신고한 사업자를 말합니다. 소상공인등에 해당하지 않게 되면 그 사유가 생긴 날부터 1개월 이내에 일반 신고에 필요한 사항을 보완해 신고해야 합니다.<!-- 근거: 위치정보법 제9조의2 제1항 단서·제4항 --></p>
<h2>언제, 어디에, 무엇을 내는가</h2>
<p>일반 신고사업자는 "변경하려는 경우" 신고하도록 되어 있으므로, 상호 변경 등기나 서버 이전 일정을 잡을 때 변경신고를 먼저 준비하는 것이 맞습니다. 특히 위치정보시스템 변경은 수리가 필요한 신고이므로 일정에 여유를 두시기 바랍니다. 신고처는 방송미디어통신위원회이며, 신고 수리와 변경신고 접수 권한은 소속 방송미디어통신사무소 소장에게 위임되어 있습니다.<!-- 근거: 위치정보법 제9조 제3항·제5항, 제38조 제1항, 시행령 제37조의2 제1항 제6호·제7호 --></p>
<ol>
<li>바뀌는 항목이 상호, 소재지, 위치정보시스템 중 무엇인지 정리합니다.<!-- 근거: 위치정보법 제9조 제3항 --></li>
<li>위치기반서비스사업변경신고서를 작성합니다(전자문서 가능).<!-- 근거: 시행령 제9조 제2항 --></li>
<li>서버 등 주요설비가 바뀌면 사업계획서 중 변경되는 부분을 첨부합니다.<!-- 근거: 시행령 제9조 제2항 제1호 --></li>
<li>그 밖에 변경사항을 확인할 수 있는 서류를 붙입니다.<!-- 근거: 시행령 제9조 제2항 제2호 --></li>
<li>법인 등기사항증명서나 사업자등록증명은 행정정보 공동이용으로 확인하며, 사업자등록증명 확인에 동의하지 않으면 직접 첨부합니다.<!-- 근거: 시행령 제9조 제3항 --></li>
</ol>
<p>이용약관에 상호나 연락처가 들어 있다면 변경 이유와 내용을 지체 없이 공개하는 의무도 함께 챙겨야 합니다.<!-- 근거: 위치정보법 제12조 제1항 --></p>
<h2>양수·상속·합병·분할 시 지위승계 신고</h2>
<p>위치기반서비스사업의 전부 또는 일부를 양수하거나 상속받은 경우, 신고한 법인이 합병·분할된 경우에는 양수인, 상속인, 합병·분할로 설립되거나 존속하는 법인이 방송미디어통신위원회에 신고해야 합니다. 신고가 수리되면 종전 사업자의 지위를 승계합니다. 신고하지 않으면 과태료 대상입니다.<!-- 근거: 위치정보법 제10조 제1항~제3항, 제43조 제2항 제1호 --></p>
<ul>
<li>양수: 양도·양수계약서 사본, 사업계획서 중 변경되는 부분<!-- 근거: 시행령 제11조 제1항 --></li>
<li>상속: 상속인임을 증명하는 서류<!-- 근거: 시행령 제11조 제2항 --></li>
<li>합병·분할: 합병·분할합병계약서 또는 분할계획서 사본, 사업계획서 중 변경되는 부분<!-- 근거: 시행령 제11조 제3항 --></li>
</ul>
<p>권리·의무를 넘겨받은 사업자는 30일 이내에 양도 등의 사실과 승계한 자의 연락처 등을 개인위치정보주체에게 통지해야 합니다. 통지는 서면이나 전자우편 등으로 하고, 인터넷 홈페이지에 30일 이상 게시하는 조치를 함께 해야 합니다. 휴업·폐업 신고는 <a href="/blog/location-based-service-fix">위치기반서비스 미신고 처벌·휴업 폐업 신고 정리</a>에서 다룹니다.<!-- 근거: 위치정보법 제22조, 시행령 제26조 제1항 --></p>
<div class="faq-section"><h2>자주 묻는 질문 (FAQ)</h2>
<div class="faq-item"><p class="faq-q">Q. 대표이사만 바뀌어도 변경신고를 해야 하나요?</p><p class="faq-a">A. 법률이 정한 변경신고 대상은 상호, 주된 사무소 소재지, 위치정보시스템이며 대표자는 목록에 없습니다. 다만 사업계획서상 사업자 현황이 달라지므로 관할 사무소에 확인해 두시는 것이 좋습니다.<!-- 근거: 위치정보법 제9조 제3항, 시행령 제9조 제1항 제1호 --></p></div>
<div class="faq-item"><p class="faq-q">Q. 클라우드 서버를 옮기는 것도 위치정보시스템 변경인가요?</p><p class="faq-a">A. 위치정보를 처리하는 서버 등 주요설비가 바뀐다면 위치정보시스템 변경에 해당할 수 있고, 이 경우 사업계획서 중 변경 부분을 첨부해 미리 변경신고를 하고 수리를 받아야 합니다.<!-- 근거: 위치정보법 제2조 제8호, 제9조 제3항 제3호·제5항, 시행령 제9조 제2항 제1호 --></p></div>
<div class="faq-item"><p class="faq-q">Q. 개인위치정보를 다루지 않는 서비스도 신고 대상인가요?</p><p class="faq-a">A. 법률은 개인위치정보를 대상으로 하지 않는 위치기반서비스사업을 신고 대상에서 제외합니다. 다만 기술적·관리적 보호조치 등 일부 의무는 그대로 적용됩니다.<!-- 근거: 위치정보법 제9조 제1항 괄호, 제38조의3 --></p></div>
<div class="faq-item"><p class="faq-q">Q. 회사를 인수했는데 새로 신고해야 하나요?</p><p class="faq-a">A. 사업 양수나 법인 합병이라면 새 신고가 아니라 양수 또는 합병 신고를 하고, 수리되면 종전 사업자의 지위를 승계합니다. 실무 절차는 <a href="/services/location-based-service">위치기반서비스사업 신고 서비스</a>에서 안내합니다.<!-- 근거: 위치정보법 제10조 제1항·제3항 --></p></div>
</div>
<div class="cta-block"><h3>변경신고·양수 신고 서류 준비를 도와드립니다</h3><p>상호·소재지·서버 변경이나 사업 인수를 앞두고 어떤 신고가 필요한지 정리가 필요하시면 유선행정사사무소로 문의해 주십시오. 전화 02-325-8222, 평일 09:30~17:30 KST.</p><a href="/contact?utm_source=blog&utm_medium=cta&utm_campaign=location-based-service-change-report">상담 신청하기</a></div>
<p class="author-block">유선행정사사무소 (대표 행정사 정유선)<!-- 근거: 위치정보의 보호 및 이용 등에 관한 법률, 같은 법 시행령 --></p>`,
  },

  en: {
    title: 'LBS Business Change Report in Korea — Trade Name, Office Address, Location Information System and Succession',
    category: 'IT & Telecom',
    metaTitle: 'LBS Business Change Report in Korea — Items, Timing, Authority',
    metaDescription: 'Which changes need an LBS business change report in Korea, when and where to file, what to attach, and the succession report for transfers and mergers.',
    excerpt: 'A location-based service (LBS) business report is not a one-time step. Changing the trade name, principal office address or location information system requires a change report, and a business transfer, inheritance, merger or split requires a separate report.',
    content: `<div class="toc"><p>Contents</p><ol><li>Three items require a change report</li><li>When, where and what to submit</li><li>Succession report for transfers and mergers</li><li>FAQ</li></ol></div>
<p><strong>An operator that has filed a location-based service (LBS) business report must file a change report with the Broadcasting Media Communications Commission (방송미디어통신위원회) before changing its trade name, principal office address or location information system.</strong> Under the Act on the Protection, Use, etc. of Location Information, an LBS business is subject to a report (notification), while a location information business handling personal location information is subject to registration. This article covers only change and succession reports for LBS operators. For the initial filing, see our <a href="/en/blog/location-based-service-domestic-registration-guide">LBS business notification guide</a>; for the difference between the two regimes, see <a href="/en/blog/location-information-business-registration">location information business vs. LBS notification</a>.</p>
<h2>Three items require a change report</h2>
<p>The Act lists three items: the trade name, the principal office address and the location information system. A location information system is the combined hardware, software, databases and personnel used to collect, store, analyse, use and provide location data, so a server replacement or a change in how location data is processed can fall under it. The representative and the type of business are not on the list. Still, if the business plan you submitted changes substantially, it is safer to check with the competent office first.</p>
<table><thead><tr><th>Item</th><th>Standard reporter</th><th>Small business operator</th></tr></thead><tbody>
<tr><td>Items to report</td><td>Trade name, office address, location information system</td><td>Trade name, office address</td></tr>
<tr><td>Timing</td><td>When you intend to change (before the change)</td><td>Within 1 month from the change</td></tr>
<tr><td>Handling</td><td>Name and address: received; system: reviewed and accepted</td><td>Submit the form or enter it in the designated system</td></tr>
<tr><td>If not reported</td><td>System: criminal penalty; name and address: administrative fine</td><td>Administrative fine</td></tr>
</tbody></table>
<p>Small business operators here are small businesses defined by law that started without a report and then reported within 1 month of starting. If you no longer qualify, you must supplement the standard report within 1 month from that date.</p>
<h2>When, where and what to submit</h2>
<p>Standard reporters must file "when they intend to change", so prepare the change report while scheduling a name change or server migration. A location information system change requires acceptance, so leave time. The authority is the Commission, and the power to accept reports and receive change reports is delegated to the heads of its regional Broadcasting Media Communications Offices.</p>
<ol>
<li>Identify which item changes: trade name, address or location information system.</li>
<li>Complete the LBS business change report form (electronic filing allowed).</li>
<li>If servers or other main equipment change, attach the changed part of the business plan.</li>
<li>Attach other documents that confirm the change.</li>
<li>The corporate register or business registration certificate is checked through shared administrative data; if you do not consent, attach it yourself.</li>
</ol>
<p>If your terms of use include the trade name or contact details, you must also publish the reason and content of the change without delay.</p>
<h2>Succession report for transfers and mergers</h2>
<p>When all or part of an LBS business is transferred or inherited, or a reporting corporation merges or splits, the transferee, heir or surviving or newly established corporation must report to the Commission. Once accepted, it succeeds to the former operator's status. Failure to report is subject to an administrative fine.</p>
<ul>
<li>Transfer: copy of the transfer agreement and the changed part of the business plan</li>
<li>Inheritance: document proving heirship</li>
<li>Merger or split: copy of the merger agreement or split plan and the changed part of the business plan</li>
</ul>
<p>The successor must notify personal location information subjects within 30 days of the transfer and the successor's contact details, by letter, email or similar means, and also post the notice on its website for at least 30 days. For suspension and closure reports, see our <a href="/en/services/location-based-service">LBS business notification service</a>.</p>
<div class="faq-section"><h2>FAQ</h2>
<div class="faq-item"><p class="faq-q">Q. Do we need a change report if only the CEO changes?</p><p class="faq-a">A. The Act lists the trade name, office address and location information system; the representative is not on the list. Because the operator profile in the business plan changes, it is still wise to confirm with the competent office.</p></div>
<div class="faq-item"><p class="faq-q">Q. Is moving to a different cloud server a system change?</p><p class="faq-a">A. If servers or other main equipment that process location data change, it can be a location information system change. File in advance with the changed part of the business plan and wait for acceptance.</p></div>
<div class="faq-item"><p class="faq-q">Q. Do services that do not handle personal location information need a report?</p><p class="faq-a">A. The Act excludes LBS businesses that do not target personal location information from the report requirement, but some duties, such as technical and managerial safeguards, still apply.</p></div>
<div class="faq-item"><p class="faq-q">Q. We acquired a company. Do we file a new report?</p><p class="faq-a">A. For a business transfer or merger, you file a transfer or merger report rather than a new one, and you succeed to the former operator's status once it is accepted.</p></div>
</div>
<div class="cta-block"><h3>Help with change and succession reports</h3><p>If you are planning a name, address or server change or an acquisition and need to know which report applies, contact YouSun Administrative Agency. Phone 02-325-8222, weekdays 09:30~17:30 KST.</p><a href="/en/contact?utm_source=blog&utm_medium=cta&utm_campaign=location-based-service-change-report">Request a consultation</a></div>
<p class="author-block">YouSun Administrative Agency (Chief Administrative Agent Jung Yu-sun)</p>`,
  },

  zh: {
    title: '韩国位置基础服务事业变更申报 — 商号·所在地·位置信息系统变更与承继申报',
    category: 'IT·通信',
    metaTitle: '韩国位置基础服务事业变更申报 — 对象·时点·主管机关',
    metaDescription: '在韩国完成位置基础服务事业申报后，变更商号、主要事务所所在地或位置信息系统时须办理变更申报。本文整理申报对象、时点、主管机关、材料，以及受让·继承·合并·分立时的承继申报。',
    excerpt: '位置基础服务事业申报并非一次了结。变更商号、主要事务所所在地或位置信息系统时须办理变更申报；受让事业或法人合并·分立时，还须另行申报。',
    content: `<div class="toc"><p>目录</p><ol><li>需变更申报的三个事项</li><li>何时、向谁、提交什么</li><li>受让·继承·合并·分立时的承继申报</li><li>常见问题</li></ol></div>
<p><strong>已完成位置基础服务事业申报的经营者，若要变更商号、主要事务所所在地或位置信息系统，须事先向广播媒体通信委员会（방송미디어통신위원회）办理变更申报。</strong>根据《位置信息保护及利用等相关法律》，位置基础服务事业适用“申报”，以个人位置信息为对象的位置信息事业适用“登记”。本文只讨论位置基础服务事业的变更申报与承继申报。首次申报流程请参阅<a href="/zh/blog/location-based-service-domestic-registration-guide">位置基础服务事业申报流程指南</a>，两种制度的区别请参阅<a href="/zh/blog/location-information-business-registration">位置信息事业登记与位置基础服务事业申报的区别</a>。</p>
<h2>需变更申报的三个事项</h2>
<p>法律规定的变更申报对象为商号、主要事务所所在地和位置信息系统。位置信息系统是指为收集、存储、分析、利用和提供位置信息而相互连接的硬件、软件、数据库及人力资源的结合体，因此更换服务器或改变位置信息处理结构都可能属于此类。代表人和事业种类不在该清单内，但若申报时提交的事业计划书内容发生较大变化，建议事先向主管事务所确认。</p>
<table><thead><tr><th>区分</th><th>一般申报经营者</th><th>小商工人等</th></tr></thead><tbody>
<tr><td>变更申报对象</td><td>商号、事务所所在地、位置信息系统</td><td>商号、事务所所在地</td></tr>
<tr><td>申报时点</td><td>拟变更时（变更前）</td><td>自变更之日起1个月内</td></tr>
<tr><td>处理方式</td><td>商号·所在地为受理接收，系统须审查后受理</td><td>提交申报书或在指定信息系统录入</td></tr>
<tr><td>未申报时</td><td>系统：刑事处罚；商号·所在地：罚款（过怠料）</td><td>罚款（过怠料）</td></tr>
</tbody></table>
<p>此处的小商工人等，是指法律规定的小规模经营者，未经申报即开始经营，并在开业之日起1个月内完成申报。不再属于小商工人等时，须自事由发生之日起1个月内补充一般申报所需事项。</p>
<h2>何时、向谁、提交什么</h2>
<p>一般申报经营者须在“拟变更时”申报，因此在安排商号变更登记或服务器迁移时，应先准备变更申报。位置信息系统变更须经受理，请预留时间。申报机关为广播媒体通信委员会，申报受理及变更申报接收权限已委任给其下属的广播媒体通信事务所所长。</p>
<ol>
<li>确认变更的是商号、所在地还是位置信息系统。</li>
<li>填写位置基础服务事业变更申报书（可电子提交）。</li>
<li>服务器等主要设备变更时，附上事业计划书中变更的部分。</li>
<li>附上其他可确认变更事项的材料。</li>
<li>法人登记事项证明书或营业执照证明通过行政信息共享确认；不同意时须自行附上。</li>
</ol>
<p>若使用条款中载有商号或联系方式，还须毫不迟延地公开变更理由及内容。</p>
<h2>受让·继承·合并·分立时的承继申报</h2>
<p>受让或继承位置基础服务事业的全部或部分，或申报法人发生合并·分立时，受让人、继承人或因合并·分立而设立或存续的法人须向广播媒体通信委员会申报。申报受理后承继原经营者的地位。未申报的，将被处以罚款（过怠料）。</p>
<ul>
<li>受让：转让·受让合同复印件、事业计划书中变更的部分</li>
<li>继承：证明继承人身份的材料</li>
<li>合并·分立：合并·分立合并合同或分立计划书复印件、事业计划书中变更的部分</li>
</ul>
<p>承继权利义务的经营者须在30日内，将转让等事实及承继人的联系方式等通知个人位置信息主体。通知须以书面或电子邮件等方式进行，同时在官网公告30日以上。如需办理申报，请参阅<a href="/zh/services/location-based-service">位置基础服务事业申报服务</a>。</p>
<div class="faq-section"><h2>常见问题</h2>
<div class="faq-item"><p class="faq-q">Q. 仅更换代表理事也要变更申报吗？</p><p class="faq-a">A. 法律规定的对象是商号、事务所所在地和位置信息系统，代表人不在清单内。但事业计划书中的经营者概况会发生变化，建议向主管事务所确认。</p></div>
<div class="faq-item"><p class="faq-q">Q. 迁移云服务器也算位置信息系统变更吗？</p><p class="faq-a">A. 处理位置信息的服务器等主要设备发生变更时，可能属于位置信息系统变更，须附上事业计划书变更部分事先申报并获得受理。</p></div>
<div class="faq-item"><p class="faq-q">Q. 不处理个人位置信息的服务也需申报吗？</p><p class="faq-a">A. 法律将不以个人位置信息为对象的位置基础服务事业排除在申报对象之外，但技术性·管理性保护措施等部分义务仍然适用。</p></div>
<div class="faq-item"><p class="faq-q">Q. 收购了公司，需要重新申报吗？</p><p class="faq-a">A. 属于事业受让或法人合并时，办理受让或合并申报而非新申报，受理后承继原经营者的地位。</p></div>
</div>
<div class="cta-block"><h3>协助准备变更申报与承继申报材料</h3><p>计划变更商号、所在地、服务器或收购事业，需要确认适用哪种申报时，请联系유선행정사사무소。电话 02-325-8222，工作日 09:30~17:30 KST。</p><a href="/zh/contact?utm_source=blog&utm_medium=cta&utm_campaign=location-based-service-change-report">申请咨询</a></div>
<p class="author-block">유선행정사사무소（代表行政士 정유선）</p>`,
  },

  ja: {
    title: '韓国の位置基盤サービス事業変更申告 — 商号・所在地・位置情報システムの変更と地位承継の申告',
    category: 'IT・通信',
    metaTitle: '韓国の位置基盤サービス事業変更申告 — 対象・時期・所管機関',
    metaDescription: '韓国で位置基盤サービス事業の申告を済ませた後、商号・主たる事務所の所在地・位置情報システムを変えるときの変更申告の対象、時期、所管、書類と、譲受・相続・合併・分割時の地位承継申告をまとめました。',
    excerpt: '位置基盤サービス事業の申告は一度で終わりではありません。商号、主たる事務所の所在地、位置情報システムを変えるときは変更申告が、事業の譲受や法人の合併・分割のときは別の申告が必要です。',
    content: `<div class="toc"><p>目次</p><ol><li>変更申告の対象は三つの事項</li><li>いつ、どこに、何を出すか</li><li>譲受・相続・合併・分割時の地位承継申告</li><li>よくある質問</li></ol></div>
<p><strong>位置基盤サービス事業の申告を済ませた事業者が、商号、主たる事務所の所在地、位置情報システムのいずれかを変えようとするときは、事前に放送メディア通信委員会（방송미디어통신위원회）へ変更申告をしなければなりません。</strong>「位置情報の保護及び利用等に関する法律」上、位置基盤サービス事業は「申告」の対象であり、個人位置情報を対象とする位置情報事業は「登録」の対象です。本記事は位置基盤サービス事業の変更申告と地位承継申告のみを扱います。最初の申告手続は<a href="/ja/blog/location-based-service-domestic-registration-guide">位置基盤サービス事業申告ガイド</a>を、二つの制度の違いは<a href="/ja/blog/location-information-business-registration">位置情報事業登録と位置基盤サービス事業申告の違い</a>をご覧ください。</p>
<h2>変更申告の対象は三つの事項</h2>
<p>法律が変更申告の対象として定めるのは、商号、主たる事務所の所在地、位置情報システムです。位置情報システムとは、位置情報を収集・保存・分析・利用・提供できるよう連携したハードウェア、ソフトウェア、データベース及び人的資源の結合体をいうため、サーバーの入れ替えや位置情報の処理構造の変更が該当し得ます。代表者や事業の種類はこの一覧に含まれていません。ただし、申告時に提出した事業計画書の内容が大きく変わる場合は、所管の事務所に事前に確認しておくほうが安全です。</p>
<table><thead><tr><th>区分</th><th>一般の申告事業者</th><th>小商工人等</th></tr></thead><tbody>
<tr><td>変更申告の対象</td><td>商号、事務所所在地、位置情報システム</td><td>商号、事務所所在地</td></tr>
<tr><td>申告の時期</td><td>変更しようとするとき（変更前）</td><td>変更した日から1か月以内</td></tr>
<tr><td>処理の方式</td><td>商号・所在地は受付、システムは審査後に受理</td><td>申告書の提出または指定情報システムへの入力</td></tr>
<tr><td>申告しなかった場合</td><td>システムは刑事罰、商号・所在地は過料</td><td>過料</td></tr>
</tbody></table>
<p>ここでいう小商工人等とは、法律が定める小規模事業者で、申告せずに事業を始め、開始日から1か月以内に申告した事業者をいいます。小商工人等に該当しなくなった場合は、その事由が生じた日から1か月以内に一般の申告に必要な事項を補って申告しなければなりません。</p>
<h2>いつ、どこに、何を出すか</h2>
<p>一般の申告事業者は「変更しようとするとき」に申告することとされているため、商号変更の登記やサーバー移転の日程を組む段階で変更申告を先に準備するのが適切です。位置情報システムの変更は受理が必要な申告なので、日程に余裕を持たせてください。申告先は放送メディア通信委員会で、申告の受理と変更申告の受付の権限は所属の放送メディア通信事務所長に委任されています。</p>
<ol>
<li>変わるのが商号、所在地、位置情報システムのどれかを整理します。</li>
<li>位置基盤サービス事業変更申告書を作成します（電子文書も可）。</li>
<li>サーバー等の主要設備が変わる場合は、事業計画書のうち変更部分を添付します。</li>
<li>その他、変更事項を確認できる書類を添付します。</li>
<li>法人登記事項証明書や事業者登録証明は行政情報の共同利用で確認され、同意しない場合は自ら添付します。</li>
</ol>
<p>利用約款に商号や連絡先が記載されている場合は、変更の理由と内容を遅滞なく公開する義務もあわせて確認してください。</p>
<h2>譲受・相続・合併・分割時の地位承継申告</h2>
<p>位置基盤サービス事業の全部または一部を譲り受けたり相続したりした場合、申告した法人が合併・分割した場合は、譲受人、相続人、合併・分割により設立または存続する法人が放送メディア通信委員会に申告しなければなりません。申告が受理されると従前の事業者の地位を承継します。申告しない場合は過料の対象です。</p>
<ul>
<li>譲受：譲渡・譲受契約書の写し、事業計画書のうち変更部分</li>
<li>相続：相続人であることを証明する書類</li>
<li>合併・分割：合併・分割合併契約書または分割計画書の写し、事業計画書のうち変更部分</li>
</ul>
<p>権利義務を引き継いだ事業者は、30日以内に譲渡等の事実と承継者の連絡先などを個人位置情報主体に通知しなければなりません。通知は書面や電子メール等で行い、あわせてウェブサイトに30日以上掲示する必要があります。申告の手続は<a href="/ja/services/location-based-service">位置基盤サービス事業申告サービス</a>でご案内しています。</p>
<div class="faq-section"><h2>よくある質問</h2>
<div class="faq-item"><p class="faq-q">Q. 代表取締役が変わっただけでも変更申告が必要ですか？</p><p class="faq-a">A. 法律が定める対象は商号、事務所所在地、位置情報システムで、代表者は一覧にありません。ただし事業計画書上の事業者概要は変わるため、所管の事務所に確認しておくことをお勧めします。</p></div>
<div class="faq-item"><p class="faq-q">Q. クラウドサーバーの移転も位置情報システムの変更ですか？</p><p class="faq-a">A. 位置情報を処理するサーバー等の主要設備が変わる場合は位置情報システムの変更に該当し得るため、事業計画書の変更部分を添付して事前に申告し、受理を受ける必要があります。</p></div>
<div class="faq-item"><p class="faq-q">Q. 個人位置情報を扱わないサービスも申告の対象ですか？</p><p class="faq-a">A. 法律は個人位置情報を対象としない位置基盤サービス事業を申告対象から除いています。ただし技術的・管理的保護措置など一部の義務は引き続き適用されます。</p></div>
<div class="faq-item"><p class="faq-q">Q. 会社を買収した場合、新たに申告が必要ですか？</p><p class="faq-a">A. 事業の譲受や法人の合併であれば、新規の申告ではなく譲受または合併の申告を行い、受理されると従前の事業者の地位を承継します。</p></div>
</div>
<div class="cta-block"><h3>変更申告・承継申告の書類準備をお手伝いします</h3><p>商号・所在地・サーバーの変更や事業の買収を控え、どの申告が必要か整理したい場合は、YouSun Administrative Agencyまでご相談ください。電話 02-325-8222、平日 09:30~17:30 KST。</p><a href="/ja/contact?utm_source=blog&utm_medium=cta&utm_campaign=location-based-service-change-report">相談を申し込む</a></div>
<p class="author-block">YouSun Administrative Agency（代表行政士 チョン・ユソン）</p>`,
  },
}
