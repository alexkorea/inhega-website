// 원고 은행 — INHEGA-FOCUS-1103 2차(보스 msg 4787, 2026-11-03, 맥4 하위 작성, kind=seo3958, angle=situation)
// 주제(풀): telecom(부가통신사업신고) / 상황 질문: "쇼핑몰·앱을 운영하는데 부가통신사업 신고 대상인가?"
// 출처 검색어(상황 질문의 원천, ~/work/inhega-focus-1103/p2/kw/kw-sources.md):
//   GoogleAC(ko, gl=kr) "부가통신사업자 신고 대상" / NaverAC "부가통신사업자 예시"·"부가통신사업 신고방법"
//   GSC(10-04~10-31) "통신판매신고업"(/en/blog/online-shop-communication-sales-registration-guide) — 통신판매업과 혼동하는 수요
//
// 겹침 검사: 라이브 블로그에 telecom-* 글 없음. online-shop-communication-sales-registration-guide·online-shopping-mall-notification 은
//   전자상거래법 통신판매업 신고 → 이 글은 "전기통신사업법 부가통신사업 신고 대상 판정"만 다루고 통신판매업은 링크·FAQ 한 줄.
//
// 법령 대조(law.go.kr DRF OC=visionlaw, 2026-11-03 로컬 사본 ~/work/inhega-focus-1103/law):
//   전기통신사업법 MST 285185(2026. 10. 1. 시행) — 제2조 제6호(전기통신역무=타인의 통신 매개·설비 제공), 제8호, 제11호·제12호·제12호의2·제13호·제14호,
//     제22조 제1항(신고)·제2항(특수한 유형 등록)·제5항 제1호(소규모 신고 간주)·제6항(1년 이내 사업 개시), 제96조 제5호(미신고 경영 벌칙)
//   같은 법 시행령 MST 290813 — 제29조 제1항(신고서·통신망구성도·개인정보보호조치 구축 명세서)·제2항·제4항(보완 10일)·제5항(신고증명서)·
//     제6항(특수유형 등록증 30일)·제8항(사업계획서·이용자 보호계획서), 제30조 제1항(인터넷 이용 자본금 1억원 이하)·제2항(초과 시 1개월 이내 신고)
//   전자상거래 등에서의 소비자보호에 관한 법률 MST 282793 — 제12조 제1항(통신판매업 신고, 공정거래위원회 또는 시·군·구) → 별개 제도 서술만.
// 인허가 구분: 부가통신사업 = '신고'(소규모는 신고 간주), 특수한 유형 부가통신사업 = '등록'. 허가 아님.
// 화면 미표시: 자본금 기준 금액(1억원)은 seo3958 S4(금액 0건) 때문에 쓰지 않고 필러 #svc-glance(한눈에 보기)로 링크. 벌칙 금액도 미표시.
// 확신 없어 뺀 것: "자기 상품만 파는 쇼핑몰은 부가통신사업이 아니다" 같은 단정 — 법은 '타인의 통신 매개' 기준만 정하므로 판정 기준으로만 서술.
//   국내대리인 기준(일평균 이용자·트래픽)은 이 상황과 거리가 멀어 뺌. 중앙전파관리소 처리는 1차 필러(맥7 검수 PASS) 표기와 같게.

const SLUG = 'telecom-report-online-mall-app'

