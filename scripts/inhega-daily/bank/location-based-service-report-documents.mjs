// 원고 은행 — INHE-BANK-1119 보충(담당 A, 2026-11-19, kind=seo3958, angle=documents)
// 주제(풀): lbs(위치기반서비스사업신고) / 질문: "위치기반서비스사업 신고에 어떤 서류를 내나 — 외국기업은 무엇을 더 준비하나"
// 검색어: '위치기반서비스사업 신고 서류'(배정표 대표 검색어안)
//
// 겹침 검사: location-based-service-business-registration-foreign-company(외국법인 신고 전반·사례) → 외국법인 신고 가능 여부·사례는 링크만,
//   이 글은 "서식에 적힌 신고서 항목·법정 첨부서류 3종·외국회사 추가 서류 2종·담당공무원 확인 서류·보호조치 증명 서류에 담을 내용"만.
//   ※ 그 라이브 글은 '국내대리인 반드시 지정'·'관리책임자 지정 확인서가 신고 서류'라고 적었으나, 위치정보법·시행령·방송미디어통신위원회 규정·보호조치 고시
//     어디에도 국내대리인 조항이 없고(grep 0건), 서식 첨부서류에 관리책임자 확인서 항목도 없음 → 이 글은 법령 서식대로만 쓰고 총괄에 보고.
//   location-based-service-map-feature-app(대상 판단·소상공인 1개월), location-information-business-registration(등록 vs 신고),
//   location-based-service-change-report(변경신고 서류) → 링크·한 줄만.
//
// 법령 대조(law.go.kr DRF OC=visionlaw, 2026-11-19 로컬 사본 ~/work/inhebank-1119/law):
//   위치정보의 보호 및 이용 등에 관한 법률 MST 277359(2025. 10. 1. 시행, 소관 방송미디어통신위원회) — 제9조 제1항(상호·주된 사무소·사업의 종류·위치정보시스템
//     포함 사업용 주요 설비 신고)·제4항(개인위치정보사업 등록 신청 때 신고 서류 첨부 시 신고 간주)·제5항(적합하면 수리), 제16조 제1항(관리적·기술적 조치)
//   같은 법 시행령 MST 283269(2026. 2. 10. 시행) — 제9조 제1항(신고서+사업계획서·주요설비 내용과 설치 장소 서류·보호조치 증명 서류)·제3항(법인 등기사항증명서
//     또는 사업자등록증명 공동이용 확인, 미동의 시 첨부), 제20조 제1항(관리적 조치 5가지)·제2항(기술적 조치 6가지)
//   위치정보의 보호 및 이용 등에 관한 법률 시행에 관한 방송미디어통신위원회 규정(행정규칙 ID 2100000279362, 2026. 5. 18. 시행) — 제5조 별지 제6호서식
//     (기재 항목: 상호·성명(대표자)·주소(주된 사무소)·대표 전화·담당자·홈페이지·사업의 종류·사업용 주요 설비 / 제출서류 1~3 + 4. 해당 국가의 법인등기사항증명서
//     (외국회사에 한함) 5. 영업소등기사항증명서(외국회사에 한함), 설비 임차 시 증명 서류 / 담당공무원 확인: 법인등기사항증명서[영업소등기하지 않은 외국회사는
//     대표자의 외국인등록사실증명] 또는 사업자등록증명원 / 처리 절차: 작성→접수→서류심사→조사→신고 수리 결정→신고확인증 교부), 제5조 제2항 별지 제7호(신고확인증)
//   위치정보의 관리적·기술적 보호조치 기준(고시 ID 2100000279386, 2026. 5. 18. 시행) — 제3조 제2항(관리책임자 = 임원 또는 고충처리·위치정보 관리/서비스 부서장),
//     제4조 제3항(권한 부여·변경·말소 기록 최소 5년), 제7조 제1항(자체검사 연 1회 이상), 제10조 제2항(접근기록 최소 1년)
// 인허가 구분: 위치기반서비스사업 = '신고'(수리), 개인위치정보사업 = '등록', 사물위치정보사업 = '신고'. 허가 아님.
// 확신 없어 뺀 것: 외국 서류의 아포스티유·번역 요건(위치정보 서식·법령에 문구 없음 — 부가통신 서식과 달리 확인 못 함), 국내대리인(위치정보법령에 조항 없음 —
//   '없다'는 사실과 개인정보 보호법 별도 검토만), 처리 소요일(서식 '즉시' 표기와 조사 단계가 함께 있어 일수 단정 안 함), 온라인 접수 시스템 명칭,
//   소상공인 특례 서류(기존 글 범위), 과태료·벌금 금액(S4), 서식 개정일.

