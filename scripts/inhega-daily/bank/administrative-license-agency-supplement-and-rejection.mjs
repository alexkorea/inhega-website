// 원고 은행 — inhega-daily
// 주제(풀 18개 중): license-agency(인허가대행) / 세부주제: rejection(반려·보완 사례)
//
// 법령 대조(law.go.kr DRF API, OC=test, 2026-10-03 확인 — 기본정보의 공포번호·시행일자 그대로):
//   민원 처리에 관한 법률         법률 제18748호(타법개정), 2022. 7. 12. 시행 (MST 239293)
//     제2조 제1호 가목 1)(법정민원) / 제9조 / 제10조 / 제17조 / 제19조 / 제22조 / 제27조 / 제30조 / 제31조 / 제35조
//   민원 처리에 관한 법률 시행령   대통령령 제36296호, 2026. 5. 6. 시행 (MST 285815)
//     제6조 제3항·제4항·제5항 / 제19조 / 제20조(2026. 5. 6. 전문개정) / 제21조 / 제23조 / 제24조 / 제25조 / 제31조 / 제33조 / 제34조 / 제40조
//   행정절차법                   법률 제18748호, 2022. 7. 12. 시행 (MST 239291) — 제17조 / 제19조 / 제23조 / 제26조
//   행정절차법 시행령             대통령령 제33649호, 2023. 8. 1. 시행 (MST 253247) — 제10조 / 제11조
//   행정심판법                   법률 제19269호, 2023. 3. 21. 시행 (MST 249041) — 제27조 / 제45조
//   행정소송법                   법률 제21615호, 2026. 5. 12. 시행 (MST 285913) — 제18조 / 제20조
//   행정기본법                   법률 제20824호, 2025. 3. 18. 시행 (MST 269955) — 제36조(제5항은 2025. 9. 19. 시행)
//   행정사법                     법률 제19034호, 2022. 11. 15. 시행 (MST 245299) — 제2조 제1항 제5호
// 대조표: scripts/inhega-daily/crosscheck/administrative-license-agency-supplement-and-rejection.md
//
// 처리기간(M5 규칙): 업종별 처리일수는 한 건도 단정하지 않았다. 법이 정한 것은 "기관이 종류별로 정해
// 공표한다"(민원처리법 제17조)뿐이므로, 본문의 일수는 전부 조문이 직접 정한 기한(보완 재요구 10일,
// 이의신청 60일·결정 10일, 행정심판 90일·180일, 재결 60일+30일, 취소소송 90일·1년 등)이다.
// 이의신청과 행정심판 기간의 관계는 해석이 갈릴 수 있어 "원래 처분일부터 90일" 보수적 관리만 권했다.
// 우리 서비스 가격·수수료 금액은 한 건도 쓰지 않았다(지침서 X41). 법정 수수료 금액도 쓰지 않았다.
// 기존 라이브 글과의 의도 분리: administrative-license-permit-specialist-guide(행정사 선택),
// administrative-scrivener-scope-and-limits(행정사 업무범위) — 이 글은 신청 후 보완·반려·거부 절차만 다룬다.

