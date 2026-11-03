// 원고 은행 — INHEGA-FOCUS-1103 2차(보스 msg 4787, 2026-11-03, 맥4 하위 작성, kind=seo3958, angle=situation)
// 주제(풀): nonprofit(비영리사단법인설립) / 상황 질문: "동호회·임의단체로 활동하는데 사단법인으로 만들려면?"
// 출처 검색어(~/work/inhega-focus-1103/p2/kw/kw-sources.md + 11-03 네이버 자동완성 재확인):
//   NaverAC "비영리단체 법인"(씨앗 '비영리단체 법인') / NaverAC "임의단체 설립"·"임의단체 고유번호증"·"임의단체 정관"(씨앗 '임의단체')
//   NaverAC "비영리 사단법인 설립 요건"·"비영리 사단법인 회원수" / GSC "사단법인 설립 조건"(/services/nonprofit)
//
// 겹침 검사: nonprofit-corporation-establishment-guide(설립 전체 절차), nonprofit-articles-drafting(정관), nonprofit-corporation-articles-and-approval-guide
//   (주무관청·창립총회), nonprofit-association-vs-foundation(사단·재단 차이), nonprofit-tax-reporting, nonprofit-dissolution-liquidation-procedure
//   → "이미 활동 중인 임의단체가 법인이 되는 경우(기존 재산·회원·정관 정리)"를 다룬 글 없음. 일반 절차는 링크만.
//
// 법령 대조(law.go.kr DRF OC=visionlaw, 2026-11-03 조회, 사본 ~/work/inhega-focus-1103/p2/law/):
//   민법 MST 284415(2026. 3. 17. 시행) — 제32조(영리 아닌 사업 목적 사단, 주무관청 허가), 제33조(설립등기로 성립), 제40조 제1호~제7호(정관 기재사항),
//     제49조 제1항(허가 후 3주간 내 설립등기), 제56조(사원 지위 양도·상속 불가)
//   행정안전부 및 그 소속청 소관 비영리법인의 설립 및 감독에 관한 규칙 MST 291011(2026. 10. 2. 시행, 부처 규칙의 예) — 제3조(신청서류 6종),
//     제4조 제1항(허가 기준: 실현가능성·능력과 재정적 기초·명칭 중복 아님)·제2항(20일 이내 심사), 제5조 제1항(재산 이전 1개월 이내 증명)·제2항(등기 후 10일 이내 보고)
//   ※ 20일·1개월·10일은 부처마다 규칙이 따로 있어 화면에는 "주무관청 규칙상"으로 쓰고, 1차 필러(focus-pillars nonprofit) 표기와 같다.
// 인허가 구분: 비영리사단법인 = 주무관청 '설립허가' + 설립'등기'. 신고·등록 아님.
// 확신 없어 뺀 것: 최소 회원 수·기본재산 액수(법령에 일률 기준 없음, 부처·주무관청별 실무), 임의단체 고유번호증 처리(세법 사항), '전환' 신고 같은 별도 제도(민법에 없음 → '없다'고만 서술).

const SLUG = 'nonprofit-informal-group-to-association'

