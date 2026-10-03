// 원고 은행 — inhega-daily
// 주제(풀 18개 중): procurement(조달청나라장터등록) / 세부주제: change-report(변경신고·변경등록)
//
// 법령 대조(law.go.kr DRF API, OC=test, 2026-10-03 확인):
//   국가를 당사자로 하는 계약에 관한 법률          법률 제21418호, 2026. 6. 11. 시행 (MST 283877)
//     제27조 제1항(부정당업자 입찰참가자격 제한 — 2년 이내)
//   국가를 당사자로 하는 계약에 관한 법률 시행령  대통령령 제36338호, 2026. 6. 3. 시행 (MST 285893)
//     제12조 제1항(경쟁입찰 참가자격), 제39조 제4항(입찰 무효), 제76조 제2항 제1호 가목·나목, 제6항
//   국가를 당사자로 하는 계약에 관한 법률 시행규칙 재정경제부령 제1호, 2026. 1. 2. 시행 (MST 282607)
//     제14조 제1항, 제15조 제1항·제5항·제7항 제3호, 제44조 제1항 제1호의2·제4호·제6호의3, 제75조의2
//   국가종합전자조달시스템 입찰참가자격등록규정  조달청고시 제2026-6호, 2026. 1. 23. 시행
//     (행정규칙일련번호 2100000274756, 행정규칙ID 35401) 제4조·제7조·제8조·제9조·제9조의2·제11조·
//     제13조·제14조·제15조·제16조·제18조·제19조·제23조의3·제25조·제25조의2·제28조
//   (계약예규) 정부 입찰ㆍ계약 집행기준          재정경제부 계약예규 제172호, 2026. 8. 25. 시행
//     (행정규칙일련번호 2100000284266) 제4조 제4항(지역제한 — 본점·주된 영업소 기준)
//   조달사업에 관한 법률(MST 283847)은 확인했으나 등록·변경등록 조문이 없어 본문에 쓰지 않았다.
// 핵심 확인 사항: 변경등록 없이 낸 입찰의 무효 사유는 "상호·법인 명칭"과 "대표자 성명" 두 가지뿐이다
// (시행규칙 제44조 제1항 제6호의3, 다목·라목 삭제). 그리고 이 무효 입찰은 시행규칙 제75조의2 에 따라
// 시행령 제76조 제2항 제1호 나목("고의로 무효의 입찰을 한 자") 제재 대상에서 명시적으로 빠진다 —
// "변경등록 안 하면 부정당업자" 식 서술은 근거가 없어 쓰지 않았다.
// 처리기간은 고시 제18조(8근무시간·보완 시 지체 통보)만 썼고, 그 밖의 소요기간은 단정하지 않았다(M5).
// 우리 서비스 가격·수수료 금액은 한 건도 쓰지 않았다(지침서 X41). 본문에 금액 표기 0건.
// 대조표: scripts/inhega-daily/crosscheck/procurement-narajangteo-registration-change.md

