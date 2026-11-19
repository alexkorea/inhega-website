// 원고 은행 — INHE-BANK-1119(2026-11-19, 맥4 하위 작성 담당 D, kind=seo3958, angle=documents)
// 주제(풀): nonprofit(비영리사단법인설립) / 세부주제: documents(구비서류) — 사단법인 설립허가 신청 서류와 허가 후 재산 이전·설립등기 서류
// 검색어(안): "사단법인 설립 서류"(SPEC 배정표 대표 검색어)
//
// 겹침 검사(lib/blog-posts-data.ts·blog-i18n.ts·bank/nonprofit-*.mjs):
//   nonprofit-corporation-establishment-guide(전체 절차, '필요 서류'는 이름만 나열 — 성범죄 조회·임대차계약서 등 규칙 밖 서류 섞임),
//   nonprofit-association-permit(허가 절차·등기 서류 이름 나열), nonprofit-corporation-articles-and-approval-guide(주무관청·창립총회 회의록 작성),
//   nonprofit-articles-drafting(정관 기재사항), nonprofit-informal-group-to-association(임의단체 전환), nonprofit-fix·select·tax·dissolution
//   → 이 글은 "부처 규칙 공통 6종의 각 서류에 무엇을 적는지"와 "허가 뒤 재산 이전 증명·설립등기 첨부서면·등기 보고"만 다룬다.
//     정관 작성은 nonprofit-articles-drafting, 전체 절차는 establishment-guide 로 링크만.
//
// 법령 대조(law.go.kr DRF OC=visionlaw, 2026-11-19 조회, 사본 ~/work/inhebank-1119/law/):
//   민법 MST 284415(2026. 3. 17. 시행) — 제32조(주무관청 허가), 제33조(설립등기로 성립), 제40조 제1호~제7호(정관 기재사항),
//     제49조 제1항(허가가 있는 때 3주간 내 설립등기)·제2항 제1호~제9호(등기사항)
//   법무부 소관 비영리법인의 설립 및 감독에 관한 규칙 MST 193053(2017. 3. 30. 시행) — 제3조 제1항 제1호~제6호(첨부서류 6종,
//     제1호 괄호: 외국인은 생년월일 대신 외국인등록번호)·제2항(토지·건물 등기사항증명서 행정정보 확인), 제4조 제1항(허가 기준 3가지)·
//     제2항(20일 이내 심사)·제3항(기간을 정한 자료 제출·설명 요구)·제4항(조건), 제5조 제1항(재산 이전 후 1개월 이내 증명서 제출)·제2항(등기 후 10일 이내 보고)
//   문화체육관광부 및 국가유산청 소관 비영리법인의 설립 및 감독에 관한 규칙 MST 262753(2024. 5. 17. 시행) — 제3조 제1호~제6호(같은 6종),
//     제4조 제2항(20일), 제5조 제1항(1월)·제2항(등기 후 10일 이내 등기부등본 제출) — 교차 확인
//   행정안전부 및 그 소속청 소관 규칙 MST 291011(2026. 10. 2. 시행) 제3조 — 같은 6종 교차 확인
//   감사원 소관 비영리법인의 설립 및 감독에 관한 규칙 MST 173065 제3조 제6호 — 임원 취임 예정자 이력서에 명함판 사진(부처별 차이 예)
//   34개 부처 규칙 설립허가 심사기간 대조: 20일 27곳, 14일 1곳, 규정 없음 6곳 → 화면은 "대부분 20일"
//   비송사건절차법 MST 290717(2026. 10. 2. 시행) — 제60조 제1항(주된 사무소 관할 등기소), 제62조(이사 주민등록번호 등기),
//     제63조 제1항·제2항 제1호~제4호(설립등기 신청인·첨부서면: 정관, 이사 자격 증명 서면, 허가서 또는 인증 등본, 재산목록)
// 인허가 구분: 사단법인 = 주무관청 '설립허가' + 설립'등기'. 신고·등록·인가 아님.
// 확신 없어 뺀 것: 최소 회원 수·기본재산 액수(법령에 일률 기준 없음), 사무소 임대차계약서·성범죄경력 조회 등 부처별 추가 서류 목록
//   (공통 규칙에 없음 → "심사에 필요한 자료를 따로 요구할 수 있다"로만), 법인 인감 신고·등기소 신청서 서식 세부, 등기 처리기간,
//   외국 발급 서류의 아포스티유·번역 요건(공통 규칙에 없음), 금액 표현 전부.

