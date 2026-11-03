// 원고 은행 — INHEGA-FOCUS-1103 2차(보스 msg 4787, 2026-11-03, 맥4 하위 작성, kind=seo3958, angle=situation)
// 주제(풀): lbs(위치기반서비스사업신고) / 상황 질문: "앱에 지도·위치 기능만 넣어도 위치기반서비스 신고 대상인가?"
// 출처 검색어(~/work/inhega-focus-1103/p2/kw/kw-sources.md):
//   GoogleAC(ko, gl=kr) "위치기반서비스 신고 대상"·"위치기반서비스 사업자 신고 대상" / NaverAC "앱 위치정보 허용방법" / GoogleAC "앱 위치정보"
//   GSC(10-04~10-31) "위치기반서비스 사업자 신고"·"위치기반서비스사업 신고"
//
// 겹침 검사: location-based-service-domestic-registration-guide(최초 신고 절차), -business-registration-foreign-company(외국법인),
//   location-information-business-registration(위치정보사업 등록 vs 위치기반서비스사업 신고), -change-report(변경신고), -fix(미신고 처벌·휴폐업)
//   → "내 앱 기능이 신고 대상인가"를 기능별로 가르는 글은 없음. 절차·외국법인·등록 구분은 링크만.
//
// 법령 대조(law.go.kr DRF OC=visionlaw):
//   위치정보의 보호 및 이용 등에 관한 법률 MST 277359(2025. 10. 1. 시행) — 제2조 제1호(위치정보=이동성 있는 물건·개인, 전기통신설비로 측위)·
//     제2호(개인위치정보, 결합 용이성 포함)·제6호·제7호, 제5조 제1항(개인위치정보사업 등록), 제9조 제1항(개인위치정보 대상 아닌 위치기반서비스사업 제외)·
//     제2항(폐지명령 후 1년)·제5항(수리), 제9조의2 제1항(소상공인·1인 창조기업: 신고 없이 개시, 1개월 지나 계속하려면 개시일부터 1개월 이내 신고),
//     제16조 제1항(보호조치), 제19조 제1항(이용약관 명시 후 동의), 제40조 제2호(미신고 벌칙)
//   같은 법 시행령 MST 283269(2026. 2. 10. 시행) — 제9조 제1항(신고서+사업계획서·주요설비 내용과 설치장소 서류·보호조치 증명 서류), 제10조 제1항(소상공인 신고)
// 인허가 구분: 위치기반서비스사업 = '신고'(방송미디어통신위원회), 개인위치정보사업 = '등록'. 허가 아님.
// 실무 기간 "2~4주"는 1차 필러(lib/focus-pillars.ts, 맥7 검수 PASS) 표기 재사용 — 법정 기간 아님("실무상").
// 확신 없어 뺀 것: "저장하지 않으면 신고 대상 아님" 같은 단정, 이용자가 직접 입력한 주소의 측위 해당 여부, 벌칙 금액(S4).

const SLUG = 'location-based-service-map-feature-app'

