// 원고 은행 — inhega-daily (INHEGA-BLOG-RESTART 2026-10-24, kind seo3958)
// 주제: logistics(국제물류주선업등록) / 세부주제: succession(양도·양수·승계)
//
// 겹침 검사(ko-titles.txt·blog-i18n.ts):
//   international-logistics-registration-guide(신규 등록 절차) / international-logistics-fix(무등록 처벌·3년 신고·변경등록 과태료·처분)
//   international-logistics-select(대행 선택) / freight-forwarder-*(자본금·보증보험·등록절차·화물운송주선업 비교) / forwarder-startup-checklist
//   international-logistics-capital-funding-guide(자본금 마련) — 양도·양수·상속·합병 승계 신고를 주제로 한 글 없음.
//   fix 글은 승계 신고 미신고 과태료를 한 문장으로만 다룬다 → 이 글은 승계 절차·서류·결격 준용·유예에 집중, 처분은 링크로 넘김.
//
// 법령 대조(law.go.kr DRF, OC=visionlaw, 2026-10-24 조회):
//   물류정책기본법          MST 276993, 법률 제21065호, 2025. 10. 1. 시행
//     제43조 제1항(등록)·제2항(변경등록)·제3항(등록기준)·제4항(3년 신고), 제44조(결격사유 제1호~제7호),
//     제45조 제1항(승계)·제2항(승계자 시·도지사 신고)·제3항(결격사유 준용), 제47조 제1항 제2호·제4호 단서(3개월 유예),
//     제65조 제2항(위탁), 제73조 제1항 제1호의2·제2호(과태료 대상 — 금액은 화면 미기재)
//   물류정책기본법 시행령   MST 289715, 2026. 9. 15. 시행 — 제30조의2(보증보험 기준), 제51조 제3항 제2호의4(승계 신고 접수·검토 위탁 가능)
//   물류정책기본법 시행규칙 MST 285423, 2026. 4. 2. 시행 — 제5조 제2항 제3호·제4호·제4항, 제7조 제1항·제2항(60일),
//     제7조의2 제1항·제4항, 제8조 제1항(30일·서식 3종)·제2항(첨부서류)·제3항(행정정보 공동이용),
//     별지 제9호(양도·양수 신고서: 처리기간 2일, 양도인·양수인 서명)·제10호(상속신고서 2일)·제11호(법인합병신고서 2일)
// 인허가 구분: 국제물류주선업 = 시·도지사 '등록'(허가 아님), 승계 = '신고'(변경등록과 별개 절차).
// 확인 못 한 점: 합병·양수 후 상호가 바뀔 때 승계 신고로 등록대장이 함께 정리되는지, 변경등록을 별도로 내야 하는지는
//   법령에 명시가 없어 "관할 시·도에 함께 처리 가능한지 확인"으로만 적었다. 실제 위탁 접수기관(협회명)은 시행령이 '할 수 있다'
//   수준이라 기관명을 쓰지 않았다. 금액(자본금·보증보험·과태료)은 형식 규칙상 화면에 쓰지 않았다.
// 대조표: crosscheck/international-logistics-business-succession.md

const SLUG = 'international-logistics-business-succession'