const SLUG = 'location-based-service-report-documents'

const entry = {
  topic: 'lbs',
  angle: 'documents',
  slug: SLUG,
  kind: 'seo3958',
  keyword: '위치기반서비스사업 신고 서류',
  source: { type: 'assignment', query: '위치기반서비스사업 신고 서류' },
  pexelsId: 3243090,
  coverImage: '',
  relatedServices: [
    { title: '위치기반서비스사업 신고', href: '/services/location-based-service' },
  ],

  ko: {
    title: '위치기반서비스사업 신고 서류 — 사업계획서·설비 자료·보호조치 서류와 외국기업 추가 서류',
    category: 'IT·통신',
    metaTitle: '위치기반서비스사업 신고 서류 — 첨부서류 3종과 외국회사 추가 서류',
    metaDescription: '위치기반서비스사업 신고서에 적는 항목, 사업계획서·주요설비 자료·위치정보 보호조치 증명 서류, 외국회사가 더 내는 본국 법인등기·영업소등기 서류와 담당 공무원 확인 서류를 안내합니다.',
    excerpt: '위치기반서비스사업 신고에는 신고서와 함께 사업계획서, 사업용 주요설비의 내용과 설치 장소 서류, 위치정보 보호조치를 증명하는 서류를 냅니다. 외국회사는 본국 법인등기사항증명서와 영업소등기사항증명서를 더 준비합니다.',
    content: `<div class="toc"><p>목차</p><ol><li>신고서에 적는 항목</li><li>첨부서류와 외국회사 추가 서류</li><li>보호조치 증명 서류에 담을 내용</li><li>자주 묻는 질문 (FAQ)</li></ol></div>
<p><strong>위치기반서비스사업 신고는 위치기반서비스사업신고서에 사업계획서, 사업용 주요설비의 내용과 설치 장소를 확인할 수 있는 서류, 위치정보 보호조치를 증명하는 서류를 붙여 방송미디어통신위원회에 냅니다. 외국회사라면 서식에 따라 본국의 법인등기사항증명서와 영업소등기사항증명서를 더 냅니다.</strong><!-- 근거: 위치정보의 보호 및 이용 등에 관한 법률 제9조 제1항, 시행령 제9조 제1항, 방송미디어통신위원회 규정 제5조 별지 제6호서식 --></p>
<p>우리 앱이 신고 대상인지는 <a href="/blog/location-based-service-map-feature-app">위치기반서비스 신고 대상 판단</a>에서, 등록 대상인 위치정보사업과의 구분은 <a href="/blog/location-information-business-registration">위치정보사업 등록과 위치기반서비스사업 신고 차이</a>에서 먼저 확인하세요. 해외 본사 명의 신고의 전체 흐름은 <a href="/blog/location-based-service-business-registration-foreign-company">외국법인 위치기반서비스사업 신고</a>에 있고, 여기서는 서류만 하나씩 봅니다.</p>

<h2>신고서에 적는 항목</h2>
<p>신고서에는 상호(또는 명칭), 대표자 성명, 주된 사무소 주소, 대표 전화번호, 담당자 전화번호와 이메일, 홈페이지 주소를 적고, 신고 내용으로 사업의 종류와 위치기반서비스 사업용 주요 설비를 적습니다. 법률이 신고 사항으로 정한 상호, 주된 사무소 소재지, 사업의 종류, 위치정보시스템을 포함한 주요 설비가 그대로 칸이 된 구조입니다. 이 가운데 상호, 주된 사무소 소재지, 위치정보시스템은 나중에 바뀌면 변경신고 대상이 되므로 처음부터 정확히 적어야 합니다.<!-- 근거: 위치정보법 제9조 제1항·제3항, 방송미디어통신위원회 규정 별지 제6호서식 --></p>

<h2>첨부서류와 외국회사 추가 서류</h2>
<table><thead><tr><th>서류</th><th>누가</th><th>준비 요령</th></tr></thead><tbody>
<tr><td>사업자 현황과 사업 내용이 담긴 사업계획서</td><td>모든 신고인</td><td>서비스 기능, 위치정보를 받는 경로, 이용 목적을 구체적으로 적습니다</td></tr>
<tr><td>사업용 주요설비의 내용과 설치 장소를 확인할 수 있는 서류</td><td>모든 신고인</td><td>서버 등 설비를 빌려 쓰면 임차를 증명하는 서류를 함께 냅니다</td></tr>
<tr><td>위치정보 보호조치를 증명하는 서류</td><td>모든 신고인</td><td>관리적·기술적 조치를 실제로 갖춘 내용(아래 표)</td></tr>
<tr><td>해당 국가의 법인등기사항증명서</td><td>외국회사</td><td>본국에서 발급하는 법인 증명 서류</td></tr>
<tr><td>영업소등기사항증명서</td><td>외국회사</td><td>한국 영업소를 등기한 경우의 등기사항증명서<!-- 근거: 시행령 제9조 제1항, 방송미디어통신위원회 규정 별지 제6호서식 제출서류 제1호~제5호 --></td></tr>
</tbody></table>
<p>담당 공무원은 행정정보 공동이용으로 법인 등기사항증명서나 사업자등록증명을 확인하고, 영업소를 등기하지 않은 외국회사는 대표자의 외국인등록사실증명을 확인합니다. 사업자등록증명 확인에 동의하지 않으면 그 서류를 직접 붙입니다.<!-- 근거: 시행령 제9조 제3항, 방송미디어통신위원회 규정 별지 제6호서식 담당공무원 확인사항 --> 위치정보법령에는 전기통신사업법과 같은 국내대리인 지정 조항이 없습니다. 다만 개인정보 보호법의 국내대리인 의무는 그 법 기준으로 따로 확인해야 합니다.<!-- 근거: 개인정보 보호법 제31조의2 --></p>

<h2>보호조치 증명 서류에 담을 내용</h2>
<p>보호조치 서류는 형식적인 서약서가 아니라 시행령이 정한 조치를 갖췄음을 보여 주는 자료여야 합니다. 서류 심사 뒤 조사를 거쳐 수리 여부가 결정되므로, 문서에 쓴 내용과 실제 시스템이 같아야 합니다.<!-- 근거: 위치정보법 제9조 제5항, 제16조 제1항, 방송미디어통신위원회 규정 별지 제6호서식 처리 절차 --></p>
<ol><li>관리적 조치: 위치정보관리책임자 지정, 수집·이용·제공·파기 단계별 접근 권한자 지정과 권한 제한, 취급·관리 절차와 지침, 제공사실 등을 기록한 취급대장 운영, 정기 자체 검사.</li><li>기술적 조치: 식별·인증, 방화벽 등 권한 없는 접근 차단, 위치정보시스템 접근사실의 자동 기록·보존, 침해사고 방지용 보안프로그램, 저장·전송 암호화나 이에 상응하는 조치.<!-- 근거: 시행령 제20조 제1항·제2항 --></li><li>세부 기준: 관리책임자는 임원이나 고충처리·위치정보 관리 부서의 장이어야 하고, 접근사실 기록은 최소 1년, 접근 권한 부여·말소 기록은 최소 5년 보관하며, 자체 검사는 연 1회 이상 합니다.<!-- 근거: 위치정보의 관리적·기술적 보호조치 기준 제3조 제2항, 제4조 제3항, 제7조 제1항, 제10조 제2항 --></li></ol>
<p>개인위치정보사업 등록을 함께 신청하면서 위치기반서비스사업 신고에 필요한 서류를 첨부하면 신고를 한 것으로 봅니다. 두 사업을 모두 하는 외국기업이라면 서류를 한 번에 묶는 편이 효율적입니다.<!-- 근거: 위치정보법 제9조 제4항 --> 유선행정사사무소는 본국 서류 목록 확인부터 사업계획서·보호조치 서류 작성과 보완 대응까지 돕습니다.</p>

<div class="faq-section"><h2>자주 묻는 질문 (FAQ)</h2>
<div class="faq-item"><p class="faq-q">Q. 한국에 영업소를 등기하지 않은 외국회사도 신고할 수 있나요?</p><p class="faq-a">A. 서식은 영업소를 등기하지 않은 외국회사의 경우 대표자의 외국인등록사실증명을 확인하도록 정하고 있어, 그런 경우도 예정하고 있습니다. 본국 법인등기사항증명서는 따로 준비합니다.<!-- 근거: 방송미디어통신위원회 규정 별지 제6호서식 --></p></div>
<div class="faq-item"><p class="faq-q">Q. 서버를 클라우드로 빌려 쓰면 설비 서류는 어떻게 하나요?</p><p class="faq-a">A. 설비의 일부나 전부를 임차하는 경우 이를 증명하는 서류를 내도록 되어 있으므로, 이용 계약 등 임차 사실을 보여 주는 자료와 설치 장소를 함께 준비합니다.<!-- 근거: 방송미디어통신위원회 규정 별지 제6호서식 제출서류 제2호 --></p></div>
<div class="faq-item"><p class="faq-q">Q. 위치정보관리책임자 지정은 서류로 어떻게 보여 주나요?</p><p class="faq-a">A. 관리책임자 지정은 관리적 조치의 첫 항목이므로 보호조치 증명 서류 안에 지정 사실과 담당 업무를 적습니다.<!-- 근거: 시행령 제20조 제1항 제1호 --></p></div>
<div class="faq-item"><p class="faq-q">Q. 신고 후 상호나 서버가 바뀌면 서류를 다시 내나요?</p><p class="faq-a">A. 상호, 주된 사무소 소재지, 위치정보시스템이 바뀌면 변경신고를 합니다. 절차는 <a href="/blog/location-based-service-change-report">위치기반서비스사업 변경신고</a>에서 확인하세요.<!-- 근거: 위치정보법 제9조 제3항 --></p></div>
</div>

<div class="cta-block"><h3>위치기반서비스사업 신고 서류를 빠짐없이 준비하세요</h3><p>서비스 구조와 서버 위치, 본사 정보를 알려 주시면 유선행정사사무소가 필요한 서류 목록을 만들고 작성·접수를 돕습니다. 전화 02-325-8222, 평일 09:30~17:30 KST.</p><a href="/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">상담 신청하기</a></div>
<p class="author-block">유선행정사사무소 (대표 행정사 정유선)<!-- 근거: 위치정보법 제9조·제16조, 시행령 제9조·제20조, 방송미디어통신위원회 규정 제5조 별지 제6호·제7호서식, 보호조치 기준 제3조·제4조·제7조·제10조, 개인정보 보호법 제31조의2 --></p>`,
  },

  en: {
    title: 'Location-Based Service Report Documents in Korea: Business Plan, Facilities, Protection Measures and Extra Papers for Foreign Companies',
    category: 'IT & Telecom',
    metaTitle: 'Location-Based Service Report Documents in Korea',
    metaDescription: 'Documents for a location-based service report in Korea: the form, business plan, facility papers, protection measures and extra papers for foreign companies.',
    excerpt: 'A location-based service report in Korea needs the form plus a business plan, papers on the main facilities and their location, and proof of location data protection measures. Foreign companies also prepare a home-country corporate register and a branch register.',
    content: `<div class="toc"><p>Contents</p><ol><li>What the form asks for</li><li>Attachments and extra papers for foreign companies</li><li>What the protection measures document should show</li><li>FAQ</li></ol></div>
<p><strong>A location-based service business report is filed with the Media and Communications Commission using the report form plus a business plan, papers showing the main business facilities and where they are, and proof of location data protection measures. A foreign company also submits its home-country corporate register and a branch register, as listed on the form.</strong></p>
<p>Check whether your app must report on <a href="/en/blog/location-based-service-map-feature-app">our guide to who must report</a>, and the difference from location data business registration on <a href="/en/blog/location-information-business-registration">registration vs. report</a>. The overall flow for foreign companies is on <a href="/en/blog/location-based-service-business-registration-foreign-company">foreign company reports</a>.</p>

<h2>What the form asks for</h2>
<p>The form asks for the trade name, representative, head office address, main phone, contact person and website, plus the type of business and the main facilities used for the service. These mirror what the Act requires you to report: trade name, head office, type of business and main facilities including the location data system. Trade name, head office and location data system changes later require a change report, so get them right from the start.</p>

<h2>Attachments and extra papers for foreign companies</h2>
<table><thead><tr><th>Document</th><th>Who</th><th>Tips</th></tr></thead><tbody>
<tr><td>Business plan with company profile and business content</td><td>All filers</td><td>Describe features, how location data is received and why</td></tr>
<tr><td>Papers on main facilities and their location</td><td>All filers</td><td>If servers are leased, add proof of the lease</td></tr>
<tr><td>Proof of location data protection measures</td><td>All filers</td><td>Show the measures actually in place</td></tr>
<tr><td>Home-country corporate register</td><td>Foreign companies</td><td>Issued in your home country</td></tr>
<tr><td>Branch register</td><td>Foreign companies</td><td>If a Korean branch is registered</td></tr>
</tbody></table>
<p>The official checks the corporate register or business registration through shared government data, and for a foreign company without a registered Korean branch, the representative’s alien registration record. Korea’s location data laws have no domestic agent rule like the Telecommunications Business Act, but check the Personal Information Protection Act separately.</p>

<h2>What the protection measures document should show</h2>
<p>This is not a simple pledge. The report is accepted after document review and an inspection, so what you write must match your real system.</p>
<ol><li>Administrative: a location data manager, access rights by stage, handling rules, a handling ledger, and regular self-inspections.</li><li>Technical: identification and authentication, firewalls, automatic access logs, security software, and encryption or equivalent.</li><li>Detailed standards: the manager must be an executive or a relevant department head; keep access logs at least 1 year and access-right records at least 5 years; self-inspect at least once a year.</li></ol>
<p>If you apply for personal location data business registration and attach the report papers, the report is deemed filed, so a company doing both can bundle them. YouSun Administrative Agency checks your home-country papers, drafts the plan and protection documents, and handles corrections.</p>

<div class="faq-section"><h2>FAQ</h2>
<div class="faq-item"><p class="faq-q">Q. Can a foreign company without a Korean branch report?</p><p class="faq-a">A. The form provides for that case by checking the representative’s alien registration record. Prepare the home-country corporate register separately.</p></div>
<div class="faq-item"><p class="faq-q">Q. Our servers are in the cloud. What do we submit?</p><p class="faq-a">A. Leased facilities need proof of the lease, so prepare the service contract and the facility location.</p></div>
<div class="faq-item"><p class="faq-q">Q. How do we show the location data manager?</p><p class="faq-a">A. Include the appointment and duties in the protection measures document.</p></div>
<div class="faq-item"><p class="faq-q">Q. Do we refile if our name or servers change?</p><p class="faq-a">A. Changes to the trade name, head office or location data system require a change report. See <a href="/en/blog/location-based-service-change-report">change reports</a>.</p></div>
</div>

<div class="cta-block"><h3>Get every report document right</h3><p>Share your service structure, server location and head office details, and YouSun Administrative Agency will build your document list and help you file. Call 02-325-8222, weekdays 09:30~17:30 KST.</p><a href="/en/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">Request a consultation</a></div>
<p class="author-block">YouSun Administrative Agency (Chief Administrative Agent Jung Yu-sun)</p>`,
  },

  zh: {
    title: '韩国位置基础服务事业申报材料：事业计划书、设备资料、保护措施文件与外国企业追加材料',
    category: 'IT·通信',
    metaTitle: '韩国位置基础服务事业申报材料 — 三类附件与外国公司追加材料',
    metaDescription: '韩国位置基础服务事业申报书的填写项目，事业计划书、主要设备资料、位置信息保护措施证明文件，以及外国公司追加提交的本国法人登记和营业所登记材料、公务员确认材料。',
    excerpt: '在韩国做位置基础服务事业申报，须提交申报书及事业计划书、主要设备内容与设置地点资料、位置信息保护措施证明文件。外国公司还要准备本国法人登记事项证明书和营业所登记事项证明书。',
    content: `<div class="toc"><p>目录</p><ol><li>申报书填写项目</li><li>附件与外国公司追加材料</li><li>保护措施证明文件应写的内容</li><li>常见问题</li></ol></div>
<p><strong>位置基础服务事业（위치기반서비스사업）申报，是在申报书上附事业计划书、可确认主要营业设备内容和设置地点的资料、证明位置信息保护措施的文件，向广播媒体通信委员会提交。外国公司按格式还须提交本国法人登记事项证明书和营业所登记事项证明书。</strong></p>
<p>是否属于申报对象见<a href="/zh/blog/location-based-service-map-feature-app">位置基础服务申报对象判断</a>，与位置信息事业登记的区别见<a href="/zh/blog/location-information-business-registration">登记与申报的区别</a>，外国法人的整体流程见<a href="/zh/blog/location-based-service-business-registration-foreign-company">外国法人位置基础服务申报</a>。</p>

<h2>申报书填写项目</h2>
<p>申报书填写商号、代表人、主要事务所地址、代表电话、负责人电话和邮箱、网站，以及事业种类和位置基础服务主要营业设备。这与法律规定的申报事项——商号、主要事务所所在地、事业种类、含位置信息系统的主要设备——一一对应。其中商号、主要事务所所在地、位置信息系统日后变更须做变更申报，一开始就要写准确。</p>

<h2>附件与外国公司追加材料</h2>
<table><thead><tr><th>材料</th><th>谁提交</th><th>准备要点</th></tr></thead><tbody>
<tr><td>含经营者现况和事业内容的事业计划书</td><td>所有申报人</td><td>具体写明服务功能、位置信息的获取途径和用途</td></tr>
<tr><td>主要营业设备内容和设置地点的资料</td><td>所有申报人</td><td>租用服务器等设备的，附租用证明</td></tr>
<tr><td>位置信息保护措施证明文件</td><td>所有申报人</td><td>写明实际具备的管理·技术措施</td></tr>
<tr><td>本国法人登记事项证明书</td><td>外国公司</td><td>在本国开具</td></tr>
<tr><td>营业所登记事项证明书</td><td>外国公司</td><td>在韩国登记营业所时</td></tr>
</tbody></table>
<p>公务员通过行政信息共享确认法人登记事项证明书或营业执照证明；未在韩国登记营业所的外国公司，确认代表人的外国人登录事实证明。韩国位置信息法令中没有像电气通信事业法那样的国内代理人条款，但个人信息保护法的国内代理人义务须另行确认。</p>

<h2>保护措施证明文件应写的内容</h2>
<p>这不是一纸承诺书。申报经书面审查和调查后才决定是否受理，文件内容须与实际系统一致。</p>
<ol><li>管理措施：指定位置信息管理负责人，按收集·利用·提供·销毁阶段指定和限制访问权限，制定处理规程，运营处理台账，定期自查。</li><li>技术措施：识别与认证、防火墙等阻断无权限访问、自动记录访问事实、安全程序、存储和传输加密或同等措施。</li><li>细则：负责人须为高管或相关部门负责人；访问记录至少保存1年，权限授予·注销记录至少5年；每年至少自查1次。</li></ol>
<p>申请个人位置信息事业登记时附上申报所需材料的，视为已申报，两项都做的企业可以一并准备。YouSun Administrative Agency协助核对本国材料、撰写计划书和保护措施文件并应对补正。</p>

<div class="faq-section"><h2>常见问题</h2>
<div class="faq-item"><p class="faq-q">Q. 未在韩国登记营业所的外国公司能申报吗？</p><p class="faq-a">A. 格式规定此时确认代表人的外国人登录事实证明，即预设了这种情形。本国法人登记证明另行准备。</p></div>
<div class="faq-item"><p class="faq-q">Q. 服务器用云租用，设备材料怎么交？</p><p class="faq-a">A. 租用设备须附租用证明，可准备服务合同和设备所在地资料。</p></div>
<div class="faq-item"><p class="faq-q">Q. 怎样证明已指定管理负责人？</p><p class="faq-a">A. 在保护措施证明文件中写明指定事实和职责。</p></div>
<div class="faq-item"><p class="faq-q">Q. 商号或服务器变了要重新交材料吗？</p><p class="faq-a">A. 商号、主要事务所所在地、位置信息系统变更须做变更申报，见<a href="/zh/blog/location-based-service-change-report">变更申报</a>。</p></div>
</div>

<div class="cta-block"><h3>一次备齐位置基础服务申报材料</h3><p>告诉我们服务结构、服务器位置和总公司信息，YouSun Administrative Agency为你列出材料清单并协助撰写和提交。电话 02-325-8222，工作日 09:30~17:30 KST。</p><a href="/zh/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">申请咨询</a></div>
<p class="author-block">YouSun Administrative Agency（代表行政士 Jung Yu-sun）</p>`,
  },

  ja: {
    title: '韓国の位置基盤サービス事業申告の書類：事業計画書・設備資料・保護措置書類と外国企業の追加書類',
    category: 'IT・通信',
    metaTitle: '韓国の位置基盤サービス事業申告の書類 — 添付3種と外国会社の追加書類',
    metaDescription: '韓国の位置基盤サービス事業申告書の記載項目、事業計画書・主要設備の資料・位置情報保護措置の証明書類、外国会社が追加で出す本国の法人登記・営業所登記の書類と公務員の確認書類を解説します。',
    excerpt: '韓国の位置基盤サービス事業の申告では、申告書とともに事業計画書、事業用主要設備の内容と設置場所の書類、位置情報保護措置を証明する書類を提出します。外国会社は本国の法人登記事項証明書と営業所登記事項証明書も用意します。',
    content: `<div class="toc"><p>目次</p><ol><li>申告書の記載項目</li><li>添付書類と外国会社の追加書類</li><li>保護措置の証明書類に書く内容</li><li>よくある質問</li></ol></div>
<p><strong>位置基盤サービス事業（위치기반서비스사업）の申告は、申告書に事業計画書、事業用主要設備の内容と設置場所を確認できる書類、位置情報保護措置を証明する書類を添えて放送メディア通信委員会に提出します。外国会社は様式に従い、本国の法人登記事項証明書と営業所登記事項証明書も提出します。</strong></p>
<p>申告の対象かどうかは<a href="/ja/blog/location-based-service-map-feature-app">位置基盤サービス申告の対象判断</a>、登録が必要な位置情報事業との違いは<a href="/ja/blog/location-information-business-registration">登録と申告の違い</a>、外国法人の全体の流れは<a href="/ja/blog/location-based-service-business-registration-foreign-company">外国法人の位置基盤サービス申告</a>で確認してください。</p>

<h2>申告書の記載項目</h2>
<p>申告書には商号、代表者、主たる事務所の住所、代表電話、担当者の電話とメール、ホームページを書き、申告内容として事業の種類と事業用主要設備を記載します。法律が申告事項とする商号、主たる事務所の所在地、事業の種類、位置情報システムを含む主要設備がそのまま欄になっています。このうち商号、主たる事務所の所在地、位置情報システムは後で変わると変更申告の対象なので、最初から正確に書きましょう。</p>

<h2>添付書類と外国会社の追加書類</h2>
<table><thead><tr><th>書類</th><th>提出者</th><th>準備のポイント</th></tr></thead><tbody>
<tr><td>事業者の現況と事業内容を含む事業計画書</td><td>すべての申告人</td><td>サービス機能、位置情報の取得経路と利用目的を具体的に</td></tr>
<tr><td>主要設備の内容と設置場所を確認できる書類</td><td>すべての申告人</td><td>サーバー等を賃借する場合は賃借の証明も</td></tr>
<tr><td>位置情報保護措置を証明する書類</td><td>すべての申告人</td><td>実際に備えた管理的・技術的措置を記載</td></tr>
<tr><td>本国の法人登記事項証明書</td><td>外国会社</td><td>本国で発行される書類</td></tr>
<tr><td>営業所登記事項証明書</td><td>外国会社</td><td>韓国の営業所を登記している場合</td></tr>
</tbody></table>
<p>担当公務員は行政情報の共同利用で法人登記事項証明書または事業者登録証明を確認し、営業所を登記していない外国会社は代表者の外国人登録事実証明を確認します。韓国の位置情報法令には電気通信事業法のような国内代理人の規定はありませんが、個人情報保護法の国内代理人義務は別に確認が必要です。</p>

<h2>保護措置の証明書類に書く内容</h2>
<p>形式的な誓約書では足りません。書類審査と調査を経て受理が決まるため、書類の内容と実際のシステムが一致している必要があります。</p>
<ol><li>管理的措置：位置情報管理責任者の指定、収集・利用・提供・破棄の段階別アクセス権限の指定と制限、取扱い手順と指針、取扱台帳の運営、定期的な自己点検。</li><li>技術的措置：識別・認証、ファイアウォール等による無権限アクセスの遮断、アクセス記録の自動保存、セキュリティプログラム、保存・送信の暗号化またはこれに準ずる措置。</li><li>細則：責任者は役員か関係部署の長とし、アクセス記録は最低1年、権限付与・抹消の記録は最低5年保管し、自己点検は年1回以上行います。</li></ol>
<p>個人位置情報事業の登録申請時に申告に必要な書類を添付すれば申告したものとみなされるため、両方を行う外国企業はまとめて準備できます。YouSun Administrative Agencyは本国書類の確認から事業計画書・保護措置書類の作成、補正対応までサポートします。</p>

<div class="faq-section"><h2>よくある質問</h2>
<div class="faq-item"><p class="faq-q">Q. 韓国に営業所を登記していない外国会社も申告できますか。</p><p class="faq-a">A. 様式はその場合に代表者の外国人登録事実証明を確認すると定めており、そうしたケースを想定しています。本国の法人登記事項証明書は別に用意します。</p></div>
<div class="faq-item"><p class="faq-q">Q. サーバーをクラウドで借りている場合は。</p><p class="faq-a">A. 設備を賃借する場合は証明書類が必要なので、利用契約と設置場所の資料を用意します。</p></div>
<div class="faq-item"><p class="faq-q">Q. 管理責任者の指定はどう示しますか。</p><p class="faq-a">A. 保護措置の証明書類の中に、指定の事実と担当業務を記載します。</p></div>
<div class="faq-item"><p class="faq-q">Q. 商号やサーバーが変わったら書類を出し直しますか。</p><p class="faq-a">A. 商号、主たる事務所の所在地、位置情報システムが変われば変更申告です。<a href="/ja/blog/location-based-service-change-report">変更申告</a>をご覧ください。</p></div>
</div>

<div class="cta-block"><h3>位置基盤サービス申告の書類を漏れなく準備</h3><p>サービス構造、サーバーの所在地、本社情報をお知らせいただければ、YouSun Administrative Agencyが書類リストを作り、作成と提出をサポートします。電話 02-325-8222、平日 09:30~17:30 KST。</p><a href="/ja/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">相談を申し込む</a></div>
<p class="author-block">YouSun Administrative Agency（代表行政士 Jung Yu-sun）</p>`,
  },
}

// 틀리기 쉬운 인허가 구분 오기(4언어) — 위치기반서비스사업은 '신고'(수리), 개인위치정보사업만 '등록', 허가 아님
entry.wrongTerms = [
  '위치기반서비스사업 허가', '위치기반서비스사업 등록증', '위치기반서비스 등록신청서', '위치기반서비스사업 승인',
  'location-based service license', 'location-based service permit', 'location-based service registration certificate',
  '位置基础服务事业许可', '位置基础服务许可证',
  '位置基盤サービス事業の許可', '位置基盤サービス事業の登録証',
]

export default entry
