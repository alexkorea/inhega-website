// 원고 은행 — INHE-BANK-1119 보충(담당 A, 2026-11-19, kind=seo3958, angle=foreign)
// 주제(풀): telecom(부가통신사업신고) / 질문: "한국 법인이 없는 외국기업도 부가통신사업 신고를 할 수 있나, 국내대리인은 언제 지정하나"
// 검색어: '외국기업 부가통신사업 신고'(배정표 대표 검색어안)
//
// 겹침 검사: telecom-report-online-mall-app(대상 판정·신고 간주) → 대상 판정 일반론은 링크만.
//   location-based-service-business-registration-foreign-company(위치기반서비스 외국법인) → 위치정보법 쪽은 링크만, 이 글은 전기통신사업법 기준.
//   라이브에 외국기업 부가통신 글 없음. 같은 배치 telecom-value-added-report-procedure(절차)는 아직 라이브 아님 → 링크 안 함.
//
// 법령 대조(law.go.kr DRF OC=visionlaw, 2026-11-19 로컬 사본 ~/work/inhebank-1119/law):
//   전기통신사업법 MST 285185(2026. 10. 1. 시행) — 제2조의2(국외행위 적용: 국내 시장·이용자에 영향 시), 제7조 제1항 제2호(외국정부·외국법인 결격은
//     '기간통신사업 등록'에만), 제8조(외국인 주식소유 제한 — 기간통신사업자), 제22조 제1항(부가통신 신고 — 외국법인 제한 조항 없음)·제5항·제6항,
//     제22조의7 제1항·제3항(기준 해당 사업자 서비스 안정성 조치, 매년 1월 말 이행 현황 제출), 제22조의8 제1항~제4항(국내대리인: 국내 주소·영업소 없는
//     부가통신사업자로서 제22조의7 기준 해당 → 서면 지정, 대리 업무 4가지, 국내 주소·영업소 요건, 국내 설립 법인·지배 법인 우선, 위반 시 사업자 행위 간주,
//     유효 연락수단), 제104조 제3항 제1호의3(국내대리인 미지정·위반 지정 과태료 — 금액 미표시)
//   같은 법 시행령 MST 290813(2026. 10. 1. 시행) — 제29조 제1항·제3항(신고서·첨부·등기사항증명서 공동이용 확인), 제30조의8 제1항(전년도 말 기준
//     직전 3개월 하루 평균 국내 이용자 100만명 이상 + 국내 트래픽 100분의 1 이상, 둘 다)·제2항(조치 내용 — 한국어 이용자 요구 처리 등)
//   전기통신사업법 시행에 관한 과학기술정보통신부규정(행정규칙 ID 2100000278444, 2026. 4. 28. 시행) — 별지 제4호서식(주민(외국인)/법인등록번호 칸,
//     담당공무원 확인사항: 법인등기사항증명서 — '외국법인의 법인등기사항증명서 확인은 재외공관 공증법 제30조·제31조에 따라 아포스티유 협약에서 정하는
//     바에 따르는 증명서 등으로 갈음할 수 있습니다')
//   개인정보 보호법 MST 283839(2026. 9. 11. 시행) — 제31조의2 제1항·제2항(국내 주소·영업소 없는 개인정보처리자 중 대통령령 기준 해당 시 국내대리인
//     문서 지정 — 별개 제도로만 언급)
// 인허가 구분: 부가통신사업 = '신고', 국내대리인 = '지정'(신고·등록·허가 아님), 기간통신사업 = '등록'.
// 확신 없어 뺀 것: 아포스티유 미가입국 서류(영사확인 등)·번역 요건(서식·법령 문구 없음), 외국법인의 국내 영업소 등기 필요 여부(상법 — 이 글 범위 밖,
//   확인 안 함), 국내대리인 지정 사실을 따로 신고하는 절차(법령 조문 없음), 개인정보 보호법 시행령의 국내대리인 매출액·보유 규모 기준 수치(미대조),
//   외국법인 자본금의 신고 간주 기준 적용 방식(시행령은 '자본금 1억원 이하'만 정함 — 외화 환산 기준 없음, 금액 자체도 S4로 미표시), 처리 소요일, 과태료 금액.