export default {
  topic: 'logistics',
  angle: 'succession',
  slug: SLUG,
  kind: 'seo3958',
  keyword: '국제물류주선업 양도양수',
  wrongTerms: [
    '국제물류주선업 허가', '국제물류주선업허가', '국제물류주선업 인가', '승계 허가',
    'freight forwarding license', 'forwarder permit', 'forwarding business license',
    '国际货运代理业许可', '国际物流代理业许可', '货代许可证',
    '国際物流周旋業許可', '国際物流周旋業の許可',
  ],
  pexelsId: 7857567,
  coverImage: '',
  relatedServices: [
    { title: '국제물류주선업 등록', href: '/services/logistics' },
  ],

  ko: {
    title: '국제물류주선업 양도양수·합병·상속 — 지위 승계 신고 30일 기한과 결격사유',
    category: '물류/유통',
    metaTitle: '국제물류주선업 양도양수 신고 — 합병·상속 승계와 30일 기한',
    metaDescription: '국제물류주선업을 양도양수하거나 합병·상속으로 넘겨받을 때는 새 등록이 아니라 승계한 날부터 30일 이내 시·도지사 신고가 필요합니다. 신고서·첨부서류, 변경등록과의 차이, 결격사유와 3개월 유예를 정리했습니다.',
    excerpt: '등록된 국제물류주선업을 넘겨받는 방법은 양도·양수, 상속, 법인 합병 세 가지입니다. 어느 경우든 권리·의무가 승계되고 30일 안에 시·도지사에게 신고합니다. 경우별 서류, 변경등록과의 구분, 결격사유 준용과 3개월 유예를 설명합니다.',
    content: `<div class="toc"><p>목차</p><ol><li>사업 승계가 인정되는 세 가지 경우</li><li>승계 신고 기한·서류·처리 순서</li><li>결격사유 준용과 유예 기간</li><li>자주 묻는 질문 (FAQ)</li></ol></div>
<p><strong>국제물류주선업을 양도·양수하거나 법인이 합병하면 새로 등록하는 것이 아니라, 등록에 따른 권리·의무를 승계하고 승계한 날부터 30일 이내에 시·도지사에게 신고합니다.</strong><!-- 근거: 물류정책기본법 제45조 제1항·제2항, 같은 법 시행규칙 제8조 제1항 --> 대표자가 사망해 상속인이 사업을 잇는 경우도 같은 구조입니다. 승계는 등록이 아닌 신고 절차이지만, 승계한 사람에게도 등록 결격사유가 그대로 적용되므로 계약 전에 확인할 것이 있습니다.<!-- 근거: 물류정책기본법 제45조 제3항 --></p>
<p>처음 등록하는 절차는 <a href="/blog/international-logistics-registration-guide">국제물류주선업 등록 가이드</a>에서, 무등록·신고 누락에 따른 처분은 <a href="/blog/international-logistics-fix">국제물류주선업 처벌·과태료 정리</a>에서 다뤘습니다. 여기서는 이미 등록된 사업을 넘기거나 받는 경우만 설명합니다.</p>

<h2>사업 승계가 인정되는 세 가지 경우</h2>
<p>「물류정책기본법」은 국제물류주선업자가 사업을 양도한 때, 사망한 때, 법인이 합병한 때 양수인·상속인·합병 후 존속하거나 새로 설립되는 법인이 등록에 따른 권리·의무를 승계한다고 정합니다. 경우마다 내는 신고서와 첨부서류가 다릅니다.<!-- 근거: 물류정책기본법 제45조 제1항, 시행규칙 제8조 제1항·제2항 --></p>
<table><thead><tr><th>경우</th><th>승계하는 자</th><th>신고서</th><th>주요 첨부서류</th></tr></thead><tbody>
<tr><td>사업 양도·양수</td><td>양수인</td><td>양도·양수 신고서</td><td>양도·양수계약서 사본, 양수인이 외국인투자기업이면 외국인투자 증명서류</td></tr>
<tr><td>상속</td><td>상속인</td><td>상속신고서</td><td>상속인과 피상속인의 관계 증명서류, 사망 증명서류, 같은 순위 다른 상속인의 동의서</td></tr>
<tr><td>법인 합병</td><td>존속 법인 또는 신설 법인</td><td>법인합병신고서</td><td>합병계약서 사본, 합병당사자 법인의 최근 1년 이내 사업용고정자산 명세서<!-- 근거: 물류정책기본법 시행규칙 제8조 제2항 제3호 가목·나목 --></td></tr>
</tbody></table>
<p>양수인·상속인 또는 합병 후 법인의 임원이 외국인이면 결격사유에 해당하지 않음을 확인하는 본국 서류(아포스티유 또는 영사 확인)를 함께 냅니다. 법인 등기사항증명서 등은 시·도지사가 행정정보 공동이용으로 확인합니다.<!-- 근거: 시행규칙 제8조 제2항 제1호 나목·제2호 라목·제3호 다목, 제8조 제3항, 제5조 제2항 제3호·제4항 --></p>
<p>승계되는 것은 등록에 따른 권리와 의무 전부입니다. 자본금(개인은 자산평가액)과 보증보험 같은 등록기준도 승계 후 계속 갖춰야 하고, 기준에 못 미치면 등록취소나 사업정지 대상이 됩니다. 기준 내용은 <a href="/blog/freight-forwarder-capital-bond-requirements">국제물류주선업 자본금·보증보험 요건</a>에서 확인할 수 있습니다.<!-- 근거: 물류정책기본법 제43조 제3항, 제47조 제1항 제2호, 시행령 제30조의2 --></p>

<h2>승계 신고 기한·서류·처리 순서</h2>
<p>신고 기한은 권리·의무를 승계한 날부터 30일 이내이고, 신고서는 전자문서로도 낼 수 있습니다. 서식에 적힌 처리기간은 2일입니다.<!-- 근거: 시행규칙 제8조 제1항, 별지 제9호·제10호·제11호서식 처리기간 --> 양도·양수 신고서에는 양도인과 양수인이 함께 서명합니다.<!-- 근거: 시행규칙 별지 제9호서식 신고인란 --> 시·도지사는 승계 신고의 접수·검토를 물류 관련 협회 등에 맡길 수 있으므로, 실제 접수 창구는 주사무소 관할 시·도에 먼저 확인하는 것이 정확합니다.<!-- 근거: 물류정책기본법 제65조 제2항, 시행령 제51조 제3항 제2호의4 --></p>
<p>승계 신고와 변경등록은 서로 다른 절차입니다. 승계 뒤 상호, 대표자·임원, 주사무소 소재지를 바꾸거나 자본금이 줄면 변경사유가 생긴 날부터 60일 이내에 변경등록을 따로 신청합니다.<!-- 근거: 시행규칙 제7조 제1항·제2항 --></p>
<table><thead><tr><th>절차</th><th>사유</th><th>기한</th></tr></thead><tbody>
<tr><td>승계 신고</td><td>양도·양수, 상속, 법인 합병</td><td>승계한 날부터 30일 이내<!-- 근거: 시행규칙 제8조 제1항 --></td></tr>
<tr><td>변경등록</td><td>상호·임원·주사무소 변경, 자본금 감소</td><td>변경사유 발생일부터 60일 이내<!-- 근거: 시행규칙 제7조 제2항 --></td></tr>
<tr><td>등록기준 신고</td><td>등록 후 3년 경과<!-- 근거: 물류정책기본법 제43조 제4항 --></td><td>신고시점부터 60일 이내<!-- 근거: 시행규칙 제7조의2 제1항 --></td></tr>
</tbody></table>
<p>실무에서는 다음 순서로 진행하면 기한을 놓치지 않습니다.</p>
<ol>
<li>계약 전에 양수인(법인이면 대표자와 임원)이 결격사유에 해당하지 않는지 확인합니다.</li>
<li>양도·양수계약서나 합병계약서에 승계일을 분명히 적습니다. 신고 기한은 이 날부터 계산합니다.</li>
<li>승계일부터 30일 안에 신고서와 첨부서류를 시·도지사에게 냅니다.<!-- 근거: 시행규칙 제8조 제1항 --></li>
<li>상호·임원·소재지가 바뀌었다면 60일 안에 변경등록을 신청합니다.<!-- 근거: 시행규칙 제7조 제2항 --></li>
<li>등록증에 적힌 다음 등록기준 신고시점을 확인해 둡니다.<!-- 근거: 시행규칙 제7조의2 제4항 --></li>
</ol>
<p>승계 신고를 하지 않으면 과태료 대상이고, 변경등록 누락도 별도의 과태료 대상입니다.<!-- 근거: 물류정책기본법 제73조 제1항 제1호의2·제2호 --> 등록 단계부터 승계까지의 진행은 <a href="/services/logistics">국제물류주선업 등록 서비스</a>에서 안내합니다.</p>

<h2>결격사유 준용과 유예 기간</h2>
<p>승계받은 자에게는 신규 등록의 결격사유가 그대로 준용됩니다. 주요 사유는 다음과 같습니다.<!-- 근거: 물류정책기본법 제45조 제3항, 제44조 --></p>
<ul>
<li>피성년후견인 또는 피한정후견인<!-- 근거: 물류정책기본법 제44조 제1호 --></li>
<li>「물류정책기본법」·「화물자동차 운수사업법」·「항공사업법」·「항공안전법」·「공항시설법」·「해운법」 위반으로 금고 이상의 실형을 선고받고 집행이 끝나거나 면제된 날부터 2년이 지나지 않은 자<!-- 근거: 물류정책기본법 제44조 제2호 --></li>
<li>같은 법률 위반으로 금고 이상 형의 집행유예 기간 중인 자, 벌금형을 선고받고 2년이 지나지 않은 자<!-- 근거: 물류정책기본법 제44조 제3호·제4호 --></li>
<li>등록이 취소된 후 2년이 지나지 않은 자(피성년후견인 등의 사유로 취소된 경우 제외)<!-- 근거: 물류정책기본법 제44조 제5호 --></li>
<li>대표자가 위 사유에 해당하거나, 대표자가 아닌 임원 중 형벌·등록취소 사유에 해당하는 사람이 있는 법인<!-- 근거: 물류정책기본법 제44조 제6호·제7호 --></li>
</ul>
<p>승계인이 결격사유에 해당하면 시·도지사는 등록을 취소해야 합니다. 다만 두 가지 유예가 있습니다. 결격사유에 해당하는 상속인이 상속일부터 3개월 이내에 사업을 다른 사람에게 양도한 경우, 그리고 법인(합병 후 법인 포함)의 대표자·임원이 결격사유에 해당할 때 그 사유가 생긴 날(합병은 합병일)부터 3개월 이내에 해당 임원을 바꾼 경우입니다.<!-- 근거: 물류정책기본법 제47조 제1항 제4호 단서 --> 개인 양수인 본인이 결격사유에 해당하면 이런 유예 규정이 없으므로, 계약 전 확인이 가장 안전합니다.</p>

<div class="faq-section"><h2>자주 묻는 질문 (FAQ)</h2>
<div class="faq-item"><p class="faq-q">Q. 사업을 넘겨받으면 국제물류주선업 등록을 새로 해야 하나요?</p><p class="faq-a">A. 아닙니다. 양도·양수, 상속, 법인 합병은 기존 등록에 따른 권리·의무가 승계되고, 승계한 자가 30일 이내에 시·도지사에게 승계 신고를 합니다.<!-- 근거: 물류정책기본법 제45조, 시행규칙 제8조 제1항 --></p></div>
<div class="faq-item"><p class="faq-q">Q. 신고 기한은 계약일부터 계산하나요?</p><p class="faq-a">A. 기산점은 권리·의무를 승계한 날입니다. 계약서에 승계일을 명확히 정해 두어야 기한을 둘러싼 혼선이 없습니다.<!-- 근거: 시행규칙 제8조 제1항 --></p></div>
<div class="faq-item"><p class="faq-q">Q. 합병 후 상호가 바뀌면 승계 신고만으로 끝나나요?</p><p class="faq-a">A. 승계 신고와 별개로 상호·임원·주사무소 같은 등록사항을 바꾸는 것은 변경등록 대상입니다. 변경사유가 생긴 날부터 60일 이내에 신청하며, 승계 신고와 함께 처리할 수 있는지 관할 시·도에 확인하는 것이 좋습니다.<!-- 근거: 시행규칙 제7조 제1항·제2항 --></p></div>
<div class="faq-item"><p class="faq-q">Q. 상속인이 결격사유에 해당하면 사업을 잃게 되나요?</p><p class="faq-a">A. 상속일부터 3개월 이내에 사업을 다른 사람에게 양도하면 결격사유를 이유로 한 등록취소를 피할 수 있습니다.<!-- 근거: 물류정책기본법 제47조 제1항 제4호 단서 --></p></div>
</div>

<div class="cta-block"><h3>국제물류주선업 양도·양수 신고 상담</h3><p>승계일 설정, 결격사유 확인, 변경등록까지 한 번에 점검하려면 유선행정사사무소에 문의해 주십시오. 전화 02-363-2251, 평일 09:30~17:30 KST.</p><a href="/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">상담 신청하기</a></div>
<p class="author-block">유선행정사사무소 (대표 행정사 정유선)<!-- 근거: 물류정책기본법, 물류정책기본법 시행령, 물류정책기본법 시행규칙 --></p>`,
  },

  en: {
    title: 'International Freight Forwarding Business Transfer in Korea — Succession Report Within 30 Days',
    category: 'Logistics',
    metaTitle: 'Freight Forwarding Business Transfer in Korea — Succession Report',
    metaDescription: 'Acquiring a Korean freight forwarding business by transfer, merger or inheritance? Report the succession within 30 days and check disqualification grounds.',
    excerpt: 'A registered international freight forwarding business can pass to a new owner by transfer, inheritance or corporate merger. The rights and duties carry over, and the successor reports to the provincial governor within 30 days.',
    content: `<div class="toc"><p>Contents</p><ol><li>Three ways a business can be succeeded</li><li>Deadline, documents and steps</li><li>Disqualification rules and grace periods</li><li>FAQ</li></ol></div>
<p><strong>When a registered international freight forwarding business (국제물류주선업) is transferred, or the operating company merges, the new owner does not register again. It succeeds to the rights and duties of the existing registration and must report the succession to the Mayor or Governor of the relevant metropolitan city or province within 30 days of the succession date.</strong> The same applies when an heir continues the business after the owner dies. Succession is a report, not a new registration, but the disqualification grounds for registration also apply to the successor, so they should be checked before signing.</p>
<p>For first-time registration, see <a href="/en/blog/international-logistics-registration-guide">our registration guide</a>. This article covers only the transfer of a business that is already registered.</p>

<h2>Three ways a business can be succeeded</h2>
<p>Under the Framework Act on Logistics Policy, when a registered forwarder transfers its business, dies, or merges, the transferee, the heir, or the surviving or newly formed company succeeds to the rights and duties of the registration. Each case uses a different report form and attachments.</p>
<table><thead><tr><th>Case</th><th>Successor</th><th>Form</th><th>Main attachments</th></tr></thead><tbody>
<tr><td>Business transfer</td><td>Transferee</td><td>Transfer report</td><td>Copy of the transfer agreement; proof of foreign investment if the transferee is a foreign-invested company</td></tr>
<tr><td>Inheritance</td><td>Heir</td><td>Inheritance report</td><td>Proof of relationship to the deceased, proof of death, consent of other heirs of the same rank</td></tr>
<tr><td>Corporate merger</td><td>Surviving or new company</td><td>Merger report</td><td>Copy of the merger agreement; statement of business fixed assets of the merging companies from the last 1 year</td></tr>
</tbody></table>
<p>If the transferee, the heir, or an officer of the post-merger company is a foreign national, documents from the home country showing no disqualification (apostille or consular confirmation) are also required. Corporate registry records are checked by the authority through shared administrative data.</p>
<p>All rights and duties of the registration pass to the successor. Registration standards such as paid-in capital (asset value for individuals) and guarantee insurance must still be met after succession; falling short can lead to cancellation or suspension. See <a href="/en/blog/freight-forwarder-capital-bond-requirements">capital and guarantee insurance requirements</a>.</p>

<h2>Deadline, documents and steps</h2>
<p>The report is due within 30 days of the date the rights and duties were succeeded, and it may be filed electronically. The processing period printed on the forms is 2 days. The transfer report is signed by both the transferor and the transferee. Because the authority may delegate intake and review of succession reports to a logistics association or similar body, confirm the actual filing desk with the province where the head office is located.</p>
<p>A succession report and a change registration are separate procedures. If, after succession, you change the trade name, representative or officers, or head office location, or if capital decreases, a change registration must be filed within 60 days of the change.</p>
<table><thead><tr><th>Procedure</th><th>Trigger</th><th>Deadline</th></tr></thead><tbody>
<tr><td>Succession report</td><td>Transfer, inheritance, merger</td><td>Within 30 days of succession</td></tr>
<tr><td>Change registration</td><td>Change of name, officers, head office; capital decrease</td><td>Within 60 days of the change</td></tr>
<tr><td>Registration standards report</td><td>Every 3 years after registration</td><td>Within 60 days of the reporting point</td></tr>
</tbody></table>
<p>In practice, the following order helps you meet every deadline.</p>
<ol>
<li>Before signing, confirm that the transferee (and, for a company, its representative and officers) is not disqualified.</li>
<li>State the succession date clearly in the transfer or merger agreement. The deadline runs from that date.</li>
<li>File the report and attachments with the provincial authority within 30 days of succession.</li>
<li>If the name, officers or location changed, apply for change registration within 60 days.</li>
<li>Note the next registration standards reporting point written on the registration certificate.</li>
</ol>
<p>Failing to file the succession report, and failing to file a change registration, are each subject to an administrative fine. For how we handle the whole process, see <a href="/en/services/logistics">our freight forwarding registration service</a>.</p>

<h2>Disqualification rules and grace periods</h2>
<p>The disqualification grounds for new registration apply equally to a successor. The main grounds are:</p>
<ul>
<li>Persons under adult guardianship or limited guardianship</li>
<li>Persons sentenced to imprisonment for violating the Framework Act on Logistics Policy, the Trucking Transport Business Act, the Aviation Business Act, the Aviation Safety Act, the Airport Facilities Act or the Marine Transportation Act, until 2 years after the sentence ends or is remitted</li>
<li>Persons on probation for such violations, or fined for them within the last 2 years</li>
<li>Persons whose registration was cancelled within the last 2 years</li>
<li>Companies whose representative, or any other officer, falls under these grounds</li>
</ul>
<p>If the successor is disqualified, the registration must be cancelled, with two exceptions: a disqualified heir who transfers the business to another person within 3 months of the inheritance, and a company (including a post-merger company) that replaces a disqualified officer within 3 months of the ground arising (for a merger, the merger date). No such grace period exists for an individual transferee who is personally disqualified, so checking before the contract is the safest approach.</p>

<div class="faq-section"><h2>FAQ</h2>
<div class="faq-item"><p class="faq-q">Q. Do I have to register again when I take over the business?</p><p class="faq-a">A. No. In a transfer, inheritance or merger, the rights and duties of the existing registration pass to the successor, who files a succession report within 30 days.</p></div>
<div class="faq-item"><p class="faq-q">Q. Does the deadline run from the contract date?</p><p class="faq-a">A. It runs from the date the rights and duties were succeeded. Fix that date clearly in the agreement to avoid confusion.</p></div>
<div class="faq-item"><p class="faq-q">Q. If the trade name changes after a merger, is the succession report enough?</p><p class="faq-a">A. Changing registered matters such as the name, officers or head office is a separate change registration, due within 60 days. Ask the provincial authority whether both can be handled together.</p></div>
<div class="faq-item"><p class="faq-q">Q. Will a disqualified heir lose the business?</p><p class="faq-a">A. If the heir transfers the business to another person within 3 months of the inheritance, cancellation on that ground can be avoided.</p></div>
</div>

<div class="cta-block"><h3>Talk to us about a forwarding business transfer</h3><p>To review the succession date, disqualification checks and change registration in one go, contact YouSun Administrative Agency. Phone 02-363-2251, weekdays 09:30~17:30 KST.</p><a href="/en/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">Request a consultation</a></div>
<p class="author-block">YouSun Administrative Agency (Chief Administrative Agent Jung Yu-sun)</p>`,
  },

  zh: {
    title: '国际货运代理业转让受让·合并·继承 — 地位承继申报30日期限与欠格事由',
    category: '物流/配送',
    metaTitle: '韩国国际货运代理业转让受让申报 — 合并·继承承继与30日期限',
    metaDescription: '在韩国通过转让、法人合并或继承接手已登记的国际货运代理业时，无需重新登记，但须自承继之日起30日内向市·道知事申报。本文说明申报材料、变更登记区别与欠格事由。',
    excerpt: '已登记的国际货运代理业可通过转让受让、继承、法人合并三种方式转移。无论哪种情形，登记上的权利义务均被承继，承继人须在30日内向市·道知事申报。',
    content: `<div class="toc"><p>目录</p><ol><li>认可事业承继的三种情形</li><li>承继申报期限·材料·办理顺序</li><li>欠格事由的准用与宽限期</li><li>常见问题</li></ol></div>
<p><strong>国际货运代理业（국제물류주선업）发生转让受让或法人合并时，新经营者无需重新登记，而是承继原登记所产生的权利义务，并须自承继之日起30日内向市·道知事申报。</strong>经营者死亡、由继承人继续经营时也是同样的结构。承继属于申报程序而非登记，但登记的欠格事由同样适用于承继人，因此签约前需要先行确认。</p>
<p>首次登记的流程请参阅<a href="/zh/blog/international-logistics-registration-guide">国际货运代理业登记指南</a>。本文只说明已登记事业的转让与接手。</p>

<h2>认可事业承继的三种情形</h2>
<p>根据《物流政策基本法》，国际货运代理业者转让事业、死亡或法人合并时，受让人、继承人、合并后存续或新设的法人承继登记上的权利义务。不同情形需提交的申报书和附件不同。</p>
<table><thead><tr><th>情形</th><th>承继人</th><th>申报书</th><th>主要附件</th></tr></thead><tbody>
<tr><td>事业转让受让</td><td>受让人</td><td>转让受让申报书</td><td>转让受让合同复印件；受让人为外商投资企业时提交外商投资证明</td></tr>
<tr><td>继承</td><td>继承人</td><td>继承申报书</td><td>继承人与被继承人关系证明、死亡证明、同一顺位其他继承人的同意书</td></tr>
<tr><td>法人合并</td><td>存续法人或新设法人</td><td>法人合并申报书</td><td>合并合同复印件、合并当事法人最近1年内的事业用固定资产明细</td></tr>
</tbody></table>
<p>受让人、继承人或合并后法人的高管为外国人时，还需提交本国出具的、证明不属于欠格事由的文件（海牙认证或领事确认）。法人登记事项证明等由主管机关通过行政信息共享查验。</p>
<p>被承继的是登记上的全部权利与义务。资本金（个人为资产评估额）和保证保险等登记标准在承继后仍须持续满足，达不到标准可能被撤销登记或停业。具体标准见<a href="/zh/blog/freight-forwarder-capital-bond-requirements">资本金与保证保险要求</a>。</p>

<h2>承继申报期限·材料·办理顺序</h2>
<p>申报期限为自承继权利义务之日起30日内，也可以电子文件提交。表格上记载的处理期限为2日。转让受让申报书须由转让人与受让人共同签名。市·道知事可将承继申报的受理与审查委托给物流相关协会等机构，实际受理窗口请先向总部所在地的市·道确认。</p>
<p>承继申报与变更登记是不同的程序。承继后变更商号、代表人或高管、总部所在地，或资本金减少时，须自变更事由发生之日起60日内另行申请变更登记。</p>
<table><thead><tr><th>程序</th><th>事由</th><th>期限</th></tr></thead><tbody>
<tr><td>承继申报</td><td>转让受让、继承、法人合并</td><td>自承继之日起30日内</td></tr>
<tr><td>变更登记</td><td>商号·高管·总部变更，资本金减少</td><td>自变更事由发生之日起60日内</td></tr>
<tr><td>登记标准申报</td><td>登记后每满3年</td><td>自申报时点起60日内</td></tr>
</tbody></table>
<p>实务中按以下顺序办理，可避免错过期限。</p>
<ol>
<li>签约前确认受让人（法人则包括代表人和高管）不属于欠格事由。</li>
<li>在转让受让合同或合并合同中明确写明承继日，申报期限从该日起算。</li>
<li>自承继日起30日内向市·道知事提交申报书和附件。</li>
<li>商号、高管或所在地发生变更的，在60日内申请变更登记。</li>
<li>确认登记证上记载的下一次登记标准申报时点。</li>
</ol>
<p>未进行承继申报，以及未办理变更登记，均属于罚款（过怠金）对象。整体办理流程可参阅<a href="/zh/services/logistics">国际货运代理业登记服务</a>。</p>

<h2>欠格事由的准用与宽限期</h2>
<p>新登记的欠格事由同样准用于承继人，主要包括：</p>
<ul>
<li>被成年监护人或被限定监护人</li>
<li>因违反《物流政策基本法》《货物汽车运输事业法》《航空事业法》《航空安全法》《机场设施法》《海运法》被判处监禁以上实刑，执行完毕或免除之日起未满2年者</li>
<li>因上述法律被判处监禁以上刑罚的缓刑期间内者，或被判处罚金后未满2年者</li>
<li>登记被撤销后未满2年者</li>
<li>代表人属于上述事由，或代表人以外的高管中有人属于刑罚·撤销登记事由的法人</li>
</ul>
<p>承继人属于欠格事由时，市·道知事应撤销登记。但有两种宽限：属于欠格事由的继承人自继承之日起3个月内将事业转让给他人的；法人（含合并后法人）的高管属于欠格事由时，自事由发生之日（合并时为合并日）起3个月内更换该高管的。个人受让人本人属于欠格事由时没有这类宽限，因此签约前确认最为稳妥。</p>

<div class="faq-section"><h2>常见问题</h2>
<div class="faq-item"><p class="faq-q">Q. 接手事业后需要重新登记国际货运代理业吗？</p><p class="faq-a">A. 不需要。转让受让、继承、法人合并时，原登记的权利义务被承继，承继人在30日内向市·道知事进行承继申报。</p></div>
<div class="faq-item"><p class="faq-q">Q. 申报期限从签约日起算吗？</p><p class="faq-a">A. 起算点是承继权利义务之日。在合同中明确承继日，可避免期限上的混乱。</p></div>
<div class="faq-item"><p class="faq-q">Q. 合并后商号改变，只做承继申报就可以吗？</p><p class="faq-a">A. 变更商号、高管、总部等登记事项属于另外的变更登记，须在60日内申请。是否可与承继申报一并办理，建议向主管市·道确认。</p></div>
<div class="faq-item"><p class="faq-q">Q. 继承人属于欠格事由，会失去事业吗？</p><p class="faq-a">A. 自继承之日起3个月内将事业转让给他人的，可避免因该事由被撤销登记。</p></div>
</div>

<div class="cta-block"><h3>国际货运代理业转让受让申报咨询</h3><p>如需一次性检查承继日设定、欠格事由和变更登记，请联系유선행정사사무소。电话 02-363-2251，工作日 09:30~17:30 KST。</p><a href="/zh/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">申请咨询</a></div>
<p class="author-block">유선행정사사무소（代表行政士 정유선）</p>`,
  },

  ja: {
    title: '国際物流周旋業の譲渡・譲受・合併・相続 — 地位承継届出の30日期限と欠格事由',
    category: '物流・流通',
    metaTitle: '韓国の国際物流周旋業 譲渡・譲受の届出 — 合併・相続による承継と30日期限',
    metaDescription: '韓国で登録済みの国際物流周旋業を譲渡・譲受、法人合併、相続で引き継ぐ場合、新規登録ではなく承継日から30日以内に市・道知事への届出が必要です。書類、変更登録との違い、欠格事由を解説します。',
    excerpt: '登録済みの国際物流周旋業は、譲渡・譲受、相続、法人合併の三つの方法で引き継がれます。いずれも登録上の権利・義務が承継され、承継人は30日以内に市・道知事へ届け出ます。',
    content: `<div class="toc"><p>目次</p><ol><li>事業承継が認められる三つの場合</li><li>承継届出の期限・書類・手順</li><li>欠格事由の準用と猶予期間</li><li>よくある質問</li></ol></div>
<p><strong>国際物流周旋業（국제물류주선업）を譲渡・譲受したり、法人が合併したりした場合、新しい事業者は改めて登録するのではなく、登録に基づく権利・義務を承継し、承継した日から30日以内に市・道知事へ届け出ます。</strong>代表者が死亡し、相続人が事業を引き継ぐ場合も同じ仕組みです。承継は登録ではなく届出の手続ですが、登録の欠格事由は承継人にもそのまま適用されるため、契約前に確認すべき点があります。</p>
<p>初めて登録する手続は<a href="/ja/blog/international-logistics-registration-guide">国際物流周旋業 登録ガイド</a>をご覧ください。本記事では、すでに登録された事業を譲る・引き継ぐ場合だけを説明します。</p>

<h2>事業承継が認められる三つの場合</h2>
<p>「物流政策基本法」は、国際物流周旋業者が事業を譲渡したとき、死亡したとき、法人が合併したとき、譲受人・相続人・合併後に存続する法人または合併により設立される法人が登録に基づく権利・義務を承継すると定めています。場合ごとに届出書と添付書類が異なります。</p>
<table><thead><tr><th>場合</th><th>承継する者</th><th>届出書</th><th>主な添付書類</th></tr></thead><tbody>
<tr><td>事業の譲渡・譲受</td><td>譲受人</td><td>譲渡・譲受届出書</td><td>譲渡・譲受契約書の写し、譲受人が外国人投資企業の場合は外国人投資を証明する書類</td></tr>
<tr><td>相続</td><td>相続人</td><td>相続届出書</td><td>相続人と被相続人の関係を証明する書類、死亡を証明する書類、同順位の他の相続人の同意書</td></tr>
<tr><td>法人合併</td><td>存続法人または新設法人</td><td>法人合併届出書</td><td>合併契約書の写し、合併当事法人の直近1年以内の事業用固定資産明細書</td></tr>
</tbody></table>
<p>譲受人・相続人、または合併後の法人の役員が外国人である場合は、欠格事由に当たらないことを確認できる本国の書類（アポスティーユまたは領事確認）も提出します。法人登記事項証明書などは、市・道知事が行政情報の共同利用で確認します。</p>
<p>承継されるのは登録に基づく権利と義務のすべてです。資本金（個人は資産評価額）や保証保険などの登録基準は承継後も満たし続ける必要があり、基準を下回ると登録取消しや事業停止の対象になります。基準の内容は<a href="/ja/blog/freight-forwarder-capital-bond-requirements">資本金・保証保険の要件</a>で確認できます。</p>

<h2>承継届出の期限・書類・手順</h2>
<p>届出期限は権利・義務を承継した日から30日以内で、電子文書でも提出できます。様式に記載された処理期間は2日です。譲渡・譲受届出書には譲渡人と譲受人が共に署名します。市・道知事は承継届出の受付・審査を物流関連協会などに委託できるため、実際の受付窓口は本社所在地を管轄する市・道に事前に確認するのが確実です。</p>
<p>承継届出と変更登録は別の手続です。承継後に商号、代表者・役員、本社所在地を変更したり、資本金が減少したりした場合は、変更事由が生じた日から60日以内に変更登録を別途申請します。</p>
<table><thead><tr><th>手続</th><th>事由</th><th>期限</th></tr></thead><tbody>
<tr><td>承継届出</td><td>譲渡・譲受、相続、法人合併</td><td>承継した日から30日以内</td></tr>
<tr><td>変更登録</td><td>商号・役員・本社の変更、資本金の減少</td><td>変更事由発生日から60日以内</td></tr>
<tr><td>登録基準の届出</td><td>登録後3年経過ごと</td><td>届出時点から60日以内</td></tr>
</tbody></table>
<p>実務では次の順序で進めると、期限を逃さずに済みます。</p>
<ol>
<li>契約前に、譲受人（法人の場合は代表者と役員）が欠格事由に当たらないか確認します。</li>
<li>譲渡・譲受契約書や合併契約書に承継日を明記します。届出期限はこの日から数えます。</li>
<li>承継日から30日以内に届出書と添付書類を市・道知事に提出します。</li>
<li>商号・役員・所在地が変わった場合は、60日以内に変更登録を申請します。</li>
<li>登録証に記載された次回の登録基準届出時点を確認しておきます。</li>
</ol>
<p>承継届出をしない場合は過料の対象となり、変更登録の漏れも別途過料の対象です。登録から承継までの進め方は<a href="/ja/services/logistics">国際物流周旋業 登録サービス</a>でご案内しています。</p>

<h2>欠格事由の準用と猶予期間</h2>
<p>承継した者には、新規登録の欠格事由がそのまま準用されます。主な事由は次のとおりです。</p>
<ul>
<li>被成年後見人または被限定後見人</li>
<li>「物流政策基本法」「貨物自動車運輸事業法」「航空事業法」「航空安全法」「空港施設法」「海運法」に違反して禁錮以上の実刑の言渡しを受け、執行が終わり、または免除された日から2年を経過しない者</li>
<li>同じ法律違反で禁錮以上の刑の執行猶予期間中の者、罰金刑の言渡しを受けて2年を経過しない者</li>
<li>登録が取り消された後2年を経過しない者</li>
<li>代表者が上記の事由に当たる法人、または代表者以外の役員に刑罰・登録取消しの事由に当たる者がいる法人</li>
</ul>
<p>承継人が欠格事由に当たる場合、市・道知事は登録を取り消さなければなりません。ただし猶予が二つあります。欠格事由に当たる相続人が相続日から3か月以内に事業を他人に譲渡した場合と、法人（合併後の法人を含む）の役員が欠格事由に当たるとき、その事由が生じた日（合併の場合は合併日）から3か月以内に当該役員を改任した場合です。個人の譲受人本人が欠格事由に当たる場合にはこのような猶予はないため、契約前の確認が最も安全です。</p>

<div class="faq-section"><h2>よくある質問</h2>
<div class="faq-item"><p class="faq-q">Q. 事業を引き継いだら、国際物流周旋業の登録をやり直す必要がありますか。</p><p class="faq-a">A. いいえ。譲渡・譲受、相続、法人合併では既存の登録に基づく権利・義務が承継され、承継人が30日以内に市・道知事へ承継届出をします。</p></div>
<div class="faq-item"><p class="faq-q">Q. 届出期限は契約日から数えますか。</p><p class="faq-a">A. 起算点は権利・義務を承継した日です。契約書で承継日を明確にしておけば、期限をめぐる混乱を防げます。</p></div>
<div class="faq-item"><p class="faq-q">Q. 合併後に商号が変わる場合、承継届出だけで足りますか。</p><p class="faq-a">A. 商号・役員・本社などの登録事項の変更は、承継届出とは別の変更登録の対象で、60日以内に申請します。承継届出と一緒に処理できるかは管轄の市・道にご確認ください。</p></div>
<div class="faq-item"><p class="faq-q">Q. 相続人が欠格事由に当たると、事業を失いますか。</p><p class="faq-a">A. 相続日から3か月以内に事業を他人に譲渡すれば、その事由による登録取消しを避けられます。</p></div>
</div>

<div class="cta-block"><h3>国際物流周旋業の譲渡・譲受届出のご相談</h3><p>承継日の設定、欠格事由の確認、変更登録までまとめて点検したい場合は、YouSun Administrative Agencyへお問い合わせください。電話 02-363-2251、平日 09:30~17:30 KST。</p><a href="/ja/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">相談を申し込む</a></div>
<p class="author-block">YouSun Administrative Agency（代表行政士 チョン・ユソン）</p>`,
  },
}
