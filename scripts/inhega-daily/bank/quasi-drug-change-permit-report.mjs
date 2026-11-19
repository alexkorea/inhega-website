// 원고 은행 — INHE-BANK-1119(2026-11-19, 맥4 하위 작성 담당 D, kind=seo3958, angle=change-report)
// 주제(풀): quasi-drug(의약외품허가) / 세부주제: change-report(변경신고·변경등록) — 의약외품 제조업·수입업 변경신고와 품목 변경허가·변경신고 구분
// 검색어(안): "의약외품 변경허가"(SPEC 배정표 대표 검색어)
//
// 겹침 검사(lib/blog-posts-data.ts·blog-i18n.ts·bank/quasi-drug-vs-cosmetics-classification.mjs):
//   quasi-drug-manufacturing-permit(제조업 신고·품목허가 첫 절차), quasi-drug-import-permit(수입 절차, '유지와 갱신'에 변경허가 한 줄),
//   quasi-drug-fix(무허가 처벌·처분), quasi-drug-select(대행 선택), quasi-drug-vs-cosmetics-classification(정의·구분)
//   → 등록 후 "무엇이 바뀌면 변경신고인지 변경허가인지, 어디에 무엇을 내는지"를 다룬 글 없음. 처분은 quasi-drug-fix 로 링크만.
//
// 법령 대조(law.go.kr DRF OC=visionlaw, 2026-11-19 조회, 사본 ~/work/inhebank-1119/law/):
//   약사법 MST 286219(2026. 11. 12. 시행) — 제31조 제4항(의약외품 제조업 '신고'·품목허가 또는 품목신고)·제9항(변경하려는 때 변경허가·변경신고),
//     제36조 제2항·제3항(제조관리자·신고), 제42조 제1항(수입업 '신고'·품목 허가 또는 신고, 변경 시에도 같음)·제7항·제8항(해외제조소 등록·변경등록·변경신고),
//     제76조 제1항 제2호의5·제5호의2·제5호의4(변경허가·변경신고·변경등록 미이행 처분 사유), 제89조 제1항~제3항(지위 승계, 1개월 이내 신고)
//   의약품 등의 안전에 관한 규칙 MST 291859(2026. 11. 12. 시행) — 제2조 제1항(의약외품 제조업 신고서·지방청장), 제8조 제1항 제1호·제2호의2·제3호
//     (변경신고서·변경허가 신청서, 허가증·신고증·변경사유서·서류 첨부, 제출처: 제조업·수입업·품목신고 변경과 안전성·유효성 검토 대상이 아닌
//     의약외품 품목허가 변경은 지방청장, 그 밖은 식약처장, 지위승계 대상 변경은 제외)·제2항(대표자 변경 시 진단서)·제4항(고시하는 경미한 사항은
//     변경내용 문서 제출로 갈음)·제5항(제조소·영업소 명칭, 영업소 소재지 변경 시 각 품목 변경 간주), 제42조 제5항(제조관리자 신고서·지방청장),
//     제60조의2 제1항·제3항(해외제조소 변경등록 대상: 명칭·소재지, 수입품목 제품명 등), 제103조 제1항(지위 승계 신고서·서류)
//     별지 제2호서식(의약외품 제조업 신고(변경신고)서 처리기간 15일), 별지 제7호의2서식(수입업 신고(변경신고)서 처리기간 25일)
// 인허가 구분: 의약외품 제조업·수입업 = '신고'(허가 아님) → 업체 사항 변경은 '변경신고'. 품목 = 처음 '품목허가'면 '변경허가', '품목신고'면 '변경신고'.
//   영업 양도·합병·상속 = 변경이 아니라 '지위 승계 신고'. 해외제조소 = '등록'·'변경등록'.
// 확신 없어 뺀 것: 품목 변경허가·변경신고 처리기간(서식상 자료 종류별로 10일~90일로 갈려 화면에 수치 안 씀),
//   경미한 변경사항의 구체 목록(고시 미대조), 제조소 소재지 이전 시 제조·품질관리기준 적합판정 관련 세부(제형별 적용 — 미기재),
//   품목허가증 기재 항목별 변경 예시, 처분 기준·금액, 수입업 변경신고서 서식 수신인 표기(식약처장)와 규칙 제출처(지방청장) 차이는 규칙 본문을 따름.

