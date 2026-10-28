// 원고 은행 — inhega-daily (INHEGA-BLOG-RESTART, seo3958)
// 주제: nonprofit(비영리사단법인) / 세부주제: procedure(신청 절차) — 사단법인 해산·청산 절차
//
// 겹침 검사(ko-titles.txt·blog-i18n.ts 대조):
//   nonprofit-association-permit·nonprofit-corporation-establishment-guide(설립허가 절차) / nonprofit-articles-drafting(정관 작성)
//   nonprofit-fix(설립허가 취소 사유·검사감독·과태료 — 해산사유 조문 1문단 언급뿐) / nonprofit-tax-reporting(세무·결산)
//   nonprofit-association-vs-foundation(사단·재단 비교, 재단 잔여재산 FAQ 1개) / nonprofit-select(대행 선택)
//   → 해산 결의·청산인·해산등기·해산신고·채권신고 공고·변제·잔여재산·청산종결 "절차"를 다룬 글은 없음. 신규.
//   설립허가 취소 사유는 nonprofit-fix 로 링크만 하고 반복하지 않았다.
//
// 법령 대조(law.go.kr DRF, OC=visionlaw, 2026-10-24 조회, lawcache/):
//   민법  MST 284415, 2026. 3. 17. 시행
//     제71조(총회 소집 1주간 전 통지)·제72조·제73조 제2항(서면·대리 결의권)·제75조(일반 결의방법)
//     제77조(해산사유)·제78조(해산결의 총사원 4분의 3, 정관 우선)·제79조(파산신청)·제80조(잔여재산 귀속·주무관청 허가·국고)
//     제81조(청산법인)·제82조(청산인=이사, 정관·총회로 달리)·제83조(법원 선임)·제85조 제1항(해산등기 취임 후 3주일)
//     제86조(해산신고 취임 후 3주간)·제87조(청산인 직무)·제88조(채권신고 공고 취임 2월 내 3회 이상, 기간 2월 이상, 제외 표시, 등기사항 공고 방법)
//     제89조(알고 있는 채권자 최고·제외 불가)·제90조(신고기간 내 변제 금지)·제91조(기한 전 변제·감정인)·제92조(제외된 채권)
//     제93조(청산 중 파산)·제94조(청산종결 등기·신고 3주간)·제95조(법원 검사·감독)·제97조(과태료 사유 — 금액은 화면에 쓰지 않음)
//   법무부 소관 비영리법인의 설립 및 감독에 관한 규칙  MST 193053, 법무부령 제898호, 2017. 3. 30. 시행
//     제10조(해산신고: 해산등기 후 지체 없이, 재산목록·잔여재산 처분방법 개요·정관·총회 회의록)
//     제11조(잔여재산 처분허가 신청서)·제12조(청산종결 신고: 등기 후 신고서 제출)
//   교차 확인: 보건복지부 및 질병관리청 소관 규칙(MST 225395) 제10조·제12조, 문화체육관광부 및 국가유산청 소관 규칙(MST 262753) 제10조·제12조
//     — 모두 "해산등기를 마친 후 지체 없이" 해산신고, 청산종결은 등기 후 신고서 제출. 서식 번호는 부처마다 다르다(법무부 제5·7호, 복지부·문체부 제4·6호).
// 해산 '허가' 없음 확인: 민법 해산 관련 조문(제77~96조)에 해산에 대한 허가 규정 없음, 등기(제85조)·신고(제86조)뿐.
//   예외적으로 허가가 필요한 것은 정관에 귀속권리자 지정이 없을 때의 잔여재산 처분(제80조 제2항) 하나 — 본문에 구분해 썼다.
// 확인 못 한 점: 해산등기·청산종결 등기의 등기소 신청 서류·절차(상업등기·법인등기 규칙)는 확인하지 않아 쓰지 않았다.
//   채권신고 공고의 구체적 매체("법원의 등기사항의 공고와 동일한 방법")는 민법 문언만 옮겼다. 세무상 청산 신고는 다루지 않았다.
// 대조표: crosscheck/nonprofit-dissolution-liquidation-procedure.md

