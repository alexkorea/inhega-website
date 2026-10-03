// 원고 은행 — inhega-daily
// 주제(풀 18개 중): license-scrivener(인허가행정사) / 세부주제: checklist(준비 체크리스트)
//
// 법령 대조(law.go.kr DRF API, OC=visionlaw, 2026-09-21 확인):
//   행정사법            법률 제19034호, 2022. 11. 15. 시행 (MST 245299)
//   행정사법 시행령      대통령령 제35813호, 2026. 1. 1. 시행 (MST 279197)
// 본문의 모든 수치·요건은 위 두 법령 원문에서 직접 확인한 것이며 문단마다 근거주석을 달았다.
// 우리 서비스 가격·수수료 금액은 한 건도 쓰지 않았다(지침서 X41).

export default {
  topic: 'license-scrivener',
  angle: 'checklist',
  slug: 'administrative-scrivener-scope-and-limits',
  kind: 'cluster',
  coverImage: '/images/service-license.png',
  relatedServices: [
    { title: '국제물류주선업 등록', href: '/services/logistics' },
    { title: '식품제조가공업 허가', href: '/services/food-manufacturing' },
    { title: '비영리사단법인 설립', href: '/services/nonprofit' },
  ],

  ko: {
    title: '인허가 행정사 업무범위와 위임 한계 — 행정사법 기준 확인 항목',
    category: '인허가',
    metaTitle: '인허가 행정사 업무범위와 위임 한계 — 행정사법 기준 정리',
    metaDescription: '인허가 행정사에게 어디까지 맡길 수 있는지 행정사법 제2조와 시행령 제2조 기준으로 정리했습니다. 위임 전 확인할 신고확인증·업무처리부·수임제한과 위반 시 제재까지 확인하세요.',
    excerpt: '인허가 대행을 맡기기 전에 알아야 할 것은 "행정사가 법으로 할 수 있는 일"의 경계입니다. 행정사법 제2조와 시행령 제2조가 정한 업무범위, 위임할 수 없는 일, 위임 전 확인 항목, 위반 시 제재를 법령 원문 기준으로 정리했습니다.',
    content: `<div class="toc"><p>목차</p><ol><li>인허가 행정사에게 맡길 수 있는 일</li><li>행정사 종류에 따라 위임 범위가 달라진다</li><li>행정사에게 위임할 수 없는 일</li><li>위임 전에 확인해야 할 다섯 가지</li><li>무자격 대행과 위반행위에 대한 제재</li><li>위임한 뒤 행정사가 지는 의무와 책임</li><li>자주 묻는 질문</li></ol></div>
<p><strong>인허가 행정사</strong>는 다른 사람의 위임을 받아 인가·허가·면허·승인의 신청과 신고를 대리하는 전문 자격자입니다. 업무의 범위는 사무소가 스스로 정하는 것이 아니라 「행정사법」 제2조와 같은 법 시행령 제2조가 조문으로 정해 두었습니다. 그래서 대행을 맡기기 전에 봐야 할 것은 홍보 문구가 아니라 법령이 그 사무소에 허용한 일의 경계입니다.</p>
<p>이 글은 2026년 기준 현행 「행정사법」(법률 제19034호)과 같은 법 시행령(대통령령 제35813호) 원문을 대조해, 위임할 수 있는 일과 할 수 없는 일, 위임 전에 확인할 항목, 위반 시 제재를 정리한 것입니다.<!-- 근거: 행정사법(법률 제19034호, 2022. 11. 15. 시행), 행정사법 시행령(대통령령 제35813호, 2026. 1. 1. 시행) --></p>

<h2>인허가 행정사에게 맡길 수 있는 일</h2>
<p><strong>행정사의 업무</strong>란 다른 사람의 위임을 받아 수행하는 서류 작성·제출 대행과 인허가 신청의 대리, 그리고 행정 관계 법령에 대한 상담을 말합니다. 「행정사법」 제2조 제1항은 행정사의 업무를 일곱 가지로 열거하면서, 단서에서 "다른 법률에 따라 제한된 업무는 할 수 없다"고 못 박고 있습니다.<!-- 근거: 행정사법 제2조 제1항 --></p>
<div class="highlight-box">「행정사법」 제2조 제1항 제5호: 인가·허가 및 면허 등을 받기 위하여 행정기관에 하는 신청·청구 및 신고 등의 대리(代理)<!-- 근거: 행정사법 제2조 제1항 제5호 --></div>
<p>인허가 실무에서 핵심이 되는 것은 위 제5호입니다. 같은 법 시행령 제2조 제5호는 이 사무의 내용을 "다른 사람의 위임을 받아 인가·허가·면허 및 승인의 신청·청구 등 행정기관에 일정한 행위를 요구하거나 신고하는 일을 대리하는 일"로 구체화했습니다.<!-- 근거: 행정사법 시행령 제2조 제5호 --> 즉 신청서에 위임인의 이름만 빌려 쓰는 것이 아니라, 행정기관을 상대로 하는 신청·신고 행위 자체를 행정사가 대리할 수 있다는 뜻입니다.</p>
<p>나머지 업무도 인허가 절차와 맞물려 움직입니다. 행정기관에 제출하는 서류의 작성(제1호), 권리·의무나 사실증명에 관한 서류의 작성(제2호), 행정기관 업무에 관련된 서류의 번역(제3호), 그렇게 작성·번역한 서류의 제출 대행(제4호), 행정 관계 법령과 행정에 대한 상담 또는 자문에 대한 응답(제6호), 법령에 따라 위탁받은 사무의 사실 조사 및 확인(제7호)이 함께 열거되어 있습니다.<!-- 근거: 행정사법 제2조 제1항 제1호~제7호 --></p>
<p>정리하면 인허가 한 건을 맡길 때 위임할 수 있는 범위는 요건 검토 상담 → 신청서와 첨부서류 작성 → 행정기관 접수 대리 → 보완 요구 대응 → 인허가증 수령까지의 흐름 전체입니다. 업종별로 어떤 서류가 필요한지는 <a href="/services/logistics">국제물류주선업 등록</a>이나 <a href="/services/food-manufacturing">식품제조가공업 허가</a> 안내에서 확인할 수 있습니다.</p>

<h2>행정사 종류에 따라 위임 범위가 달라진다</h2>
<p>행정사는 한 종류가 아닙니다. 「행정사법 시행령」 제3조는 행정사의 종류를 일반행정사, 해사행정사, 외국어번역행정사로 나누고 종류마다 업무 범위를 달리 정합니다.<!-- 근거: 행정사법 시행령 제3조 --> 맡기려는 일이 그 사무소의 종류 범위 안에 있는지가 첫 번째 확인 항목입니다.</p>
<table><thead><tr><th>종류</th><th>업무 범위</th><th>인허가 대리 가능 여부</th></tr></thead><tbody>
<tr><td>일반행정사</td><td>법 제2조 제1항 각 호(제3호 번역 제외)의 업무. 해운·해양안전심판 업무는 제외<!-- 근거: 행정사법 시행령 제3조 제1호 --></td><td>가능</td></tr>
<tr><td>해사행정사</td><td>해운 또는 해양안전심판에 관한 법 제2조 제1항 각 호(제3호 제외)의 업무<!-- 근거: 행정사법 시행령 제3조 제2호 --></td><td>해운·해양 분야에 한정</td></tr>
<tr><td>외국어번역행정사</td><td>법 제2조 제1항 제3호(번역)와 제4호(번역한 서류의 제출 대행) 업무<!-- 근거: 행정사법 시행령 제3조 제3호 --></td><td>번역·제출 대행에 한정</td></tr>
</tbody></table>
<p>외국인이나 외국법인이 국내 인허가를 준비하면서 본국 서류의 번역 공증까지 한 번에 맡기려는 경우가 많습니다. 이때 번역은 외국어번역행정사의 업무이고 인허가 신청의 대리는 일반행정사의 업무이므로, 두 업무를 함께 처리하려면 해당 종류의 행정사가 각각 관여하는지 확인해야 합니다.<!-- 근거: 행정사법 시행령 제3조 제1호·제3호 --></p>

<h2>행정사에게 위임할 수 없는 일</h2>
<p>제2조 제1항 단서의 "다른 법률에 따라 제한된 업무"가 위임 한계선입니다. 소송 대리나 법률 분쟁의 대리는 행정사 업무 범위 밖이고, 세무조정·세무대리는 세무사, 등기 신청의 대리는 법무사의 업무이므로 행정사가 업으로 할 수 없습니다.<!-- 근거: 행정사법 제2조 제1항 단서 --></p>
<p>더 나아가 「행정사법」 제22조 제3호는 <strong>행정사의 업무 범위를 벗어나 타인의 소송이나 그 밖의 권리관계분쟁 또는 민원사무처리과정에 개입하는 행위</strong> 자체를 금지행위로 규정합니다.<!-- 근거: 행정사법 제22조 제3호 --> 인허가가 반려된 뒤 행정심판이나 행정소송으로 넘어가는 국면에서 이 경계가 문제되므로, 위임 단계에서 "반려되면 그다음은 어디까지 맡길 수 있는지"를 미리 확인해 두는 편이 안전합니다.</p>
<p>또한 제22조는 정당한 사유 없이 위임을 거부하는 행위, 이해관계가 다른 상대방 양쪽에서 같은 업무를 위임받는 행위(당사자 양쪽이 동의한 경우는 제외), 담당 공무원과의 연고 등 사적인 관계를 드러내며 영향력을 미칠 수 있는 것으로 선전하는 행위, 거짓 내용을 표시하거나 사실을 과장·누락해 소비자를 오도할 우려가 있는 광고행위, 알선을 업으로 하는 자를 이용해 위임을 유치하는 행위를 모두 금지합니다.<!-- 근거: 행정사법 제22조 제1호~제6호 --> "담당자를 안다"는 식의 영업 문구가 나오면 그 자체가 법이 금지한 선전이라는 점을 알아두시기 바랍니다.</p>

<h2>위임 전에 확인해야 할 다섯 가지</h2>
<p>아래 다섯 가지는 모두 법령에 근거가 있어 현장에서 바로 확인할 수 있는 항목입니다. 계약서에 도장을 찍기 전에 순서대로 짚어 보시기 바랍니다.</p>
<table><thead><tr><th>확인 항목</th><th>무엇을 보는가</th><th>근거</th></tr></thead><tbody>
<tr><td>신고확인증</td><td>사무소 소재지 시장·군수·구청장이 발급한 신고확인증 원본. 대여·대여 알선은 금지되어 있으므로 증서상 이름과 실제 담당자가 같은지 확인<!-- 근거: 행정사법 제12조 제1항, 제13조 --></td><td>법 제12조·제13조</td></tr>
<tr><td>사무소</td><td>행정사는 업무를 위한 사무소를 하나만 설치할 수 있고, 합동사무소는 2명 이상으로 구성하며 주사무소와 분사무소에 각각 1명 이상이 상근해야 함<!-- 근거: 행정사법 제14조 제1항·제2항 --></td><td>법 제14조</td></tr>
<tr><td>업무처리부</td><td>위임을 받으면 일련번호·위임 연월일·업무 개요·보수액·위임인의 주소와 성명을 적은 업무처리부를 작성·보관해야 함<!-- 근거: 행정사법 제24조 제1항·제2항 --></td><td>법 제24조</td></tr>
<tr><td>수임제한</td><td>공무원직에서 퇴직한 행정사는 퇴직 전 1년부터 퇴직할 때까지 근무한 행정기관에 대한 인허가 신청 대리 업무를 퇴직한 날부터 1년 동안 수임할 수 없음<!-- 근거: 행정사법 제21조의2 제1항 --></td><td>법 제21조의2</td></tr>
<tr><td>연수교육</td><td>행정사는 시·도지사가 실시하는 연수교육을 받아야 하며, 업무를 시작하려면 행정안전부장관이 시행하는 실무교육을 이수해야 함<!-- 근거: 행정사법 제25조 제1항·제3항 --></td><td>법 제25조</td></tr>
</tbody></table>
<p>사무소를 이전한 경우에는 이전한 날부터 10일 이내에 이전 후 사무소 소재지를 관할하는 시장등에게 신고해야 합니다.<!-- 근거: 행정사법 제14조 제3항 --> 계약서에 적힌 주소와 신고확인증의 주소가 다르면 이전신고가 끝났는지 물어보는 것이 좋습니다.</p>
<p>법인 형태라면 확인할 것이 하나 더 있습니다. 행정사법인은 3명 이상의 행정사를 구성원으로 해야 설립할 수 있고, 직무 수행 중 고의나 과실로 의뢰인에게 손해를 입힌 경우를 대비해 손해배상준비금 적립이나 보험 가입 등의 조치를 해야 합니다.<!-- 근거: 행정사법 제25조의2, 제25조의12 --> 비영리법인 설립처럼 절차가 긴 사건은 담당자가 바뀌어도 이어지도록 이 부분을 확인해 두면 좋습니다. 실제 사건 흐름은 <a href="/blog/nonprofit-association-permit">비영리사단법인 설립 허가 절차</a>에서 볼 수 있습니다.</p>

<h2>무자격 대행과 위반행위에 대한 제재</h2>
<p>행정사가 아닌 사람은 다른 법률에 따라 허용되는 경우를 제외하고 제2조에 따른 업무를 업으로 할 수 없고, 행정사 또는 이와 비슷한 명칭도 쓸 수 없습니다.<!-- 근거: 행정사법 제3조 제1항·제2항 --> 이 금지는 벌칙으로 뒷받침됩니다.</p>
<table><thead><tr><th>위반행위</th><th>제재</th><th>근거</th></tr></thead><tbody>
<tr><td>행정사가 아닌 사람이 행정사 업무를 업으로 한 경우, 신고확인증을 대여·대여받거나 알선한 경우</td><td>3년 이하의 징역 또는 3천만원 이하의 벌금<!-- 근거: 행정사법 제36조 제1항 --></td><td>법 제36조 제1항</td></tr>
<tr><td>업무신고 없이 행정사 업무를 한 경우, 수임제한 위반, 연고를 드러낸 선전, 소비자를 오도할 우려가 있는 광고, 업무상 비밀 누설, 업무정지 기간 중 업무 수행</td><td>1년 이하의 징역 또는 1천만원 이하의 벌금<!-- 근거: 행정사법 제36조 제2항 --></td><td>법 제36조 제2항</td></tr>
<tr><td>보수 외에 금전·재산상 이익을 받은 경우, 정당한 사유 없는 위임 거부, 쌍방 수임, 권리관계분쟁 개입, 알선업자를 이용한 위임 유치</td><td>100만원 이하의 벌금<!-- 근거: 행정사법 제36조 제3항 --></td><td>법 제36조 제3항</td></tr>
<tr><td>행정사 또는 이와 비슷한 명칭을 사용한 경우, 감독기관의 보고·자료제출 명령을 정당한 사유 없이 따르지 않은 경우</td><td>500만원 이하의 과태료<!-- 근거: 행정사법 제38조 제1항 --></td><td>법 제38조 제1항</td></tr>
<tr><td>사무소 이전신고를 하지 않은 경우, 업무처리부를 작성하지 않거나 거짓으로 작성한 경우, 연수교육을 받지 않고 업무를 수행한 경우</td><td>100만원 이하의 과태료<!-- 근거: 행정사법 제38조 제2항 --></td><td>법 제38조 제2항</td></tr>
</tbody></table>
<p>사무직원이나 소속행정사가 업무와 관련해 제36조를 위반하면 행위자를 벌하는 외에 그 행정사 또는 행정사법인에도 같은 조문의 벌금형이 부과됩니다. 다만 위반행위를 방지하기 위해 상당한 주의와 감독을 게을리하지 않았다면 그렇지 않습니다.<!-- 근거: 행정사법 제37조 --></p>
<p>감독 권한도 실제로 작동합니다. 행정안전부장관이나 사무소 소재지를 관할하는 시장등은 업무에 관한 보고나 업무처리부 등 자료 제출을 명할 수 있고 소속 공무원이 사무소에 출입해 장부·서류를 검사하거나 질문할 수 있습니다.<!-- 근거: 행정사법 제31조 제1항 --> 두 개 이상의 사무소를 설치하거나 보수 외 금품을 받은 경우 등에는 6개월의 범위에서 업무정지가 명해질 수 있으며, 그 처분은 사유가 발생한 날부터 3년이 지나면 할 수 없습니다.<!-- 근거: 행정사법 제32조 제1항·제3항 --></p>

<h2>위임한 뒤 행정사가 지는 의무와 책임</h2>
<p>위임 계약이 성립하면 행정사는 품위를 유지하고 신의와 성실로써 공정하게 직무를 수행할 의무를 집니다. 위임받은 업무를 수행하면서 고의 또는 과실로 위임인에게 재산상 손해를 입힌 경우에는 그 손해를 배상할 책임이 있습니다.<!-- 근거: 행정사법 제21조 제1항·제2항 --></p>
<p>보수 관계도 법에 정해져 있습니다. 행정사는 업무를 위임한 사람으로부터 보수를 받으며, 행정사와 그 사무직원은 업무에 관하여 보수 외에 어떠한 명목으로도 위임인으로부터 금전이나 재산상 이익, 그 밖의 반대급부를 받을 수 없습니다.<!-- 근거: 행정사법 제19조 제1항·제2항 --> 접수 과정에서 별도의 비용이 필요하다는 요구를 받으면 그 항목이 관공서에 내는 법정 수수료인지 확인하시기 바랍니다. 비용은 사례별로 상이하므로 무료 상담 시 정확히 안내드립니다.</p>
<p>비밀유지 의무는 계약이 끝난 뒤에도 남습니다. 행정사 또는 행정사이었던 사람은 사무직원이었던 사람까지 포함해, 정당한 사유 없이 직무상 알게 된 사실을 다른 사람에게 누설할 수 없습니다.<!-- 근거: 행정사법 제23조 --> 인허가 서류에는 사업계획과 재무 정보가 함께 들어가므로 이 조문은 실질적인 보호 장치입니다. 업종 판단이 애매할 때 확인할 점은 <a href="/blog/administrative-license-permit-specialist-guide">인허가 행정사 선택 가이드</a>에 정리해 두었습니다.</p>
<p>법령 원문은 국가법령정보센터에서 직접 확인하실 수 있습니다. <a href="https://www.law.go.kr/법령/행정사법" target="_blank" rel="noopener">행정사법</a>과 <a href="https://www.law.go.kr/법령/행정사법시행령" target="_blank" rel="noopener">행정사법 시행령</a>을 함께 보시면 업무범위 조문과 그 구체화 조문을 대조할 수 있습니다.</p>

<div class="faq-section"><h2>자주 묻는 질문 (FAQ)</h2>
<div class="faq-item"><p class="faq-q">Q. 인허가 신청서에 대표자 이름만 적고 행정사가 대신 접수해도 되나요?</p><p class="faq-a">A. 됩니다. 「행정사법」 제2조 제1항 제5호는 인가·허가·면허 등을 받기 위해 행정기관에 하는 신청·청구·신고 등의 대리를 행정사의 업무로 정하고 있고, 같은 법 시행령 제2조 제5호가 그 내용을 "행정기관에 일정한 행위를 요구하거나 신고하는 일을 대리하는 일"로 구체화했습니다. 다만 대리인이 접수하는 경우에도 위임 사실을 확인할 수 있는 서류는 필요합니다.</p></div>
<div class="faq-item"><p class="faq-q">Q. 인허가가 반려되면 행정심판까지 같은 행정사에게 맡길 수 있나요?</p><p class="faq-a">A. 위임 범위를 먼저 확인해야 합니다. 「행정사법」 제2조 제1항 단서는 다른 법률에 따라 제한된 업무는 할 수 없다고 정하고, 같은 법 제22조 제3호는 업무 범위를 벗어나 타인의 소송이나 권리관계분쟁에 개입하는 행위를 금지행위로 규정합니다. 반려 이후의 절차는 위임 단계에서 어디까지 맡길 수 있는지 미리 정리해 두는 편이 안전합니다.</p></div>
<div class="faq-item"><p class="faq-q">Q. 행정사 자격이 없는 컨설팅 업체에 인허가 대행을 맡겨도 되나요?</p><p class="faq-a">A. 권하지 않습니다. 「행정사법」 제3조 제1항은 행정사가 아닌 사람이 다른 법률에 따라 허용되는 경우를 제외하고 행정사 업무를 업으로 하는 것을 금지하고, 같은 법 제36조 제1항은 이를 위반한 자를 3년 이하의 징역 또는 3천만원 이하의 벌금으로 처벌합니다. 무자격 대행은 절차가 중단될 위험도 함께 안고 갑니다.</p></div>
<div class="faq-item"><p class="faq-q">Q. 담당 공무원을 잘 안다고 홍보하는 곳은 어떻게 봐야 하나요?</p><p class="faq-a">A. 법이 금지한 선전입니다. 「행정사법」 제22조 제4호는 업무 수임 또는 수행 과정에서 관련 공무원과의 연고 등 사적인 관계를 드러내며 영향력을 미칠 수 있는 것으로 선전하는 행위를 금지하고, 같은 법 제36조 제2항은 이를 1년 이하의 징역 또는 1천만원 이하의 벌금으로 처벌합니다.</p></div>
<div class="faq-item"><p class="faq-q">Q. 위임 전에 신고확인증을 꼭 봐야 하나요?</p><p class="faq-a">A. 확인하시는 것이 좋습니다. 신고확인증은 사무소 소재지를 관할하는 시장등이 행정사업무신고를 받아 발급하는 증서이며(같은 법 제12조 제1항), 같은 법 제13조는 신고확인증의 대여와 대여 알선을 모두 금지합니다. 증서상 이름과 실제 업무를 수행할 행정사가 일치하는지 보는 것이 무자격 대행을 걸러내는 가장 간단한 방법입니다.</p></div>
</div>

<div class="cta-block">
 <h3>인허가 위임 범위부터 정리해 드립니다</h3>
 <p>업종·사안별로 어디까지 위임할 수 있는지, 어떤 서류가 필요한지 유선행정사사무소가 먼저 확인해 드립니다. 전화 02-363-2251, 평일 09:30~17:30 KST.</p>
 <a href="/contact?utm_source=blog&utm_medium=cta&utm_campaign=administrative-scrivener-scope-and-limits">무료 상담 신청하기</a>
</div>

<p class="author-block">유선행정사사무소 (대표 행정사 정유선) · 「행정사법」(법률 제19034호, 2022. 11. 15. 시행) 및 같은 법 시행령(대통령령 제35813호, 2026. 1. 1. 시행) 원문 기준으로 작성 · 최종 검토일 9월 21일<!-- 근거: 행정사법 법률 제19034호, 행정사법 시행령 대통령령 제35813호 --></p>`,
  },

  en: {
    title: 'Scope and Limits of a Korean Administrative Scrivener in Licensing Work',
    category: 'Licensing & Permits',
    metaTitle: 'Korean Administrative Scrivener — Licensing Scope and Legal Limits',
    metaDescription: 'What a Korean administrative scrivener (haengjeongsa) may and may not do in licensing matters, under the Certified Administrative Scrivener Act. Verification checklist and penalties explained.',
    excerpt: 'Before you delegate a Korean licence application, check what the law actually allows your representative to do. The scope is fixed by statute, not by the firm.',
    content: `<div class="toc"><p>Table of Contents</p><ol><li>What You May Delegate</li><li>Scrivener Categories Change the Scope</li><li>What You May Not Delegate</li><li>Five Things to Verify Before You Engage</li><li>Penalties for Unlicensed Representation</li><li>Duties Owed to You After Engagement</li><li>FAQ</li></ol></div>
<p>A Korean <strong>administrative scrivener</strong> (행정사, haengjeongsa) is a licensed professional who, on another person's mandate, prepares filings for government agencies and acts as agent for licence and permit applications. That scope is not set by the firm you hire — it is fixed by Article 2 of the Certified Administrative Scrivener Act and Article 2 of its Enforcement Decree. So what to check before signing is not the marketing copy but the boundary the statute draws around that office.</p>
<p>This guide follows the Act (Act No. 19034, in force 15 November 2022) and its Enforcement Decree (Presidential Decree No. 35813, in force 1 January 2026); every figure below comes from those texts.</p>

<h2>What You May Delegate</h2>
<p>Article 2(1) lists seven categories of scrivener work, with a proviso: work restricted under another statute may not be performed. The provision that matters most in licensing is subparagraph 5 — agency for applications, claims and reports made to an agency in order to obtain an authorisation, permit or licence.</p>
<div class="highlight-box">Certified Administrative Scrivener Act, Article 2(1)5: acting as agent (代理) for applications, claims and reports made to administrative agencies in order to obtain authorisations, permits, licences and the like.</div>
<p>Article 2(5) of the Decree spells this out as "acting as agent, on another person's mandate, in requesting a specific action from an administrative agency or making a report". In practice the act of filing can itself be performed as your agent.</p>
<p>The other categories support the same workflow: preparing documents for agencies (subparagraph 1), documents on rights, duties or proof of facts (subparagraph 2), translation (subparagraph 3), submitting documents so prepared (subparagraph 4), answering consultations on administrative law (subparagraph 6), and fact-finding for entrusted affairs (subparagraph 7). A single licence matter can therefore be delegated end to end: eligibility review, drafting, filing as agent, responding to supplementation requests, and collecting the certificate. Which documents a given industry needs is set out in our <a href="/services/logistics">international freight forwarding registration</a> and <a href="/services/food-manufacturing">food manufacturing permit</a> pages.</p>

<h2>Scrivener Categories Change the Scope</h2>
<p>Not every scrivener may take every matter. Article 3 of the Decree divides scriveners into general, maritime and foreign-language translation scriveners, each with a different scope. Confirming that your matter falls inside the category of the office you hire is the first check.</p>
<table><thead><tr><th>Category</th><th>Scope of work</th><th>Licensing agency work</th></tr></thead><tbody>
<tr><td>General scrivener</td><td>All subparagraphs of Article 2(1) except subparagraph 3 (translation); excludes shipping and maritime safety tribunal matters</td><td>Available</td></tr>
<tr><td>Maritime scrivener</td><td>The same subparagraphs, limited to shipping and maritime safety tribunal matters</td><td>Shipping and maritime matters only</td></tr>
<tr><td>Foreign-language translation scrivener</td><td>Article 2(1) subparagraphs 3 and 4 — translation, and submission of translated documents</td><td>Translation and filing only</td></tr>
</tbody></table>
<p>Foreign nationals and companies often want home-country documents translated in the same engagement. Translation belongs to the translation scrivener and licence agency to the general scrivener, so ask whether a scrivener of each category is involved.</p>

<h2>What You May Not Delegate</h2>
<p>The proviso to Article 2(1) — "work restricted under another statute" — is the outer limit. Litigation and legal-dispute representation fall outside a scrivener's scope; tax agency work belongs to certified tax accountants, and registration filings to judicial scriveners. A scrivener may not carry on those as a business.</p>
<p>Article 22(3) goes further, making it a prohibited act to intervene beyond scrivener work in another person's litigation, in other disputes over legal relations, or in the handling of civil petitions. Settle at the engagement stage how far the mandate runs if the filing is refused.</p>
<p>Article 22 also prohibits refusing a mandate without grounds; taking the same matter from an opposing party, unless both consent; advertising influence through connections with the officials in charge; misleading advertising; and soliciting mandates through brokers.</p>

<h2>Five Things to Verify Before You Engage</h2>
<p>Each item below has a statutory basis and can be checked on the spot before signing.</p>
<table><thead><tr><th>Item</th><th>What to look at</th><th>Basis</th></tr></thead><tbody>
<tr><td>Report confirmation certificate</td><td>The original issued by the head of the city, county or district of the office. Lending, borrowing and brokering it are prohibited, so check the name against the person who will handle your matter.</td><td>Act Articles 12, 13</td></tr>
<tr><td>Office</td><td>Only one office may be established; a joint office requires 2 or more scriveners, with at least 1 resident at the main office and at each branch.</td><td>Act Article 14</td></tr>
<tr><td>Case register</td><td>On accepting a mandate, the scrivener must keep a register recording the serial number, date, outline of the work, remuneration, and the client's address and name.</td><td>Act Article 24</td></tr>
<tr><td>Restriction on accepting cases</td><td>A scrivener retired from public office may not, for 1 year after retirement, take licensing agency work directed at the agency where they served in the 1 year before retirement.</td><td>Act Article 21-2</td></tr>
<tr><td>Continuing education</td><td>Refresher training by the competent Mayor or Governor is mandatory, and practical training by the Minister of the Interior and Safety must be completed before starting practice.</td><td>Act Article 25</td></tr>
</tbody></table>
<p>After a move, the scrivener must report the new location to the competent local government within 10 days. If the address on your engagement letter differs from the certificate, ask whether that report has been filed.</p>
<p>A scrivener corporation adds one check: it requires 3 or more scriveners as members and must hold damages reserves or insurance for loss caused to a client intentionally or negligently — worth confirming on long matters such as our note on <a href="/blog/nonprofit-association-permit">non-profit association establishment permits</a>.</p>

<h2>Penalties for Unlicensed Representation</h2>
<p>A non-scrivener may not carry on Article 2 work as a business, except where another statute allows it, and may not use the title of scrivener or a similar title. Both prohibitions are backed by criminal penalties and administrative fines.</p>
<table><thead><tr><th>Violation</th><th>Penalty</th><th>Basis</th></tr></thead><tbody>
<tr><td>Practising as a business without being a scrivener; lending, borrowing or brokering a report confirmation certificate</td><td>Imprisonment of up to 3 years or a fine of up to KRW 30,000,000</td><td>Act Article 36(1)</td></tr>
<tr><td>Practising without filing the business report; breaching the case restriction; advertising connections; misleading advertising; disclosing confidences; practising while suspended</td><td>Imprisonment of up to 1 year or a fine of up to KRW 10,000,000</td><td>Act Article 36(2)</td></tr>
<tr><td>Taking money or benefits beyond remuneration; refusing a mandate without grounds; accepting both sides; intervening in disputes; using brokers</td><td>A fine of up to KRW 1,000,000</td><td>Act Article 36(3)</td></tr>
<tr><td>Using the title of scrivener or a similar title; not complying, without grounds, with an order to report or submit materials</td><td>An administrative fine of up to KRW 5,000,000</td><td>Act Article 38(1)</td></tr>
<tr><td>Not reporting an office relocation; not keeping a case register or keeping a false one; practising without refresher training</td><td>An administrative fine of up to KRW 1,000,000</td><td>Act Article 38(2)</td></tr>
</tbody></table>
<p>If an employee or associate scrivener breaches Article 36 in connection with the business, the firm is fined under the same provision as well — unless reasonable care and supervision were exercised.</p>
<p>Supervision is real: the Minister of the Interior and Safety, or the head of the local government of the office, may order reports or submission of the case register, and officials may inspect books on site. Two or more offices, or money beyond remuneration, can bring suspension of practice within a range of 6 months, and no such disposition may be made once 3 years have passed since the cause arose.</p>

<h2>Duties Owed to You After Engagement</h2>
<p>Once the mandate is in place, the scrivener must maintain professional dignity and act fairly and in good faith, and is liable for financial loss caused to the client intentionally or negligently in performing the work.</p>
<p>Remuneration is regulated too: it comes from the person who gave the mandate, and neither the scrivener nor their staff may take money or other consideration beyond it, under any pretext. If asked for an extra payment during filing, check whether the item is a statutory fee payable to the agency. Costs vary from case to case, so we explain them precisely during the free consultation.</p>
<p>Confidentiality survives the engagement: a scrivener, a former scrivener and their present or former staff may not disclose facts learned in the course of duty without justifiable grounds. Where the correct licence category is unclear, see our <a href="/blog/administrative-license-permit-specialist-guide">guide to choosing a licensing scrivener</a>.</p>
<p>Both statutes are available from the Korean Law Information Center: <a href="https://www.law.go.kr/법령/행정사법" target="_blank" rel="noopener">the Act</a> and <a href="https://www.law.go.kr/법령/행정사법시행령" target="_blank" rel="noopener">its Enforcement Decree</a>.</p>

<div class="faq-section"><h2>FAQ</h2>
<div class="faq-item"><p class="faq-q">Q. Can a scrivener file my licence application with only the representative's name on the form?</p><p class="faq-a">A. Yes. Article 2(1)5 makes agency for applications, claims and reports to agencies for obtaining authorisations, permits and licences part of scrivener work, and Article 2(5) of the Decree spells it out as acting as agent in requesting an agency action or making a report. Documents evidencing the mandate are still required.</p></div>
<div class="faq-item"><p class="faq-q">Q. If the application is refused, can the same scrivener handle the administrative appeal?</p><p class="faq-a">A. Check the scope first. The proviso to Article 2(1) excludes work restricted under another statute, and Article 22(3) bars intervening beyond scrivener work in litigation or disputes over legal relations. Agree at the engagement stage how far the mandate runs after a refusal.</p></div>
<div class="faq-item"><p class="faq-q">Q. May I engage a consulting firm without a scrivener licence?</p><p class="faq-a">A. We would not recommend it. Article 3(1) bars a non-scrivener from carrying on scrivener work as a business except where another statute allows it, and Article 36(1) punishes a breach with imprisonment of up to 3 years or a fine of up to KRW 30,000,000. Unlicensed representation also risks stalling your filing.</p></div>
<div class="faq-item"><p class="faq-q">Q. How should I read a pitch that emphasises knowing the official in charge?</p><p class="faq-a">A. That pitch is prohibited. Article 22(4) bars advertising influence through personal connections with the officials concerned, and Article 36(2) punishes it with imprisonment of up to 1 year or a fine of up to KRW 10,000,000.</p></div>
<div class="faq-item"><p class="faq-q">Q. Do I really need to see the report confirmation certificate?</p><p class="faq-a">A. It is worth asking. The certificate is issued by the competent local government on the scrivener's business report under Article 12(1), and Article 13 bars lending it and brokering such a loan. Matching the name on it against the person who will handle your matter is the simplest screen against unlicensed representation.</p></div>
</div>

<div class="cta-block">
 <h3>Start by mapping what you can delegate</h3>
 <p>Yuseon Administrative Scrivener Office will confirm how far a mandate can run for your industry and your case, and which documents you need. Call 02-363-2251, weekdays 09:30–17:30 KST.</p>
 <a href="/contact?utm_source=blog&utm_medium=cta&utm_campaign=administrative-scrivener-scope-and-limits">Request a free consultation</a>
</div>

<p class="author-block">Yuseon Administrative Scrivener Office (Principal Scrivener Jeong Yuseon) · Prepared against the text of the Certified Administrative Scrivener Act (Act No. 19034, in force 15 November 2022) and its Enforcement Decree (Presidential Decree No. 35813, in force 1 January 2026) · Last reviewed 21 September</p>`,
  },

  zh: {
    title: '韩国行政士在许可业务中的业务范围与委托界限',
    category: '许可与执照',
    metaTitle: '韩国行政士业务范围与委托界限 — 依行政士法确认',
    metaDescription: '依据韩国《行政士法》第2条与施行令第2条，说明许可业务中可以委托和不可委托的范围、委托前应确认的五项要件，以及无资格代办的处罚标准。',
    excerpt: '委托韩国许可申请之前，先确认法律允许对方做到哪一步。业务范围由法律规定，而不是由事务所自行界定。',
    content: `<div class="toc"><p>目录</p><ol><li>可以委托的业务</li><li>行政士种类不同，委托范围也不同</li><li>不可委托的业务</li><li>委托前必须确认的五项</li><li>无资格代办的处罚</li><li>委托之后行政士承担的义务</li><li>常见问题</li></ol></div>
<p>韩国<strong>行政士</strong>（행정사）是受他人委托、为行政机关制作申请文件并代理许可、认可、执照及批准申请的持照专业人员。其业务范围并非由事务所自行决定，而是由《行政士法》第2条与同法施行令第2条以条文方式确定。因此委托之前应当确认的不是宣传用语，而是法律为该事务所划定的业务界限。</p>
<p>本文以现行《行政士法》（法律第19034号，2022年11月15日施行）与同法施行令（总统令第35813号，2026年1月1日施行）原文为准，整理可委托与不可委托的范围、委托前确认要点及违反时的处罚。文中数值均取自该两部法令。</p>

<h2>可以委托的业务</h2>
<p>《行政士法》第2条第1项列举了行政士的七类业务，并以但书规定"依其他法律受限制的业务不得办理"。在许可实务中最关键的是第5号——为取得认可、许可及执照等，代理向行政机关提出的申请、请求及申报。</p>
<div class="highlight-box">《行政士法》第2条第1项第5号：为取得认可、许可及执照等而向行政机关提出的申请、请求及申报等的代理。</div>
<p>同法施行令第2条第5号将该事务具体化为"受他人委托，代理办理认可、许可、执照及批准的申请、请求等，向行政机关要求一定行为或进行申报的事务"。也就是说，行政士并非只是在申请书上填写委托人姓名，向行政机关提出申请、申报的行为本身即可由行政士代理完成。</p>
<p>其余业务同样围绕许可流程：制作提交行政机关的文件（第1号）、权利义务或事实证明文件（第2号）、翻译（第3号）、提交上述文件（第4号）、行政法令咨询答复（第6号）、受托事务的事实调查与确认（第7号）。一件许可案件可整体委托：要件审查、申请书制作、代理递交、补正应对、领取许可证。各行业文件可参见<a href="/services/logistics">国际物流周旋业登记</a>与<a href="/services/food-manufacturing">食品制造加工业许可</a>说明。</p>

<h2>行政士种类不同，委托范围也不同</h2>
<p>行政士并非只有一种。施行令第3条将行政士分为一般行政士、海事行政士与外语翻译行政士，并分别规定业务范围。所委托的事项是否属于该事务所的种类范围，是第一项确认事项。</p>
<table><thead><tr><th>种类</th><th>业务范围</th><th>能否代理许可申请</th></tr></thead><tbody>
<tr><td>一般行政士</td><td>法第2条第1项各号业务（第3号翻译除外），不含海运及海洋安全审判事务</td><td>可以</td></tr>
<tr><td>海事行政士</td><td>限于海运或海洋安全审判相关的法第2条第1项各号业务（第3号除外）</td><td>限海运、海洋领域</td></tr>
<tr><td>外语翻译行政士</td><td>法第2条第1项第3号（翻译）与第4号（提交所译文件）业务</td><td>限翻译与递交</td></tr>
</tbody></table>
<p>外国人或外国法人常希望连本国文件翻译一并委托。翻译属外语翻译行政士业务，许可申请代理属一般行政士业务，若一并处理，应确认两种行政士是否各自参与。</p>

<h2>不可委托的业务</h2>
<p>第2条第1项但书所称"依其他法律受限制的业务"即为委托界限。诉讼与法律纠纷代理不属于行政士业务范围，税务代理属税务士业务，登记申请代理属法务士业务，行政士不得以此为业。</p>
<p>同法第22条第3号进一步将"超出行政士业务范围，介入他人诉讼或其他权利关系纠纷、民愿事务处理过程的行为"本身列为禁止行为。许可被驳回后进入行政审判或行政诉讼阶段时，这一界限就会成为问题，因此在委托阶段预先确定"被驳回之后可委托到哪一步"更为安全。</p>
<p>第22条还禁止：无正当理由拒绝受托；就同一事务接受利害对立双方的委托（双方同意者除外）；以与经办公务员的私人关系可施加影响相宣传；误导消费者的广告行为；利用介绍业者揽收委托。</p>

<h2>委托前必须确认的五项</h2>
<p>以下五项均有法令依据，签约前可现场确认。</p>
<table><thead><tr><th>确认事项</th><th>确认内容</th><th>依据</th></tr></thead><tbody>
<tr><td>申报确认证</td><td>由事务所所在地市长、郡守、区厅长核发的确认证正本。出借、借用及居间介绍均被禁止，应确认证书姓名与实际经办人一致</td><td>法第12条、第13条</td></tr>
<tr><td>事务所</td><td>行政士仅可设置1处业务事务所；合同事务所须由2名以上行政士组成，主事务所与分事务所各须1名以上常驻</td><td>法第14条</td></tr>
<tr><td>业务处理簿</td><td>受托后须制作并保管业务处理簿，记载流水号、受托年月日、业务概要、报酬额、委托人地址与姓名</td><td>法第24条</td></tr>
<tr><td>受托限制</td><td>由公务员职位退职的行政士，自退职之日起1年内，不得就退职前1年至退职时任职机关的许可申请代理业务接受委托</td><td>法第21条之2</td></tr>
<tr><td>研修教育</td><td>行政士须接受市·道知事实施的研修教育；开始执业前须完成行政安全部长官施行的实务教育</td><td>法第25条</td></tr>
</tbody></table>
<p>事务所迁移的，须自迁移之日起10日内向迁移后事务所所在地的管辖市长等申报。若委托合同上的地址与确认证地址不一致，宜询问迁移申报是否已办妥。</p>
<p>法人形态还须确认一项：行政士法人须由3名以上行政士作为成员方可设立，并须就因故意或过失致委托人损害的赔偿责任，计提准备金或投保。具体流程可见<a href="/blog/nonprofit-association-permit">非营利社团法人设立许可程序</a>。</p>

<h2>无资格代办的处罚</h2>
<p>非行政士者，除其他法律允许的情形外，不得以第2条所定业务为业，亦不得使用行政士或与之类似的名称。上述禁止均有刑罚与罚款作为保障。</p>
<table><thead><tr><th>违反行为</th><th>处罚</th><th>依据</th></tr></thead><tbody>
<tr><td>非行政士以行政士业务为业；出借、借用或居间介绍申报确认证</td><td>3年以下有期徒刑或30,000,000韩元以下罚金</td><td>法第36条第1项</td></tr>
<tr><td>未办业务申报而执业；违反受托限制；宣扬私人关系；误导性广告；泄露业务秘密；停业期间执业</td><td>1年以下有期徒刑或10,000,000韩元以下罚金</td><td>法第36条第2项</td></tr>
<tr><td>收取报酬以外的金钱或财产利益；无正当理由拒绝受托；双方受托；介入权利关系纠纷；利用介绍业者揽收委托</td><td>1,000,000韩元以下罚金</td><td>法第36条第3项</td></tr>
<tr><td>使用行政士或类似名称；无正当理由不服从报告、资料提交命令</td><td>5,000,000韩元以下罚款</td><td>法第38条第1项</td></tr>
<tr><td>未申报事务所迁移；未制作或虚假制作业务处理簿；未接受研修教育而执业</td><td>1,000,000韩元以下罚款</td><td>法第38条第2项</td></tr>
</tbody></table>
<p>事务职员或所属行政士就业务违反第36条时，除处罚行为人外，对该事务所或法人亦并处同条罚金；但已尽相当注意与监督者，不在此限。</p>
<p>监督亦实际运作：行政安全部长官或管辖市长等可命令报告业务或提交业务处理簿等资料，公务员可进入事务所检查账簿或询问。设置两处以上事务所、收取报酬以外金品等，可在6个月范围内命令停止业务；该处分自事由发生之日起经过3年后不得作出。</p>

<h2>委托之后行政士承担的义务</h2>
<p>委托合同成立后，行政士须维持品位，以诚信公正履行职务；在履行受托业务过程中因故意或过失致委托人财产损害的，负赔偿责任。</p>
<p>报酬关系亦由法律规定。行政士自委托人收取报酬，行政士及其事务职员不得以任何名目在报酬之外向委托人收取金钱、财产利益或其他对待给付。若在递交过程中被要求另行付费，请确认该项目是否为向行政机关缴纳的法定手续费。费用因个案而异，将于免费咨询时准确说明。</p>
<p>保密义务在委托结束后仍存续：行政士或曾为行政士者（含现任及曾任事务职员），不得无正当理由泄露因职务知悉的事实。行业判断不明时的要点见<a href="/blog/administrative-license-permit-specialist-guide">许可行政士选择指南</a>。</p>
<p>法令原文可在国家法令信息中心直接查阅：<a href="https://www.law.go.kr/법령/행정사법" target="_blank" rel="noopener">行政士法</a>与<a href="https://www.law.go.kr/법령/행정사법시행령" target="_blank" rel="noopener">行政士法施行令</a>。</p>

<div class="faq-section"><h2>常见问题</h2>
<div class="faq-item"><p class="faq-q">Q. 申请书上只写代表姓名，由行政士代为递交可以吗？</p><p class="faq-a">A. 可以。《行政士法》第2条第1项第5号将为取得认可、许可、执照等而向行政机关提出申请、请求、申报的代理定为行政士业务，同法施行令第2条第5号将其具体化为"向行政机关要求一定行为或进行申报的代理事务"。代理人递交时仍须备齐可证明委托事实的文件。</p></div>
<div class="faq-item"><p class="faq-q">Q. 许可被驳回后，行政审判可否委托同一行政士？</p><p class="faq-a">A. 应先确认委托范围。《行政士法》第2条第1项但书规定依其他法律受限制的业务不得办理，同法第22条第3号禁止超出业务范围介入他人诉讼或权利关系纠纷。驳回之后的程序，宜在委托阶段预先约定可委托的范围。</p></div>
<div class="faq-item"><p class="faq-q">Q. 可以委托没有行政士资格的咨询公司代办吗？</p><p class="faq-a">A. 不建议。《行政士法》第3条第1项禁止非行政士者除其他法律允许外以行政士业务为业，同法第36条第1项对违反者处3年以下有期徒刑或30,000,000韩元以下罚金。无资格代办同时伴随程序中断的风险。</p></div>
<div class="faq-item"><p class="faq-q">Q. 强调"认识经办公务员"的宣传应如何看待？</p><p class="faq-a">A. 属法律禁止的宣传。《行政士法》第22条第4号禁止以与相关公务员的私人关系可施加影响相宣传，同法第36条第2项对此处1年以下有期徒刑或10,000,000韩元以下罚金。</p></div>
<div class="faq-item"><p class="faq-q">Q. 委托前一定要查看申报确认证吗？</p><p class="faq-a">A. 建议查看。申报确认证系管辖市长等受理行政士业务申报后核发的证书（同法第12条第1项），同法第13条禁止出借确认证及居间介绍。核对证书姓名与实际经办行政士是否一致，是筛除无资格代办最简便的方法。</p></div>
</div>

<div class="cta-block">
 <h3>先厘清可以委托的范围</h3>
 <p>柳善行政士事务所将先行确认您所在行业与个案可委托到哪一步、需要哪些文件。电话 02-363-2251，工作日 09:30–17:30 KST。</p>
 <a href="/contact?utm_source=blog&utm_medium=cta&utm_campaign=administrative-scrivener-scope-and-limits">申请免费咨询</a>
</div>

<p class="author-block">柳善行政士事务所（代表行政士 郑柳善）· 依《行政士法》（法律第19034号，2022年11月15日施行）及同法施行令（总统令第35813号，2026年1月1日施行）原文撰写 · 最终审阅日 9月21日</p>`,
  },

  ja: {
    title: '韓国の行政士に委任できる許認可業務の範囲と限界',
    category: '許認可',
    metaTitle: '韓国行政士の業務範囲と委任の限界 — 行政士法で確認',
    metaDescription: '韓国の許認可を委任する前に確認すべき業務範囲を、行政士法第2条と同法施行令第2条の原文に基づいて整理しました。委任前の確認5項目と違反時の制裁も掲載しています。',
    excerpt: '韓国の許認可を委任する前に、法律がどこまでを認めているかを確認してください。業務範囲は事務所が決めるものではなく、法律が定めています。',
    content: `<div class="toc"><p>目次</p><ol><li>委任できる業務</li><li>行政士の種類による業務範囲の違い</li><li>委任できない業務</li><li>委任前の確認5項目</li><li>無資格代行と違反行為への制裁</li><li>委任後に行政士が負う義務</li><li>よくあるご質問</li></ol></div>
<p>韓国の<strong>行政士</strong>（행정사）は、日本の行政書士事務所に相当する韓国の行政士事務所に所属し、他人の委任を受けて行政機関に提出する書類を作成し、認可・許可・免許・承認の申請や届出を代理する有資格者です。その業務範囲は事務所が独自に定めるものではなく、「行政士法」第2条と同法施行令第2条が条文で定めています。したがって委任前に確認すべきものは広告の文言ではなく、法令がその事務所に認めた業務の境界です。</p>
<p>本稿は現行の「行政士法」（法律第19034号、2022年11月15日施行）と同法施行令（大統領令第35813号、2026年1月1日施行）の原文に基づき、委任できる範囲と委任できない事項、委任前の確認項目、違反時の制裁を整理します。記載の数値はすべて上記2法令から確認しています。</p>
<div class="highlight-box">この記事でわかること — 行政士に委任できる許認可業務の範囲（法第2条第1項第5号）、行政士の種類ごとの業務範囲（施行令第3条）、委任前に確認する5項目、無資格代行に対する制裁（法第36条・第38条）。</div>

<h2>委任できる業務</h2>
<p>「行政士法」第2条第1項は行政士の業務を7号に列挙し、ただし書で「他の法律により制限された業務は行うことができない」と定めています。許認可実務で中心となるのは第5号、すなわち認可・許可及び免許等を受けるために行政機関に対して行う申請・請求及び届出等の代理です。</p>
<p>同法施行令第2条第5号は、この事務を「他人の委任を受けて、認可・許可・免許及び承認の申請・請求等、行政機関に一定の行為を求め、又は届出をする事務を代理すること」と具体化しています。つまり行政士は申請書に委任者の氏名を記載するだけでなく、行政機関に対する申請・届出の行為そのものを代理できます。</p>
<p>残りの業務も許認可の流れに沿います。行政機関に提出する書類の作成（第1号）、権利義務又は事実証明に関する書類の作成（第2号）、翻訳（第3号）、作成・翻訳した書類の提出代行（第4号）、行政関係法令に関する相談への応答（第6号）、委託を受けた事務の事実調査及び確認（第7号）です。</p>
<p>整理すると、許認可1件の委任範囲は、要件の検討から申請書と添付書類の作成、行政機関への提出代理、補正要求への対応、許認可証の受領までの全工程に及びます。業種ごとの必要書類は<a href="/services/logistics">国際物流周旋業の登録</a>や<a href="/services/food-manufacturing">食品製造加工業の許可</a>の案内をご確認ください。</p>

<h2>行政士の種類による業務範囲の違い</h2>
<p>行政士は一種類ではありません。同法施行令第3条は行政士を一般行政士、海事行政士、外国語翻訳行政士に区分し、種類ごとに業務範囲を定めています。委任しようとする事項がその事務所の種類の範囲内にあるかが最初の確認事項です。</p>
<table><thead><tr><th>種類</th><th>業務範囲</th><th>許認可の代理</th></tr></thead><tbody>
<tr><td>一般行政士</td><td>法第2条第1項各号の業務（第3号の翻訳を除く）。海運又は海洋安全審判に関する業務は除く</td><td>可能</td></tr>
<tr><td>海事行政士</td><td>海運又は海洋安全審判に関する法第2条第1項各号の業務（第3号を除く）</td><td>海運・海洋分野に限る</td></tr>
<tr><td>外国語翻訳行政士</td><td>法第2条第1項第3号（翻訳）及び第4号（翻訳書類の提出代行）の業務</td><td>翻訳・提出代行に限る</td></tr>
</tbody></table>
<p>外国人や外国法人が韓国の許認可を準備する際、本国書類の翻訳まで一括して委任したいという相談が多くあります。翻訳は外国語翻訳行政士の業務、許認可申請の代理は一般行政士の業務ですので、両方を併せて進めるにはそれぞれの種類の行政士が関与しているかを確認してください。</p>

<h2>委任できない業務</h2>
<p>第2条第1項ただし書の「他の法律により制限された業務」が委任の限界線です。訴訟代理や法律紛争の代理は行政士の業務範囲外、税務調整・税務代理は税務士の業務、登記申請の代理は法務士の業務であり、行政士が業として行うことはできません。</p>
<p>さらに同法第22条第3号は、行政士の業務範囲を超えて他人の訴訟その他の権利関係紛争又は民願事務の処理過程に介入する行為そのものを禁止行為と定めています。許認可が却下された後に行政審判や行政訴訟へ移る場面でこの境界が問題になりますので、委任の段階で却下後はどこまで委任できるのかを確認しておくと安全です。</p>
<p>第22条はこのほか、正当な理由のない委任の拒否、利害を異にする双方からの同一業務の受任（双方の同意がある場合を除く）、担当公務員との縁故等を示して影響力を及ぼしうるものとする宣伝、消費者を誤導するおそれのある広告、斡旋を業とする者を利用した委任の誘致を禁止しています。</p>

<h2>委任前の確認5項目</h2>
<p>次の5項目はいずれも法令に根拠があり、契約前にその場で確認できます。</p>
<table><thead><tr><th>確認項目</th><th>確認内容</th><th>根拠</th></tr></thead><tbody>
<tr><td>届出確認証</td><td>事務所所在地の市長・郡守・区庁長が交付した確認証の原本。貸与・借用・斡旋はいずれも禁止されているため、証書の氏名と実際の担当者が一致するかを確認する</td><td>法第12条・第13条</td></tr>
<tr><td>事務所</td><td>行政士は業務のための事務所を1か所のみ設置でき、合同事務所は2名以上で構成し、主事務所と分事務所にそれぞれ1名以上が常勤する必要がある</td><td>法第14条</td></tr>
<tr><td>業務処理簿</td><td>委任を受けたときは、一連番号・委任年月日・業務の概要・報酬額・委任者の住所と氏名を記載した業務処理簿を作成・保管しなければならない</td><td>法第24条</td></tr>
<tr><td>受任制限</td><td>公務員職を退職した行政士は、退職前1年から退職時までに勤務した行政機関に対する許認可申請代理の業務を、退職日から1年間受任できない</td><td>法第21条の2</td></tr>
<tr><td>研修教育</td><td>行政士は市・道知事が実施する研修教育を受けなければならず、業務を開始するには行政安全部長官が施行する実務教育を修了する必要がある</td><td>法第25条</td></tr>
</tbody></table>
<p>事務所を移転した場合は、移転した日から10日以内に移転後の事務所所在地を管轄する市長等へ届け出なければなりません。委任契約書の住所と確認証の住所が異なる場合は、移転の届出が済んでいるかをお尋ねください。</p>
<p>法人形態であれば確認事項がもう一つあります。行政士法人は3名以上の行政士を構成員として設立でき、職務の遂行に際し故意又は過失で依頼人に損害を与えた場合の賠償責任を担保するため、損害賠償準備金の積立て又は保険加入等の措置を講じなければなりません。非営利法人の設立のように期間の長い案件では確認しておくと安心です。手続の流れは<a href="/blog/nonprofit-association-permit">非営利社団法人の設立許可手続</a>でご覧いただけます。</p>

<h2>無資格代行と違反行為への制裁</h2>
<p>行政士でない者は、他の法律により許容される場合を除き第2条の業務を業として行うことができず、行政士又はこれと類似する名称を使用することもできません。これらの禁止は罰則と過怠料によって担保されています。</p>
<table><thead><tr><th>違反行為</th><th>制裁</th><th>根拠</th></tr></thead><tbody>
<tr><td>行政士でない者が行政士業務を業として行った場合、届出確認証の貸与・借用・斡旋</td><td>3年以下の懲役又は30,000,000ウォン以下の罰金</td><td>法第36条第1項</td></tr>
<tr><td>業務届出なく業務を行った場合、受任制限違反、縁故の宣伝、誤導のおそれのある広告、業務上の秘密漏洩、業務停止期間中の業務</td><td>1年以下の懲役又は10,000,000ウォン以下の罰金</td><td>法第36条第2項</td></tr>
<tr><td>報酬以外の金銭・財産上の利益の受領、正当な理由のない委任拒否、双方受任、権利関係紛争への介入、斡旋業者を利用した委任誘致</td><td>1,000,000ウォン以下の罰金</td><td>法第36条第3項</td></tr>
<tr><td>行政士又は類似名称の使用、正当な理由なく報告・資料提出命令に従わない場合</td><td>5,000,000ウォン以下の過怠料</td><td>法第38条第1項</td></tr>
<tr><td>事務所移転の届出をしない場合、業務処理簿の不作成又は虚偽作成、研修教育を受けずに業務を行った場合</td><td>1,000,000ウォン以下の過怠料</td><td>法第38条第2項</td></tr>
</tbody></table>
<p>事務職員又は所属行政士が業務に関連して第36条に違反した場合は、行為者を罰するほか、その行政士又は行政士法人にも同条の罰金刑が科されます。ただし違反行為を防止するため相当の注意と監督を怠らなかった場合はこの限りではありません。</p>
<p>監督も実際に機能しています。行政安全部長官又は事務所所在地を管轄する市長等は、業務に関する報告や業務処理簿等の資料提出を命じることができ、所属公務員が事務所に立ち入って帳簿・書類を検査し、又は質問することができます。2か所以上の事務所を設置した場合や報酬以外の金品を受領した場合等には、6か月の範囲で業務停止が命じられることがあり、その処分は事由が発生した日から3年を経過すると行うことができません。</p>

<h2>委任後に行政士が負う義務</h2>
<p>委任契約が成立すると、行政士は品位を保持し、信義と誠実をもって公正に職務を遂行する義務を負います。委任された業務の遂行に際し故意又は過失で委任者に財産上の損害を与えた場合は、その損害を賠償する責任があります。</p>
<p>報酬関係も法律に定められています。行政士は業務を委任した者から報酬を受け、行政士及びその事務職員は業務に関して報酬以外にいかなる名目でも委任者から金銭・財産上の利益その他の反対給付を受けることができません。提出の過程で別途の費用を求められた場合は、その項目が行政機関に納める法定手数料かどうかをご確認ください。費用は事案ごとに異なりますので、無料相談の際に正確にご案内いたします。</p>
<p>守秘義務は委任終了後も残ります。行政士又は行政士であった者（その事務職員及び事務職員であった者を含む）は、正当な理由なく職務上知り得た事実を他人に漏らしてはなりません。許認可書類には事業計画と財務情報が含まれるため、この条文は実質的な保護となります。業種の判断が難しい場合の確認点は<a href="/blog/administrative-license-permit-specialist-guide">許認可行政士の選び方</a>にまとめています。</p>
<p>法令の原文は国家法令情報センターでご確認いただけます。<a href="https://www.law.go.kr/법령/행정사법" target="_blank" rel="noopener">行政士法</a>と<a href="https://www.law.go.kr/법령/행정사법시행령" target="_blank" rel="noopener">行政士法施行令</a>を併せてご覧ください。</p>

<div class="faq-section"><h2>よくあるご質問</h2>
<div class="faq-item"><p class="faq-q">Q. 申請書に代表者の氏名だけを記載し、行政士が代わりに提出してもよいですか。</p><p class="faq-a">A. 可能です。「行政士法」第2条第1項第5号は、認可・許可・免許等を受けるために行政機関に対して行う申請・請求・届出等の代理を行政士の業務と定め、同法施行令第2条第5号がその内容を「行政機関に一定の行為を求め、又は届出をする事務を代理すること」と具体化しています。代理人が提出する場合も、委任の事実を確認できる書類は必要です。</p></div>
<div class="faq-item"><p class="faq-q">Q. 許認可が却下された場合、行政審判まで同じ行政士に委任できますか。</p><p class="faq-a">A. まず委任範囲をご確認ください。「行政士法」第2条第1項ただし書は他の法律により制限された業務を行えないと定め、同法第22条第3号は業務範囲を超えて他人の訴訟や権利関係紛争に介入する行為を禁止しています。却下後の手続は、委任の段階でどこまで委任できるかを整理しておくと安全です。</p></div>
<div class="faq-item"><p class="faq-q">Q. 行政士資格のないコンサルティング会社に許認可代行を委任してもよいですか。</p><p class="faq-a">A. お勧めしません。「行政士法」第3条第1項は、行政士でない者が他の法律により許容される場合を除いて行政士業務を業として行うことを禁止し、同法第36条第1項は違反者を3年以下の懲役又は30,000,000ウォン以下の罰金に処しています。無資格代行は手続が中断するリスクも伴います。</p></div>
<div class="faq-item"><p class="faq-q">Q. 担当公務員を知っていると宣伝する事務所はどう判断すべきですか。</p><p class="faq-a">A. 法が禁じる宣伝です。「行政士法」第22条第4号は、関連公務員との縁故等の私的関係を示して影響力を及ぼしうるものとして宣伝する行為を禁止し、同法第36条第2項はこれを1年以下の懲役又は10,000,000ウォン以下の罰金に処しています。</p></div>
<div class="faq-item"><p class="faq-q">Q. 委任前に届出確認証を必ず確認すべきですか。</p><p class="faq-a">A. 確認をお勧めします。届出確認証は管轄の市長等が行政士業務届出を受けて交付する証書であり（同法第12条第1項）、同法第13条は確認証の貸与と貸与の斡旋をいずれも禁止しています。証書の氏名と実際に業務を行う行政士が一致するかを見ることが、無資格代行を見分ける最も簡単な方法です。</p></div>
</div>

<div class="cta-block">
 <h3>まず委任できる範囲を整理します</h3>
 <p>業種・事案ごとにどこまで委任できるか、どの書類が必要かを柳善行政士事務所が先に確認いたします。電話 02-363-2251、平日 09:30～17:30 KST。</p>
 <a href="/contact?utm_source=blog&utm_medium=cta&utm_campaign=administrative-scrivener-scope-and-limits">無料相談を申し込む</a>
</div>

<p class="author-block">柳善行政士事務所（代表行政士 鄭柳善）· 「行政士法」（法律第19034号、2022年11月15日施行）及び同法施行令（大統領令第35813号、2026年1月1日施行）の原文に基づき作成 · 最終確認日 9月21日</p>`,
  },
}
