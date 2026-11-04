// 원고 은행 보충 — BANK-REFILL-1029(2026-10-29, 맥4 하위 작성)
// 주제: license-agency(인허가대행) / 세부주제: procedure(신청 절차 — 행정사 위임부터 처분 통지까지의 흐름)
//
// 겹침 검사(lib/blog-posts-data.ts 라이브 ko 글 + bank/ 대조):
//   administrative-license-agency-supplement-and-rejection(보완요구·처리기간 산입 제외·반려·거부처분 불복),
//   administrative-license-permit-specialist-guide(행정사 선택·허가/등록/신고 차이), yongdo-byeongyeong-haengjengsa(용도변경 대행),
//   administrative-scrivener-scope-and-limits(위임 가능·불가 업무 범위), license-scrivener-qualification-check(자격·업무신고 확인)
//   → 이 글은 "위임 → 신청·접수 → 처리 중 연장·진행상황 통지 → 처분 통지·수령"의 시간 순 흐름만 다룬다.
//     보완·반려·불복은 한 문장으로 줄이고 supplement-and-rejection 으로, 업무범위·자격은 각 글로 넘긴다.
//     새로 다루는 것: 업무처리부 기재·보관, 사전심사 청구, 접수 시 안내 사항·직권 보정·위임 확인,
//     처리기간 연장 2단계·진행상황 30일 통지, 결과 통지 방식·거부 시 이유와 구제절차, 허가서 수령 확인·미수령 종결.
//
// 법령 대조(law.go.kr DRF, OC=visionlaw, 2026-10-29 lawfetch.py 조회):
//   행정사법                        MST 245299, 2022. 11. 15. 시행
//     제2조 제1항 제1호·제4호·제5호·제6호 및 단서, 제3조 제1항, 제10조 제1항, 제21조 제2항, 제22조 제1호·제4호, 제23조, 제24조 제1항·제2항
//   행정사법 시행령                  MST 279197, 2026. 1. 1. 시행 — 제2조 제5호, 제22조 제1항·제2항
//   민원 처리에 관한 법률             MST 239293, 2022. 7. 12. 시행
//     제2조 제1호 가목 1), 제8조, 제9조 제1항·제2항, 제10조 제1항·제3항·제7항, 제17조 제1항, 제22조 제1항·제2항, 제27조 제1항~제4항, 제30조 제1항·제3항
//   민원 처리에 관한 법률 시행령       MST 285815, 2026. 5. 6. 시행
//     제5조, 제6조 제3항~제6항·제8항, 제18조 제1항 제3호, 제21조 제1항~제3항, 제23조 제1항·제2항, 제25조 제4항, 제33조 제1항, 제34조 제2항
// 인허가 구분: 이 글의 대상은 '법정민원'(인가·허가·면허 신청, 등록·신고, 확인 신청 — 민원처리법 제2조 제1호 가목 1)) 일반.
//   행정사는 '대리'(행정사법 제2조 제1항 제5호)·'제출 대행'(제4호). 행정사 업무 개시는 '업무신고'(제10조 — 등록·허가 아님).
// 조정·확인 못 한 점:
//   - '위임장'이라는 서식명·필수 기재사항은 두 법령에 없다. 법령은 접수 시 '본인 또는 그 위임을 받은 사람'인지 확인할 수 있다고만
//     정함(영 제6조 제6항) → "위임 사실을 보여 주는 위임장을 갖춘다(서식은 기관·민원별로 다를 수 있음)"로 실무 서술.
//   - 업종별 처리기간 일수는 법령이 '기관이 종류별로 정해 공표'(법 제17조)로만 정해 쓰지 않음.
//   - 업무처리부 기재사항 중 보수 관련 항목(법 제24조 제2항 제4호)은 금액 관련 표현이라 화면에서 뺐다.
//   - 사전심사 대상 문언의 '경제적으로 많은 비용'은 금칙어라 '토지 매입 등 경제적 부담이 큰 민원'으로 바꿔 썼다(의미 동일).
//   - 반려·거부처분 불복 기한(행정심판법·행정소송법)은 기존 글 범위라 이 글에서 수치로 다루지 않음.
// 대조표: crosscheck/administrative-license-agency-procedure-flow.md

const SLUG = 'administrative-license-agency-procedure-flow'