const entry = {
  topic: 'nonprofit',
  angle: 'procedure',
  slug: 'nonprofit-dissolution-liquidation-procedure',
  kind: 'seo3958',
  keyword: '사단법인 해산 절차',
  pexelsId: 8473782,
  coverImage: '',
  relatedServices: [
    { title: '비영리사단법인 설립 — 사단법인 설립 허가와 정관 작성', href: '/services/nonprofit' },
  ],

  ko: {
    title: '사단법인 해산 절차와 청산 — 총회 결의·해산등기·채권신고 공고·청산종결까지',
    category: '법인설립',
    metaTitle: '사단법인 해산 절차 — 총회 결의·해산등기·채권신고 공고·청산종결 신고',
    metaDescription: '사단법인 해산은 허가가 아니라 등기와 주무관청 신고로 진행됩니다. 총사원 4분의 3 해산 결의, 청산인 취임 후 3주 내 해산등기·신고, 채권신고 공고, 잔여재산 귀속, 청산종결 등기·신고를 순서대로 정리했습니다.',
    excerpt: '비영리 사단법인을 정리하려면 해산 결의부터 청산종결 신고까지 정해진 순서와 기한을 지켜야 합니다. 해산 사유, 청산인, 해산등기·해산신고 기한, 채권신고 공고 횟수와 기간, 잔여재산 귀속, 청산종결 등기·신고를 한 번에 정리했습니다.',
    content: `<div class="toc"><p>목차</p><ol><li>사단법인 해산 사유와 총회 해산 결의</li><li>해산 후 청산 절차 순서</li><li>해산·청산 기한 한눈에 보기</li><li>잔여재산 귀속과 청산종결</li><li>자주 묻는 질문 (FAQ)</li></ol></div>
<p><strong>사단법인 해산은 주무관청의 허가를 받는 절차가 아닙니다.</strong> 해산 사유가 생기면 청산인이 취임 후 3주 안에 해산등기를 하고 같은 기간 안에 주무관청에 해산신고를 한 뒤, 채권자에게 공고로 채권신고를 받아 채무를 정리하고, 남은 재산을 넘긴 다음 청산종결 후 3주 안에 등기와 신고를 마치면 끝납니다.<!-- 근거: 민법 제85조 제1항, 제86조 제1항, 제88조, 제94조 --></p>
<p>설립 단계는 <a href="/blog/nonprofit-association-permit">비영리사단법인 설립 허가 절차</a>에서 다루었으므로, 이 글은 법인을 정리하는 단계만 설명합니다.</p>

<h2>사단법인 해산 사유와 총회 해산 결의</h2>
<p>「민법」은 모든 법인에 공통된 해산 사유로 존립기간의 만료, 법인 목적의 달성 또는 달성 불능, 그 밖에 정관에서 정한 해산 사유의 발생, 파산, 설립허가의 취소를 듭니다. 사단법인은 여기에 더해 사원이 없게 된 때와 사원총회의 결의로도 해산합니다.<!-- 근거: 민법 제77조 제1항·제2항 --> 설립허가가 어떤 경우에 취소되는지는 <a href="/blog/nonprofit-fix">사단법인 설립허가 취소 사유와 주무관청 감독</a>에서 정리했습니다.</p>
<p>총회에서 해산을 결의하려면 <strong>총사원 4분의 3 이상의 동의</strong>가 있어야 합니다. 출석 사원이 아니라 전체 사원이 기준이며, 정관에 다른 규정이 있으면 정관을 따릅니다.<!-- 근거: 민법 제78조 --> 일반 결의(사원 과반수 출석, 출석 사원 결의권의 과반수)보다 요건이 무겁습니다.<!-- 근거: 민법 제75조 제1항 --> 총회는 1주간 전에 회의 목적사항을 적은 통지를 보내 소집하고, 정관에 달리 정하지 않았다면 통지한 사항만 결의할 수 있습니다. 사원은 서면이나 대리인으로 결의권을 행사할 수 있습니다.<!-- 근거: 민법 제71조, 제72조, 제73조 제2항·제3항 --> 정관 해산 조항을 정비하는 방법은 <a href="/blog/nonprofit-articles-drafting">사단법인 정관 작성 방법</a>을 참고하십시오.</p>
<p>법인이 채무를 다 갚지 못하게 된 때에는 이사가 지체 없이 파산신청을 해야 합니다. 파산으로 해산하는 경우는 아래의 해산등기·해산신고 규정이 적용되지 않고 파산 절차로 진행됩니다.<!-- 근거: 민법 제79조, 제82조, 제85조 제1항, 제86조 제1항 --></p>

<h2>해산 후 청산 절차 순서</h2>
<p>해산한 법인은 청산의 목적 범위 안에서만 권리가 있고 의무를 부담합니다. 청산 절차는 다음 순서로 진행합니다.<!-- 근거: 민법 제81조 --></p>
<ol>
<li><strong>청산인 확정</strong> — 파산의 경우가 아니면 이사가 청산인이 되고, 정관이나 총회 결의로 달리 정할 수 있습니다. 청산인이 될 사람이 없는 등의 경우에는 법원이 선임할 수 있습니다.<!-- 근거: 민법 제82조, 제83조 --></li>
<li><strong>해산등기</strong> — 청산인은 취임 후 3주 안에 해산 사유와 해산 연월일, 청산인의 성명과 주소, 대표권을 제한한 경우 그 제한을 주사무소 소재지에서 등기합니다.<!-- 근거: 민법 제85조 제1항 --></li>
<li><strong>해산신고</strong> — 같은 사항을 취임 후 3주 안에 주무관청에 신고합니다. 주무관청별 규칙은 해산등기를 마친 뒤 지체 없이 해산 신고서를 내도록 하고, 법무부 소관 규칙은 해산 당시의 재산목록, 잔여재산 처분방법의 개요, 해산 당시의 정관, 총회 결의로 해산한 경우 그 총회 회의록을 첨부하게 합니다.<!-- 근거: 민법 제86조 제1항, 법무부 소관 비영리법인의 설립 및 감독에 관한 규칙 제10조 제1항 --></li>
<li><strong>채권신고 공고와 최고</strong> — 취임한 날부터 2개월 안에 3회 이상 공고해 채권자에게 2개월 이상의 기간을 정해 채권신고를 하도록 알립니다. 공고에는 기간 안에 신고하지 않으면 청산에서 제외된다는 내용을 표시하고, 알고 있는 채권자에게는 따로 신고를 최고합니다.<!-- 근거: 민법 제88조 제1항·제2항·제3항, 제89조 --></li>
<li><strong>채무 변제</strong> — 채권신고 기간 안에는 변제하지 못합니다. 재산이 채무를 갚기에 부족한 것이 분명해지면 지체 없이 파산선고를 신청하고 공고합니다.<!-- 근거: 민법 제90조, 제93조 제1항 --></li>
<li><strong>잔여재산 인도와 청산종결 등기·신고</strong> — 남은 재산을 귀속권리자에게 넘기고, 청산이 끝나면 3주 안에 등기하고 주무관청에 신고합니다.<!-- 근거: 민법 제87조 제1항, 제94조 --></li>
</ol>

<h2>해산·청산 기한 한눈에 보기</h2>
<table><thead><tr><th>단계</th><th>기한</th><th>어디에</th></tr></thead><tbody>
<tr><td>해산등기</td><td>청산인 취임 후 3주 이내<!-- 근거: 민법 제85조 제1항 --></td><td>주사무소 소재지</td></tr>
<tr><td>해산신고</td><td>청산인 취임 후 3주 이내, 해산등기 후 지체 없이<!-- 근거: 민법 제86조 제1항, 법무부 소관 규칙 제10조 제1항 --></td><td>주무관청</td></tr>
<tr><td>채권신고 공고</td><td>취임 후 2개월 이내 3회 이상<!-- 근거: 민법 제88조 제1항 --></td><td>법원의 등기사항 공고와 같은 방법</td></tr>
<tr><td>채권신고 기간</td><td>2개월 이상<!-- 근거: 민법 제88조 제1항 --></td><td>채권자가 청산인에게</td></tr>
<tr><td>청산종결 등기·신고</td><td>청산종결 후 3주 이내<!-- 근거: 민법 제94조, 법무부 소관 규칙 제12조 --></td><td>주사무소 소재지·주무관청</td></tr>
</tbody></table>
<p>법인의 해산과 청산은 법원이 검사·감독합니다. 청산인이 등기를 게을리하거나, 공고를 하지 않거나 부정한 공고를 하거나, 주무관청에 사실 아닌 신고를 하거나, 채권신고 기간 안에 변제하면 과태료 대상이 됩니다.<!-- 근거: 민법 제95조, 제97조 제1호·제4호·제5호·제7호 --> 서식 번호와 첨부서류는 주무관청마다 정한 규칙이 달라 담당 부처의 규칙을 확인해야 합니다.</p>

<h2>잔여재산 귀속과 청산종결</h2>
<p>해산한 법인의 재산은 정관으로 지정한 자에게 귀속합니다. 정관에 귀속권리자나 그 지정 방법이 없으면 이사 또는 청산인이 <strong>주무관청의 허가</strong>를 받아 법인 목적과 비슷한 목적을 위해 재산을 처분할 수 있고, 사단법인은 총회 결의도 있어야 합니다. 이렇게 처분되지 않은 재산은 국고에 귀속합니다.<!-- 근거: 민법 제80조 제1항·제2항·제3항 --> 해산 절차에서 허가가 필요한 곳은 이 잔여재산 처분 하나입니다.<!-- 근거: 법무부 소관 비영리법인의 설립 및 감독에 관한 규칙 제11조 --></p>
<p>청산이 끝나면 청산인이 청산종결을 등기하고, 법무부 소관 규칙 기준으로는 등기 후 청산종결 신고서를 주무관청에 제출합니다.<!-- 근거: 민법 제94조, 법무부 소관 비영리법인의 설립 및 감독에 관한 규칙 제12조 --> 해산 전후의 결산과 세무 신고는 <a href="/blog/nonprofit-tax-reporting">비영리사단법인 세무 신고와 결산 보고</a>를 함께 보십시오.</p>

<div class="faq-section"><h2>자주 묻는 질문 (FAQ)</h2>
<div class="faq-item"><p class="faq-q">Q. 사단법인을 해산할 때도 주무관청 허가가 필요한가요?</p><p class="faq-a">A. 해산 자체에는 허가 절차가 없고 해산등기와 주무관청 해산신고를 합니다. 정관에 잔여재산 귀속권리자가 없을 때 재산을 처분하는 경우에만 주무관청의 허가를 받습니다.<!-- 근거: 민법 제80조 제2항, 제85조, 제86조 --></p></div>
<div class="faq-item"><p class="faq-q">Q. 총회 해산 결의에는 몇 명이 찬성해야 하나요?</p><p class="faq-a">A. 총사원 4분의 3 이상의 동의가 필요하고, 정관에 다른 규정이 있으면 그 규정을 따릅니다.<!-- 근거: 민법 제78조 --></p></div>
<div class="faq-item"><p class="faq-q">Q. 채권신고 공고는 언제, 몇 번 하나요?</p><p class="faq-a">A. 청산인이 취임한 날부터 2개월 안에 3회 이상 공고하고, 신고 기간은 2개월 이상으로 정해야 합니다.<!-- 근거: 민법 제88조 제1항 --></p></div>
<div class="faq-item"><p class="faq-q">Q. 기간 안에 신고하지 않은 채권자는 어떻게 되나요?</p><p class="faq-a">A. 청산에서 제외되며, 채무를 모두 갚은 뒤 귀속권리자에게 넘기지 않은 재산에 대해서만 변제를 청구할 수 있습니다. 다만 청산인이 알고 있는 채권자는 제외할 수 없습니다.<!-- 근거: 민법 제89조, 제92조 --></p></div>
</div>

<div class="cta-block"><h3>사단법인 해산·청산 서류 준비가 필요하신가요?</h3><p>유선행정사사무소는 <a href="/services/nonprofit">비영리사단법인 업무</a>로 해산신고서, 잔여재산 처분허가 신청서, 청산종결 신고서 등 주무관청 제출 서류의 작성과 제출을 돕습니다. 전화 02-363-2251, 평일 09:30~17:30 KST.</p><a href="/contact?utm_source=blog&utm_medium=cta&utm_campaign=nonprofit-dissolution-liquidation-procedure">상담 신청하기</a></div>
<p class="author-block">유선행정사사무소 (대표 행정사 정유선)<!-- 근거: 민법, 법무부 소관 비영리법인의 설립 및 감독에 관한 규칙 --></p>`,
  },

  en: {
    title: 'Korean Nonprofit Association Dissolution Procedure — General Meeting, Registration, Creditor Notice and Liquidation',
    category: 'Corporate Formation',
    metaTitle: 'Nonprofit Association Dissolution Procedure in Korea — Liquidation Steps',
    metaDescription: 'Dissolving a Korean nonprofit association requires registration and a report to the competent ministry, not a permit. Steps, deadlines and creditor notices.',
    excerpt: 'Closing a nonprofit incorporated association in Korea follows a fixed order: dissolution resolution, liquidator, dissolution registration and report, creditor notices, distribution of remaining property, and the completion registration and report.',
    content: `<div class="toc"><p>Contents</p><ol><li>Grounds for dissolution and the general meeting resolution</li><li>Liquidation steps after dissolution</li><li>Deadlines at a glance</li><li>Remaining property and completion of liquidation</li><li>FAQ</li></ol></div>
<p><strong>Dissolving an incorporated association under the Korean Civil Act does not require a permit from the competent ministry.</strong> Once a ground for dissolution arises, the liquidator registers the dissolution within 3 weeks of taking office and reports it to the competent ministry within the same period, calls for creditor claims by public notice, settles debts, hands over the remaining property, and registers and reports the completion of liquidation within 3 weeks.</p>
<p>For the establishment stage, see our <a href="/en/blog/nonprofit-corporation-establishment-guide">nonprofit corporation establishment guide</a>.</p>

<h2>Grounds for dissolution and the general meeting resolution</h2>
<p>Under the Civil Act, any corporation dissolves on expiry of its duration, achievement or impossibility of its purpose, any other ground set in the articles of incorporation, bankruptcy, or revocation of its establishment permit. An incorporated association also dissolves when it has no members left or by resolution of the general meeting.</p>
<p>A dissolution resolution needs the consent of <strong>at least 3/4 of all members</strong> — all members, not only those present — unless the articles provide otherwise. This is stricter than an ordinary resolution (a majority of members present and a majority of their votes). The meeting is convened by a notice stating the agenda sent 1 week in advance, and unless the articles say otherwise only the notified items can be resolved. Members may vote in writing or by proxy. For drafting dissolution clauses, see <a href="/en/blog/nonprofit-corporation-articles-and-approval-guide">articles of incorporation and approval</a>.</p>
<p>If the corporation can no longer pay its debts in full, the directors must file for bankruptcy without delay. Dissolution by bankruptcy follows bankruptcy proceedings, not the registration and report steps below.</p>

<h2>Liquidation steps after dissolution</h2>
<p>A dissolved corporation has rights and duties only within the scope of liquidation. The steps are:</p>
<ol>
<li><strong>Liquidator</strong> — except in bankruptcy, the directors become liquidators unless the articles or a general meeting resolution decide otherwise. If no one can serve, the court may appoint one.</li>
<li><strong>Dissolution registration</strong> — within 3 weeks of taking office, the liquidator registers, at the location of the principal office, the ground and date of dissolution, the liquidator's name and address, and any limit on the liquidator's power of representation.</li>
<li><strong>Dissolution report</strong> — the same items are reported to the competent ministry within 3 weeks of taking office. Ministry rules require the report to be filed without delay after the registration; under the Ministry of Justice rule it is accompanied by the property inventory at dissolution, an outline of how the remaining property will be disposed of, the articles at dissolution, and the minutes of the general meeting if it resolved the dissolution.</li>
<li><strong>Creditor notice</strong> — within 2 months of taking office, publish a notice at least 3 times asking creditors to file claims within a period of at least 2 months, stating that claims not filed in time will be excluded from liquidation. Known creditors must be notified individually.</li>
<li><strong>Payment of debts</strong> — debts may not be paid during the claim period. If the assets are clearly insufficient, the liquidator must file for bankruptcy without delay and publish this.</li>
<li><strong>Remaining property and completion</strong> — hand over the remaining property and, once liquidation is complete, register and report the completion within 3 weeks.</li>
</ol>

<h2>Deadlines at a glance</h2>
<table><thead><tr><th>Step</th><th>Deadline</th><th>Where</th></tr></thead><tbody>
<tr><td>Dissolution registration</td><td>Within 3 weeks of the liquidator taking office</td><td>Location of the principal office</td></tr>
<tr><td>Dissolution report</td><td>Within 3 weeks of taking office; without delay after registration</td><td>Competent ministry</td></tr>
<tr><td>Creditor notice</td><td>At least 3 times within 2 months of taking office</td><td>Same method as court notices of registered matters</td></tr>
<tr><td>Claim period</td><td>At least 2 months</td><td>Creditors to the liquidator</td></tr>
<tr><td>Completion registration and report</td><td>Within 3 weeks of completion</td><td>Principal office location and competent ministry</td></tr>
</tbody></table>
<p>The court inspects and supervises dissolution and liquidation. A liquidator who neglects registration, fails to publish or publishes an improper notice, files a false report, or pays debts during the claim period is subject to an administrative fine. Forms and attachments vary by ministry, so check the rule of your competent ministry.</p>

<h2>Remaining property and completion of liquidation</h2>
<p>The property of a dissolved corporation goes to the person designated in the articles. If the articles name no one and set no method, the directors or liquidators may dispose of it for a similar purpose with <strong>the permission of the competent ministry</strong>, and an incorporated association also needs a general meeting resolution. Property not disposed of this way vests in the national treasury. After completion, the liquidator registers it and, under the Ministry of Justice rule, files a completion report with the ministry after the registration.</p>

<div class="faq-section"><h2>FAQ</h2>
<div class="faq-item"><p class="faq-q">Q. Does dissolution itself need ministry approval?</p><p class="faq-a">A. No. Dissolution is registered and reported. Permission is needed only to dispose of remaining property when the articles name no recipient.</p></div>
<div class="faq-item"><p class="faq-q">Q. How many members must agree to dissolve?</p><p class="faq-a">A. At least 3/4 of all members, unless the articles provide otherwise.</p></div>
<div class="faq-item"><p class="faq-q">Q. When and how often is the creditor notice published?</p><p class="faq-a">A. At least 3 times within 2 months of the liquidator taking office, with a claim period of at least 2 months.</p></div>
<div class="faq-item"><p class="faq-q">Q. What happens to creditors who do not file in time?</p><p class="faq-a">A. They are excluded from liquidation and can claim only against property not yet handed over after all debts are paid. Known creditors cannot be excluded.</p></div>
</div>

<div class="cta-block"><h3>Need help with dissolution and liquidation filings?</h3><p>Yuseon Administrative Agent Office prepares and submits ministry filings for <a href="/en/services/nonprofit">nonprofit associations</a>, including dissolution reports, applications for permission to dispose of remaining property, and completion reports. Call 02-363-2251, weekdays 09:30~17:30 KST.</p><a href="/en/contact?utm_source=blog&utm_medium=cta&utm_campaign=nonprofit-dissolution-liquidation-procedure">Request a consultation</a></div>
<p class="author-block">Yuseon Administrative Agent Office (Chief Administrative Agent Jeong Yuseon)</p>`,
  },

  zh: {
    title: '韩国社团法人解散程序与清算 — 总会决议、解散登记、债权申报公告、清算终结',
    category: '法人设立',
    metaTitle: '韩国社团法人解散程序 — 总会决议·解散登记·清算终结申报',
    metaDescription: '韩国非营利社团法人的解散不是向主管机关申请许可，而是办理登记并向主管机关申报。本文按顺序说明解散决议、清算人、解散登记与申报期限、债权申报公告、剩余财产归属及清算终结登记与申报。',
    excerpt: '韩国非营利社团法人解散须按固定顺序和期限办理：解散决议、清算人、解散登记与申报、债权申报公告、剩余财产归属、清算终结登记与申报。',
    content: `<div class="toc"><p>目录</p><ol><li>解散事由与总会解散决议</li><li>解散后的清算程序</li><li>解散·清算期限一览</li><li>剩余财产归属与清算终结</li><li>常见问题</li></ol></div>
<p><strong>根据韩国《民法》，社团法人解散无需取得主管机关的许可。</strong>出现解散事由后，清算人应在就任后3周内办理解散登记，并在同一期间内向主管机关申报解散；之后通过公告催告债权人申报债权、清偿债务、移交剩余财产，清算终结后3周内办理登记并申报。</p>
<p>设立阶段请参阅<a href="/zh/blog/nonprofit-corporation-establishment-guide">非营利社团法人设立指南</a>。</p>

<h2>解散事由与总会解散决议</h2>
<p>《民法》规定，所有法人因存续期间届满、目的达成或无法达成、章程规定的其他解散事由、破产或设立许可被撤销而解散。社团法人还因社员不复存在或社员总会决议而解散。</p>
<p>总会作出解散决议须经<strong>全体社员3/4以上同意</strong>，以全体社员而非出席社员为准；章程另有规定的从其规定。这比一般决议（过半数社员出席、出席社员表决权过半数）要求更严。总会须提前1周发出载明会议目的事项的通知，除章程另有规定外，只能就通知事项作出决议。社员可以书面或委托代理人行使表决权。章程条款可参阅<a href="/zh/blog/nonprofit-corporation-articles-and-approval-guide">章程制定与许可指南</a>。</p>
<p>法人无法清偿全部债务时，理事应立即申请破产。因破产而解散的，按破产程序进行，不适用下列解散登记与申报。</p>

<h2>解散后的清算程序</h2>
<p>解散后的法人仅在清算目的范围内享有权利、承担义务。程序如下：</p>
<ol>
<li><strong>确定清算人</strong>：除破产外由理事担任清算人，章程或总会决议另有规定的除外。无人可担任等情形下，法院可以选任。</li>
<li><strong>解散登记</strong>：清算人就任后3周内，在主事务所所在地登记解散事由和日期、清算人姓名和住址，以及对代表权的限制（如有）。</li>
<li><strong>解散申报</strong>：就任后3周内向主管机关申报同一事项。各部门规则要求在解散登记后立即提交申报书；法务部规则要求附上解散时的财产目录、剩余财产处分方法概要、解散时的章程，以及决议解散的总会会议记录。</li>
<li><strong>债权申报公告与催告</strong>：就任之日起2个月内公告3次以上，催告债权人在不少于2个月的期间内申报债权，并注明逾期未申报将被排除在清算之外；对已知债权人须分别催告。</li>
<li><strong>清偿债务</strong>：申报期间内不得清偿。财产明显不足以清偿债务时，应立即申请破产宣告并公告。</li>
<li><strong>移交剩余财产与清算终结</strong>：将剩余财产移交归属权利人，清算终结后3周内登记并向主管机关申报。</li>
</ol>

<h2>解散·清算期限一览</h2>
<table><thead><tr><th>步骤</th><th>期限</th><th>办理处</th></tr></thead><tbody>
<tr><td>解散登记</td><td>清算人就任后3周内</td><td>主事务所所在地</td></tr>
<tr><td>解散申报</td><td>就任后3周内，登记后立即</td><td>主管机关</td></tr>
<tr><td>债权申报公告</td><td>就任后2个月内3次以上</td><td>与法院登记事项公告相同的方式</td></tr>
<tr><td>债权申报期间</td><td>2个月以上</td><td>债权人向清算人申报</td></tr>
<tr><td>清算终结登记·申报</td><td>清算终结后3周内</td><td>主事务所所在地·主管机关</td></tr>
</tbody></table>
<p>法人的解散和清算由法院检查、监督。清算人怠于登记、未公告或作不实公告、向主管机关作不实申报、在申报期间内清偿债务的，将被处以罚款（过怠金）。各主管部门规则的表格和附件不同，请确认所属部门的规则。</p>

<h2>剩余财产归属与清算终结</h2>
<p>解散法人的财产归属于章程指定的人。章程未指定归属权利人或指定方法时，理事或清算人可<strong>经主管机关许可</strong>，为与法人目的类似的目的处分财产；社团法人还须经总会决议。未如此处分的财产归属国库。清算终结后，清算人办理登记；按法务部规则，登记后向主管机关提交清算终结申报书。</p>

<div class="faq-section"><h2>常见问题</h2>
<div class="faq-item"><p class="faq-q">Q. 解散本身需要主管机关批准吗？</p><p class="faq-a">A. 不需要。解散通过登记和申报办理。只有章程未指定归属权利人而处分剩余财产时，才需取得主管机关的许可。</p></div>
<div class="faq-item"><p class="faq-q">Q. 解散决议需要多少社员同意？</p><p class="faq-a">A. 全体社员3/4以上同意；章程另有规定的从其规定。</p></div>
<div class="faq-item"><p class="faq-q">Q. 债权申报公告何时、几次？</p><p class="faq-a">A. 清算人就任之日起2个月内公告3次以上，申报期间不少于2个月。</p></div>
<div class="faq-item"><p class="faq-q">Q. 逾期未申报的债权人怎么办？</p><p class="faq-a">A. 将被排除在清算之外，只能在债务全部清偿后，就尚未移交归属权利人的财产请求清偿。已知债权人不得被排除。</p></div>
</div>

<div class="cta-block"><h3>需要准备社团法人解散·清算文件吗？</h3><p>유선행정사사무소（代表行政士 정유선）为<a href="/zh/services/nonprofit">非营利社团法人</a>撰写并提交解散申报书、剩余财产处分许可申请书、清算终结申报书等主管机关文件。电话 02-363-2251，工作日 09:30~17:30 KST。</p><a href="/zh/contact?utm_source=blog&utm_medium=cta&utm_campaign=nonprofit-dissolution-liquidation-procedure">申请咨询</a></div>
<p class="author-block">유선행정사사무소（代表行政士 정유선）</p>`,
  },

  ja: {
    title: '韓国の社団法人解散手続と清算 — 総会決議・解散登記・債権申出の公告・清算結了',
    category: '法人設立',
    metaTitle: '韓国の社団法人解散手続 — 総会決議・解散登記・清算結了の届出',
    metaDescription: '韓国の非営利社団法人の解散は主務官庁の許可ではなく、登記と主務官庁への届出で進みます。解散決議、清算人、解散登記・届出の期限、債権申出の公告、残余財産の帰属、清算結了の登記・届出を順に解説します。',
    excerpt: '韓国の非営利社団法人を解散するには、解散決議から清算結了の届出まで決まった順序と期限を守る必要があります。解散事由、清算人、解散登記・届出、債権申出の公告、残余財産、清算結了をまとめました。',
    content: `<div class="toc"><p>目次</p><ol><li>解散事由と総会の解散決議</li><li>解散後の清算手続</li><li>解散・清算の期限一覧</li><li>残余財産の帰属と清算結了</li><li>よくある質問</li></ol></div>
<p><strong>韓国「民法」上、社団法人の解散に主務官庁の許可は必要ありません。</strong>解散事由が生じると、清算人は就任後3週間以内に解散登記を行い、同じ期間内に主務官庁へ解散を届け出ます。その後、公告で債権者に債権の申出を求めて債務を整理し、残余財産を引き渡し、清算結了後3週間以内に登記と届出を済ませれば終了です。</p>
<p>設立段階については<a href="/ja/blog/nonprofit-corporation-establishment-guide">非営利社団法人設立ガイド</a>をご覧ください。</p>

<h2>解散事由と総会の解散決議</h2>
<p>「民法」は、すべての法人に共通する解散事由として、存立期間の満了、目的の達成または達成不能、定款で定めたその他の解散事由の発生、破産、設立許可の取消しを挙げています。社団法人は、社員がいなくなったとき、また社員総会の決議によっても解散します。</p>
<p>総会で解散を決議するには<strong>総社員の3/4以上の同意</strong>が必要です。出席社員ではなく総社員が基準で、定款に別段の定めがあればそれに従います。一般の決議（社員の過半数の出席、出席社員の議決権の過半数）より要件が重くなっています。総会は1週間前に会議の目的事項を記載した通知を発して招集し、定款に別段の定めがなければ通知した事項についてのみ決議できます。社員は書面または代理人によって議決権を行使できます。定款については<a href="/ja/blog/nonprofit-corporation-articles-and-approval-guide">定款作成と許可のガイド</a>を参照してください。</p>
<p>法人が債務を完済できなくなったときは、理事は遅滞なく破産の申立てをしなければなりません。破産による解散は破産手続で進み、以下の解散登記・届出の規定は適用されません。</p>

<h2>解散後の清算手続</h2>
<p>解散した法人は、清算の目的の範囲内でのみ権利を有し義務を負います。手続は次の順序で進みます。</p>
<ol>
<li><strong>清算人の確定</strong> — 破産の場合を除き理事が清算人となり、定款または総会決議で別に定めることもできます。清算人となる者がいない場合などは、裁判所が選任できます。</li>
<li><strong>解散登記</strong> — 清算人は就任後3週間以内に、解散の事由と年月日、清算人の氏名と住所、代表権の制限があればその制限を主たる事務所の所在地で登記します。</li>
<li><strong>解散の届出</strong> — 同じ事項を就任後3週間以内に主務官庁へ届け出ます。主務官庁ごとの規則は解散登記の後遅滞なく届出書を提出するよう定め、法務部所管の規則は解散時の財産目録、残余財産の処分方法の概要、解散時の定款、総会決議で解散した場合はその議事録の添付を求めています。</li>
<li><strong>債権申出の公告と催告</strong> — 就任の日から2か月以内に3回以上公告し、2か月以上の期間を定めて債権の申出を求めます。期間内に申し出なければ清算から除外される旨を表示し、知れている債権者には個別に催告します。</li>
<li><strong>債務の弁済</strong> — 申出期間内は弁済できません。財産が債務の完済に不足することが明らかになれば、遅滞なく破産宣告を申し立てて公告します。</li>
<li><strong>残余財産の引渡しと清算結了</strong> — 残余財産を帰属権利者に引き渡し、清算が結了したら3週間以内に登記し主務官庁に届け出ます。</li>
</ol>

<h2>解散・清算の期限一覧</h2>
<table><thead><tr><th>段階</th><th>期限</th><th>提出先</th></tr></thead><tbody>
<tr><td>解散登記</td><td>清算人就任後3週間以内</td><td>主たる事務所の所在地</td></tr>
<tr><td>解散の届出</td><td>就任後3週間以内、登記後遅滞なく</td><td>主務官庁</td></tr>
<tr><td>債権申出の公告</td><td>就任後2か月以内に3回以上</td><td>裁判所の登記事項の公告と同じ方法</td></tr>
<tr><td>債権申出期間</td><td>2か月以上</td><td>債権者から清算人へ</td></tr>
<tr><td>清算結了の登記・届出</td><td>清算結了後3週間以内</td><td>主たる事務所の所在地・主務官庁</td></tr>
</tbody></table>
<p>法人の解散と清算は裁判所が検査・監督します。清算人が登記を怠ったり、公告をしなかったり不正な公告をしたり、主務官庁に事実でない届出をしたり、申出期間内に弁済したりすると過料の対象になります。様式や添付書類は主務官庁ごとの規則で異なるため、所管部処の規則を確認してください。</p>

<h2>残余財産の帰属と清算結了</h2>
<p>解散した法人の財産は定款で指定した者に帰属します。定款に帰属権利者やその指定方法がなければ、理事または清算人は<strong>主務官庁の許可</strong>を得て法人の目的に類似する目的のために財産を処分でき、社団法人は総会決議も必要です。こうして処分されなかった財産は国庫に帰属します。清算が結了すると清算人が登記し、法務部所管の規則では登記後に清算結了届出書を主務官庁へ提出します。</p>

<div class="faq-section"><h2>よくある質問</h2>
<div class="faq-item"><p class="faq-q">Q. 解散そのものに主務官庁の承認は必要ですか？</p><p class="faq-a">A. 必要ありません。解散は登記と届出で行います。定款に帰属権利者がなく残余財産を処分する場合にのみ主務官庁の許可を受けます。</p></div>
<div class="faq-item"><p class="faq-q">Q. 解散決議には何人の同意が必要ですか？</p><p class="faq-a">A. 総社員の3/4以上の同意が必要で、定款に別段の定めがあればそれに従います。</p></div>
<div class="faq-item"><p class="faq-q">Q. 債権申出の公告はいつ、何回行いますか？</p><p class="faq-a">A. 清算人の就任の日から2か月以内に3回以上公告し、申出期間は2か月以上とします。</p></div>
<div class="faq-item"><p class="faq-q">Q. 期間内に申し出なかった債権者はどうなりますか？</p><p class="faq-a">A. 清算から除外され、債務を完済した後、帰属権利者にまだ引き渡していない財産に対してのみ弁済を請求できます。知れている債権者は除外できません。</p></div>
</div>

<div class="cta-block"><h3>社団法人の解散・清算書類の準備が必要ですか？</h3><p>ユソン行政士事務所（代表行政士 チョン・ユソン）は、<a href="/ja/services/nonprofit">非営利社団法人</a>の解散届出書、残余財産処分許可申請書、清算結了届出書など主務官庁への提出書類の作成と提出をサポートします。電話 02-363-2251、平日 09:30~17:30 KST。</p><a href="/ja/contact?utm_source=blog&utm_medium=cta&utm_campaign=nonprofit-dissolution-liquidation-procedure">相談を申し込む</a></div>
<p class="author-block">ユソン行政士事務所（代表行政士 チョン・ユソン）</p>`,
  },
}

entry.wrongTerms = ['해산허가', '해산 허가', '청산허가', '청산 허가', '해산인가', '사단법인 등록증', 'dissolution permit', 'permit to dissolve', '解散许可', '清算许可', '解散許可', '清算許可']

export default entry
