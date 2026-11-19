// 원고 은행 — INHE-BANK-1119 보충(담당 A, 2026-11-19, kind=seo3958, angle=post-management)
// 주제(풀): lbs(위치기반서비스사업신고) / 질문: "위치기반서비스사업 신고를 마친 뒤 사업자가 지켜야 할 의무는 무엇인가"
// 검색어: '위치기반서비스사업자 의무'(배정표 대표 검색어안)
//
// 겹침 검사: location-based-service-fix(미신고 처벌·과태료·휴폐업 신고·정지 처분) → 제재·휴폐업 절차는 링크·한 줄만.
//   location-based-service-change-report(변경신고·양수 합병) → 링크만. location-based-service-domestic-registration-guide 의 '보호 의무' 절은
//   항목 나열(동의·파기·안전조치)뿐 → 이 글은 "약관 공개·명시 항목, 제3자 제공 통보(즉시/모아서), 확인자료 기록·보존, 열람·정정·중지·철회 대응,
//   파기·보유, 처리방침, 14세 미만·8세 이하" 운영 의무만 다룬다. 같은 배치 location-based-service-report-documents 는 라이브 아님 → 링크 안 함.
//
// 법령 대조(law.go.kr DRF OC=visionlaw, 2026-11-19 로컬 사본 ~/work/inhebank-1119/law):
//   위치정보의 보호 및 이용 등에 관한 법률 MST 277359(2025. 10. 1. 시행, 소관 방송미디어통신위원회) — 제11조 제1항·제2항(휴폐업 30일 전 통보·신고, 파기),
//     제12조 제1항(이용약관 공개·변경 시 지체 없이 공개), 제16조 제1항·제2항(보호조치, 확인자료 자동 기록·보존), 제19조 제1항~제5항(약관 명시·동의,
//     제3자 제공 고지·동의, 매회 즉시 통보, 최대 30일 모아서 통보, 동의 유보), 제21조의2(개인위치정보 처리방침 포함 사항), 제23조 제1항·제2항(파기),
//     제24조 제1항~제4항(철회·일시 중지·열람·고지·정정, 철회 시 파기), 제25조 제1항(14세 미만 법정대리인 동의), 제26조 제1항(8세 이하의 아동등 보호의무자 동의),
//     제43조 제2항(약관 미공개·명시 위반·통보 미이행·처리방침·열람 거절 등 과태료 — 금액 미표시)
//   같은 법 시행령 MST 283269(2026. 2. 10. 시행) — 제13조 제2호(홈페이지 또는 단말기 첫 화면·연결화면 공개), 제23조(이용·제공 시 명시사항 = 통보에 관한 사항),
//     제24조 제1항~제5항(통보 단말기, 모아서 통보 선택 고지·별도 동의, 10회·20회·30회 등 10배수 / 10일·20일·30일, 30일마다), 제26조의2 제2항·제3항(별도 동의 시 최대 1년 보유)
//   위치정보의 관리적·기술적 보호조치 기준(고시 ID 2100000279386, 2026. 5. 18. 시행) — 제6조 제1항·제2항·제5항(취급대장: 확인자료·열람 고지 사실, 최소 6개월 보관)
// 인허가 구분: 위치기반서비스사업 = '신고', 이후 의무는 '공개'·'동의'·'통보'·'열람'·'파기'(인허가 아님). 휴폐업 = '신고'(개인위치정보사업의 휴폐업만 '승인').
// 확신 없어 뺀 것: 확인자료 자체의 법정 보존기간(법은 '자동 기록·보존'만, 고시는 취급대장 6개월 — 확인자료 기간 단정 안 함), 열람 요구 처리 기한(조문 없음),
//   위치정보 유출 신고 의무(위치정보법 조문 확인 못 함 — 개인정보 보호법 쪽은 이 글 범위 밖), 통계자료 반기 제출(위치정보사업자 의무 — 위치기반서비스사업자 아님, 뺌),
//   과태료·벌금 금액(S4).