const SLUG = 'nonprofit-association-required-documents'

const entry = {
  topic: 'nonprofit',
  angle: 'documents',
  slug: SLUG,
  kind: 'seo3958',
  keyword: '사단법인 설립 서류',
  source: { type: 'SPEC', query: '사단법인 설립 서류' },
  pexelsId: 6814350,
  coverImage: '',
  relatedServices: [
    { title: '비영리사단법인 설립 — 사단법인 설립 허가와 정관 작성', href: '/services/nonprofit' },
  ],

  ko: {
    title: '사단법인 설립 서류 — 설립허가 신청서에 붙이는 6가지와 허가 후 등기 서류',
    category: '비영리법인',
    metaTitle: '사단법인 설립 서류 — 허가 신청 첨부서류 6가지와 설립등기 서류',
    metaDescription: '사단법인 설립허가 신청에는 발기인 서류, 정관, 재산목록, 사업계획·예산, 임원 서류, 창립총회 회의록 6가지가 들어갑니다. 서류별 작성 포인트와 허가 뒤 재산 이전·설립등기 서류를 정리했습니다.',
    excerpt: '사단법인 설립허가는 주무관청 규칙의 신청서에 6가지 서류를 붙여 신청합니다. 부처마다 규칙이 따로 있어 서식은 다르지만 틀은 같고, 허가 뒤에는 재산 이전 증명과 설립등기 서류가 이어집니다.',
    content: `<div class="toc"><p>목차</p><ol><li>신청서에 붙이는 서류 6가지</li><li>허가 뒤 재산 이전과 설립등기 서류</li><li>유선행정사사무소가 돕는 범위</li><li>자주 묻는 질문 (FAQ)</li></ol></div>
<p><strong>사단법인 설립허가는 주무관청 소관 규칙에 정한 설립허가 신청서에 설립발기인 서류, 정관, 재산목록과 증명서류, 사업계획과 수입·지출 예산, 임원 취임 예정자 서류와 취임승낙서, 창립총회 회의록 6가지를 붙여 신청합니다.</strong><!-- 근거: 법무부 소관 비영리법인의 설립 및 감독에 관한 규칙 제3조 제1항 제1호~제6호, 문화체육관광부 및 국가유산청 소관 규칙 제3조 제1호~제6호 --> 비영리법인 설립·감독 규칙은 부처마다 따로 있어 서식 번호와 세부 요구는 주무관청에 따라 다르지만, 6가지 틀은 거의 모든 부처 규칙에 같습니다.</p>
<p>설립 전체 흐름은 <a href="/blog/nonprofit-corporation-establishment-guide">비영리사단법인 설립 가이드</a>, 정관에 꼭 들어갈 사항은 <a href="/blog/nonprofit-articles-drafting">사단법인 정관 작성 방법</a>, 이미 활동하던 모임을 법인으로 만드는 경우는 <a href="/blog/nonprofit-informal-group-to-association">임의단체 사단법인 전환</a>에서 다룹니다.</p>

<h2>신청서에 붙이는 서류 6가지</h2>
<table><thead><tr><th>서류</th><th>담을 내용</th><th>준비할 때 볼 점</th></tr></thead><tbody>
<tr><td>설립발기인 서류</td><td>발기인의 성명·생년월일·주소·약력</td><td>발기인이 법인이면 명칭, 주된 사무소, 대표자 인적사항과 그 법인의 정관을 냅니다.</td></tr>
<tr><td>정관</td><td>목적, 명칭, 사무소 소재지, 자산, 이사 임면, 사원 자격 득실, 존립시기·해산사유</td><td>필수 기재사항이 하나라도 빠지면 보완 요구를 받습니다.<!-- 근거: 민법 제40조 제1호~제7호 --></td></tr>
<tr><td>재산목록과 증명서류</td><td>법인에 넘길 재산의 종류와 내역</td><td>목록의 토지·건물은 주무관청이 행정정보로 등기사항증명서를 확인하고, 출연 약정이 있으면 그 사실을 증명하는 서류를 붙입니다.<!-- 근거: 법무부 소관 규칙 제3조 제1항 제3호·제2항 --></td></tr>
<tr><td>사업계획·수입지출 예산</td><td>해당 사업연도의 사업과 예산</td><td>정관의 목적사업과 예산 항목이 서로 맞아야 합니다.</td></tr>
<tr><td>임원 서류</td><td>임원 취임 예정자의 성명·생년월일·주소·약력, 취임승낙서</td><td>창립총회에서 선임한 사람과 이름·직위가 같아야 합니다.</td></tr>
<tr><td>창립총회 회의록</td><td>정관 승인과 임원 선임 결의</td><td>발기인이 법인이면 설립 의사 결정을 증명하는 서류로 갈음합니다.</td></tr>
</tbody></table>
<p>주무관청은 법인의 목적과 사업이 실현 가능한지, 사업을 수행할 능력과 재정적 기초가 있는지, 다른 법인과 명칭이 같지 않은지를 보고 허가합니다. 대부분의 부처 규칙은 특별한 사유가 없으면 신청을 받은 날부터 20일 이내에 심사하도록 정하고, 심사에 필요하면 기간을 정해 자료 제출이나 설명을 요구할 수 있습니다.<!-- 근거: 법무부 소관 규칙 제4조 제1항~제3항, 문화체육관광부 및 국가유산청 소관 규칙 제4조 제2항, 34개 부처 규칙 대조(20일 27곳) --> 사무소 사용 근거 같은 추가 자료를 요청받는 경우가 여기에 해당합니다.</p>
<ol><li>발기인 명단과 약력을 정리합니다.</li><li>정관 초안을 만들고 목적사업을 확정합니다.</li><li>재산목록과 증명서류, 사업계획·예산을 맞춰 작성합니다.</li><li>창립총회에서 정관을 승인하고 임원을 선임해 회의록을 남깁니다.</li><li>임원 취임승낙서를 받아 신청서와 함께 주무관청에 제출합니다.</li></ol>

<h2>허가 뒤 재산 이전과 설립등기 서류</h2>
<table><thead><tr><th>단계</th><th>서류</th><th>기한</th></tr></thead><tbody>
<tr><td>재산 이전</td><td>재산을 법인 명의로 옮긴 뒤 등기소나 금융회사 등이 발급한 이전 증명서</td><td>허가 후 지체 없이 이전하고 1개월 이내 주무관청에 제출<!-- 근거: 법무부 소관 규칙 제5조 제1항 --></td></tr>
<tr><td>설립등기</td><td>등기신청서에 정관, 이사 자격 증명 서면, 주무관청 허가서 또는 그 인증 등본, 재산목록 첨부</td><td>허가가 있은 때부터 3주 이내, 주된 사무소 관할 등기소<!-- 근거: 민법 제49조 제1항, 비송사건절차법 제60조 제1항, 제63조 제2항 --></td></tr>
<tr><td>등기 보고</td><td>설립등기를 마친 사실 보고</td><td>등기한 때부터 10일 이내<!-- 근거: 법무부 소관 규칙 제5조 제2항, 문화체육관광부 및 국가유산청 소관 규칙 제5조 제2항 --></td></tr>
</tbody></table>
<p>법인은 설립등기를 해야 성립하므로, 허가증을 받은 뒤의 등기 일정이 실제 출범일을 정합니다.<!-- 근거: 민법 제33조 --> 등기에는 목적, 명칭, 사무소, 설립허가 연월일, 자산의 총액, 이사의 성명·주소 등이 오르고, 이사는 주민등록번호도 함께 등기합니다.<!-- 근거: 민법 제49조 제2항, 비송사건절차법 제62조 --> 그래서 허가 신청 때의 임원 서류와 재산목록이 등기 서류와 그대로 이어지도록 처음부터 같은 기준으로 작성해 두는 것이 좋습니다.</p>

<h2>유선행정사사무소가 돕는 범위</h2>
<p>유선행정사사무소는 주무관청을 정하는 단계부터 해당 부처 규칙의 서식에 맞춘 신청서와 6가지 첨부서류 작성, 창립총회 회의록 정리, 보완 요구 대응까지 함께합니다. 허가 뒤 재산 이전 증명 제출과 등기 보고 일정도 놓치지 않도록 관리합니다. 진행 범위는 <a href="/services/nonprofit">비영리사단법인 설립 안내</a>에서 확인하실 수 있습니다.</p>

<div class="faq-section"><h2>자주 묻는 질문 (FAQ)</h2>
<div class="faq-item"><p class="faq-q">Q. 주무관청마다 서류가 다른가요?</p><p class="faq-a">A. 6가지 틀은 거의 같지만 서식 번호와 세부 요구가 다릅니다. 예를 들어 감사원 소관 규칙은 임원 취임 예정자 이력서에 사진을 붙이도록 정합니다. 신청 전 해당 부처 규칙과 안내를 함께 확인해야 합니다.<!-- 근거: 감사원 소관 비영리법인의 설립 및 감독에 관한 규칙 제3조 제6호 --></p></div>
<div class="faq-item"><p class="faq-q">Q. 외국인도 발기인이나 임원이 될 수 있나요?</p><p class="faq-a">A. 공통 규칙에 국적 제한은 없고, 법무부 소관 규칙은 외국인 발기인의 경우 생년월일 대신 외국인등록번호를 적도록 정합니다. 다른 부처는 해당 규칙과 주무관청 안내를 따릅니다.<!-- 근거: 법무부 소관 규칙 제3조 제1항 제1호 --></p></div>
<div class="faq-item"><p class="faq-q">Q. 사무소 임대차계약서도 내야 하나요?</p><p class="faq-a">A. 공통 6가지에는 들어 있지 않습니다. 다만 주무관청이 심사에 필요하다고 보면 사무소 사용 근거를 요구할 수 있으니 미리 준비해 두면 보완 기간을 줄일 수 있습니다.</p></div>
<div class="faq-item"><p class="faq-q">Q. 허가 조건이 붙으면 어떻게 되나요?</p><p class="faq-a">A. 주무관청은 설립허가에 필요한 조건을 붙일 수 있습니다. 조건은 허가 후에도 지켜야 하므로 허가증의 조건란을 등기 서류와 함께 보관해 두십시오.<!-- 근거: 법무부 소관 규칙 제4조 제4항 --></p></div>
</div>

<div class="cta-block"><h3>서류부터 정확하게 맞추세요</h3><p>설립 목적과 예정 주무관청, 발기인·임원 구성을 알려 주시면 유선행정사사무소가 해당 부처 규칙에 맞춘 서류 목록과 일정을 정리해 드립니다. 전화 02-325-8222, 평일 09:30~17:30 KST.</p><a href="/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">상담 신청하기</a></div>
<p class="author-block">유선행정사사무소 (대표 행정사 정유선)<!-- 근거: 민법 제32조·제33조·제40조·제49조, 법무부 소관 비영리법인의 설립 및 감독에 관한 규칙 제3조~제5조, 비송사건절차법 제60조·제62조·제63조 --></p>`,
  },

  en: {
    title: 'Documents to Establish an Incorporated Association in Korea — The 6 Attachments and Registration Papers',
    category: 'Corporate Formation',
    metaTitle: 'Korean Incorporated Association: Required Documents',
    metaDescription: 'A Korean incorporated association permit needs 6 attachments: founder details, articles, property list, plan and budget, officer papers and inaugural minutes.',
    excerpt: 'A nonprofit incorporated association in Korea applies for an establishment permit with 6 attachments set by the competent ministry\'s rule. Forms differ by ministry, but the structure is the same, and after the permit come proof of property transfer and incorporation registration.',
    content: `<div class="toc"><p>Contents</p><ol><li>The 6 attachments</li><li>After the permit: property transfer and registration</li><li>How we help</li><li>FAQ</li></ol></div>
<p><strong>To establish a nonprofit incorporated association in Korea, you file the establishment permit application set by the competent ministry's rule with 6 attachments: founder details, the articles of association, a property list with supporting proof, the business plan and budget, papers for incoming officers with their letters of acceptance, and the minutes of the inaugural general meeting.</strong> Each ministry has its own rule, so form numbers and extra requests vary, but the 6-item structure is almost identical.</p>
<p>For the overall procedure, see <a href="/en/blog/nonprofit-corporation-establishment-guide">our nonprofit association establishment guide</a>, and for an existing group becoming a legal entity, see <a href="/en/blog/nonprofit-informal-group-to-association">informal group to incorporated association</a>.</p>

<h2>The 6 attachments</h2>
<table><thead><tr><th>Document</th><th>Content</th><th>What to check</th></tr></thead><tbody>
<tr><td>Founder details</td><td>Name, date of birth, address and background of each founder</td><td>A corporate founder submits its name, main office, representative and its own articles.</td></tr>
<tr><td>Articles of association</td><td>Purpose, name, office location, assets, appointment of directors, membership, duration or dissolution grounds</td><td>Missing mandatory items lead to a correction request.</td></tr>
<tr><td>Property list and proof</td><td>Assets to be transferred to the association</td><td>The ministry checks land and building records electronically; pledged contributions need proof.</td></tr>
<tr><td>Business plan and budget</td><td>Activities and income and expenditure for the current business year</td><td>Must match the purposes in the articles.</td></tr>
<tr><td>Officer papers</td><td>Details of incoming officers and letters of acceptance</td><td>Names and posts must match the officers elected at the inaugural meeting.</td></tr>
<tr><td>Inaugural meeting minutes</td><td>Approval of the articles and election of officers</td><td>A corporate founder submits proof of its own decision instead.</td></tr>
</tbody></table>
<p>The ministry grants the permit if the purpose is feasible, the association has the ability and financial basis to carry it out, and its name is not the same as another entity's. Most ministry rules require a decision within 20 days unless there is a special reason, and the ministry may set a deadline for extra materials or explanations, such as proof of office use.</p>
<ol><li>List the founders and their backgrounds.</li><li>Draft the articles and fix the purpose activities.</li><li>Prepare the property list, proof, plan and budget together.</li><li>Approve the articles and elect officers at the inaugural meeting, and keep minutes.</li><li>Collect letters of acceptance and file everything with the ministry.</li></ol>

<h2>After the permit: property transfer and registration</h2>
<table><thead><tr><th>Step</th><th>Documents</th><th>Deadline</th></tr></thead><tbody>
<tr><td>Property transfer</td><td>Certificate from the registry or a financial institution showing transfer to the association</td><td>Submit to the ministry within 1 month</td></tr>
<tr><td>Incorporation registration</td><td>Application with the articles, proof of directors' status, the permit or a certified copy, and the property list</td><td>Within 3 weeks of the permit, at the registry for the main office</td></tr>
<tr><td>Report</td><td>Report that registration is complete</td><td>Within 10 days of registration</td></tr>
</tbody></table>
<p>The association comes into existence only on registration, so the registration date is the real start date. The register shows the purpose, name, office, permit date, total assets and directors, so keep the officer papers and property list consistent from the start.</p>

<h2>How we help</h2>
<p>YouSun Administrative Agency helps identify the competent ministry, prepares the application and the 6 attachments in that ministry's format, organises the inaugural minutes and handles correction requests, then tracks the transfer proof and registration report. See <a href="/en/services/nonprofit">our nonprofit association service</a>.</p>

<div class="faq-section"><h2>FAQ</h2>
<div class="faq-item"><p class="faq-q">Q. Do documents differ by ministry?</p><p class="faq-a">A. The 6 items are nearly the same, but forms and details differ. For example, one rule requires a photo on officers' résumés. Check the specific rule before filing.</p></div>
<div class="faq-item"><p class="faq-q">Q. Can foreign nationals be founders or officers?</p><p class="faq-a">A. The common rules set no nationality limit, and the Ministry of Justice rule asks foreign founders to state an alien registration number instead of a date of birth.</p></div>
<div class="faq-item"><p class="faq-q">Q. Is an office lease required?</p><p class="faq-a">A. It is not one of the 6 items, but the ministry may ask for proof of office use, so preparing it early saves time.</p></div>
<div class="faq-item"><p class="faq-q">Q. What if the permit has conditions?</p><p class="faq-a">A. The ministry may attach conditions, which continue to apply after the permit. Keep the permit with your registration papers.</p></div>
</div>

<div class="cta-block"><h3>Get the documents right first</h3><p>Tell us your purpose, likely ministry and founding members, and YouSun Administrative Agency will set out the document list and timeline for that ministry's rule. Call 02-325-8222, weekdays 09:30~17:30 KST.</p><a href="/en/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">Request a consultation</a></div>
<p class="author-block">YouSun Administrative Agency (Chief Administrative Agent Jung Yu-sun)</p>`,
  },

  zh: {
    title: '韩国社团法人设立需要哪些材料 — 许可申请6项附件与设立登记材料',
    category: '法人设立',
    metaTitle: '韩国社团法人设立材料 — 许可申请附件6项与登记材料',
    metaDescription: '在韩国申请社团法人设立许可，须附发起人材料、章程、财产目录、事业计划与预算、高管材料和创立大会会议记录6项。本文说明各项要点及许可后的财产转移和设立登记材料。',
    excerpt: '韩国非营利社团法人按主管机关规则的设立许可申请书附6项材料提出申请。各部门规则不同，格式有差异，但框架相同；取得许可后还需提交财产转移证明并办理设立登记。',
    content: `<div class="toc"><p>目录</p><ol><li>申请书须附的6项材料</li><li>许可后的财产转移与设立登记</li><li>我们可以协助的范围</li><li>常见问题</li></ol></div>
<p><strong>在韩国设立非营利社团法人，须按主管机关规则规定的设立许可申请书，附上设立发起人材料、章程、财产目录及证明材料、事业计划及收支预算、拟任高管材料及就任承诺书、创立大会会议记录共6项提出申请。</strong>非营利法人设立和监督规则由各部门分别制定，格式编号和细节要求不同，但6项框架几乎相同。</p>
<p>整体流程见<a href="/zh/blog/nonprofit-corporation-establishment-guide">非营利社团法人设立指南</a>，已在活动的团体转为法人见<a href="/zh/blog/nonprofit-informal-group-to-association">任意团体转为社团法人</a>。</p>

<h2>申请书须附的6项材料</h2>
<table><thead><tr><th>材料</th><th>内容</th><th>注意事项</th></tr></thead><tbody>
<tr><td>发起人材料</td><td>发起人的姓名、出生日期、住址、履历</td><td>发起人为法人的，提交名称、主事务所、代表人信息及该法人章程。</td></tr>
<tr><td>章程</td><td>目的、名称、事务所所在地、资产、理事任免、社员资格得失、存续期间或解散事由</td><td>缺少必要记载事项会被要求补正。</td></tr>
<tr><td>财产目录及证明</td><td>拟转入法人的财产明细</td><td>土地和建筑由主管机关通过行政信息确认登记事项；有出资约定的附证明。</td></tr>
<tr><td>事业计划与收支预算</td><td>当年度的事业和预算</td><td>须与章程的目的事业一致。</td></tr>
<tr><td>高管材料</td><td>拟任高管的个人信息与就任承诺书</td><td>须与创立大会选任的人员和职务一致。</td></tr>
<tr><td>创立大会会议记录</td><td>批准章程和选任高管的决议</td><td>发起人为法人的，以其意思决定证明材料代替。</td></tr>
</tbody></table>
<p>主管机关审查目的和事业是否可行、是否具备执行能力和财务基础、名称是否与其他法人相同。大多数部门规则规定无特殊理由时在20日内审查，必要时可限期要求补充材料或说明，例如事务所使用依据。</p>
<ol><li>整理发起人名单和履历。</li><li>起草章程并确定目的事业。</li><li>同步编制财产目录、证明材料、事业计划和预算。</li><li>在创立大会上批准章程、选任高管并留存会议记录。</li><li>取得就任承诺书后与申请书一并向主管机关提交。</li></ol>

<h2>许可后的财产转移与设立登记</h2>
<table><thead><tr><th>阶段</th><th>材料</th><th>期限</th></tr></thead><tbody>
<tr><td>财产转移</td><td>登记所或金融机构出具的转移证明</td><td>1个月内向主管机关提交</td></tr>
<tr><td>设立登记</td><td>登记申请书附章程、理事资格证明、许可书或其认证副本、财产目录</td><td>自许可之日起3周内，向主事务所所在地登记所申请</td></tr>
<tr><td>登记报告</td><td>完成设立登记的报告</td><td>登记后10日内</td></tr>
</tbody></table>
<p>法人自设立登记时成立，因此登记日才是实际成立日。登记簿记载目的、名称、事务所、许可日期、资产总额和理事等，所以从申请阶段起就应让高管材料和财产目录与登记材料保持一致。</p>

<h2>我们可以协助的范围</h2>
<p>YouSun Administrative Agency从确定主管机关开始，按该部门规则格式制作申请书和6项附件，整理创立大会会议记录，应对补正要求，并跟进财产转移证明和登记报告。详见<a href="/zh/services/nonprofit">非营利社团法人设立服务</a>。</p>

<div class="faq-section"><h2>常见问题</h2>
<div class="faq-item"><p class="faq-q">Q. 不同主管机关的材料不一样吗？</p><p class="faq-a">A. 6项框架基本相同，但格式和细节不同，例如有的规则要求高管履历贴照片。申请前应确认相应规则。</p></div>
<div class="faq-item"><p class="faq-q">Q. 外国人可以担任发起人或高管吗？</p><p class="faq-a">A. 通用规则没有国籍限制；法务部所管规则规定外国人发起人填写外国人登录号码代替出生日期。</p></div>
<div class="faq-item"><p class="faq-q">Q. 需要提交事务所租赁合同吗？</p><p class="faq-a">A. 不在6项之内，但主管机关审查需要时可要求提供事务所使用依据，提前准备可缩短补正时间。</p></div>
<div class="faq-item"><p class="faq-q">Q. 许可附有条件怎么办？</p><p class="faq-a">A. 主管机关可在许可时附加条件，许可后仍须遵守，请将许可证与登记材料一并保管。</p></div>
</div>

<div class="cta-block"><h3>先把材料备齐备准</h3><p>告诉我们设立目的、拟定主管机关和发起人构成，YouSun Administrative Agency为你整理该部门规则下的材料清单和日程。电话 02-325-8222，工作日 09:30~17:30 KST。</p><a href="/zh/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">申请咨询</a></div>
<p class="author-block">YouSun Administrative Agency（代表行政士 Jung Yu-sun）</p>`,
  },

  ja: {
    title: '韓国の社団法人設立に必要な書類 — 許可申請の添付6種と設立登記の書類',
    category: '法人設立',
    metaTitle: '韓国の社団法人設立書類 — 許可申請の添付6種と登記書類',
    metaDescription: '韓国で社団法人の設立許可を申請するには、発起人書類、定款、財産目録、事業計画・予算、役員書類、創立総会議事録の6種が必要です。書類ごとの要点と許可後の財産移転・設立登記を解説します。',
    excerpt: '韓国の非営利社団法人は、主務官庁の規則で定める設立許可申請書に6種の書類を添えて申請します。規則は省庁ごとに別にあり様式は異なりますが、枠組みは同じで、許可後は財産移転の証明と設立登記が続きます。',
    content: `<div class="toc"><p>目次</p><ol><li>申請書に添える6種の書類</li><li>許可後の財産移転と設立登記</li><li>サポートの範囲</li><li>よくある質問</li></ol></div>
<p><strong>韓国で非営利社団法人を設立するには、主務官庁の規則で定める設立許可申請書に、設立発起人の書類、定款、財産目録とその証明書類、事業計画と収支予算、役員就任予定者の書類と就任承諾書、創立総会議事録の6種を添えて申請します。</strong>非営利法人の設立・監督規則は省庁ごとに別に定められ、様式番号や細かな要求は異なりますが、6種の枠組みはほぼ共通です。</p>
<p>設立全体の流れは<a href="/ja/blog/nonprofit-corporation-establishment-guide">非営利社団法人設立ガイド</a>、活動中の任意団体を法人にする場合は<a href="/ja/blog/nonprofit-informal-group-to-association">任意団体から社団法人へ</a>をご覧ください。</p>

<h2>申請書に添える6種の書類</h2>
<table><thead><tr><th>書類</th><th>内容</th><th>準備のポイント</th></tr></thead><tbody>
<tr><td>発起人の書類</td><td>発起人の氏名・生年月日・住所・略歴</td><td>発起人が法人なら、名称、主たる事務所、代表者の情報とその法人の定款を出します。</td></tr>
<tr><td>定款</td><td>目的、名称、事務所の所在地、資産、理事の任免、社員資格の得喪、存立時期・解散事由</td><td>必要的記載事項が一つでも欠けると補正を求められます。</td></tr>
<tr><td>財産目録と証明書類</td><td>法人に移す財産の内訳</td><td>土地・建物は主務官庁が行政情報で登記事項を確認し、出捐の約束があればその証明を添えます。</td></tr>
<tr><td>事業計画・収支予算</td><td>当該事業年度の事業と予算</td><td>定款の目的事業と一致させます。</td></tr>
<tr><td>役員の書類</td><td>役員就任予定者の氏名・生年月日・住所・略歴と就任承諾書</td><td>創立総会で選任した人物・役職と一致させます。</td></tr>
<tr><td>創立総会議事録</td><td>定款承認と役員選任の決議</td><td>発起人が法人なら設立の意思決定を証明する書類で代えます。</td></tr>
</tbody></table>
<p>主務官庁は、目的と事業が実現可能か、事業を行う能力と財政的基礎があるか、他の法人と同じ名称でないかを見て許可します。多くの省庁の規則は特別な事情がなければ20日以内に審査するとし、必要なら期限を定めて資料の提出や説明を求めることができます。事務所の使用根拠を求められるのはこの場合です。</p>
<ol><li>発起人の名簿と略歴を整理します。</li><li>定款案を作り目的事業を確定します。</li><li>財産目録・証明書類・事業計画・予算をそろえて作成します。</li><li>創立総会で定款を承認し役員を選任して議事録を残します。</li><li>就任承諾書を受け取り、申請書とともに主務官庁へ提出します。</li></ol>

<h2>許可後の財産移転と設立登記</h2>
<table><thead><tr><th>段階</th><th>書類</th><th>期限</th></tr></thead><tbody>
<tr><td>財産移転</td><td>登記所や金融機関などが発行する移転の証明書</td><td>1か月以内に主務官庁へ提出</td></tr>
<tr><td>設立登記</td><td>登記申請書に定款、理事の資格を証明する書面、許可書またはその認証謄本、財産目録を添付</td><td>許可から3週間以内、主たる事務所の管轄登記所</td></tr>
<tr><td>登記の報告</td><td>設立登記を終えた旨の報告</td><td>登記から10日以内</td></tr>
</tbody></table>
<p>法人は設立登記によって成立するため、登記日が実際のスタート日になります。登記簿には目的、名称、事務所、許可年月日、資産の総額、理事などが載るので、申請時の役員書類と財産目録を登記書類と同じ基準で作っておくと安心です。</p>

<h2>サポートの範囲</h2>
<p>YouSun Administrative Agencyは、主務官庁の特定から、その省庁の規則の様式に合わせた申請書と6種の添付書類の作成、創立総会議事録の整理、補正対応までを行い、許可後の財産移転証明と登記報告の日程も管理します。詳しくは<a href="/ja/services/nonprofit">非営利社団法人設立サービス</a>をご覧ください。</p>

<div class="faq-section"><h2>よくある質問</h2>
<div class="faq-item"><p class="faq-q">Q. 主務官庁によって書類は違いますか。</p><p class="faq-a">A. 6種の枠組みはほぼ同じですが、様式や細部が異なります。たとえば役員の履歴書に写真を求める規則もあります。申請前に該当する規則を確認してください。</p></div>
<div class="faq-item"><p class="faq-q">Q. 外国人も発起人や役員になれますか。</p><p class="faq-a">A. 共通の規則に国籍の制限はなく、法務部所管の規則は外国人の発起人について生年月日の代わりに外国人登録番号を記載するよう定めています。</p></div>
<div class="faq-item"><p class="faq-q">Q. 事務所の賃貸借契約書も必要ですか。</p><p class="faq-a">A. 6種には含まれませんが、審査に必要として事務所の使用根拠を求められることがあるため、早めに準備すると補正期間を短くできます。</p></div>
<div class="faq-item"><p class="faq-q">Q. 許可に条件が付いたら？</p><p class="faq-a">A. 主務官庁は許可に条件を付けることができ、条件は許可後も守る必要があります。許可証は登記書類と一緒に保管してください。</p></div>
</div>

<div class="cta-block"><h3>まず書類を正確にそろえましょう</h3><p>設立の目的、予定する主務官庁、発起人・役員の構成をお知らせいただければ、YouSun Administrative Agencyがその省庁の規則に合わせた書類リストと日程を整理します。電話 02-325-8222、平日 09:30~17:30 KST。</p><a href="/ja/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">相談を申し込む</a></div>
<p class="author-block">YouSun Administrative Agency（代表行政士 Jung Yu-sun）</p>`,
  },
}

// 틀리기 쉬운 인허가 구분 오기(4언어) — 사단법인은 주무관청 '설립허가' + 설립'등기'. 신고·등록·인가 아님
entry.wrongTerms = [
  '사단법인 설립신고', '사단법인 설립 신고서', '사단법인 등록신청', '비영리법인 설립인가',
  'association establishment report', 'nonprofit association license',
  '社团法人设立申报', '社团法人登记许可', '非营利法人设立备案',
  '社団法人設立届出', '社団法人の登録申請', '非営利法人設立認可',
]

export default entry