const entry = {
  topic: 'lbs',
  angle: 'situation',
  slug: SLUG,
  kind: 'seo3958',
  keyword: '위치기반서비스 신고 대상',
  source: { type: 'GoogleAC', query: '위치기반서비스 신고 대상' },
  pexelsId: 11877276,
  coverImage: '',
  relatedServices: [
    { title: '위치기반서비스사업 신고', href: '/services/location-based-service' },
  ],

  ko: {
    title: '위치기반서비스 신고 대상 — 앱에 지도·위치 기능만 넣어도 신고해야 할까',
    category: 'IT·통신',
    metaTitle: '위치기반서비스 신고 대상 — 앱 지도·위치 기능별 판단 기준',
    metaDescription: '앱에 지도나 위치 기능을 넣을 때 위치기반서비스 신고 대상인지 기능별로 정리했습니다. 개인위치정보 이용 여부, 소상공인 1개월 이내 신고, 서류와 기간을 안내합니다.',
    excerpt: '지도를 띄우거나 매장 위치를 보여 주기만 하는 기능과, 이용자의 현재 위치를 받아 쓰는 기능은 판단이 다릅니다. 신고 대상은 개인위치정보를 대상으로 하는 위치기반서비스사업이고, 소상공인·1인 창조기업은 개시 후 1개월 이내에 신고합니다.',
    content: `<div class="toc"><p>목차</p><ol><li>기능별로 보는 신고 대상 여부</li><li>신고할 때 서류와 기간</li><li>유선행정사사무소가 돕는 범위</li><li>자주 묻는 질문 (FAQ)</li></ol></div>
<p><strong>앱에 지도를 넣었다는 사실만으로 신고 대상이 되지는 않습니다. 위치정보법상 신고 대상은 특정 개인의 위치, 즉 개인위치정보를 대상으로 하는 위치기반서비스사업이고, 이용자 단말기의 현재 위치를 받아 주변 검색·위치 공유·이동 경로 같은 서비스에 쓰면 방송미디어통신위원회에 신고해야 하는 경우가 대부분입니다.</strong><!-- 근거: 위치정보의 보호 및 이용 등에 관한 법률 제2조 제1호·제2호·제7호, 제9조 제1항 --> 개인위치정보를 대상으로 하지 않는 위치기반서비스사업은 신고 대상에서 빠집니다.</p>
<p>최초 신고 절차는 <a href="/blog/location-based-service-domestic-registration-guide">위치기반서비스 사업신고 가이드</a>에서, 위치정보를 직접 수집해 다른 사업자에게 제공하는 경우의 등록은 <a href="/blog/location-information-business-registration">위치정보사업 등록과 위치기반서비스사업 신고 차이</a>에서 다룹니다.</p>

<h2>기능별로 보는 신고 대상 여부</h2>
<p>법이 말하는 위치정보는 이동성이 있는 물건이나 개인이 특정 시간에 있던 장소에 관한 정보로서 전기통신설비로 측위된 것이고, 위치정보만으로 누구인지 알 수 없어도 다른 정보와 쉽게 결합해 특정 개인의 위치를 알 수 있으면 개인위치정보입니다.<!-- 근거: 위치정보법 제2조 제1호·제2호 --></p>
<table><thead><tr><th>앱 기능</th><th>판단</th></tr></thead><tbody>
<tr><td>매장·지점 주소를 지도에 표시, 지도 화면만 제공</td><td>고정된 장소를 보여 줄 뿐 이용자의 위치는 쓰지 않아 신고 대상과 거리가 멉니다.</td></tr>
<tr><td>이용자의 현재 위치로 주변 매장 검색, 배달·이동 추적, 친구 위치 공유, 출퇴근 기록</td><td>회원 정보와 결합된 이용자 위치를 쓰므로 개인위치정보를 이용하는 위치기반서비스사업에 해당해 신고 대상입니다.</td></tr>
<tr><td>사람과 결합되지 않는 차량·물건의 위치만 다루는 서비스</td><td>개인위치정보를 대상으로 하지 않으면 위치기반서비스사업 신고에서 제외되지만, 결합 가능성을 먼저 따집니다.</td></tr>
<tr><td>외부 위치정보사업자에게서 위치를 받아 서비스에 쓰는 경우</td><td>위치를 직접 측위하지 않아도 개인위치정보를 이용해 서비스하면 위치기반서비스사업 신고 대상입니다.</td></tr>
</tbody></table>
<p>소상공인이나 1인 창조기업은 신고 없이 서비스를 시작할 수 있고, 1개월이 지난 뒤에도 계속하려면 사업을 시작한 날부터 1개월 이내에 간이 신고를 합니다.<!-- 근거: 위치정보법 제9조의2 제1항, 시행령 제10조 제1항 --> 신고 대상이면 이용약관에 서비스 내용과 이용자의 권리를 적고 개인위치정보 이용 동의를 받아야 합니다.<!-- 근거: 위치정보법 제19조 제1항 --> 처음에는 지도만 있던 앱도 업데이트로 현재 위치 기능을 붙이는 순간 판단이 달라지므로, 기능을 추가할 때마다 다시 확인하는 것이 안전합니다.</p>

<h2>신고할 때 서류와 기간</h2>
<table><thead><tr><th>구분</th><th>서류</th><th>기간</th></tr></thead><tbody>
<tr><td>일반 신고</td><td>위치기반서비스사업신고서, 사업자 현황과 사업 내용이 담긴 사업계획서, 사업용 주요설비의 내용과 설치 장소 확인 서류, 위치정보 보호조치 증명 서류</td><td>위원회가 내용을 검토해 법에 맞으면 수리, 실무상 서류 완비 후 2~4주<!-- 근거: 위치정보법 제9조 제5항, 시행령 제9조 제1항, 실무 기간은 1차 필러(focus-pillars) 표기 --></td></tr>
<tr><td>소상공인·1인 창조기업</td><td>소상공인등 증명 서류와 간이 신고서(지정 정보시스템 입력 가능)</td><td>사업 개시일부터 1개월 이내<!-- 근거: 위치정보법 제9조의2 제1항, 시행령 제10조 제1항 --></td></tr>
</tbody></table>
<ol><li>앱 화면과 서버 흐름에서 위치를 받는 지점을 모두 찾습니다.</li><li>그 위치가 회원 정보와 결합되는지 확인합니다.</li><li>직접 측위하는지, 외부 위치정보사업자에게서 받는지 구분합니다.</li><li>이용약관·동의 화면과 보호조치(접근권한, 암호화, 확인자료 기록)를 갖춥니다.</li><li>신고서와 첨부서류를 제출하고 보완 요청에 대응합니다.<!-- 근거: 위치정보법 제16조 제1항·제2항, 제19조 제1항 --></li></ol>

<h2>유선행정사사무소가 돕는 범위</h2>
<p>유선행정사사무소는 앱 기능 설명을 바탕으로 신고 대상 여부와 위치정보사업 등록이 필요한지 판정하고, 사업계획서·주요설비 서류·보호조치 증명 서류 작성과 신고 접수, 보완 대응까지 처리합니다. 이용약관과 동의 화면 문구가 신고 내용과 맞는지도 함께 점검합니다. 한국 법인이 없는 외국기업은 <a href="/blog/location-based-service-business-registration-foreign-company">외국법인 위치기반서비스사업신고 가이드</a>를 함께 보십시오.</p>

<div class="faq-section"><h2>자주 묻는 질문 (FAQ)</h2>
<div class="faq-item"><p class="faq-q">Q. 지도 API를 쓰기만 하면 신고하지 않아도 되나요?</p><p class="faq-a">A. 지도 화면만 보여 주면 신고와 거리가 멀지만, 그 지도에 이용자의 현재 위치를 받아 서비스에 쓰면 신고 대상이 됩니다. 어떤 API를 쓰는지가 아니라 누구의 위치를 쓰는지가 기준입니다.</p></div>
<div class="faq-item"><p class="faq-q">Q. 신고하지 않고 서비스하면 어떻게 되나요?</p><p class="faq-a">A. 신고 대상인데 신고 없이 위치기반서비스사업을 하면 형사처벌(징역 또는 벌금) 대상입니다.<!-- 근거: 위치정보법 제40조 제2호 --></p></div>
<div class="faq-item"><p class="faq-q">Q. 위치 권한만 받고 실제로 쓰지 않으면요?</p><p class="faq-a">A. 권한 요청과 실제 이용 흐름을 함께 봐야 합니다. 쓰지 않을 위치 권한은 요청하지 않는 편이 판단과 운영 모두에 낫습니다.</p></div>
<div class="faq-item"><p class="faq-q">Q. 소상공인으로 간이 신고를 했는데 회사가 커지면요?</p><p class="faq-a">A. 소상공인이나 1인 창조기업에 해당하지 않게 되면 그날부터 1개월 이내에 일반 신고에 필요한 사항을 보완해 다시 신고해야 합니다.<!-- 근거: 위치정보법 제9조의2 제4항, 시행령 제10조 제3항 --></p></div>
</div>

<div class="cta-block"><h3>앱 기능표 하나로 신고 대상 여부를 확인하세요</h3><p>화면별로 위치를 쓰는 기능을 알려 주시면 유선행정사사무소가 신고 대상 여부와 준비할 서류를 정리해 드립니다. 진행 범위는 <a href="/services/location-based-service">위치기반서비스사업 신고 안내</a>에서 확인하실 수 있습니다. 전화 02-363-2251, 평일 09:30~17:30 KST.</p><a href="/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">상담 신청하기</a></div>
<p class="author-block">유선행정사사무소 (대표 행정사 정유선)<!-- 근거: 위치정보법 제2조·제9조·제9조의2·제16조·제19조·제40조, 시행령 제9조·제10조 --></p>`,
  },

  en: {
    title: 'Does My App Need a Location-Based Service Report in Korea If It Only Has a Map?',
    category: 'IT & Telecom',
    metaTitle: 'Location-Based Service Report in Korea — Map and Location Features',
    metaDescription: 'Does an app with a map or location feature need a location-based service report in Korea? Personal location data, the 1-month small business rule, documents.',
    excerpt: 'Showing a map or store locations is different from using a user\'s current position. In Korea, the report covers location-based services that use personal location data, and small businesses that start without reporting must file within 1 month.',
    content: `<div class="toc"><p>Contents</p><ol><li>Feature by feature</li><li>Documents and timelines</li><li>How we help</li><li>FAQ</li></ol></div>
<p><strong>Adding a map to your app does not by itself trigger a report. Under Korea's Location Information Act, the report covers location-based service businesses that use personal location data. If your app takes the user's current device location for nearby search, location sharing or route tracking, you usually need to report to the Media and Communications Commission (방송미디어통신위원회).</strong> Services that do not use personal location data are excluded.</p>
<p>The filing steps are in <a href="/en/blog/location-based-service-domestic-registration-guide">our location-based service report guide</a>, and the registration needed when you collect location data and supply it to others is in <a href="/en/blog/location-information-business-registration">our comparison of the two regimes</a>.</p>

<h2>Feature by feature</h2>
<p>Location information means where a moving person or object was at a given time, measured through telecom facilities. It is personal location data if it can be easily combined with other data to locate a specific person.</p>
<table><thead><tr><th>App feature</th><th>Outcome</th></tr></thead><tbody>
<tr><td>Store addresses on a map, map view only</td><td>Shows fixed places, not the user's position, so a report is unlikely.</td></tr>
<tr><td>Nearby search from current location, delivery tracking, friend sharing, attendance check-in</td><td>Uses a user's position tied to an account, so it is a reportable location-based service.</td></tr>
<tr><td>Vehicle or object tracking with no link to a person</td><td>Excluded if no personal location data is involved, but check whether it can be linked first.</td></tr>
<tr><td>Location received from an outside provider</td><td>Even without measuring location yourself, using personal location data for a service is reportable.</td></tr>
</tbody></table>
<p>Small businesses and one-person creative businesses may start without reporting, but to continue past 1 month they must file a simplified report within 1 month of starting. A reportable service also needs terms of use describing the service and user rights, and the user's consent.</p>

<h2>Documents and timelines</h2>
<table><thead><tr><th>Case</th><th>Documents</th><th>Timeline</th></tr></thead><tbody>
<tr><td>Standard report</td><td>Report form, business plan with company profile and service details, documents on main equipment and its location, proof of location data protection measures</td><td>Accepted after review; in practice 2~4 weeks once documents are complete</td></tr>
<tr><td>Small business</td><td>Proof of small business status and the simplified form (can be entered online)</td><td>Within 1 month of starting</td></tr>
</tbody></table>
<ol><li>Find every point where the app or server receives location.</li><li>Check whether it is linked to account data.</li><li>Confirm whether you measure location yourself or receive it from a provider.</li><li>Prepare terms, consent screens and protection measures such as access control, encryption and logs.</li><li>File the report and respond to correction requests.</li></ol>

<h2>How we help</h2>
<p>YouSun Administrative Agency reviews your features, decides whether a report or a location information business registration applies, prepares the business plan, equipment and protection documents, files the report and handles corrections. Companies without a Korean entity should also read <a href="/en/blog/location-based-service-business-registration-foreign-company">our guide for foreign companies</a>.</p>

<div class="faq-section"><h2>FAQ</h2>
<div class="faq-item"><p class="faq-q">Q. If I only use a map API, do I need to report?</p><p class="faq-a">A. A plain map view is unlikely to need one, but if you take the user's current location for the service, it does. The test is whose location you use, not which API.</p></div>
<div class="faq-item"><p class="faq-q">Q. What happens if I operate without reporting?</p><p class="faq-a">A. Running a reportable service without reporting can lead to criminal penalties, including imprisonment or a fine.</p></div>
<div class="faq-item"><p class="faq-q">Q. What if I ask for location permission but never use it?</p><p class="faq-a">A. Both the permission request and the actual data flow are reviewed. Not asking for permissions you will not use is the cleaner path.</p></div>
<div class="faq-item"><p class="faq-q">Q. I filed as a small business. What if we grow?</p><p class="faq-a">A. Once you no longer qualify, you must file the full report items within 1 month.</p></div>
</div>

<div class="cta-block"><h3>Check your app with one feature list</h3><p>Send us the screens that use location, and YouSun Administrative Agency will confirm whether you must report and what to prepare. Call 02-363-2251, weekdays 09:30~17:30 KST.</p><a href="/en/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">Request a consultation</a></div>
<p class="author-block">YouSun Administrative Agency (Chief Administrative Agent Jung Yu-sun)</p>`,
  },

  zh: {
    title: '韩国App只加了地图或定位功能，也要做位置基础服务申报吗？',
    category: 'IT·通信',
    metaTitle: '韩国位置基础服务申报 — App地图·定位功能逐项判断',
    metaDescription: '在韩国，App加入地图或定位功能是否须做位置基础服务事业申报？按功能说明是否使用个人位置信息、小商户开业后1个月内申报，以及所需材料和期限。',
    excerpt: '只显示地图或门店位置，与读取用户当前位置的功能，判断完全不同。韩国的申报对象是以个人位置信息为对象的位置基础服务事业，小商户·一人创业企业须在开业后1个月内申报。',
    content: `<div class="toc"><p>目录</p><ol><li>按功能判断是否须申报</li><li>申报材料与期限</li><li>我们可以协助的范围</li><li>常见问题</li></ol></div>
<p><strong>App里放了地图，并不因此就须申报。根据韩国《位置信息保护法》，申报对象是以特定个人的位置即个人位置信息为对象的位置基础服务事业；如果读取用户设备的当前位置，用于附近搜索、位置共享、行程追踪等服务，大多须向广播媒体通信委员会（방송미디어통신위원회）申报。</strong>不以个人位置信息为对象的服务不在申报范围内。</p>
<p>首次申报流程见<a href="/zh/blog/location-based-service-domestic-registration-guide">位置基础服务事业申报指南</a>；自行收集位置信息并提供给其他事业者时的登记，见<a href="/zh/blog/location-information-business-registration">位置信息事业登记与位置基础服务申报的区别</a>。</p>

<h2>按功能判断是否须申报</h2>
<p>法律所说的位置信息，是指可移动的人或物在特定时间所在场所的信息，并通过电信设备测定；即使单凭位置看不出是谁，只要容易与其他信息结合而知道特定个人的位置，就是个人位置信息。</p>
<table><thead><tr><th>App功能</th><th>判断</th></tr></thead><tbody>
<tr><td>在地图上显示门店地址、只提供地图画面</td><td>只显示固定场所，不涉及用户位置，基本不属于申报对象。</td></tr>
<tr><td>按当前位置搜索附近门店、配送追踪、好友位置共享、上下班打卡</td><td>使用与会员信息结合的用户位置，属于须申报的位置基础服务。</td></tr>
<tr><td>只处理与个人无关的车辆·物品位置</td><td>不涉及个人位置信息则不在申报范围，但要先确认能否与个人结合。</td></tr>
<tr><td>从外部位置信息事业者取得位置用于服务</td><td>即使不自行定位，只要用个人位置信息提供服务，就须申报。</td></tr>
</tbody></table>
<p>小商户或一人创业企业可以先开始服务，若超过1个月仍要继续，须在开业之日起1个月内做简易申报。属于申报对象的，还须在使用条款中写明服务内容和用户权利，并取得用户同意。</p>

<h2>申报材料与期限</h2>
<table><thead><tr><th>情形</th><th>材料</th><th>期限</th></tr></thead><tbody>
<tr><td>一般申报</td><td>申报书、包含事业者概况和业务内容的事业计划书、主要设备内容及设置场所证明、位置信息保护措施证明</td><td>审查合规后受理，实务中材料齐全后约2~4周</td></tr>
<tr><td>小商户·一人创业企业</td><td>小商户身份证明和简易申报书（可在指定系统录入）</td><td>开业之日起1个月内</td></tr>
</tbody></table>
<ol><li>找出App画面和服务器中所有读取位置的环节。</li><li>确认该位置是否与会员信息结合。</li><li>区分是自行定位还是从外部位置信息事业者取得。</li><li>准备使用条款、同意画面和保护措施（访问权限、加密、记录留存）。</li><li>提交申报书和附件，应对补正要求。</li></ol>

<h2>我们可以协助的范围</h2>
<p>YouSun Administrative Agency根据App功能判断是否须申报、是否须做位置信息事业登记，负责事业计划书、设备材料和保护措施证明的制作、提交及补正应对。在韩国没有法人的外国企业，请同时参阅<a href="/zh/blog/location-based-service-business-registration-foreign-company">外国法人申报指南</a>。</p>

<div class="faq-section"><h2>常见问题</h2>
<div class="faq-item"><p class="faq-q">Q. 只用了地图API，也要申报吗？</p><p class="faq-a">A. 只显示地图一般不需要；但若读取用户当前位置用于服务，就须申报。标准是用了谁的位置，而不是用了哪个API。</p></div>
<div class="faq-item"><p class="faq-q">Q. 未申报就提供服务会怎样？</p><p class="faq-a">A. 属于申报对象却未申报经营，可能受到刑事处罚（有期徒刑或罚金）。</p></div>
<div class="faq-item"><p class="faq-q">Q. 只申请了定位权限但实际没用呢？</p><p class="faq-a">A. 会同时看权限申请和实际数据流向。用不到的定位权限，最好不要申请。</p></div>
<div class="faq-item"><p class="faq-q">Q. 以小商户身份简易申报后，公司规模变大怎么办？</p><p class="faq-a">A. 不再属于小商户或一人创业企业时，须自该日起1个月内补齐一般申报事项重新申报。</p></div>
</div>

<div class="cta-block"><h3>用一张功能表确认是否须申报</h3><p>告诉我们哪些画面使用位置，YouSun Administrative Agency为你确认是否须申报以及要准备的材料。电话 02-363-2251，工作日 09:30~17:30 KST。</p><a href="/zh/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">申请咨询</a></div>
<p class="author-block">YouSun Administrative Agency（代表行政士 Jung Yu-sun）</p>`,
  },

  ja: {
    title: '韓国でアプリに地図や位置情報機能を入れるだけでも位置基盤サービスの申告は必要？',
    category: 'IT・通信',
    metaTitle: '韓国の位置基盤サービス申告 — アプリの地図・位置機能の判断基準',
    metaDescription: '韓国でアプリに地図や位置情報機能を入れる場合、位置基盤サービス事業の申告が必要かを機能別に解説。個人位置情報の利用有無、小規模事業者の1か月以内の申告、書類と期間をまとめました。',
    excerpt: '地図や店舗の場所を表示するだけの機能と、利用者の現在地を取得する機能では判断が異なります。韓国で申告が必要なのは個人位置情報を対象とする位置基盤サービス事業で、小規模事業者は開始後1か月以内に申告します。',
    content: `<div class="toc"><p>目次</p><ol><li>機能別に見る申告の要否</li><li>申告の書類と期間</li><li>サポートの範囲</li><li>よくある質問</li></ol></div>
<p><strong>アプリに地図を入れただけで申告が必要になるわけではありません。韓国の「位置情報法」で申告が必要なのは、特定の個人の位置、つまり個人位置情報を対象とする位置基盤サービス事業です。利用者の端末の現在地を取得して周辺検索・位置共有・移動経路などのサービスに使う場合は、ほとんどが放送メディア通信委員会（방송미디어통신위원회）への申告対象になります。</strong>個人位置情報を対象としないサービスは申告対象から外れます。</p>
<p>最初の申告手続は<a href="/ja/blog/location-based-service-domestic-registration-guide">位置基盤サービス事業申告ガイド</a>を、位置情報を自ら収集して他の事業者に提供する場合の登録は<a href="/ja/blog/location-information-business-registration">位置情報事業の登録と位置基盤サービス事業の申告の違い</a>をご覧ください。</p>

<h2>機能別に見る申告の要否</h2>
<p>法律上の位置情報とは、移動する人や物が特定の時間にいた場所の情報で、電気通信設備によって測位されたものです。位置だけでは誰か分からなくても、他の情報と容易に結びつけて特定の個人の位置が分かれば個人位置情報に当たります。</p>
<table><thead><tr><th>アプリの機能</th><th>判断</th></tr></thead><tbody>
<tr><td>店舗の住所を地図に表示、地図画面だけを提供</td><td>固定された場所を見せるだけで利用者の位置を扱わないため、申告対象とは考えにくい。</td></tr>
<tr><td>現在地からの周辺検索、配達・移動の追跡、友だちとの位置共有、出退勤の記録</td><td>会員情報と結びついた利用者の位置を使うため、申告が必要な位置基盤サービスに当たります。</td></tr>
<tr><td>人と結びつかない車両・物の位置だけを扱うサービス</td><td>個人位置情報を対象としなければ申告対象外ですが、結びつく可能性を先に確認します。</td></tr>
<tr><td>外部の位置情報事業者から位置を受け取ってサービスに使う場合</td><td>自社で測位しなくても、個人位置情報を使ってサービスを提供すれば申告対象です。</td></tr>
</tbody></table>
<p>小規模事業者や一人創造企業は申告せずにサービスを始められますが、1か月を過ぎて続ける場合は事業開始日から1か月以内に簡易申告をします。申告対象であれば、利用規約にサービス内容と利用者の権利を明記し、個人位置情報の利用について同意を得る必要があります。</p>

<h2>申告の書類と期間</h2>
<table><thead><tr><th>区分</th><th>書類</th><th>期間</th></tr></thead><tbody>
<tr><td>一般の申告</td><td>位置基盤サービス事業申告書、事業者の概要と事業内容を記載した事業計画書、主要設備の内容と設置場所を確認できる書類、位置情報の保護措置を証明する書類</td><td>内容を審査し適合すれば受理、実務上は書類がそろってから2~4週</td></tr>
<tr><td>小規模事業者・一人創造企業</td><td>小規模事業者等の証明書類と簡易申告書（指定システムへの入力も可）</td><td>事業開始日から1か月以内</td></tr>
</tbody></table>
<ol><li>アプリ画面とサーバー処理で位置を受け取る箇所をすべて洗い出します。</li><li>その位置が会員情報と結びつくかを確認します。</li><li>自社で測位するのか、外部の位置情報事業者から受け取るのかを区別します。</li><li>利用規約・同意画面と保護措置（アクセス権限、暗号化、記録の保存）を整えます。</li><li>申告書と添付書類を提出し、補正要求に対応します。</li></ol>

<h2>サポートの範囲</h2>
<p>YouSun Administrative Agencyは、アプリの機能説明をもとに申告の要否と位置情報事業の登録が必要かを判断し、事業計画書・主要設備の書類・保護措置の証明書類の作成、申告、補正対応まで行います。韓国法人のない外国企業は<a href="/ja/blog/location-based-service-business-registration-foreign-company">外国法人向けの申告ガイド</a>もあわせてご覧ください。</p>

<div class="faq-section"><h2>よくある質問</h2>
<div class="faq-item"><p class="faq-q">Q. 地図APIを使うだけなら申告は不要ですか。</p><p class="faq-a">A. 地図を表示するだけなら申告とは考えにくいですが、利用者の現在地を取得してサービスに使えば申告対象です。基準はどのAPIかではなく、誰の位置を使うかです。</p></div>
<div class="faq-item"><p class="faq-q">Q. 申告せずにサービスを提供するとどうなりますか。</p><p class="faq-a">A. 申告対象なのに申告せず事業を行うと、懲役または罰金の刑事罰の対象になります。</p></div>
<div class="faq-item"><p class="faq-q">Q. 位置情報の権限だけ求めて実際には使わない場合は？</p><p class="faq-a">A. 権限の要求と実際のデータの流れをあわせて見ます。使わない位置権限は求めないほうが、判断の面でも運用の面でも安全です。</p></div>
<div class="faq-item"><p class="faq-q">Q. 小規模事業者として簡易申告した後、会社が大きくなったら？</p><p class="faq-a">A. 小規模事業者や一人創造企業に当たらなくなったら、その日から1か月以内に一般申告に必要な事項を補って申告し直します。</p></div>
</div>

<div class="cta-block"><h3>機能一覧ひとつで申告の要否を確認</h3><p>位置を使う画面を教えていただければ、YouSun Administrative Agencyが申告の要否と準備書類を整理します。電話 02-363-2251、平日 09:30~17:30 KST。</p><a href="/ja/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">相談を申し込む</a></div>
<p class="author-block">YouSun Administrative Agency（代表行政士 Jung Yu-sun）</p>`,
  },
}

// 틀리기 쉬운 인허가 구분 오기(4언어) — 위치기반서비스사업은 '신고', 개인위치정보사업만 '등록', 허가 아님
entry.wrongTerms = [
  '위치기반서비스사업 허가', '위치기반서비스사업 등록', '위치기반서비스 사업허가',
  'LBS license', 'LBS permit', 'location-based service license', 'location-based service permit',
  '位置基础服务事业许可', '位置基础服务事业登记', '位置服务业务许可',
  '位置基盤サービス事業許可', '位置基盤サービス事業登録', '位置基盤サービス事業の許可',
]

export default entry