const entry = {
  topic: 'nonprofit',
  angle: 'situation',
  slug: SLUG,
  kind: 'seo3958',
  keyword: '임의단체 사단법인 전환',
  source: { type: 'NaverAC', query: '비영리단체 법인' },
  pexelsId: 18649994,
  coverImage: '',
  relatedServices: [
    { title: '비영리사단법인 설립 — 사단법인 설립 허가와 정관 작성', href: '/services/nonprofit' },
  ],

  ko: {
    title: '임의단체 사단법인 전환 — 동호회·모임으로 활동하다 법인으로 만들려면',
    category: '비영리법인',
    metaTitle: '임의단체 사단법인 전환 — 동호회·모임이 법인이 되는 절차와 서류',
    metaDescription: '동호회나 임의단체로 활동하다 사단법인으로 만들려면 별도 전환 절차가 아니라 창립총회·정관·주무관청 설립허가·설립등기를 밟습니다. 갈래별 판단과 서류·기간을 정리했습니다.',
    excerpt: '임의단체를 그대로 법인으로 바꾸는 전환 신고는 없습니다. 같은 회원들이 창립총회를 열어 정관을 만들고, 주무관청의 설립허가를 받은 뒤 기존 재산을 법인으로 옮기고 설립등기를 하면 사단법인이 됩니다.',
    content: `<div class="toc"><p>목차</p><ol><li>이런 경우는 되고, 이런 경우는 어렵습니다</li><li>준비 서류와 기간</li><li>유선행정사사무소가 돕는 범위</li><li>자주 묻는 질문 (FAQ)</li></ol></div>
<p><strong>동호회나 임의단체를 그대로 사단법인으로 바꾸는 '전환' 신고는 민법에 따로 없습니다. 같은 구성원이 창립총회를 열어 정관을 정하고, 목적 사업을 관할하는 주무관청의 설립허가를 받은 뒤 주된 사무소 소재지에서 설립등기를 하면 비영리사단법인이 성립합니다.</strong><!-- 근거: 민법 제32조, 제33조 --> 지금까지 모은 회비 적립금이나 장비 같은 단체 재산은 재산목록에 올려 허가 후 법인 명의로 옮깁니다.</p>
<p>설립 전체 흐름은 <a href="/blog/nonprofit-corporation-establishment-guide">비영리사단법인 설립 가이드</a>, 정관 쓰는 법은 <a href="/blog/nonprofit-articles-drafting">사단법인 정관 작성 방법</a>에서 자세히 다룹니다. 사단과 재단 가운데 어느 쪽이 맞는지 헷갈리면 <a href="/blog/nonprofit-association-vs-foundation">사단법인 재단법인 차이</a>부터 보십시오.</p>

<h2>이런 경우는 되고, 이런 경우는 어렵습니다</h2>
<table><thead><tr><th>지금 단체의 모습</th><th>판단</th></tr></thead><tbody>
<tr><td>학술·자선·문화·체육처럼 영리 아닌 사업을 하고, 활동 기록과 회비 등 재정이 있는 단체</td><td>사단법인 설립허가를 신청할 수 있습니다. 그동안의 활동 실적은 사업계획의 실현가능성을 보여 주는 자료가 됩니다.</td></tr>
<tr><td>회원끼리 친목만 하고 대외 사업 계획이 없는 모임</td><td>민법이 사교도 비영리 목적으로 들지만, 주무관청은 목적 사업이 실현가능한지와 재정적 기초를 봅니다. 사업 내용을 구체화하지 않으면 허가가 어렵습니다.</td></tr>
<tr><td>수익을 회원에게 나누려는 단체</td><td>영리 아닌 사업이라는 목적과 맞지 않아 비영리사단법인 대상이 아닙니다. 회사나 다른 법인 형태를 검토합니다.</td></tr>
</tbody></table>
<p>주무관청은 비영리법인의 목적과 사업이 실현가능한지, 목적 사업을 할 능력과 재정적 기초가 있는지, 다른 법인과 같은 명칭이 아닌지를 기준으로 허가 여부를 판단합니다.<!-- 근거: 행정안전부 및 그 소속청 소관 비영리법인의 설립 및 감독에 관한 규칙 제4조 제1항(부처 규칙의 예) --> 그래서 임의단체 시절의 회칙을 그대로 쓰기보다, 민법이 요구하는 정관 기재사항에 맞춰 다시 짜는 것이 출발점입니다.</p>
<p>주무관청은 단체가 하려는 목적 사업을 관할하는 행정기관입니다. 부처마다 소관 비영리법인의 설립과 감독에 관한 규칙을 따로 두고 있어 신청서 서식과 첨부서류, 사전 협의 방식이 조금씩 다르므로, 사업 내용을 먼저 정리한 뒤 어느 기관 소관인지 확인합니다.</p>
<ol><li>목적 사업과 주무관청을 정하고 사전 협의합니다.</li><li>기존 회칙을 바탕으로 목적, 명칭, 사무소 소재지, 자산, 이사 임면, 사원 자격의 득실, 존립 시기나 해산 사유를 담은 정관을 만듭니다.<!-- 근거: 민법 제40조 제1호~제7호 --></li><li>창립총회를 열어 정관을 확정하고 임원을 선출합니다.</li><li>단체 재산을 재산목록으로 정리해 설립허가를 신청합니다.</li><li>허가를 받으면 재산을 법인으로 옮기고 설립등기를 합니다.</li></ol>

<h2>준비 서류와 기간</h2>
<table><thead><tr><th>단계</th><th>서류</th><th>기간</th></tr></thead><tbody>
<tr><td>설립허가 신청</td><td>설립허가 신청서, 설립발기인 인적사항, 정관, 재산목록과 증명서류, 사업계획과 수입·지출 예산서, 임원 취임예정자 서류와 취임승낙서, 창립총회 회의록</td><td>주무관청 규칙상 특별한 사유가 없으면 신청일부터 20일 이내 심사<!-- 근거: 위 규칙 제3조, 제4조 제2항 --></td></tr>
<tr><td>재산 이전</td><td>등기소나 금융회사 등의 이전 증명서</td><td>허가 후 1개월 이내 제출<!-- 근거: 위 규칙 제5조 제1항 --></td></tr>
<tr><td>설립등기와 보고</td><td>설립등기 신청서류, 등기 사실 보고</td><td>허가 후 3주 내 설립등기, 등기 후 10일 이내 주무관청 보고<!-- 근거: 민법 제49조 제1항, 위 규칙 제5조 제2항 --></td></tr>
</tbody></table>

<h2>유선행정사사무소가 돕는 범위</h2>
<p>유선행정사사무소는 기존 회칙과 활동 기록을 보고 주무관청 선택과 사전 협의 방향을 정리한 뒤, 정관과 사업계획서·예산서, 창립총회 회의록, 재산목록 같은 설립허가 신청서류 작성과 접수, 보완 대응까지 처리합니다. 설립등기 신청은 법무사 등 등기 업무를 할 수 있는 전문가와 나눠 진행합니다. 임의단체 시절의 회비 장부와 활동 사진, 행사 기록이 정리돼 있을수록 사업계획과 재산목록을 설득력 있게 만들 수 있습니다.</p>

<div class="faq-section"><h2>자주 묻는 질문 (FAQ)</h2>
<div class="faq-item"><p class="faq-q">Q. 회원 수나 재산이 얼마나 있어야 하나요?</p><p class="faq-a">A. 민법에 일률적인 숫자 기준은 없습니다. 주무관청이 목적 사업을 할 능력과 재정적 기초를 보므로, 사업계획과 예산이 뒷받침되는지가 중요합니다.</p></div>
<div class="faq-item"><p class="faq-q">Q. 임의단체 시절 회원은 자동으로 법인 사원이 되나요?</p><p class="faq-a">A. 정관이 정한 사원 자격과 가입 절차를 따릅니다. 창립총회에서 사원이 될 사람을 확정해 두는 편이 깔끔하고, 법인 사원의 지위는 양도하거나 상속할 수 없습니다.<!-- 근거: 민법 제40조 제6호, 제56조 --></p></div>
<div class="faq-item"><p class="faq-q">Q. 허가를 받으면 바로 법인이 되나요?</p><p class="faq-a">A. 아닙니다. 허가 후 주된 사무소 소재지에서 설립등기를 해야 법인이 성립합니다.<!-- 근거: 민법 제33조 --></p></div>
<div class="faq-item"><p class="faq-q">Q. 임의단체 통장에 있는 돈과 장비는 어떻게 옮기나요?</p><p class="faq-a">A. 신청할 때 재산목록과 그 증명서류, 출연 신청이 있으면 그 사실을 증명하는 서류를 붙이고, 허가를 받으면 지체 없이 법인으로 옮긴 뒤 1개월 이내에 이전 증명서를 주무관청에 냅니다.<!-- 근거: 위 규칙 제3조 제3호, 제5조 제1항 --></p></div>
</div>

<div class="cta-block"><h3>지금의 회칙과 활동 기록으로 시작하세요</h3><p>기존 회칙, 활동 내역, 단체 재산 현황을 보내 주시면 유선행정사사무소가 사단법인 설립허가 가능성과 준비할 서류를 정리해 드립니다. 진행 범위는 <a href="/services/nonprofit">비영리사단법인 설립 안내</a>에서 확인하실 수 있습니다. 전화 02-363-2251, 평일 09:30~17:30 KST.</p><a href="/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">상담 신청하기</a></div>
<p class="author-block">유선행정사사무소 (대표 행정사 정유선)<!-- 근거: 민법 제32조·제33조·제40조·제49조·제56조, 행정안전부 및 그 소속청 소관 비영리법인의 설립 및 감독에 관한 규칙 제3조~제5조 --></p>`,
  },

  en: {
    title: 'Turning an Informal Club or Group into a Nonprofit Association in Korea',
    category: 'Corporate Formation',
    metaTitle: 'Informal Group to Nonprofit Association in Korea — Steps and Documents',
    metaDescription: 'There is no conversion filing for informal groups in Korea. Hold a founding meeting, adopt articles, get the ministry\'s permit and register the association.',
    excerpt: 'Korea has no filing that simply converts a club or informal group into a legal entity. The members hold a founding meeting, adopt articles of association, obtain a permit from the competent ministry, transfer the group\'s assets and register the incorporation.',
    content: `<div class="toc"><p>Contents</p><ol><li>When it works and when it does not</li><li>Documents and timelines</li><li>How we help</li><li>FAQ</li></ol></div>
<p><strong>Korea's Civil Act has no "conversion" filing for an informal group or club. The same members hold a founding general meeting, adopt articles of association, obtain an incorporation permit from the competent authority for their purpose, and register the incorporation at the main office. The association comes into existence on registration.</strong> Assets the group has built up, such as savings from dues or equipment, are listed in the property inventory and transferred to the association after the permit.</p>
<p>For the full process see <a href="/en/blog/nonprofit-corporation-establishment-guide">our nonprofit association guide</a>, and for articles and the founding meeting see <a href="/en/blog/nonprofit-corporation-articles-and-approval-guide">our guide to articles and approval</a>.</p>

<h2>When it works and when it does not</h2>
<table><thead><tr><th>Your group today</th><th>Outcome</th></tr></thead><tbody>
<tr><td>Runs non-profit activities such as academic, charitable, cultural or sports work, with records and dues income</td><td>Can apply. Past activities help show the plan is realistic.</td></tr>
<tr><td>Members only socialise, with no outward activity plan</td><td>Social purposes are listed in the Civil Act, but the authority checks feasibility and finances. Without a concrete plan, approval is difficult.</td></tr>
<tr><td>Wants to share profits among members</td><td>Not a non-profit purpose. Consider a company or another legal form.</td></tr>
</tbody></table>
<p>The authority looks at whether the purpose and activities are feasible, whether there is capacity and a financial base, and whether the name duplicates another entity. Rather than reusing the old club rules, rewrite them to cover what the Civil Act requires in the articles.</p>
<ol><li>Choose the activities and the competent authority, and consult in advance.</li><li>Draft articles covering purpose, name, office, assets, appointment of directors, membership and any term or grounds for dissolution.</li><li>Hold the founding meeting to adopt the articles and elect officers.</li><li>List the group's assets and apply for the permit.</li><li>After the permit, transfer assets and register.</li></ol>

<h2>Documents and timelines</h2>
<table><thead><tr><th>Stage</th><th>Documents</th><th>Timeline</th></tr></thead><tbody>
<tr><td>Permit application</td><td>Application, founders' details, articles, property inventory with proof, activity plan and budget, officer details and acceptances, founding meeting minutes</td><td>Under ministry rules, review within 20 days unless there is a special reason</td></tr>
<tr><td>Asset transfer</td><td>Transfer certificate from the registry or a bank</td><td>Submit within 1 month of the permit</td></tr>
<tr><td>Registration and report</td><td>Registration filing, report of registration</td><td>Register within 3 weeks of the permit; report within 10 days</td></tr>
</tbody></table>

<h2>How we help</h2>
<p>YouSun Administrative Agency reviews your current rules and records, helps choose the authority and prepare for consultation, then drafts the articles, plan, budget, meeting minutes and inventory, files the application and handles corrections. The registration itself is handled with a professional authorised for registry work.</p>
<p>The competent authority is the ministry or agency in charge of your activities. Each has its own rules on nonprofit corporations, so forms, attachments and consultation practice differ slightly. Settle your activity plan first, then confirm which authority it belongs to.</p>

<div class="faq-section"><h2>FAQ</h2>
<div class="faq-item"><p class="faq-q">Q. How many members or how much property do we need?</p><p class="faq-a">A. The Civil Act sets no fixed number. The authority looks at capacity and the financial base, so a plan backed by a budget matters most.</p></div>
<div class="faq-item"><p class="faq-q">Q. Do current members automatically become members of the association?</p><p class="faq-a">A. They follow the membership rules in the articles. It is cleaner to confirm members at the founding meeting, and membership cannot be transferred or inherited.</p></div>
<div class="faq-item"><p class="faq-q">Q. Does the permit create the association?</p><p class="faq-a">A. No. The association exists only after registration at the main office.</p></div>
<div class="faq-item"><p class="faq-q">Q. How do we move the group's money and equipment?</p><p class="faq-a">A. Attach the property inventory, proof and any donation pledges to the application. After the permit, transfer them without delay and submit the transfer certificate within 1 month.</p></div>
</div>

<div class="cta-block"><h3>Start with your current rules and records</h3><p>Send us your club rules, activity history and assets, and YouSun Administrative Agency will assess the permit and list the documents. Call 02-363-2251, weekdays 09:30~17:30 KST.</p><a href="/en/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">Request a consultation</a></div>
<p class="author-block">YouSun Administrative Agency (Chief Administrative Agent Jung Yu-sun)</p>`,
  },

  zh: {
    title: '在韩国，把同好会·任意团体办成社团法人要怎么做？',
    category: '法人设立',
    metaTitle: '韩国任意团体转为社团法人 — 同好会·协会成为法人的流程与材料',
    metaDescription: '韩国没有把任意团体直接转为法人的申报手续。须召开创立总会、制定章程、取得主管机关设立许可并办理设立登记。本文按团体现状说明可否设立、所需材料与各阶段期限。',
    excerpt: '韩国没有把同好会或任意团体直接转为法人的手续。由同一批会员召开创立总会、制定章程，取得主管机关的设立许可后，把原有财产转入法人并办理设立登记，才成为社团法人。',
    content: `<div class="toc"><p>目录</p><ol><li>哪些情况可以，哪些情况困难</li><li>材料与期限</li><li>我们可以协助的范围</li><li>常见问题</li></ol></div>
<p><strong>韩国《民法》没有把同好会或任意团体直接“转为”社团法人的申报手续。须由同一批成员召开创立总会、制定章程，取得主管该目的事业的机关的设立许可后，在主事务所所在地办理设立登记，非营利社团法人才告成立。</strong>此前积累的会费结余、器材等团体财产，列入财产目录，取得许可后转入法人名下。</p>
<p>完整流程见<a href="/zh/blog/nonprofit-corporation-establishment-guide">非营利社团法人设立指南</a>，章程与创立总会见<a href="/zh/blog/nonprofit-corporation-articles-and-approval-guide">社团法人设立许可与章程</a>。</p>

<h2>哪些情况可以，哪些情况困难</h2>
<table><thead><tr><th>团体现状</th><th>判断</th></tr></thead><tbody>
<tr><td>从事学术、慈善、文化、体育等非营利事业，有活动记录和会费等财务</td><td>可以申请设立许可。过去的活动实绩可证明事业计划可行。</td></tr>
<tr><td>只是会员联谊，没有对外事业计划</td><td>民法也列有社交目的，但主管机关会审查事业可行性和财务基础，计划不具体则难获许可。</td></tr>
<tr><td>想把收益分给会员</td><td>与非营利目的不符，不能设立非营利社团法人，应考虑公司等其他形式。</td></tr>
</tbody></table>
<p>主管机关以目的和事业是否可行、是否具备能力和财务基础、名称是否与其他法人相同为标准作出判断。因此不宜照搬任意团体时期的会则，而应按民法要求的章程记载事项重新整理。</p>
<ol><li>确定目的事业和主管机关，事先协商。</li><li>以原会则为基础，制定包含目的、名称、事务所所在地、资产、理事任免、社员资格得失、存续期间或解散事由的章程。</li><li>召开创立总会，确定章程并选任理事等。</li><li>整理团体财产目录，申请设立许可。</li><li>取得许可后转移财产并办理设立登记。</li></ol>

<h2>材料与期限</h2>
<table><thead><tr><th>阶段</th><th>材料</th><th>期限</th></tr></thead><tbody>
<tr><td>申请设立许可</td><td>设立许可申请书、发起人资料、章程、财产目录及证明、事业计划和收支预算、拟任理事资料及就任承诺书、创立总会会议记录</td><td>按主管机关规则，无特殊理由时自申请日起20日内审查</td></tr>
<tr><td>财产转移</td><td>登记所或金融机构出具的转移证明</td><td>取得许可后1个月内提交</td></tr>
<tr><td>设立登记与报告</td><td>设立登记材料、登记报告</td><td>许可后3周内登记，登记后10日内向主管机关报告</td></tr>
</tbody></table>

<h2>我们可以协助的范围</h2>
<p>YouSun Administrative Agency根据现有会则和活动记录，协助选定主管机关、整理事先协商方向，并制作章程、事业计划书、预算书、创立总会会议记录、财产目录等设立许可申请材料，负责提交和补正应对。设立登记则与可办理登记业务的专业人士分工进行。</p>
<p>主管机关是管辖团体目的事业的行政机关。各部门分别制定所管非营利法人设立和监督规则，申请书格式、附件和事先协商方式略有不同，宜先整理事业内容，再确认归哪个机关管辖。</p>

<div class="faq-section"><h2>常见问题</h2>
<div class="faq-item"><p class="faq-q">Q. 需要多少会员、多少财产？</p><p class="faq-a">A. 民法没有统一的数字标准。主管机关看的是开展目的事业的能力和财务基础，关键在于事业计划和预算是否可靠。</p></div>
<div class="faq-item"><p class="faq-q">Q. 任意团体的会员会自动成为法人社员吗？</p><p class="faq-a">A. 按章程规定的社员资格和入会程序办理。最好在创立总会上确定社员名单；法人社员资格不能转让或继承。</p></div>
<div class="faq-item"><p class="faq-q">Q. 取得许可就成为法人了吗？</p><p class="faq-a">A. 不是。许可后须在主事务所所在地办理设立登记，法人才成立。</p></div>
<div class="faq-item"><p class="faq-q">Q. 团体账户里的钱和器材怎么转？</p><p class="faq-a">A. 申请时附上财产目录及证明材料，有捐出承诺的附上证明；取得许可后立即转入法人，并在1个月内向主管机关提交转移证明。</p></div>
</div>

<div class="cta-block"><h3>从现有会则和活动记录开始</h3><p>发来会则、活动记录和团体财产情况，YouSun Administrative Agency为你评估设立许可的可能性并整理所需材料。电话 02-363-2251，工作日 09:30~17:30 KST。</p><a href="/zh/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">申请咨询</a></div>
<p class="author-block">YouSun Administrative Agency（代表行政士 Jung Yu-sun）</p>`,
  },

  ja: {
    title: '韓国でサークル・任意団体を社団法人にするには？',
    category: '法人設立',
    metaTitle: '韓国の任意団体から社団法人へ — サークル・会を法人にする手続と書類',
    metaDescription: '韓国には任意団体をそのまま法人に切り替える届出はありません。創立総会・定款・主務官庁の設立許可・設立登記の流れと、ケース別の判断、書類と期間を解説します。',
    excerpt: '韓国にはサークルや任意団体をそのまま法人に切り替える手続はありません。同じ会員で創立総会を開いて定款を定め、主務官庁の設立許可を受けた後、団体の財産を法人に移して設立登記をすると社団法人になります。',
    content: `<div class="toc"><p>目次</p><ol><li>できるケースと難しいケース</li><li>書類と期間</li><li>サポートの範囲</li><li>よくある質問</li></ol></div>
<p><strong>韓国の「民法」には、サークルや任意団体をそのまま社団法人に「切り替える」届出はありません。同じメンバーが創立総会を開いて定款を定め、目的事業を所管する主務官庁の設立許可を受けた後、主たる事務所の所在地で設立登記をすることで非営利社団法人が成立します。</strong>これまでに積み立てた会費や備品などの団体財産は財産目録に載せ、許可後に法人名義へ移します。</p>
<p>設立の全体の流れは<a href="/ja/blog/nonprofit-corporation-establishment-guide">非営利社団法人の設立ガイド</a>を、定款と創立総会は<a href="/ja/blog/nonprofit-corporation-articles-and-approval-guide">社団法人の設立許可と定款作成</a>をご覧ください。</p>

<h2>できるケースと難しいケース</h2>
<table><thead><tr><th>今の団体の姿</th><th>判断</th></tr></thead><tbody>
<tr><td>学術・慈善・文化・スポーツなど営利でない事業を行い、活動記録と会費などの財政がある団体</td><td>設立許可を申請できます。これまでの活動実績は事業計画の実現可能性を示す資料になります。</td></tr>
<tr><td>会員同士の親睦だけで、対外的な事業計画がない会</td><td>民法は社交も非営利目的に挙げていますが、主務官庁は実現可能性と財政的基礎を見ます。事業内容が具体的でなければ許可は難しくなります。</td></tr>
<tr><td>収益を会員に分配したい団体</td><td>営利でない事業という目的に合わず、非営利社団法人の対象外です。会社など別の法人形態を検討します。</td></tr>
</tbody></table>
<p>主務官庁は、目的と事業が実現可能か、目的事業を行う能力と財政的基礎があるか、他の法人と同じ名称でないかを基準に判断します。任意団体時代の会則をそのまま使うより、民法が定款に求める事項に合わせて作り直すのが出発点です。</p>
<ol><li>目的事業と主務官庁を決め、事前に協議します。</li><li>既存の会則をもとに、目的、名称、事務所の所在地、資産、理事の任免、社員資格の得喪、存立時期や解散事由を盛り込んだ定款を作ります。</li><li>創立総会を開いて定款を確定し、役員を選びます。</li><li>団体財産を財産目録にまとめ、設立許可を申請します。</li><li>許可を受けたら財産を法人に移し、設立登記をします。</li></ol>

<h2>書類と期間</h2>
<table><thead><tr><th>段階</th><th>書類</th><th>期間</th></tr></thead><tbody>
<tr><td>設立許可の申請</td><td>設立許可申請書、設立発起人の人的事項、定款、財産目録と証明書類、事業計画と収支予算書、役員就任予定者の書類と就任承諾書、創立総会議事録</td><td>主務官庁の規則上、特別な事情がなければ申請日から20日以内に審査</td></tr>
<tr><td>財産の移転</td><td>登記所や金融機関などの移転証明書</td><td>許可後1か月以内に提出</td></tr>
<tr><td>設立登記と報告</td><td>設立登記の申請書類、登記の報告</td><td>許可後3週間以内に設立登記、登記後10日以内に主務官庁へ報告</td></tr>
</tbody></table>

<h2>サポートの範囲</h2>
<p>YouSun Administrative Agencyは、既存の会則と活動記録を拝見して主務官庁の選定と事前協議の方向を整理し、定款、事業計画書・予算書、創立総会議事録、財産目録などの設立許可申請書類の作成、提出、補正対応まで行います。設立登記の申請は、登記業務を扱える専門家と分担して進めます。</p>
<p>主務官庁は、団体が行おうとする目的事業を所管する行政機関です。省庁ごとに所管の非営利法人の設立と監督に関する規則があり、申請書の様式や添付書類、事前協議の進め方が少しずつ異なるため、事業内容を先に整理してからどの機関の所管かを確認します。</p>

<div class="faq-section"><h2>よくある質問</h2>
<div class="faq-item"><p class="faq-q">Q. 会員数や財産はどのくらい必要ですか。</p><p class="faq-a">A. 民法に一律の数字基準はありません。主務官庁は目的事業を行う能力と財政的基礎を見るため、事業計画と予算の裏付けが重要です。</p></div>
<div class="faq-item"><p class="faq-q">Q. 任意団体の会員は自動的に法人の社員になりますか。</p><p class="faq-a">A. 定款で定めた社員資格と入会手続に従います。創立総会で社員を確定しておくのがすっきりしており、法人の社員の地位は譲渡も相続もできません。</p></div>
<div class="faq-item"><p class="faq-q">Q. 許可を受けたらすぐに法人になりますか。</p><p class="faq-a">A. いいえ。許可後に主たる事務所の所在地で設立登記をして初めて法人が成立します。</p></div>
<div class="faq-item"><p class="faq-q">Q. 任意団体の口座のお金や備品はどう移しますか。</p><p class="faq-a">A. 申請時に財産目録とその証明書類、出捐の申し出があればその証明書類を添付し、許可を受けたら遅滞なく法人に移して、1か月以内に移転の証明書を主務官庁に提出します。</p></div>
</div>

<div class="cta-block"><h3>今の会則と活動記録から始めましょう</h3><p>会則、活動内容、団体財産の状況をお送りいただければ、YouSun Administrative Agencyが設立許可の見通しと準備書類を整理します。電話 02-363-2251、平日 09:30~17:30 KST。</p><a href="/ja/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">相談を申し込む</a></div>
<p class="author-block">YouSun Administrative Agency（代表行政士 Jung Yu-sun）</p>`,
  },
}

// 틀리기 쉬운 인허가 구분 오기(4언어) — 비영리사단법인은 주무관청 '설립허가' + 설립'등기'(신고·등록 아님)
entry.wrongTerms = [
  '사단법인 설립신고', '사단법인 등록신청', '비영리법인 설립신고', '법인 전환신고',
  'association registration permit', 'nonprofit registration filing',
  '社团法人设立申报', '社团法人登记许可',
  '社団法人設立届', '社団法人の設立届出',
]

export default entry
