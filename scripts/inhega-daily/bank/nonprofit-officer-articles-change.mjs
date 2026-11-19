// 원고 은행 — INHE-BANK-1119(2026-11-19, 맥4 하위 작성 담당 D, kind=seo3958, angle=change-report)
// 주제(풀): nonprofit(비영리사단법인설립) / 세부주제: change-report(변경신고·변경등록) — 설립 후 이사 교체·정관 변경·사무소 이전 시 주무관청 절차와 등기 기한
// 검색어(안): "사단법인 임원 변경"(SPEC 배정표 대표 검색어)
//
// 겹침 검사(lib/blog-posts-data.ts·blog-i18n.ts·bank/nonprofit-*.mjs):
//   nonprofit-articles-drafting('7. 정관 변경 절차' 한 문단: 3분의 2·허가·변경등기만), nonprofit-corporation-articles-and-approval-guide
//   ('사단법인 임원 변경 등기와 사업계획서·예산서' 소제목 — 본문 내용 없음), nonprofit-fix(설립허가 취소·과태료),
//   nonprofit-dissolution-liquidation-procedure(해산), nonprofit-association-permit(설립 후 의무 일반)
//   → "설립 후 바뀌는 것" 별 주무관청 절차·등기 여부·기한·첨부서면을 표로 다룬 글 없음. 과태료·취소는 nonprofit-fix 로 링크만.
//
// 법령 대조(law.go.kr DRF OC=visionlaw, 2026-11-19 조회, 사본 ~/work/inhebank-1119/law/):
//   민법 MST 284415(2026. 3. 17. 시행) — 제40조 제3호·제5호(정관 기재: 사무소 소재지·이사 임면), 제41조·제60조(대표권 제한은 정관 기재·등기해야 대항),
//     제42조 제1항(총사원 3분의 2 이상 동의, 정관에 다른 정수 규정 우선)·제2항(주무관청 허가 없으면 효력 없음),
//     제49조 제2항(등기사항: 목적·명칭·사무소·자산총액·이사 성명·주소·대표권 제한 등 — 감사 없음), 제50조(분사무소 설치 3주일),
//     제51조 제1항(주사무소 이전: 종전 또는 새 소재지에서 3주일 내), 제52조(등기사항 변경 3주간 내 변경등기),
//     제53조(허가가 필요한 사항은 허가서 도착일부터 기산), 제54조 제1항(설립등기 외 등기사항은 등기 후 제3자 대항), 제66조(감사 임의기관),
//     제97조 제1호(등기 해태 시 이사 등 과태료 — 금액은 화면에 쓰지 않음)
//   비송사건절차법 MST 290717(2026. 10. 2. 시행) — 제60조 제1항(관할등기소), 제62조(이사 주민등록번호 등기),
//     제64조 제1항(변경등기 신청서에 변경 증명 서면, 허가가 필요한 사항은 허가서 또는 인증 등본 첨부)
//   법인의 등기사항 등에 관한 특례법 MST 265341(2025. 1. 31. 시행) — 제2조(임원 등기 시 주민등록번호, 대표권 없는 임원은 주소 미기재), 제3조의2(사무소 이전등기)
//   법무부 소관 비영리법인의 설립 및 감독에 관한 규칙 MST 193053(2017. 3. 30. 시행) — 제6조 제1호~제4호(정관 변경허가 신청 서류)
//   행정안전부 및 그 소속청 소관 규칙 MST 291011(2026. 10. 2. 시행) — 제6조 제1항(같은 서류)·제2항(10일 이내 심사)
//   문화체육관광부 및 국가유산청 소관 규칙 MST 262753 제6조(같은 4종, 심사기간 규정 없음) — 교차 확인
//   감사원 소관 비영리법인의 설립 및 감독에 관한 규칙 MST 173065 제8조(임원 교체 선임 시 지체 없이 보고·승인 — 부처별 차이 예)
//   34개 부처 규칙 대조: 임원 변경 보고·승인 조항은 감사원 소관 규칙에서만 확인, 정관 변경허가 심사기간 10일·14일·규정 없음으로 갈림
// 인허가 구분: 정관 변경 = 주무관청 '허가'(효력요건). 이사 변경 = 정관 절차에 따른 선임 + 변경'등기'(공통 규칙상 허가·신고 없음).
//   사무소 이전 = 이전'등기'(정관 소재지 변경이 따르면 정관 변경 '허가' 선행).
// 확신 없어 뺀 것: 임기 만료 후 같은 사람 재선임(중임) 시 등기 요부(민법 문언에 없음 — 화면에 쓰지 않음), 등기소 서식·처리기간,
//   이사 취임 시 인감 관련 첨부, 정관의 소재지 표기 범위(최소 행정구역)에 관한 실무 기준(화면은 "정관에 적힌 소재지가 바뀌면"으로만),
//   부처별 임원 변경 보고 실무 안내(규칙 외 안내문은 대조하지 않음), 과태료 금액.

