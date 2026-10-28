// 원고 은행 — INHEGA-BLOG-RESTART (2026-10-24, 맥4 하위 작업)
// 주제: haccp(HACCP 인증) / 세부주제: change-report(인증받은 사항의 변경 — 변경 인증·변경신청)
//
// 겹침 검사(ko-titles.txt, blog-i18n.ts):
//   haccp-certification-guide(최초 인증 절차·서류) / haccp-mandatory-industries(의무 적용 업종) /
//   haccp-post-certification-management-guide(정기 조사·평가·갱신·CCP 기록) / haccp-select(대행 선택)
//   → 이 글은 "인증받은 뒤 소재지·중요관리점·품목 등이 바뀔 때 무엇을 신청하는가"만 다룬다. 정기 평가·연장 상세는 링크로 넘김.
//   참고: post-certification 글 "5. 변경 신고 의무"의 '30일 이내 변경 신고'·'대표자·상호 변경'·'과태료'는
//   아래 법령 원문에서 확인되지 않았다(이 글에는 쓰지 않음. 기존 글 수정은 범위 밖 — 보고만).
//
// 법령 대조(law.go.kr DRF, OC=visionlaw, 2026-10-24 조회):
//   식품위생법            MST 285339, 법률 제21525호, 2026. 10. 8. 시행 — 제48조 제3항(후단 변경 인증)·제4항·제8항, 제48조의2 제1항~제3항, 제39조 제1항·제3항
//   식품위생법 시행령      MST 288767, 대통령령 제36593호, 2026. 8. 18. 시행 — 제26조의3 제1호·제2호, 제34조 제1항 제1호
//   식품위생법 시행규칙    MST 289161, 총리령 제2150호, 2026. 9. 1. 시행 — 제63조 제4항~제6항, 제67조 제1항 제2호·제2항,
//                          제68조의2 제1항·제2항, 별표 20 제5호·제6호, 별지 제54호서식(처리기간 15일, 소재지 칸 '행정구역상 지, 번의 변경은 제외')
//   식약처 고시 「식품 및 축산물 안전관리인증기준」 제2026-60호(2026. 8. 11. 시행, 행정규칙일련번호 2100000283858)
//                          — 제6조 제2항, 제9조 제4항, 제10조 제8항, 제12조 제1항~제4항, 제13조 제1항, 제14조 제1항·제2항
// 확인 못 한 점: 대표자·상호 변경, 영업 양수 시 HACCP 인증서 처리 방법 — 법령·고시의 변경신청 대상 목록에 없고 별도 규정도 찾지 못함
//   → "목록에 없다 + 인증원에 확인" 으로만 서술. 변경신청 '사후 N일 이내' 기한은 법령에 없음(변경하려는 경우 사전 변경 인증 구조).
//   현장조사 보완 기한(고시 제12조 제4항이 준용하는 조항 번호가 제11조 제2항으로 적혀 있어 3개월 수치 불명확) → 수치 미기재.
// 금액·수수료 0건. 대조표: crosscheck/haccp-certification-change-application.md