const SLUG = 'location-based-service-operator-duties'

const entry = {
  topic: 'lbs',
  angle: 'post-management',
  slug: SLUG,
  kind: 'seo3958',
  keyword: '위치기반서비스사업자 의무',
  source: { type: 'assignment', query: '위치기반서비스사업자 의무' },
  pexelsId: 5448155,
  coverImage: '',
  relatedServices: [
    { title: '위치기반서비스사업 신고', href: '/services/location-based-service' },
  ],

  ko: {
    title: '위치기반서비스사업자 의무 — 신고 뒤 약관·동의·제공 통보·확인자료·열람 대응',
    category: 'IT·통신',
    metaTitle: '위치기반서비스사업자 의무 — 신고 후 약관·동의·통보·파기 정리표',
    metaDescription: '위치기반서비스사업 신고 뒤 지켜야 할 의무를 모았습니다. 이용약관 공개와 명시 항목, 동의, 제3자 제공 즉시·모아서 통보, 확인자료 자동 기록, 열람·정정·철회 대응, 파기와 아동 동의까지.',
    excerpt: '위치기반서비스사업 신고는 시작일 뿐입니다. 이용약관을 공개하고 정해진 항목을 명시해 동의를 받아야 하며, 제3자에게 제공하면 매회 통보하고, 이용·제공사실 확인자료가 자동으로 기록되게 해야 합니다. 열람·철회 요구와 파기도 기한 없이 바로 대응하는 의무입니다.',
    content: `<div class="toc"><p>목차</p><ol><li>이용약관 공개와 동의</li><li>제3자 제공 통보와 확인자료</li><li>이용자 요구 대응과 파기</li><li>자주 묻는 질문 (FAQ)</li></ol></div>
<p><strong>위치기반서비스사업자는 신고를 마친 뒤에도 이용약관을 홈페이지나 앱 첫 화면에서 볼 수 있게 공개하고, 정해진 항목을 약관에 명시한 뒤 개인위치정보주체의 동의를 받아야 합니다. 개인위치정보를 제3자에게 제공하면 매회 통보하고, 이용·제공사실 확인자료가 위치정보시스템에 자동으로 기록·보존되게 해야 합니다.</strong><!-- 근거: 위치정보의 보호 및 이용 등에 관한 법률 제12조 제1항, 제16조 제2항, 제19조 제1항·제3항, 시행령 제13조 제2호 --></p>
<p>신고 대상인지부터 궁금하다면 <a href="/blog/location-based-service-map-feature-app">위치기반서비스 신고 대상 판단</a>을, 상호·서버가 바뀌는 경우는 <a href="/blog/location-based-service-change-report">위치기반서비스사업 변경신고</a>를, 위반 시 제재와 휴업·폐업 신고는 <a href="/blog/location-based-service-fix">미신고 처벌·휴업 폐업 신고</a>를 보세요. 아래는 매일 서비스를 운영하면서 지켜야 하는 의무입니다.</p>

<h2>이용약관 공개와 동의</h2>
<p>이용약관은 홈페이지 또는 서비스를 제공하는 단말기의 첫 화면이나 그와 연결된 화면에서 글자 크기·색상 등으로 쉽게 확인할 수 있게 공개합니다. 약관을 바꿀 때는 변경 이유와 내용을 지체 없이 공개합니다.<!-- 근거: 위치정보법 제12조 제1항, 시행령 제13조 --></p>
<table><thead><tr><th>약관에 명시할 항목</th><th>실무 확인</th></tr></thead><tbody>
<tr><td>사업자의 상호, 주소, 전화번호 등 연락처</td><td>신고한 상호·주소와 일치하는지</td></tr>
<tr><td>개인위치정보주체와 법정대리인의 권리와 행사 방법</td><td>철회·중지·열람 요청 창구를 적었는지</td></tr>
<tr><td>제공하려는 위치기반서비스의 내용</td><td>앱 기능과 같은지</td></tr>
<tr><td>이용·제공사실 확인자료의 보유 이유와 보유기간, 개인위치정보의 보유목적과 보유기간</td><td>실제 저장 기간과 같은지</td></tr>
<tr><td>제3자 제공 시 통보에 관한 사항</td><td>즉시 통보인지 모아서 통보인지<!-- 근거: 위치정보법 제19조 제1항, 시행령 제23조 --></td></tr>
</tbody></table>
<p>이용자는 수집 범위나 약관 일부에 대해 동의를 유보할 수 있습니다. 14세 미만 아동의 개인위치정보는 법정대리인의 동의를 받고 그 동의를 확인해야 하며, 8세 이하의 아동 등은 보호의무자가 생명·신체 보호를 위해 동의하면 본인 동의로 봅니다.<!-- 근거: 위치정보법 제19조 제5항, 제25조 제1항, 제26조 제1항 --></p>

<h2>제3자 제공 통보와 확인자료</h2>
<p>이용자가 지정한 제3자에게 개인위치정보를 주는 서비스라면, 제공받는 자와 제공목적을 고지하고 동의를 받은 뒤 제공할 때마다 제공받는 자, 제공일시, 제공목적을 즉시 통보합니다. 통보는 원칙적으로 위치정보를 수집한 그 단말기로 합니다.<!-- 근거: 위치정보법 제19조 제2항·제3항, 시행령 제24조 제1항 --></p>
<ol><li>모아서 통보하려면 즉시 통보와 모아서 통보 중 고를 수 있다고 알린 뒤 별도로 동의를 받습니다.</li><li>모으는 단위는 10회·20회·30회처럼 10의 배수 횟수 또는 10일·20일·30일 기간이고, 최대 30일 범위입니다.<!-- 근거: 위치정보법 제19조 제4항, 시행령 제24조 제4항 --></li><li>횟수 방식이라도 처음 제공한 날부터 30일이 될 때마다 남은 내역을 통보합니다.<!-- 근거: 위치정보법 제19조 제4항, 시행령 제24조 제2항~제5항 --></li></ol>
<p>이용·제공사실 확인자료는 사람이 따로 적는 것이 아니라 위치정보시스템에 자동으로 기록·보존되게 해야 합니다. 확인자료와 열람·고지 사실을 담은 취급대장은 최소 6개월 이상 보관합니다.<!-- 근거: 위치정보법 제16조 제2항, 위치정보의 관리적·기술적 보호조치 기준 제6조 제1항·제2항·제5항 --></p>
<p>위치정보를 지키는 관리적·기술적 조치도 신고 때 서류로 낸 수준 그대로 유지해야 합니다. 위치정보관리책임자 지정, 단계별 접근 권한 제한, 접근 기록 자동 보존, 암호화 같은 조치가 그 내용이며, 방송미디어통신위원회는 소속 공무원을 통해 조치 내용과 기록 보존 실태를 점검할 수 있습니다. 종업원이었던 사람을 포함해 직무상 알게 된 위치정보를 누설해서는 안 되고, 이용자에게 위치정보 처리 사항을 알릴 때는 이해하기 쉬운 양식과 말을 써야 합니다.<!-- 근거: 위치정보법 제16조 제1항·제3항, 제17조, 제17조의2, 시행령 제20조 --></p>

<h2>이용자 요구 대응과 파기</h2>
<p>이용자는 언제든 동의를 철회하거나 수집·이용·제공의 일시 중지를 요구할 수 있고, 사업자는 중지 요구를 거절할 수 없으며 그 기술적 수단을 갖춰야 합니다. 본인 확인자료와 제3자 제공 이유·내용의 열람·고지를 요구하면 정당한 사유 없이 거절하지 못하고, 오류가 있으면 정정합니다. 동의를 철회하면 해당 개인위치정보와 확인자료를 지체 없이 파기합니다.<!-- 근거: 위치정보법 제24조 제1항~제4항 --></p>
<p>목적을 달성한 개인위치정보는 확인자료를 빼고 즉시 파기하고, 복구·재생을 막는 조치를 합니다. 이용자가 보유에 별도로 동의하면 동의한 때부터 최대 1년까지 보유할 수 있습니다. 개인정보 처리방침에는 개인위치정보의 처리목적·보유기간, 확인자료의 보유기간, 파기 절차, 제3자 제공 사항 등을 넣습니다.<!-- 근거: 위치정보법 제21조의2, 제23조 제1항·제2항, 시행령 제26조의2 제2항·제3항 --> 유선행정사사무소는 약관·동의 화면·처리방침 문구 점검과 신고 이후 변경 일정 관리를 돕습니다.</p>

<div class="faq-section"><h2>자주 묻는 질문 (FAQ)</h2>
<div class="faq-item"><p class="faq-q">Q. 약관을 앱 안 깊은 메뉴에만 두어도 되나요?</p><p class="faq-a">A. 홈페이지나 단말기 첫 화면 또는 그와 연결된 화면에서 쉽게 확인할 수 있어야 합니다. 공개하지 않으면 과태료 대상입니다.<!-- 근거: 시행령 제13조 제2호, 위치정보법 제43조 제2항 제3호 --></p></div>
<div class="faq-item"><p class="faq-q">Q. 친구 위치 공유 기능도 매번 통보해야 하나요?</p><p class="faq-a">A. 이용자가 지정한 제3자에게 제공하는 경우이므로 원칙은 매회 즉시 통보입니다. 별도 동의를 받으면 최대 30일 범위에서 모아서 통보할 수 있습니다.<!-- 근거: 위치정보법 제19조 제3항·제4항 --></p></div>
<div class="faq-item"><p class="faq-q">Q. 서비스를 접을 때는 무엇을 하나요?</p><p class="faq-a">A. 폐업 예정일 30일 전까지 이용자에게 알리고 신고하며, 개인위치정보와 확인자료를 파기합니다.<!-- 근거: 위치정보법 제11조 제2항 --></p></div>
</div>

<div class="cta-block"><h3>신고 뒤 운영 의무까지 점검하세요</h3><p>앱의 위치 기능과 약관·동의 화면을 보여 주시면 유선행정사사무소가 빠진 의무를 찾아 정리해 드립니다. 진행 범위는 <a href="/services/location-based-service">위치기반서비스사업 신고 안내</a>에서 확인하실 수 있습니다. 전화 02-325-8222, 평일 09:30~17:30 KST.</p><a href="/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">상담 신청하기</a></div>
<p class="author-block">유선행정사사무소 (대표 행정사 정유선)<!-- 근거: 위치정보법 제11조·제12조·제16조·제19조·제21조의2·제23조~제26조·제43조, 시행령 제13조·제23조·제24조·제26조의2, 보호조치 기준 제6조 --></p>`,
  },

  en: {
    title: 'Duties of Location-Based Service Operators in Korea After Filing: Terms, Consent, Notices and Records',
    category: 'IT & Telecom',
    metaTitle: 'Location-Based Service Operator Duties in Korea',
    metaDescription: 'What location-based service operators in Korea must do after reporting: publish terms, get consent, notify third-party sharing, keep records, handle requests.',
    excerpt: 'Reporting is only the start. Location-based service operators in Korea must publish their terms, state required items and get consent, notify users each time data goes to a third party, keep automatic use and provision records, and respond to access and withdrawal requests.',
    content: `<div class="toc"><p>Contents</p><ol><li>Publishing terms and getting consent</li><li>Third-party notices and records</li><li>User requests and deletion</li><li>FAQ</li></ol></div>
<p><strong>After reporting, a location-based service operator must publish its terms where users can see them on the website or the app’s first screen, state the required items in the terms and obtain consent. Each time personal location data goes to a third party, users must be notified, and records of use and provision must be logged and kept automatically in the location data system.</strong></p>
<p>See <a href="/en/blog/location-based-service-map-feature-app">who must report</a> and <a href="/en/blog/location-based-service-change-report">change reports</a> for related steps. Below are the day-to-day duties.</p>

<h2>Publishing terms and getting consent</h2>
<p>Terms must be easy to find on the website, or on the device’s first screen or a linked screen, using clear font size and colour. When you change them, publish the reason and content without delay.</p>
<table><thead><tr><th>Item in the terms</th><th>Check</th></tr></thead><tbody>
<tr><td>Operator name, address, phone and contact</td><td>Matches the report</td></tr>
<tr><td>Rights of users and legal guardians and how to use them</td><td>Request channel stated</td></tr>
<tr><td>Content of the service</td><td>Matches the app</td></tr>
<tr><td>Why and how long records and location data are kept</td><td>Matches actual storage</td></tr>
<tr><td>How third-party notices are given</td><td>Immediate or bundled</td></tr>
</tbody></table>
<p>Users may withhold consent for parts of the scope or terms. For children under 14, get and verify a legal guardian’s consent; for children aged 8 or under and certain others, a guardian’s consent for life or safety protection counts as the person’s own.</p>

<h2>Third-party notices and records</h2>
<p>If users choose a third party to receive their location, tell them who receives it and why, get consent, and notify each time the recipient, time and purpose, normally to the device that collected the data.</p>
<ol><li>To bundle notices, tell users they can choose immediate or bundled notices and get separate consent.</li><li>Bundles are counts in multiples of 10, such as 10, 20 or 30, or periods of 10, 20 or 30 days, up to 30 days.</li><li>Even with counts, send remaining notices every 30 days from the first provision.</li></ol>
<p>Use and provision records must be logged automatically by the system, and the handling ledger must be kept for at least 6 months.</p>
<p>Administrative and technical protection measures, such as a location data manager, staged access rights, automatic access logs and encryption, must stay at the level you filed, and officials may inspect them and your record keeping. Current and former staff must not disclose location data learned on the job, and notices to users must use clear forms and plain language.</p>

<h2>User requests and deletion</h2>
<p>Users may withdraw consent or ask for a temporary stop at any time; you cannot refuse a stop request and must have the technical means for it. Access and disclosure requests cannot be refused without good reason, and errors must be corrected. On withdrawal, delete the data and records without delay.</p>
<p>Once the purpose is met, delete location data immediately except the records, in a way that prevents recovery. With separate consent you may keep it for up to 1 year. Your privacy policy must cover purposes, retention, deletion and third-party sharing. YouSun Administrative Agency reviews terms, consent screens and policy text.</p>

<div class="faq-section"><h2>FAQ</h2>
<div class="faq-item"><p class="faq-q">Q. Can the terms sit deep in a menu?</p><p class="faq-a">A. They must be easy to find from the website, first screen or a linked screen. Not publishing them is subject to an administrative fine.</p></div>
<div class="faq-item"><p class="faq-q">Q. Does friend location sharing need a notice every time?</p><p class="faq-a">A. Yes in principle. With separate consent you can bundle notices up to 30 days.</p></div>
<div class="faq-item"><p class="faq-q">Q. What if we shut the service down?</p><p class="faq-a">A. Notify users and report 30 days before closure, and delete location data and records.</p></div>
</div>

<div class="cta-block"><h3>Check your duties after reporting</h3><p>Show us your location features, terms and consent screens, and YouSun Administrative Agency will find what is missing. Call 02-325-8222, weekdays 09:30~17:30 KST.</p><a href="/en/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">Request a consultation</a></div>
<p class="author-block">YouSun Administrative Agency (Chief Administrative Agent Jung Yu-sun)</p>`,
  },

  zh: {
    title: '韩国位置基础服务事业者的义务：申报后的条款、同意、提供通知与确认资料',
    category: 'IT·通信',
    metaTitle: '韩国位置基础服务事业者义务 — 申报后的条款·同意·通知·销毁',
    metaDescription: '韩国位置基础服务事业申报后须履行的义务：公开使用条款和明示事项、取得同意、向第三方提供时即时或汇总通知、确认资料自动记录、查阅·更正·撤回应对、销毁与儿童同意。',
    excerpt: '完成申报只是开始。韩国位置基础服务事业者须公开使用条款、明示规定事项并取得同意，向第三方提供时每次通知，并使利用·提供事实确认资料自动记录，还要应对查阅和撤回请求。',
    content: `<div class="toc"><p>目录</p><ol><li>公开条款与取得同意</li><li>第三方提供通知与确认资料</li><li>用户请求应对与销毁</li><li>常见问题</li></ol></div>
<p><strong>位置基础服务事业者申报后，仍须在网站或App首页上公开使用条款，在条款中明示规定事项后取得个人位置信息主体同意。向第三方提供个人位置信息时每次都要通知，并使利用·提供事实确认资料在位置信息系统中自动记录和保存。</strong></p>
<p>相关步骤见<a href="/zh/blog/location-based-service-map-feature-app">申报对象判断</a>和<a href="/zh/blog/location-based-service-change-report">变更申报</a>。以下是日常运营的义务。</p>

<h2>公开条款与取得同意</h2>
<p>条款须在网站或终端首页、链接页面上，以字号、颜色等方式便于查看。修改时须及时公开修改理由和内容。</p>
<table><thead><tr><th>条款明示事项</th><th>实务检查</th></tr></thead><tbody>
<tr><td>商号、地址、电话等联系方式</td><td>是否与申报一致</td></tr>
<tr><td>主体及法定代理人的权利和行使方法</td><td>是否写明请求窗口</td></tr>
<tr><td>服务内容</td><td>是否与App功能一致</td></tr>
<tr><td>确认资料和位置信息的保有理由与期限</td><td>是否与实际存储一致</td></tr>
<tr><td>第三方提供时的通知方式</td><td>即时还是汇总</td></tr>
</tbody></table>
<p>用户可对部分范围或条款保留同意。未满14岁儿童须取得并确认法定代理人同意；8岁以下儿童等，由保护义务人为保护生命身体而同意的，视为本人同意。</p>

<h2>第三方提供通知与确认资料</h2>
<p>向用户指定的第三方提供位置信息的，须告知接收方和目的并取得同意，每次提供时即时通知接收方、时间和目的，原则上发送到收集信息的终端。</p>
<ol><li>汇总通知须先告知可选即时或汇总，并另行取得同意。</li><li>汇总单位为10次、20次、30次等10的倍数，或10日、20日、30日，最长30日。</li><li>按次数汇总时，也须自首次提供起每30日通知剩余记录。</li></ol>
<p>利用·提供事实确认资料须由系统自动记录保存，处理台账至少保存6个月。</p>
<p>位置信息的管理·技术保护措施也须保持申报时提交的水平，包括指定位置信息管理负责人、分阶段限制访问权限、自动保存访问记录和加密等，广播媒体通信委员会可派公务员检查措施内容和记录保存情况。包括离职员工在内，不得泄露因职务知悉的位置信息；向用户告知位置信息处理事项时，须使用易于理解的格式和语言。</p>

<h2>用户请求应对与销毁</h2>
<p>用户可随时撤回同意或要求暂停收集·利用·提供，事业者不得拒绝暂停请求并须具备技术手段。查阅·告知请求无正当理由不得拒绝，有错误须更正。撤回同意时须及时销毁相关信息和确认资料。</p>
<p>目的达成后，除确认资料外的个人位置信息须立即以不可恢复的方式销毁；用户另行同意保有的，最长可保有1年。个人信息处理方针须写明处理目的、保有期限、销毁程序和第三方提供事项。YouSun Administrative Agency协助检查条款、同意画面和处理方针。</p>

<div class="faq-section"><h2>常见问题</h2>
<div class="faq-item"><p class="faq-q">Q. 条款放在App深层菜单可以吗？</p><p class="faq-a">A. 须在网站、首页或链接页面上便于查看。不公开属于罚款（过怠金）对象。</p></div>
<div class="faq-item"><p class="faq-q">Q. 好友位置共享也要每次通知吗？</p><p class="faq-a">A. 原则上每次即时通知。另行同意后可在最长30日内汇总通知。</p></div>
<div class="faq-item"><p class="faq-q">Q. 结束服务时要做什么？</p><p class="faq-a">A. 歇业预定日30日前通知用户并申报，同时销毁个人位置信息和确认资料。</p></div>
</div>

<div class="cta-block"><h3>检查申报后的运营义务</h3><p>提供App位置功能、条款和同意画面，YouSun Administrative Agency为你找出遗漏的义务。电话 02-325-8222，工作日 09:30~17:30 KST。</p><a href="/zh/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">申请咨询</a></div>
<p class="author-block">YouSun Administrative Agency（代表行政士 Jung Yu-sun）</p>`,
  },

  ja: {
    title: '韓国の位置基盤サービス事業者の義務：申告後の約款・同意・提供通知・確認資料',
    category: 'IT・通信',
    metaTitle: '韓国の位置基盤サービス事業者の義務 — 申告後の約款・同意・通知・破棄',
    metaDescription: '韓国の位置基盤サービス事業の申告後に守るべき義務。利用約款の公開と明示事項、同意、第三者提供の即時・まとめ通知、確認資料の自動記録、閲覧・訂正・撤回への対応、破棄と子どもの同意まで。',
    excerpt: '申告は始まりにすぎません。韓国の位置基盤サービス事業者は利用約款を公開し、定められた事項を明示して同意を得て、第三者に提供するたびに通知し、利用・提供事実確認資料が自動記録されるようにし、閲覧や撤回の求めにも対応します。',
    content: `<div class="toc"><p>目次</p><ol><li>約款の公開と同意</li><li>第三者提供の通知と確認資料</li><li>利用者の求めへの対応と破棄</li><li>よくある質問</li></ol></div>
<p><strong>位置基盤サービス事業者は申告後も、利用約款をホームページやアプリの最初の画面から見られるように公開し、定められた事項を約款に明示したうえで個人位置情報主体の同意を得なければなりません。個人位置情報を第三者に提供するたびに通知し、利用・提供事実確認資料が位置情報システムに自動で記録・保存されるようにします。</strong></p>
<p>関連手続は<a href="/ja/blog/location-based-service-map-feature-app">申告対象の判断</a>と<a href="/ja/blog/location-based-service-change-report">変更申告</a>をご覧ください。以下は日々の運営で守る義務です。</p>

<h2>約款の公開と同意</h2>
<p>約款はホームページ、または端末の最初の画面やリンク先の画面で、文字の大きさや色などにより分かりやすく公開します。変更するときは理由と内容を遅滞なく公開します。</p>
<table><thead><tr><th>約款に明示する事項</th><th>実務の確認</th></tr></thead><tbody>
<tr><td>商号、住所、電話番号などの連絡先</td><td>申告内容と一致しているか</td></tr>
<tr><td>主体と法定代理人の権利と行使方法</td><td>請求窓口を書いたか</td></tr>
<tr><td>提供するサービスの内容</td><td>アプリの機能と同じか</td></tr>
<tr><td>確認資料と位置情報の保有理由・保有期間</td><td>実際の保存期間と同じか</td></tr>
<tr><td>第三者提供時の通知方法</td><td>即時かまとめてか</td></tr>
</tbody></table>
<p>利用者は範囲や約款の一部について同意を留保できます。14歳未満の子どもは法定代理人の同意を得て確認し、8歳以下の子ども等は保護義務者が生命・身体の保護のために同意すれば本人の同意とみなされます。</p>

<h2>第三者提供の通知と確認資料</h2>
<p>利用者が指定した第三者に位置情報を渡すサービスなら、受け取る者と目的を告知して同意を得て、提供のたびに受け取る者・日時・目的を即時に通知します。通知は原則として情報を収集した端末に行います。</p>
<ol><li>まとめて通知するには、即時とまとめての選択ができることを告知し、別途同意を得ます。</li><li>単位は10回・20回・30回など10の倍数の回数、または10日・20日・30日の期間で、最大30日です。</li><li>回数方式でも、最初の提供日から30日ごとに残りの内訳を通知します。</li></ol>
<p>利用・提供事実確認資料はシステムで自動的に記録・保存し、取扱台帳は最低6か月以上保管します。</p>
<p>位置情報を守る管理的・技術的措置も、申告時に書類で示した水準のまま維持します。位置情報管理責任者の指定、段階別のアクセス権限の制限、アクセス記録の自動保存、暗号化などがその内容で、放送メディア通信委員会は所属公務員を通じて措置の内容と記録の保存状況を点検できます。元従業員を含め、職務上知った位置情報を漏らしてはならず、利用者に位置情報の処理について知らせるときは、分かりやすい様式と言葉を使わなければなりません。</p>

<h2>利用者の求めへの対応と破棄</h2>
<p>利用者はいつでも同意を撤回し、収集・利用・提供の一時停止を求められます。事業者は停止の求めを拒めず、そのための技術的手段を備えます。閲覧・告知の求めは正当な理由なく拒めず、誤りがあれば訂正します。撤回されたら該当の情報と確認資料を遅滞なく破棄します。</p>
<p>目的を達した個人位置情報は確認資料を除き直ちに、復元できない方法で破棄します。利用者が保有に別途同意すれば最大1年まで保有できます。個人情報処理方針には処理目的・保有期間、破棄手続、第三者提供などを記載します。YouSun Administrative Agencyは約款・同意画面・処理方針の点検をサポートします。</p>

<div class="faq-section"><h2>よくある質問</h2>
<div class="faq-item"><p class="faq-q">Q. 約款をアプリの奥のメニューだけに置いてもよいですか。</p><p class="faq-a">A. ホームページや最初の画面、リンク先の画面で分かりやすく確認できる必要があります。公開しないと過料の対象です。</p></div>
<div class="faq-item"><p class="faq-q">Q. 友だちとの位置共有も毎回通知が必要ですか。</p><p class="faq-a">A. 原則は毎回即時です。別途同意があれば最大30日の範囲でまとめて通知できます。</p></div>
<div class="faq-item"><p class="faq-q">Q. サービスを終了するときは。</p><p class="faq-a">A. 廃業予定日の30日前までに利用者へ通知して申告し、個人位置情報と確認資料を破棄します。</p></div>
</div>

<div class="cta-block"><h3>申告後の運営義務を点検しましょう</h3><p>アプリの位置機能と約款・同意画面を見せていただければ、YouSun Administrative Agencyが抜けている義務を洗い出します。電話 02-325-8222、平日 09:30~17:30 KST。</p><a href="/ja/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">相談を申し込む</a></div>
<p class="author-block">YouSun Administrative Agency（代表行政士 Jung Yu-sun）</p>`,
  },
}

// 틀리기 쉬운 인허가 구분 오기(4언어) — 위치기반서비스사업은 '신고', 휴폐업도 '신고'(개인위치정보사업만 휴폐업 '승인'), 약관은 '공개'(신고·인가 아님)
entry.wrongTerms = [
  '위치기반서비스사업 허가', '이용약관 신고', '이용약관 인가', '휴업 승인', '폐업 승인',
  'location-based service license', 'terms approval', 'closure approval',
  '位置基础服务事业许可', '条款审批',
  '位置基盤サービス事業の許可', '約款の認可', '廃業の承認',
]

export default entry