const entry = {
  topic: 'license-agency',
  angle: 'procedure',
  slug: SLUG,
  kind: 'seo3958',
  keyword: '인허가 대행 절차',
  pexelsId: 8297362,
  coverImage: '',
  relatedServices: [],

  ko: {
    title: '인허가 대행 절차 — 행정사 위임 범위 확정부터 접수·처리기간 연장·처분 통지까지',
    category: '인허가',
    metaTitle: '인허가 대행 절차 — 행정사 위임부터 민원 접수·처분 통지까지',
    metaDescription: '인허가 대행은 행정사에게 위임 범위를 정해 맡기고, 민원 접수 후 처리기간 연장·진행상황 통지를 거쳐 처분 결과를 문서로 받는 순서로 진행됩니다. 접수증 교부, 연장 사유 통지, 거부 이유와 구제절차 통지가 법으로 정해져 있습니다.',
    excerpt: '인허가 대행은 위임 범위 확정, 위임장과 서류 준비, 민원 접수와 접수증, 처리기간 연장·진행상황 통지, 처분 결과 통지와 수령의 순서로 흐릅니다. 「행정사법」과 「민원 처리에 관한 법률」이 각 단계에서 정한 기한과 확인 사항이 있습니다.',
    content: `<div class="toc"><p>목차</p><ol><li>인허가 대행 절차 한눈에 보기</li><li>위임 단계 — 범위 확정과 위임장</li><li>접수부터 처분 통지까지</li><li>자주 묻는 질문 (FAQ)</li></ol></div>
<p><strong>인허가 대행 절차는 행정사에게 맡길 업무 범위를 정해 위임하고, 행정기관이 민원을 접수해 처리기간 안에 처분한 뒤, 그 결과를 문서로 통지받는 순서로 진행됩니다.</strong><!-- 근거: 행정사법 제2조 제1항 제4호·제5호, 민원 처리에 관한 법률 제9조·제17조·제27조 제1항 --> 행정사는 위임을 받아 인가·허가·면허 신청과 신고를 대리하거나 작성한 서류의 제출을 대행할 수 있고, 행정기관은 법정민원의 처리기간을 종류별로 미리 정해 공표합니다.</p>
<p>제출 뒤 보완요구와 반려 대응은 <a href="/blog/administrative-license-agency-supplement-and-rejection">인허가 대행 절차의 보완요구와 반려</a>에서, 행정사에게 맡길 수 있는 업무의 한계는 <a href="/blog/administrative-scrivener-scope-and-limits">행정사 업무범위와 위임 한계</a>에서, 자격 확인 방법은 <a href="/blog/license-scrivener-qualification-check">인허가 행정사 자격 확인</a>에서 다룹니다.</p>

<h2>인허가 대행 절차 한눈에 보기</h2>
<table><thead><tr><th>단계</th><th>하는 일</th><th>법이 정한 기준</th></tr></thead><tbody>
<tr><td>위임</td><td>업무 범위 확정, 업무처리부 작성</td><td>업무처리부 1년 보관<!-- 근거: 행정사법 제24조 제1항, 같은 법 시행령 제22조 제2항 --></td></tr>
<tr><td>사전심사(선택)</td><td>정식 신청 전 약식 심사 청구</td><td>처리기간이 30일 이상인 민원은 30일 이내 처리<!-- 근거: 민원 처리에 관한 법률 제30조 제1항, 같은 법 시행령 제34조 제2항 제2호 --></td></tr>
<tr><td>신청·접수</td><td>문서·전자문서로 신청, 접수증 수령</td><td>전자민원창구 도달 후 8근무시간 이내 접수<!-- 근거: 민원 처리에 관한 법률 제8조·제9조 제2항, 같은 법 시행령 제6조 제8항 --></td></tr>
<tr><td>처리</td><td>보완 대응, 연장·진행상황 통지 확인</td><td>접수 후 30일이 지나도 미완료면 진행상황 통지<!-- 근거: 민원 처리에 관한 법률 제22조 제1항, 같은 법 시행령 제23조 제1항 --></td></tr>
<tr><td>처분 통지</td><td>결과 문서 수령, 허가서 등 교부</td><td>처리완료 예정일부터 15일 넘게 미수령 시 종결 가능<!-- 근거: 민원 처리에 관한 법률 제27조, 같은 법 시행령 제25조 제4항 --></td></tr>
</tbody></table>

<h2>위임 단계 — 범위 확정과 위임장</h2>
<p>먼저 서류 작성, 제출 대행, 신청 대리, 상담 중 어디까지 맡길지 정합니다. 다른 법률이 제한한 업무는 행정사가 할 수 없으므로 범위를 정할 때 함께 확인합니다.<!-- 근거: 행정사법 제2조 제1항 제1호·제4호·제5호·제6호 및 단서 --> 행정사가 아닌 사람은 다른 법률이 허용하는 경우를 빼고 이 업무를 업으로 할 수 없으므로, 맡기려는 사람이 업무신고를 마친 행정사인지도 먼저 확인합니다.<!-- 근거: 행정사법 제3조 제1항, 제10조 제1항 --> 행정사는 위임을 받으면 일련번호, 위임받은 날, 업무 개요, 위임인의 주소·성명 등을 적은 업무처리부를 작성해 1년간 보관해야 합니다.<!-- 근거: 행정사법 제24조, 같은 법 시행령 제22조 제2항 --></p>
<p>행정사는 직무상 알게 된 사실을 누설할 수 없고, 고의나 과실로 위임인에게 재산상 손해를 입히면 배상할 책임을 집니다. 정당한 사유 없이 위임을 거부하거나 공무원과의 사적 연고를 내세워 영향력을 선전하는 것도 금지됩니다.<!-- 근거: 행정사법 제21조 제2항, 제22조 제1호·제4호, 제23조 --> 접수 기관은 신청인이 본인 또는 위임받은 사람인지 확인할 수 있으므로, 위임 사실을 보여 주는 위임장을 갖춰 둡니다. 서식은 기관과 민원별로 다를 수 있습니다.<!-- 근거: 민원 처리에 관한 법률 시행령 제6조 제6항 --></p>

<h2>접수부터 처분 통지까지</h2>
<ol><li>토지 매입 등 경제적 부담이 큰 민원이나 거부되면 손실이 큰 민원은 정식 신청 전에 사전심사를 청구할 수 있고, 결과는 문서로 통지됩니다.<!-- 근거: 민원 처리에 관한 법률 제30조 제1항·제3항, 같은 법 시행령 제33조 제1항 --></li><li>민원은 문서(전자문서 포함)로 신청하고, 방문이 필요 없는 민원은 위임받은 사람이 정보통신망이나 우편으로 낼 수 있습니다. 기관은 법령이 정한 구비서류 외의 서류를 추가로 요구할 수 없고, 행정정보 공동이용이나 기관이 보유한 공부로 확인할 수 있는 서류는 담당자가 직접 확인하므로 따로 낼 필요가 없습니다.<!-- 근거: 민원 처리에 관한 법률 제8조, 제10조 제1항·제3항, 같은 법 시행령 제5조 --></li><li>기관은 접수를 보류·거부할 수 없고 접수증을 내주며, 구비서류 완비 여부와 예상 처리소요기간 등을 안내합니다. 단순 오기는 신청인 동의를 받아 직권으로 보정할 수 있습니다.<!-- 근거: 민원 처리에 관한 법률 제9조 제1항·제2항, 같은 법 시행령 제6조 제4항·제5항 --></li><li>관계 기관 협조나 현장 확인이 필요하면 처리기간의 범위에서 한 차례 연장되고, 그래도 어려우면 신청인 동의를 받아 한 차례 더 연장됩니다. 연장 사유와 처리완료 예정일은 문서로 통지됩니다.<!-- 근거: 민원 처리에 관한 법률 시행령 제21조 제1항·제3항 --></li><li>처리가 끝나면 결과가 문서로 통지되고, 거부하는 경우에는 거부 이유와 구제절차가 함께 적혀야 합니다.<!-- 근거: 민원 처리에 관한 법률 제27조 제1항·제3항 --></li></ol>
<p>단순 업무과중이나 담당자 부재는 연장 사유가 되지 않으며, 처리기간이 지나면 신청인은 시정을 요구할 수 있습니다.<!-- 근거: 민원 처리에 관한 법률 시행령 제21조 제2항, 제18조 제1항 제3호 --> 허가서·신고필증 같은 문서를 직접 받을 때 기관은 민원인 또는 위임받은 사람인지 확인한 뒤 교부합니다.<!-- 근거: 민원 처리에 관한 법률 제27조 제4항 --></p>

<div class="faq-section"><h2>자주 묻는 질문 (FAQ)</h2>
<div class="faq-item"><p class="faq-q">Q. 행정사에게 맡기면 접수증은 누가 받나요?</p><p class="faq-a">A. 접수증은 민원인에게 내주도록 되어 있고, 위임받은 행정사가 방문 접수하면 그 자리에서 받아 전달합니다. 방문하지 않고 신청한 민원은 접수증 교부가 생략될 수 있습니다.<!-- 근거: 민원 처리에 관한 법률 제9조 제2항, 같은 법 시행령 제6조 제3항 --></p></div>
<div class="faq-item"><p class="faq-q">Q. 신청 중에 내용을 바꾸거나 취하할 수 있나요?</p><p class="faq-a">A. 처리가 종결되기 전에는 보완·변경·취하할 수 있습니다. 다른 법률에 특별한 규정이 있거나 성질상 할 수 없는 경우는 예외입니다.<!-- 근거: 민원 처리에 관한 법률 제22조 제2항 --></p></div>
<div class="faq-item"><p class="faq-q">Q. 한 달이 넘도록 결과가 없으면 어떻게 되나요?</p><p class="faq-a">A. 접수 후 30일이 지나도 처리가 끝나지 않으면 기관이 진행상황과 처리완료 예정일을 30일마다 알리는 것이 원칙이고, 신청인이 요청해도 알려야 합니다.<!-- 근거: 민원 처리에 관한 법률 시행령 제23조 제1항·제2항 --></p></div>
<div class="faq-item"><p class="faq-q">Q. 이미 낸 서류를 변경 신청 때 또 내야 하나요?</p><p class="faq-a">A. 원래 민원의 내용 변경이나 갱신 신청이면 특별한 사유가 없는 한 이미 낸 서류를 다시 요구하지 않습니다. 행정사 선택 기준은 <a href="/blog/administrative-license-permit-specialist-guide">인허가 행정사 선택 가이드</a>를 참고하십시오.<!-- 근거: 민원 처리에 관한 법률 제10조 제7항 --></p></div>
</div>

<div class="cta-block"><h3>인허가 신청, 위임부터 처분 통지까지 한 흐름으로 준비하세요</h3><p>유선행정사사무소가 위임 범위 확정, 신청서와 구비서류 작성, 제출 대리, 보완 대응과 처분 결과 확인까지 돕습니다. 진행 범위는 상담에서 안내합니다. 전화 02-325-8222, 평일 09:30~17:30 KST.</p><a href="/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">상담 신청하기</a></div>
<p class="author-block">유선행정사사무소 (대표 행정사 정유선)<!-- 근거: 행정사법 제2조·제21조·제22조·제23조·제24조, 같은 법 시행령 제22조, 민원 처리에 관한 법률 제8조·제9조·제10조·제17조·제22조·제27조·제30조, 같은 법 시행령 제5조·제6조·제18조·제21조·제23조·제25조·제33조·제34조 --></p>`,
  },

  en: {
    title: 'Permit Application Procedure Through an Administrative Agent in Korea — From Delegation to Decision Notice',
    category: 'Licensing & Permits',
    metaTitle: 'Korean Permit Agency Procedure — Delegation to Decision Notice',
    metaDescription: 'How a Korean permit filing runs when delegated to an Administrative Agent: scope of delegation, receipt, extensions, progress notices and the written decision.',
    excerpt: 'A delegated permit filing in Korea moves through set stages: fixing the scope of delegation, preparing the power of attorney and documents, receipt, extension and progress notices, and the written decision. The Certified Administrative Agents Act and the Civil Petitions Treatment Act set deadlines for each.',
    content: `<div class="toc"><p>Contents</p><ol><li>The procedure at a glance</li><li>Delegation — scope and power of attorney</li><li>From receipt to decision notice</li><li>FAQ</li></ol></div>
<p><strong>A permit filing handled by an Administrative Agent runs in this order: you delegate a defined scope of work, the agency receives the application and decides within the processing period, and the result is notified in writing.</strong> An Administrative Agent may, on delegation, act for you in applying for authorizations, permits and licenses or filing reports, and may submit the documents prepared. Agencies set and publish processing periods for each type of statutory petition in advance.</p>
<p>Supplement requests and returns are covered in <a href="/en/blog/administrative-license-agency-supplement-and-rejection">supplement requests and rejections</a>, the limits of delegable work in <a href="/en/blog/administrative-scrivener-scope-and-limits">scope and limits of an Administrative Agent</a>, and how to check qualifications in <a href="/en/blog/license-scrivener-qualification-check">checking an agent's qualification</a>.</p>

<h2>The procedure at a glance</h2>
<table><thead><tr><th>Stage</th><th>What happens</th><th>Statutory standard</th></tr></thead><tbody>
<tr><td>Delegation</td><td>Fix the scope; the agent keeps a work register</td><td>Register kept for 1 year</td></tr>
<tr><td>Prior review (optional)</td><td>Request an informal review before filing</td><td>Within 30 days for petitions with a period of 30 days or more</td></tr>
<tr><td>Filing and receipt</td><td>File in writing or electronically; get a receipt</td><td>Online filings received within 8 working hours of arrival</td></tr>
<tr><td>Processing</td><td>Handle supplements; watch for extension and progress notices</td><td>Progress notice if not finished 30 days after receipt</td></tr>
<tr><td>Decision notice</td><td>Receive the written result and any permit</td><td>Uncollected documents may be closed 15 days after the expected completion date</td></tr>
</tbody></table>

<h2>Delegation — scope and power of attorney</h2>
<p>First decide how much to delegate: drafting, submission, acting on the application, or advice. Work restricted by other laws cannot be done by an Administrative Agent, and only Administrative Agents who have filed a business report may do this work as a business, so check that first. Once delegated, the agent must keep a work register with a serial number, the delegation date, an outline of the work and the client's name and address, and keep it for 1 year.</p>
<p>The agent may not disclose what they learn on the job, is liable for property damage caused to the client by intent or negligence, and may not refuse delegation without good reason or advertise personal ties to officials. Because the receiving agency may check whether the filer is the petitioner or a delegated person, prepare a power of attorney showing the delegation; the form may differ by agency and petition.</p>

<h2>From receipt to decision notice</h2>
<ol><li>For petitions involving a heavy financial burden such as buying land, or large losses if refused, you may request a prior review before filing; the result is notified in writing.</li><li>File in writing, including electronic documents. Petitions that need no visit may be filed by the delegated person online or by post. The agency may not ask for documents beyond those set by law, and documents it can verify through shared administrative data or its own records are checked by the officer directly.</li><li>The agency may not hold or refuse receipt, issues a receipt and explains whether documents are complete and the expected processing time. Simple clerical errors may be corrected with your consent.</li><li>If cooperation from other bodies or a site check is needed, the period may be extended once within the original period, and once more with your consent. The reason and expected completion date are notified in writing.</li><li>When processing ends, the result is notified in writing; a refusal must state the reasons and available remedies.</li></ol>
<p>Workload or staff absence is not a valid reason for extension, and once the period passes you may demand correction. When a permit or report certificate is handed over in person, the agency first checks that the recipient is the petitioner or a delegated person.</p>

<div class="faq-section"><h2>FAQ</h2>
<div class="faq-item"><p class="faq-q">Q. Who receives the filing receipt when an agent files?</p><p class="faq-a">A. The receipt is issued to the petitioner; an agent filing in person receives it and passes it on. It may be omitted for filings made without a visit.</p></div>
<div class="faq-item"><p class="faq-q">Q. Can we change or withdraw the application midway?</p><p class="faq-a">A. Yes, before processing is concluded, unless another law or the nature of the petition prevents it.</p></div>
<div class="faq-item"><p class="faq-q">Q. What if there is no result after a month?</p><p class="faq-a">A. If processing is not finished 30 days after receipt, the agency should notify progress and the expected completion date every 30 days, and also on your request.</p></div>
<div class="faq-item"><p class="faq-q">Q. Must we resubmit documents for a change application?</p><p class="faq-a">A. For a change or renewal of the original petition, documents already submitted are not requested again without special reason. See <a href="/en/blog/administrative-license-permit-specialist-guide">choosing a permit specialist</a>.</p></div>
</div>

<div class="cta-block"><h3>Prepare your permit filing as one flow, from delegation to decision</h3><p>YouSun Administrative Agency helps fix the scope, prepare applications and documents, file on your behalf, respond to supplements and confirm the decision. The scope of work is explained during consultation. Call 02-325-8222, weekdays 09:30~17:30 KST.</p><a href="/en/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">Request a consultation</a></div>
<p class="author-block">YouSun Administrative Agency (Chief Administrative Agent Jung Yu-sun)</p>`,
  },

  zh: {
    title: '韩国许可代办流程 — 从确定行政士委托范围到受理、处理期限延长与处分通知',
    category: '许可与执照',
    metaTitle: '韩国许可代办流程 — 从行政士委托到民愿受理与处分通知',
    metaDescription: '在韩国委托行政士代办许可时，依次经过确定委托范围、民愿受理、处理期限延长与进度通知，最后以书面形式收到处分结果。受理证发放、延长理由通知及拒绝理由与救济程序的告知均由法律规定。',
    excerpt: '韩国许可代办依次经过确定委托范围、准备委托书与材料、民愿受理与受理证、处理期限延长与进度通知、处分结果通知与领取。《行政士法》和《民愿处理法》对各阶段的期限与确认事项都有规定。',
    content: `<div class="toc"><p>目录</p><ol><li>许可代办流程一览</li><li>委托阶段 — 确定范围与委托书</li><li>从受理到处分通知</li><li>常见问题</li></ol></div>
<p><strong>许可代办流程的顺序是：确定交给行政士的业务范围并委托，行政机关受理民愿并在处理期限内作出处分，再以书面形式通知结果。</strong>行政士可受委托代理认可·许可·执照申请和申报，或代为提交所写材料；行政机关须按种类事先确定并公布法定民愿的处理期限。</p>
<p>提交后的补正与退回请参阅<a href="/zh/blog/administrative-license-agency-supplement-and-rejection">许可代办中的补正要求与退回</a>，可委托业务的界限请参阅<a href="/zh/blog/administrative-scrivener-scope-and-limits">行政士业务范围与委托界限</a>，资格确认方法请参阅<a href="/zh/blog/license-scrivener-qualification-check">许可行政士资格确认</a>。</p>

<h2>许可代办流程一览</h2>
<table><thead><tr><th>阶段</th><th>主要事项</th><th>法定标准</th></tr></thead><tbody>
<tr><td>委托</td><td>确定范围，行政士制作业务处理簿</td><td>业务处理簿保存1年</td></tr>
<tr><td>事前审查（可选）</td><td>正式申请前请求简易审查</td><td>处理期限30日以上的民愿在30日内处理</td></tr>
<tr><td>申请·受理</td><td>以书面或电子文件申请，领取受理证</td><td>电子民愿窗口送达后8个工作小时内受理</td></tr>
<tr><td>处理</td><td>应对补正，留意延长与进度通知</td><td>受理后30日仍未完成的，通知进度</td></tr>
<tr><td>处分通知</td><td>领取书面结果及许可证等</td><td>自预定完成日起超过15日未领取的可终结</td></tr>
</tbody></table>

<h2>委托阶段 — 确定范围与委托书</h2>
<p>首先确定委托到哪一步：材料撰写、代为提交、申请代理还是咨询。其他法律限制的业务行政士不能办理，确定范围时一并确认。除其他法律允许的情形外，非行政士不得以此为业，因此也要先确认对方是否为已完成业务申报的行政士。行政士受托后须制作记载序号、受托日期、业务概要、委托人地址和姓名等的业务处理簿，并保存1年。</p>
<p>行政士不得泄露职务上知悉的事实，因故意或过失给委托人造成财产损失的须承担赔偿责任；无正当理由拒绝委托、宣扬与公务员的私人关系也被禁止。受理机关可确认申请人是否为本人或受托人，因此应备好能证明委托事实的委托书，格式可能因机关和民愿而异。</p>

<h2>从受理到处分通知</h2>
<ol><li>需要购买土地等经济负担较大的民愿，或被拒绝时损失较大的民愿，可在正式申请前请求事前审查，结果以书面通知。</li><li>民愿以书面（含电子文件）申请，无需到访的民愿可由受托人通过网络或邮寄提交。机关不得要求法令规定以外的材料，可通过行政信息共同利用或本机关公簿确认的材料由负责人直接确认，无需另行提交。</li><li>机关不得保留或拒绝受理，须发给受理证，并说明材料是否齐全及预计处理时间。简单笔误可经申请人同意依职权更正。</li><li>需要相关机关协助或现场确认的，可在原处理期限范围内延长一次，仍难完成的经申请人同意再延长一次，延长理由与预定完成日以书面通知。</li><li>处理完毕后以书面通知结果；拒绝的，须同时写明拒绝理由与救济程序。</li></ol>
<p>单纯业务繁忙或负责人缺席不能作为延长理由，超过处理期限的，申请人可要求纠正。直接领取许可证、申报证明等文件时，机关会先确认领取人是民愿人本人或受托人。</p>

<div class="faq-section"><h2>常见问题</h2>
<div class="faq-item"><p class="faq-q">Q. 委托行政士后，受理证由谁领取？</p><p class="faq-a">A. 受理证发给民愿人，受托行政士到访提交时当场领取后转交。未到访提交的民愿可省略发放受理证。</p></div>
<div class="faq-item"><p class="faq-q">Q. 申请过程中可以修改或撤回吗？</p><p class="faq-a">A. 在处理终结前可以补正、变更或撤回，但其他法律另有规定或依性质不能的除外。</p></div>
<div class="faq-item"><p class="faq-q">Q. 超过一个月仍无结果怎么办？</p><p class="faq-a">A. 受理后30日仍未处理完毕的，原则上机关须每30日通知进度和预定完成日，申请人提出要求时也须通知。</p></div>
<div class="faq-item"><p class="faq-q">Q. 变更申请时需要重新提交已交过的材料吗？</p><p class="faq-a">A. 原民愿内容变更或更新申请时，若无特殊理由，不会再次要求已提交的材料。选择行政士的标准请参阅<a href="/zh/blog/administrative-license-permit-specialist-guide">许可行政士选择指南</a>。</p></div>
</div>

<div class="cta-block"><h3>许可申请，从委托到处分通知一次理顺</h3><p>YouSun Administrative Agency（代表行政士 Jung Yu-sun）协助确定委托范围、撰写申请书与必备材料、代理提交、应对补正并确认处分结果。具体办理范围在咨询时说明。电话 02-325-8222，工作日 09:30~17:30 KST。</p><a href="/zh/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">申请咨询</a></div>
<p class="author-block">YouSun Administrative Agency（代表行政士 Jung Yu-sun）</p>`,
  },

  ja: {
    title: '韓国の許認可代行手続 — 行政士への委任範囲の確定から受付・処理期間延長・処分通知まで',
    category: '許認可',
    metaTitle: '韓国の許認可代行手続 — 行政士への委任から民願受付・処分通知まで',
    metaDescription: '韓国で許認可を行政士に委任すると、委任範囲の確定、民願の受付、処理期間の延長と進行状況の通知を経て、処分結果を書面で受け取る流れになります。受付証の交付、延長理由の通知、拒否理由と救済手続の通知は法律で定められています。',
    excerpt: '韓国の許認可代行は、委任範囲の確定、委任状と書類の準備、民願の受付と受付証、処理期間の延長・進行状況の通知、処分結果の通知と受領という順で進みます。「行政士法」と「民願処理に関する法律」が各段階の期限と確認事項を定めています。',
    content: `<div class="toc"><p>目次</p><ol><li>許認可代行手続の全体像</li><li>委任段階 — 範囲の確定と委任状</li><li>受付から処分通知まで</li><li>よくある質問</li></ol></div>
<p><strong>許認可代行の手続は、行政士に任せる業務範囲を定めて委任し、行政機関が民願を受け付けて処理期間内に処分し、その結果が書面で通知されるという順で進みます。</strong>行政士は委任を受けて認可・許可・免許の申請や届出を代理し、作成した書類の提出を代行できます。行政機関は法定民願の処理期間を種類ごとにあらかじめ定めて公表します。</p>
<p>提出後の補正要求と返戻については<a href="/ja/blog/administrative-license-agency-supplement-and-rejection">許認可代行手続における補正要求と返戻</a>、委任できる業務の限界は<a href="/ja/blog/administrative-scrivener-scope-and-limits">行政士の業務範囲と委任の限界</a>、資格の確認方法は<a href="/ja/blog/license-scrivener-qualification-check">許認可行政士の資格確認</a>をご覧ください。</p>

<h2>許認可代行手続の全体像</h2>
<table><thead><tr><th>段階</th><th>行うこと</th><th>法律上の基準</th></tr></thead><tbody>
<tr><td>委任</td><td>範囲の確定、行政士による業務処理簿の作成</td><td>業務処理簿は1年間保管</td></tr>
<tr><td>事前審査（任意）</td><td>正式申請前に略式審査を請求</td><td>処理期間30日以上の民願は30日以内に処理</td></tr>
<tr><td>申請・受付</td><td>書面・電子文書で申請し受付証を受領</td><td>電子民願窓口への到達後8勤務時間以内に受付</td></tr>
<tr><td>処理</td><td>補正への対応、延長・進行状況通知の確認</td><td>受付後30日を過ぎても未完了なら進行状況を通知</td></tr>
<tr><td>処分通知</td><td>結果文書と許可証等の受領</td><td>処理完了予定日から15日を過ぎて未受領なら終結可能</td></tr>
</tbody></table>

<h2>委任段階 — 範囲の確定と委任状</h2>
<p>まず書類作成、提出代行、申請代理、相談のどこまでを任せるかを決めます。他の法律で制限された業務は行政士が行えないため、範囲を決める際にあわせて確認します。他の法律で認められる場合を除き行政士でない者はこの業務を業として行えないため、業務申告を済ませた行政士かどうかも先に確認します。行政士は委任を受けると、一連番号、委任を受けた日、業務の概要、委任者の住所・氏名などを記載した業務処理簿を作成し、1年間保管しなければなりません。</p>
<p>行政士は職務上知った事実を漏らしてはならず、故意または過失で委任者に財産上の損害を与えた場合は賠償責任を負います。正当な理由なく委任を拒むことや、公務員との私的な縁故を宣伝することも禁止されています。受付機関は申請者が本人か委任を受けた者かを確認できるため、委任の事実を示す委任状を用意しておきます。様式は機関や民願によって異なる場合があります。</p>

<h2>受付から処分通知まで</h2>
<ol><li>土地の購入など経済的負担が大きい民願や、拒否されると損失が大きい民願は、正式申請の前に事前審査を請求でき、結果は書面で通知されます。</li><li>民願は書面（電子文書を含む）で申請し、訪問が不要な民願は委任を受けた者が情報通信網や郵便で提出できます。機関は法令で定める書類以外を追加で求めることはできず、行政情報の共同利用や機関が保有する公簿で確認できる書類は担当者が直接確認するため、別途提出する必要はありません。</li><li>機関は受付を保留・拒否できず、受付証を交付し、書類の完備状況や予想処理期間などを案内します。単純な誤記は申請者の同意を得て職権で補正できます。</li><li>関係機関の協力や現場確認が必要な場合は処理期間の範囲で一度延長され、それでも難しければ申請者の同意を得てもう一度延長されます。延長理由と処理完了予定日は書面で通知されます。</li><li>処理が終わると結果が書面で通知され、拒否する場合は拒否理由と救済手続もあわせて示されます。</li></ol>
<p>単なる業務過多や担当者不在は延長理由にならず、処理期間を過ぎた場合、申請者は是正を求めることができます。許可証や届出済証などの文書を直接受け取る際、機関は受領者が民願人本人か委任を受けた者かを確認してから交付します。</p>

<div class="faq-section"><h2>よくある質問</h2>
<div class="faq-item"><p class="faq-q">Q. 行政士に任せた場合、受付証は誰が受け取りますか？</p><p class="faq-a">A. 受付証は民願人に交付されるもので、委任を受けた行政士が窓口で受け取りお渡しします。訪問せずに申請した民願では交付が省略されることがあります。</p></div>
<div class="faq-item"><p class="faq-q">Q. 申請途中で内容を変えたり取り下げたりできますか？</p><p class="faq-a">A. 処理が終結する前であれば補正・変更・取下げができます。他の法律に特別な規定がある場合や性質上できない場合は除きます。</p></div>
<div class="faq-item"><p class="faq-q">Q. 1か月以上結果が出ない場合はどうなりますか？</p><p class="faq-a">A. 受付後30日を過ぎても処理が終わらなければ、機関は進行状況と処理完了予定日を30日ごとに知らせるのが原則で、申請者が求めた場合も知らせなければなりません。</p></div>
<div class="faq-item"><p class="faq-q">Q. 変更申請の際、すでに出した書類をまた出す必要がありますか？</p><p class="faq-a">A. もとの民願の内容変更や更新の申請であれば、特別な理由がない限り提出済みの書類を再度求められることはありません。行政士の選び方は<a href="/ja/blog/administrative-license-permit-specialist-guide">許認可行政士の選び方ガイド</a>をご覧ください。</p></div>
</div>

<div class="cta-block"><h3>許認可申請は委任から処分通知まで一つの流れで準備を</h3><p>YouSun Administrative Agency（代表行政士 Jung Yu-sun）が、委任範囲の確定、申請書と必要書類の作成、提出の代理、補正への対応、処分結果の確認までお手伝いします。進め方の範囲はご相談時にご案内します。電話 02-325-8222、平日 09:30~17:30 KST。</p><a href="/ja/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">相談を申し込む</a></div>
<p class="author-block">YouSun Administrative Agency（代表行政士 Jung Yu-sun）</p>`,
  },
}

entry.wrongTerms = [
  '행정사 등록증', '행정사 개업허가', '행정사 면허', '행정사 허가',
  'agent registration', 'agent license',
  '行政士执照', '行政士登记', '行政士许可',
  '行政士登録', '行政士免許', '行政士許可',
]

export default entry