export default {
  topic: 'haccp',
  angle: 'change-report',
  slug: 'haccp-certification-change-application',
  kind: 'seo3958',
  keyword: 'HACCP 인증 변경',
  wrongTerms: ['HACCP 허가', 'HACCP 등록증', 'HACCP 변경허가', 'HACCP permit', 'HACCP license', 'HACCP许可', 'HACCP許可'],
  pexelsId: 5953737,
  coverImage: '',
  relatedServices: [
    { title: 'HACCP 인증', href: '/services/haccp' },
    { title: '식품제조가공업 등록', href: '/services/food-manufacturing' },
  ],

  ko: {
    title: 'HACCP 인증 변경 — 소재지 이전·중요관리점 변경 때 변경신청 절차와 유의점',
    category: '식품',
    metaTitle: 'HACCP 인증 변경신청 — 소재지 이전·중요관리점 변경 절차',
    metaDescription: 'HACCP 인증을 받은 뒤 영업장 소재지나 중요관리점(CCP)을 바꾸려면 변경 인증을 받아야 합니다. 변경신청 대상, 서류, 처리기간, 품목 추가, 미신청 시 처분과 유효기간을 정리했습니다.',
    excerpt: 'HACCP 적용업소로 인증받은 뒤 공장을 옮기거나 중요관리점을 바꾸려면 미리 변경 인증을 받아야 합니다. 어떤 변경이 변경신청 대상인지, 서류와 처리 흐름, 품목 추가와 영업 쪽 변경 절차의 구분, 신청하지 않았을 때의 처분을 정리했습니다.',
    content: `<div class="toc"><p>목차</p><ol><li>변경 인증이 필요한 변경과 아닌 변경</li><li>변경신청 절차와 처리기간</li><li>신청하지 않으면 생기는 일과 유효기간</li><li>자주 묻는 질문 (FAQ)</li></ol></div>
<p><strong>HACCP(식품안전관리인증기준) 적용업소로 인증받은 영업자가 영업장 소재지나 중요관리점(CCP)을 바꾸려면, 바꾸기 전에 변경신청을 해서 변경 인증을 받아야 합니다.</strong><!-- 근거: 식품위생법 제48조 제3항 후단, 식품위생법 시행규칙 제63조 제4항 --> HACCP는 허가나 등록이 아니라 '인증'이므로 영업 등록 관청이 아닌 한국식품안전관리인증원에 신청합니다.<!-- 근거: 식품위생법 제48조 제3항·제12항, 시행령 제34조 제1항 제1호, 시행규칙 제63조 제1항, 고시 제12조 제1항 --> 최초 인증 절차는 <a href="/blog/haccp-certification-guide">HACCP 인증 취득 방법과 절차</a>에서, 의무 적용 업종은 <a href="/blog/haccp-mandatory-industries">HACCP 의무 적용 업종</a>에서 다루었으니, 이 글은 인증 뒤의 변경만 다룹니다.</p>

<h2>변경 인증이 필요한 변경과 아닌 변경</h2>
<p>식품 영업자의 변경신청 대상은 영업장 소재지와 중요관리점, 두 가지입니다. 축산물 작업장은 축산물의 유형, 농장은 가축의 종류가 더해집니다.<!-- 근거: 시행규칙 제63조 제4항, 고시 「식품 및 축산물 안전관리인증기준」 제12조 제1항 제1호~제4호 --> 공장 운영에서 흔히 생기는 변경을 정리하면 다음과 같습니다.</p>
<table><thead><tr><th>변경 내용</th><th>HACCP 쪽 절차</th><th>함께 확인할 절차</th></tr></thead><tbody>
<tr><td>영업장 소재지 이전</td><td>변경신청 대상(행정구역상 지번만 바뀌는 경우는 서식에서 제외)<!-- 근거: 시행규칙 제63조 제4항, 별지 제54호서식 --></td><td>식품제조·가공업은 영업소 소재지 변경 등록<!-- 근거: 식품위생법 시행령 제26조의3 제1호 --></td></tr>
<tr><td>중요관리점(CCP) 변경</td><td>변경신청 대상<!-- 근거: 시행규칙 제63조 제4항 --></td><td>HACCP 관리계획 재검토<!-- 근거: 고시 제6조 제2항 --></td></tr>
<tr><td>같은 공정의 유사 유형 품목 추가</td><td>인증대상 추가 신청, 서류 검토만으로 추가 가능<!-- 근거: 고시 제13조 제1항 --></td><td>새 식품군을 시설을 갖춰 제조하면 영업 변경 등록<!-- 근거: 시행령 제26조의3 제2호 --></td></tr>
<tr><td>작업장 증축·설비 교체</td><td>그 결과 중요관리점이 바뀌면 변경신청<!-- 근거: 시행규칙 제63조 제4항 --></td><td>공정 변경에 따른 관리계획 재평가 검토<!-- 근거: 고시 제9조 제4항 --></td></tr>
<tr><td>대표자·상호 변경, 영업 양수</td><td>변경신청 대상 목록에 없음<!-- 근거: 시행규칙 제63조 제4항, 고시 제12조 제1항 --></td><td>영업 양수 등은 지위 승계 후 1개월 이내 신고<!-- 근거: 식품위생법 제39조 제1항·제3항 --></td></tr>
</tbody></table>
<p>표에서 보듯 HACCP 변경 인증과 영업 등록 변경은 별개의 절차입니다. 공장을 옮기면 두 절차를 모두 밟아야 할 수 있으므로 <a href="/services/food-manufacturing">식품제조가공업 등록</a> 쪽 일정도 함께 잡는 것이 좋습니다. 대표자·상호 변경은 변경신청 대상이 아니지만 인증서 기재 내용과 맞지 않게 되므로, 인증서 정리 방법을 인증원에 미리 확인해 두시기 바랍니다. 또 HACCP 인증 신청은 작업장·업소별로 하도록 되어 있어, 기존 공장을 둔 채 새 공장을 하나 더 여는 것은 소재지 이전과 성격이 다르므로 새 작업장에 대한 인증 신청 여부를 먼저 검토해야 합니다.<!-- 근거: 고시 제10조 제7항 --></p>

<h2>변경신청 절차와 처리기간</h2>
<p>법령은 '변경한 뒤 며칠 이내'가 아니라 '변경하려는 경우' 변경 인증을 받도록 정하고 있습니다. 이전 공사나 공정 변경 일정을 잡을 때 변경신청을 앞에 두어야 합니다.<!-- 근거: 식품위생법 제48조 제3항 후단 --></p>
<ol>
<li>변경 내용을 확정하고 HACCP 팀이 관리계획(중요관리점·한계기준 등)을 재검토합니다.<!-- 근거: 고시 제6조 제2항, 제9조 제4항 --></li>
<li>인증사항 변경신청서에 기존 인증서와 중요관리점 변경 내용 설명서 등 변경사항을 증명하는 서류를 붙여 한국식품안전관리인증원장에게 냅니다. 전자문서로도 낼 수 있습니다.<!-- 근거: 시행규칙 제63조 제4항, 고시 제12조 제1항 --></li>
<li>인증원이 서류검토나 현장조사로 변경사항을 확인합니다. 서류가 미흡하면 특별한 경우가 아니면 15일 이내의 기간을 정해 보완을 요구할 수 있습니다.<!-- 근거: 시행규칙 제63조 제5항, 고시 제12조 제2항·제4항, 제10조 제8항 --></li>
<li>현장조사에서 보완이 필요하면 보완 요구를 받거나 변경 절차가 종결 처리될 수 있습니다.<!-- 근거: 고시 제12조 제4항 --></li>
<li>적합하다고 인정되면 인증서에 해당 사항을 기재해 재발급하고, 그 사실을 식품의약품안전처장과 관할 지방식품의약품안전청장에게 통보합니다.<!-- 근거: 시행규칙 제63조 제5항·제6항, 고시 제12조 제3항 --></li>
</ol>
<p>변경신청서 서식의 처리기간은 15일입니다. 보완이 생기면 일정이 늘어날 수 있으니 이전 가동일보다 여유 있게 신청하는 편이 안전합니다.<!-- 근거: 시행규칙 별지 제54호서식 처리기간 15일 --></p>

<h2>신청하지 않으면 생기는 일과 유효기간</h2>
<p>변경신청을 하지 않고 소재지나 중요관리점을 바꾸면 인증취소 등의 기준에 따라 시정명령 대상이 되고, 2회 이상 시정명령을 받고도 이행하지 않으면 인증취소 대상이 됩니다.<!-- 근거: 시행규칙 제67조 제1항 제2호·제2항, 별표 20 제5호·제6호, 식품위생법 제48조 제8항 제4호 --></p>
<p>변경 인증을 받았다고 유효기간이 새로 3년이 되는 것은 아닙니다. 변경 인증의 유효기간은 당초 인증 유효기간의 남은 기간입니다.<!-- 근거: 식품위생법 제48조의2 제1항 --> 유효기간을 이어 가려면 만료 60일 전까지 연장신청을 해야 하고, 인증기관은 만료 90일 전까지 이를 알려 줍니다. 연장은 3년의 범위에서 이루어집니다.<!-- 근거: 식품위생법 제48조의2 제2항·제3항, 시행규칙 제68조의2 제1항·제2항 --> 연장 심사와 정기 조사·평가는 <a href="/blog/haccp-post-certification-management-guide">HACCP 인증 후 사후관리 가이드</a>를 참고하십시오.</p>

<div class="faq-section"><h2>자주 묻는 질문 (FAQ)</h2>
<div class="faq-item"><p class="faq-q">Q. 새 제품을 추가하면 처음부터 인증을 다시 받아야 하나요?</p><p class="faq-a">A. 이미 인증받은 식품과 같은 공정을 거친 유사 유형이면 별도 현장평가 없이 서류 검토만으로 인증 식품에 추가할 수 있습니다. 인증받은 작업장에서 새 식품을 인증받는 경우도 같습니다.<!-- 근거: 고시 제13조 제1항·제2항 --></p></div>
<div class="faq-item"><p class="faq-q">Q. 공장은 그대로인데 행정구역 개편으로 주소가 바뀌었습니다. 변경신청 대상인가요?</p><p class="faq-a">A. 변경신청서 서식의 영업장 소재지 칸은 행정구역상 지번의 변경을 제외하고 있습니다. 작업장을 실제로 옮긴 경우와 구분해 판단하시면 되고, 애매하면 신청 전에 인증원에 확인하는 것이 안전합니다.<!-- 근거: 시행규칙 별지 제54호서식 '영업장 소재지(행정구역상 지, 번의 변경은 제외)' --></p></div>
<div class="faq-item"><p class="faq-q">Q. 집단급식소 운영자가 바뀌면 인증은 어떻게 되나요?</p><p class="faq-a">A. HACCP 인증을 받은 집단급식소가 위탁 계약 만료 등으로 운영자가 바뀌어 HACCP를 적용하지 않으면 인증이 취소되고, 신고자는 인증서를 즉시 반납해야 합니다.<!-- 근거: 고시 제14조 제2항 --></p></div>
<div class="faq-item"><p class="faq-q">Q. 폐업하면 인증서는 어떻게 하나요?</p><p class="faq-a">A. 폐업한 영업자는 인증서를 한국식품안전관리인증원장에게 지체 없이 반납해야 합니다.<!-- 근거: 고시 제14조 제1항 --></p></div>
</div>

<div class="cta-block"><h3>HACCP 변경신청, 일정부터 함께 잡겠습니다</h3><p>공장 이전이나 공정 변경을 앞두고 있다면 HACCP 변경신청과 영업 등록 변경을 한 번에 점검해 드립니다. <a href="/services/haccp">HACCP 인증</a> 업무를 맡는 유선행정사사무소, 전화 02-363-2251, 평일 09:30~17:30 KST.</p><a href="/contact?utm_source=blog&utm_medium=cta&utm_campaign=haccp-certification-change-application">상담 신청하기</a></div>
<p class="author-block">유선행정사사무소 (대표 행정사 정유선)<!-- 근거: 식품위생법 제39조·제48조·제48조의2, 같은 법 시행령 제26조의3·제34조, 같은 법 시행규칙 제63조·제67조·제68조의2·별표 20·별지 제54호서식, 식품의약품안전처 고시 「식품 및 축산물 안전관리인증기준」 --></p>`,
  },

  en: {
    title: 'HACCP Certification Change in Korea — Relocation and CCP Change Applications',
    category: 'Food',
    metaTitle: 'HACCP Certification Change — Relocation and CCP Change Application',
    metaDescription: 'In Korea, moving a HACCP-certified site or changing a critical control point needs change certification first. Scope, documents, timeline, validity.',
    excerpt: 'A certified HACCP establishment must obtain change certification before relocating or changing a critical control point. This guide covers what counts as a change, the procedure, adding products, and what happens if you skip it.',
    content: `<div class="toc"><p>Contents</p><ol><li>Which changes need change certification</li><li>Change application procedure and timeline</li><li>If you do not apply, and validity</li><li>FAQ</li></ol></div>
<p><strong>A business certified as a HACCP (Hazard Analysis and Critical Control Point) establishment that wants to change its business site location or a critical control point (CCP) must file a change application and obtain change certification before making the change.</strong> HACCP is a certification, not a business registration or permit, so the application goes to the Korea Agency of HACCP Accreditation and Services (한국식품안전관리인증원), not to the local office that handles your business registration. For first-time certification, see <a href="/en/blog/haccp-certification-guide">our HACCP certification guide</a>; this article covers changes only.</p>

<h2>Which changes need change certification</h2>
<p>For food businesses, the change application covers two items: the business site location and the critical control points. Livestock product worksites add the livestock product type, and farms add the livestock species.</p>
<table><thead><tr><th>Change</th><th>HACCP side</th><th>Also check</th></tr></thead><tbody>
<tr><td>Relocating the business site</td><td>Change application required (a change of only the administrative lot number is excluded on the form)</td><td>Food manufacturers must register the new business location</td></tr>
<tr><td>Changing a CCP</td><td>Change application required</td><td>Review the HACCP plan</td></tr>
<tr><td>Adding a similar product made by the same process</td><td>Application to add the product; may be approved on document review alone</td><td>Making a new food group with added facilities requires a registration change</td></tr>
<tr><td>Extending the plant or replacing equipment</td><td>Change application if a CCP changes as a result</td><td>Consider re-evaluating the plan for process changes</td></tr>
<tr><td>New representative or trade name, business transfer</td><td>Not on the change application list</td><td>A transferee reports succession within 1 month</td></tr>
</tbody></table>
<p>HACCP change certification and changes to your business registration are separate procedures; a relocation may need both, so plan the <a href="/en/services/food-manufacturing">food manufacturing registration</a> side at the same time. A new representative or trade name is not a change application item, but the certificate will no longer match, so ask the agency in advance how to update it. HACCP applications are also filed per worksite, so opening an additional plant while keeping the existing one is different from a relocation; first consider whether the new worksite needs its own certification application.</p>

<h2>Change application procedure and timeline</h2>
<p>The law does not set a deadline after the change. It requires change certification when you intend to make the change, so put the application ahead of the move or process change.</p>
<ol>
<li>Fix the details of the change and have the HACCP team review the plan (CCPs, critical limits and so on).</li>
<li>Submit the change application with the existing certificate and documents proving the change, such as a description of the CCP change, to the head of the agency. Electronic filing is accepted.</li>
<li>The agency checks the change by document review or on-site inspection. If documents are insufficient, it may request supplements within a set period, normally within 15 days.</li>
<li>If the on-site inspection finds gaps, you may be asked to supplement, or the change procedure may be closed.</li>
<li>If found suitable, the agency reissues the certificate with the change and notifies the Ministry of Food and Drug Safety and the regional office.</li>
</ol>
<p>The processing period on the application form is 15 days. Supplement requests can extend this, so apply well before the planned start at the new site.</p>

<h2>If you do not apply, and validity</h2>
<p>Changing the location or a CCP without a change application leads to a corrective order under the certification cancellation criteria. Failing to comply after 2 or more corrective orders makes the certification subject to cancellation.</p>
<p>Change certification does not restart a new 3-year term. Its validity is the remaining period of the original certification. To continue, file for extension at least 60 days before expiry; the certifying body sends notice at least 90 days before expiry, and extensions are granted for up to 3 years. For extension and periodic evaluation, see <a href="/en/blog/haccp-post-certification-management-guide">our post-certification management guide</a>.</p>

<div class="faq-section"><h2>FAQ</h2>
<div class="faq-item"><p class="faq-q">Q. Do I need full recertification to add a new product?</p><p class="faq-a">A. If it is a similar type made through the same process as an already certified food, it can be added on document review alone without a separate on-site evaluation. The same applies to certifying a new food at an already certified worksite.</p></div>
<div class="faq-item"><p class="faq-q">Q. The plant has not moved, but the address changed due to administrative redistricting. Is this a change application item?</p><p class="faq-a">A. The location field on the change application form excludes changes of the administrative lot number only. Distinguish this from an actual move of the worksite, and if unclear, check with the agency before applying.</p></div>
<div class="faq-item"><p class="faq-q">Q. What happens when the operator of a group meal facility changes?</p><p class="faq-a">A. If a certified group meal facility changes operator, for example when an outsourcing contract ends, and HACCP is no longer applied, the certification is cancelled and the certificate must be returned immediately.</p></div>
<div class="faq-item"><p class="faq-q">Q. What do I do with the certificate if I close the business?</p><p class="faq-a">A. A business that closes must return the certificate to the head of the agency without delay.</p></div>
</div>

<div class="cta-block"><h3>Planning a relocation or process change?</h3><p>We review your HACCP change application and business registration changes together. Yuseon Administrative Agent Office handles <a href="/en/services/haccp">HACCP certification</a>. Phone 02-363-2251, weekdays 09:30~17:30 KST.</p><a href="/en/contact?utm_source=blog&utm_medium=cta&utm_campaign=haccp-certification-change-application">Request a consultation</a></div>
<p class="author-block">Yuseon Administrative Agent Office (Chief Administrative Agent Jeong Yuseon)</p>`,
  },

  zh: {
    title: 'HACCP认证变更 — 营业场所迁移与关键控制点变更申请',
    category: '食品',
    metaTitle: 'HACCP认证变更 — 营业场所迁移与关键控制点变更申请流程',
    metaDescription: '在韩国取得HACCP认证后，迁移营业场所或变更关键控制点（CCP）前须先取得变更认证。本文整理变更申请对象、材料、处理期限、追加品目及有效期。',
    excerpt: '已取得HACCP适用业所认证的企业，在迁移工厂或变更关键控制点之前，必须先取得变更认证。本文说明哪些变更属于申请对象、办理流程、追加品目，以及未申请的后果。',
    content: `<div class="toc"><p>目录</p><ol><li>需要变更认证的变更</li><li>变更申请流程与处理期限</li><li>未申请的后果与有效期</li><li>常见问题</li></ol></div>
<p><strong>已取得HACCP（食品安全管理认证标准）适用业所认证的经营者，若要变更营业场所所在地或关键控制点（CCP），必须在变更之前提出变更申请并取得变更认证。</strong>HACCP属于"认证"，不是营业登记，因此应向韩国食品安全管理认证院（한국식품안전관리인증원）申请，而不是向办理营业登记的地方机关。首次认证请参阅<a href="/zh/blog/haccp-certification-guide">HACCP认证取得方法与流程</a>，本文只讨论认证后的变更。</p>

<h2>需要变更认证的变更</h2>
<p>食品经营者的变更申请对象为营业场所所在地和关键控制点两项；畜产品作业场另加畜产品类型，农场另加家畜种类。</p>
<table><thead><tr><th>变更内容</th><th>HACCP方面</th><th>同时确认</th></tr></thead><tbody>
<tr><td>营业场所迁移</td><td>须变更申请（仅行政区划地号变更在申请书中除外）</td><td>食品制造加工业须办理营业所所在地变更登记</td></tr>
<tr><td>变更关键控制点</td><td>须变更申请</td><td>重新审查HACCP管理计划</td></tr>
<tr><td>追加同一工序的类似类型品目</td><td>申请追加认证对象，可仅凭书面审查追加</td><td>增设设施制造新食品群时须办理营业变更登记</td></tr>
<tr><td>作业场扩建、更换设备</td><td>因此变更关键控制点时须变更申请</td><td>研判工序变更是否需重新评估计划</td></tr>
<tr><td>代表人、商号变更或营业转让</td><td>不在变更申请对象之列</td><td>受让人须在承继后1个月内申报</td></tr>
</tbody></table>
<p>HACCP变更认证与营业登记变更是两套独立程序，迁厂时可能两者都要办理，建议同时安排<a href="/zh/services/food-manufacturing">食品制造加工业登记</a>方面的日程。代表人或商号变更虽不属于变更申请对象，但会与证书记载不一致，请事先向认证院确认处理方式。此外，HACCP认证须按作业场、业所分别申请，保留原工厂另开新厂与迁址性质不同，应先研判新作业场是否需要另行申请认证。</p>

<h2>变更申请流程与处理期限</h2>
<p>法令并未规定"变更后几日内"的期限，而是要求在"拟变更时"取得变更认证，因此应把申请排在迁移或工序变更之前。</p>
<ol>
<li>确定变更内容，由HACCP小组重新审查管理计划（关键控制点、关键限值等）。</li>
<li>在认证事项变更申请书上附原认证书及关键控制点变更说明等证明材料，提交给认证院院长，也可电子提交。</li>
<li>认证院通过书面审查或现场调查确认变更事项；材料不足时，除特殊情况外可限期15日内要求补正。</li>
<li>现场调查需要补正时，可能被要求补正，或变更程序被终结处理。</li>
<li>认定合适后，在认证书上记载相关事项并重新发放，并通报食品医药品安全处长及管辖地方厅长。</li>
</ol>
<p>变更申请书样式上的处理期限为15日。出现补正时期限可能延长，建议在新址投产前预留充足时间申请。</p>

<h2>未申请的后果与有效期</h2>
<p>未经变更申请即变更所在地或关键控制点，将依认证取消等标准受到纠正命令；受到2次以上纠正命令仍不履行的，将成为取消认证的对象。</p>
<p>取得变更认证并不会重新起算3年。变更认证的有效期为原认证有效期的剩余期间。如需延续，须在到期60日前提出延长申请，认证机构会在到期90日前通知，延长期限在3年范围内。延长审查与定期评估请参阅<a href="/zh/blog/haccp-post-certification-management-guide">HACCP认证后管理指南</a>。</p>

<div class="faq-section"><h2>常见问题</h2>
<div class="faq-item"><p class="faq-q">Q. 追加新产品需要重新认证吗？</p><p class="faq-a">A. 若与已认证食品经过同一工序且属类似类型，可不另行现场评估，仅凭书面审查追加为认证食品。在已认证作业场认证新食品时也相同。</p></div>
<div class="faq-item"><p class="faq-q">Q. 工厂没有搬迁，但因行政区划调整地址变了，需要变更申请吗？</p><p class="faq-a">A. 变更申请书样式中的营业场所所在地一栏，已将仅属行政区划地号的变更除外。请与实际迁移作业场的情形区分判断，不确定时最好在申请前向认证院确认。</p></div>
<div class="faq-item"><p class="faq-q">Q. 集体供餐场所的运营者变更时，认证如何处理？</p><p class="faq-a">A. 已认证的集体供餐场所因委托合同到期等原因更换运营者而不再适用HACCP时，认证将被取消，申报人须立即返还认证书。</p></div>
<div class="faq-item"><p class="faq-q">Q. 停业后认证书怎么办？</p><p class="faq-a">A. 停业的经营者须及时将认证书返还给认证院院长。</p></div>
</div>

<div class="cta-block"><h3>计划迁厂或变更工序？</h3><p>我们可一并检查HACCP变更申请与营业登记变更。유선행정사사무소（代表行政士 정유선）办理<a href="/zh/services/haccp">HACCP认证</a>业务，电话 02-363-2251，工作日 09:30~17:30 KST。</p><a href="/zh/contact?utm_source=blog&utm_medium=cta&utm_campaign=haccp-certification-change-application">申请咨询</a></div>
<p class="author-block">유선행정사사무소（代表行政士 정유선）</p>`,
  },

  ja: {
    title: 'HACCP認証の変更 — 営業所の移転・重要管理点の変更申請の手続き',
    category: '食品',
    metaTitle: 'HACCP認証の変更 — 営業所移転・重要管理点(CCP)変更申請の流れ',
    metaDescription: '韓国でHACCP認証を受けた後、営業所の移転や重要管理点（CCP）の変更をするには事前に変更認証が必要です。対象、書類、処理期間、品目追加、有効期間を解説します。',
    excerpt: 'HACCP適用業所として認証を受けた事業者が工場を移転したり重要管理点を変えたりするには、事前に変更認証を受ける必要があります。対象となる変更、手続き、品目追加、申請しなかった場合の処分をまとめました。',
    content: `<div class="toc"><p>目次</p><ol><li>変更認証が必要な変更</li><li>変更申請の手続きと処理期間</li><li>申請しなかった場合と有効期間</li><li>よくある質問</li></ol></div>
<p><strong>HACCP（食品安全管理認証基準）適用業所として認証を受けた営業者が営業所の所在地や重要管理点（CCP）を変えるには、変更する前に変更申請を行い、変更認証を受けなければなりません。</strong>HACCPは営業登録ではなく「認証」なので、営業登録を扱う自治体ではなく、韓国食品安全管理認証院（한국식품안전관리인증원）に申請します。最初の認証手続きは<a href="/ja/blog/haccp-certification-guide">HACCP認証の取得方法と手続き</a>をご覧ください。本記事は認証後の変更だけを扱います。</p>

<h2>変更認証が必要な変更</h2>
<p>食品営業者の変更申請の対象は、営業所の所在地と重要管理点の2つです。畜産物の作業場は畜産物の類型、農場は家畜の種類が加わります。</p>
<table><thead><tr><th>変更内容</th><th>HACCP側の手続き</th><th>あわせて確認する手続き</th></tr></thead><tbody>
<tr><td>営業所の移転</td><td>変更申請の対象（行政区域上の地番だけが変わる場合は様式上除外）</td><td>食品製造・加工業は営業所所在地の変更登録</td></tr>
<tr><td>重要管理点の変更</td><td>変更申請の対象</td><td>HACCP管理計画の再検討</td></tr>
<tr><td>同じ工程で作る類似類型の品目追加</td><td>認証対象の追加申請。書類審査のみで追加可能</td><td>設備を加えて新しい食品群を製造する場合は営業の変更登録</td></tr>
<tr><td>作業場の増築・設備の入れ替え</td><td>その結果、重要管理点が変われば変更申請</td><td>工程変更に伴う計画の再評価を検討</td></tr>
<tr><td>代表者・商号の変更、営業譲受</td><td>変更申請の対象リストにない</td><td>営業譲受などは地位承継後1か月以内に申告</td></tr>
</tbody></table>
<p>HACCPの変更認証と営業登録の変更は別の手続きです。工場移転では両方が必要になり得るため、<a href="/ja/services/food-manufacturing">食品製造加工業の登録</a>側の日程も同時に組むことをおすすめします。代表者・商号の変更は変更申請の対象ではありませんが、認証書の記載と食い違うため、整理の方法を認証院に事前に確認してください。また、HACCP認証の申請は作業場・業所ごとに行うため、既存工場を残したまま新工場を設けるのは移転とは性格が異なり、新しい作業場について別途の認証申請が必要か先に検討する必要があります。</p>

<h2>変更申請の手続きと処理期間</h2>
<p>法令は「変更後何日以内」という期限ではなく、「変更しようとする場合」に変更認証を受けるよう定めています。移転工事や工程変更の日程より前に申請を置く必要があります。</p>
<ol>
<li>変更内容を確定し、HACCPチームが管理計画（重要管理点・限界基準など）を再検討します。</li>
<li>認証事項変更申請書に既存の認証書と重要管理点の変更内容説明書など変更を証明する書類を添えて、認証院長に提出します。電子文書でも提出できます。</li>
<li>認証院が書類審査または現場調査で変更事項を確認します。書類が不十分な場合、特別な場合を除き15日以内の期間を定めて補完を求めることがあります。</li>
<li>現場調査で補完が必要な場合は、補完を求められるか、変更手続きが終結処理されることがあります。</li>
<li>適合と認められると認証書に該当事項を記載して再発行し、食品医薬品安全処長と管轄の地方庁長に通報します。</li>
</ol>
<p>変更申請書様式上の処理期間は15日です。補完が生じると延びることがあるため、新しい所在地での稼働日より余裕をもって申請するのが安全です。</p>

<h2>申請しなかった場合と有効期間</h2>
<p>変更申請をせずに所在地や重要管理点を変えると、認証取消し等の基準により是正命令の対象となり、2回以上の是正命令を受けても履行しない場合は認証取消しの対象になります。</p>
<p>変更認証を受けても、有効期間が改めて3年になるわけではありません。変更認証の有効期間は当初の認証有効期間の残りの期間です。継続するには満了60日前までに延長申請が必要で、認証機関は満了90日前までに通知します。延長は3年の範囲で行われます。延長審査と定期評価は<a href="/ja/blog/haccp-post-certification-management-guide">HACCP認証後の管理ガイド</a>をご覧ください。</p>

<div class="faq-section"><h2>よくある質問</h2>
<div class="faq-item"><p class="faq-q">Q. 新製品を追加するには最初から認証を受け直す必要がありますか。</p><p class="faq-a">A. 既に認証を受けた食品と同じ工程を経る類似の類型であれば、別途の現場評価なしに書類審査だけで認証食品に追加できます。認証済みの作業場で新しい食品の認証を受ける場合も同様です。</p></div>
<div class="faq-item"><p class="faq-q">Q. 工場はそのままで、行政区域の再編により住所が変わりました。変更申請の対象ですか。</p><p class="faq-a">A. 変更申請書様式の営業所所在地欄は、行政区域上の地番の変更を除外しています。作業場を実際に移した場合と区別して判断し、迷う場合は申請前に認証院に確認するのが安全です。</p></div>
<div class="faq-item"><p class="faq-q">Q. 集団給食所の運営者が変わると認証はどうなりますか。</p><p class="faq-a">A. 認証を受けた集団給食所が委託契約の満了などで運営者が変わり、HACCPを適用しなくなった場合は認証が取り消され、申告者は認証書を直ちに返納しなければなりません。</p></div>
<div class="faq-item"><p class="faq-q">Q. 廃業したら認証書はどうすればよいですか。</p><p class="faq-a">A. 廃業した営業者は、認証書を認証院長に遅滞なく返納しなければなりません。</p></div>
</div>

<div class="cta-block"><h3>工場移転や工程変更をご予定ですか</h3><p>HACCPの変更申請と営業登録の変更をまとめて確認します。ユソン行政士事務所は<a href="/ja/services/haccp">HACCP認証</a>業務を取り扱っています。電話 02-363-2251、平日 09:30~17:30 KST。</p><a href="/ja/contact?utm_source=blog&utm_medium=cta&utm_campaign=haccp-certification-change-application">ご相談はこちら</a></div>
<p class="author-block">ユソン行政士事務所（代表行政士 チョン・ユソン）</p>`,
  },
}