const SLUG = 'telecom-report-foreign-company'

const entry = {
  topic: 'telecom',
  angle: 'foreign',
  slug: SLUG,
  kind: 'seo3958',
  keyword: '외국기업 부가통신사업 신고',
  source: { type: 'assignment', query: '외국기업 부가통신사업 신고' },
  pexelsId: 4864249,
  coverImage: '',
  relatedServices: [
    { title: '정보통신분야 인허가 — 부가통신사업 신고·기간통신사업 등록', href: '/services/telecom-business' },
  ],

  ko: {
    title: '외국기업 부가통신사업 신고 — 한국 법인 없이 할 수 있을까, 국내대리인은 언제 필요할까',
    category: 'IT·통신',
    metaTitle: '외국기업 부가통신사업 신고 — 외국법인 신고·국내대리인 지정 기준',
    metaDescription: '한국 법인이 없는 외국기업의 부가통신사업 신고 가능 여부, 외국법인 서류 확인 방식, 국내대리인 지정 대상(이용자 수·트래픽 기준)과 요건, 개인정보 보호법상 국내대리인과의 차이를 안내합니다.',
    excerpt: '부가통신사업 신고 조항에는 외국법인을 막는 결격 규정이 없습니다. 국외에서 한 행위도 국내 이용자에게 영향을 미치면 전기통신사업법이 적용되고, 이용자 수와 트래픽이 기준을 넘는 해외 사업자는 국내대리인을 서면으로 지정해야 합니다.',
    content: `<div class="toc"><p>목차</p><ol><li>외국법인도 신고할 수 있나</li><li>국내대리인 지정 대상과 요건</li><li>외국법인이 준비할 서류</li><li>자주 묻는 질문 (FAQ)</li></ol></div>
<p><strong>한국에 법인이 없는 외국기업도 부가통신사업 신고를 할 수 있습니다. 전기통신사업법에서 외국정부·외국법인을 결격으로 정한 조항은 기간통신사업 등록에 관한 것이고, 부가통신사업 신고 조항에는 그런 제한이 없습니다. 오히려 국외에서 한 행위라도 국내 시장이나 이용자에게 영향을 미치면 이 법이 적용됩니다.</strong><!-- 근거: 전기통신사업법 제2조의2, 제7조 제1항 제2호, 제22조 제1항 --></p>
<p>우리 서비스가 신고 대상인지, 소규모라서 신고한 것으로 보는 경우인지는 <a href="/blog/telecom-report-online-mall-app">부가통신사업 신고 대상 판단 기준</a>에서 먼저 확인하세요. 같은 앱이 한국 이용자의 위치를 쓴다면 위치정보법 쪽 의무는 <a href="/blog/location-based-service-business-registration-foreign-company">외국법인 위치기반서비스사업 신고</a>에서 따로 봐야 합니다.</p>

<h2>외국법인도 신고할 수 있나</h2>
<p>외국인 지분 제한도 기간통신사업자에 대한 규정이어서, 앱·플랫폼처럼 부가통신역무만 제공하는 해외 사업자의 신고에는 적용되지 않습니다. 신고서 서식에도 대표자의 외국인등록번호를 적는 칸이 있고, 담당 공무원이 확인하는 법인 등기사항증명서는 외국법인이라면 아포스티유 협약에 따른 증명서 등으로 갈음할 수 있다고 적혀 있습니다. 따라서 해외 본사 명의 그대로 신고하는 것이 가능합니다.<!-- 근거: 전기통신사업법 제8조 제1항, 과기정통부규정 별지 제4호서식 --></p>
<table><thead><tr><th>구분</th><th>외국법인 제한</th><th>절차</th></tr></thead><tbody>
<tr><td>기간통신사업</td><td>일정 기준 사업은 외국정부·외국법인 등록 불가, 외국인 지분 제한</td><td>등록</td></tr>
<tr><td>부가통신사업</td><td>결격·지분 제한 조항 없음</td><td>신고(소규모는 신고 간주)</td></tr>
<tr><td>특수한 유형 부가통신사업</td><td>등록 취소 후 3년이 지나지 않은 자 등 별도 결격<!-- 근거: 전기통신사업법 제22조의2 --></td><td>등록<!-- 근거: 전기통신사업법 제7조, 제8조, 제22조 제1항·제2항·제5항 --></td></tr>
</tbody></table>

<h2>국내대리인 지정 대상과 요건</h2>
<p>국내대리인은 모든 해외 사업자가 두는 것이 아닙니다. 국내에 주소나 영업소가 없는 부가통신사업자 가운데, 전년도 말 기준 직전 3개월간 하루 평균 국내 이용자 수가 100만명 이상이고 국내 트래픽이 전체의 100분의 1 이상인 사업자, 즉 두 기준을 모두 넘는 사업자만 서면으로 지정해야 합니다.<!-- 근거: 전기통신사업법 제22조의7 제1항, 제22조의8 제1항, 시행령 제30조의8 제1항 --></p>
<ol><li>국내대리인이 맡는 일: 이용자 요구사항 처리를 위한 국내 연락 수단 확보, 서비스 안정성 조치 관련 자료 제출, 이용자 보호 업무, 자료제출명령 이행입니다.</li><li>자격: 국내에 주소나 영업소가 있어야 합니다.</li><li>선택 범위: 그 사업자가 세운 국내 법인이나 임원 구성·사업 운영에 지배적 영향력을 행사하는 국내 법인이 있으면 그 가운데서 지정해야 합니다.</li><li>책임: 국내대리인이 해당 업무로 법을 어기면 지정한 사업자가 한 것으로 봅니다.</li><li>연락: 국내대리인은 사업자와 유효한 연락수단을 확보해야 합니다.<!-- 근거: 전기통신사업법 제22조의8 제1항~제4항 --></li></ol>
<p>기준에 해당하는 사업자는 서비스 안정수단과 한국어 이용자 요구 처리 체계 같은 조치를 갖추고, 그 이행 현황과 계획 자료를 매년 1월 말까지 제출합니다. 국내대리인을 지정하지 않거나 요건에 맞지 않게 지정하면 과태료 대상입니다.<!-- 근거: 전기통신사업법 제22조의7 제3항, 제104조 제3항 제1호의3, 시행령 제30조의8 제2항 --></p>

<h2>외국법인이 준비할 서류</h2>
<p>신고서와 첨부서류의 기본 틀은 국내 기업과 같습니다. 부가통신사업 신고서에 개인정보를 취급하면 개인정보보호조치 구축 명세서를, 새로운 유형의 역무로서 요구를 받으면 통신망구성도를 붙입니다. 외국법인은 법인 등기사항증명서 대신 본국 법인 증명서에 아포스티유를 받은 서류 등을 준비해 두는 것이 실무상 가장 큰 차이입니다.<!-- 근거: 시행령 제29조 제1항·제3항, 과기정통부규정 별지 제4호서식 --></p>
<p>개인정보 보호법에도 국내대리인 제도가 있지만 이것은 매출액·개인정보 보유 규모 등 그 법의 기준으로 따로 판단하는 별개 의무이므로, 두 법의 대상 여부를 각각 확인해야 합니다. 유선행정사사무소는 외국기업의 서비스 구조와 이용자 규모를 듣고 신고 대상·국내대리인 해당 여부를 판단한 뒤 신고서 작성과 접수를 돕습니다.<!-- 근거: 개인정보 보호법 제31조의2 제1항·제2항 --></p>

<div class="faq-section"><h2>자주 묻는 질문 (FAQ)</h2>
<div class="faq-item"><p class="faq-q">Q. 한국에 지사나 법인을 먼저 세워야 신고할 수 있나요?</p><p class="faq-a">A. 부가통신사업 신고 조항에는 그런 요건이 없습니다. 외국법인 명의로 신고서를 낼 수 있고, 법인 확인 서류는 아포스티유 증명서 등으로 갈음할 수 있습니다.<!-- 근거: 전기통신사업법 제22조 제1항, 과기정통부규정 별지 제4호서식 --></p></div>
<div class="faq-item"><p class="faq-q">Q. 이용자가 적은 해외 앱도 국내대리인을 둬야 하나요?</p><p class="faq-a">A. 아닙니다. 하루 평균 국내 이용자 100만명 이상과 국내 트래픽 100분의 1 이상을 모두 충족할 때만 전기통신사업법상 지정 의무가 생깁니다. 개인정보 보호법상 의무는 따로 확인합니다.<!-- 근거: 시행령 제30조의8 제1항, 개인정보 보호법 제31조의2 --></p></div>
<div class="faq-item"><p class="faq-q">Q. 국내에 자회사가 있으면 아무나 국내대리인으로 정해도 되나요?</p><p class="faq-a">A. 아닙니다. 직접 세운 국내 법인이나 지배적 영향력을 행사하는 국내 법인이 있으면 그 법인 가운데서 지정해야 합니다.<!-- 근거: 전기통신사업법 제22조의8 제2항 --></p></div>
<div class="faq-item"><p class="faq-q">Q. 해외 서버에서 서비스하면 한국법이 적용되지 않나요?</p><p class="faq-a">A. 국외에서 이루어진 행위라도 국내 시장이나 이용자에게 영향을 미치면 전기통신사업법이 적용됩니다.<!-- 근거: 전기통신사업법 제2조의2 --></p></div>
</div>

<div class="cta-block"><h3>해외 서비스의 한국 신고 여부부터 확인하세요</h3><p>서비스 구조와 한국 이용자 규모를 알려 주시면 유선행정사사무소가 신고 대상, 국내대리인 해당 여부, 필요한 서류를 정리해 드립니다. 진행 범위는 <a href="/services/telecom-business">정보통신분야 인허가 안내</a>에서 확인하실 수 있습니다. 전화 02-325-8222, 평일 09:30~17:30 KST.</p><a href="/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">상담 신청하기</a></div>
<p class="author-block">유선행정사사무소 (대표 행정사 정유선)<!-- 근거: 전기통신사업법 제2조의2·제7조·제8조·제22조·제22조의7·제22조의8·제104조, 시행령 제29조·제30조의8, 과기정통부규정 별지 제4호서식, 개인정보 보호법 제31조의2 --></p>`,
  },

  en: {
    title: 'Can a Foreign Company File a Value-Added Telecom Report in Korea? Domestic Agent Rules Explained',
    category: 'IT & Telecom',
    metaTitle: 'Foreign Company Value-Added Telecom Report in Korea',
    metaDescription: 'Can a foreign company without a Korean entity file a value-added telecom report? Who must appoint a domestic agent, the agent rules and documents to prepare.',
    excerpt: 'Korea’s value-added telecom report has no rule barring foreign corporations. The Telecommunications Business Act applies to acts abroad that affect Korean users, and overseas operators above the user and traffic thresholds must appoint a domestic agent in writing.',
    content: `<div class="toc"><p>Contents</p><ol><li>Can a foreign corporation report?</li><li>Who must appoint a domestic agent</li><li>Documents for foreign corporations</li><li>FAQ</li></ol></div>
<p><strong>A foreign company with no Korean entity can still file a value-added telecommunications business report. The rule disqualifying foreign governments and corporations applies only to basic telecom registration, and the value-added report provision has no such restriction. The Act also applies to acts abroad that affect the Korean market or users.</strong></p>
<p>First check whether your service must report at all on <a href="/en/blog/telecom-report-online-mall-app">our guide to who must report</a>. If the same app uses Korean users’ location, see <a href="/en/blog/location-based-service-business-registration-foreign-company">location-based service reports for foreign companies</a>.</p>

<h2>Can a foreign corporation report?</h2>
<p>Foreign shareholding limits also apply only to basic telecom operators, not to overseas apps and platforms offering value-added services. The report form has a field for an alien registration number, and it states that for a foreign corporation the corporate register may be replaced by a certificate under the Apostille Convention.</p>
<table><thead><tr><th>Type</th><th>Foreign restriction</th><th>Procedure</th></tr></thead><tbody>
<tr><td>Basic telecom</td><td>Certain businesses closed to foreign governments and corporations; shareholding limits</td><td>Registration</td></tr>
<tr><td>Value-added telecom</td><td>No disqualification or shareholding rule</td><td>Report (deemed for small operators)</td></tr>
<tr><td>Special-type value-added</td><td>Separate grounds, such as within 3 years of cancellation</td><td>Registration</td></tr>
</tbody></table>

<h2>Who must appoint a domestic agent</h2>
<p>Not every overseas operator needs one. Only operators with no address or office in Korea whose average daily Korean users were 1 million or more and whose Korean traffic was at least 1 percent of the total, over the last 3 months of the previous year, must appoint a domestic agent in writing. Both thresholds must be met.</p>
<ol><li>Duties: a local contact channel for user requests, submitting service stability materials, user protection work, and complying with orders to submit materials.</li><li>Qualification: the agent must have an address or office in Korea.</li><li>Choice: if you set up or control a Korean entity, you must choose among those entities.</li><li>Liability: the agent’s violations are treated as yours.</li><li>Contact: the agent must keep an effective channel with you.</li></ol>
<p>Operators above the thresholds must also maintain service stability measures, including handling user requests in Korean, and submit their status and plans each year by the end of January. Failing to appoint, or appointing improperly, is subject to an administrative fine.</p>

<h2>Documents for foreign corporations</h2>
<p>The core set matches domestic filers: the report form, a personal data protection measures statement if you handle personal data, and a network diagram only if requested. In practice the main difference is preparing your home-country corporate certificate with an apostille in place of a Korean corporate register.</p>
<p>The Personal Information Protection Act has its own domestic agent rule, judged by that Act’s own criteria such as revenue and data volume, so check each obligation separately. YouSun Administrative Agency reviews your service and Korean user base, confirms whether you must report or appoint an agent, and prepares and files the report.</p>

<div class="faq-section"><h2>FAQ</h2>
<div class="faq-item"><p class="faq-q">Q. Must we set up a Korean branch or subsidiary first?</p><p class="faq-a">A. The report provision has no such requirement. You can file in the foreign corporation’s name, and corporate proof may be an apostilled certificate.</p></div>
<div class="faq-item"><p class="faq-q">Q. Does a small overseas app need a domestic agent?</p><p class="faq-a">A. No. Under this Act the duty arises only when both 1 million daily users and 1 percent of traffic are met. Check personal data rules separately.</p></div>
<div class="faq-item"><p class="faq-q">Q. Can any Korean subsidiary serve as the agent?</p><p class="faq-a">A. If you set up or control a Korean entity, you must choose among those entities.</p></div>
<div class="faq-item"><p class="faq-q">Q. Does Korean law apply if our servers are abroad?</p><p class="faq-a">A. Yes, if the activity affects the Korean market or users.</p></div>
</div>

<div class="cta-block"><h3>Check your Korean filing duties first</h3><p>Tell us your service structure and Korean user base, and YouSun Administrative Agency will confirm reporting, domestic agent duties and documents. Call 02-325-8222, weekdays 09:30~17:30 KST.</p><a href="/en/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">Request a consultation</a></div>
<p class="author-block">YouSun Administrative Agency (Chief Administrative Agent Jung Yu-sun)</p>`,
  },

  zh: {
    title: '外国企业在韩国做增值电信业务申报：没有韩国法人能申报吗？何时须指定国内代理人？',
    category: 'IT·通信',
    metaTitle: '外国企业韩国增值电信业务申报 — 外国法人申报与国内代理人',
    metaDescription: '没有韩国法人的外国企业能否做增值电信业务申报？外国法人材料的确认方式、须指定国内代理人的对象（用户数·流量标准）与要件，以及与个人信息保护法国内代理人的区别。',
    excerpt: '增值电信业务申报条款没有排除外国法人的规定。在境外的行为只要影响韩国用户，也适用《电气通信事业法》；用户数和流量超过标准的境外经营者须书面指定国内代理人。',
    content: `<div class="toc"><p>目录</p><ol><li>外国法人能否申报</li><li>须指定国内代理人的对象与要件</li><li>外国法人要准备的材料</li><li>常见问题</li></ol></div>
<p><strong>没有韩国法人的外国企业，也可以做增值电信业务（부가통신사업）申报。《电气通信事业法》中把外国政府·外国法人列为不得登记的条款，针对的是基础电信业务登记；增值电信业务申报条款没有这种限制。而且即使行为发生在境外，只要影响韩国市场或用户，也适用该法。</strong></p>
<p>是否属于申报对象，请先看<a href="/zh/blog/telecom-report-online-mall-app">增值电信申报对象判断</a>。同一App使用韩国用户位置的，另见<a href="/zh/blog/location-based-service-business-registration-foreign-company">外国法人位置基础服务申报</a>。</p>

<h2>外国法人能否申报</h2>
<p>外资持股限制同样只针对基础电信事业者，不适用于只提供增值电信服务的境外App和平台。申报书格式中有填写外国人登录号码的栏位，并注明外国法人的法人登记事项证明书可用海牙认证（Apostille）公约规定的证明书等代替。</p>
<table><thead><tr><th>类别</th><th>外国法人限制</th><th>程序</th></tr></thead><tbody>
<tr><td>基础电信</td><td>一定业务不允许外国政府·法人登记，有外资持股限制</td><td>登记</td></tr>
<tr><td>增值电信</td><td>无失格·持股限制条款</td><td>申报（小规模视为申报）</td></tr>
<tr><td>特殊类型增值电信</td><td>登记被撤销未满3年等另有失格事由</td><td>登记</td></tr>
</tbody></table>

<h2>须指定国内代理人的对象与要件</h2>
<p>并非所有境外经营者都须指定。在韩国没有住所或营业所的增值电信事业者中，以上一年末为准、此前3个月日均韩国用户100万名以上，且韩国流量占全部的100分之1以上，两项都满足的，才须书面指定国内代理人。</p>
<ol><li>代理事项：为处理用户要求确保韩国联系渠道、提交服务稳定性相关材料、用户保护业务、履行材料提交命令。</li><li>资格：须在韩国有住所或营业所。</li><li>选择范围：有自己设立或具有支配性影响的韩国法人时，须从中指定。</li><li>责任：代理人就上述事项违法的，视为该事业者的行为。</li><li>联络：代理人须与事业者保持有效联系。</li></ol>
<p>达到标准的事业者还须采取服务稳定和韩语处理用户要求等措施，并在每年1月底前提交履行情况和计划。不指定或违反要件指定的，属于罚款（过怠金）对象。</p>

<h2>外国法人要准备的材料</h2>
<p>基本材料与韩国企业相同：申报书，处理个人信息时附个人信息保护措施构建明细，新类型服务被要求时附网络构成图。实务上最大的不同，是用经海牙认证的本国法人证明代替韩国法人登记事项证明书。</p>
<p>个人信息保护法也有国内代理人制度，但要按该法的销售额、个人信息保有规模等标准另行判断，两法的义务须分别确认。YouSun Administrative Agency根据服务结构和韩国用户规模，判断是否须申报和指定国内代理人，并协助制作和提交申报书。</p>

<div class="faq-section"><h2>常见问题</h2>
<div class="faq-item"><p class="faq-q">Q. 必须先在韩国设立分公司或法人吗？</p><p class="faq-a">A. 申报条款没有这一要求。可用外国法人名义申报，法人证明可用海牙认证证明书等代替。</p></div>
<div class="faq-item"><p class="faq-q">Q. 用户不多的境外App也要国内代理人吗？</p><p class="faq-a">A. 不用。依该法，只有同时满足日均用户100万名和流量100分之1两项标准才有义务。个人信息方面另行确认。</p></div>
<div class="faq-item"><p class="faq-q">Q. 有韩国子公司时，可以随便指定吗？</p><p class="faq-a">A. 不可以。有自己设立或支配的韩国法人时，须从中指定。</p></div>
<div class="faq-item"><p class="faq-q">Q. 服务器在境外就不适用韩国法吗？</p><p class="faq-a">A. 只要影响韩国市场或用户，也适用该法。</p></div>
</div>

<div class="cta-block"><h3>先确认境外服务在韩国的申报义务</h3><p>告诉我们服务结构和韩国用户规模，YouSun Administrative Agency为你确认是否须申报、是否须指定国内代理人及所需材料。电话 02-325-8222，工作日 09:30~17:30 KST。</p><a href="/zh/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">申请咨询</a></div>
<p class="author-block">YouSun Administrative Agency（代表行政士 Jung Yu-sun）</p>`,
  },

  ja: {
    title: '外国企業の韓国付加通信事業申告：韓国法人なしで申告できる？国内代理人が必要なのはいつ？',
    category: 'IT・通信',
    metaTitle: '外国企業の韓国付加通信事業申告 — 外国法人の申告と国内代理人',
    metaDescription: '韓国法人のない外国企業が付加通信事業の申告をできるか、外国法人の書類確認の方法、国内代理人の指定対象（利用者数・トラフィック基準）と要件、個人情報保護法の国内代理人との違いを解説します。',
    excerpt: '付加通信事業の申告規定には外国法人を排除する欠格規定がありません。国外の行為でも韓国の利用者に影響すれば電気通信事業法が適用され、利用者数とトラフィックが基準を超える海外事業者は国内代理人を書面で指定します。',
    content: `<div class="toc"><p>目次</p><ol><li>外国法人も申告できるか</li><li>国内代理人の指定対象と要件</li><li>外国法人が準備する書類</li><li>よくある質問</li></ol></div>
<p><strong>韓国に法人のない外国企業でも、付加通信事業（부가통신사업）の申告はできます。電気通信事業法で外国政府・外国法人を欠格とする規定は基幹通信事業の登録に関するもので、付加通信事業の申告規定にはそのような制限がありません。むしろ国外で行われた行為でも、韓国の市場や利用者に影響すれば同法が適用されます。</strong></p>
<p>申告の対象かどうかは<a href="/ja/blog/telecom-report-online-mall-app">付加通信事業申告の対象判断</a>で先に確認してください。同じアプリで韓国の利用者の位置を使うなら、<a href="/ja/blog/location-based-service-business-registration-foreign-company">外国法人の位置基盤サービス申告</a>も別途確認が必要です。</p>

<h2>外国法人も申告できるか</h2>
<p>外国人の持株制限も基幹通信事業者に関する規定で、付加通信役務だけを提供する海外のアプリ・プラットフォームには適用されません。申告書の様式には外国人登録番号の欄があり、外国法人の法人登記事項証明書はアポスティーユ条約に基づく証明書などで代えられると記載されています。</p>
<table><thead><tr><th>区分</th><th>外国法人の制限</th><th>手続</th></tr></thead><tbody>
<tr><td>基幹通信事業</td><td>一定の事業は外国政府・外国法人は登録不可、持株制限あり</td><td>登録</td></tr>
<tr><td>付加通信事業</td><td>欠格・持株制限の規定なし</td><td>申告（小規模はみなし申告）</td></tr>
<tr><td>特殊な類型の付加通信事業</td><td>登録取消しから3年を経ない者など別の欠格</td><td>登録</td></tr>
</tbody></table>

<h2>国内代理人の指定対象と要件</h2>
<p>海外事業者すべてが置くわけではありません。韓国に住所や営業所のない付加通信事業者のうち、前年末基準で直前3か月間の一日平均の国内利用者数が100万人以上で、かつ国内トラフィックが全体の100分の1以上という、二つの基準をともに満たす事業者だけが書面で指定します。</p>
<ol><li>代理する業務：利用者の要求処理のための国内連絡手段の確保、サービス安定性に関する資料提出、利用者保護業務、資料提出命令の履行。</li><li>資格：韓国に住所または営業所があること。</li><li>選ぶ範囲：自ら設立した国内法人や支配的影響力を持つ国内法人があれば、その中から指定します。</li><li>責任：国内代理人の違反は指定した事業者の行為とみなされます。</li><li>連絡：国内代理人は事業者と有効な連絡手段を確保します。</li></ol>
<p>基準に当たる事業者は、サービス安定手段や韓国語での利用者要求の処理体制などの措置を整え、その履行状況と計画を毎年1月末までに提出します。国内代理人を指定しない、または要件に反して指定すると過料の対象です。</p>

<h2>外国法人が準備する書類</h2>
<p>基本は国内企業と同じで、申告書に、個人情報を扱う場合は個人情報保護措置構築明細書、新しい類型の役務で求められた場合は通信網構成図を添付します。実務上の大きな違いは、韓国の法人登記事項証明書の代わりに本国の法人証明書にアポスティーユを付けた書類などを準備する点です。</p>
<p>個人情報保護法にも国内代理人制度がありますが、売上高や個人情報の保有規模など同法の基準で別に判断する義務なので、両法の対象かどうかをそれぞれ確認します。YouSun Administrative Agencyは、サービス構造と韓国の利用者規模をうかがい、申告と国内代理人の要否を判断したうえで申告書の作成と提出をサポートします。</p>

<div class="faq-section"><h2>よくある質問</h2>
<div class="faq-item"><p class="faq-q">Q. 先に韓国に支店や法人を作る必要がありますか。</p><p class="faq-a">A. 申告規定にそのような要件はありません。外国法人名義で申告でき、法人の証明はアポスティーユ付きの証明書などで代えられます。</p></div>
<div class="faq-item"><p class="faq-q">Q. 利用者の少ない海外アプリも国内代理人が必要ですか。</p><p class="faq-a">A. いいえ。同法では一日平均100万人と100分の1のトラフィックの両方を満たす場合だけです。個人情報保護法の義務は別に確認します。</p></div>
<div class="faq-item"><p class="faq-q">Q. 韓国の子会社なら誰でも国内代理人にできますか。</p><p class="faq-a">A. 自ら設立した、または支配する国内法人があれば、その中から指定する必要があります。</p></div>
<div class="faq-item"><p class="faq-q">Q. サーバーが海外なら韓国法は適用されませんか。</p><p class="faq-a">A. 韓国の市場や利用者に影響すれば適用されます。</p></div>
</div>

<div class="cta-block"><h3>海外サービスの韓国での申告義務を確認しましょう</h3><p>サービス構造と韓国の利用者規模をお知らせいただければ、YouSun Administrative Agencyが申告・国内代理人の要否と必要書類を整理します。電話 02-325-8222、平日 09:30~17:30 KST。</p><a href="/ja/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">相談を申し込む</a></div>
<p class="author-block">YouSun Administrative Agency（代表行政士 Jung Yu-sun）</p>`,
  },
}

// 틀리기 쉬운 인허가 구분 오기(4언어) — 부가통신사업은 '신고', 국내대리인은 '지정', 기간통신만 '등록'
entry.wrongTerms = [
  '부가통신사업 허가', '부가통신사업 등록증', '국내대리인 신고', '국내대리인 등록', '외국법인 신고 불가',
  'value-added telecom license', 'domestic agent registration', 'telecom business permit',
  '增值电信业务许可', '国内代理人登记',
  '付加通信事業の許可', '国内代理人の登録',
]

export default entry