export default {
  topic: 'procurement',
  angle: 'change-report',
  slug: 'procurement-narajangteo-registration-change',
  kind: 'cluster',
  coverImage: '/images/service-procurement.webp',
  relatedServices: [
    { title: '조달청 나라장터 등록', href: '/services/procurement' },
    { title: '기업 인증(벤처/이노비즈)', href: '/services/venture-cert' },
    { title: '여성기업인증', href: '/services/women-enterprise' },
  ],

  ko: {
    title: '조달청 입찰참가자격 변경등록 — 대표자·상호·소재지가 바뀌면 나라장터에서 할 일',
    category: '조달청',
    metaTitle: '조달청 입찰참가자격 변경등록 — 나라장터 등록 기준과 입찰 무효',
    metaDescription: '나라장터에 입찰참가자격을 등록한 뒤 대표자·상호·주소·업종·공장이 바뀌면 무엇을 언제 변경등록해야 하는지, 변경등록 없이 낸 입찰이 무효가 되는 경우와 말소 기준을 조달청 고시와 시행규칙 원문으로 정리했습니다.',
    excerpt: '조달청 입찰참가자격 등록은 한 번으로 끝나지 않습니다. 대표자·상호·주소·업종·공장·입찰대리인이 바뀌면 즉시 변경등록을 해야 하고, 상호와 대표자 성명은 변경등록 없이 입찰하면 그 입찰이 무효입니다. 법인 전환·합병처럼 신규등록이 필요한 경우까지 원문 기준으로 정리했습니다.',
    content: `<div class="toc"><p>목차</p><ol><li>등록 후에도 변경등록 의무가 따라붙는 이유</li><li>무엇이 바뀌면 변경등록인가 — 항목별 정리</li><li>입찰 무효가 되는 두 항목, 상호와 대표자 성명</li><li>변경등록이 아니라 다시 등록해야 하는 경우</li><li>소재지·업종·공장·대리인 변경의 실무 포인트</li><li>변경등록 절차와 놓쳤을 때의 말소</li><li>자주 묻는 질문</li></ol></div>
<p><strong>입찰참가자격 변경등록</strong>은 국가종합전자조달시스템(나라장터)에 경쟁입찰참가자격을 등록한 업체가 대표자·상호·주소처럼 등록된 정보가 바뀌었을 때 그 내용을 시스템에 다시 반영하는 절차입니다. 조달청 입찰참가자격 등록은 한 번 해 두면 끝나는 절차가 아니라, 등록된 사항이 실제와 계속 일치해야 입찰에서 그대로 쓸 수 있는 구조입니다. 특히 상호와 대표자 성명은 변경등록 없이 입찰서를 내면 그 입찰 자체가 무효가 됩니다.<!-- 근거: 국가종합전자조달시스템 입찰참가자격등록규정(조달청고시 제2026-6호) 제16조 제1항·제2항, 국가계약법 시행규칙 제44조 제1항 제6호의3 --></p>
<p>이 글은 이미 등록을 마친 업체가 "무엇이 바뀌면, 언제, 어떻게" 고쳐야 하는지만 다룹니다. 처음 등록하는 방법과 서류는 별도 글에서 다루었고, 여기서는 2026년 기준 현행 「국가를 당사자로 하는 계약에 관한 법률 시행령」·「시행규칙」과 조달청 「국가종합전자조달시스템 입찰참가자격등록규정」 원문을 대조해 등록 이후의 변경 의무와 그 효과만 정리했습니다.<!-- 근거: 국가계약법 시행령(대통령령 제36338호, 2026. 6. 3. 시행), 같은 법 시행규칙(재정경제부령 제1호, 2026. 1. 2. 시행), 조달청고시 제2026-6호(2026. 1. 23. 시행) --></p>

<h2>등록 후에도 변경등록 의무가 따라붙는 이유</h2>
<p>국가가 발주하는 경쟁입찰에는 시행령 제12조 제1항이 정한 요건을 갖춘 자만 참가할 수 있습니다. 다른 법령에 따른 허가·인가·면허·등록·신고가 필요하면 그것을 갖추어야 하고, 보안측정 등의 조사가 필요하면 적합판정을 받아야 하며, 재정경제부령이 정한 요건인 사업자등록증 또는 고유번호(시행규칙 제14조 제1항)를 갖추어야 합니다.<!-- 근거: 국가계약법 시행령 제12조 제1항 제2호~제4호, 같은 법 시행규칙 제14조 제1항 --> 입찰참가자격 등록은 이 요건을 입찰 때마다 증명하지 않도록 미리 확인받아 두는 장치입니다.</p>
<p>시행규칙 제15조 제1항은 계약담당공무원이 경쟁입찰참가자격을 미리 등록하게 할 수 있다고 정하면서, 바로 뒤에 "등록된 사항이 변경된 때에도 또한 같다"고 적어 두었습니다. 전자조달시스템에 게재된 등록사항은 다른 중앙관서의 장이나 계약담당공무원에게도 등록한 것으로 보기 때문에, 나라장터의 정보 하나가 모든 발주기관에서 쓰입니다.<!-- 근거: 국가계약법 시행규칙 제15조 제1항·제5항 --> 같은 조 제7항 제3호는 등록사항에 변동이 있으면 입찰참가 전에 미리 변경등록해야 한다는 뜻을 시스템에 게재하도록 하고 있습니다.<!-- 근거: 국가계약법 시행규칙 제15조 제7항 제3호 --></p>
<p>조달청 고시는 등록을 시기와 사유에 따라 다섯 가지로 나눕니다. 처음 하는 신규등록, 1년마다 자기 정보를 스스로 확인·정비하는 자기정보확인등록, 일제정비나 유효기간 경과에 따른 갱신등록, 등록내용을 바꾸거나 추가·삭제하는 변경등록, 등록취소 사유에 따른 말소등록입니다.<!-- 근거: 국가종합전자조달시스템 입찰참가자격등록규정 제4조 제2항 --> 이 글의 주제는 이 가운데 변경등록과, 변경등록으로는 해결되지 않아 말소 후 신규등록으로 넘어가는 경우입니다.</p>
<p>책임의 소재도 고시가 분명히 해 두었습니다. 입찰에 참가하려는 자는 입찰서 제출 전까지 자기정보를 확인해야 하고, 이를 따르지 않아 생기는 불이익의 책임은 등록자에게 있습니다.<!-- 근거: 국가종합전자조달시스템 입찰참가자격등록규정 제9조의2 제1항 --> 반대로 계약담당공무원은 입찰참가자가 변경등록을 하지 않았을 경우에 대비해 낙찰자 선정 과정에서 낙찰대상자의 자격을 별도로 확인해야 합니다.<!-- 근거: 국가종합전자조달시스템 입찰참가자격등록규정 제8조 제1항 --> 낙찰 직전에 불일치가 드러나는 구조라는 뜻입니다.</p>

<h2>무엇이 바뀌면 변경등록인가 — 항목별 정리</h2>
<p>고시 제16조 제1항은 시스템에 등록된 대표자, 상호, 주소, 공장, 입찰대리인, 지사, 업종, 제조물품의 정보가 바뀌면 즉시 필요한 증빙서류를 첨부해 변경등록신청을 하도록 정합니다. 그 밖의 등록정보 변경은 등록자가 시스템에 직접 입력하면 완료됩니다.<!-- 근거: 국가종합전자조달시스템 입찰참가자격등록규정 제16조 제1항 본문·제1호 --> 기한이 "며칠 이내"가 아니라 "즉시"라는 점이 다른 인허가의 변경신고와 다릅니다. 항목별로 정리하면 다음과 같습니다.</p>
<table><thead><tr><th>바뀐 사항</th><th>나라장터에서 할 일</th><th>근거</th><th>변경등록 없이 입찰하면</th></tr></thead><tbody>
<tr><td>대표자 성명(여러 명이면 전원)</td><td>증빙서류 첨부 변경등록신청</td><td>고시 제16조 제1항·제2항<!-- 근거: 국가종합전자조달시스템 입찰참가자격등록규정 제16조 --></td><td>입찰 무효(시행규칙 제44조 제1항 제6호의3 나목)<!-- 근거: 국가계약법 시행규칙 제44조 제1항 제6호의3 --></td></tr>
<tr><td>상호 또는 법인의 명칭</td><td>증빙서류 첨부 변경등록신청(법인은 등기상 상호)</td><td>고시 제16조 제1항·제2항, 제13조 제8항<!-- 근거: 국가종합전자조달시스템 입찰참가자격등록규정 제13조 제8항·제16조 --></td><td>입찰 무효(시행규칙 제44조 제1항 제6호의3 가목)<!-- 근거: 국가계약법 시행규칙 제44조 제1항 제6호의3 --></td></tr>
<tr><td>본사 주소</td><td>증빙서류 첨부 변경등록신청</td><td>고시 제16조 제1항<!-- 근거: 국가종합전자조달시스템 입찰참가자격등록규정 제16조 제1항 --></td><td>무효 열거 항목은 아님, 말소 사유(고시 제19조 제1항 제2호)<!-- 근거: 국가종합전자조달시스템 입찰참가자격등록규정 제19조 제1항 제2호 --></td></tr>
<tr><td>업종·제조물품</td><td>증빙서류 첨부 변경등록신청</td><td>고시 제16조 제1항, 제11조 제1항<!-- 근거: 국가종합전자조달시스템 입찰참가자격등록규정 제11조 제1항·제16조 제1항 --></td><td>등재되지 않은 업종·품명은 참가 범위 밖</td></tr>
<tr><td>공장 추가·이전</td><td>직접생산 입증서류 제출(갱신등록으로 봄)</td><td>고시 제23조의3 제2항<!-- 근거: 국가종합전자조달시스템 입찰참가자격등록규정 제23조의3 제2항 --></td><td>말소 사유(고시 제19조 제1항 제2호)<!-- 근거: 국가종합전자조달시스템 입찰참가자격등록규정 제19조 제1항 제2호 --></td></tr>
<tr><td>입찰대리인·지사</td><td>증빙서류 첨부 변경등록신청</td><td>고시 제16조 제1항, 제13조 제5항·제9항<!-- 근거: 국가종합전자조달시스템 입찰참가자격등록규정 제13조 제5항·제9항 --></td><td>대리인 자격 요건 미충족 시 등록 불가</td></tr>
<tr><td>개인 ↔ 법인 전환</td><td>말소 후 신규등록</td><td>고시 제16조 제3항<!-- 근거: 국가종합전자조달시스템 입찰참가자격등록규정 제16조 제3항 --></td><td>기존 등록으로 계속 쓸 수 없음</td></tr>
<tr><td>합병</td><td>합병된 자는 말소, 합병한 자는 변경등록</td><td>고시 제16조 제4항<!-- 근거: 국가종합전자조달시스템 입찰참가자격등록규정 제16조 제4항 --></td><td>합병된 법인은 말소 사유(고시 제19조 제1항 제7호)<!-- 근거: 국가종합전자조달시스템 입찰참가자격등록규정 제19조 제1항 제7호 --></td></tr>
<tr><td>회생절차 개시결정</td><td>관리인 추가등록, 대표대표자로 변경등록</td><td>고시 제16조 제7항<!-- 근거: 국가종합전자조달시스템 입찰참가자격등록규정 제16조 제7항 --></td><td>-</td></tr>
<tr><td>행정처분 정보</td><td>처분기관이 직접 입력(변경등록된 것으로 봄)</td><td>고시 제16조 제6항<!-- 근거: 국가종합전자조달시스템 입찰참가자격등록규정 제16조 제6항 --></td><td>-</td></tr>
</tbody></table>
<p>표의 마지막 열에서 보듯, 변경등록을 하지 않았을 때의 효과는 항목마다 다릅니다. 입찰 자체가 무효가 되는 것은 상호와 대표자 성명 두 가지이고, 주소·공장 같은 나머지 항목은 입찰 무효로 열거되어 있지 않은 대신 등록 말소의 사유가 됩니다.<!-- 근거: 국가계약법 시행규칙 제44조 제1항 제6호의3, 국가종합전자조달시스템 입찰참가자격등록규정 제19조 제1항 제2호 --> 다만 어느 항목이든 그 변경 때문에 공고가 요구한 자격을 잃었다면 "입찰참가자격이 없는 자가 한 입찰"로서 무효가 될 수 있습니다.<!-- 근거: 국가계약법 시행령 제39조 제4항, 같은 법 시행규칙 제44조 제1항 제1호 --></p>

<h2>입찰 무효가 되는 두 항목, 상호와 대표자 성명</h2>
<p>입찰 무효의 뿌리는 시행령 제39조 제4항입니다. 이 조항은 제12조 등에 따른 경쟁참가 자격이 없는 자가 한 입찰과 그 밖에 재정경제부령이 정하는 사유에 해당하는 입찰을 무효로 하고, 시행규칙 제44조 제1항이 그 사유를 열거합니다.<!-- 근거: 국가계약법 시행령 제39조 제4항, 같은 법 시행규칙 제44조 제1항 --></p>
<div class="highlight-box">「국가를 당사자로 하는 계약에 관한 법률 시행규칙」 제44조 제1항 제6호의3: 제15조제1항에 따라 등록된 사항중 다음 각 목의 어느 하나에 해당하는 등록사항을 변경등록하지 아니하고 입찰서를 제출한 입찰 — 가. 상호 또는 법인의 명칭 나. 대표자(수인의 대표자가 있는 경우에는 대표자 전원)의 성명<!-- 근거: 국가계약법 시행규칙 제44조 제1항 제6호의3 --></div>
<p>조달청 고시 제16조 제2항도 같은 내용을 되풀이합니다. 상호 또는 법인의 명칭, 그리고 대표자의 성명(대표자가 여러 명이면 모두)이 바뀌었는데 변경등록을 하지 않고 입찰에 참가하면 해당 입찰은 시행규칙 제44조 제6호의3에 따라 무효가 됩니다.<!-- 근거: 국가종합전자조달시스템 입찰참가자격등록규정 제16조 제2항 --> 시행규칙의 같은 호에는 원래 다목과 라목이 더 있었으나 지금은 삭제되어, 무효로 직결되는 항목은 이 두 가지만 남아 있습니다.<!-- 근거: 국가계약법 시행규칙 제44조 제1항 제6호의3 다목·라목(삭제) --></p>
<p>공동대표나 각자대표 체제라면 특히 주의해야 합니다. 등록할 때 대표자가 여러 명이면 각자대표인지 공동대표인지를 구분해 등록하고, 입찰·계약에서 대표권을 행사할 "대표대표자" 1인을 반드시 선정해야 합니다.<!-- 근거: 국가종합전자조달시스템 입찰참가자격등록규정 제2조 제1항 제8호, 제13조 제4항 --> 대표자 한 명이 추가되거나 물러난 경우에도 "대표자 전원의 성명"이 바뀐 것이므로 변경등록 대상입니다. 대표대표자가 아닌 대표자의 변동이라고 해서 예외가 되지 않습니다.</p>
<p>그렇다면 이 무효 입찰이 부정당업자 제재로 이어질까요. 시행령 제76조 제2항 제1호 나목은 "고의로 무효의 입찰을 한 자"를 입찰참가자격 제한 대상으로 정하지만, 단서에서 재정경제부령으로 정하는 무효 사유는 제외하고, 시행규칙 제75조의2는 그 제외 대상을 제44조 제1항 제6호와 제6호의3에 따른 입찰로 정하고 있습니다.<!-- 근거: 국가계약법 시행령 제76조 제2항 제1호 나목, 같은 법 시행규칙 제75조의2 --> 즉 상호·대표자 변경등록 누락으로 무효가 된 입찰은 그 "고의 무효입찰" 사유의 적용 대상에서 명시적으로 빠져 있습니다.</p>
<p>이것을 "아무 제재도 없다"로 읽어서는 안 됩니다. 입찰 또는 계약에 관한 서류를 위조·변조하거나 부정하게 행사한 자, 허위서류를 제출한 자는 별도의 제한 사유이고, 이 경우 법률은 2년 이내의 범위에서 입찰 참가자격을 제한하도록 정합니다(법 제27조 제1항).<!-- 근거: 국가계약법 제27조 제1항 제9호 가목, 같은 법 시행령 제76조 제2항 제1호 가목 --> 또 등록신청 내용이 사실과 다른 것으로 판명되면 등록 말소 사유가 됩니다.<!-- 근거: 국가종합전자조달시스템 입찰참가자격등록규정 제19조 제1항 제3호 --> 변경 사실을 늦게 반영하는 것과 사실과 다른 서류를 내는 것은 법적으로 전혀 다른 문제입니다.</p>
<p>대표자를 바꿀 때 함께 확인할 것이 두 가지 더 있습니다. 첫째, 법인이 입찰참가자격 제한을 받으면 그 법인의 대표자(대표자가 여러 명이면 해당 입찰·계약 업무를 맡은 대표자)에게도 제한이 적용되고, 제한기간 내에 있는 대표자를 통한 입찰은 무효입니다.<!-- 근거: 국가계약법 시행령 제76조 제6항 제1호, 같은 법 시행규칙 제44조 제1항 제1호의2 --> 새 대표자를 선임하기 전에 제한 이력을 확인해야 하는 이유입니다. 둘째, 1인이 여러 법인의 대표자이면 그 법인들은 동일인으로 보므로, 같은 입찰에 그 법인들이 각각 입찰서를 내면 2통 이상을 제출한 입찰로서 무효가 됩니다.<!-- 근거: 국가계약법 시행규칙 제44조 제1항 제4호 --></p>

<h2>변경등록이 아니라 다시 등록해야 하는 경우</h2>
<p>나라장터의 등록은 별도의 등록번호 없이 본사의 사업자등록번호로 관리되고, 법인은 법인등록번호와 사업자등록번호로 관리됩니다.<!-- 근거: 국가종합전자조달시스템 입찰참가자격등록규정 제7조 --> 그래서 이 번호 자체가 바뀌는 변화는 변경등록으로 처리되지 않습니다.</p>
<ul>
<li><strong>개인사업자의 법인 전환, 법인의 개인 전환</strong> — 등록을 말소하고 신규등록을 해야 합니다. 신규등록이므로 허가·면허 등 다른 법령상 요건과 사업자등록 요건을 새 사업자 기준으로 다시 갖추어야 합니다.<!-- 근거: 국가종합전자조달시스템 입찰참가자격등록규정 제16조 제3항, 제5조 제1항 --></li>
<li><strong>합병</strong> — 다른 법인에 합병된 쪽은 말소등록을, 다른 법인을 합병한 쪽은 변경등록을 합니다. 합병된 법인의 등록은 전부 말소될 수 있습니다.<!-- 근거: 국가종합전자조달시스템 입찰참가자격등록규정 제16조 제4항, 제19조 제1항 제7호·제2항 --></li>
<li><strong>회생절차 개시결정</strong> — 「채무자회생 및 파산에 관한 법률」에 따라 회생절차개시결정이 있으면 관리인을 대표자 정보에 추가등록하고 대표대표자로 변경등록해야 합니다.<!-- 근거: 국가종합전자조달시스템 입찰참가자격등록규정 제16조 제7항, 제2조 제1항 제13호 --></li>
<li><strong>폐업·사업자등록 취소</strong> — 사업자등록이 취소·철회되거나 폐업하면 등록 전부가 말소될 수 있습니다. 말소된 자가 다시 등록할 때에는 변경등록 규정을 준용합니다.<!-- 근거: 국가종합전자조달시스템 입찰참가자격등록규정 제19조 제1항 제6호·제2항, 제16조 제5항 --></li>
</ul>
<p>법인 전환은 실무에서 가장 자주 일정이 꼬이는 경우입니다. 법인 설립등기와 사업자등록, 업종 면허의 명의 이전이 모두 끝나야 신규등록 서류가 갖추어지는데, 그 사이에 기존 개인사업자 명의로 입찰하면 등록 정보와 실제가 어긋납니다. 면허 명의 이전에 걸리는 기간은 관할 기관과 서류 상황에 따라 달라지므로, 전환 일정을 잡을 때 진행 중이거나 예정된 입찰 공고를 함께 놓고 판단하는 것이 안전합니다.</p>

<h2>소재지·업종·공장·대리인 변경의 실무 포인트</h2>
<p><strong>본사 소재지.</strong> 등록은 본사의 사업자등록번호, 대표자의 성명, 주소로 신청하므로 주소가 바뀌면 변경등록 대상입니다.<!-- 근거: 국가종합전자조달시스템 입찰참가자격등록규정 제13조 제3항, 제16조 제1항 --> 소재지가 특히 중요한 것은 지역제한 경쟁입찰 때문입니다. 계약예규인 「정부 입찰ㆍ계약 집행기준」 제4조 제4항은 공사는 현장이 있는 시·도에, 물품제조는 납품지가 있는 시·도에 주된 영업소가, 물품구매와 용역은 납품지가 있는 시·도에 본점이 있는 자로 참가자격을 정하고, 지점이나 지사로는 참가할 수 없게 합니다.<!-- 근거: (계약예규) 정부 입찰ㆍ계약 집행기준 제4조 제4항 제1호~제3호 --> 본점을 다른 시·도로 옮기면 참가할 수 있는 지역제한 입찰의 범위가 바뀝니다. 개인사업자가 같은 업종의 사업장을 여러 곳 등록했다면 세부품명번호나 업종코드를 입력한 사업장이 주된 영업소로 봅니다.<!-- 근거: 국가종합전자조달시스템 입찰참가자격등록규정 제13조 제10항·제11항 --></p>
<p><strong>업종·면허.</strong> 등록자가 참가할 수 있는 입찰은 물품이면 등록증에 등재된 세부품명 또는 품명·품류, 용역이면 등재된 업종, 공사이면 등재된 업종 또는 주력분야의 입찰입니다.<!-- 근거: 국가종합전자조달시스템 입찰참가자격등록규정 제11조 제1항 --> 공사·용역 업종은 4자리 업종코드로, 공사 주력분야는 3자리 코드로 등재합니다.<!-- 근거: 국가종합전자조달시스템 입찰참가자격등록규정 제25조의2 제1항·제2항 --> 새 면허를 받았다면 그 업종을 추가하는 변경등록을 해야 해당 업종 입찰에 참가할 수 있고, 고시 제11조 제3항은 입찰 전에 자기정보가 공고의 자격요건과 일치하는지 확인해 필요하면 변경등록하라고 정합니다.<!-- 근거: 국가종합전자조달시스템 입찰참가자격등록규정 제11조 제3항 --> 면허 등에 유효기간이 있으면 그 기간이 등록의 유효기간이 되는데, 관련 법령에 따라 면허를 갱신해 두었다면 등록 갱신을 못 했더라도 입찰서 제출마감일 이후 보완할 수 있습니다.<!-- 근거: 국가종합전자조달시스템 입찰참가자격등록규정 제9조 제1항 제2호·제3항 --> 공사업체의 시공능력평가액은 운영자가 협회 자료로 등록할 수 있지만, 사실대로 등록되었는지 확인할 책임은 등록자에게 있습니다(고시 제28조 제1항).<!-- 근거: 국가종합전자조달시스템 입찰참가자격등록규정 제28조 제1항 --></p>
<p><strong>제조공장.</strong> 이미 등록된 제조물품을 생산하는 공장을 추가하거나 이전하려면 해당 물품의 직접생산을 입증할 서류를 제출해야 하며, 이 경우 갱신등록을 한 것으로 봅니다. 등록된 제조물품의 공장 정보가 모두 삭제되면 그 물품의 등록이 말소될 수 있습니다.<!-- 근거: 국가종합전자조달시스템 입찰참가자격등록규정 제23조의3 제2항·제5항 --> 공장 정보로는 한국전력공사 고객번호, 한국산업단지공단 공장관리번호, 4대 보험 사업장관리번호를 등록합니다.<!-- 근거: 국가종합전자조달시스템 입찰참가자격등록규정 제23조의3 제6항 --> 직접생산 확인 자체의 기준은 이 글의 범위를 벗어나므로 관련 글을 참고하시기 바랍니다.</p>
<p><strong>입찰대리인.</strong> 입찰대리인은 그 업체에 재직 중인 임직원만 등록할 수 있고, 재직증명서와 함께 최근 3개월 이내의 4대 보험 가입 증명자료 등을 내거나 열람에 동의해야 합니다. 입찰참가자격 제한을 받고 있는 사람은 대리인이 될 수 없고, 한 사람이 2개 이상의 회사에 대리인으로 중복 등록할 수도 없습니다.<!-- 근거: 국가종합전자조달시스템 입찰참가자격등록규정 제13조 제5항 --> 담당자가 퇴사하거나 다른 회사로 옮기면 곧바로 대리인 정보를 정리해야 하는 이유입니다. 신용정보기관 등으로부터 휴업·폐업 통보가 들어오면 운영자가 그 업체 소속 대리인의 등록을 취소할 수 있습니다.<!-- 근거: 국가종합전자조달시스템 입찰참가자격등록규정 제15조 제3항 --></p>
<p><strong>지사.</strong> 법인이 지사를 등록하려면 법인등기사항증명서의 지점에 관한 사항이나 정관에 그 지사의 상호·소재지가 올라 있어야 하고, 본사 대표 명의의 지사등록이행각서를 내야 합니다. 지사가 제한 사유에 해당하면 법인 전체가 제한을 받으며, 같은 입찰에는 본사와 지사 중 1개사만 참가할 수 있습니다.<!-- 근거: 국가종합전자조달시스템 입찰참가자격등록규정 제13조 제6항·제9항 --></p>

<h2>변경등록 절차와 놓쳤을 때의 말소</h2>
<p>변경등록에는 신규등록 절차 규정이 준용됩니다. 지정된 인증서로 시스템에서 신청하고, 증빙서류를 시스템에 첨부해 소재지 관할 지방조달청이나 조달청 본청으로 제출하며, 부득이한 경우에는 우편이나 방문으로 낼 수 있습니다.<!-- 근거: 국가종합전자조달시스템 입찰참가자격등록규정 제16조 제1항, 제13조 제1항 --> 서류는 물품이면 고시 제22조, 공사·용역이면 제25조가 "변경 및 갱신등록 포함"이라고 명시해 정하고 있어, 사업자등록증(또는 사업자등록증명원), 법인등기사항증명서, 업종 등록수첩이나 허가·면허증 등이 기본이 되고, 우편이나 방문으로 낼 때에는 인감증명서 또는 본인서명사실확인서를 더합니다.<!-- 근거: 국가종합전자조달시스템 입찰참가자격등록규정 제22조 제1항, 제25조 --> 행정정보 공동이용으로 확인할 수 있는 서류는 신청자가 동의하면 담당공무원이 직접 확인합니다(고시 제14조 제2항).<!-- 근거: 국가종합전자조달시스템 입찰참가자격등록규정 제14조 제2항 --></p>
<ol>
<li>변경 원인 서류 확보 — 법인등기 변경, 사업자등록 정정, 면허 변경 등 원천 서류의 변경을 먼저 마칩니다.</li>
<li>나라장터 변경등록신청 — 인증서로 접속해 변경 항목을 입력하고 증빙을 첨부합니다.<!-- 근거: 국가종합전자조달시스템 입찰참가자격등록규정 제13조 제1항 --></li>
<li>등록확인 — 효력은 등록담당공무원의 등록확인으로 발생하며, 자동 연계 정보와 행정처분기관이 입력한 정보는 별도 확인 없이 효력이 생깁니다.<!-- 근거: 국가종합전자조달시스템 입찰참가자격등록규정 제15조 제1항 --></li>
<li>반영 결과 확인 — 시스템에서 등록내용을 확인하고, 등록증을 다시 출력해 둡니다.<!-- 근거: 국가종합전자조달시스템 입찰참가자격등록규정 제10조 제1항, 제15조 제2항 --></li>
</ol>
<p>처리 시간에 관해서는 고시 제18조가 기준을 두고 있습니다. 등록담당공무원은 서류가 접수되면 8근무시간 이내에 처리하되, 보완이나 확인이 필요하거나 전산장애 등으로 지체가 불가피하면 그 사유와 등록 예정 일자를 신청인에게 알려야 하고, 근무시간 이후 신청은 다음 근무일에 접수된 것으로 봅니다.<!-- 근거: 국가종합전자조달시스템 입찰참가자격등록규정 제18조 제1항·제2항 --> 보완 요청 후 20일이 지나도 회신이 없으면 등록 의사가 없는 것으로 보고 반려합니다.<!-- 근거: 국가종합전자조달시스템 입찰참가자격등록규정 제14조 제4항 --> 신청을 했다고 바로 효력이 생기는 것이 아니므로, 입찰서 제출 마감 직전에 변경등록을 시작하는 것은 피하는 것이 좋습니다. 실제 소요 시간은 관할 기관과 서류 상황에 따라 달라집니다.</p>
<p>변경등록을 계속 하지 않으면 입찰 무효와 별개로 등록 자체가 정리될 수 있습니다. 갱신등록·변경등록을 하지 않은 경우는 등록 말소 사유이고, 이때는 전부가 아니라 해당 일부 등록을 말소할 수 있습니다.<!-- 근거: 국가종합전자조달시스템 입찰참가자격등록규정 제19조 제1항 제2호·제2항 --> 말소 전에는 말소 의사를 미리 통지해 의견제출 기회를 주어야 하며, 통지 후 15일 이내에 별도의 의사표시가 없으면 말소할 수 있습니다.<!-- 근거: 국가종합전자조달시스템 입찰참가자격등록규정 제19조 제3항 --> 통지는 문서로 하되 확인이 어려운 경우를 위해 시스템에 공지할 수 있으므로, 등록된 주소와 연락처가 정확해야 통지를 놓치지 않습니다.<!-- 근거: 국가종합전자조달시스템 입찰참가자격등록규정 제19조 제4항 --></p>
<p>변경 사항이 없어도 1년마다 자기정보확인등록을 해야 하고, 운영자는 등록사항의 이상 여부를 수시로 점검하고, 필요하면 모든 등록자에게 갱신등록을 하게 할 수 있습니다.<!-- 근거: 국가종합전자조달시스템 입찰참가자격등록규정 제4조 제2항, 제9조 제5항, 제28조 제3항 --> 회사 안에서 등기·사업자등록·면허 변경이 생길 때마다 나라장터 정보를 함께 점검하는 내부 절차를 두면 이 글에서 본 무효와 말소 위험 대부분을 미리 막을 수 있습니다. 처음 등록하는 절차는 <a href="/blog/procurement-narajangteo-registration-guide">조달청 나라장터 공급업체 등록 가이드</a>에서, 참가자격 요건 전반은 <a href="/blog/g2b-bidding-qualifications">조달청 입찰참가자격 등록과 참가 자격 충족 조건</a>에서, 직접생산확인 갱신은 <a href="/blog/g2b-direct-production-renewal">직접생산확인 갱신 안내</a>에서 확인하실 수 있습니다. 변경등록 준비는 <a href="/services/procurement">조달청 나라장터 등록</a> 안내를 참고하세요. 원문은 <a href="https://www.law.go.kr/행정규칙/국가종합전자조달시스템입찰참가자격등록규정" target="_blank" rel="noopener">국가종합전자조달시스템 입찰참가자격등록규정</a>, <a href="https://www.law.go.kr/법령/국가를당사자로하는계약에관한법률시행규칙" target="_blank" rel="noopener">국가계약법 시행규칙</a>에서, 시스템은 <a href="https://www.g2b.go.kr" target="_blank" rel="noopener">나라장터</a>에서 볼 수 있습니다. 대행 비용은 사례별로 상이하므로 무료 상담 시 정확히 안내드립니다.</p>

<div class="faq-section"><h2>자주 묻는 질문 (FAQ)</h2>
<div class="faq-item"><p class="faq-q">Q. 대표자가 바뀌었는데 변경등록 전에 입찰서를 내면 어떻게 되나요?</p><p class="faq-a">A. 그 입찰은 무효입니다. 「국가계약법 시행규칙」 제44조 제1항 제6호의3 나목은 대표자(여러 명이면 전원)의 성명을 변경등록하지 않고 낸 입찰을 무효로 정하고, 조달청 고시 제16조 제2항도 같은 내용을 둡니다. 대표자가 한 명 추가되거나 물러난 경우도 포함됩니다.<!-- 근거: 국가계약법 시행규칙 제44조 제1항 제6호의3, 입찰참가자격등록규정 제16조 제2항 --></p></div>
<div class="faq-item"><p class="faq-q">Q. 변경등록 누락으로 무효가 되면 부정당업자 제재도 받나요?</p><p class="faq-a">A. 그 무효 자체로는 아닙니다. 시행령 제76조 제2항 제1호 나목의 "고의로 무효의 입찰을 한 자"에서 시행규칙 제75조의2가 제44조 제1항 제6호의3 입찰을 제외하고 있습니다. 다만 허위서류 제출은 시행령 제76조 제2항 제1호 가목의 별도 제한 사유입니다.<!-- 근거: 국가계약법 시행령 제76조 제2항 제1호, 같은 법 시행규칙 제75조의2 --></p></div>
<div class="faq-item"><p class="faq-q">Q. 개인사업자에서 법인으로 바꾸면 변경등록만 하면 되나요?</p><p class="faq-a">A. 아닙니다. 조달청 고시 제16조 제3항은 개인에서 법인으로, 또는 법인에서 개인으로 전환한 경우 기존 등록을 말소하고 신규등록을 하도록 정합니다. 등록이 사업자등록번호 단위로 관리되기 때문입니다(고시 제7조).<!-- 근거: 입찰참가자격등록규정 제7조, 제16조 제3항 --></p></div>
<div class="faq-item"><p class="faq-q">Q. 본사 주소만 옮겼을 때도 입찰이 무효가 되나요?</p><p class="faq-a">A. 주소는 시행규칙 제44조 제1항 제6호의3의 무효 열거 항목이 아닙니다. 그러나 고시 제16조 제1항에 따라 즉시 변경등록해야 하고, 하지 않으면 제19조 제1항 제2호의 말소 사유가 됩니다. 지역제한 입찰은 본점 소재지로 참가자격을 보므로 옮긴 지역 기준으로 다시 확인해야 합니다.<!-- 근거: 입찰참가자격등록규정 제16조 제1항·제19조 제1항 제2호, 정부 입찰ㆍ계약 집행기준 제4조 제4항 --></p></div>
<div class="faq-item"><p class="faq-q">Q. 변경등록을 신청하면 바로 반영되나요?</p><p class="faq-a">A. 효력은 등록담당공무원의 등록확인으로 생깁니다(고시 제15조 제1항). 고시 제18조는 8근무시간 이내 처리를 기준으로 하되 보완·확인이 필요하면 지체될 수 있다고 정하므로, 입찰 마감 직전 신청은 피하는 것이 좋습니다.<!-- 근거: 입찰참가자격등록규정 제15조 제1항, 제18조 제1항 --></p></div>
</div>

<div class="cta-block">
 <h3>대표자·상호·소재지 변경을 앞두고 있다면</h3>
 <p>등기·사업자등록·면허 변경 일정과 진행 중인 입찰 공고를 함께 보고, 나라장터 변경등록 순서와 필요한 증빙을 유선행정사사무소가 먼저 정리해 드립니다. 전화 02-363-2251, 평일 09:30~17:30 KST.</p>
 <a href="/contact?utm_source=blog&utm_medium=cta&utm_campaign=procurement-narajangteo-registration-change">무료 상담 신청하기</a>
</div>

<p class="author-block">유선행정사사무소 (대표 행정사 정유선) · 「국가를 당사자로 하는 계약에 관한 법률 시행령」(대통령령 제36338호, 2026. 6. 3. 시행), 같은 법 시행규칙(재정경제부령 제1호, 2026. 1. 2. 시행), 「국가종합전자조달시스템 입찰참가자격등록규정」(조달청고시 제2026-6호, 2026. 1. 23. 시행) 원문 기준으로 작성 · 최종 검토일 10월 3일<!-- 근거: 국가계약법 시행령 대통령령 제36338호, 국가계약법 시행규칙 재정경제부령 제1호, 조달청고시 제2026-6호 --></p>`,
  },

  en: {
    title: 'Changing a Korean Public Procurement Bidder Registration — What to Update on KONEPS',
    category: 'Government Procurement',
    metaTitle: 'Korea Public Procurement Bidder Registration — Change Rules',
    metaDescription: 'What a registered KONEPS bidder must update when its representative, trade name, address or licences change, and when an unupdated bid is invalid.',
    excerpt: 'Registration as a bidder on Korea\'s KONEPS (Narajangteo) is not a one-off. A change of representative or trade name must be registered before bidding, or the bid is invalid. Here is what the rules actually require.',
    content: `<div class="toc"><p>Table of Contents</p><ol><li>Why the Duty Continues After Registration</li><li>Which Changes Need a Change Registration</li><li>The Two Items That Make a Bid Invalid</li><li>When You Must Register Again</li><li>Address, Licences, Factories and Agents</li><li>Procedure and Deregistration</li><li>FAQ</li></ol></div>
<p>A <strong>change registration</strong> (변경등록) is how a company already registered as a competitive bidder on KONEPS, Korea's national e-procurement system known as Narajangteo, updates its record after its representative, trade name or address changes. Korea public procurement bidder registration is not a one-off: the record must keep matching reality. Above all, a bid submitted without registering a change of trade name or representative is invalid.</p>
<p>This article covers only what happens after registration. It is based on the current Enforcement Decree and Enforcement Rule of the Act on Contracts to Which the State Is a Party (국가계약법) and the Public Procurement Service (조달청) notice on KONEPS bidder registration, as of 2026.</p>

<h2>Why the Duty Continues After Registration</h2>
<p>Under Decree Article 12(1), only those holding any permit or licence required by other laws, any needed security clearance and a business registration (Rule Article 14(1)) may enter a competitive tender. Registration lets a company prove this once instead of at every tender.</p>
<p>Rule Article 15(1) allows advance registration and adds that the same applies "when registered matters have changed". Details posted on KONEPS count as registered with every central agency (Article 15(5)), and Article 15(7)3 requires the system to state that changes must be registered before bidding.</p>
<p>The PPS notice recognises five kinds of registration: new, a self-check every 1 year, renewal, change and deregistration (Article 4(2)). A bidder must check its own data before bidding and bears any disadvantage from failing to do so (Article 9-2(1)), while contracting officers separately check the prospective winner in case a change was not registered (Article 8(1)). </p>

<h2>Which Changes Need a Change Registration</h2>
<p>Notice Article 16(1) requires a change registration with evidence immediately when the registered representative, trade name, address, factory, bidding agent, branch, business type or manufactured goods change; other details are simply entered in the system. The deadline is "immediately", not a number of days.</p>
<table><thead><tr><th>Change</th><th>Action on KONEPS</th><th>Basis</th><th>Bidding without updating</th></tr></thead><tbody>
<tr><td>Representative's name (all, if several)</td><td>Change registration</td><td>Notice Art. 16(1)(2)</td><td>Bid invalid (Rule Art. 44(1)6-3)</td></tr>
<tr><td>Trade or corporate name</td><td>Change registration (registered name)</td><td>Notice Art. 16, 13(8)</td><td>Bid invalid (Rule Art. 44(1)6-3)</td></tr>
<tr><td>Head office address</td><td>Change registration</td><td>Notice Art. 16(1)</td><td>Not an invalidity item; deregistration ground (Art. 19(1)2)</td></tr>
<tr><td>Business type or goods</td><td>Change registration</td><td>Notice Art. 16(1), 11(1)</td><td>Unlisted types are outside your scope</td></tr>
<tr><td>Factory added or moved</td><td>Proof of direct production (counts as renewal)</td><td>Notice Art. 23-3(2)</td><td>Deregistration ground (Art. 19(1)2)</td></tr>
<tr><td>Bidding agent or branch</td><td>Change registration</td><td>Notice Art. 13(5)(9)</td><td>-</td></tr>
<tr><td>Sole trader ↔ corporation</td><td>Deregister and register anew</td><td>Notice Art. 16(3)</td><td>Old registration unusable</td></tr>
<tr><td>Merger</td><td>Absorbed party deregisters; absorbing party updates</td><td>Notice Art. 16(4)</td><td>Absorbed company deregistered (Art. 19(1)7)</td></tr>
<tr><td>Rehabilitation opened</td><td>Add receiver as lead representative</td><td>Notice Art. 16(7)</td><td>-</td></tr>
<tr><td>Sanction data</td><td>Entered by the sanctioning agency</td><td>Notice Art. 16(6)</td><td>-</td></tr>
</tbody></table>
<p>Only the trade name and the representative's name void a bid in themselves; the other items are grounds for deregistration instead. But if any change means you no longer hold the qualification a tender requires, the bid can be void as one "made by a person without qualification" (Decree Article 39(4); Rule Article 44(1)1).</p>

<h2>The Two Items That Make a Bid Invalid</h2>
<p>Decree Article 39(4) voids bids by unqualified persons and bids on grounds set by ministerial rule, which Rule Article 44(1) lists.</p>
<div class="highlight-box">Enforcement Rule, Article 44(1)6-3: A bid submitted without a change registration of any of the following matters registered under Article 15(1) — (a) the trade name or the name of the corporation; (b) the name of the representative (where there are several, all of them).</div>
<p>Notice Article 16(2) repeats this. Two further items once in the same subparagraph have been deleted, so these two are all that remain. Where there are several representatives, the registration must state whether they act jointly or severally and name one lead representative (Notice Articles 2(1)8 and 13(4)). Adding or removing any one of them changes "the names of all representatives" and must be registered.</p>
<p>Does such a bid lead to debarment? Decree Article 76(2)1(b) treats "intentionally submitting an invalid bid" as a ground for restriction, but its proviso and Rule Article 75-2 exclude bids void under Article 44(1)6 and 6-3. A bid void only for an unregistered name change is expressly carved out.</p>
<p>That is not a blank cheque. Forging or misusing tender documents or submitting false documents is a separate ground (Decree Article 76(2)1(a)), and the Act allows restriction of up to 2 years (Article 27(1)). An untrue registration is also a deregistration ground (Notice Article 19(1)3).</p>
<p>When appointing a new representative, also check that a restriction on a company extends to its representative in charge (Decree Article 76(6)1) and that a bid through a representative still under restriction is invalid (Rule Article 44(1)1-2). Where 1 person represents several companies, they count as one bidder, so 2 or more bids from them in one tender are invalid (Rule Article 44(1)4).</p>

<h2>When You Must Register Again</h2>
<p>KONEPS keeps registrations under the head office business number, plus the corporate number for corporations (Notice Article 7). A change to that number cannot be a mere change registration.</p>
<ul>
<li><strong>Sole trader to corporation, or the reverse</strong> — deregister and register anew, meeting licence and business registration requirements in the new name (Notice Articles 16(3) and 5(1)).</li>
<li><strong>Merger</strong> — the absorbed company deregisters, the absorbing one files a change (Articles 16(4) and 19(1)7).</li>
<li><strong>Rehabilitation</strong> — the receiver is added and registered as lead representative (Article 16(7)).</li>
<li><strong>Closure</strong> — the whole registration may be removed; re-registration follows the change rules (Articles 19(1)6 and 16(5)).</li>
</ul>
<p>Licence transfer time on incorporation depends on the competent authority and the documents, so plan around pending tenders.</p>

<h2>Address, Licences, Factories and Agents</h2>
<p><strong>Head office.</strong> A move needs a change registration (Notice Articles 13(3) and 16(1)). It matters most for region-restricted tenders: under Article 4(4) of the government contract execution standard (정부 입찰ㆍ계약 집행기준), eligibility looks to the head office, or for goods manufacturing the main place of business, in the province of the site or delivery point, and branches cannot enter. Moving province changes which regional tenders you can enter.</p>
<p><strong>Business types and licences.</strong> You may bid only for goods, types or main fields listed on your certificate (Article 11(1)); works and service types use a 4-digit code and works main fields a 3-digit code (Article 25-2). Add a new licence before bidding in that field and check your data against each tender (Article 11(3)). If a licence was renewed under its own law but the registration was not, it can be supplemented after the bid deadline (Article 9(3)). Capacity ratings may be entered by the operator, but checking them is the bidder's job (Article 28(1)).</p>
<p><strong>Factories.</strong> Adding or moving a factory needs proof of direct production and counts as renewal; if all factory data for an item go, the item may be deregistered (Article 23-3(2)(5)).</p>
<p><strong>Agents and branches.</strong> Only current staff may be bidding agents, with proof such as social insurance enrolment within the last 3 months; restricted persons are barred and no one may act for 2 or more companies (Article 13(5)). A branch must appear in the corporate register or articles, its breach restricts the whole corporation, and only 1 of head office or branch may enter a tender (Article 13(6)(9)).</p>

<h2>Procedure and Deregistration</h2>
<p>New-registration rules apply: file online with an approved certificate and submit evidence to the regional procurement office or PPS headquarters (Articles 16(1) and 13(1)). Articles 22 and 25 list the documents and expressly cover changes; shared administrative data are checked by the official with your consent (Article 14(2)).</p>
<ol>
<li>Change the source documents first — corporate register, business registration, licence.</li>
<li>File the change on KONEPS with evidence (Article 13(1)).</li>
<li>It takes effect on the official's confirmation (Article 15(1)).</li>
<li>Check the result and reprint the certificate (Articles 10(1) and 15(2)).</li>
</ol>
<p>Article 18 sets a standard of 8 working hours, but delays for supplementation or system failure must be notified with an expected date, and filings after hours count from the next working day. With no reply within 20 days of a request to supplement, the application is returned (Article 14(4)). Actual timing depends on the authority and the documents, so do not start just before a bid deadline.</p>
<p>Not filing a change is a deregistration ground, and only the affected part may be removed (Article 19(1)2 and 19(2)), after notice and a chance to respond; with no response within 15 days removal may follow (Article 19(3)). Notices may also be posted on the system (Article 19(4)), so keep contacts accurate. A self-check is due every 1 year regardless (Article 4(2)), and the operator may check records at any time or require renewal (Articles 9(5) and 28(3)). Texts: <a href="https://www.law.go.kr/행정규칙/국가종합전자조달시스템입찰참가자격등록규정" target="_blank" rel="noopener">PPS bidder registration notice</a> and <a href="https://www.law.go.kr/법령/국가를당사자로하는계약에관한법률시행규칙" target="_blank" rel="noopener">Enforcement Rule</a>. Costs vary case by case and are explained precisely during the free consultation.</p>

<div class="faq-section"><h2>FAQ</h2>
<div class="faq-item"><p class="faq-q">Q. Our representative changed. What if we bid before registering it?</p><p class="faq-a">A. The bid is invalid under Rule Article 44(1)6-3(b) and Notice Article 16(2). Adding or removing one representative counts.</p></div>
<div class="faq-item"><p class="faq-q">Q. Does such an invalid bid lead to debarment?</p><p class="faq-a">A. Not on that ground alone: Rule Article 75-2 excludes it from Decree Article 76(2)1(b). False documents are a separate ground under Article 76(2)1(a).</p></div>
<div class="faq-item"><p class="faq-q">Q. Is a change registration enough when a sole trader incorporates?</p><p class="faq-a">A. No. Notice Article 16(3) requires deregistration and a new registration, as records are kept by business number (Article 7).</p></div>
<div class="faq-item"><p class="faq-q">Q. Does moving our head office make our bids invalid?</p><p class="faq-a">A. The address is not an item in Rule Article 44(1)6-3, but it must be updated at once (Notice Article 16(1)) or it becomes a deregistration ground (Article 19(1)2). Recheck regional tender eligibility.</p></div>
<div class="faq-item"><p class="faq-q">Q. Does a change take effect as soon as we file it?</p><p class="faq-a">A. It takes effect on confirmation (Notice Article 15(1)). Article 18 sets 8 working hours as the standard but allows delay for supplementation.</p></div>
</div>

<div class="cta-block">
 <h3>Planning a change of representative, name or address?</h3>
 <p>We review your register, business registration and licence timeline against pending tenders, then map the KONEPS change steps and evidence. Call 02-363-2251, weekdays 09:30–17:30 KST.</p>
 <a href="/contact?utm_source=blog&utm_medium=cta&utm_campaign=procurement-narajangteo-registration-change">Request a free consultation</a>
</div>

<p class="author-block">Yuseon Administrative Scrivener Office (Chief Scrivener Jeong Yuseon) · Based on the Enforcement Decree of the Act on Contracts to Which the State Is a Party (Presidential Decree No. 36338), its Enforcement Rule and the PPS notice on KONEPS bidder registration · Last reviewed 3 October</p>`,
  },

  zh: {
    title: '韩国公共采购投标资格登记的变更登记 — 代表人、商号、所在地变更后在Narajangteo要做什么',
    category: '政府采购',
    metaTitle: '韩国公共采购投标资格登记 — 变更登记与投标无效',
    metaDescription: '在韩国Narajangteo（KONEPS）完成投标资格登记后，代表人、商号、地址、业种或工厂变更时须何时、如何办理变更登记，以及未变更即投标导致无效和注销的标准。',
    excerpt: '韩国公共采购投标资格登记并非一次了事。代表人或商号变更后未办理变更登记就投标，该投标无效。本文依据调达厅告示与施行规则原文整理变更义务。',
    content: `<div class="toc"><p>目录</p><ol><li>登记后为何仍有变更登记义务</li><li>哪些事项变更需办理变更登记</li><li>导致投标无效的两项：商号与代表人姓名</li><li>需要重新登记的情形</li><li>所在地、业种、工厂、代理人变更要点</li><li>变更登记程序与注销</li><li>常见问题</li></ol></div>
<p><strong>投标资格变更登记</strong>（변경등록）是指已在韩国国家综合电子采购系统（나라장터，Narajangteo/KONEPS）登记竞争投标参加资格的企业，在代表人、商号、地址等信息变化时将其重新反映到系统的程序。韩国公共采购投标资格登记不是一次了事，登记事项必须与实际持续一致。尤其是商号和代表人姓名，未办理变更登记就投标，该投标无效。</p>
<p>本文依据2026年现行《国家为当事人的合同法》（국가계약법）施行令、施行规则及调达厅（조달청）登记规定原文。</p>

<h2>登记后为何仍有变更登记义务</h2>
<p>依施行令第12条第1款，具备其他法令要求的许可、执照等，必要时的保安审查适合判定，以及营业执照（施行规则第14条第1款）者，才能参加竞争投标。</p>
<p>施行规则第15条第1款规定可预先登记，并写明"登记事项变更时亦同"。系统登载的登记事项视为已向其他中央机关登记（第15条第5款），第15条第7款第3项要求系统公示：有变动须在投标前办理变更登记。</p>
<p>告示将登记分为新登记、每1年一次的自我信息确认登记、更新登记、变更登记、注销登记五类（第4条第2款）。投标者须在投标前确认自身信息，不利后果由登记者承担（第9条之2第1款）；公务员则在决定中标人时另行确认资格（第8条第1款）。</p>

<h2>哪些事项变更需办理变更登记</h2>
<p>告示第16条第1款规定，代表人、商号、地址、工厂、投标代理人、分支机构、业种、制造物品信息变更时，须立即附证明申请变更登记；其他信息在系统直接输入即可。期限是"立即"。</p>
<table><thead><tr><th>变更事项</th><th>处理</th><th>依据</th><th>未变更即投标</th></tr></thead><tbody>
<tr><td>代表人姓名（多人时全部）</td><td>变更登记</td><td>告示第16条第1款、第2款</td><td>投标无效（规则第44条第1款第6项之3）</td></tr>
<tr><td>商号或法人名称</td><td>变更登记（按登记簿商号）</td><td>告示第16条、第13条第8款</td><td>投标无效（规则第44条第1款第6项之3）</td></tr>
<tr><td>总公司地址</td><td>变更登记</td><td>告示第16条第1款</td><td>非无效事项；注销事由（第19条第1款第2项）</td></tr>
<tr><td>业种、制造物品</td><td>变更登记</td><td>告示第16条第1款、第11条第1款</td><td>未登载业种不在投标范围</td></tr>
<tr><td>工厂增设或迁移</td><td>提交直接生产证明（视为更新登记）</td><td>告示第23条之3第2款</td><td>注销事由（第19条第1款第2项）</td></tr>
<tr><td>投标代理人、分支机构</td><td>变更登记</td><td>告示第13条第5款、第9款</td><td>-</td></tr>
<tr><td>个人与法人转换</td><td>注销后重新登记</td><td>告示第16条第3款</td><td>原登记不能使用</td></tr>
<tr><td>合并</td><td>被合并方注销，合并方变更登记</td><td>告示第16条第4款</td><td>被合并方注销（第19条第1款第7项）</td></tr>
<tr><td>回生程序开始</td><td>追加管理人为代表代表人</td><td>告示第16条第7款</td><td>-</td></tr>
<tr><td>行政处分信息</td><td>处分机关直接输入</td><td>告示第16条第6款</td><td>-</td></tr>
</tbody></table>
<p>直接导致无效的只有商号和代表人姓名，其他为注销事由；但变更若使资格丧失，也可能作为"无资格者的投标"无效（施行令第39条第4款、规则第44条第1款第1项）。</p>

<h2>导致投标无效的两项：商号与代表人姓名</h2>
<p>施行令第39条第4款规定无资格者的投标及部令规定事由的投标无效，规则第44条第1款列举其事由。</p>
<div class="highlight-box">施行规则第44条第1款第6项之3：依第15条第1款登记的事项中，未就下列任一事项办理变更登记而提交投标书的投标 — 1）商号或法人名称；2）代表人（多名时为全体）的姓名。</div>
<p>告示第16条第2款重申此规定，同项另外两目已删除。代表人有多名时，须区分各自代表或共同代表，并选定1名代表代表人（告示第2条第1款第8项、第13条第4款）。增加或卸任任何一名代表人，都属"全体代表人姓名"变更。</p>
<p>会导致不正当业者制裁吗？施行令第76条第2款第1项第2目将"故意无效投标"列为限制事由，但其但书与规则第75条之2排除了第44条第1款第6项及第6项之3的投标。</p>
<p>但提交虚假文件等是另一限制事由（施行令第76条第2款第1项第1目），法律规定可在2年以内限制投标资格（法第27条第1款）；登记内容与事实不符也是注销事由（告示第19条第1款第3项）。</p>
<p>更换代表人时还应确认：法人受限制时限制及于负责的代表人（施行令第76条第6款第1项），通过限制期间内代表人的投标无效（规则第44条第1款第1项之2）；1人代表多个法人时视为同一人，同一投标提交2份以上无效（规则第44条第1款第4项）。</p>

<h2>需要重新登记的情形</h2>
<p>登记以总公司营业执照号码管理，法人另加法人登记号码（告示第7条），号码本身变化无法以变更登记处理。</p>
<ul>
<li><strong>个人转法人或反之</strong> — 注销后重新登记，以新名义重新具备执照与营业登记要件（第16条第3款、第5条第1款）。</li>
<li><strong>合并</strong> — 被合并方注销，合并方变更登记（第16条第4款、第19条第1款第7项）。</li>
<li><strong>回生程序</strong> — 追加管理人并变更为代表代表人（第16条第7款）。</li>
<li><strong>停业</strong> — 登记可被全部注销，重新登记准用变更规定（第19条第1款第6项、第16条第5款）。</li>
</ul>
<p>个人转法人时，执照名义转移等所需时间因管辖机关和文件情况而异，应结合进行中的投标公告安排。</p>

<h2>所在地、业种、工厂、代理人变更要点</h2>
<p><strong>总公司所在地。</strong>地址变更须变更登记（第13条第3款、第16条第1款）。依《政府投标、合同执行标准》第4条第4款，地区限制投标以现场或交货地所在市、道内的总公司（物品制造为主要营业所）判断，分支机构不能参加。迁往其他市、道，可参加的地区投标随之改变。</p>
<p><strong>业种与执照。</strong>只能参加登记证所载品名、业种或主力领域的投标（第11条第1款）；业种为4位代码，工程主力领域为3位代码（第25条之2）。新执照须追加登记，并在投标前核对公告要件（第11条第3款）。执照已依法更新而登记未更新的，可在截止后补正（第9条第3款）。</p>
<p><strong>工厂。</strong>增设或迁移工厂须提交直接生产证明，视为更新登记；工厂信息全部删除时该物品可被注销（第23条之3第2款、第5款）。</p>
<p><strong>代理人与分支机构。</strong>代理人限在职员工，须提交最近3个月以内的四大保险证明等；受限制者不可，1人不可在2家以上公司登记（第13条第5款）。分支机构须载于法人登记簿或章程，其违规使整个法人受限，同一投标本公司与分支机构只能1家参加（第13条第6款、第9款）。</p>

<h2>变更登记程序与注销</h2>
<p>准用新登记程序：以指定证书在系统申请，附证明提交地方调达厅或本厅（第16条第1款、第13条第1款）。文件见第22条、第25条（明示含变更登记），可共同利用的信息由公务员确认（第14条第2款）。</p>
<ol>
<li>先完成法人登记、营业登记、执照等源头变更。</li>
<li>在系统申请变更登记并附证明（第13条第1款）。</li>
<li>效力自公务员确认时发生（第15条第1款）。</li>
<li>确认结果并重新打印登记证（第10条第1款、第15条第2款）。</li>
</ol>
<p>第18条以8个工作小时内处理为标准，需补正或系统故障时须通知原因和预计日期，工作时间后申请视为下一工作日受理。补正要求后20日无回复则退回（第14条第4款）。实际时间因机关和文件情况而异，勿在截止前才申请。</p>
<p>不办变更登记是注销事由，可仅注销相关部分（第19条第1款第2项、第2款）；须事先通知，通知后15日内无表示可注销（第19条第3款），通知也可在系统公告（第19条第4款）。即使无变更，每1年也须办自我信息确认登记（第4条第2款），运营者可随时检查（第9条第5款、第28条第3款）。原文见<a href="https://www.law.go.kr/행정규칙/국가종합전자조달시스템입찰참가자격등록규정" target="_blank" rel="noopener">投标参加资格登记规定</a>、<a href="https://www.law.go.kr/법령/국가를당사자로하는계약에관한법률시행규칙" target="_blank" rel="noopener">国家合同法施行规则</a>。费用因个案而异，将在免费咨询时准确说明。</p>

<div class="faq-section"><h2>常见问题</h2>
<div class="faq-item"><p class="faq-q">Q. 代表人已变更，变更登记前投标会怎样？</p><p class="faq-a">A. 投标无效（规则第44条第1款第6项之3第2目、告示第16条第2款）。增加或卸任一名代表人也包括在内。</p></div>
<div class="faq-item"><p class="faq-q">Q. 因此无效会受不正当业者制裁吗？</p><p class="faq-a">A. 仅凭该无效不会，规则第75条之2将其排除在施行令第76条第2款第1项第2目之外。但虚假文件属第1目的另一事由。</p></div>
<div class="faq-item"><p class="faq-q">Q. 个人转法人只办变更登记即可吗？</p><p class="faq-a">A. 不可以。告示第16条第3款要求注销后重新登记，因为登记按营业执照号码管理（第7条）。</p></div>
<div class="faq-item"><p class="faq-q">Q. 只迁移总公司地址，投标会无效吗？</p><p class="faq-a">A. 地址不属规则第44条第1款第6项之3的事项，但须立即变更登记（告示第16条第1款），否则为第19条第1款第2项的注销事由。地区投标资格须重新确认。</p></div>
<div class="faq-item"><p class="faq-q">Q. 申请后立即生效吗？</p><p class="faq-a">A. 自公务员确认时生效（告示第15条第1款）。第18条以8个工作小时为标准，但需补正时可能延迟。</p></div>
</div>

<div class="cta-block">
 <h3>即将变更代表人、商号或所在地？</h3>
 <p>유선행정사사무소会结合登记、营业登记、执照变更日程与进行中的投标公告，先整理系统变更登记顺序和所需证明。电话 02-363-2251，平日 09:30~17:30 KST。</p>
 <a href="/contact?utm_source=blog&utm_medium=cta&utm_campaign=procurement-narajangteo-registration-change">申请免费咨询</a>
</div>

<p class="author-block">유선행정사사무소（代表行政士 정유선）· 依据《国家为当事人的合同法施行令》（总统令第36338号）、同法施行规则及调达厅投标参加资格登记规定原文撰写 · 最终审阅日 10月3日</p>`,
  },

  ja: {
    title: '韓国 公共調達 入札参加資格登録の変更登録 — 代表者・商号・所在地が変わったらナラジャンテで行うこと',
    category: '政府調達',
    metaTitle: '韓国 公共調達 入札参加資格登録 — 変更登録と入札無効',
    metaDescription: '韓国のナラジャンテ（KONEPS）で入札参加資格を登録した後、代表者・商号・住所・業種・工場が変わった場合にいつ・どう変更登録するか、変更登録なしの入札が無効となる場合と抹消基準を原文で整理しました。',
    excerpt: '韓国の公共調達の入札参加資格登録は一度で終わりません。代表者や商号が変わったのに変更登録をせずに入札すると、その入札は無効です。調達庁告示と施行規則の原文に基づき変更義務を整理しました。',
    content: `<div class="toc"><p>目次</p><ol><li>登録後も変更登録義務が続く理由</li><li>何が変わったら変更登録か</li><li>入札無効となる2項目 — 商号と代表者氏名</li><li>再登録が必要な場合</li><li>所在地・業種・工場・代理人の変更</li><li>変更登録の手続と抹消</li><li>よくあるご質問</li></ol></div>
<p><strong>入札参加資格の変更登録</strong>（변경등록）とは、韓国の国家総合電子調達システム（나라장터、ナラジャンテ／KONEPS）に競争入札参加資格を登録した企業が、代表者・商号・住所などの登録情報が変わったときにシステムへ反映させる手続です。韓国 公共調達 入札参加資格登録は一度で終わりではなく、登録事項が実態と一致し続ける必要があります。特に商号と代表者氏名は、変更登録をせずに入札書を出すとその入札自体が無効になります。</p>
<p>本稿は登録後の変更義務だけを扱います。根拠は2026年現在の「国家を当事者とする契約に関する法律」（국가계약법）施行令・施行規則と、調達庁（조달청）の入札参加資格登録規定の原文です。韓国の行政士事務所（日本の行政書士事務所に相当）の立場から整理しました。</p>

<h2>登録後も変更登録義務が続く理由</h2>
<p>施行令第12条第1項により、競争入札に参加できるのは、他の法令が求める許可・免許等、必要な場合の保安測定の適合判定、事業者登録（施行規則第14条第1項）を備えた者に限られます。入札参加資格登録は、これらを入札のたびに証明しなくて済むよう事前に確認を受けておく仕組みです。</p>
<p>施行規則第15条第1項は事前登録を定め、「登録された事項が変更されたときも同様とする」と書いています。システムに掲載された登録事項は他の中央官庁にも登録したものとみなされ（第15条第5項）、第15条第7項第3号は、変動があれば入札参加前に変更登録すべき旨をシステムに掲載するよう求めています。</p>
<p>告示は登録を、新規登録、1年ごとの自己情報確認登録、更新登録、変更登録、抹消登録の5種類に分けています（第4条第2項）。入札者は入札書提出前に自己情報を確認する義務があり、怠った不利益は登録者の責任です（第9条の2第1項）。一方、契約担当公務員は落札者選定の過程で資格を別途確認します（第8条第1項）。不一致は落札直前に表面化しやすいのです。</p>

<h2>何が変わったら変更登録か</h2>
<p>告示第16条第1項は、代表者、商号、住所、工場、入札代理人、支社、業種、製造物品の情報が変わったら、直ちに証憑書類を添えて変更登録申請をするよう定めています。その他の情報はシステムへの直接入力で完了します。期限は「何日以内」ではなく「直ちに」です。</p>
<table><thead><tr><th>変わった事項</th><th>行うこと</th><th>根拠</th><th>変更登録せずに入札すると</th></tr></thead><tbody>
<tr><td>代表者氏名（複数なら全員）</td><td>変更登録申請</td><td>告示第16条第1項・第2項</td><td>入札無効（規則第44条第1項第6号の3）</td></tr>
<tr><td>商号・法人の名称</td><td>変更登録申請（登記上の商号）</td><td>告示第16条、第13条第8項</td><td>入札無効（規則第44条第1項第6号の3）</td></tr>
<tr><td>本社住所</td><td>変更登録申請</td><td>告示第16条第1項</td><td>無効事項ではないが抹消事由（第19条第1項第2号）</td></tr>
<tr><td>業種・製造物品</td><td>変更登録申請</td><td>告示第16条第1項、第11条第1項</td><td>未登載の業種は参加範囲外</td></tr>
<tr><td>工場の追加・移転</td><td>直接生産の立証書類（更新登録とみなす）</td><td>告示第23条の3第2項</td><td>抹消事由（第19条第1項第2号）</td></tr>
<tr><td>入札代理人・支社</td><td>変更登録申請</td><td>告示第13条第5項・第9項</td><td>-</td></tr>
<tr><td>個人と法人の転換</td><td>抹消後に新規登録</td><td>告示第16条第3項</td><td>従前の登録は使えない</td></tr>
<tr><td>合併</td><td>被合併側は抹消、合併側は変更登録</td><td>告示第16条第4項</td><td>被合併法人は抹消（第19条第1項第7号）</td></tr>
<tr><td>回生手続開始</td><td>管理人を代表代表者として登録</td><td>告示第16条第7項</td><td>-</td></tr>
<tr><td>行政処分情報</td><td>処分機関が直接入力</td><td>告示第16条第6項</td><td>-</td></tr>
</tbody></table>
<p>入札そのものが無効になるのは商号と代表者氏名だけで、他の事項は抹消事由です。ただし変更によって公告の資格を失っていれば「入札参加資格のない者の入札」として無効になり得ます（施行令第39条第4項、規則第44条第1項第1号）。</p>

<h2>入札無効となる2項目 — 商号と代表者氏名</h2>
<p>施行令第39条第4項は、資格のない者の入札と省令で定める事由の入札を無効とし、施行規則第44条第1項がその事由を列挙しています。</p>
<div class="highlight-box">施行規則第44条第1項第6号の3：第15条第1項により登録された事項のうち、次のいずれかの登録事項を変更登録せずに入札書を提出した入札 — ア 商号または法人の名称、イ 代表者（複数いる場合は全員）の氏名</div>
<p>告示第16条第2項も同旨で、同じ号の他の2つの目は削除済みです。代表者が複数なら各自代表か共同代表かを区別し、代表代表者を1人選定します（告示第2条第1項第8号、第13条第4項）。1人の加入や退任も「代表者全員の氏名」の変更にあたります。</p>
<p>不正当業者制裁につながるかについては、施行令第76条第2項第1号イ目の「故意に無効の入札をした者」から、ただし書と施行規則第75条の2が第44条第1項第6号・第6号の3の入札を除外しています。変更登録漏れだけで無効になった入札は明示的に外されています。</p>
<p>ただし、書類の偽造・不正行使や虚偽書類の提出は別の制限事由で（施行令第76条第2項第1号ア目）、法律は2年以内の制限を定めています（法第27条第1項）。登録内容が事実と異なれば抹消事由にもなります（告示第19条第1項第3号）。</p>
<p>代表者交代時は、法人の制限が担当代表者にも及ぶこと（施行令第76条第6項第1号）、制限期間中の代表者を通じた入札が無効であること（規則第44条第1項第1号の2）、1人が複数法人の代表者なら同一人とみなされ同じ入札に2通以上出すと無効であること（規則第44条第1項第4号）も確認しましょう。</p>

<h2>再登録が必要な場合</h2>
<p>登録は本社の事業者登録番号で管理され、法人は法人登録番号も用います（告示第7条）。番号自体が変わる場合は変更登録では処理できません。</p>
<ul>
<li><strong>個人の法人成り・法人の個人化</strong> — 抹消して新規登録し、新名義で免許・事業者登録の要件を備え直します（第16条第3項、第5条第1項）。</li>
<li><strong>合併</strong> — 被合併側は抹消、合併側は変更登録です（第16条第4項、第19条第1項第7号）。</li>
<li><strong>回生手続</strong> — 管理人を追加し代表代表者として登録します（第16条第7項）。</li>
<li><strong>廃業</strong> — 登録全部が抹消され得て、再登録は変更登録の規定を準用します（第19条第1項第6号、第16条第5項）。</li>
</ul>
<p>法人成りは日程が狂いやすい場面です。法人設立、事業者登録、免許の名義移転がそろうまでに旧名義で入札すると不一致が生じます。所要期間は管轄機関と書類の状況によって異なるため、進行中の入札公告と照らして計画してください。</p>

<h2>所在地・業種・工場・代理人の変更</h2>
<p><strong>本社所在地。</strong>住所変更は変更登録の対象です（第13条第3項、第16条第1項）。「政府入札・契約執行基準」第4条第4項により、地域制限入札は現場や納品地の市・道にある本店（物品製造は主たる営業所）で判断し、支店では参加できません。他の市・道へ移ると参加できる地域入札が変わります。</p>
<p><strong>業種・免許。</strong>参加できるのは登録証に登載された品名・業種・主力分野の入札だけで（第11条第1項）、業種は4桁、工事の主力分野は3桁のコードです（第25条の2）。新しい免許は追加登録し、入札前に公告要件と照合します（第11条第3項）。免許自体を法令に従い更新済みなら、登録未更新でも締切後に補完できます（第9条第3項）。施工能力評価額の確認責任は登録者にあります（第28条第1項）。</p>
<p><strong>工場。</strong>追加・移転には直接生産の立証書類が必要で、更新登録とみなされます。工場情報がすべて削除されるとその物品は抹消され得ます（第23条の3第2項・第5項）。</p>
<p><strong>代理人・支社。</strong>代理人は在職中の役職員に限られ、最近3か月以内の4大保険加入証明などが必要です。制限中の者は不可、1人が2社以上の代理人になることもできません（第13条第5項）。支社は法人登記か定款に記載が必要で、支社の違反は法人全体の制限となり、同じ入札には本社と支社の1社しか参加できません（第13条第6項・第9項）。</p>

<h2>変更登録の手続と抹消</h2>
<p>新規登録の手続が準用され、認証書でシステムから申請し、証憑を添えて地方調達庁または本庁に提出します（第16条第1項、第13条第1項）。書類は第22条・第25条（変更登録を含むと明示）が定め、行政情報の共同利用で確認できるものは同意があれば公務員が確認します（第14条第2項）。</p>
<ol>
<li>法人登記・事業者登録・免許など原因書類の変更を先に済ませる。</li>
<li>ナラジャンテで変更登録を申請し証憑を添付する（第13条第1項）。</li>
<li>効力は登録担当公務員の確認で生じる（第15条第1項）。</li>
<li>結果を確認し登録証を出力し直す（第10条第1項、第15条第2項）。</li>
</ol>
<p>第18条は8勤務時間以内の処理を基準とし、補完や電算障害で遅れる場合は理由と予定日を通知し、勤務時間後の申請は翌勤務日受付とみなします。補完要請後20日回答がなければ返戻です（第14条第4項）。実際の所要時間は管轄機関と書類の状況によって異なるため、締切直前の申請は避けましょう。</p>
<p>変更登録をしないことは抹消事由で、該当部分だけ抹消され得ます（第19条第1項第2号・第2項）。事前通知と意見提出の機会があり、通知後15日以内に意思表示がなければ抹消できます（第19条第3項）。通知はシステムにも公示され得るため（第19条第4項）、連絡先を正確に保ちましょう。変更がなくても1年ごとに自己情報確認登録が必要で（第4条第2項）、運営者は随時点検や更新登録の要求もできます（第9条第5項、第28条第3項）。原文は<a href="https://www.law.go.kr/행정규칙/국가종합전자조달시스템입찰참가자격등록규정" target="_blank" rel="noopener">入札参加資格登録規定</a>、<a href="https://www.law.go.kr/법령/국가를당사자로하는계약에관한법률시행규칙" target="_blank" rel="noopener">国家契約法施行規則</a>で確認できます。費用は事案ごとに異なるため、無料相談時に正確にご案内します。</p>

<div class="faq-section"><h2>よくあるご質問</h2>
<div class="faq-item"><p class="faq-q">Q. 代表者が変わったのに変更登録前に入札するとどうなりますか。</p><p class="faq-a">A. 無効です（施行規則第44条第1項第6号の3イ目、告示第16条第2項）。代表者1人の加入や退任も含まれます。</p></div>
<div class="faq-item"><p class="faq-q">Q. その無効で不正当業者制裁も受けますか。</p><p class="faq-a">A. それだけでは受けません。施行規則第75条の2が施行令第76条第2項第1号イ目から除外しています。ただし虚偽書類はア目の別事由です。</p></div>
<div class="faq-item"><p class="faq-q">Q. 法人成りは変更登録だけで足りますか。</p><p class="faq-a">A. 足りません。告示第16条第3項により抹消後に新規登録が必要です。登録は事業者登録番号単位だからです（第7条）。</p></div>
<div class="faq-item"><p class="faq-q">Q. 本社住所の移転だけで入札は無効になりますか。</p><p class="faq-a">A. 住所は第44条第1項第6号の3の事項ではありませんが、直ちに変更登録が必要で（告示第16条第1項）、怠れば第19条第1項第2号の抹消事由です。地域入札の資格も確認し直してください。</p></div>
<div class="faq-item"><p class="faq-q">Q. 申請すればすぐ反映されますか。</p><p class="faq-a">A. 効力は登録確認で生じます（告示第15条第1項）。第18条は8勤務時間以内を基準としつつ、補完が必要なら遅れることがあります。</p></div>
</div>

<div class="cta-block">
 <h3>代表者・商号・所在地の変更を控えている方へ</h3>
 <p>登記・事業者登録・免許の変更日程と進行中の入札公告をあわせて確認し、ナラジャンテの変更登録の順序と証憑をユソン行政士事務所が先に整理します。電話 02-363-2251、平日 09:30〜17:30 KST。</p>
 <a href="/contact?utm_source=blog&utm_medium=cta&utm_campaign=procurement-narajangteo-registration-change">無料相談を申し込む</a>
</div>

<p class="author-block">ユソン行政士事務所（代表行政士 チョン・ユソン）・「国家を当事者とする契約に関する法律施行令」（大統領令第36338号）、同法施行規則および調達庁「入札参加資格登録規定」の原文に基づき作成・最終確認日 10月3日</p>`,
  },
}