const SLUG = 'quasi-drug-change-permit-report'

const entry = {
  topic: 'quasi-drug',
  angle: 'change-report',
  slug: SLUG,
  kind: 'seo3958',
  keyword: '의약외품 변경허가',
  source: { type: 'SPEC', query: '의약외품 변경허가' },
  pexelsId: 8657378,
  coverImage: '',
  relatedServices: [
    { title: '화장품 제조업·책임판매업 등록·의약외품', href: '/services/cosmetics' },
  ],

  ko: {
    title: '의약외품 변경허가 — 제조업·수입업 변경신고와 품목 변경허가·변경신고 구분',
    category: '의약외품/화장품',
    metaTitle: '의약외품 변경허가 — 변경신고와 품목 변경허가 구분과 제출 서류',
    metaDescription: '의약외품 제조업·수입업은 신고 업종이라 대표자·소재지가 바뀌면 변경신고를 하고, 품목은 처음 허가였는지 신고였는지에 따라 변경허가와 변경신고로 갈립니다. 제출처·서류·기간을 정리했습니다.',
    excerpt: '의약외품 제조업과 수입업은 모두 신고 업종입니다. 업체 사항이 바뀌면 변경신고, 품목허가를 받은 품목은 변경허가, 품목신고한 품목은 변경신고를 바꾸기 전에 냅니다. 영업 양도는 지위 승계 신고로 따로 처리합니다.',
    content: `<div class="toc"><p>목차</p><ol><li>무엇이 바뀌면 어떤 절차인가</li><li>제출 서류와 진행 순서</li><li>유선행정사사무소가 돕는 범위</li><li>자주 묻는 질문 (FAQ)</li></ol></div>
<p><strong>의약외품 제조업과 수입업은 허가가 아니라 신고 업종이므로, 대표자나 제조소·영업소의 명칭·소재지 같은 업체 사항이 바뀌면 변경신고를 합니다. 품목은 처음에 품목허가를 받았으면 변경허가를, 품목신고를 했으면 변경신고를 하며, 어느 쪽이든 법은 "변경하려는 때" 내도록 정하고 있어 바꾸기 전에 준비해야 합니다.</strong><!-- 근거: 약사법 제31조 제4항·제9항, 제42조 제1항 --> 영업을 넘기거나 합병·상속이 생긴 경우는 변경이 아니라 지위 승계 신고 대상입니다.</p>
<p>처음 신고와 품목허가 절차는 <a href="/blog/quasi-drug-manufacturing-permit">의약외품 제조업 신고와 품목허가</a>, 수입 절차는 <a href="/blog/quasi-drug-import-permit">의약외품 수입업 신고와 수입 품목허가</a>, 변경을 하지 않았을 때의 처분은 <a href="/blog/quasi-drug-fix">의약외품 처벌·행정처분 정리</a>에서 다룹니다.</p>

<h2>무엇이 바뀌면 어떤 절차인가</h2>
<table><thead><tr><th>바뀌는 것</th><th>절차</th><th>제출처</th></tr></thead><tbody>
<tr><td>제조업 신고사항(대표자, 제조소 명칭·소재지, 제조관리자 등)</td><td>의약외품 제조업 변경신고, 서식상 처리기간 15일<!-- 근거: 의약품 등의 안전에 관한 규칙 제8조 제1항 제1호, 별지 제2호서식 --></td><td>지방식품의약품안전청장</td></tr>
<tr><td>수입업 신고사항(대표자, 영업소 명칭·소재지, 수입관리자 등)</td><td>의약외품 수입업 변경신고, 서식상 처리기간 25일<!-- 근거: 같은 규칙 제8조 제1항 제2호의2, 별지 제7호의2서식 --></td><td>지방식품의약품안전청장</td></tr>
<tr><td>품목허가를 받은 품목</td><td>품목 허가사항 변경허가</td><td>안전성·유효성 검토 대상이 아니면 지방식품의약품안전청장, 그 밖에는 식품의약품안전처장</td></tr>
<tr><td>품목신고를 한 품목</td><td>품목신고 변경신고</td><td>지방식품의약품안전청장</td></tr>
<tr><td>수입품의 해외제조소 명칭·소재지, 등록한 수입품목 제품명 등</td><td>해외제조소 변경등록(그 밖의 등록사항은 바꾼 뒤 변경신고)<!-- 근거: 약사법 제42조 제7항·제8항, 같은 규칙 제60조의2 제3항 --></td><td>식품의약품안전처장</td></tr>
<tr><td>영업 양도·합병·상속</td><td>지위 승계 신고, 승계 후 1개월 이내<!-- 근거: 약사법 제89조 제1항~제3항, 같은 규칙 제8조 제1항 괄호, 제103조 제1항 --></td><td>식품의약품안전처장 또는 지방식품의약품안전청장</td></tr>
</tbody></table>
<p>업체 사항과 품목 사항은 따로 움직이지만 겹치는 경우가 있습니다. 제조소나 영업소의 명칭, 영업소의 소재지를 바꾸면 그 업체가 허가받거나 신고한 각 품목도 같은 내용으로 변경허가를 신청하거나 변경신고를 한 것으로 봅니다. 품질에 영향이 없는 색상 변경처럼 식품의약품안전처장이 고시한 경미한 사항은 변경 내용을 적은 문서를 내면 변경허가·변경신고를 한 것으로 봅니다.<!-- 근거: 같은 규칙 제8조 제4항·제5항 --></p>

<h2>제출 서류와 진행 순서</h2>
<p>변경신고서나 변경허가 신청서에는 허가증 또는 신고증(전자문서로 받은 경우 제외), 변경 사유서, 변경 내용을 뒷받침하는 서류를 붙입니다. 법인 등기사항증명서는 담당 공무원이 행정정보로 확인합니다.<!-- 근거: 같은 규칙 제8조 제1항·제6항 --></p>
<ol><li>바뀌는 사항이 업체 사항인지, 품목 사항인지, 지위 승계인지 먼저 나눕니다.</li><li>법인 대표자를 바꾸면 새 대표자가 결격사유에 해당하지 않음을 증명하는 의사의 진단서를 준비합니다.</li><li>제조관리자를 새로 두면 자격 서류를 붙여 제조관리자 신고서를 지방식품의약품안전청장에게 냅니다.</li><li>품목 변경이면 처음 허가·신고 때 낸 자료 가운데 바뀌는 부분을 다시 작성합니다.</li><li>변경 전에 신청서를 내고, 수리·허가 뒤 바뀐 내용으로 제조·수입합니다.</li></ol><!-- 근거: 같은 규칙 제8조 제2항, 제42조 제5항 -->
<p>변경허가를 받지 않거나 변경신고를 하지 않은 채 바꾼 사항으로 영업하면 행정처분 사유가 됩니다.<!-- 근거: 약사법 제76조 제1항 제2호의5·제5호의2·제5호의4 --> 처리기간 안에 보완 요구가 오면 기간이 늘어나므로 서류를 처음부터 맞추는 것이 중요합니다.</p>

<h2>유선행정사사무소가 돕는 범위</h2>
<p>유선행정사사무소는 바뀌는 사항이 변경신고·변경허가·지위 승계 가운데 어디에 해당하는지 가려 드리고, 신고서·신청서와 변경 사유서 작성, 해외 제조원 정보가 바뀐 수입품의 해외제조소 변경등록, 보완 대응까지 함께합니다. 의약외품과 화장품을 함께 다루는 업체라면 <a href="/services/cosmetics">화장품·의약외품 인허가 안내</a>에서 진행 범위를 확인하실 수 있습니다.</p>

<div class="faq-section"><h2>자주 묻는 질문 (FAQ)</h2>
<div class="faq-item"><p class="faq-q">Q. 의약외품 제조업도 변경허가를 받나요?</p><p class="faq-a">A. 아닙니다. 의약외품 제조업은 신고 업종이라 업체 사항이 바뀌면 변경신고를 합니다. 변경허가는 품목허가를 받은 품목의 허가사항을 바꿀 때의 절차입니다.</p></div>
<div class="faq-item"><p class="faq-q">Q. 회사 이름만 바뀌어도 품목마다 따로 신청하나요?</p><p class="faq-a">A. 제조소·영업소의 명칭을 바꾸는 변경신고를 하면 각 품목도 같은 내용으로 변경한 것으로 봅니다. 다만 다른 품목 사항이 함께 바뀌면 그 부분은 따로 신청합니다.</p></div>
<div class="faq-item"><p class="faq-q">Q. 해외 제조원이 공장을 옮기면 수입자가 할 일이 있나요?</p><p class="faq-a">A. 해외제조소의 명칭이나 소재지는 변경등록 사항이라 수입자가 식품의약품안전처장에게 변경등록을 신청합니다. 제조원과 계약할 때 변경 사실을 미리 알려 주도록 정해 두면 안전합니다.</p></div>
<div class="faq-item"><p class="faq-q">Q. 영업을 통째로 인수하면 변경신고인가요?</p><p class="faq-a">A. 양도·합병·상속은 지위 승계 신고 대상이며, 승계한 날부터 1개월 이내에 양도·양수 증명 서류 등을 붙여 신고합니다.<!-- 근거: 약사법 제89조 제3항, 같은 규칙 제103조 제1항 --></p></div>
</div>

<div class="cta-block"><h3>바꾸기 전에 절차부터 확인하세요</h3><p>바뀌는 사항과 신고증·허가증 내용을 알려 주시면 유선행정사사무소가 필요한 절차와 제출처, 서류를 정리해 드립니다. 전화 02-325-8222, 평일 09:30~17:30 KST.</p><a href="/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">상담 신청하기</a></div>
<p class="author-block">유선행정사사무소 (대표 행정사 정유선)<!-- 근거: 약사법 제31조·제36조·제42조·제76조·제89조, 의약품 등의 안전에 관한 규칙 제2조·제8조·제42조·제60조의2·제103조 --></p>`,
  },

  en: {
    title: 'Quasi-drug Change Approval in Korea — Change Reports vs Product Change Approvals',
    category: 'Quasi-drugs & Cosmetics',
    metaTitle: 'Korean Quasi-drug Changes: Change Report or Change Approval',
    metaDescription: 'Korean quasi-drug makers and importers file change reports for business details; products need change approval or a change report, per the original filing.',
    excerpt: 'Quasi-drug manufacturing and import businesses in Korea are reported, not licensed. Business changes need a change report, approved products need a change approval and reported products need a change report, filed before the change. A business transfer is a separate succession report.',
    content: `<div class="toc"><p>Contents</p><ol><li>What changes and which procedure</li><li>Documents and steps</li><li>How we help</li><li>FAQ</li></ol></div>
<p><strong>Quasi-drug manufacturing and import businesses in Korea are established by report, not by licence, so changes to business details such as the representative or the name and address of the plant or business office require a change report. For products, an item that received product approval needs a change approval, and an item that was reported needs a change report. The law requires filing when you intend to make the change, so prepare before changing.</strong> A transfer, merger or inheritance of the business is a succession report, not a change.</p>
<p>For the classification of quasi-drugs, see <a href="/en/blog/quasi-drug-vs-cosmetics-classification">quasi-drugs vs cosmetics</a>.</p>

<h2>What changes and which procedure</h2>
<table><thead><tr><th>Change</th><th>Procedure</th><th>Filed with</th></tr></thead><tbody>
<tr><td>Manufacturing business details (representative, plant name and address, manufacturing manager)</td><td>Change report; the form lists 15 days for processing</td><td>Regional office of the Ministry of Food and Drug Safety</td></tr>
<tr><td>Import business details (representative, office name and address, import manager)</td><td>Change report; the form lists 25 days</td><td>Regional office</td></tr>
<tr><td>Products with product approval</td><td>Change approval</td><td>Regional office if no safety and efficacy review is needed, otherwise the Ministry</td></tr>
<tr><td>Reported products</td><td>Change report</td><td>Regional office</td></tr>
<tr><td>Name or address of the overseas manufacturing site of imports, registered product names</td><td>Change registration (other registered details: report after the change)</td><td>Ministry</td></tr>
<tr><td>Transfer, merger or inheritance</td><td>Succession report within 1 month</td><td>Ministry or regional office</td></tr>
</tbody></table>
<p>When the plant or office name, or the business office address, changes, each product is treated as changed in the same way. Minor items designated by the Ministry, such as a colour change with no effect on quality, are handled by submitting a document describing the change.</p>

<h2>Documents and steps</h2>
<p>Attach the licence or report certificate (unless issued electronically), a statement of reasons and documents supporting the change. The corporate register is checked electronically.</p>
<ol><li>Decide whether the change concerns the business, a product or a succession.</li><li>For a new corporate representative, prepare a doctor's certificate showing no disqualification.</li><li>For a new manufacturing manager, file a manager report with proof of qualification.</li><li>For product changes, update the parts of the original approval or report data that change.</li><li>File before the change and operate on the new basis after acceptance or approval.</li></ol>
<p>Operating on changed details without the required approval or report is a ground for administrative action.</p>

<h2>How we help</h2>
<p>YouSun Administrative Agency identifies which procedure applies, prepares reports, applications and statements of reasons, handles overseas site change registrations for imports and responds to correction requests. See <a href="/en/services/cosmetics">our cosmetics and quasi-drug service</a>.</p>

<div class="faq-section"><h2>FAQ</h2>
<div class="faq-item"><p class="faq-q">Q. Does a quasi-drug manufacturer need a change approval?</p><p class="faq-a">A. No. The business is reported, so business changes need a change report. Change approval is for approved products.</p></div>
<div class="faq-item"><p class="faq-q">Q. If only the company name changes, must each product be filed?</p><p class="faq-a">A. A change report for the plant or office name also counts for each product, unless other product details change too.</p></div>
<div class="faq-item"><p class="faq-q">Q. What if the overseas manufacturer relocates?</p><p class="faq-a">A. The site's name and address are change registration items, so the importer applies to the Ministry. Ask the manufacturer to notify you in advance.</p></div>
<div class="faq-item"><p class="faq-q">Q. Is acquiring the whole business a change report?</p><p class="faq-a">A. No, it is a succession report, filed within 1 month with proof of the transfer.</p></div>
</div>

<div class="cta-block"><h3>Check the procedure before you change</h3><p>Send the planned change and your certificate details, and YouSun Administrative Agency will set out the procedure, the office and the documents. Call 02-325-8222, weekdays 09:30~17:30 KST.</p><a href="/en/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">Request a consultation</a></div>
<p class="author-block">YouSun Administrative Agency (Chief Administrative Agent Jung Yu-sun)</p>`,
  },

  zh: {
    title: '韩国医药外品变更许可 — 制造业·进口业变更申报与品目变更许可的区别',
    category: '医药外品/化妆品',
    metaTitle: '韩国医药外品变更 — 变更申报与品目变更许可的区别和材料',
    metaDescription: '韩国医药外品制造业和进口业属于申报业种，代表人或所在地变化时办理变更申报；品目则按当初是品目许可还是品目申报，分别办理变更许可或变更申报。本文说明受理机关、材料和期限。',
    excerpt: '韩国医药外品制造业和进口业均为申报业种。企业事项变化办理变更申报，取得品目许可的品目办理变更许可，品目申报的品目办理变更申报，且须在变更前提出。营业转让另行办理地位承继申报。',
    content: `<div class="toc"><p>目录</p><ol><li>变更事项与对应程序</li><li>提交材料与步骤</li><li>我们可以协助的范围</li><li>常见问题</li></ol></div>
<p><strong>韩国医药外品制造业和进口业不是许可业种而是申报业种，代表人或制造所·营业所的名称、所在地等企业事项变化时，须办理变更申报。品目方面，当初取得品目许可的办理变更许可，当初品目申报的办理变更申报；法律规定在"拟变更时"提出，因此须在变更前准备。</strong>营业转让、合并或继承不属于变更，而是地位承继申报的对象。</p>
<p>医药外品的界定见<a href="/zh/blog/quasi-drug-vs-cosmetics-classification">医药外品与化妆品的区别</a>。</p>

<h2>变更事项与对应程序</h2>
<table><thead><tr><th>变更事项</th><th>程序</th><th>受理机关</th></tr></thead><tbody>
<tr><td>制造业申报事项（代表人、制造所名称和所在地、制造管理人等）</td><td>制造业变更申报，表格所列处理期限15日</td><td>地方食品医药品安全厅</td></tr>
<tr><td>进口业申报事项（代表人、营业所名称和所在地、进口管理人等）</td><td>进口业变更申报，表格所列处理期限25日</td><td>地方食品医药品安全厅</td></tr>
<tr><td>取得品目许可的品目</td><td>品目许可事项变更许可</td><td>无须安全性·有效性审查的由地方厅受理，其他由食品医药品安全处</td></tr>
<tr><td>已品目申报的品目</td><td>品目申报变更申报</td><td>地方食品医药品安全厅</td></tr>
<tr><td>进口品海外制造所的名称·所在地、登记的进口品目名称等</td><td>海外制造所变更登记（其他登记事项变更后申报）</td><td>食品医药品安全处</td></tr>
<tr><td>营业转让、合并、继承</td><td>地位承继申报，承继后1个月内</td><td>食品医药品安全处或地方厅</td></tr>
</tbody></table>
<p>变更制造所或营业所名称、营业所所在地时，该企业各品目视为已就相同内容申请变更许可或办理变更申报。对质量无影响的颜色变更等由食品医药品安全处告示的轻微事项，提交记载变更内容的文件即视为已办理。</p>

<h2>提交材料与步骤</h2>
<p>变更申报书或变更许可申请书须附许可证或申报证（电子发放的除外）、变更理由书及证明变更内容的材料；法人登记事项证明由经办公务员通过行政信息确认。</p>
<ol><li>先区分变更属于企业事项、品目事项还是地位承继。</li><li>变更法人代表人的，准备证明新代表人不属于欠格事由的医师诊断书。</li><li>新设制造管理人的，附资格材料向地方厅提交制造管理人申报书。</li><li>品目变更的，重新编制当初许可或申报材料中发生变化的部分。</li><li>在变更前提交，受理或许可后按新内容制造或进口。</li></ol>
<p>未取得变更许可或未办理变更申报即按变更后的内容营业，属于行政处分事由。</p>

<h2>我们可以协助的范围</h2>
<p>YouSun Administrative Agency帮助判断变更属于哪种程序，制作申报书、申请书和变更理由书，办理进口品海外制造所变更登记，并应对补正要求。详见<a href="/zh/services/cosmetics">化妆品·医药外品服务</a>。</p>

<div class="faq-section"><h2>常见问题</h2>
<div class="faq-item"><p class="faq-q">Q. 医药外品制造业也要变更许可吗？</p><p class="faq-a">A. 不需要。制造业属于申报业种，企业事项变化办理变更申报；变更许可适用于取得品目许可的品目。</p></div>
<div class="faq-item"><p class="faq-q">Q. 只改公司名称，每个品目都要单独申请吗？</p><p class="faq-a">A. 办理制造所或营业所名称变更申报后，各品目视为同样变更；其他品目事项同时变化的另行申请。</p></div>
<div class="faq-item"><p class="faq-q">Q. 海外制造商搬迁工厂，进口商要做什么？</p><p class="faq-a">A. 海外制造所名称和所在地属于变更登记事项，由进口商向食品医药品安全处申请。建议在合同中约定提前通知。</p></div>
<div class="faq-item"><p class="faq-q">Q. 整体收购营业是变更申报吗？</p><p class="faq-a">A. 不是，属于地位承继申报，须在承继之日起1个月内附转让证明材料申报。</p></div>
</div>

<div class="cta-block"><h3>变更前先确认程序</h3><p>告诉我们拟变更事项和申报证、许可证内容，YouSun Administrative Agency为你整理所需程序、受理机关和材料。电话 02-325-8222，工作日 09:30~17:30 KST。</p><a href="/zh/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">申请咨询</a></div>
<p class="author-block">YouSun Administrative Agency（代表行政士 Jung Yu-sun）</p>`,
  },

  ja: {
    title: '韓国の医薬外品の変更許可 — 製造業・輸入業の変更届出と品目変更許可の違い',
    category: '医薬外品・化粧品',
    metaTitle: '韓国の医薬外品の変更 — 変更届出と品目変更許可の区別と書類',
    metaDescription: '韓国の医薬外品の製造業・輸入業は届出業種のため、代表者や所在地が変われば変更届出をします。品目は当初が品目許可か品目届出かで変更許可と変更届出に分かれます。提出先・書類・期間を解説します。',
    excerpt: '韓国の医薬外品の製造業と輸入業はいずれも届出業種です。業者の事項が変われば変更届出、品目許可を受けた品目は変更許可、品目届出をした品目は変更届出を、変更する前に提出します。営業譲渡は地位承継の届出で別に扱います。',
    content: `<div class="toc"><p>目次</p><ol><li>何が変わるとどの手続か</li><li>提出書類と進め方</li><li>サポートの範囲</li><li>よくある質問</li></ol></div>
<p><strong>韓国の医薬外品の製造業と輸入業は許可ではなく届出の業種なので、代表者や製造所・営業所の名称・所在地といった業者の事項が変われば変更届出をします。品目は、当初品目許可を受けたなら変更許可、品目届出をしたなら変更届出で、法律は「変更しようとするとき」に出すと定めているため、変更する前に準備が必要です。</strong>営業の譲渡、合併、相続は変更ではなく地位承継の届出の対象です。</p>
<p>医薬外品の区分は<a href="/ja/blog/quasi-drug-vs-cosmetics-classification">医薬外品と化粧品の違い</a>をご覧ください。</p>

<h2>何が変わるとどの手続か</h2>
<table><thead><tr><th>変わるもの</th><th>手続</th><th>提出先</th></tr></thead><tbody>
<tr><td>製造業の届出事項（代表者、製造所の名称・所在地、製造管理者など）</td><td>製造業の変更届出、様式上の処理期間15日</td><td>地方食品医薬品安全庁</td></tr>
<tr><td>輸入業の届出事項（代表者、営業所の名称・所在地、輸入管理者など）</td><td>輸入業の変更届出、様式上の処理期間25日</td><td>地方食品医薬品安全庁</td></tr>
<tr><td>品目許可を受けた品目</td><td>品目の許可事項の変更許可</td><td>安全性・有効性の検討対象でなければ地方庁、それ以外は食品医薬品安全処</td></tr>
<tr><td>品目届出をした品目</td><td>品目届出の変更届出</td><td>地方食品医薬品安全庁</td></tr>
<tr><td>輸入品の海外製造所の名称・所在地、登録した輸入品目の製品名など</td><td>海外製造所の変更登録（その他の登録事項は変更後に変更届出）</td><td>食品医薬品安全処</td></tr>
<tr><td>営業譲渡・合併・相続</td><td>地位承継の届出、承継後1か月以内</td><td>食品医薬品安全処または地方庁</td></tr>
</tbody></table>
<p>製造所・営業所の名称や営業所の所在地を変えると、その業者の各品目も同じ内容で変更許可の申請または変更届出をしたものとみなされます。品質に影響のない色の変更など食品医薬品安全処が告示する軽微な事項は、変更内容を記した文書の提出で足ります。</p>

<h2>提出書類と進め方</h2>
<p>変更届出書や変更許可申請書には、許可証または届出証（電子発給の場合を除く）、変更理由書、変更内容を裏付ける書類を添えます。法人の登記事項証明は担当公務員が行政情報で確認します。</p>
<ol><li>変わる事項が業者の事項か、品目の事項か、地位承継かをまず分けます。</li><li>法人の代表者を変える場合、新代表者が欠格事由に当たらないことを示す医師の診断書を用意します。</li><li>製造管理者を新たに置く場合、資格書類を添えて製造管理者の届出書を地方庁に出します。</li><li>品目の変更なら、当初の許可・届出で出した資料のうち変わる部分を作り直します。</li><li>変更前に提出し、受理・許可の後に新しい内容で製造・輸入します。</li></ol>
<p>変更許可や変更届出をしないまま変更後の内容で営業すると、行政処分の事由になります。</p>

<h2>サポートの範囲</h2>
<p>YouSun Administrative Agencyは、変わる事項がどの手続に当たるかを整理し、届出書・申請書と変更理由書の作成、輸入品の海外製造所の変更登録、補正対応まで行います。詳しくは<a href="/ja/services/cosmetics">化粧品・医薬外品サービス</a>をご覧ください。</p>

<div class="faq-section"><h2>よくある質問</h2>
<div class="faq-item"><p class="faq-q">Q. 医薬外品の製造業も変更許可を受けますか。</p><p class="faq-a">A. いいえ。製造業は届出業種なので業者の事項が変われば変更届出です。変更許可は品目許可を受けた品目の手続です。</p></div>
<div class="faq-item"><p class="faq-q">Q. 会社名だけ変わっても品目ごとに申請しますか。</p><p class="faq-a">A. 製造所・営業所の名称の変更届出をすれば各品目も同様に変更したものとみなされます。他の品目事項も変わるならその部分は別に申請します。</p></div>
<div class="faq-item"><p class="faq-q">Q. 海外の製造元が工場を移転したら？</p><p class="faq-a">A. 海外製造所の名称・所在地は変更登録の事項で、輸入者が食品医薬品安全処に申請します。事前に知らせてもらうよう契約で決めておくと安心です。</p></div>
<div class="faq-item"><p class="faq-q">Q. 営業をまるごと引き継ぐと変更届出ですか。</p><p class="faq-a">A. いいえ、地位承継の届出です。承継した日から1か月以内に譲渡の証明書類などを添えて届け出ます。</p></div>
</div>

<div class="cta-block"><h3>変更の前に手続を確認しましょう</h3><p>変更予定の事項と届出証・許可証の内容をお知らせいただければ、YouSun Administrative Agencyが必要な手続、提出先、書類を整理します。電話 02-325-8222、平日 09:30~17:30 KST。</p><a href="/ja/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">相談を申し込む</a></div>
<p class="author-block">YouSun Administrative Agency（代表行政士 Jung Yu-sun）</p>`,
  },
}

// 틀리기 쉬운 인허가 구분 오기(4언어) — 의약외품 제조업·수입업은 '신고'(변경도 '변경신고'), 변경허가는 품목허가 품목만
entry.wrongTerms = [
  '의약외품 제조업 허가', '의약외품 수입업 허가', '제조업 변경허가', '수입업 변경허가',
  'quasi-drug manufacturing license', 'quasi-drug import license',
  '医药外品制造业许可', '医药外品进口业许可', '制造业变更许可',
  '医薬外品製造業許可', '医薬外品輸入業許可', '製造業の変更許可',
]

export default entry