const entry = {
  topic: 'telecom',
  angle: 'situation',
  slug: SLUG,
  kind: 'seo3958',
  keyword: '부가통신사업 신고 대상',
  source: { type: 'GoogleAC', query: '부가통신사업자 신고 대상' },
  pexelsId: 7857526,
  coverImage: '',
  relatedServices: [
    { title: '정보통신분야 인허가 — 부가통신사업 신고·기간통신사업 등록', href: '/services/telecom-business' },
  ],

  ko: {
    title: '부가통신사업 신고 대상 — 쇼핑몰·앱을 운영하는데 신고해야 할까',
    category: 'IT·통신',
    metaTitle: '부가통신사업 신고 대상 — 쇼핑몰·앱 운영자가 먼저 확인할 기준',
    metaDescription: '쇼핑몰·앱 운영자의 부가통신사업 신고 대상 여부를 정리했습니다. 소규모 사업자의 신고 간주, 기준을 넘을 때 1개월 이내 신고, 특수한 유형의 등록, 서류와 기간을 안내합니다.',
    excerpt: '쇼핑몰이나 앱을 운영한다고 모두 신고서를 내는 것은 아닙니다. 인터넷으로 부가통신역무를 제공하는 소규모 사업자는 신고한 것으로 보고, 자본금 기준을 넘으면 1개월 이내에 신고합니다. 웹하드·문자 발송처럼 특수한 유형은 등록 대상입니다.',
    content: `<div class="toc"><p>목차</p><ol><li>신고 대상인지 가르는 기준</li><li>신고할 때 서류와 기간</li><li>유선행정사사무소가 돕는 범위</li><li>자주 묻는 질문 (FAQ)</li></ol></div>
<p><strong>쇼핑몰이나 앱을 운영한다고 모두 부가통신사업 신고서를 따로 내야 하는 것은 아닙니다. 인터넷으로 부가통신역무를 제공하는 사업자 가운데 자본금이 법령 기준 이하인 소규모 사업자는 전기통신사업법상 신고한 것으로 보고, 자본금이 기준을 넘게 되면 그날부터 1개월 이내에 신고하면 됩니다.</strong><!-- 근거: 전기통신사업법 제22조 제1항·제5항 제1호, 시행령 제30조 제1항·제2항 --> 다만 웹하드·P2P나 문자메시지 발송 서비스처럼 특수한 유형에 해당하면 자본금과 관계없이 등록해야 합니다.<!-- 근거: 전기통신사업법 제2조 제14호, 제22조 제2항 --></p>
<p>자본금 기준 금액과 기간통신사업까지 포함한 전체 구분은 <a href="/services/telecom-business#svc-glance">정보통신분야 인허가 한눈에 보기</a>에 정리해 두었습니다. 상품을 온라인으로 판다는 이유로 하는 통신판매업 신고는 전자상거래법에 따른 별개 절차이고, <a href="/services/mail-order-sales-report">통신판매업 신고 안내</a>에서 다룹니다.<!-- 근거: 전자상거래 등에서의 소비자보호에 관한 법률 제12조 제1항 --></p>

<h2>신고 대상인지 가르는 기준</h2>
<p>전기통신사업법은 전기통신설비로 남의 통신을 매개하거나 설비를 남의 통신용으로 제공하는 것을 전기통신역무로 보고, 그중 전화·인터넷접속 같은 기간통신역무를 뺀 나머지를 부가통신역무로 정합니다. 앱 마켓과 온라인 동영상 서비스는 법에서 부가통신역무로 직접 정의돼 있습니다.<!-- 근거: 전기통신사업법 제2조 제6호·제11호·제12호·제12호의2·제13호 --> 그래서 판단은 사업 이름이 아니라 서비스 기능으로 합니다.</p>
<table><thead><tr><th>내 서비스</th><th>판단</th></tr></thead><tbody>
<tr><td>회원끼리 글·메시지를 주고받는 커뮤니티, 여러 판매자가 입점하는 중개형 마켓, 앱 마켓, 동영상 서비스</td><td>남의 통신을 매개하므로 부가통신역무에 해당할 가능성이 큽니다. 소규모면 신고 간주, 기준을 넘으면 신고합니다.</td></tr>
<tr><td>자기 상품만 파는 쇼핑몰·예약 앱</td><td>남의 통신을 매개하는지가 쟁점입니다. 회원 게시판, 이용자 간 채팅, 입점 판매자 기능이 있는지 서비스 구성을 보고 판정합니다.</td></tr>
<tr><td>웹하드·P2P, 통신사 설비에 연결한 문자 발송 서비스</td><td>특수한 유형의 부가통신역무로 신고가 아니라 등록 대상입니다.<!-- 근거: 전기통신사업법 제2조 제14호 가목·나목, 제22조 제2항 --></td></tr>
</tbody></table>
<p>신고 간주 사업자도 전기통신사업자입니다. 신고서를 내지 않았다고 해서 법 적용 밖에 있는 것이 아니므로, 자본금이 늘어나는 증자나 투자 유치 시점을 미리 챙기는 것이 좋습니다.<!-- 근거: 전기통신사업법 제2조 제8호, 시행령 제30조 제2항 --></p>

<h2>신고할 때 서류와 기간</h2>
<table><thead><tr><th>구분</th><th>서류</th><th>기간</th></tr></thead><tbody>
<tr><td>부가통신사업 신고</td><td>부가통신사업 신고서, 통신망구성도(새로운 유형의 역무로서 요구받은 경우), 개인정보보호조치 구축 명세서(개인정보를 취급하는 경우)</td><td>흠이 있으면 10일 이내의 기간을 정해 보완 요구, 신고 후 1년 이내 사업 개시<!-- 근거: 시행령 제29조 제1항·제4항, 전기통신사업법 제22조 제6항 --></td></tr>
<tr><td>소규모 신고 간주</td><td>따로 낼 서류 없음</td><td>자본금이 기준을 넘게 된 날부터 1개월 이내 신고<!-- 근거: 시행령 제30조 제2항 --></td></tr>
<tr><td>특수한 유형 등록</td><td>등록신청서, 정관(법인), 기술적 조치 계획·인력과 물적 시설·재무건전성·사업계획서·이용자 보호계획서 등 요건 증명 서류</td><td>신청일부터 30일 이내 등록증 발급<!-- 근거: 전기통신사업법 제22조 제2항, 시행령 제29조 제2항·제6항·제8항 --></td></tr>
</tbody></table>
<ol><li>서비스 기능 목록을 만듭니다(회원 간 소통, 판매자 입점, 콘텐츠 제공, 문자 발송).</li><li>기간통신·부가통신·특수한 유형 가운데 어디에 해당하는지 판정합니다.</li><li>자본금 기준과 인터넷 제공 여부로 신고 간주인지 확인합니다.</li><li>신고서나 등록신청서와 첨부서류를 과학기술정보통신부장관에게 제출합니다(전자문서 가능).</li><li>신고증명서를 받은 뒤 1년 이내에 사업을 시작합니다.<!-- 근거: 전기통신사업법 제22조 제1항·제6항, 시행령 제29조 제5항 --></li></ol>

<h2>유선행정사사무소가 돕는 범위</h2>
<p>유선행정사사무소는 서비스 기능을 듣고 역무 구분과 신고 간주 여부를 정리한 뒤, 신고서·등록신청서와 개인정보보호조치 구축 명세서 같은 첨부서류 작성, 접수, 보완 요구 대응까지 처리합니다. 앱에 위치 기능이 있으면 <a href="/services/location-based-service">위치기반서비스사업 신고</a> 대상인지도 함께 봅니다. 투자 유치나 증자를 앞두고 있다면 자본금이 기준을 넘는 시점에 맞춰 신고 일정을 미리 잡아 두는 것도 돕습니다.</p>

<div class="faq-section"><h2>자주 묻는 질문 (FAQ)</h2>
<div class="faq-item"><p class="faq-q">Q. 신고 간주 사업자는 아무것도 하지 않아도 되나요?</p><p class="faq-a">A. 신고서는 내지 않아도 되지만 전기통신사업자로서 의무는 그대로입니다. 자본금이 기준을 넘게 되면 그날부터 1개월 이내에 신고해야 합니다.<!-- 근거: 시행령 제30조 제2항 --></p></div>
<div class="faq-item"><p class="faq-q">Q. 신고 대상인데 신고하지 않고 운영하면 어떻게 되나요?</p><p class="faq-a">A. 신고 없이 부가통신사업을 경영하면 형사처벌(징역 또는 벌금) 대상이 될 수 있습니다.<!-- 근거: 전기통신사업법 제96조 제5호 --></p></div>
<div class="faq-item"><p class="faq-q">Q. 통신판매업 신고를 했으면 부가통신사업 신고도 된 건가요?</p><p class="faq-a">A. 아닙니다. 통신판매업 신고는 전자상거래법, 부가통신사업 신고는 전기통신사업법에 따른 것으로 근거 법률과 제출처가 다릅니다. 쇼핑몰은 두 신고를 각각 검토해야 합니다.</p></div>
<div class="faq-item"><p class="faq-q">Q. 접수는 어디서 처리하나요?</p><p class="faq-a">A. 과학기술정보통신부장관에게 내며, 부가통신사업 신고의 접수·처리는 중앙전파관리소가 맡습니다.</p></div>
</div>

<div class="cta-block"><h3>우리 서비스가 신고 대상인지 먼저 판정해 보세요</h3><p>서비스 기능과 자본금 현황을 알려 주시면 유선행정사사무소가 신고·등록 대상 여부와 필요한 서류를 정리해 드립니다. 진행 범위는 <a href="/services/telecom-business">정보통신분야 인허가 안내</a>에서 확인하실 수 있습니다. 전화 02-363-2251, 평일 09:30~17:30 KST.</p><a href="/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">상담 신청하기</a></div>
<p class="author-block">유선행정사사무소 (대표 행정사 정유선)<!-- 근거: 전기통신사업법 제2조·제22조·제96조, 시행령 제29조·제30조, 전자상거래 등에서의 소비자보호에 관한 법률 제12조 --></p>`,
  },

  en: {
    title: 'Do I Need a Value-Added Telecom Business Report in Korea for My Online Store or App?',
    category: 'IT & Telecom',
    metaTitle: 'Value-Added Telecom Report in Korea — Online Stores and Apps',
    metaDescription: 'Does an online store or app in Korea need a value-added telecom business report? Deemed reports for small operators, the 1-month rule and special types.',
    excerpt: 'Not every online store or app operator in Korea files a report. Small operators providing value-added services over the internet are deemed to have reported, must file within 1 month once their capital exceeds the threshold, and special types such as web hard drives or bulk SMS must register.',
    content: `<div class="toc"><p>Contents</p><ol><li>What decides whether you must report</li><li>Documents and timelines</li><li>How we help</li><li>FAQ</li></ol></div>
<p><strong>Running an online store or app in Korea does not automatically mean filing a value-added telecommunications business report. Under the Telecommunications Business Act, small operators that provide value-added services over the internet and whose capital is at or below the legal threshold are deemed to have reported. Once capital exceeds the threshold, they must report within 1 month.</strong> Special types such as web hard drives, P2P and bulk SMS services must <em>register</em> regardless of capital.</p>
<p>The capital threshold and the full breakdown are on <a href="/en/services/telecom-business#svc-glance">our telecom licensing overview</a>. The mail-order (online sales) business report is a separate filing under the E-Commerce Act, covered on <a href="/en/services/mail-order-sales-report">our online sales report page</a>.</p>

<h2>What decides whether you must report</h2>
<p>The Act treats relaying other people's communications, or offering facilities for their use, as a telecommunications service. Everything other than basic services such as phone and internet access is a value-added service, and app markets and online video services are named in the Act. So the test is what your service does, not what you call it.</p>
<table><thead><tr><th>Your service</th><th>Likely outcome</th></tr></thead><tbody>
<tr><td>Community with user posts or messages, multi-vendor marketplace, app market, video service</td><td>Relays other people's communications, so it is likely value-added. Deemed reported if small, otherwise report.</td></tr>
<tr><td>Store or booking app selling only your own products</td><td>The question is whether it relays users' communications. Boards, user-to-user chat and vendor features decide it.</td></tr>
<tr><td>Web hard drive, P2P, SMS sending linked to carrier networks</td><td>Special type: registration, not a report.</td></tr>
</tbody></table>
<p>A deemed operator is still a telecommunications business operator, so watch for capital increases and new investment rounds.</p>

<h2>Documents and timelines</h2>
<table><thead><tr><th>Case</th><th>Documents</th><th>Timeline</th></tr></thead><tbody>
<tr><td>Value-added report</td><td>Report form, network diagram (only if requested for a new type of service), personal data protection measures statement (if you handle personal data)</td><td>Corrections within a set period of up to 10 days; start business within 1 year of reporting</td></tr>
<tr><td>Deemed report</td><td>Nothing to file</td><td>Report within 1 month after capital exceeds the threshold</td></tr>
<tr><td>Special type registration</td><td>Application, articles of incorporation, proof of technical measures, staff and facilities, financial soundness, business plan and user protection plan</td><td>Certificate within 30 days of application</td></tr>
</tbody></table>
<ol><li>List your service features: user interaction, vendor listings, content, SMS.</li><li>Classify the service as basic, value-added or special type.</li><li>Check capital and internet delivery to see whether a deemed report applies.</li><li>File with the Ministry of Science and ICT, electronically if you prefer.</li><li>Start business within 1 year of receiving the report certificate.</li></ol>

<h2>How we help</h2>
<p>YouSun Administrative Agency reviews your features, confirms the classification and deemed-report status, prepares the report or registration with attachments, files it and handles correction requests. If your app uses location data, we also check whether a <a href="/en/services/location-based-service">location-based service report</a> is needed.</p>

<div class="faq-section"><h2>FAQ</h2>
<div class="faq-item"><p class="faq-q">Q. If I am deemed to have reported, do I need to do anything?</p><p class="faq-a">A. No form is needed, but you are still an operator under the Act. Report within 1 month once capital exceeds the threshold.</p></div>
<div class="faq-item"><p class="faq-q">Q. What if I should report but do not?</p><p class="faq-a">A. Operating a value-added business without reporting can lead to criminal penalties, including imprisonment or a fine.</p></div>
<div class="faq-item"><p class="faq-q">Q. Does my online sales report cover this?</p><p class="faq-a">A. No. The online sales report falls under the E-Commerce Act and the telecom report under the Telecommunications Business Act, with different offices.</p></div>
<div class="faq-item"><p class="faq-q">Q. Who processes the report?</p><p class="faq-a">A. It is filed with the Minister of Science and ICT, and the Central Radio Management Service handles value-added reports.</p></div>
</div>

<div class="cta-block"><h3>Find out whether your service must report</h3><p>Tell us your features and capital, and YouSun Administrative Agency will confirm what applies and which documents you need. Call 02-363-2251, weekdays 09:30~17:30 KST.</p><a href="/en/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">Request a consultation</a></div>
<p class="author-block">YouSun Administrative Agency (Chief Administrative Agent Jung Yu-sun)</p>`,
  },

  zh: {
    title: '在韩国经营网店或App，需要做增值电信业务申报吗？',
    category: 'IT·通信',
    metaTitle: '韩国增值电信业务申报 — 网店·App运营者先看这个标准',
    metaDescription: '在韩国经营网店或App是否要做增值电信业务申报？通过互联网提供服务的小规模经营者视为已申报，资本超过标准后须在1个月内申报，网盘·短信群发等特殊类型须登记，一文说明判断标准与材料。',
    excerpt: '在韩国经营网店或App，并不都要另交申报书。通过互联网提供增值电信服务、资本在法定标准以下的小规模经营者视为已申报，资本超过标准后1个月内申报；网盘、短信群发等特殊类型须登记。',
    content: `<div class="toc"><p>目录</p><ol><li>是否须申报的判断标准</li><li>申报材料与期限</li><li>我们可以协助的范围</li><li>常见问题</li></ol></div>
<p><strong>在韩国经营网店或App，并不意味着都要另交增值电信业务（부가통신사업）申报书。根据韩国《电气通信事业法》，通过互联网提供增值电信服务、资本在法定标准以下的小规模经营者视为已经申报；资本超过标准时，须自该日起1个月内申报。</strong>网盘、P2P、短信群发等特殊类型，不论资本多少都须<em>登记</em>。</p>
<p>资本标准和完整分类见<a href="/zh/services/telecom-business#svc-glance">信息通信领域许可概览</a>。因网上销售商品而做的通信销售业申报，是依据电子商务法的另一项手续，见<a href="/zh/services/mail-order-sales-report">通信销售业申报</a>。</p>

<h2>是否须申报的判断标准</h2>
<p>该法把利用电信设备中介他人通信、或把设备提供给他人通信使用，视为电信服务；电话、互联网接入等基础电信以外的都属于增值电信。App商店和在线视频服务在法律中有明确定义。因此要看服务功能，而不是业务名称。</p>
<table><thead><tr><th>你的服务</th><th>判断</th></tr></thead><tbody>
<tr><td>会员互相发帖·发消息的社区、多商家入驻的平台、App商店、视频服务</td><td>中介他人通信，很可能属于增值电信。小规模视为已申报，超过标准则申报。</td></tr>
<tr><td>只卖自家商品的网店、预约App</td><td>关键在于是否中介用户之间的通信，要看留言板、用户聊天、商家入驻等功能。</td></tr>
<tr><td>网盘、P2P、接入运营商设备的短信群发</td><td>属于特殊类型，须登记而非申报。</td></tr>
</tbody></table>
<p>视为已申报的经营者同样是电信事业者，增资或引入投资时要提前留意资本变化。</p>

<h2>申报材料与期限</h2>
<table><thead><tr><th>情形</th><th>材料</th><th>期限</th></tr></thead><tbody>
<tr><td>增值电信业务申报</td><td>申报书、网络构成图（新类型服务且被要求时）、个人信息保护措施构建明细（处理个人信息时）</td><td>有瑕疵时限期10日以内补正；申报后1年内开业</td></tr>
<tr><td>小规模视为申报</td><td>无须提交</td><td>资本超过标准之日起1个月内申报</td></tr>
<tr><td>特殊类型登记</td><td>登记申请书、章程（法人）、技术措施计划·人员与设施·财务健全性·事业计划书·用户保护计划书等证明材料</td><td>自申请日起30日内发放登记证</td></tr>
</tbody></table>
<ol><li>列出服务功能：用户互动、商家入驻、内容提供、短信发送。</li><li>判断属于基础电信、增值电信还是特殊类型。</li><li>根据资本和是否通过互联网提供，确认是否视为已申报。</li><li>向科学技术信息通信部提交申报书或登记申请书，可电子提交。</li><li>取得申报证明书后1年内开始营业。</li></ol>

<h2>我们可以协助的范围</h2>
<p>YouSun Administrative Agency根据服务功能整理业务分类和是否视为已申报，负责申报书·登记申请书及个人信息保护措施明细等附件的制作、提交和补正应对。App带有位置功能的，也一并确认是否须做<a href="/zh/services/location-based-service">位置基础服务事业申报</a>。</p>

<div class="faq-section"><h2>常见问题</h2>
<div class="faq-item"><p class="faq-q">Q. 视为已申报，就什么都不用做吗？</p><p class="faq-a">A. 不用交申报书，但仍是电信事业者。资本超过标准后须在1个月内申报。</p></div>
<div class="faq-item"><p class="faq-q">Q. 应申报却没有申报会怎样？</p><p class="faq-a">A. 未申报经营增值电信业务，可能受到刑事处罚（有期徒刑或罚金）。</p></div>
<div class="faq-item"><p class="faq-q">Q. 做了通信销售业申报，是否等于做了增值电信申报？</p><p class="faq-a">A. 不是。前者依据电子商务法，后者依据电气通信事业法，受理机关也不同。</p></div>
<div class="faq-item"><p class="faq-q">Q. 由哪里受理？</p><p class="faq-a">A. 向科学技术信息通信部长官提交，增值电信业务申报由中央电波管理所处理。</p></div>
</div>

<div class="cta-block"><h3>先确认你的服务是否须申报</h3><p>告诉我们服务功能和资本情况，YouSun Administrative Agency为你整理是否须申报或登记以及所需材料。电话 02-363-2251，工作日 09:30~17:30 KST。</p><a href="/zh/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">申请咨询</a></div>
<p class="author-block">YouSun Administrative Agency（代表行政士 Jung Yu-sun）</p>`,
  },

  ja: {
    title: '韓国で通販サイトやアプリを運営したら付加通信事業の申告は必要？',
    category: 'IT・通信',
    metaTitle: '韓国の付加通信事業申告 — 通販サイト・アプリ運営者の判断基準',
    metaDescription: '韓国で通販サイトやアプリを運営する場合、付加通信事業の申告は必要か。小規模事業者のみなし申告、資本金が基準を超えたら1か月以内の申告、特殊な類型の登録を解説します。',
    excerpt: '韓国で通販サイトやアプリを運営しても、全員が申告書を出すわけではありません。インターネットで付加通信役務を提供する小規模事業者は申告したものとみなされ、資本金が基準を超えたら1か月以内に申告します。ウェブハードや大量SMS送信などの特殊な類型は登録が必要です。',
    content: `<div class="toc"><p>目次</p><ol><li>申告が必要かを分ける基準</li><li>申告の書類と期間</li><li>サポートの範囲</li><li>よくある質問</li></ol></div>
<p><strong>韓国で通販サイトやアプリを運営していても、必ず付加通信事業（부가통신사업）の申告書を出す必要があるわけではありません。韓国の「電気通信事業法」では、インターネットで付加通信役務を提供し、資本金が法令の基準以下の小規模事業者は申告したものとみなされます。資本金が基準を超えた場合は、その日から1か月以内に申告します。</strong>ウェブハード、P2P、大量SMS送信のような特殊な類型は、資本金に関係なく<em>登録</em>が必要です。</p>
<p>資本金の基準と全体の区分は<a href="/ja/services/telecom-business#svc-glance">情報通信分野の許認可の概要</a>にまとめています。商品をネットで売るための通信販売業の申告は電子商取引法に基づく別の手続で、<a href="/ja/services/mail-order-sales-report">通信販売業申告</a>で扱っています。</p>

<h2>申告が必要かを分ける基準</h2>
<p>同法は、電気通信設備で他人の通信を媒介したり、設備を他人の通信用に提供したりすることを電気通信役務とし、電話やインターネット接続などの基幹通信役務以外を付加通信役務としています。アプリマーケットとオンライン動画サービスは法律で明記されています。判断の決め手は事業の名前ではなくサービスの機能です。</p>
<table><thead><tr><th>あなたのサービス</th><th>判断</th></tr></thead><tbody>
<tr><td>会員同士が投稿・メッセージをやり取りするコミュニティ、複数の出店者がいるモール、アプリマーケット、動画サービス</td><td>他人の通信を媒介するため付加通信役務に当たる可能性が高い。小規模ならみなし申告、基準を超えれば申告。</td></tr>
<tr><td>自社商品だけを売る通販サイト・予約アプリ</td><td>利用者同士の通信を媒介するかが争点。掲示板、利用者間チャット、出店機能の有無で判断します。</td></tr>
<tr><td>ウェブハード、P2P、通信事業者の設備につないだSMS送信</td><td>特殊な類型で、申告ではなく登録の対象です。</td></tr>
</tbody></table>
<p>みなし申告の事業者も電気通信事業者です。増資や投資受け入れのタイミングで資本金の変化に注意してください。</p>

<h2>申告の書類と期間</h2>
<table><thead><tr><th>区分</th><th>書類</th><th>期間</th></tr></thead><tbody>
<tr><td>付加通信事業の申告</td><td>申告書、通信網構成図（新しい類型の役務で求められた場合）、個人情報保護措置構築明細書（個人情報を扱う場合）</td><td>不備があれば10日以内の期間を定めて補正要求、申告後1年以内に事業開始</td></tr>
<tr><td>小規模のみなし申告</td><td>提出書類なし</td><td>資本金が基準を超えた日から1か月以内に申告</td></tr>
<tr><td>特殊な類型の登録</td><td>登録申請書、定款（法人）、技術的措置計画・人員と物的設備・財務健全性・事業計画書・利用者保護計画書などの要件証明書類</td><td>申請日から30日以内に登録証を発給</td></tr>
</tbody></table>
<ol><li>サービスの機能を一覧にします（利用者間のやり取り、出店、コンテンツ、SMS送信）。</li><li>基幹通信・付加通信・特殊な類型のどれに当たるか判断します。</li><li>資本金とインターネット提供の有無から、みなし申告かを確認します。</li><li>科学技術情報通信部に申告書または登録申請書を提出します（電子申請も可）。</li><li>申告証明書を受け取ってから1年以内に事業を始めます。</li></ol>

<h2>サポートの範囲</h2>
<p>YouSun Administrative Agencyは、サービスの機能をうかがって役務区分とみなし申告の該当性を整理し、申告書・登録申請書と個人情報保護措置構築明細書などの添付書類の作成、提出、補正対応まで行います。アプリに位置機能があれば、<a href="/ja/services/location-based-service">位置基盤サービス事業の申告</a>が必要かもあわせて確認します。</p>

<div class="faq-section"><h2>よくある質問</h2>
<div class="faq-item"><p class="faq-q">Q. みなし申告なら何もしなくてよいですか。</p><p class="faq-a">A. 申告書は不要ですが、電気通信事業者としての義務はあります。資本金が基準を超えたら1か月以内に申告します。</p></div>
<div class="faq-item"><p class="faq-q">Q. 申告が必要なのに申告しないとどうなりますか。</p><p class="faq-a">A. 申告せずに付加通信事業を営むと、懲役または罰金の刑事罰の対象になり得ます。</p></div>
<div class="faq-item"><p class="faq-q">Q. 通信販売業の申告をしていれば足りますか。</p><p class="faq-a">A. いいえ。通信販売業は電子商取引法、付加通信事業は電気通信事業法に基づくもので、提出先も異なります。</p></div>
<div class="faq-item"><p class="faq-q">Q. 受付はどこが行いますか。</p><p class="faq-a">A. 科学技術情報通信部長官に提出し、付加通信事業の申告は中央電波管理所が処理します。</p></div>
</div>

<div class="cta-block"><h3>まずは申告が必要かを確認しましょう</h3><p>サービスの機能と資本金の状況をお知らせいただければ、YouSun Administrative Agencyが申告・登録の要否と必要書類を整理します。電話 02-363-2251、平日 09:30~17:30 KST。</p><a href="/ja/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">相談を申し込む</a></div>
<p class="author-block">YouSun Administrative Agency（代表行政士 Jung Yu-sun）</p>`,
  },
}

// 틀리기 쉬운 인허가 구분 오기(4언어) — 부가통신사업은 '신고'(소규모 신고 간주), 특수한 유형만 '등록', 허가 아님
entry.wrongTerms = [
  '부가통신사업 허가', '부가통신사업 등록증', '부가통신사업자 등록', '통신판매업 허가',
  'value-added telecom license', 'value-added telecommunications license', 'telecom business permit',
  '增值电信业务许可', '增值电信经营许可证',
  '付加通信事業の許可', '付加通信事業許可',
]

export default entry