const SLUG = 'nonprofit-officer-articles-change'

const entry = {
  topic: 'nonprofit',
  angle: 'change-report',
  slug: SLUG,
  kind: 'seo3958',
  keyword: '사단법인 임원 변경',
  source: { type: 'SPEC', query: '사단법인 임원 변경' },
  pexelsId: 33543226,
  coverImage: '',
  relatedServices: [
    { title: '비영리사단법인 설립 — 사단법인 설립 허가와 정관 작성', href: '/services/nonprofit' },
  ],

  ko: {
    title: '사단법인 임원 변경 — 이사 교체·정관 변경·사무소 이전 때 주무관청 절차와 등기 기한',
    category: '비영리법인',
    metaTitle: '사단법인 임원 변경 — 이사 교체 등기와 정관 변경 허가 기한',
    metaDescription: '사단법인 이사가 바뀌면 3주 이내 변경등기를 해야 하고, 정관을 바꾸려면 총사원 3분의 2 동의와 주무관청 허가가 필요합니다. 사무소 이전·감사 교체까지 절차와 서류를 표로 정리했습니다.',
    excerpt: '사단법인 이사는 등기사항이라 교체되면 3주 이내 변경등기를 합니다. 정관 변경은 주무관청 허가를 받아야 효력이 생기고, 사무소를 옮기면 이전등기가 필요합니다. 감사 교체는 등기 대상이 아닙니다.',
    content: `<div class="toc"><p>목차</p><ol><li>무엇이 바뀌면 어떤 절차인가</li><li>정관 변경허가 신청 순서와 서류</li><li>유선행정사사무소가 돕는 범위</li><li>자주 묻는 질문 (FAQ)</li></ol></div>
<p><strong>사단법인 이사의 성명·주소는 등기사항이라 이사가 바뀌면 3주 이내에 변경등기를 해야 합니다. 정관을 바꿀 때는 총사원 3분의 2 이상의 동의를 얻고 주무관청의 허가를 받아야 효력이 생기며, 허가가 필요한 등기사항은 허가서가 도착한 날부터 3주 안에 등기합니다.</strong><!-- 근거: 민법 제42조 제1항·제2항, 제49조 제2항 제8호, 제52조, 제53조 --> 비영리법인 설립·감독 규칙은 부처마다 따로 있어, 공통 규칙에 없는 보고 절차를 둔 주무관청도 있습니다.</p>
<p>정관 조항을 처음 만드는 방법은 <a href="/blog/nonprofit-articles-drafting">사단법인 정관 작성 방법</a>, 등기를 게을리했을 때의 과태료와 허가 취소는 <a href="/blog/nonprofit-fix">사단법인 설립허가 취소 사유·과태료 정리</a>에서 다룹니다.</p>

<h2>무엇이 바뀌면 어떤 절차인가</h2>
<table><thead><tr><th>바뀌는 것</th><th>주무관청 절차</th><th>등기</th></tr></thead><tbody>
<tr><td>이사 교체·추가</td><td>정관이 정한 선임 절차(총회 결의 등)를 거칩니다. 공통 규칙에는 허가·신고가 없지만 감사원 소관처럼 교체 선임을 보고하고 승인받게 한 곳도 있습니다.<!-- 근거: 민법 제40조 제5호, 감사원 소관 비영리법인의 설립 및 감독에 관한 규칙 제8조 --></td><td>변경등기 3주 이내. 이사는 주민등록번호도 등기하고, 대표권 없는 이사는 주소를 적지 않습니다.<!-- 근거: 민법 제52조, 비송사건절차법 제62조, 법인의 등기사항 등에 관한 특례법 제2조 --></td></tr>
<tr><td>감사 교체</td><td>정관·총회 결의로 선임합니다.</td><td>감사는 등기사항이 아니어서 등기하지 않습니다.<!-- 근거: 민법 제49조 제2항, 제66조 --></td></tr>
<tr><td>정관 변경(목적·명칭·대표권 등)</td><td>총사원 3분의 2 이상 동의 후 정관 변경허가 신청</td><td>등기사항이 바뀌면 허가서 도착일부터 3주 이내 변경등기<!-- 근거: 민법 제42조, 제52조, 제53조 --></td></tr>
<tr><td>주사무소 이전</td><td>정관에 적힌 소재지가 바뀌면 정관 변경허가가 먼저입니다.</td><td>종전 소재지나 새 소재지에서 3주일 이내 이전등기<!-- 근거: 민법 제40조 제3호, 제51조 제1항 --></td></tr>
<tr><td>분사무소 설치</td><td>정관 규정에 따릅니다.</td><td>주사무소 소재지에서 3주일 이내 등기<!-- 근거: 민법 제50조 --></td></tr>
</tbody></table>
<p>변경등기 신청서에는 변경을 증명하는 서면을 붙이고, 정관 변경처럼 주무관청의 허가가 필요한 사항은 허가서나 그 인증 등본을 함께 냅니다.<!-- 근거: 비송사건절차법 제64조 제1항 --> 설립등기 외의 등기사항은 등기한 뒤에야 제3자에게 주장할 수 있으므로, 새 이사가 법인을 대표해 계약하기 전에 등기를 마쳐 두는 것이 안전합니다.<!-- 근거: 민법 제54조 제1항 --> 이사장만 법인을 대표하도록 정관에 정했다면 그 대표권 제한도 등기해야 제3자에게 맞설 수 있습니다.<!-- 근거: 민법 제41조, 제49조 제2항 제9호, 제60조 --></p>
<p>후임을 정하지 못한 채 이사가 모두 물러나면 법인 운영이 멈출 수 있습니다. 이사가 없거나 결원이 있어 손해가 생길 염려가 있으면 법원이 이해관계인이나 검사의 청구로 임시이사를 선임하게 되므로, 임기 만료 전에 후임 선임 총회를 잡아 두고 선임 결의 회의록과 취임승낙서를 미리 챙겨 두는 것이 좋습니다.<!-- 근거: 민법 제63조 --></p>

<h2>정관 변경허가 신청 순서와 서류</h2>
<ol><li>정관이 정한 방법으로 총회를 소집합니다.</li><li>총사원 3분의 2 이상(정관에 다른 정수가 있으면 그 정수)의 동의로 변경을 결의합니다.</li><li>정관 변경허가 신청서에 변경 사유서, 신·구 대비표를 붙인 개정 정관, 관련 총회 또는 이사회 회의록을 붙여 주무관청에 냅니다.</li><li>기본재산 처분에 따른 변경이면 처분 사유·처분재산 목록·처분 방법을 적은 서류를 더합니다.</li><li>허가서를 받으면 등기사항 변경 여부를 확인해 등기소에 변경등기를 신청합니다.</li></ol>
<p>심사기간은 부처 규칙마다 다릅니다. 행정안전부 소관 규칙처럼 신청을 받은 날부터 10일 이내 심사하도록 정한 곳이 많지만, 기간을 따로 두지 않은 규칙도 있습니다.<!-- 근거: 법무부 소관 규칙 제6조 제1호~제4호, 행정안전부 및 그 소속청 소관 규칙 제6조 제1항·제2항, 34개 부처 규칙 대조 --> 허가 전 정관은 효력이 없으니, 바뀐 정관을 근거로 한 사업이나 임원 선임은 허가 뒤로 잡아야 합니다.</p>

<h2>유선행정사사무소가 돕는 범위</h2>
<p>유선행정사사무소는 총회 소집과 결의 요건 점검, 정관 신·구 대비표와 변경 사유서 작성, 해당 부처 규칙에 맞춘 정관 변경허가 신청, 허가 뒤 변경등기 일정 관리까지 함께합니다. 임원 교체를 보고하거나 승인받도록 정한 주무관청이라면 그 보고 서류도 같은 일정 안에서 준비합니다. 진행 범위는 <a href="/services/nonprofit">비영리사단법인 설립 안내</a>에서 확인하실 수 있습니다.</p>

<div class="faq-section"><h2>자주 묻는 질문 (FAQ)</h2>
<div class="faq-item"><p class="faq-q">Q. 이사가 바뀌면 주무관청 허가도 받아야 하나요?</p><p class="faq-a">A. 대부분의 부처 공통 규칙에는 이사 변경에 대한 허가 절차가 없고 등기가 핵심입니다. 다만 감사원 소관 규칙처럼 보고·승인을 정한 곳이 있으므로 해당 규칙을 먼저 확인하십시오.</p></div>
<div class="faq-item"><p class="faq-q">Q. 등기 기한을 넘기면 어떻게 되나요?</p><p class="faq-a">A. 민법은 등기를 게을리한 이사·감사·청산인을 과태료 대상으로 정합니다. 기한은 이사 선임이나 허가서 도착 시점부터 계산하므로 결의 직후 바로 준비하는 것이 좋습니다.<!-- 근거: 민법 제97조 제1호, 제52조, 제53조 --></p></div>
<div class="faq-item"><p class="faq-q">Q. 같은 시 안에서 다른 건물로 옮겨도 등기하나요?</p><p class="faq-a">A. 주사무소의 소재지가 바뀌면 이전등기 대상입니다. 정관에 적힌 소재지 범위 안의 이동이면 정관 변경허가 없이 등기만 하면 됩니다.</p></div>
<div class="faq-item"><p class="faq-q">Q. 정관 변경 결의 정족수를 정관으로 바꿀 수 있나요?</p><p class="faq-a">A. 네. 민법은 총사원 3분의 2 이상을 원칙으로 하되 정관에 다른 정수를 정하면 그 규정을 따르게 합니다.<!-- 근거: 민법 제42조 제1항 단서 --></p></div>
</div>

<div class="cta-block"><h3>변경 결의 전에 기한부터 확인하세요</h3><p>바뀌는 임원·정관 조항·사무소 주소와 주무관청을 알려 주시면 유선행정사사무소가 필요한 허가·등기 순서와 서류를 정리해 드립니다. 전화 02-325-8222, 평일 09:30~17:30 KST.</p><a href="/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">상담 신청하기</a></div>
<p class="author-block">유선행정사사무소 (대표 행정사 정유선)<!-- 근거: 민법 제40조~제42조·제49조~제54조·제60조·제66조·제97조, 비송사건절차법 제62조·제64조, 법무부 소관 규칙 제6조 --></p>`,
  },

  en: {
    title: 'Changing Officers of a Korean Incorporated Association — Directors, Articles and Office Moves',
    category: 'Corporate Formation',
    metaTitle: 'Korean Incorporated Association: Officer and Articles Changes',
    metaDescription: 'A Korean association must register a director change within 3 weeks; amending its articles needs two-thirds member consent and a ministry permit.',
    excerpt: 'Directors of a Korean nonprofit incorporated association are registered items, so a change must be registered within 3 weeks. Amended articles take effect only with the competent ministry\'s permit, and moving the main office requires a relocation registration. Auditors are not registered.',
    content: `<div class="toc"><p>Contents</p><ol><li>What changes and which procedure</li><li>Amending the articles: steps and documents</li><li>How we help</li><li>FAQ</li></ol></div>
<p><strong>The names and addresses of directors of a Korean incorporated association are registered, so when a director changes, a change registration is due within 3 weeks. Amending the articles requires consent of at least two-thirds of all members and the competent ministry's permit, and registration of permit-dependent items runs 3 weeks from the day the permit arrives.</strong> Each ministry has its own supervision rule, and some add reporting steps that the common rules do not have.</p>
<p>For drafting the articles, see <a href="/en/blog/nonprofit-corporation-articles-and-approval-guide">articles of association and permit guide</a>, and for dissolution, see <a href="/en/blog/nonprofit-dissolution-liquidation-procedure">association dissolution and liquidation</a>.</p>

<h2>What changes and which procedure</h2>
<table><thead><tr><th>Change</th><th>Ministry procedure</th><th>Registration</th></tr></thead><tbody>
<tr><td>Replacing or adding directors</td><td>Follow the election procedure in the articles. The common rules have no permit or report, but the Board of Audit and Inspection rule, for example, requires reporting and approval.</td><td>Change registration within 3 weeks; directors' resident registration numbers are registered, and addresses are omitted for directors without representative authority.</td></tr>
<tr><td>Replacing an auditor</td><td>Elected under the articles or by the general meeting.</td><td>Auditors are not registered items.</td></tr>
<tr><td>Amending the articles</td><td>Two-thirds consent, then a permit application</td><td>If registered items change, register within 3 weeks of the permit's arrival.</td></tr>
<tr><td>Moving the main office</td><td>If the location stated in the articles changes, obtain the amendment permit first.</td><td>Relocation registration within 3 weeks at the old or new location.</td></tr>
<tr><td>Opening a branch office</td><td>As provided in the articles.</td><td>Register at the main office location within 3 weeks.</td></tr>
</tbody></table>
<p>A change registration application includes documents proving the change and, for permit-dependent items, the permit or a certified copy. Registered items other than incorporation cannot be asserted against third parties until registered, so register a new director before he or she signs contracts. A limit on representation, such as only the chair representing the association, must also be registered.</p>
<p>If all directors leave without successors, the court may appoint a temporary director at the request of an interested party or a prosecutor, so hold the election meeting before terms expire.</p>

<h2>Amending the articles: steps and documents</h2>
<ol><li>Convene the general meeting as the articles provide.</li><li>Resolve the amendment with two-thirds of all members, or the number the articles set.</li><li>File the permit application with a statement of reasons, the amended articles with an old and new comparison, and the meeting minutes.</li><li>If the amendment concerns disposal of basic property, add the reasons, a list of the property and the method of disposal.</li><li>After the permit, check whether registered items changed and apply for change registration.</li></ol>
<p>Review periods differ by ministry. Many rules, such as the Ministry of the Interior and Safety rule, set 10 days, while others set none. The amended articles have no effect before the permit, so schedule activities and appointments that rely on them afterwards.</p>

<h2>How we help</h2>
<p>YouSun Administrative Agency checks meeting and quorum requirements, prepares the comparison table and statement of reasons, files the amendment permit under the right ministry rule and tracks the registration deadline. See <a href="/en/services/nonprofit">our nonprofit association service</a>.</p>

<div class="faq-section"><h2>FAQ</h2>
<div class="faq-item"><p class="faq-q">Q. Does a director change need a ministry permit?</p><p class="faq-a">A. Most common rules have no permit for director changes; registration is the key step. Some ministries require reporting and approval, so check the specific rule.</p></div>
<div class="faq-item"><p class="faq-q">Q. What if the registration deadline is missed?</p><p class="faq-a">A. The Civil Act makes directors, auditors and liquidators who neglect registration subject to an administrative fine. Start preparing right after the resolution.</p></div>
<div class="faq-item"><p class="faq-q">Q. Does a move to another building in the same city need registration?</p><p class="faq-a">A. A change in the main office location requires relocation registration. If it stays within the location stated in the articles, no amendment permit is needed.</p></div>
<div class="faq-item"><p class="faq-q">Q. Can the articles change the voting threshold?</p><p class="faq-a">A. Yes. Two-thirds is the default, but a different number in the articles prevails.</p></div>
</div>

<div class="cta-block"><h3>Check the deadlines before you resolve</h3><p>Tell us which officers, clauses or address will change and your ministry, and YouSun Administrative Agency will map the permit and registration steps. Call 02-325-8222, weekdays 09:30~17:30 KST.</p><a href="/en/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">Request a consultation</a></div>
<p class="author-block">YouSun Administrative Agency (Chief Administrative Agent Jung Yu-sun)</p>`,
  },

  zh: {
    title: '韩国社团法人变更高管 — 理事更换、章程变更、事务所迁移的程序与登记期限',
    category: '法人设立',
    metaTitle: '韩国社团法人高管变更 — 理事变更登记与章程变更许可',
    metaDescription: '韩国社团法人的理事属于登记事项，更换后须在3周内办理变更登记；变更章程须经全体社员三分之二以上同意并取得主管机关许可。本文整理事务所迁移、监事更换的程序与材料。',
    excerpt: '韩国非营利社团法人的理事是登记事项，更换后须在3周内办理变更登记。章程变更须取得主管机关许可才生效，迁移主事务所须办理迁移登记，监事更换则无须登记。',
    content: `<div class="toc"><p>目录</p><ol><li>变更事项与对应程序</li><li>章程变更许可的申请步骤与材料</li><li>我们可以协助的范围</li><li>常见问题</li></ol></div>
<p><strong>韩国社团法人理事的姓名和住址属于登记事项，理事更换后须在3周内办理变更登记。变更章程须经全体社员3分之2以上同意并取得主管机关许可方能生效，需要许可的登记事项自许可书送达之日起3周内登记。</strong>非营利法人设立和监督规则由各部门分别制定，部分主管机关另设了通用规则中没有的报告程序。</p>
<p>章程起草见<a href="/zh/blog/nonprofit-corporation-articles-and-approval-guide">社团法人章程与设立许可</a>，解散见<a href="/zh/blog/nonprofit-dissolution-liquidation-procedure">社团法人解散与清算</a>。</p>

<h2>变更事项与对应程序</h2>
<table><thead><tr><th>变更事项</th><th>主管机关程序</th><th>登记</th></tr></thead><tbody>
<tr><td>理事更换或增加</td><td>按章程规定的选任程序（社员大会决议等）。通用规则无许可或申报，但如监察院所管规则要求报告并取得批准。</td><td>3周内变更登记；理事一并登记居民登录号码，无代表权的理事不登记住址。</td></tr>
<tr><td>监事更换</td><td>按章程或社员大会决议选任。</td><td>监事不是登记事项。</td></tr>
<tr><td>章程变更</td><td>经三分之二以上同意后申请章程变更许可</td><td>登记事项变化的，自许可书送达之日起3周内变更登记。</td></tr>
<tr><td>主事务所迁移</td><td>章程记载的所在地变化的，先取得章程变更许可。</td><td>在原所在地或新所在地3周内办理迁移登记。</td></tr>
<tr><td>设立分事务所</td><td>按章程规定。</td><td>在主事务所所在地3周内登记。</td></tr>
</tbody></table>
<p>变更登记申请须附证明变更的书面材料；需主管机关许可的事项，还须附许可书或其认证副本。除设立登记外的登记事项，未登记前不能对抗第三人，因此新理事代表法人签约前应完成登记。若章程规定仅由理事长代表法人，该代表权限制也须登记。</p>
<p>若理事全部离任而未选出继任者，法院可依利害关系人或检察官的请求选任临时理事，因此应在任期届满前召开选任大会。</p>

<h2>章程变更许可的申请步骤与材料</h2>
<ol><li>按章程规定召集社员大会。</li><li>以全体社员三分之二以上（章程另有规定的从其规定）同意作出变更决议。</li><li>向主管机关提交章程变更许可申请书，附变更理由书、附新旧对照表的修订章程、相关会议记录。</li><li>因处分基本财产而变更的，另附处分理由、处分财产目录和处分方法。</li><li>取得许可后确认登记事项是否变化，向登记所申请变更登记。</li></ol>
<p>审查期限因部门规则而异，许多规则如行政安全部所管规则规定10日内审查，也有未规定期限的。许可前章程不生效，依据新章程的事业或高管选任应安排在许可之后。</p>

<h2>我们可以协助的范围</h2>
<p>YouSun Administrative Agency负责检查大会召集和决议要件，制作章程新旧对照表和变更理由书，按相应部门规则申请章程变更许可，并管理许可后的变更登记期限。详见<a href="/zh/services/nonprofit">非营利社团法人服务</a>。</p>

<div class="faq-section"><h2>常见问题</h2>
<div class="faq-item"><p class="faq-q">Q. 更换理事需要主管机关许可吗？</p><p class="faq-a">A. 多数部门的通用规则没有针对理事更换的许可程序，关键是登记；但有的规则要求报告和批准，请先确认相应规则。</p></div>
<div class="faq-item"><p class="faq-q">Q. 超过登记期限会怎样？</p><p class="faq-a">A. 民法规定怠于登记的理事、监事、清算人为罚款对象。期限从选任或许可书送达时起算，决议后应立即准备。</p></div>
<div class="faq-item"><p class="faq-q">Q. 在同一城市内搬到另一栋楼也要登记吗？</p><p class="faq-a">A. 主事务所所在地变化即属迁移登记对象；在章程记载的所在地范围内移动的，无须章程变更许可，只办登记。</p></div>
<div class="faq-item"><p class="faq-q">Q. 章程可以改变决议人数吗？</p><p class="faq-a">A. 可以。民法以三分之二为原则，章程另有规定的从其规定。</p></div>
</div>

<div class="cta-block"><h3>决议前先确认期限</h3><p>告诉我们拟变更的高管、章程条款或事务所地址以及主管机关，YouSun Administrative Agency为你整理许可与登记的顺序和材料。电话 02-325-8222，工作日 09:30~17:30 KST。</p><a href="/zh/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">申请咨询</a></div>
<p class="author-block">YouSun Administrative Agency（代表行政士 Jung Yu-sun）</p>`,
  },

  ja: {
    title: '韓国の社団法人の役員変更 — 理事交代・定款変更・事務所移転の手続と登記期限',
    category: '法人設立',
    metaTitle: '韓国の社団法人の役員変更 — 理事の変更登記と定款変更許可',
    metaDescription: '韓国の社団法人の理事は登記事項のため、交代したら3週間以内に変更登記が必要です。定款変更には総社員の3分の2以上の同意と主務官庁の許可が要ります。事務所移転や監事交代の手続も解説します。',
    excerpt: '韓国の非営利社団法人の理事は登記事項で、交代したら3週間以内に変更登記をします。定款変更は主務官庁の許可を受けて初めて効力が生じ、主たる事務所を移せば移転登記が必要です。監事の交代は登記の対象ではありません。',
    content: `<div class="toc"><p>目次</p><ol><li>何が変わるとどの手続か</li><li>定款変更許可の申請手順と書類</li><li>サポートの範囲</li><li>よくある質問</li></ol></div>
<p><strong>韓国の社団法人の理事の氏名・住所は登記事項のため、理事が代われば3週間以内に変更登記をしなければなりません。定款を変えるには総社員の3分の2以上の同意を得て主務官庁の許可を受けて初めて効力が生じ、許可が必要な登記事項は許可書が届いた日から3週間以内に登記します。</strong>非営利法人の設立・監督規則は省庁ごとに別にあり、共通の規則にない報告手続を置く主務官庁もあります。</p>
<p>定款の作り方は<a href="/ja/blog/nonprofit-corporation-articles-and-approval-guide">社団法人の定款と設立許可</a>、解散は<a href="/ja/blog/nonprofit-dissolution-liquidation-procedure">社団法人の解散と清算</a>をご覧ください。</p>

<h2>何が変わるとどの手続か</h2>
<table><thead><tr><th>変わるもの</th><th>主務官庁の手続</th><th>登記</th></tr></thead><tbody>
<tr><td>理事の交代・追加</td><td>定款が定める選任手続（総会決議など）を経ます。共通の規則に許可・届出はありませんが、監査院所管の規則のように交代選任の報告と承認を求めるところもあります。</td><td>3週間以内に変更登記。理事は住民登録番号も登記し、代表権のない理事は住所を記載しません。</td></tr>
<tr><td>監事の交代</td><td>定款・総会決議で選任します。</td><td>監事は登記事項ではありません。</td></tr>
<tr><td>定款変更</td><td>総社員の3分の2以上の同意の後、定款変更許可を申請</td><td>登記事項が変われば許可書の到着日から3週間以内に変更登記</td></tr>
<tr><td>主たる事務所の移転</td><td>定款に記載した所在地が変わるなら定款変更許可が先です。</td><td>旧所在地または新所在地で3週間以内に移転登記</td></tr>
<tr><td>従たる事務所の設置</td><td>定款の規定によります。</td><td>主たる事務所の所在地で3週間以内に登記</td></tr>
</tbody></table>
<p>変更登記の申請書には変更を証明する書面を添え、定款変更のように主務官庁の許可が必要な事項は許可書またはその認証謄本も添付します。設立登記以外の登記事項は登記後でなければ第三者に対抗できないため、新しい理事が法人を代表して契約する前に登記を済ませておくのが安全です。理事長だけが代表すると定款で定めたなら、その代表権の制限も登記が必要です。</p>
<p>後任を決めないまま理事が全員退任すると、利害関係人や検察官の請求により裁判所が臨時理事を選任することになるため、任期満了前に選任の総会を開いておきましょう。</p>

<h2>定款変更許可の申請手順と書類</h2>
<ol><li>定款の定める方法で総会を招集します。</li><li>総社員の3分の2以上（定款に別の定数があればその定数）の同意で変更を決議します。</li><li>定款変更許可申請書に変更理由書、新旧対照表を付けた改正定款、関係する総会または理事会の議事録を添えて主務官庁に提出します。</li><li>基本財産の処分に伴う変更なら、処分理由・処分財産の目録・処分方法を記した書類を加えます。</li><li>許可書を受けたら登記事項の変更の有無を確認し、登記所に変更登記を申請します。</li></ol>
<p>審査期間は省庁の規則ごとに異なり、行政安全部所管の規則のように10日以内とするものが多い一方、期間を定めない規則もあります。許可前の定款は効力がないため、新しい定款に基づく事業や役員選任は許可の後に予定してください。</p>

<h2>サポートの範囲</h2>
<p>YouSun Administrative Agencyは、総会招集と決議要件の点検、定款の新旧対照表と変更理由書の作成、該当省庁の規則に沿った定款変更許可の申請、許可後の変更登記の期限管理まで行います。詳しくは<a href="/ja/services/nonprofit">非営利社団法人サービス</a>をご覧ください。</p>

<div class="faq-section"><h2>よくある質問</h2>
<div class="faq-item"><p class="faq-q">Q. 理事が代わると主務官庁の許可も必要ですか。</p><p class="faq-a">A. 多くの省庁の共通の規則には理事変更の許可手続はなく、登記が中心です。ただし報告・承認を定める規則もあるため、先に確認してください。</p></div>
<div class="faq-item"><p class="faq-q">Q. 登記期限を過ぎるとどうなりますか。</p><p class="faq-a">A. 民法は登記を怠った理事・監事・清算人を過料の対象としています。期限は選任や許可書の到着から数えるため、決議後すぐに準備するのが良いでしょう。</p></div>
<div class="faq-item"><p class="faq-q">Q. 同じ市内で別の建物に移るだけでも登記しますか。</p><p class="faq-a">A. 主たる事務所の所在地が変われば移転登記の対象です。定款に記載した所在地の範囲内なら定款変更許可は不要で、登記だけで足ります。</p></div>
<div class="faq-item"><p class="faq-q">Q. 定款で決議の定数を変えられますか。</p><p class="faq-a">A. はい。民法は3分の2以上を原則としつつ、定款に別の定数があればそれに従います。</p></div>
</div>

<div class="cta-block"><h3>決議の前に期限を確認しましょう</h3><p>変わる役員・定款条項・事務所の住所と主務官庁をお知らせいただければ、YouSun Administrative Agencyが必要な許可と登記の順序、書類を整理します。電話 02-325-8222、平日 09:30~17:30 KST。</p><a href="/ja/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">相談を申し込む</a></div>
<p class="author-block">YouSun Administrative Agency（代表行政士 Jung Yu-sun）</p>`,
  },
}

// 틀리기 쉬운 인허가 구분 오기(4언어) — 정관 변경은 '허가', 이사 변경은 '등기'(공통 규칙상 허가·신고 없음)
entry.wrongTerms = [
  '임원 변경 허가', '임원변경신고서', '정관 변경 신고', '정관변경 신고', '정관 변경 등록',
  'officer change permit', 'articles amendment report',
  '理事变更许可', '章程变更备案', '章程变更申报',
  '役員変更許可', '定款変更届出', '定款変更の届出',
]

export default entry
