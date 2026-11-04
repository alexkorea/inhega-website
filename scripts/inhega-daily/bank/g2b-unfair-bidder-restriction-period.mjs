// 원고 은행 보충 — BANK-REFILL-1029(2026-10-29, 맥4 하위 작성)
// 주제: procurement(조달청나라장터등록) / 세부주제: penalties(위반 시 제재)
//
// 겹침 검사(blog-posts-data.ts·blog-i18n.ts·bank 대조):
//   procurement-fix(부정당업자 제재 대응 — 법 제27조 사유 목록·과징금 대체·자진신고 감면·제척기간·이의 구조, 법률 단위 개관),
//   g2b-bidding-qualifications(입찰참가 자격 요건), procurement-narajangteo-registration-change(변경등록·입찰 무효),
//   narajangteo-bidding-price-strategy-guide(가격 전략 — 계약 거절 시 제재 한 줄), 그 밖의 g2b-* 등록·직접생산 글.
//   → 이 글은 procurement-fix 가 다루지 않은 세 가지만 쓴다: ① 시행규칙 별표 2 의 "행위별 제한기간"(개별기준)과
//     가중·감경 일반기준, ② 제한의 효과 범위(전자조달시스템 게재·공개, 다른 기관·다른 법령 제한 연동,
//     법인 대표자 연동, 상호·대표자 변경 우회 차단, 낙찰 후 계약 전 제한), ③ 처분 통지 후 점검 순서.
//     과징금은 존재만 언급(금액·비율 화면 0), 제척기간은 한 문장으로만 쓰고 procurement-fix 로 넘긴다.
//
// 법령 대조(law.go.kr DRF, OC=visionlaw, lawfetch.py, 2026-10-29 조회):
//   국가를 당사자로 하는 계약에 관한 법률          MST 283877, 2026. 6. 11. 시행
//     제27조 제1항(2년 이내·다른 중앙관서 통보·제한)·제3항(수의계약 금지)·제4항(5년·7년)·제5항(공개), 제27조의2 제1항(과징금 — 존재만)
//   국가를 당사자로 하는 계약에 관한 법률 시행령  MST 285893, 2026. 6. 3. 시행
//     제76조 제2항 제1호 가목·나목·라목, 제2호 가목·라목, 제3항(1개월 이상 2년 이하, 주의·감독·천재지변 단서), 제4항,
//     제6항 제1호, 제8항, 제9항, 제10항, 제11항, 제12항, 제13항, 제14항
//   국가를 당사자로 하는 계약에 관한 법률 시행규칙 MST 282607, 2026. 1. 2. 시행
//     제76조, 별표 2 제1호 가목~라목(일반기준), 제2호 4·5라·10·11·12·13가·13다·15(개별기준), 제77조 제3항~제5항
// 인허가 구분: 부정당업자 입찰참가자격 제한 = 각 중앙관서의 장의 "처분"(제재). 등록·허가·신고가 아니다.
//   나라장터(국가종합전자조달시스템) 입찰참가자격 "등록" 과 별개로, 제한기간 동안 입찰 참가가 막히고 그 사실이 시스템에 게재된다.
// 조정·확인 못 한 점:
//   - 제한처분이 나라장터 입찰참가자격 등록 자체를 말소하는지: 법·영·규칙에 등록 말소 규정 없음(영 제76조 제8항은 "입찰에
//     참가할 수 없도록"). 조달청 고시(입찰참가자격등록규정)는 lawfetch 대상 밖이라 대조 못 함 → "등록과 별개로 입찰이 막힌다"로만 서술.
//   - 별표 2 개별기준 중 손해액·뇌물액 구간(금액)은 화면 금액 금지라 싣지 않음. 부실벌점·하자비율 구간도 분량상 제외.
//   - 처분 전 의견제출·청문 절차(행정절차법)는 이번 대조 범위 밖이라 쓰지 않음. 과징금 비율·납부기한도 쓰지 않음.
// 대조표: crosscheck/g2b-unfair-bidder-restriction-period.md

const SLUG = 'g2b-unfair-bidder-restriction-period'