export default {
  topic: 'license-agency',
  angle: 'rejection',
  slug: 'administrative-license-agency-supplement-and-rejection',
  kind: 'cluster',
  coverImage: '/images/service-license.webp',
  relatedServices: [
    { title: '건축물 용도변경', href: '/services/building-usage' },
    { title: '식품제조가공업 허가', href: '/services/food-manufacturing' },
    { title: '국제물류주선업 등록', href: '/services/logistics' },
  ],

  ko: {
    title: '인허가 대행 절차의 보완요구와 반려 — 보완기간·처리기간 산입 제외·거부처분 불복 기한',
    category: '인허가',
    metaTitle: '인허가 대행 절차의 보완요구·반려 — 보완기간과 거부처분 불복 기한',
    metaDescription: '인허가 신청에 보완요구나 반려가 오는 이유와 법적 절차를 민원처리법 제22조·시행령 제24조·제25조, 행정절차법 제17조 기준으로 정리하고, 거부처분 이의신청·행정심판 기한과 보완을 줄이는 체크리스트를 담았습니다.',
    excerpt: '인허가 대행에서 가장 흔한 지연은 접수 뒤의 보완요구입니다. 보완기간을 누가 어떻게 정하는지, 보완 중 처리기간은 멈추는지, 반려와 거부처분은 무엇이 다른지, 거부되면 언제까지 다툴 수 있는지를 법령 원문 기준으로 정리했습니다.',
    content: `<div class="toc"><p>목차</p><ol><li>보완요구와 반려는 어느 법에서 나오나</li><li>보완요구의 기간·방식·연장</li><li>처리기간 계산과 산입하지 않는 기간</li><li>반려와 거부처분은 다르다</li><li>거부처분 불복 — 이의신청·행정심판·행정소송</li><li>보완을 줄이는 신청 전 체크리스트</li><li>자주 묻는 질문</li></ol></div>
<p><strong>인허가 대행</strong>에서 일정이 가장 자주 어긋나는 지점은 심사 결과가 아니라 접수 뒤에 오는 <strong>보완요구</strong>입니다. 보완요구란 행정기관이 접수한 신청서나 구비서류에 흠이 있을 때 기간을 정해 고쳐 내도록 요구하는 절차이고, 그 기간 안에 보완하지 않으면 접수된 서류가 반려될 수 있습니다. 허가·등록·신고 신청은 「민원 처리에 관한 법률」(이하 "민원처리법")이 말하는 법정민원이므로, 보완·반려·거부의 절차는 업종별 법률보다 먼저 이 법과 「행정절차법」이 공통으로 정합니다.<!-- 근거: 민원 처리에 관한 법률 제2조 제1호 가목 1), 제22조 제1항; 행정절차법 제17조 제5항·제6항 --></p>
<p>이 글은 2026년 기준 현행 민원처리법과 같은 법 시행령, 「행정절차법」과 같은 법 시행령, 「행정심판법」·「행정소송법」·「행정기본법」 원문을 대조해 인허가 대행 절차 가운데 보완·반려·거부 단계만 골라 정리한 것입니다. 특정 업종의 요건이 아니라 모든 법정민원에 공통으로 적용되는 절차 규칙을 다루므로, 업종별 구비서류와 처리기간은 관할 기관이 공표한 민원편람으로 따로 확인해야 합니다.<!-- 근거: 민원 처리에 관한 법률(법률 제18748호), 같은 법 시행령(대통령령 제36296호, 2026. 5. 6. 시행), 같은 법 제17조 제3항 --></p>
<p>행정사에게 어떤 일을 맡길 수 있는지는 <a href="/blog/administrative-scrivener-scope-and-limits">인허가 행정사 업무범위와 위임 한계</a>에서, 사무소를 고르는 기준은 <a href="/blog/administrative-license-permit-specialist-guide">인허가 행정사 선택 가이드</a>에서 다루었습니다. 이 글은 신청서를 낸 뒤 보완요구서나 반려·거부 통지를 받았을 때의 대응에 집중합니다.</p>

<h2>보완요구와 반려는 어느 법에서 나오나</h2>
<p>민원처리법은 법령·훈령·예규·고시·자치법규 등에서 정한 요건에 따라 인가·허가·승인·특허·면허 등을 신청하거나 장부·대장 등에 등록·등재를 신청 또는 신고하는 민원을 <strong>법정민원</strong>으로 정의합니다. 영업허가, 업 등록, 각종 신고가 모두 여기에 들어갑니다.<!-- 근거: 민원 처리에 관한 법률 제2조 제1호 가목 1) --> 그래서 업종이 달라도 보완과 반려의 기본 규칙은 같습니다.</p>
<div class="highlight-box">「행정절차법」 제17조 제5항: 행정청은 신청에 구비서류의 미비 등 흠이 있는 경우에는 보완에 필요한 상당한 기간을 정하여 지체 없이 신청인에게 보완을 요구하여야 한다. 제6항: 행정청은 신청인이 제5항에 따른 기간 내에 보완을 하지 아니하였을 때에는 그 이유를 구체적으로 밝혀 접수된 신청을 되돌려 보낼 수 있다.<!-- 근거: 행정절차법 제17조 제5항·제6항 --></div>
<p>순서가 중요합니다. 행정기관은 다른 법령에 특별한 규정이 없으면 민원 신청의 접수를 보류하거나 거부할 수 없고, 접수된 민원문서를 부당하게 되돌려 보내서도 안 됩니다. 접수하면 접수증을 내주어야 하며, 직접 방문하지 않고 신청한 민원처럼 시행령이 정한 경우에만 접수증을 생략할 수 있습니다.<!-- 근거: 민원 처리에 관한 법률 제9조 제1항·제2항, 같은 법 시행령 제6조 제3항, 행정절차법 제17조 제4항 --> 즉 "서류가 부족해 보인다"는 이유로 창구에서 접수 자체를 돌려보내는 것은 법이 예정한 절차가 아니고, 흠은 접수한 뒤 보완요구로 다루는 것이 원칙입니다.</p>
<p>보완요구에는 한계도 있습니다. 행정기관은 관계법령등에서 정한 구비서류 외의 서류를 추가로 요구해서는 안 되고, 해당 기관의 공부(公簿)나 행정정보 공동이용으로 확인할 수 있는 내용은 증명서류를 요구하지 말고 담당자가 직접 확인해야 합니다. 원래 민원의 내용 변경이나 갱신을 신청할 때 이미 낸 서류를 특별한 사유 없이 다시 요구하는 것도 금지됩니다(민원처리법 제10조 제1항·제3항·제7항).<!-- 근거: 민원 처리에 관한 법률 제10조 제1항·제3항·제7항 --> 보완요구서를 받으면 요구된 서류가 어떤 조문에 근거한 것인지부터 확인해 볼 가치가 있는 이유입니다.</p>

<h2>보완요구의 기간·방식·연장</h2>
<p>보완 절차의 세부는 민원처리법 제22조와 시행령 제24조·제25조가 정합니다. 단계별로 정리하면 다음 표와 같습니다.<!-- 근거: 민원 처리에 관한 법률 제22조, 같은 법 시행령 제24조·제25조 --></p>
<table><thead><tr><th>단계</th><th>근거</th><th>내용</th></tr></thead><tbody>
<tr><td>보완 요구</td><td>법 제22조 제1항</td><td>상당한 기간을 정하여 지체 없이 보완 요구</td></tr>
<tr><td>요구 방식</td><td>시행령 제24조 제1항</td><td>문서 또는 구술 등, 민원인이 특별히 요청하면 문서</td></tr>
<tr><td>보완기간 연장 요청</td><td>시행령 제24조 제2항</td><td>필요한 기간을 밝혀 요청, 요청은 2회로 한정<!-- 근거: 민원 처리에 관한 법률 시행령 제24조 제2항 --></td></tr>
<tr><td>다시 보완 요구</td><td>시행령 제24조 제3항</td><td>기간 내 미보완 시 10일 이내의 기간을 정해 다시 요구 가능<!-- 근거: 민원 처리에 관한 법률 시행령 제24조 제3항 --></td></tr>
<tr><td>반려</td><td>시행령 제25조 제1항</td><td>기간 내 미보완 시 이유를 밝혀 민원문서를 되돌려 보낼 수 있음</td></tr>
<tr><td>취하 간주</td><td>시행령 제25조 제2항</td><td>소재 불명으로 보완요구가 2회 반송되면 종결처리 가능<!-- 근거: 민원 처리에 관한 법률 시행령 제25조 제2항, 행정절차법 시행령 제10조 --></td></tr>
</tbody></table>
<p>법은 보완기간을 며칠로 못 박지 않고 "상당한 기간"이라고만 정합니다. 실제 기한은 보완요구서에 적힌 날짜이므로, 요구서를 받은 날 그 날짜를 일정표에 먼저 옮겨 두어야 합니다. 기한 안에 준비가 어려우면 필요한 기간을 분명하게 밝혀 연장을 요청할 수 있고, 행정기관은 이를 고려해 보완기간을 다시 정해야 하지만 이 요청은 2회까지만 인정됩니다.<!-- 근거: 민원 처리에 관한 법률 제22조 제1항, 같은 법 시행령 제24조 제2항 --></p>
<p>기한을 넘겼을 때 10일 이내의 기간으로 다시 보완을 요구하는 것은 "할 수 있다"로 규정된 재량입니다. 기한을 넘기면 곧바로 반려될 수도 있다는 뜻이므로, 재보완 기회를 전제로 일정을 짜서는 안 됩니다. 보완기간의 계산에는 「민법」 제156조, 제157조, 제159조부터 제161조까지가 준용됩니다.<!-- 근거: 민원 처리에 관한 법률 시행령 제24조 제3항·제4항, 제25조 제1항 --></p>
<p>요구 내용이 모호하면 담당자에게 직접 묻는 것이 가장 빠릅니다. 행정기관은 보완 요구나 처리기간 연장 통지를 할 때 담당자의 소속·성명·연락처를 안내해야 합니다(시행령 제31조).<!-- 근거: 민원 처리에 관한 법률 시행령 제31조 --> 또 접수할 때 신청서의 단순한 착오, 오기, 누락처럼 명백한 오류는 민원인의 동의를 받아 직권으로 보정할 수 있고, 접수 시 구비서류 완비 여부와 예상 처리소요기간 등을 안내하도록 되어 있습니다.<!-- 근거: 민원 처리에 관한 법률 시행령 제6조 제4항·제5항 --></p>
<p>민원인 쪽에서도 처리가 끝나기 전에는 신청 내용을 보완하거나 변경 또는 취하할 수 있습니다. 다만 다른 법률에 특별한 규정이 있거나 민원의 성질상 허용되지 않는 경우는 예외입니다.<!-- 근거: 민원 처리에 관한 법률 제22조 제2항, 행정절차법 제17조 제8항 --> 요구받지 않은 흠을 먼저 발견했다면 스스로 보완해 두는 편이 반려 위험을 줄입니다.</p>

<h2>처리기간 계산과 산입하지 않는 기간</h2>
<p>인허가의 처리기간은 법률이 업종마다 일률로 정해 두는 것이 아니라, 행정기관이 법정민원의 종류별로 미리 정해 공표하고 민원편람에 수록하도록 되어 있습니다. 접수기관·경유기관·협의기관·처분기관별로 기간을 나누어 정해야 합니다.<!-- 근거: 민원 처리에 관한 법률 제17조 제1항~제3항, 행정절차법 제19조 제1항 --> 그래서 "처리기간이 며칠이냐"는 질문의 답은 해당 민원의 공표 처리기간에 있고, 실제 소요 기간은 관할 기관과 서류 상황에 따라 달라집니다. 공표된 기간을 셀 때는 다음 규칙을 따릅니다.</p>
<table><thead><tr><th>처리기간을 정한 방식</th><th>계산 방법</th><th>근거</th></tr></thead><tbody>
<tr><td>5일 이하<!-- 근거: 민원 처리에 관한 법률 제19조 제1항 --></td><td>접수시각부터 시간 단위, 1일은 8시간 근무시간 기준, 공휴일·토요일 불산입<!-- 근거: 민원 처리에 관한 법률 제19조 제1항 --></td><td>법 제19조 제1항<!-- 근거: 민원 처리에 관한 법률 제19조 제1항 --></td></tr>
<tr><td>6일 이상<!-- 근거: 민원 처리에 관한 법률 제19조 제2항 --></td><td>일 단위, 첫날 산입, 공휴일·토요일 불산입</td><td>법 제19조 제2항<!-- 근거: 민원 처리에 관한 법률 제19조 제2항 --></td></tr>
<tr><td>주·월·연</td><td>첫날 산입, 「민법」 제159조~제161조 준용</td><td>법 제19조 제3항</td></tr>
<tr><td>즉시</td><td>정당한 사유가 없으면 3근무시간 이내 처리<!-- 근거: 민원 처리에 관한 법률 시행령 제19조 --></td><td>시행령 제19조<!-- 근거: 민원 처리에 관한 법률 시행령 제19조 --></td></tr>
</tbody></table>
<p>보완과 관련해 가장 중요한 규칙은 <strong>보완에 걸린 기간이 처리기간에 들어가지 않는다</strong>는 점입니다. 민원처리법 시행령 제20조는 「행정절차법 시행령」 제11조를 준용한 기간을 처리기간에 산입하지 않는다고 정하고, 그 제11조 제1호는 신청서의 보완에 소요되는 기간을 들면서 보완을 위해 신청서를 발송한 날과 보완되어 행정청에 도달한 날까지 포함시킵니다.<!-- 근거: 민원 처리에 관한 법률 시행령 제20조 제1호(2026. 5. 6. 전문개정), 행정절차법 시행령 제11조 제1호 --> 보완요구를 받는 순간 처리 완료 예정일은 보완에 걸린 만큼 뒤로 밀린다고 보아야 합니다.</p>
<p>같은 제11조는 접수·경유·협의·처리 기관이 상당히 떨어져 있을 때의 문서 이송 기간, 대표자 선정 기간, 의견청취 기간, 실험·검사·감정이나 전문적인 기술검토 같은 특별한 추가절차에 부득이하게 드는 기간, 행정안전부령이 정하는 선행사무의 완결을 조건으로 하는 기간도 처리기간에서 뺍니다. 정보시스템 장애로 처리가 불가능한 기간도 산입하지 않습니다.<!-- 근거: 행정절차법 시행령 제11조 제2호~제6호, 민원 처리에 관한 법률 시행령 제20조 제2호 --></p>
<p>행정기관이 처리기간 자체를 연장하는 데에도 제한이 있습니다. 관계 기관 협조, 사실관계·현장 확인, 불가항력 등의 사유가 있을 때 처리기간의 범위에서 한 차례 연장할 수 있고, 다시 연장하려면 민원인의 동의를 받아 한 차례만 가능합니다. 단순 업무과중이나 담당자 지정 지연·부재는 연장 사유가 될 수 없으며, 연장하면 사유와 처리완료 예정일을 문서로 알려야 합니다(시행령 제21조).<!-- 근거: 민원 처리에 관한 법률 시행령 제21조 제1항~제3항 --> 접수된 날부터 30일이 지나도 처리가 끝나지 않으면 진행상황과 완료 예정일을 통지해야 하고, 이 통지는 30일이 지날 때마다 하는 것이 원칙입니다(시행령 제23조).<!-- 근거: 민원 처리에 관한 법률 시행령 제23조 제1항·제2항 --> 정당한 처리기간 안에 처리되지 않으면 해당 행정청이나 감독 행정청에 신속한 처리를 요청할 수 있습니다.<!-- 근거: 행정절차법 제19조 제4항 --></p>

<h2>반려와 거부처분은 다르다</h2>
<p><strong>반려</strong>는 보완기간 안에 흠이 고쳐지지 않아 접수된 서류를 되돌려 보내는 것이고, <strong>거부처분</strong>은 서류를 심사한 뒤 요건을 갖추지 못했다고 보아 허가·등록 등을 하지 않기로 하는 처분입니다. 반려는 내용 판단에 들어가기 전 단계에서, 거부는 내용 판단을 마친 뒤에 나온다는 점이 실무상 가장 큰 차이입니다.<!-- 근거: 민원 처리에 관한 법률 시행령 제25조 제1항, 행정절차법 제17조 제6항, 민원 처리에 관한 법률 제27조 제3항 --></p>
<p>반려할 때도 행정기관은 그 이유를 분명히 밝혀야 합니다. 반려 통지를 받았다면 어떤 서류의 어떤 흠이 보완되지 않았다고 보았는지 확인해 그 부분을 고쳐 다시 신청하는 것이 일반적인 대응입니다. 다만 반려 통지가 실질적으로 신청 내용을 받아들이지 않겠다는 판단을 담고 있다면 거부와 같은 불복 문제가 생길 수 있으므로, 통지서에 적힌 불복 안내와 기한을 함께 확인해야 합니다.<!-- 근거: 민원 처리에 관한 법률 시행령 제25조 제1항, 행정절차법 제26조 --></p>
<p>거부처분에는 더 엄격한 통지 의무가 붙습니다. 처리결과는 원칙적으로 문서로 통지해야 하고, 민원의 내용을 거부할 때는 거부 이유와 구제절차를 함께 알려야 합니다.<!-- 근거: 민원 처리에 관한 법률 제27조 제1항·제3항 --> 「행정절차법」도 신청 내용을 모두 그대로 인정하는 경우 등이 아니면 처분의 근거와 이유를 제시하도록 하고, 행정심판·행정소송을 제기할 수 있는지와 청구절차·청구기간을 알리도록 정합니다(행정절차법 제23조 제1항, 제26조).<!-- 근거: 행정절차법 제23조 제1항, 제26조 --> 거부 통지서의 "이유"와 "불복 안내"는 다음 단계의 출발점이므로 원본을 그대로 보관해 두어야 합니다.</p>

<h2>거부처분 불복 — 이의신청·행정심판·행정소송</h2>
<p>법정민원이 거부되었을 때 쓸 수 있는 수단과 기한은 다음과 같습니다. 각 기한은 해당 조문이 직접 정한 것입니다.<!-- 근거: 민원 처리에 관한 법률 제35조, 행정심판법 제27조·제45조, 행정소송법 제20조 --></p>
<table><thead><tr><th>수단</th><th>근거</th><th>기한·내용</th></tr></thead><tbody>
<tr><td>이의신청</td><td>민원처리법 제35조 제1항</td><td>거부처분을 받은 날부터 60일 이내, 처분한 행정기관의 장에게 문서로<!-- 근거: 민원 처리에 관한 법률 제35조 제1항 --></td></tr>
<tr><td>이의신청 결정</td><td>민원처리법 제35조 제2항</td><td>받은 날부터 10일 이내 결정·통지, 부득이하면 10일 이내 범위에서 연장<!-- 근거: 민원 처리에 관한 법률 제35조 제2항 --></td></tr>
<tr><td>행정심판 청구</td><td>행정심판법 제27조 제1항·제3항</td><td>처분이 있음을 알게 된 날부터 90일, 처분이 있었던 날부터 180일<!-- 근거: 행정심판법 제27조 제1항·제3항 --></td></tr>
<tr><td>재결</td><td>행정심판법 제45조 제1항</td><td>심판청구서를 받은 날부터 60일 이내, 위원장 직권으로 30일 연장 가능<!-- 근거: 행정심판법 제45조 제1항 --></td></tr>
<tr><td>취소소송</td><td>행정소송법 제20조</td><td>처분이 있음을 안 날부터 90일, 처분이 있은 날부터 1년(행정심판을 거친 경우 재결서 정본 송달일부터 기산)<!-- 근거: 행정소송법 제20조 제1항·제2항 --></td></tr>
</tbody></table>
<div class="highlight-box">민원처리법 제35조 제1항: 법정민원에 대한 행정기관의 장의 거부처분에 불복하는 민원인은 그 거부처분을 받은 날부터 60일 이내에 그 행정기관의 장에게 문서로 이의신청을 할 수 있다. 제3항: 민원인은 제1항에 따른 이의신청 여부와 관계없이 「행정심판법」에 따른 행정심판 또는 「행정소송법」에 따른 행정소송을 제기할 수 있다.<!-- 근거: 민원 처리에 관한 법률 제35조 제1항·제3항 --></div>
<p>이의신청서에는 신청인의 성명·주소·연락처, 이의신청의 대상이 되는 민원, 이의신청의 취지와 이유, 거부처분을 받은 날과 그 내용을 적어야 합니다. 행정기관은 결과를 통지할 때 결정 이유와 원래 거부처분에 대한 불복방법·불복절차를 구체적으로 밝혀야 합니다(시행령 제40조).<!-- 근거: 민원 처리에 관한 법률 시행령 제40조 제1항·제2항 --> 이의신청은 처분한 기관이 스스로 다시 보는 절차이므로, 거부 이유로 적힌 요건을 이후 갖추었다면 그 자료를 함께 내는 것이 핵심입니다.</p>
<p>기한 관리에서 주의할 점이 있습니다. 「행정기본법」 제36조 제1항은 일반적인 처분 이의신청 기간을 처분을 받은 날부터 30일로 정하지만, 같은 조 제6항은 다른 법률이 이의신청을 정하고 있으면 그 법률에 규정이 없는 사항만 같은 조를 따르게 합니다. 법정민원 거부처분은 민원처리법 제35조가 60일을 따로 정하고 있습니다.<!-- 근거: 행정기본법 제36조 제1항·제6항, 민원 처리에 관한 법률 제35조 제1항 --> 「행정기본법」 제36조 제4항은 이의신청 결과를 통지받은 날부터 90일 이내에 행정심판이나 행정소송을 제기할 수 있다고 정하지만, 이의신청 중 행정심판 기간이 어떻게 계산되는지는 사안별로 다툼이 생길 수 있습니다.<!-- 근거: 행정기본법 제36조 제4항 --> 가장 안전한 방법은 원래 거부처분 통지를 받은 날부터 90일을 기준으로 행정심판 여부를 정해 두는 것입니다.</p>
<p>취소소송은 법령에 행정심판 전치 규정이 없으면 행정심판을 거치지 않고 바로 제기할 수 있습니다(행정소송법 제18조 제1항).<!-- 근거: 행정소송법 제18조 제1항 --> 행정청이 심판청구 기간을 실제보다 길게 잘못 알렸다면 그 잘못 알린 기간 안의 청구가 적법한 것으로 보고, 기간을 아예 알리지 않았다면 처분이 있었던 날부터 180일까지 청구할 수 있습니다.<!-- 근거: 행정심판법 제27조 제5항·제6항 --></p>

<h2>보완을 줄이는 신청 전 체크리스트</h2>
<p>보완요구의 상당수는 신청 전에 확인할 수 있는 것들입니다. 인허가 대행 절차를 시작하기 전에 다음 항목을 점검하면 보완 횟수를 줄일 수 있습니다.</p>
<ul>
<li><strong>공표된 구비서류·처리기간 확인</strong> — 행정청은 신청에 필요한 구비서류, 접수기관, 처리기간을 게시하거나 편람으로 비치해야 합니다(행정절차법 제17조 제3항, 민원처리법 제13조). 신청 직전 시점의 게시본을 기준으로 서류 목록을 만듭니다.<!-- 근거: 행정절차법 제17조 제3항, 민원 처리에 관한 법률 제13조·제17조 제3항 --></li>
<li><strong>서류마다 근거 조문 대조</strong> — 관계법령등에 없는 서류는 요구할 수 없으므로, 반대로 법령 서식과 별표에 있는 서류는 빠짐없이 갖춥니다.<!-- 근거: 민원 처리에 관한 법률 제10조 제1항 --></li>
<li><strong>공동이용 대상 서류 구분</strong> — 행정정보 공동이용으로 확인할 수 있는 서류는 기관이 직접 확인합니다. 기관이 공표한 공동이용 대상 목록을 보고 중복 발급을 줄입니다.<!-- 근거: 민원 처리에 관한 법률 제10조 제3항·제6항 --></li>
<li><strong>신청서 기재 일치</strong> — 상호·대표자·소재지·면적 등 기재사항이 첨부서류와 한 글자라도 다르면 보완 사유가 됩니다. 명백한 오기는 동의를 받아 직권 보정될 수 있지만, 요건 서류의 누락은 보정 대상이 아닙니다.<!-- 근거: 민원 처리에 관한 법률 시행령 제6조 제5항 --></li>
<li><strong>사전심사청구 검토</strong> — 토지매입 등 비용이 많이 들거나 거부되면 상당한 경제적 손실이 생기는 법정민원은 정식 신청 전에 약식 사전심사를 청구할 수 있습니다. 처리기간은 원래 처리기간이 30일 미만이면 그 기간, 30일 이상이면 30일 이내에서 정해지고, 정식 신청 때 이미 낸 서류는 다시 요구받지 않습니다(민원처리법 제30조, 시행령 제33조·제34조).<!-- 근거: 민원 처리에 관한 법률 제30조 제1항·제3항, 같은 법 시행령 제33조 제1항, 제34조 제2항·제3항 --></li>
<li><strong>복합민원 일괄 처리</strong> — 여러 부서의 인허가가 얽힌 경우 기관이 주무부서를 지정해 한꺼번에 처리하게 할 수 있으므로, 접수 전에 주무부서를 확인합니다.<!-- 근거: 민원 처리에 관한 법률 제31조 제1항, 같은 법 시행령 제35조 --></li>
<li><strong>보완요구서 받은 날의 할 일</strong> — 기한을 기록하고, 요구 항목마다 근거 조문을 확인하고, 모호하면 안내된 담당자에게 묻고, 기한 내 준비가 어려우면 필요한 기간을 밝혀 연장을 요청합니다(2회 한정).<!-- 근거: 민원 처리에 관한 법률 시행령 제24조 제2항, 제31조 --></li>
</ul>
<p>신청과 보완 대응을 행정사에게 위임하는 경우 그 근거는 「행정사법」 제2조 제1항 제5호의 인가·허가 및 면허 등을 받기 위한 신청·청구 및 신고 등의 대리입니다.<!-- 근거: 행정사법 제2조 제1항 제5호 --> 업종별 요건이 복잡한 분야는 <a href="/services/building-usage">건축물 용도변경</a>, <a href="/services/food-manufacturing">식품제조가공업 허가</a> 안내에서 구비서류를 먼저 확인하실 수 있습니다. 법령 원문은 <a href="https://www.law.go.kr/법령/민원처리에관한법률" target="_blank" rel="noopener">민원 처리에 관한 법률</a>, <a href="https://www.law.go.kr/법령/행정절차법" target="_blank" rel="noopener">행정절차법</a>, <a href="https://www.law.go.kr/법령/행정심판법" target="_blank" rel="noopener">행정심판법</a>에서 볼 수 있습니다. 대행 비용은 사례별로 상이하므로 무료 상담 시 정확히 안내드립니다.</p>

<div class="faq-section"><h2>자주 묻는 질문 (FAQ)</h2>
<div class="faq-item"><p class="faq-q">Q. 보완요구를 받으면 기한은 얼마나 주어지나요?</p><p class="faq-a">A. 법은 일수를 정하지 않고 "상당한 기간"을 정해 요구하도록 합니다(민원처리법 제22조 제1항). 실제 기한은 보완요구서에 적힌 날짜입니다. 기한 내 준비가 어려우면 필요한 기간을 밝혀 연장을 요청할 수 있고 요청은 2회로 한정됩니다. 기한을 넘기면 10일 이내의 기간으로 다시 요구받을 수도 있지만, 곧바로 반려될 수도 있습니다.<!-- 근거: 민원 처리에 관한 법률 시행령 제24조 제2항·제3항, 제25조 제1항 --></p></div>
<div class="faq-item"><p class="faq-q">Q. 보완하는 동안에도 처리기간이 계속 흐르나요?</p><p class="faq-a">A. 아닙니다. 민원처리법 시행령 제20조가 준용하는 「행정절차법 시행령」 제11조 제1호에 따라 신청서 보완에 소요되는 기간은 처리기간에 산입하지 않으며, 보완을 위해 서류를 발송한 날과 보완 서류가 도달한 날도 포함됩니다.</p></div>
<div class="faq-item"><p class="faq-q">Q. 반려와 거부처분은 어떻게 다른가요?</p><p class="faq-a">A. 반려는 보완기간 안에 흠이 고쳐지지 않아 서류를 되돌려 보내는 것이고(시행령 제25조 제1항), 거부처분은 심사 후 요건 불충족으로 허가 등을 하지 않는 처분입니다. 거부할 때는 거부 이유와 구제절차를 함께 문서로 통지해야 합니다(민원처리법 제27조 제3항).</p></div>
<div class="faq-item"><p class="faq-q">Q. 거부처분에 이의신청을 하면 행정심판은 못 하나요?</p><p class="faq-a">A. 할 수 있습니다. 민원처리법 제35조 제3항은 이의신청 여부와 관계없이 행정심판이나 행정소송을 제기할 수 있다고 정합니다. 이의신청은 거부처분을 받은 날부터 60일 이내이고, 행정심판은 처분이 있음을 알게 된 날부터 90일 이내입니다(행정심판법 제27조 제1항). 기간 계산 다툼을 피하려면 원래 처분 통지일부터 90일을 기준으로 일정을 잡는 것이 안전합니다.</p></div>
<div class="faq-item"><p class="faq-q">Q. 창구에서 서류가 부족하다며 접수를 안 받아 주면 어떻게 하나요?</p><p class="faq-a">A. 민원처리법 제9조 제1항과 「행정절차법」 제17조 제4항은 다른 법령에 특별한 규정이 없으면 접수를 보류하거나 거부할 수 없다고 정합니다. 접수와 접수증 발급을 요청하고, 서류의 흠은 접수 후 보완요구 절차로 다루어 달라고 요청하는 것이 원칙에 맞는 대응입니다.</p></div>
</div>

<div class="cta-block">
 <h3>보완요구서나 거부 통지를 받으셨다면</h3>
 <p>요구서와 통지서를 보고 요구 항목별 근거 조문, 보완기한과 연장 요청 가능 여부, 이의신청·행정심판 기한을 유선행정사사무소가 먼저 정리해 드립니다. 전화 02-363-2251, 평일 09:30~17:30 KST.</p>
 <a href="/contact?utm_source=blog&utm_medium=cta&utm_campaign=administrative-license-agency-supplement-and-rejection">무료 상담 신청하기</a>
</div>

<p class="author-block">유선행정사사무소 (대표 행정사 정유선) · 「민원 처리에 관한 법률」(법률 제18748호), 같은 법 시행령(대통령령 제36296호, 2026. 5. 6. 시행), 「행정절차법」(법률 제18748호)과 같은 법 시행령(대통령령 제33649호), 「행정심판법」(법률 제19269호), 「행정소송법」(법률 제21615호, 2026. 5. 12. 시행), 「행정기본법」(법률 제20824호) 원문 기준으로 작성 · 최종 검토일 10월 3일<!-- 근거: 민원 처리에 관한 법률 법률 제18748호, 같은 법 시행령 대통령령 제36296호, 행정절차법 법률 제18748호, 행정심판법 법률 제19269호, 행정소송법 법률 제21615호, 행정기본법 법률 제20824호 --></p>`,
  },

  en: {
    title: 'Supplement Requests and Rejections in Korean Permit Applications — Deadlines and Remedies',
    category: 'Licensing & Permits',
    metaTitle: 'Permit Agency Korea Procedure — Supplement Requests, Returns and Appeals',
    metaDescription: 'How Korean authorities request supplements, return or refuse permit applications under the Civil Petitions Act, and the deadlines for objections and appeals.',
    excerpt: 'The most common delay in a Korean permit application is the supplement request after filing. Here is who sets the deadline, whether the clock stops, how a return differs from a refusal and how long you have to challenge one.',
    content: `<div class="toc"><p>Table of Contents</p><ol><li>Where Supplement Requests and Returns Come From</li><li>Supplement Periods, Form and Extensions</li><li>Counting the Processing Period</li><li>A Return Is Not a Refusal</li><li>Challenging a Refusal — Objection, Appeal, Lawsuit</li><li>Pre-Filing Checklist to Avoid Supplements</li><li>FAQ</li></ol></div>
<p>In the <strong>permit agency procedure in Korea</strong>, schedules most often slip at the <strong>supplement request</strong> that follows filing, not at the decision. If it is not met in time, the documents may be returned. Because permit, registration and report applications are "statutory civil petitions" under the Civil Petitions Treatment Act (민원 처리에 관한 법률), the rules on supplements, returns and refusals come first from that Act and the Administrative Procedures Act (행정절차법), whatever the industry.</p>
<p>All points below were checked against the current Korean statutes as of 2026. Documents and periods for a specific permit are in the competent authority's published handbook.</p>

<h2>Where Supplement Requests and Returns Come From</h2>
<p>A <strong>statutory civil petition</strong> covers applications for permits, approvals or licences, registrations and reports made under statutory requirements (Article 2, item 1(a)1)).</p>
<div class="highlight-box">Administrative Procedures Act, Article 17(5): Where an application has a defect such as missing documents, the agency shall, without delay, request the applicant to supplement it, setting a reasonable period. Article 17(6): Where the applicant fails to supplement within that period, the agency may return the application, stating the reasons specifically.</div>
<p>Unless another statute provides otherwise, an authority may not withhold or refuse receipt or unjustly send back filed documents, and it must issue a receipt except in cases such as petitions filed without a visit (Act Article 9(1) and (2), Decree Article 6(3), Administrative Procedures Act Article 17(4)). Defects are handled by a supplement request after receipt.</p>
<p>Documents beyond the relevant rules, data the authority can check itself, and documents already filed for a change or renewal may not be demanded (Article 10(1), (3) and (7)).</p>

<h2>Supplement Periods, Form and Extensions</h2>
<table><thead><tr><th>Step</th><th>Basis</th><th>Content</th></tr></thead><tbody>
<tr><td>Supplement request</td><td>Act, Article 22(1)</td><td>Without delay, setting a reasonable period</td></tr>
<tr><td>Form</td><td>Decree, Article 24(1)</td><td>Written or oral; written if the petitioner asks</td></tr>
<tr><td>Request to extend</td><td>Decree, Article 24(2)</td><td>Stating the period needed; limited to 2 requests</td></tr>
<tr><td>Second request</td><td>Decree, Article 24(3)</td><td>If not supplemented in time, a new period of up to 10 days may be set</td></tr>
<tr><td>Return</td><td>Decree, Article 25(1)</td><td>If not supplemented in time, documents may be returned with reasons</td></tr>
<tr><td>Deemed withdrawal</td><td>Decree, Article 25(2)</td><td>If requests come back undelivered 2 times, the case may be closed</td></tr>
</tbody></table>
<p>The law sets no number of days, only "a reasonable period"; the deadline is the date in the request. If you cannot meet it, ask for an extension stating the period you need; only 2 such requests are allowed. A second request of up to 10 days is discretionary, so missing the deadline can lead straight to a return. Civil Act Articles 156, 157 and 159 to 161 apply to counting (Decree Article 24(4)).</p>
<p>If a request is unclear, ask the official: the authority must give the official's department, name and contact details (Decree Article 31). Obvious typos or omissions in the form may be corrected by the authority with consent (Decree Article 6(4) and (5)). You may also supplement, change or withdraw the application before processing ends (Act Article 22(2); Administrative Procedures Act Article 17(8)).</p>

<h2>Counting the Processing Period</h2>
<p>Each authority sets and publishes processing periods per petition type (Act Article 17(1) to (3); Administrative Procedures Act Article 19(1)); actual time depends on the authority and the documents. Counting rules:</p>
<table><thead><tr><th>Period set as</th><th>Counting rule</th><th>Basis</th></tr></thead><tbody>
<tr><td>5 days or less</td><td>In hours from receipt, 1 day = 8 working hours, excluding Saturdays and public holidays</td><td>Act, Article 19(1)</td></tr>
<tr><td>6 days or more</td><td>In days, first day included, excluding Saturdays and public holidays</td><td>Act, Article 19(2)</td></tr>
<tr><td>Weeks, months, years</td><td>First day included, Civil Act Articles 159 to 161</td><td>Act, Article 19(3)</td></tr>
<tr><td>Immediate</td><td>Within 3 working hours unless there is good reason</td><td>Decree, Article 19</td></tr>
</tbody></table>
<p>The key rule: <strong>time spent on a supplement does not count</strong>. Decree Article 20 applies Article 11 of the Enforcement Decree of the Administrative Procedures Act, whose item 1 excludes the time needed to supplement, including the day the application is sent out and the day it comes back. Tests, technical review, hearings and system failures are also excluded (Decree Article 20, item 2).</p>
<p>The authority may extend the period once, within its original length, for reasons such as site checks, and once more only with your consent; workload is not a ground (Decree Article 21). If processing is not complete 30 days after receipt, progress must be notified, in principle every 30 days (Decree Article 23). After the proper period you may ask for prompt processing (Administrative Procedures Act Article 19(4)).</p>

<h2>A Return Is Not a Refusal</h2>
<p>A <strong>return</strong> sends documents back because a defect was not cured in time; a <strong>refusal</strong> is a decision after review that the requirements are not met. A return must state its reasons (Decree Article 25(1)); usually you fix the defect and apply again. If a return in substance rejects the application, the same questions of challenge may arise, so read the remedies notice in the letter (Administrative Procedures Act Article 26).</p>
<p>A refusal must be notified in writing with the reasons and available remedies (Act Article 27(1) and (3)) and notice of appeal routes (Administrative Procedures Act Articles 23(1) and 26). Keep the original.</p>

<h2>Challenging a Refusal — Objection, Appeal, Lawsuit</h2>
<table><thead><tr><th>Remedy</th><th>Basis</th><th>Time limit</th></tr></thead><tbody>
<tr><td>Objection</td><td>Civil Petitions Act, Article 35(1)</td><td>Within 60 days of receiving the refusal, in writing to the deciding authority</td></tr>
<tr><td>Decision on objection</td><td>Civil Petitions Act, Article 35(2)</td><td>Within 10 days; extendable by up to 10 days</td></tr>
<tr><td>Administrative appeal</td><td>Administrative Appeals Act, Article 27(1) and (3)</td><td>90 days from learning of the decision; 180 days from the decision</td></tr>
<tr><td>Ruling</td><td>Administrative Appeals Act, Article 45(1)</td><td>Within 60 days; extendable by 30 days</td></tr>
<tr><td>Revocation lawsuit</td><td>Administrative Litigation Act, Article 20</td><td>90 days from learning of the decision; 1 year from the decision (after an appeal, from service of the ruling)</td></tr>
</tbody></table>
<div class="highlight-box">Civil Petitions Treatment Act, Article 35(1): A petitioner who objects to the refusal of a statutory civil petition may file a written objection with the head of that agency within 60 days from receiving the refusal. Article 35(3): The petitioner may bring an administrative appeal or lawsuit regardless of whether an objection is filed.</div>
<p>The objection states the petition, reasons and the date of the refusal; the result must give reasons and routes of challenge (Decree Article 40).</p>
<p>Article 36(1) of the Framework Act on Public Administration sets 30 days for objections in general, but under Article 36(6) it only fills gaps where another statute provides an objection, and Article 35 of the Civil Petitions Act sets 60 days. Article 36(4) allows an appeal within 90 days of the objection result, but how the appeal period runs during an objection can be disputed. The safest course is to decide on an appeal within 90 days of the original refusal. A lawsuit may be brought without a prior appeal unless a statute requires one (Administrative Litigation Act Article 18(1)). If no appeal period was notified, 180 days from the decision apply (Administrative Appeals Act Article 27(6)).</p>

<h2>Pre-Filing Checklist to Avoid Supplements</h2>
<ul>
<li><strong>Published documents and periods</strong> — use the version posted just before filing (Administrative Procedures Act Article 17(3); Civil Petitions Act Articles 13 and 17(3)).</li>
<li><strong>Match each document to its provision</strong> — include every document in the official forms and tables (Article 10(1)).</li>
<li><strong>Shared-information documents</strong> — the authority checks these itself; see its published list (Article 10(3) and (6)).</li>
<li><strong>Consistent entries</strong> — a name, address or floor area that differs from the attachments is a ground for supplement; typos may be corrected with consent, missing requirement documents cannot (Decree Article 6(5)).</li>
<li><strong>Prior review</strong> — for costly petitions or where refusal would cause substantial loss, a prior review may be requested; its period is the original period if under 30 days, otherwise up to 30 days, and documents already filed are not demanded again (Act Article 30; Decree Articles 33 and 34).</li>
<li><strong>Combined petitions</strong> — a lead department may process multi-department permits together (Act Article 31(1); Decree Article 35).</li>
<li><strong>On the day a request arrives</strong> — record the deadline, check each item's provision, ask the named official, and request an extension if needed (up to 2; Decree Articles 24(2) and 31).</li>
</ul>
<p>Delegating filing and supplements to an administrative scrivener rests on Article 2(1)5 of the Certified Administrative Agents Act (행정사법). Texts: <a href="https://www.law.go.kr/법령/민원처리에관한법률" target="_blank" rel="noopener">Civil Petitions Treatment Act</a>, <a href="https://www.law.go.kr/법령/행정절차법" target="_blank" rel="noopener">Administrative Procedures Act</a>, <a href="https://www.law.go.kr/법령/행정심판법" target="_blank" rel="noopener">Administrative Appeals Act</a>. Costs vary case by case and are explained precisely during the free consultation.</p>

<div class="faq-section"><h2>FAQ</h2>
<div class="faq-item"><p class="faq-q">Q. How long do I get to answer a supplement request?</p><p class="faq-a">A. The deadline is the date in the request (Article 22(1)). You may ask for an extension up to 2 times; afterwards the authority may set a new period of up to 10 days or return the application.</p></div>
<div class="faq-item"><p class="faq-q">Q. Does the processing clock run while I supplement?</p><p class="faq-a">A. No. Under Decree Article 20 and item 1 of Article 11 of the Enforcement Decree of the Administrative Procedures Act, supplement time is excluded, including the days of dispatch and return.</p></div>
<div class="faq-item"><p class="faq-q">Q. What is the difference between a return and a refusal?</p><p class="faq-a">A. A return sends documents back for an uncured defect (Decree Article 25(1)); a refusal is a decision after review. A refusal must be notified in writing with reasons and remedies (Article 27(3)).</p></div>
<div class="faq-item"><p class="faq-q">Q. If I file an objection, can I still appeal?</p><p class="faq-a">A. Yes (Article 35(3)). The objection period is 60 days from the refusal and the appeal period 90 days from learning of it (Administrative Appeals Act Article 27(1)). Plan around 90 days from the original refusal.</p></div>
<div class="faq-item"><p class="faq-q">Q. What if the counter refuses to accept my application?</p><p class="faq-a">A. Article 9(1) of the Civil Petitions Act and Article 17(4) of the Administrative Procedures Act prohibit refusing receipt unless another statute provides otherwise. Ask for receipt and a receipt slip, and for defects to go through a supplement request.</p></div>
</div>

<div class="cta-block">
 <h3>Received a supplement request or a refusal?</h3>
 <p>We map the provision behind each item, the deadline and the objection and appeal time limits. Call 02-363-2251, weekdays 09:30–17:30 KST.</p>
 <a href="/contact?utm_source=blog&utm_medium=cta&utm_campaign=administrative-license-agency-supplement-and-rejection">Request a free consultation</a>
</div>

<p class="author-block">Yuseon Administrative Scrivener Office (Chief Scrivener Jeong Yuseon) · Based on the Civil Petitions Treatment Act (Act No. 18748) and its Enforcement Decree (Presidential Decree No. 36296, in force 6 May 2026), the Administrative Procedures Act (Act No. 18748) and its Enforcement Decree (Presidential Decree No. 33649), the Administrative Appeals Act (Act No. 19269), the Administrative Litigation Act (Act No. 21615, in force 12 May 2026) and the Framework Act on Public Administration (Act No. 20824) · Last reviewed 3 October</p>`,
  },

  zh: {
    title: '韩国许可证代办流程中的补正要求与退回 — 补正期限、处理期限扣除与驳回救济期限',
    category: '许可与执照',
    metaTitle: '韩国许可证代办流程 — 补正要求、退回与驳回的救济期限',
    metaDescription: '依据韩国《民愿处理法》第22条、施行令第24条·第25条及《行政程序法》第17条，说明许可申请被要求补正或退回的原因与程序，以及驳回处分的异议申请、行政复议期限和减少补正的检查清单。',
    excerpt: '韩国许可证代办流程中最常见的延误是受理后的补正要求。本文依据法令原文说明补正期限由谁决定、补正期间处理期限是否停止、退回与驳回有何不同，以及驳回后可在多长期限内寻求救济。',
    content: `<div class="toc"><p>目录</p><ol><li>补正要求与退回的法律依据</li><li>补正的期限、方式与延长</li><li>处理期限的计算</li><li>退回不等于驳回</li><li>驳回的救济 — 异议·复议·诉讼</li><li>减少补正的申请前清单</li><li>常见问题</li></ol></div>
<p>在<strong>韩国许可证代办流程</strong>中，进度最常延误的不是审查结果，而是受理后的<strong>补正要求</strong>；期限内未补正的，文件可能被退回。许可、登记、申报属于《民愿处理法》（민원 처리에 관한 법률）所称的法定民愿，因此不论行业，补正、退回、驳回的规则首先由该法和《行政程序法》（행정절차법）规定。</p>
<p>本文内容均以2026年现行法令原文核对。具体许可的附件和处理期限，请以管辖机关公布的民愿手册为准。</p>

<h2>补正要求与退回的法律依据</h2>
<p><strong>法定民愿</strong>是指依法定要件申请许可、批准、执照、登记或进行申报的民愿（第2条第1项가目1)）。</p>
<div class="highlight-box">《行政程序法》第17条第5款：申请存在附件不全等瑕疵时，行政机关应规定补正所需的相当期间，及时要求申请人补正。第6款：申请人未在该期间内补正的，可具体说明理由退回申请。</div>
<p>除其他法令另有规定外，机关不得保留或拒绝受理，不得不当退回文件，并须发给受理证（法第9条第1款·第2款、施行令第6条第3款、《行政程序法》第17条第4款）。瑕疵应在受理后以补正要求处理。法令以外的文件、机关可自行确认的信息、变更或更新时已提交的文件，均不得要求（第10条第1款·第3款·第7款）。</p>

<h2>补正的期限、方式与延长</h2>
<table><thead><tr><th>阶段</th><th>依据</th><th>内容</th></tr></thead><tbody>
<tr><td>要求补正</td><td>法第22条第1款</td><td>规定相当期间，及时要求</td></tr>
<tr><td>方式</td><td>施行令第24条第1款</td><td>书面或口头；申请人要求时须书面</td></tr>
<tr><td>申请延长</td><td>施行令第24条第2款</td><td>说明所需期间，限2次</td></tr>
<tr><td>再次要求</td><td>施行令第24条第3款</td><td>逾期未补正时可规定10日以内期间再次要求</td></tr>
<tr><td>退回</td><td>施行令第25条第1款</td><td>逾期未补正时可说明理由退回</td></tr>
<tr><td>视为撤回</td><td>施行令第25条第2款</td><td>补正要求因地址不明被退件2次时可结案</td></tr>
</tbody></table>
<p>法律只规定"相当期间"，实际期限以补正要求书上的日期为准。难以按期准备的，可说明所需期间申请延长，限2次。再次要求10日以内期间属裁量，逾期也可能直接退回。期间计算准用《民法》第156条、第157条、第159条至第161条（施行令第24条第4款）。</p>
<p>要求不明确时可直接询问经办人，机关须告知其部门、姓名和联系方式（施行令第31条）。明显笔误经同意可依职权更正（施行令第6条第4款·第5款）。处理终结前申请人也可补正、变更或撤回申请（法第22条第2款、《行政程序法》第17条第8款）。</p>

<h2>处理期限的计算</h2>
<p>处理期限由各机关按民愿种类事先确定并公布（法第17条第1款至第3款、《行政程序法》第19条第1款），实际所需时间因管辖机关和材料情况而异。计算规则如下：</p>
<table><thead><tr><th>规定方式</th><th>计算方法</th><th>依据</th></tr></thead><tbody>
<tr><td>5日以下</td><td>自受理时按小时计，1日为8个工作小时，不计周六和公休日</td><td>法第19条第1款</td></tr>
<tr><td>6日以上</td><td>按日计，首日计入，不计周六和公休日</td><td>法第19条第2款</td></tr>
<tr><td>周·月·年</td><td>首日计入，准用《民法》第159条至第161条</td><td>法第19条第3款</td></tr>
<tr><td>即时</td><td>无正当理由时3个工作小时内处理</td><td>施行令第19条</td></tr>
</tbody></table>
<p>关键规则是<strong>补正所需期间不计入处理期限</strong>。施行令第20条准用《行政程序法施行令》第11条，其第1项排除补正所需期间，包括发出之日和补正到达之日。试验、技术审查、听取意见及系统故障期间也不计入（施行令第20条第2项）。</p>
<p>机关可因现场确认等理由在原期限范围内延长一次，再次延长须经申请人同意；业务繁重不是理由（施行令第21条）。受理后超过30日未处理完毕的，原则上每30日通知进展（施行令第23条）。超过期限的可请求迅速处理（《行政程序法》第19条第4款）。</p>

<h2>退回不等于驳回</h2>
<p><strong>退回</strong>是因瑕疵逾期未改正而送回文件；<strong>驳回</strong>是审查后认定不符合要件的处分。退回须说明理由（施行令第25条第1款），通常改正后重新申请；若退回实质上否定申请内容，也可能产生救济问题，应确认通知书中的救济说明（《行政程序法》第26条）。</p>
<p>驳回须书面通知理由和救济程序（法第27条第1款·第3款），并告知复议途径（《行政程序法》第23条第1款、第26条）。请保存原件。</p>

<h2>驳回的救济 — 异议·复议·诉讼</h2>
<table><thead><tr><th>手段</th><th>依据</th><th>期限</th></tr></thead><tbody>
<tr><td>异议申请</td><td>民愿处理法第35条第1款</td><td>收到驳回之日起60日内，书面向原机关提出</td></tr>
<tr><td>异议决定</td><td>民愿处理法第35条第2款</td><td>10日内，可延长10日以内</td></tr>
<tr><td>行政复议</td><td>行政复议法第27条第1款·第3款</td><td>知道处分之日起90日，处分之日起180日</td></tr>
<tr><td>复议决定</td><td>行政复议法第45条第1款</td><td>60日内，可延长30日</td></tr>
<tr><td>撤销诉讼</td><td>行政诉讼法第20条</td><td>知道之日起90日，处分之日起1年（经复议的自决定书送达起算）</td></tr>
</tbody></table>
<div class="highlight-box">《民愿处理法》第35条第1款：对法定民愿驳回处分不服的民愿人，可自收到驳回处分之日起60日内以书面向该行政机关首长提出异议申请。第3款：无论是否提出异议申请，均可提起行政复议或行政诉讼。</div>
<p>异议申请书须写明对象民愿、理由和驳回日期；结果通知须说明理由和救济途径（施行令第40条）。</p>
<p>《行政基本法》第36条第1款规定一般处分异议期限为30日，但依第6款，其他法律另有规定时仅补充适用；法定民愿驳回适用《民愿处理法》第35条的60日。第36条第4款规定收到异议结果后90日内可提起复议，但异议期间复议期限如何计算可能有争议，稳妥做法是以原驳回之日起90日为准。法令未规定复议前置的，可直接起诉（《行政诉讼法》第18条第1款）；未告知复议期限的，适用处分之日起180日（《行政复议法》第27条第6款）。</p>

<h2>减少补正的申请前清单</h2>
<ul>
<li><strong>公布的附件和期限</strong> — 以申请前最新公示版本为准（《行政程序法》第17条第3款、民愿处理法第13条·第17条第3款）。</li>
<li><strong>逐份核对依据</strong> — 法定格式和附表中的文件必须齐全（第10条第1款）。</li>
<li><strong>共享确认文件</strong> — 由机关自行确认，参照其公布目录（第10条第3款·第6款）。</li>
<li><strong>记载一致</strong> — 名称、地址、面积与附件不一致即成补正理由；笔误可更正，缺少要件文件不可（施行令第6条第5款）。</li>
<li><strong>事前审查</strong> — 费用较大或驳回损失较大的民愿可请求事前审查，原期限不满30日的为原期限，30日以上的在30日以内，已交文件不再要求（法第30条、施行令第33条·第34条）。</li>
<li><strong>复合民愿</strong> — 可由主管部门一并处理（法第31条第1款、施行令第35条）。</li>
<li><strong>收到补正要求当天</strong> — 记录期限、核对依据、询问经办人，必要时申请延长（限2次，施行令第24条第2款、第31条）。</li>
</ul>
<p>委托行政士代办的依据是《行政士法》（행정사법）第2条第1款第5项。法令原文：<a href="https://www.law.go.kr/법령/민원처리에관한법률" target="_blank" rel="noopener">民愿处理法</a>、<a href="https://www.law.go.kr/법령/행정절차법" target="_blank" rel="noopener">行政程序法</a>、<a href="https://www.law.go.kr/법령/행정심판법" target="_blank" rel="noopener">行政复议法</a>。费用因个案而异，将在免费咨询时准确说明。</p>

<div class="faq-section"><h2>常见问题</h2>
<div class="faq-item"><p class="faq-q">Q. 补正期限有多长？</p><p class="faq-a">A. 以补正要求书上的日期为准（第22条第1款）。可申请延长2次；逾期后可能被再次要求10日以内补正，也可能直接退回。</p></div>
<div class="faq-item"><p class="faq-q">Q. 补正期间处理期限会继续计算吗？</p><p class="faq-a">A. 不会。依施行令第20条和《行政程序法施行令》第11条第1项，补正期间不计入，包括发出和到达之日。</p></div>
<div class="faq-item"><p class="faq-q">Q. 退回和驳回有什么区别？</p><p class="faq-a">A. 退回是因瑕疵未改正送回文件（施行令第25条第1款）；驳回是审查后的处分，须书面告知理由和救济程序（第27条第3款）。</p></div>
<div class="faq-item"><p class="faq-q">Q. 提出异议后还能申请复议吗？</p><p class="faq-a">A. 可以（第35条第3款）。异议为60日，复议为知道处分之日起90日（行政复议法第27条第1款）。建议以原驳回之日起90日安排。</p></div>
<div class="faq-item"><p class="faq-q">Q. 窗口不予受理怎么办？</p><p class="faq-a">A. 民愿处理法第9条第1款和《行政程序法》第17条第4款禁止拒绝受理。应要求受理并发给受理证，瑕疵通过补正程序处理。</p></div>
</div>

<div class="cta-block">
 <h3>收到补正要求或驳回通知？</h3>
 <p>유선행정사사무소会整理各项要求的依据条款、补正期限以及异议和复议期限。电话 02-363-2251，平日 09:30~17:30 KST。</p>
 <a href="/contact?utm_source=blog&utm_medium=cta&utm_campaign=administrative-license-agency-supplement-and-rejection">申请免费咨询</a>
</div>

<p class="author-block">유선행정사사무소（代表行政士 정유선）· 依据《民愿处理法》（法律第18748号）及其施行令（总统令第36296号，2026年5月6日施行）、《行政程序法》（法律第18748号）及其施行令（总统令第33649号）、《行政复议法》（法律第19269号）、《行政诉讼法》（法律第21615号，2026年5月12日施行）、《行政基本法》（法律第20824号）原文撰写 · 最终审阅日 10月3日</p>`,
  },

  ja: {
    title: '韓国の許認可代行手続における補正要求と返戻 — 補正期間・処理期間の不算入・拒否処分の不服期限',
    category: '許認可',
    metaTitle: '韓国 許認可代行 手続 — 補正要求・返戻と拒否処分の不服期限',
    metaDescription: '韓国の民願処理法第22条・施行令第24条・第25条と行政手続法第17条に基づき、許認可申請に補正要求や返戻が来る理由と手続、拒否処分の異議申請・行政審判の期限、補正を減らすチェックリストを整理しました。',
    excerpt: '韓国の許認可代行手続で最も多い遅延は、受付後の補正要求です。補正期間は誰が決めるのか、補正中に処理期間は止まるのか、返戻と拒否処分は何が違うのか、拒否されたらいつまで争えるのかを法令原文に基づき整理しました。',
    content: `<div class="toc"><p>目次</p><ol><li>補正要求と返戻の法的根拠</li><li>補正の期間・方式・延長</li><li>処理期間の計算</li><li>返戻と拒否処分は異なる</li><li>拒否処分への不服 — 異議申請・行政審判・訴訟</li><li>補正を減らす申請前チェックリスト</li><li>よくあるご質問</li></ol></div>
<p><strong>韓国の許認可代行の手続</strong>で日程が最もずれやすいのは、審査結果ではなく受付後の<strong>補正要求</strong>です。期間内に補正しなければ書類が返戻されることがあります。許可・登録・届出の申請は「民願処理法」（민원 처리에 관한 법률）上の法定民願にあたるため、業種を問わず、補正・返戻・拒否のルールはまずこの法律と「行政手続法」（행정절차법）が定めています。</p>
<p>本稿の内容はすべて2026年時点の現行法令の原文で確認しました。個別の許認可の添付書類と処理期間は、管轄機関が公表する民願便覧でご確認ください。</p>

<h2>補正要求と返戻の法的根拠</h2>
<p><strong>法定民願</strong>とは、法令で定めた要件に従い許可・承認・免許・登録を申請し、または届け出る民願をいいます（第2条第1号가目1)）。</p>
<div class="highlight-box">「行政手続法」第17条第5項：行政庁は、申請に添付書類の不備等の瑕疵がある場合には、補正に必要な相当の期間を定めて遅滞なく申請人に補正を求めなければならない。第6項：申請人がその期間内に補正しなかったときは、理由を具体的に明らかにして申請を返戻することができる。</div>
<p>他の法令に特別な規定がない限り、行政機関は受付を保留・拒否できず、書類を不当に返送してもならず、受付証を交付しなければなりません（法第9条第1項・第2項、施行令第6条第3項、行政手続法第17条第4項）。不備は受付後に補正要求で扱うのが原則です。法令にない書類、機関が自ら確認できる情報、変更・更新時に既に提出した書類は求められません（第10条第1項・第3項・第7項）。</p>

<h2>補正の期間・方式・延長</h2>
<table><thead><tr><th>段階</th><th>根拠</th><th>内容</th></tr></thead><tbody>
<tr><td>補正の要求</td><td>法第22条第1項</td><td>相当の期間を定めて遅滞なく要求</td></tr>
<tr><td>方式</td><td>施行令第24条第1項</td><td>文書または口頭。申請人が求めれば文書</td></tr>
<tr><td>延長の申請</td><td>施行令第24条第2項</td><td>必要な期間を明らかにして申請、2回まで</td></tr>
<tr><td>再度の要求</td><td>施行令第24条第3項</td><td>期限内に補正がなければ10日以内の期間で再要求できる</td></tr>
<tr><td>返戻</td><td>施行令第25条第1項</td><td>期限内に補正がなければ理由を示して返戻できる</td></tr>
<tr><td>取下げとみなす扱い</td><td>施行令第25条第2項</td><td>所在不明で補正要求が2回返送されたら終結処理できる</td></tr>
</tbody></table>
<p>法律は「相当の期間」とだけ定めており、実際の期限は補正要求書の日付です。準備が間に合わなければ必要な期間を示して延長を申請できますが、2回までです。10日以内の再要求は裁量なので、期限を過ぎればそのまま返戻されることもあります。期間の計算には「民法」第156条、第157条、第159条から第161条までが準用されます（施行令第24条第4項）。</p>
<p>要求があいまいなら担当者に直接尋ねましょう。機関は担当者の所属・氏名・連絡先を案内しなければなりません（施行令第31条）。明白な誤記は同意を得て職権で補正できます（施行令第6条第4項・第5項）。処理が終わる前なら、申請人も申請を補正・変更・取下げできます（法第22条第2項、行政手続法第17条第8項）。</p>

<h2>処理期間の計算</h2>
<p>処理期間は各機関が民願の種類ごとにあらかじめ定めて公表します（法第17条第1項〜第3項、行政手続法第19条第1項）。実際の所要期間は管轄機関と書類の状況によって異なります。計算のルールは次のとおりです。</p>
<table><thead><tr><th>定め方</th><th>計算方法</th><th>根拠</th></tr></thead><tbody>
<tr><td>5日以下</td><td>受付時刻から時間単位、1日は8勤務時間、土曜日・公休日は算入しない</td><td>法第19条第1項</td></tr>
<tr><td>6日以上</td><td>日単位、初日算入、土曜日・公休日は算入しない</td><td>法第19条第2項</td></tr>
<tr><td>週・月・年</td><td>初日算入、「民法」第159条〜第161条を準用</td><td>法第19条第3項</td></tr>
<tr><td>即時</td><td>正当な事由がなければ3勤務時間以内に処理</td><td>施行令第19条</td></tr>
</tbody></table>
<p>最も重要なのは、<strong>補正にかかった期間は処理期間に算入されない</strong>という点です。施行令第20条は「行政手続法施行令」第11条を準用し、その第1号は補正に要する期間を、発送日と補正書類の到達日を含めて除外しています。実験・技術検討・意見聴取やシステム障害の期間も算入されません（施行令第20条第2号）。</p>
<p>機関は現場確認などの事由があれば元の期間の範囲で1回延長でき、再延長には申請人の同意が必要です。業務過多は延長事由になりません（施行令第21条）。受付から30日を過ぎても終わらなければ、原則として30日ごとに進行状況を通知しなければなりません（施行令第23条）。期間を過ぎたら迅速な処理を求めることができます（行政手続法第19条第4項）。</p>

<h2>返戻と拒否処分は異なる</h2>
<p><strong>返戻</strong>は不備が期限内に直らず書類を返すこと、<strong>拒否処分</strong>は審査の結果要件を満たさないとする処分です。返戻にも理由の明示が必要で（施行令第25条第1項）、通常は不備を直して再申請します。ただし返戻が実質的に申請内容を退ける判断であれば不服の問題が生じ得るため、通知書の不服申立ての案内を確認してください（行政手続法第26条）。</p>
<p>拒否処分は理由と救済手続を文書で通知しなければならず（法第27条第1項・第3項）、不服申立ての方法も知らせる必要があります（行政手続法第23条第1項、第26条）。原本を保管しておきましょう。</p>

<h2>拒否処分への不服 — 異議申請・行政審判・訴訟</h2>
<table><thead><tr><th>手段</th><th>根拠</th><th>期限</th></tr></thead><tbody>
<tr><td>異議申請</td><td>民願処理法第35条第1項</td><td>拒否処分を受けた日から60日以内、処分機関へ文書で</td></tr>
<tr><td>異議申請の決定</td><td>民願処理法第35条第2項</td><td>10日以内、10日以内の範囲で延長可</td></tr>
<tr><td>行政審判</td><td>行政審判法第27条第1項・第3項</td><td>処分を知った日から90日、処分の日から180日</td></tr>
<tr><td>裁決</td><td>行政審判法第45条第1項</td><td>60日以内、30日延長可</td></tr>
<tr><td>取消訴訟</td><td>行政訴訟法第20条</td><td>知った日から90日、処分の日から1年（審判を経た場合は裁決書の送達日から起算）</td></tr>
</tbody></table>
<div class="highlight-box">民願処理法第35条第1項：法定民願に対する拒否処分に不服がある民願人は、拒否処分を受けた日から60日以内に、その行政機関の長に文書で異議申請をすることができる。第3項：異議申請の有無にかかわらず、行政審判または行政訴訟を提起することができる。</div>
<p>異議申請書には対象の民願、理由、拒否処分を受けた日を記載し、機関は結果とともに理由と不服申立ての方法を示さなければなりません（施行令第40条）。</p>
<p>「行政基本法」第36条第1項は一般的な処分の異議申請期間を30日としますが、第6項により他の法律に定めがあれば補充的にしか適用されず、法定民願の拒否には民願処理法第35条の60日が適用されます。第36条第4項は異議の結果通知から90日以内の審判提起を認めますが、異議申請中の審判期間の計算には争いが生じ得るため、もとの拒否処分の日から90日を基準にするのが安全です。前置規定がなければ審判を経ずに提訴でき（行政訴訟法第18条第1項）、審判期間が告知されなかった場合は処分の日から180日が適用されます（行政審判法第27条第6項）。</p>

<h2>補正を減らす申請前チェックリスト</h2>
<ul>
<li><strong>公表された書類と期間</strong> — 申請直前の掲示版を基準にします（行政手続法第17条第3項、民願処理法第13条・第17条第3項）。</li>
<li><strong>書類ごとの根拠照合</strong> — 法令の様式・別表にある書類は漏れなくそろえます（第10条第1項）。</li>
<li><strong>共同利用対象の書類</strong> — 機関が自ら確認するため、公表リストで重複を避けます（第10条第3項・第6項）。</li>
<li><strong>記載の一致</strong> — 商号・所在地・面積が添付書類と異なれば補正事由です。誤記は補正され得ますが、要件書類の欠落は補正されません（施行令第6条第5項）。</li>
<li><strong>事前審査の請求</strong> — 費用が大きい、または拒否による損失が大きい民願は事前審査を請求できます。期間は元の処理期間が30日未満ならその期間、30日以上なら30日以内で、提出済みの書類は再要求されません（法第30条、施行令第33条・第34条）。</li>
<li><strong>複合民願</strong> — 主務部署が一括処理できます（法第31条第1項、施行令第35条）。</li>
<li><strong>補正要求書を受け取った日</strong> — 期限を記録し、根拠を確認し、担当者に尋ね、必要なら延長を申請します（2回まで。施行令第24条第2項、第31条）。</li>
</ul>
<p>行政士（日本の行政書士事務所に相当する韓国の行政士事務所）への委任の根拠は「行政士法」（행정사법）第2条第1項第5号です。法令原文は<a href="https://www.law.go.kr/법령/민원처리에관한법률" target="_blank" rel="noopener">民願処理法</a>、<a href="https://www.law.go.kr/법령/행정절차법" target="_blank" rel="noopener">行政手続法</a>、<a href="https://www.law.go.kr/법령/행정심판법" target="_blank" rel="noopener">行政審判法</a>で確認できます。費用は事案ごとに異なるため、無料相談時に正確にご案内します。</p>

<div class="faq-section"><h2>よくあるご質問</h2>
<div class="faq-item"><p class="faq-q">Q. 補正の期限はどのくらいですか。</p><p class="faq-a">A. 補正要求書の日付が期限です（第22条第1項）。延長は2回まで申請でき、期限後は10日以内の再要求もあり得ますが、そのまま返戻されることもあります。</p></div>
<div class="faq-item"><p class="faq-q">Q. 補正中も処理期間は進みますか。</p><p class="faq-a">A. 進みません。施行令第20条と「行政手続法施行令」第11条第1号により、発送日と到達日を含めて算入されません。</p></div>
<div class="faq-item"><p class="faq-q">Q. 返戻と拒否処分はどう違いますか。</p><p class="faq-a">A. 返戻は不備が直らず書類を返すこと（施行令第25条第1項）、拒否は審査後の処分で、理由と救済手続の文書通知が必要です（第27条第3項）。</p></div>
<div class="faq-item"><p class="faq-q">Q. 異議申請をしても行政審判はできますか。</p><p class="faq-a">A. できます（第35条第3項）。異議申請は60日、行政審判は処分を知った日から90日です（行政審判法第27条第1項）。もとの処分の日から90日を基準にするのが安全です。</p></div>
<div class="faq-item"><p class="faq-q">Q. 窓口で受付を断られたらどうすればよいですか。</p><p class="faq-a">A. 民願処理法第9条第1項と行政手続法第17条第4項は受付の拒否を禁じています。受付と受付証の交付を求め、不備は補正要求の手続で扱うよう求めましょう。</p></div>
</div>

<div class="cta-block">
 <h3>補正要求書や拒否通知を受け取った方へ</h3>
 <p>要求項目ごとの根拠条文、補正期限、異議申請・行政審判の期限をユソン行政士事務所が整理します。電話 02-363-2251、平日 09:30〜17:30 KST。</p>
 <a href="/contact?utm_source=blog&utm_medium=cta&utm_campaign=administrative-license-agency-supplement-and-rejection">無料相談を申し込む</a>
</div>

<p class="author-block">ユソン行政士事務所（代表行政士 チョン・ユソン）・「民願処理法」（法律第18748号）と同法施行令（大統領令第36296号、2026年5月6日施行）、「行政手続法」（法律第18748号）と同法施行令（大統領令第33649号）、「行政審判法」（法律第19269号）、「行政訴訟法」（法律第21615号、2026年5月12日施行）、「行政基本法」（法律第20824号）の原文に基づき作成・最終確認日 10月3日</p>`,
  },
}