const entry = {
  topic: 'procurement',
  angle: 'penalties',
  slug: SLUG,
  kind: 'seo3958',
  keyword: '부정당업자 입찰참가자격 제한',
  pexelsId: 7841478,
  coverImage: '',
  relatedServices: [
    { title: '조달청 나라장터 등록', href: '/services/procurement' },
  ],

  ko: {
    title: '부정당업자 입찰참가자격 제한 — 행위별 제한기간과 나라장터 입찰에 미치는 영향',
    category: '조달청',
    metaTitle: '부정당업자 입찰참가자격 제한 — 행위별 제한기간과 나라장터 게재',
    metaDescription: '부정당업자 입찰참가자격 제한은 1개월 이상 2년 이하로 정해지고 전자조달시스템에 게재됩니다. 담합·허위서류·계약 불이행별 제한기간, 가중·감경 기준, 대표자 연동과 우회 차단을 안내합니다.',
    excerpt: '부정당업자로 입찰참가자격 제한을 받으면 제한기간 동안 다른 기관 입찰에도 참가할 수 없습니다. 담합, 허위서류, 계약 불이행 같은 행위별 제한기간과 가중·감경 기준, 나라장터 게재와 대표자 연동, 낙찰 후 계약 전 제한의 효과를 다룹니다.',
    content: `<div class="toc"><p>목차</p><ol><li>제한 처분의 틀과 대상 행위</li><li>행위별 제한기간과 가중·감경 기준</li><li>나라장터 입찰에 미치는 영향</li><li>자주 묻는 질문 (FAQ)</li></ol></div>
<p><strong>부정당업자 입찰참가자격 제한은 「국가를 당사자로 하는 계약에 관한 법률」에 따라 각 중앙관서의 장이 1개월 이상 2년 이하의 범위에서 하는 처분이며, 제한 사실은 전자조달시스템에 게재되어 제한기간 동안 다른 중앙관서의 입찰에도 참가할 수 없게 됩니다.</strong><!-- 근거: 국가를 당사자로 하는 계약에 관한 법률 제27조 제1항, 같은 법 시행령 제76조 제3항·제8항·제11항 --> 나라장터 입찰참가자격 등록과는 별개의 제재이므로, 등록이 살아 있어도 제한기간에는 입찰이 막힙니다. 기간은 행위 유형별 기준표에 따라 정해지고, 동기와 정도에 따라 늘어나거나 줄어듭니다.</p>
<p>제재 제도의 전체 구조는 <a href="/blog/procurement-fix">부정당업자 제재 대응 안내</a>에서, 입찰 자격 요건은 <a href="/blog/g2b-bidding-qualifications">나라장터 입찰참가 자격 요건</a>에서, 상호·대표자 변경 절차는 <a href="/blog/procurement-narajangteo-registration-change">조달청 입찰참가자격 변경등록</a>에서 다룹니다. 여기서는 행위별 기간과 제한의 실제 효과에 집중합니다.</p>

<h2>제한 처분의 틀과 대상 행위</h2>
<p>법률은 제한 사유를 열거하고, 시행령이 기간의 범위를, 시행규칙 기준표가 행위별 기간을 정합니다. 각 중앙관서의 장은 제한 사실을 즉시 다른 중앙관서의 장에게 통보하고, 통보를 받은 기관도 같은 업체의 입찰참가자격을 제한해야 합니다.<!-- 근거: 국가를 당사자로 하는 계약에 관한 법률 제27조 제1항, 같은 법 시행령 제76조 제3항·제4항, 시행규칙 제76조 --> 입찰 실무에서 자주 문제 되는 대상 행위는 다음과 같습니다.</p>
<ol><li>입찰가격·수주 물량 등을 미리 협정하거나 특정인의 낙찰을 위해 담합한 행위</li><li>입찰·계약 서류를 위조·변조하거나 허위서류를 제출한 행위(입찰참가자격 등록 서류 포함)</li><li>정당한 이유 없이 계약을 체결하지 않거나 이행하지 않은 행위</li><li>고의로 무효의 입찰을 한 행위</li><li>발주기관의 승인 없이 하도급하는 등 하도급 제한규정을 위반한 행위</li><li>입찰참가나 계약 이행, 감독·검사를 방해한 행위</li></ol>
<p>다만 대리인·지배인 등 사용인의 행위로 사유가 생겼더라도 업체가 이를 막기 위해 상당한 주의와 감독을 게을리하지 않았거나, 천재지변 등 부득이한 사유로 생긴 위반이면 제한하지 않습니다.<!-- 근거: 국가를 당사자로 하는 계약에 관한 법률 시행령 제76조 제2항 제1호 가목·나목·라목, 제2호 가목·라목, 제3항 단서 --></p>

<h2>행위별 제한기간과 가중·감경 기준</h2>
<table><thead><tr><th>위반 행위</th><th>기준 제한기간</th></tr></thead><tbody>
<tr><td>담합을 주도하여 낙찰을 받은 경우</td><td>2년<!-- 근거: 국가계약법 시행규칙 별표 2 제2호 4. 가목 --></td></tr>
<tr><td>담합을 주도한 경우</td><td>1년<!-- 근거: 국가계약법 시행규칙 별표 2 제2호 4. 나목 --></td></tr>
<tr><td>입찰가격 등을 협정하거나 담합한 경우</td><td>6개월<!-- 근거: 국가계약법 시행규칙 별표 2 제2호 4. 다목 --></td></tr>
<tr><td>서류 위조·변조·허위서류로 낙찰을 받은 경우</td><td>1년<!-- 근거: 국가계약법 시행규칙 별표 2 제2호 10. 가목 --></td></tr>
<tr><td>서류 위조·변조·허위서류를 제출한 경우</td><td>6개월<!-- 근거: 국가계약법 시행규칙 별표 2 제2호 10. 나목 --></td></tr>
<tr><td>계약을 체결 또는 이행하지 않은 경우</td><td>6개월<!-- 근거: 국가계약법 시행규칙 별표 2 제2호 13. 가목 --></td></tr>
<tr><td>고의로 무효의 입찰을 한 경우</td><td>6개월<!-- 근거: 국가계약법 시행규칙 별표 2 제2호 11. --></td></tr>
<tr><td>발주기관의 승인 없이 하도급한 경우</td><td>6개월<!-- 근거: 국가계약법 시행규칙 별표 2 제2호 5. 라목 --></td></tr>
<tr><td>계약상 주요조건을 위반한 경우</td><td>3개월<!-- 근거: 국가계약법 시행규칙 별표 2 제2호 13. 다목 --></td></tr>
<tr><td>입찰참가·계약 이행 또는 감독·검사를 방해한 경우</td><td>3개월<!-- 근거: 국가계약법 시행규칙 별표 2 제2호 12.·15. --></td></tr>
</tbody></table>
<p>기준표의 기간은 출발점입니다. 제한 처분일부터 제한기간이 끝난 뒤 6개월이 지나기 전까지 다시 사유가 생기면 해당 기간의 2분의 1 범위에서 늘릴 수 있지만, 합산 기간은 2년을 넘을 수 없습니다. 여러 행위가 함께 문제 되면 그중 가장 긴 기준을 따릅니다.<!-- 근거: 국가계약법 시행규칙 별표 2 제1호 가목·나목 --> 반대로 동기·내용·횟수를 고려해 2분의 1 범위에서 줄일 수 있고, 위반 정도가 현저히 경미하면 한 번 더 2분의 1 범위에서 줄일 수 있습니다. 줄인 뒤에도 1개월 이상이어야 하며, 뇌물 제공은 줄일 수 없습니다.<!-- 근거: 국가계약법 시행규칙 별표 2 제1호 다목·라목 --> 행위가 끝난 때부터 5년(담합·뇌물은 7년)이 지나면 제한할 수 없습니다.<!-- 근거: 국가를 당사자로 하는 계약에 관한 법률 제27조 제4항 --></p>

<h2>나라장터 입찰에 미치는 영향</h2>
<p>제한 처분을 한 기관은 상호, 대표자 성명, 사업자등록번호, 제한기간과 구체적 사유를 제한기간 개시일 전까지 전자조달시스템에 게재하고 공개합니다. 각 기관은 이 시스템으로 입찰자의 제한 여부를 확인하므로, 한 기관에서 받은 제한이 모든 중앙관서의 입찰에 그대로 적용됩니다.<!-- 근거: 국가를 당사자로 하는 계약에 관한 법률 제27조 제5항, 같은 법 시행령 제76조 제8항·제11항·제12항, 시행규칙 제77조 제3항~제5항 --> 지방자치단체나 공공기관이 다른 법령에 따라 한 제한도 통보되거나 게재되면 국가 입찰에서 똑같이 막힙니다.<!-- 근거: 국가를 당사자로 하는 계약에 관한 법률 시행령 제76조 제13항 --></p>
<p>법인이 제한을 받으면 해당 입찰·계약 업무를 맡은 대표자도 함께 제한되고, 그 대표자가 대표로 있는 다른 법인도 입찰에 참가할 수 없습니다. 발주기관은 상호나 대표자를 바꿔 제한을 피하는 일을 막기 위해 법인등록번호, 면허·등록번호 등을 확인해야 합니다.<!-- 근거: 국가를 당사자로 하는 계약에 관한 법률 시행령 제76조 제6항 제1호·제10항·제14항 --> 처분 통지를 받았다면 다음 순서로 점검하십시오.</p>
<ol><li>통지서의 사유가 기준표의 어느 행위에 해당하는지 확인합니다.</li><li>주의·감독을 다했거나 부득이한 사유가 있었다는 자료, 감경 사유 자료를 모읍니다.</li><li>진행 중인 낙찰 건을 점검합니다. 계약 체결 전에 제한을 받으면 그 낙찰자와는 계약할 수 없습니다.</li><li>장기계속계약은 첫 계약 이후 제한을 받아도 연차별 계약은 체결할 수 있는지 확인합니다.</li><li>대표자가 겸하는 다른 법인의 입찰 일정도 함께 조정합니다.</li></ol>
<p>제한기간에는 수의계약도 원칙적으로 체결할 수 없습니다.<!-- 근거: 국가를 당사자로 하는 계약에 관한 법률 제27조 제3항, 같은 법 시행령 제76조 제9항 --></p>

<div class="faq-section"><h2>자주 묻는 질문 (FAQ)</h2>
<div class="faq-item"><p class="faq-q">Q. 제한을 받으면 나라장터 등록이 취소되나요?</p><p class="faq-a">A. 법령은 등록 취소가 아니라 제한기간 동안 입찰에 참가할 수 없게 하고 그 사실을 전자조달시스템에 게재하도록 정합니다. 등록 여부와 관계없이 제한기간에는 입찰이 막힙니다.<!-- 근거: 국가를 당사자로 하는 계약에 관한 법률 시행령 제76조 제8항·제11항 --></p></div>
<div class="faq-item"><p class="faq-q">Q. 상호를 바꾸거나 새 법인을 세우면 입찰할 수 있나요?</p><p class="faq-a">A. 발주기관은 법인등록번호와 면허·등록번호 등으로 제한 여부를 확인해야 합니다. 제한된 대표자가 대표로 있는 다른 법인도 입찰에 참가할 수 없습니다.<!-- 근거: 국가를 당사자로 하는 계약에 관한 법률 시행령 제76조 제10항·제14항 --></p></div>
<div class="faq-item"><p class="faq-q">Q. 제한기간이 기준표보다 짧아질 수 있나요?</p><p class="faq-a">A. 동기·내용·횟수를 고려해 2분의 1 범위에서 줄일 수 있고, 현저히 경미하면 한 번 더 줄일 수 있습니다. 줄인 뒤에도 1개월 이상이며 뇌물 제공은 줄이지 않습니다.<!-- 근거: 국가계약법 시행규칙 별표 2 제1호 다목·라목 --></p></div>
<div class="faq-item"><p class="faq-q">Q. 제한 대신 다른 처분을 받는 경우도 있나요?</p><p class="faq-a">A. 책임이 경미하거나 제한으로 유효한 경쟁입찰이 성립하지 않는 경우에는 과징금으로 갈음할 수 있습니다. 해당 여부는 사유별로 따로 판단됩니다.<!-- 근거: 국가를 당사자로 하는 계약에 관한 법률 제27조의2 제1항 --></p></div>
</div>

<div class="cta-block"><h3>제한 통지 이후 점검과 서류 준비를 함께 하세요</h3><p>유선행정사사무소가 처분 사유 정리, 감경 사유 자료 준비, 나라장터 등록 정보 점검을 돕습니다. 진행 범위는 <a href="/services/procurement">조달청 나라장터 등록 안내</a>에서 확인하실 수 있습니다. 전화 02-325-8222, 평일 09:30~17:30 KST.</p><a href="/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">상담 신청하기</a></div>
<p class="author-block">유선행정사사무소 (대표 행정사 정유선)<!-- 근거: 국가를 당사자로 하는 계약에 관한 법률 제27조·제27조의2, 같은 법 시행령 제76조, 같은 법 시행규칙 제76조·제77조·별표 2 --></p>`,
  },

  en: {
    title: 'Bidding Eligibility Restriction for Unfair Business Operators in Korea — Periods by Violation and Effect on KONEPS Bidding',
    category: 'Public Procurement',
    metaTitle: 'Bidding Eligibility Restriction in Korea — Periods by Violation and KONEPS Posting',
    metaDescription: 'A bidding eligibility restriction in Korea runs from 1 month to 2 years and is posted on the e-procurement system. Periods by violation and wider effects.',
    excerpt: 'Once restricted as an unfair business operator, a company cannot bid at any central government agency for the restriction period. Periods by violation, extension and reduction rules, KONEPS posting, the link to representatives and restrictions before contract signing.',
    content: `<div class="toc"><p>Contents</p><ol><li>How the restriction works and what triggers it</li><li>Periods by violation, extension and reduction</li><li>Effect on KONEPS bidding</li><li>FAQ</li></ol></div>
<p><strong>Under the Act on Contracts to Which the State Is a Party, a bidding eligibility restriction for an unfair business operator (부정당업자) is imposed by the head of a central government agency for 1 month to 2 years. It is posted on the e-procurement system, and for that period the company cannot bid at other central agencies either.</strong> It is a sanction separate from KONEPS (Narajangteo) bidder registration, so bidding is blocked even while the registration stays in place. The period follows a schedule by type of violation and can be extended or reduced.</p>
<p>Registration basics are covered in <a href="/en/blog/procurement-narajangteo-registration-guide">our KONEPS registration guide</a>, and name or representative changes in <a href="/en/blog/procurement-narajangteo-registration-change">our change registration guide</a>. This page focuses on periods and practical effects.</p>

<h2>How the restriction works and what triggers it</h2>
<p>The Act lists the grounds, the Enforcement Decree sets the range and the Enforcement Rule schedule sets the period for each act. The agency must notify other central agencies immediately, and they must restrict the same company. Common triggers in bidding practice are:</p>
<ol><li>agreeing bid amounts or volumes in advance, or colluding so a particular bidder wins</li><li>forging or altering bid or contract documents, or submitting false documents, including registration documents</li><li>failing to sign or perform a contract without justifiable reason</li><li>intentionally submitting an invalid bid</li><li>subcontracting in breach of the rules, such as without the ordering agency's approval</li><li>obstructing bidding, contract performance, supervision or inspection</li></ol>
<p>No restriction is imposed if the act was committed by an agent or employee and the company exercised due care and supervision to prevent it, or if the violation resulted from a natural disaster or similar unavoidable cause.</p>

<h2>Periods by violation, extension and reduction</h2>
<table><thead><tr><th>Violation</th><th>Standard period</th></tr></thead><tbody>
<tr><td>Leading collusion and winning the award</td><td>2 years</td></tr>
<tr><td>Leading collusion</td><td>1 year</td></tr>
<tr><td>Agreeing bid amounts or colluding</td><td>6 months</td></tr>
<tr><td>Winning the award with forged, altered or false documents</td><td>1 year</td></tr>
<tr><td>Submitting forged, altered or false documents</td><td>6 months</td></tr>
<tr><td>Not signing or not performing a contract</td><td>6 months</td></tr>
<tr><td>Intentionally submitting an invalid bid</td><td>6 months</td></tr>
<tr><td>Subcontracting without the ordering agency's approval</td><td>6 months</td></tr>
<tr><td>Breaching major contract conditions</td><td>3 months</td></tr>
<tr><td>Obstructing bidding, performance, supervision or inspection</td><td>3 months</td></tr>
</tbody></table>
<p>The schedule is a starting point. If a new ground arises between the date of the restriction and 6 months after it ends, the period may be extended by up to 1/2, but the total cannot exceed 2 years. Where several acts are involved, the longest standard applies. The period may also be reduced by up to 1/2 considering motive, content and frequency, and by a further 1/2 where the violation is clearly minor. The reduced period must still be at least 1 month, and bribery cannot be reduced. No restriction may be imposed once 5 years have passed since the act ended (7 years for collusion and bribery).</p>

<h2>Effect on KONEPS bidding</h2>
<p>The agency posts the company name, representative, business registration number, period and specific grounds on the e-procurement system before the period starts. Every agency checks bidders against this system, so a restriction from one agency applies to bids at all central agencies. Restrictions by local governments or public institutions under other laws also block national bids once notified or posted.</p>
<p>When a corporation is restricted, the representative in charge of the bid or contract is restricted too, and other corporations headed by that person cannot bid either. Ordering agencies must check corporate registration and licence or registration numbers to stop companies evading restrictions by changing names or representatives. If you receive a notice, check the following in order.</p>
<ol><li>Match the stated ground to an act in the schedule.</li><li>Gather evidence of due care, unavoidable causes or other reduction factors.</li><li>Review pending awards: if the restriction starts before signing, the agency cannot sign with that winner.</li><li>For long-term continuing contracts, confirm whether annual contracts may still be signed after the first contract.</li><li>Adjust bid schedules of other corporations headed by the same representative.</li></ol>
<p>Private (negotiated) contracts are in principle also unavailable during the period.</p>

<div class="faq-section"><h2>FAQ</h2>
<div class="faq-item"><p class="faq-q">Q. Is my KONEPS registration cancelled?</p><p class="faq-a">A. The rules do not cancel the registration. They bar bidding during the period and post the restriction on the e-procurement system, so bidding is blocked regardless of registration status.</p></div>
<div class="faq-item"><p class="faq-q">Q. Can we bid after changing our name or setting up a new company?</p><p class="faq-a">A. Agencies must check corporate and licence or registration numbers, and other corporations headed by a restricted representative cannot bid.</p></div>
<div class="faq-item"><p class="faq-q">Q. Can the period be shorter than the schedule?</p><p class="faq-a">A. Yes, by up to 1/2, and by a further 1/2 if clearly minor, but never below 1 month, and bribery is never reduced.</p></div>
<div class="faq-item"><p class="faq-q">Q. Is there an alternative to the restriction?</p><p class="faq-a">A. Where responsibility is minor or the restriction would prevent valid competitive bidding, a penalty surcharge may replace it. For help, see <a href="/en/services/procurement">our KONEPS registration service</a>.</p></div>
</div>

<div class="cta-block"><h3>Review your position after a restriction notice</h3><p>YouSun Administrative Agency helps organise the grounds, prepare reduction materials and check KONEPS registration details. Call 02-325-8222, weekdays 09:30~17:30 KST.</p><a href="/en/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">Request a consultation</a></div>
<p class="author-block">YouSun Administrative Agency (Chief Administrative Agent Jung Yu-sun)</p>`,
  },

  zh: {
    title: '不正当业者投标参与资格限制 — 按违规行为的限制期间与对Narajangteo投标的影响',
    category: '公共采购',
    metaTitle: '不正当业者投标参与资格限制 — 按行为的限制期间与电子采购系统公示',
    metaDescription: '韩国不正当业者投标参与资格限制期间为1个月以上2年以下，并在电子采购系统公示。限制期间内其他中央机关的投标也无法参与，期间按违规行为的类型分别确定。',
    excerpt: '被认定为不正当业者并受到投标参与资格限制后，限制期间内无法参与任何中央机关的投标。内容包括按行为的限制期间、加重与减轻标准、电子采购系统公示、与代表人的连动以及签约前受限的效果。',
    content: `<div class="toc"><p>目录</p><ol><li>限制处分的框架与对象行为</li><li>按行为的限制期间与加重·减轻标准</li><li>对Narajangteo投标的影响</li><li>常见问题</li></ol></div>
<p><strong>依据韩国《国家为当事人的合同法》，不正当业者（부정당업자）投标参与资格限制是由各中央机关首长在1个月以上2年以下范围内作出的处分。限制事实将在电子采购系统公示，限制期间内也无法参与其他中央机关的投标。</strong>这与Narajangteo（国家综合电子采购系统）投标参与资格登记是两回事，即使登记仍有效，限制期间内也无法投标。期间按行为类型的标准表确定，并可加重或减轻。</p>
<p>登记基础请参阅<a href="/zh/blog/procurement-narajangteo-registration-guide">Narajangteo登记指南</a>，商号·代表人变更请参阅<a href="/zh/blog/procurement-narajangteo-registration-change">投标参与资格变更登记</a>。本文聚焦于期间与实际影响。</p>

<h2>限制处分的框架与对象行为</h2>
<p>法律列举限制事由，施行令规定期间范围，施行规则标准表规定各行为的期间。作出限制的机关须立即通报其他中央机关，接到通报的机关也须限制同一业者。投标实务中常见的对象行为如下：</p>
<ol><li>事先协定投标价格、承接数量，或为使特定人中标而串通</li><li>伪造·变造投标或合同文件，或提交虚假文件（包括投标参与资格登记文件）</li><li>无正当理由不签订或不履行合同</li><li>故意提交无效投标</li><li>未经发包机关批准分包等违反分包限制规定</li><li>妨碍投标参与、合同履行或监督·检查</li></ol>
<p>但如果事由由代理人、经理等使用人造成，而业者已尽相当的注意与监督义务，或违规由天灾等不得已事由引起，则不予限制。</p>

<h2>按行为的限制期间与加重·减轻标准</h2>
<table><thead><tr><th>违规行为</th><th>标准限制期间</th></tr></thead><tbody>
<tr><td>主导串通并中标</td><td>2年</td></tr>
<tr><td>主导串通</td><td>1年</td></tr>
<tr><td>协定投标价格或串通</td><td>6个月</td></tr>
<tr><td>以伪造·变造·虚假文件中标</td><td>1年</td></tr>
<tr><td>提交伪造·变造·虚假文件</td><td>6个月</td></tr>
<tr><td>不签订或不履行合同</td><td>6个月</td></tr>
<tr><td>故意提交无效投标</td><td>6个月</td></tr>
<tr><td>未经发包机关批准分包</td><td>6个月</td></tr>
<tr><td>违反合同主要条件</td><td>3个月</td></tr>
<tr><td>妨碍投标、履行或监督·检查</td><td>3个月</td></tr>
</tbody></table>
<p>标准表只是起点。自限制处分之日起至限制期间结束后6个月内再次发生事由的，可在该期间的1/2范围内延长，但合计不得超过2年。多个行为同时存在时，适用其中最长的标准。反之，可考虑动机·内容·次数在1/2范围内减轻；违规程度显著轻微的，可再减轻1/2。减轻后仍须为1个月以上，行贿不得减轻。行为结束后满5年（串通·行贿为7年）的，不得再限制。</p>

<h2>对Narajangteo投标的影响</h2>
<p>作出处分的机关须在限制期间开始日之前，将商号、代表人姓名、营业执照号码、限制期间和具体事由在电子采购系统公示并公开。各机关通过该系统确认投标人是否受限，因此一个机关的限制适用于所有中央机关的投标。地方政府或公共机构依其他法令作出的限制，经通报或公示后，同样阻止参与国家投标。</p>
<p>法人受到限制时，负责该投标·合同业务的代表人也一并受限，该代表人担任代表的其他法人也不能投标。发包机关须核对法人登记号码、执照·登记号码等，防止通过变更商号或代表人规避限制。收到处分通知后，请按以下顺序检查：</p>
<ol><li>确认通知书中的事由对应标准表中的哪一行为。</li><li>收集已尽注意·监督义务或存在不得已事由的资料及减轻事由资料。</li><li>检查进行中的中标案件：签约前受限的，机关不得与该中标人签约。</li><li>长期继续合同在首次签约后受限的，确认年度合同能否继续签订。</li><li>同时调整同一代表人担任代表的其他法人的投标日程。</li></ol>
<p>限制期间内原则上也不能签订随意合同。</p>

<div class="faq-section"><h2>常见问题</h2>
<div class="faq-item"><p class="faq-q">Q. 受到限制后Narajangteo登记会被撤销吗？</p><p class="faq-a">A. 法令规定的不是撤销登记，而是限制期间内不得投标并在电子采购系统公示。无论登记状态如何，限制期间内都无法投标。</p></div>
<div class="faq-item"><p class="faq-q">Q. 更改商号或新设法人后能投标吗？</p><p class="faq-a">A. 发包机关须核对法人登记号码和执照·登记号码，受限代表人担任代表的其他法人也不能投标。</p></div>
<div class="faq-item"><p class="faq-q">Q. 限制期间能比标准表短吗？</p><p class="faq-a">A. 可在1/2范围内减轻，显著轻微时可再减轻1/2，但不得少于1个月，行贿不得减轻。</p></div>
<div class="faq-item"><p class="faq-q">Q. 有替代限制的处分吗？</p><p class="faq-a">A. 责任轻微或限制会导致有效竞争投标无法成立时，可用课征金代替。相关协助请参阅<a href="/zh/services/procurement">Narajangteo登记服务</a>。</p></div>
</div>

<div class="cta-block"><h3>收到限制通知后，请尽早检查</h3><p>YouSun Administrative Agency 协助整理处分事由、准备减轻事由资料并检查Narajangteo登记信息。电话 02-325-8222，工作日 09:30~17:30 KST。</p><a href="/zh/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">申请咨询</a></div>
<p class="author-block">YouSun Administrative Agency（代表行政士 Jung Yu-sun）</p>`,
  },

  ja: {
    title: '不正当業者の入札参加資格制限 — 違反行為別の制限期間とナラジャント入札への影響',
    category: '公共調達',
    metaTitle: '不正当業者の入札参加資格制限 — 行為別の制限期間と電子調達システム掲載',
    metaDescription: '韓国の不正当業者に対する入札参加資格制限は1か月以上2年以下で、電子調達システムに掲載されます。制限期間中は他の中央官庁の入札にも参加できず、期間は違反類型ごとに定まります。',
    excerpt: '不正当業者として入札参加資格制限を受けると、制限期間中はどの中央官庁の入札にも参加できません。行為別の制限期間、加重・減軽の基準、電子調達システムへの掲載、代表者への連動、契約締結前の制限の効果を扱います。',
    content: `<div class="toc"><p>目次</p><ol><li>制限処分の枠組みと対象行為</li><li>行為別の制限期間と加重・減軽基準</li><li>ナラジャント入札への影響</li><li>よくある質問</li></ol></div>
<p><strong>韓国の「国を当事者とする契約に関する法律」に基づく不正当業者（부정당업자）の入札参加資格制限は、各中央官庁の長が1か月以上2年以下の範囲で行う処分です。制限の事実は電子調達システムに掲載され、制限期間中は他の中央官庁の入札にも参加できなくなります。</strong>ナラジャント（国家総合電子調達システム）の入札参加資格登録とは別の制裁であり、登録が残っていても制限期間中は入札できません。期間は行為類型別の基準表で決まり、動機や程度により延長・短縮されます。</p>
<p>登録の基本は<a href="/ja/blog/procurement-narajangteo-registration-guide">ナラジャント登録ガイド</a>、商号・代表者の変更は<a href="/ja/blog/procurement-narajangteo-registration-change">入札参加資格の変更登録</a>をご覧ください。ここでは期間と実際の影響に絞ります。</p>

<h2>制限処分の枠組みと対象行為</h2>
<p>法律が制限事由を列挙し、施行令が期間の範囲を、施行規則の基準表が行為別の期間を定めます。制限した官庁は直ちに他の中央官庁の長に通報し、通報を受けた官庁も同じ業者の入札参加資格を制限しなければなりません。入札実務でよく問題になる対象行為は次のとおりです。</p>
<ol><li>入札価格や受注量を事前に協定し、または特定の者の落札のために談合する行為</li><li>入札・契約書類を偽造・変造し、または虚偽書類を提出する行為（入札参加資格登録書類を含む）</li><li>正当な理由なく契約を締結せず、または履行しない行為</li><li>故意に無効の入札をする行為</li><li>発注機関の承認なく下請けに出すなど下請け制限規定に違反する行為</li><li>入札参加、契約履行、監督・検査を妨害する行為</li></ol>
<p>ただし、代理人・支配人など使用人の行為で事由が生じても、業者がそれを防ぐために相当の注意と監督を怠らなかった場合や、天災などやむを得ない事由による違反の場合は制限しません。</p>

<h2>行為別の制限期間と加重・減軽基準</h2>
<table><thead><tr><th>違反行為</th><th>基準制限期間</th></tr></thead><tbody>
<tr><td>談合を主導して落札した場合</td><td>2年</td></tr>
<tr><td>談合を主導した場合</td><td>1年</td></tr>
<tr><td>入札価格等を協定し、または談合した場合</td><td>6か月</td></tr>
<tr><td>偽造・変造・虚偽書類で落札した場合</td><td>1年</td></tr>
<tr><td>偽造・変造・虚偽書類を提出した場合</td><td>6か月</td></tr>
<tr><td>契約を締結または履行しなかった場合</td><td>6か月</td></tr>
<tr><td>故意に無効の入札をした場合</td><td>6か月</td></tr>
<tr><td>発注機関の承認なく下請けに出した場合</td><td>6か月</td></tr>
<tr><td>契約上の主要条件に違反した場合</td><td>3か月</td></tr>
<tr><td>入札・履行または監督・検査を妨害した場合</td><td>3か月</td></tr>
</tbody></table>
<p>基準表の期間は出発点です。制限処分日から制限期間終了後6か月が経過するまでに再び事由が生じた場合、その期間の1/2の範囲で延長できますが、合計は2年を超えられません。複数の行為が問題になる場合は、最も長い基準に従います。逆に、動機・内容・回数を考慮して1/2の範囲で短縮でき、違反の程度が著しく軽微なら、さらに1/2の範囲で短縮できます。短縮後も1か月以上でなければならず、贈賄は短縮できません。行為の終了から5年（談合・贈賄は7年）を過ぎると制限できません。</p>

<h2>ナラジャント入札への影響</h2>
<p>処分をした官庁は、商号、代表者氏名、事業者登録番号、制限期間と具体的な事由を、制限期間の開始日までに電子調達システムに掲載し公開します。各官庁はこのシステムで入札者の制限の有無を確認するため、一つの官庁で受けた制限がすべての中央官庁の入札にそのまま適用されます。地方自治体や公共機関が他の法令に基づいて行った制限も、通報または掲載されれば国の入札で同様に参加できません。</p>
<p>法人が制限を受けると、その入札・契約業務を担当した代表者も併せて制限され、その代表者が代表を務める他の法人も入札に参加できません。発注機関は、商号や代表者の変更による制限逃れを防ぐため、法人登録番号や免許・登録番号などを確認しなければなりません。処分の通知を受けたら、次の順序で点検してください。</p>
<ol><li>通知書の事由が基準表のどの行為に当たるかを確認します。</li><li>注意・監督を尽くしたこと、やむを得ない事由、減軽事由を示す資料を集めます。</li><li>進行中の落札案件を点検します。契約締結前に制限を受けると、その落札者とは契約できません。</li><li>長期継続契約では、最初の契約後に制限を受けても年次契約を締結できるか確認します。</li><li>同じ代表者が代表を務める他の法人の入札日程も調整します。</li></ol>
<p>制限期間中は随意契約も原則として締結できません。</p>

<div class="faq-section"><h2>よくある質問</h2>
<div class="faq-item"><p class="faq-q">Q. 制限を受けるとナラジャントの登録は取り消されますか。</p><p class="faq-a">A. 法令が定めるのは登録の取消しではなく、制限期間中の入札参加の禁止と電子調達システムへの掲載です。登録の状態に関係なく、制限期間中は入札できません。</p></div>
<div class="faq-item"><p class="faq-q">Q. 商号を変えたり新しい法人を設立したりすれば入札できますか。</p><p class="faq-a">A. 発注機関は法人登録番号や免許・登録番号で確認しなければならず、制限された代表者が代表を務める他の法人も入札できません。</p></div>
<div class="faq-item"><p class="faq-q">Q. 制限期間が基準表より短くなることはありますか。</p><p class="faq-a">A. 1/2の範囲で短縮でき、著しく軽微ならさらに1/2短縮できますが、1か月未満にはならず、贈賄は短縮されません。</p></div>
<div class="faq-item"><p class="faq-q">Q. 制限の代わりになる処分はありますか。</p><p class="faq-a">A. 責任が軽微な場合や、制限により有効な競争入札が成立しない場合は、課徴金で代えることがあります。ご相談は<a href="/ja/services/procurement">ナラジャント登録サービス</a>をご覧ください。</p></div>
</div>

<div class="cta-block"><h3>制限の通知を受けたら早めに点検を</h3><p>YouSun Administrative Agency が処分事由の整理、減軽事由の資料準備、ナラジャント登録情報の点検をお手伝いします。電話 02-325-8222、平日 09:30~17:30 KST。</p><a href="/ja/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">相談を申し込む</a></div>
<p class="author-block">YouSun Administrative Agency（代表行政士 Jung Yu-sun）</p>`,
  },

  wrongTerms: ['부정당업자 등록', '입찰참가자격 허가', '나라장터 허가', 'bidding license', 'bidding permit', '投标许可', '不正当业者登记', '入札許可', '不正当業者登録'],
}

export default entry
