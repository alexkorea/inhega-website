// 원고 은행 — inhega-daily
// 주제(풀 18개 중): mainbiz(메인비즈인증) / 세부주제: renewal(갱신·주기적 신고)
//
// 법령 대조(law.go.kr DRF API, OC=test, 2026-10-03 확인):
//   중소기업 기술혁신 촉진법         법률 제21289호, 2026. 7. 1. 시행 (MST 281987, 법령ID 009145)
//     제2조 제4호의2(경영혁신형 중소기업 정의) / 제15조의3(경영혁신 촉진 지원사업, ③ 제15조 제2항~제5항 준용)
//     제15조 제4항(평가 비용 부담 — 산정·납부는 장관 고시)
//   중소기업 기술혁신 촉진법 시행령  대통령령 제36699호, 2026. 9. 22. 시행 (MST 289953, 법령ID 009255)
//     제13조(경영혁신형 중소기업의 선정 등 — 평가기준 공고·선정·우선지원)
//   중소기업 기술혁신 촉진법 시행규칙 (MST 220365) — "경영혁신" 0건, 이 글과 무관
//   중소벤처기업부 고시 「경영혁신형 중소기업(Main-Biz) 제도 운영규정」
//     제2026-45호, 2026. 6. 22. 발령·시행 (행정규칙일련번호 2100000280984, 행정규칙ID 45245)
//     제2조·제3조·제5조·제6조·제7조·제10조·제12조~제19조, 별표 2(경영혁신 진단 평가표)
// 유효기간(3년)·연장 신청기간(만료 90일 전~만료 후 30일)·35일 단서·700점·21일·7일·15일은
// 전부 위 고시 원문에서 직접 확인했다. 법률·시행령에는 유효기간 숫자가 없다(고시 위임 구조).
// 재발급 신청에는 고시상 기한이 없다 — "변경 후 N일 이내" 류 서술은 쓰지 않았다.
// 금액은 고시 제18조 제1항 제2호의 연장 평가 비용(40만원, 부가세 별도) 1건뿐이고 근거·기준일을 병기했다.
// 우리 서비스 가격은 한 건도 쓰지 않았다(지침서 X41).
// 대조표: scripts/inhega-daily/crosscheck/mainbiz-renewal-and-validity.md
// 참고: /services/mainbiz 는 현재 HOLD + 301(→/services/venture-cert) 상태라 본문 내부링크에는 쓰지 않았다.

export default {
  topic: 'mainbiz',
  angle: 'renewal',
  slug: 'mainbiz-renewal-and-validity',
  kind: 'cluster',
  coverImage: '/images/service-startup.webp',
  relatedServices: [
    { title: '메인비즈 인증', href: '/services/mainbiz' },
    { title: '벤처기업 인증', href: '/services/venture-cert' },
    { title: '기업부설연구소 설립', href: '/services/research-lab' },
  ],

  ko: {
    title: '메인비즈 인증 유효기간과 갱신 — 연장 신청 시기·평가 기준·선정취소 사유',
    category: '기업인증',
    metaTitle: '메인비즈 인증 유효기간·갱신 — 연장 신청 시기와 취소 사유',
    metaDescription: '메인비즈(경영혁신형 중소기업) 확인서 유효기간 3년, 만료 90일 전부터 만료 후 30일까지의 연장 신청, 700점 기준 진단평가, 새 유효기간 계산, 변경 재발급과 선정취소 사유를 고시 원문 기준으로 정리했습니다.',
    excerpt: '메인비즈 확인서는 발급일로부터 3년이 지나면 효력이 끝납니다. 유효기간 연장을 언제 신청해야 하는지, 연장 평가는 무엇으로 몇 점을 받아야 하는지, 확인서를 받는 시점에 따라 새 유효기간이 어떻게 달라지는지, 유효기간 중 변경과 선정취소까지 중소벤처기업부 고시 원문 기준으로 정리했습니다.',
    content: `<div class="toc"><p>목차</p><ol><li>메인비즈 확인의 근거와 유효기간</li><li>유효기간 연장 신청 시기</li><li>연장 평가 — 경영혁신진단평가표와 기준점수</li><li>갱신 확인서의 새 유효기간 계산</li><li>유효기간 중 변경 — 재발급과 선정 승계</li><li>선정취소 사유와 사후관리</li><li>자주 묻는 질문</li></ol></div>
<p><strong>메인비즈(경영혁신형 중소기업) 확인서의 유효기간은 확인서 발급일로부터 3년</strong>이고, 계속 유지하려면 유효기간 만료 90일 전부터 만료 후 30일 이내에 유효기간 연장을 신청해 평가에서 700점 이상을 받아야 합니다.<!-- 근거: 경영혁신형 중소기업(Main-Biz) 제도 운영규정(중소벤처기업부 고시 제2026-45호) 제12조 제3항, 제15조 제1항·제4항 --> 연장 평가는 처음 선정될 때의 평가지표가 아니라 별도의 경영혁신진단평가표로 진행되고, 갱신 확인서를 언제 받느냐에 따라 새 유효기간의 시작일이 달라집니다.<!-- 근거: 같은 고시 제6조 제2항, 제15조 제5항 --> 이 글은 「중소기업 기술혁신 촉진법」, 같은 법 시행령, 중소벤처기업부 고시 「경영혁신형 중소기업(Main-Biz) 제도 운영규정」 원문을 대조해 유효기간·연장·변경·취소만 정리한 것입니다.</p>
<p>신규 선정 요건과 처음 신청하는 절차는 <a href="/blog/mainbiz-certification-requirements-process">메인비즈 인증 요건과 신청 절차</a>에서 다루었으므로, 여기서는 이미 확인서를 받은 기업이 유효기간 동안 챙겨야 할 일에 집중합니다. 흔히 "메인비즈 인증 갱신"이라고 부르지만 고시의 공식 용어는 "유효기간의 연장"이고, 결과물도 새 인증서가 아니라 갱신 발급된 확인서입니다.<!-- 근거: 경영혁신형 중소기업(Main-Biz) 제도 운영규정 제15조 제4항·제7항 --></p>

<h2>메인비즈 확인의 근거와 유효기간</h2>
<p>「중소기업 기술혁신 촉진법」은 경영혁신형 중소기업을 "경영혁신 활동을 통하여 경쟁력의 확보가 가능하거나 미래 성장가능성이 있는 중소기업으로서 제15조의3에 따라 중소벤처기업부장관이 선정한 기업"으로 정의합니다.<!-- 근거: 중소기업 기술혁신 촉진법 제2조 제4호의2 --> 같은 법 제15조의3은 경영혁신형 중소기업의 발굴·육성을 경영혁신 촉진 지원사업의 하나로 두고, 시행령 제13조는 장관이 경영혁신활동과 경영혁신성과에 관한 평가기준을 공고하고 평가결과가 우수한 기업을 선정하도록 정합니다.<!-- 근거: 중소기업 기술혁신 촉진법 제15조의3 제1항 제1호, 같은 법 시행령 제13조 제1항·제2항 --></p>
<p>눈여겨볼 점은 법률과 시행령 어디에도 유효기간의 숫자가 없다는 것입니다. 선정과 관리의 구체적인 내용은 시행령 제13조를 근거로 한 중소벤처기업부 고시 「경영혁신형 중소기업(Main-Biz) 제도 운영규정」이 정하고, 유효기간도 이 고시에 들어 있습니다.<!-- 근거: 경영혁신형 중소기업(Main-Biz) 제도 운영규정 제1조 --> 고시는 행정규칙이라 법률보다 자주 개정되므로, 갱신을 준비할 때마다 현행 고시를 다시 확인하는 습관이 필요합니다. 현행판은 2026년 6월 22일 발령된 제2026-45호입니다.<!-- 근거: 중소벤처기업부 고시 제2026-45호, 2026. 6. 22. 시행 --></p>
<div class="highlight-box">「경영혁신형 중소기업(Main-Biz) 제도 운영규정」 제12조 제3항: 유효기간은 확인서 발급일로부터 3년이 되는 날까지로 한다. 다만, PMS인증을 통하여 메인비즈로 선정된 기업의 경우, 확인서 발급일부터 PMS인증 유효기간 만료일까지로 한다.<!-- 근거: 경영혁신형 중소기업(Main-Biz) 제도 운영규정 제12조 제3항 --></div>
<p>여기서 PMS인증은 「산업발전법」에 따른 생산성경영체제 인증을 말합니다. PMS인증 3등급 이상이고 인증 후 1년 이내인 기업은 자가진단을 생략하고 한국생산성본부의 심사 결과로 메인비즈 선정을 받을 수 있는데, 이 경로로 선정된 기업은 3년이 아니라 PMS인증의 유효기간에 메인비즈 유효기간이 묶입니다.<!-- 근거: 경영혁신형 중소기업(Main-Biz) 제도 운영규정 제2조 제2호, 제7조 제4항, 제12조 제3항 단서 --> 자기 회사가 어느 경로로 선정되었는지부터 확인서에서 확인해 두어야 만료일을 정확히 잡을 수 있습니다.</p>
<p>확인서의 발급 명의는 중소벤처기업부장관이지만 발급·승인 업무는 본사 소재지 지방중소벤처기업청장이 맡고, 기업은 메인비즈넷과 중소벤처24에서 확인서를 내려받을 수 있습니다. 영문 확인서와 중문 확인서도 함께 발급됩니다.<!-- 근거: 경영혁신형 중소기업(Main-Biz) 제도 운영규정 제12조 제1항·제2항·제4항 --></p>

<h2>유효기간 연장 신청 시기</h2>
<p>유효기간 연장의 출발점은 관리기관의 통보입니다. 관리기관인 (사)한국경영혁신중소기업협회는 유효기간 만료가 다가오는 기업에 만료일 90일 전까지 그 사실을 알려야 합니다.<!-- 근거: 경영혁신형 중소기업(Main-Biz) 제도 운영규정 제2조 제4호, 제15조 제1항 전단 --> 연장을 원하는 기업은 메인비즈넷에서 일반현황과 재무상태 등을 다시 입력하고 자가진단을 실시한 뒤 연장을 신청합니다. 관리기관은 평가신청일로부터 3일 이내에 평가기관을 배정해야 합니다.<!-- 근거: 같은 고시 제15조 제1항 --></p>
<table><thead><tr><th>시점</th><th>내용</th><th>근거</th></tr></thead><tbody>
<tr><td>만료 90일 전까지<!-- 근거: 운영규정 제15조 제1항 --></td><td>관리기관이 만료 사실을 기업에 통보</td><td>고시 제15조 제1항</td></tr>
<tr><td>만료 90일 전부터<!-- 근거: 운영규정 제15조 제1항 --></td><td>유효기간 연장 신청 가능</td><td>고시 제15조 제1항</td></tr>
<tr><td>만료 35일 전까지<!-- 근거: 운영규정 제15조 제1항 단서 --></td><td>만료일 이전에 확인을 받으려는 기업의 신청 기한</td><td>고시 제15조 제1항 단서</td></tr>
<tr><td>만료일</td><td>기존 확인서의 유효기간 종료<!-- 근거: 운영규정 제12조 제3항 --></td><td>고시 제12조 제3항</td></tr>
<tr><td>만료 후 30일 이내<!-- 근거: 운영규정 제15조 제1항 --></td><td>유효기간 연장 신청의 마지막 기한</td><td>고시 제15조 제1항</td></tr>
</tbody></table>
<p>표에서 가장 중요한 칸은 "만료 35일 전까지"입니다. 고시는 연장 신청 자체는 만료 후 30일까지 받아 주지만, 유효기간 만료일 이전에 확인을 받고자 하는 기업은 만료 35일 전까지 신청하라고 따로 정해 두었습니다.<!-- 근거: 경영혁신형 중소기업(Main-Biz) 제도 운영규정 제15조 제1항 단서 --> 평가결과 등록까지 신청일부터 21일, 등록일부터 확인서 갱신 발급까지 7일이 규정된 처리기간이므로, 확인서의 공백 없이 이어 가려면 이 35일 단서를 기준으로 일정을 잡는 것이 안전합니다.<!-- 근거: 같은 고시 제15조 제3항·제4항 --></p>
<p>통보를 받지 못한 경우에 신청기간을 늘려 주는 규정은 고시에 없습니다. 만료일은 확인서에 적힌 날짜로 기업이 직접 관리해야 하고, 통보는 편의를 위한 안내로 보는 편이 안전합니다.<!-- 근거: 경영혁신형 중소기업(Main-Biz) 제도 운영규정 제15조 제1항 --> 또 PMS인증으로 선정된 기업이 메인비즈 재선정을 원하면 원칙적으로 같은 연장 절차를 따르되, 재선정 신청기한 안에 PMS인증을 유지하고 있다면 PMS 심사 결과를 활용하는 재선정으로 처리됩니다.<!-- 근거: 같은 고시 제15조 제2항 --></p>

<h2>연장 평가 — 경영혁신진단평가표와 기준점수</h2>
<p>처음 선정될 때의 평가기준은 별표 1의 경영혁신형 중소기업 평가지표이고, 선정을 연장하기 위한 평가기준은 별표 2의 경영혁신진단평가표입니다.<!-- 근거: 경영혁신형 중소기업(Main-Biz) 제도 운영규정 제6조 제1항·제2항 --> 별표 2는 평가 항목을 경영혁신 인프라, 경영혁신 활동, 경영혁신 성과의 세 전략방향으로 나누고, 제조업 재선정 배점표 기준으로 각각 350점, 400점, 250점을 배정해 1,000점 만점으로 구성합니다.<!-- 근거: 같은 고시 별표 2 경영혁신진단평가 배점표(재선정-제조업) --> 지난 3년간 어떤 혁신 활동을 했고 그 성과가 숫자로 남았는지가 평가의 중심이라는 뜻입니다.</p>
<p>별표 2는 점수대별 경영혁신 유형도 함께 제시합니다. 연장 기준점수와 연결해 보면 아래와 같습니다.<!-- 근거: 경영혁신형 중소기업(Main-Biz) 제도 운영규정 별표 2 경영혁신형 중소기업 유형별 기준 --></p>
<table><thead><tr><th>유형</th><th>점수 구간</th><th>연장 가능 여부</th></tr></thead><tbody>
<tr><td>창조형</td><td>900점~1,000점<!-- 근거: 운영규정 별표 2 --></td><td>가능(700점 이상)<!-- 근거: 운영규정 제15조 제4항 --></td></tr>
<tr><td>성장형</td><td>800점~899점<!-- 근거: 운영규정 별표 2 --></td><td>가능(700점 이상)<!-- 근거: 운영규정 제15조 제4항 --></td></tr>
<tr><td>기본형</td><td>700점~799점<!-- 근거: 운영규정 별표 2 --></td><td>가능(700점 이상)<!-- 근거: 운영규정 제15조 제4항 --></td></tr>
<tr><td>기초형(예비 메인비즈 기업)</td><td>600점~699점<!-- 근거: 운영규정 별표 2 --></td><td>불가(700점 미만)<!-- 근거: 운영규정 제15조 제4항·제6항 --></td></tr>
</tbody></table>
<div class="highlight-box">「경영혁신형 중소기업(Main-Biz) 제도 운영규정」 제15조 제4항: 메인비즈 선정을 연장할 수 있는 대상기업은 제3항에 따른 평가결과 700점 이상의 점수를 획득한 기업으로 하며, 지방중소벤처기업청장은 해당기업에 대하여 평가기관이 평가결과를 등록한 날부터 7일 이내에 확인서를 갱신 발급하여야 한다.<!-- 근거: 경영혁신형 중소기업(Main-Biz) 제도 운영규정 제15조 제4항 --></div>
<p>평가는 신용보증기금, 기술보증기금, 한국생산성본부 가운데 배정된 평가기관이 하고, 평가기관은 연장 평가 업무를 관리기관에 위탁할 수도 있습니다(고시 제15조 제8항).<!-- 근거: 경영혁신형 중소기업(Main-Biz) 제도 운영규정 제2조 제5호, 제15조 제8항 --> 평가결과는 신청일부터 21일 이내에 메인비즈넷에 등록해야 합니다. 다만 통지된 평가일 전날까지 평가 비용을 내지 않아 생긴 기간과, 기업이 평가일 연기를 요청해 늦어진 기간은 처리기간에서 뺄 수 있고 그 기간은 최대 90일입니다.<!-- 근거: 같은 고시 제15조 제3항, 제10조 제2항 --> 700점에 못 미치면 평가기관이 연장할 수 없다는 사실을 통보합니다.<!-- 근거: 같은 고시 제15조 제6항 --></p>
<p>평가 비용은 법률에 근거가 있습니다. 「중소기업 기술혁신 촉진법」 제15조의3 제3항이 준용하는 제15조 제4항은 선정받으려는 기업에 평가 등에 드는 비용을 부담하게 할 수 있고 그 산정은 장관이 고시하도록 정합니다. 이에 따라 고시는 유효기간 연장을 위한 경영혁신진단평가의 비용을 40만원(부가가치세 별도)으로 정하고 있습니다(고시 제18조 제1항 제2호, 2026년 10월 3일 현행 고시 기준).<!-- 근거: 중소기업 기술혁신 촉진법 제15조의3 제3항·제15조 제4항, 경영혁신형 중소기업(Main-Biz) 제도 운영규정 제18조 제1항 제2호 --> 이 금액은 평가기관에 내는 법정 평가 비용이며, 고시 개정으로 바뀔 수 있으므로 신청 시점의 고시를 확인해야 합니다.</p>

<h2>갱신 확인서의 새 유효기간 계산</h2>
<p>연장에 성공하면 유효기간이 3년 더 생기지만, 그 3년이 언제 시작되는지는 갱신 확인서의 발급일이 기존 유효기간 안에 있느냐로 갈립니다.<!-- 근거: 경영혁신형 중소기업(Main-Biz) 제도 운영규정 제15조 제5항 --></p>
<ul>
<li><strong>기존 유효기간 안에 발급된 경우</strong> — 기존 유효기간 만료일의 다음 날부터 3년입니다. 일찍 갱신해도 남은 기간이 사라지지 않고 이어 붙습니다.<!-- 근거: 운영규정 제15조 제5항 전단 --></li>
<li><strong>기존 유효기간이 끝난 뒤 발급된 경우</strong> — 확인서 발급일부터 3년입니다. 만료일과 발급일 사이에는 유효한 확인서가 없는 기간이 생깁니다.<!-- 근거: 운영규정 제15조 제5항 후단 --></li>
</ul>
<p>예를 들어 유효기간 만료일이 3월 31일인 기업이 그 전에 갱신 확인서를 받으면 새 유효기간은 4월 1일부터 3년이고, 만료 후 신청해 4월 20일에 확인서를 받으면 4월 20일부터 3년입니다.<!-- 근거: 경영혁신형 중소기업(Main-Biz) 제도 운영규정 제15조 제5항 --> 후자의 경우 3월 31일 다음 날부터 4월 20일 전날까지는 메인비즈 확인서가 없는 상태입니다. 확인서의 유효기간을 요건으로 삼는 지원사업이나 입찰 가점이 있다면 이 공백 기간에는 메인비즈를 근거로 내세우기 어렵다는 점을 염두에 두어야 합니다.</p>
<p>만료 후 30일까지 연장을 신청하지 못하면 고시의 연장 절차를 더 이상 이용할 수 없습니다. 고시에는 그 이후의 연장 규정이 없으므로, 다시 메인비즈가 되려면 메인비즈넷에서 자가진단 600점 이상을 받은 뒤 현장평가를 신청하는 신규 선정 절차로 돌아가야 하는 것으로 읽힙니다. 이때 평가는 별표 1의 평가지표로 하고 선정 기준점수는 700점입니다(고시 제11조 제1항).<!-- 근거: 경영혁신형 중소기업(Main-Biz) 제도 운영규정 제7조 제1항·제2항, 제11조 제1항, 제15조 제1항 --></p>
<p>연장으로 갱신 발급된 확인서는 최초 확인서의 번호를 그대로 쓰고 번호 앞에 R을 붙여 신규 지정과 구별합니다.<!-- 근거: 경영혁신형 중소기업(Main-Biz) 제도 운영규정 제15조 제7항 --> 거래처나 기관에 제출할 때 번호가 달라 보여도 같은 선정이 이어진 것이라는 점을 설명할 수 있도록, 이전 확인서도 함께 보관해 두는 것이 좋습니다. 연장된 사실은 지방중소벤처기업청장이 메인비즈넷에 등록합니다(고시 제19조).<!-- 근거: 같은 고시 제19조 --></p>

<h2>유효기간 중 변경 — 재발급과 선정 승계</h2>
<p>유효기간 중에 회사 정보가 바뀌면 확인서 재발급을 신청할 수 있습니다. 고시가 정한 재발급 사유는 세 가지이고, 신청은 별지 제4호 서식으로 지방중소벤처기업청장에게 합니다.<!-- 근거: 경영혁신형 중소기업(Main-Biz) 제도 운영규정 제13조 제1항 --></p>
<table><thead><tr><th>변경 유형</th><th>할 일</th><th>근거</th></tr></thead><tbody>
<tr><td>상호, 소재지 또는 대표자 변경(개인사업자의 대표자 변경은 제외)</td><td>확인서 재발급 신청</td><td>고시 제13조 제1항 제1호</td></tr>
<tr><td>확인서 분실·훼손</td><td>확인서 재발급 신청</td><td>고시 제13조 제1항 제2호</td></tr>
<tr><td>개인기업의 법인전환, 인수·합병, 통합, 조직변경</td><td>선정 승계를 위한 재발급 신청</td><td>고시 제13조 제1항 제3호, 제14조</td></tr>
</tbody></table>
<p>지방중소벤처기업청장은 제출 서류를 확인한 뒤 신청받은 날로부터 7일 이내에 재발급을 승인해야 하고, 재발급 확인서의 본문 아래에 재발급 사유와 일자를 적습니다.<!-- 근거: 경영혁신형 중소기업(Main-Biz) 제도 운영규정 제13조 제2항·제3항 --> 중요한 것은 재발급이 유효기간을 늘려 주지 않는다는 점입니다. 재발급한 확인서의 유효기간은 종전 확인서의 유효기간 그대로이고, 합병의 경우에는 지분율이 높은 기업의 유효기간을 따릅니다.<!-- 근거: 같은 고시 제13조 제4항 --></p>
<p>법인전환이나 합병으로 선정을 넘겨받으려면 제14조의 요건을 갖추어야 합니다. 개인기업이 법인으로 전환하는 경우를 예로 들면 동일 업종(한국표준산업분류상 소분류)을 계속 영위할 것, 개인기업의 주요 생산시설이 법인에 현물출자되고 법인이 자산·부채를 승계할 것, 개인기업 대표자가 법인의 상근이사로 경영에 참가할 것, 그 대표자가 법인의 주주일 것을 모두 충족해야 합니다.<!-- 근거: 경영혁신형 중소기업(Main-Biz) 제도 운영규정 제14조 제1호, 제5조 제1항 --> 흡수합병은 존속기업이 메인비즈이면 승계가 가능하고, 존속기업이 메인비즈가 아니면 업종 동일성, 매출 비중 50% 이상, 상근이사 과반 참여 요건을 갖추어야 합니다.<!-- 근거: 같은 고시 제14조 제2호, 제5조 제2항 --> 「상법」에 따른 조직변경과 가업상속공제를 받은 개인기업의 대표자 변경도 승계 사유로 열려 있습니다.<!-- 근거: 같은 고시 제14조 제5호·제6호 --></p>
<p>재발급 신청 기한은 고시에 따로 정해져 있지 않습니다. 그렇다고 미뤄 둘 이유는 없습니다. 확인서의 상호나 대표자가 실제와 다르면 지원사업 신청이나 입찰에서 확인서를 그대로 쓰기 어렵고, 승계 요건은 전환·합병 당시의 사실관계로 판단하므로 자료가 남아 있을 때 정리하는 편이 수월합니다.<!-- 근거: 경영혁신형 중소기업(Main-Biz) 제도 운영규정 제13조·제14조 --></p>

<h2>선정취소 사유와 사후관리</h2>
<p>중소벤처기업부장관은 필요하다고 판단하면 메인비즈 선정기업의 운영현황을 별표 1의 평가지표로 다시 평가할 수 있습니다(고시 제16조).<!-- 근거: 경영혁신형 중소기업(Main-Biz) 제도 운영규정 제16조 --> 유효기간 3년은 "그동안 아무것도 보지 않는다"는 뜻이 아니라는 점에서, 선정취소 사유를 미리 알아 두는 것이 갱신 준비만큼 중요합니다. 지방중소벤처기업청장은 다음 사유가 있으면 선정을 취소할 수 있고, 제1호부터 제3호까지는 반드시 취소해야 합니다.<!-- 근거: 같은 고시 제17조 제1항 --></p>
<table><thead><tr><th>취소 사유</th><th>취소 성격</th><th>근거</th></tr></thead><tbody>
<tr><td>선정기업이 자진하여 반납한 경우</td><td>필수 취소</td><td>고시 제17조 제1항 제1호</td></tr>
<tr><td>실적 등을 허위로 제출하여 평가를 받은 경우</td><td>필수 취소</td><td>고시 제17조 제1항 제2호</td></tr>
<tr><td>제3조의 메인비즈 신청자격을 상실한 경우</td><td>필수 취소</td><td>고시 제17조 제1항 제3호</td></tr>
<tr><td>휴·폐업, 조업중단, 금융규제, 국세체납 등으로 경영이 정상화되지 못한 경우</td><td>재량 취소</td><td>고시 제17조 제1항 제4호</td></tr>
<tr><td>사후관리 결과 선정기준에 맞지 않게 된 경우</td><td>재량 취소</td><td>고시 제17조 제1항 제5호</td></tr>
</tbody></table>
<p>세 번째 사유인 "신청자격 상실"은 고시 제3조를 함께 읽어야 합니다. 연체·국세체납 등으로 한국신용정보원 체납정보 등에 등록 중인 기업, 어음 거래정지처분을 받은 기업, 파산·회생절차 개시 신청이 있거나 청산에 들어간 기업(회생인가 후 계획을 정상 이행 중인 기업은 예외), 직전 사업연도 말 재무상태표 기준 부채비율 1,000% 이상이거나 완전자본잠식인 기업은 신청자격이 없습니다.<!-- 근거: 경영혁신형 중소기업(Main-Biz) 제도 운영규정 제3조 제2항 제1호~제5호 --></p>
<p>2026년 6월 22일 개정으로 제6호가 새로 생겼습니다. 신청기업이나 대표자가 최근 3년 이내에 「근로기준법」에 따른 체불사업주 명단 공개, 「산업안전보건법」에 따른 산업재해 발생건수 등의 공표 대상이 되었거나, 전자상거래·하도급거래 등 공정거래 관련 법령 위반으로 시정명령을 받았거나, 「보조금 관리에 관한 법률」 위반으로 참여제한 처분을 받은 경우입니다.<!-- 근거: 경영혁신형 중소기업(Main-Biz) 제도 운영규정 제3조 제2항 제6호(신설 2026. 6. 22.) --> 다음 연장 신청을 앞둔 기업이라면 노무·안전·공정거래 이력을 재무 지표와 함께 점검해 두어야 합니다.</p>
<p>취소 사유의 발견 경로도 정해져 있습니다. 평가기관은 제2호부터 제5호까지의 사유를 발견하면 관리기관에 통보하고, 관리기관은 선정기업이 취소 사유에 해당하는지를 매월 1회 이상 확인해 지방중소벤처기업청장에게 알립니다. 선정이 취소되면 지방중소벤처기업청장은 15일 이내에 확인서를 반납받고 취소 사실을 메인비즈넷에 공고합니다.<!-- 근거: 경영혁신형 중소기업(Main-Biz) 제도 운영규정 제17조 제2항·제3항 --></p>
<p>정리하면 메인비즈 유효기간 관리는 만료일 확인, 35일 단서를 고려한 연장 신청, 경영혁신 성과 자료의 축적, 변경 시 재발급, 신청자격 유지 점검의 다섯 가지로 압축됩니다.<!-- 근거: 경영혁신형 중소기업(Main-Biz) 제도 운영규정 제3조, 제13조, 제15조, 제17조 --> 이노비즈와의 차이는 <a href="/blog/innobiz-vs-mainbiz-comparison-guide">이노비즈와 메인비즈 비교</a>에서, 비슷한 구조의 갱신 절차는 <a href="/blog/venture-certification-renewal">벤처기업 인증 갱신 가이드</a>에서 확인하실 수 있고, 기업인증 전반은 <a href="/services/venture-cert">벤처·이노비즈 인증</a> 안내를 참고하세요. 원문은 <a href="https://www.law.go.kr/법령/중소기업기술혁신촉진법" target="_blank" rel="noopener">중소기업 기술혁신 촉진법</a>, <a href="https://www.law.go.kr/행정규칙/경영혁신형중소기업(Main-Biz)제도운영규정" target="_blank" rel="noopener">경영혁신형 중소기업(Main-Biz) 제도 운영규정</a>에서, 신청은 <a href="https://www.smes.go.kr/mainbiz" target="_blank" rel="noopener">메인비즈넷</a>에서 할 수 있습니다. 대행 비용은 사례별로 상이하므로 무료 상담 시 정확히 안내드립니다.</p>

<div class="faq-section"><h2>자주 묻는 질문 (FAQ)</h2>
<div class="faq-item"><p class="faq-q">Q. 메인비즈 유효기간이 끝나면 자동으로 연장되나요?</p><p class="faq-a">A. 아닙니다. 「경영혁신형 중소기업(Main-Biz) 제도 운영규정」 제15조 제1항에 따라 기업이 메인비즈넷에서 정보를 다시 입력하고 자가진단을 한 뒤 연장을 신청해야 하고, 제15조 제4항에 따라 경영혁신진단평가에서 700점 이상을 받아야 확인서가 갱신 발급됩니다.</p></div>
<div class="faq-item"><p class="faq-q">Q. 유효기간이 이미 지났는데 연장 신청이 가능한가요?</p><p class="faq-a">A. 만료 후 30일 이내라면 가능합니다(고시 제15조 제1항). 다만 만료 후에 확인서를 받으면 제15조 제5항에 따라 새 유효기간이 발급일부터 3년으로 계산되어, 만료일과 발급일 사이에 확인서가 없는 기간이 생깁니다.</p></div>
<div class="faq-item"><p class="faq-q">Q. 만료일 전에 갱신 확인서를 받으려면 언제까지 신청해야 하나요?</p><p class="faq-a">A. 고시 제15조 제1항 단서는 유효기간 만료일 이전에 확인을 받고자 하는 기업은 만료 35일 전까지 신청하도록 정합니다. 이 경우 새 유효기간은 기존 만료일 다음 날부터 3년이라 남은 기간이 손해 보지 않습니다.</p></div>
<div class="faq-item"><p class="faq-q">Q. 상호나 대표자가 바뀌어 확인서를 재발급받으면 유효기간도 새로 3년이 되나요?<!-- 근거: 운영규정 제13조 제4항 --></p><p class="faq-a">A. 아닙니다. 고시 제13조 제4항에 따라 재발급 확인서의 유효기간은 종전 확인서의 유효기간 그대로이고, 합병의 경우에는 지분율이 높은 기업의 유효기간을 따릅니다. 재발급은 같은 조 제2항에 따라 신청일로부터 7일 이내에 승인됩니다.</p></div>
<div class="faq-item"><p class="faq-q">Q. 유효기간 중에 부채비율이 1,000%를 넘으면 어떻게 되나요?<!-- 근거: 운영규정 제3조 제2항 제4호, 제17조 제1항 제3호 --></p><p class="faq-a">A. 고시 제3조 제2항 제4호는 직전 사업연도 말 재무상태표 기준 부채비율 1,000% 이상인 기업을 신청자격이 없는 기업으로 정하고, 제17조 제1항 제3호는 신청자격을 상실한 경우를 반드시 취소해야 하는 사유로 둡니다. 결산 전에 재무구조를 미리 점검하는 것이 필요합니다.</p></div>
</div>

<div class="cta-block">
 <h3>메인비즈 만료일이 다가오거나 회사 정보가 바뀌었다면</h3>
 <p>확인서와 재무·혁신 활동 자료를 보고 연장 신청 시점, 진단평가 준비 항목, 재발급·승계 요건을 유선행정사사무소가 먼저 정리해 드립니다. 전화 02-363-2251, 평일 09:30~17:30 KST.</p>
 <a href="/contact?utm_source=blog&utm_medium=cta&utm_campaign=mainbiz-renewal-and-validity">무료 상담 신청하기</a>
</div>

<p class="author-block">유선행정사사무소 (대표 행정사 정유선) · 「중소기업 기술혁신 촉진법」(법률 제21289호, 2026. 7. 1. 시행), 같은 법 시행령(대통령령 제36699호, 2026. 9. 22. 시행), 중소벤처기업부 고시 「경영혁신형 중소기업(Main-Biz) 제도 운영규정」(제2026-45호, 2026. 6. 22. 시행) 원문 기준으로 작성 · 최종 검토일 10월 3일<!-- 근거: 중소기업 기술혁신 촉진법 법률 제21289호, 같은 법 시행령 대통령령 제36699호, 중소벤처기업부 고시 제2026-45호 --></p>`,
  },

  en: {
    title: 'Mainbiz Certification Renewal in Korea — Validity Period, Extension Window and Cancellation',
    category: 'Business Certification',
    metaTitle: 'Mainbiz Certification Korea Renewal and Validity Period',
    metaDescription: 'Mainbiz certification Korea renewal: 3-year validity, the extension window, the 700-point assessment, how the new term is counted, reissuance and cancellation.',
    excerpt: 'A Mainbiz certificate is valid for 3 years. Here is when to apply for extension, how the renewal assessment works, how the new term is counted, and what can cancel a selection, based on the Ministry notice.',
    content: `<div class="toc"><p>Table of Contents</p><ol><li>Legal Basis and Validity Period</li><li>When to Apply for Extension</li><li>The Renewal Assessment and Pass Mark</li><li>How the New Term Is Counted</li><li>Changes During the Term — Reissuance and Succession</li><li>Cancellation Grounds and Follow-up Review</li><li>FAQ</li></ol></div>
<p><strong>A Mainbiz (management innovation SME) certificate in Korea is valid for 3 years from its issue date.</strong> To keep it, the company must apply for extension between 90 days before and 30 days after expiry and score 700 points or more in the renewal assessment. That assessment uses a separate diagnosis table, and the start of the new term depends on when the renewed certificate is issued.</p>
<p>This guide is based on the Act on the Promotion of Technological Innovation of Small and Medium Enterprises (중소기업 기술혁신 촉진법), its Decree and the Ministry of SMEs and Startups notice on the Main-Biz system (경영혁신형 중소기업(Main-Biz) 제도 운영규정). Officially, "renewal" is an "extension of the validity period".</p>

<h2>Legal Basis and Validity Period</h2>
<p>A management innovation SME is one selected by the Minister under Article 15-3 of the Act (Article 2, item 4-2), on criteria for innovation activities and results announced under Decree Article 13. Neither states a validity period; the Ministry notice does (Notice Article 1). Notices change often, so check the current one — Notice No. 2026-45 of 22 June 2026.</p>
<div class="highlight-box">Main-Biz Operation Regulation, Article 12(3): The validity period runs until the day 3 years after the issue date of the certificate. However, for a company selected as Mainbiz through PMS certification, it runs from the issue date until the expiry date of the PMS certification.</div>
<p>PMS is the productivity management system certification. A company with PMS grade 3 or higher, within 1 year of certification, may be selected on the Korea Productivity Center's review (Notice Articles 2 and 7(4)), and its term then follows the PMS term. Certificates are issued by the regional SMEs and Startups office and can be downloaded from Mainbiz-net and SME 24, in English and Chinese too (Article 12(1), (2) and (4)).</p>

<h2>When to Apply for Extension</h2>
<p>The management body, the Korea Management Innovation SME Association, must notify the company at least 90 days before expiry (Notice Articles 2 and 15(1)). The company re-enters its data on Mainbiz-net, self-diagnoses and applies; an institution is assigned within 3 days.</p>
<table><thead><tr><th>Timing</th><th>What happens</th><th>Basis</th></tr></thead><tbody>
<tr><td>By 90 days before expiry</td><td>Management body notifies the company</td><td>Notice Art. 15(1)</td></tr>
<tr><td>From 90 days before expiry</td><td>Extension application opens</td><td>Notice Art. 15(1)</td></tr>
<tr><td>By 35 days before expiry</td><td>Deadline for confirmation before expiry</td><td>Notice Art. 15(1) proviso</td></tr>
<tr><td>Expiry date</td><td>Existing certificate ends</td><td>Notice Art. 12(3)</td></tr>
<tr><td>Within 30 days after expiry</td><td>Last day to apply</td><td>Notice Art. 15(1)</td></tr>
</tbody></table>
<p>The key row is "35 days before expiry": a company wanting confirmation before expiry must apply by then. The rules allow 21 days from application to registration of the result and 7 days from registration to the renewed certificate (Article 15(3) and (4)), so plan around the 35-day proviso to avoid a gap.</p>
<p>No rule extends the window if the reminder never arrives. A company selected through PMS generally follows the same procedure, but if it keeps its PMS certification within the deadline, re-selection is processed on the PMS review (Article 15(2)).</p>

<h2>The Renewal Assessment and Pass Mark</h2>
<p>First selection uses the indicators in Table 1; extension uses the management innovation diagnosis table in Table 2 (Notice Article 6). Table 2 groups items into innovation infrastructure, activities and results, weighted 350, 400 and 250 points in the manufacturing re-selection table, for 1,000 points in total. Recorded results from the past 3 years are the core.</p>
<table><thead><tr><th>Type (Table 2)</th><th>Score band</th><th>Extension</th></tr></thead><tbody>
<tr><td>Creative</td><td>900–1,000 points</td><td>Possible (700 or more)</td></tr>
<tr><td>Growth</td><td>800–899 points</td><td>Possible (700 or more)</td></tr>
<tr><td>Basic</td><td>700–799 points</td><td>Possible (700 or more)</td></tr>
<tr><td>Foundation (pre-Mainbiz)</td><td>600–699 points</td><td>Not possible (below 700)</td></tr>
</tbody></table>
<div class="highlight-box">Main-Biz Operation Regulation, Article 15(4): Companies eligible for extension are those that scored 700 points or more in the assessment under paragraph (3), and the head of the regional office shall issue a renewed certificate within 7 days from the date the assessment institution registers the result.</div>
<p>The Korea Credit Guarantee Fund, Korea Technology Finance Corporation or Korea Productivity Center assesses, and may entrust this to the management body (Articles 2 and 15(8)). Results must be registered within 21 days of the application, but time lost through unpaid assessment cost or a postponement requested by the company may be excluded, up to 90 days (Articles 15(3) and 10(2)). Companies below 700 points are notified that the term cannot be extended (Article 15(6)).</p>
<p>Under Act Article 15(4), applied by Article 15-3(3), applicants bear assessment costs set by notice: KRW 400,000 excluding VAT for the extension assessment (Notice Article 18(1)2, as of 3 October 2026), paid to the institution and subject to change.</p>

<h2>How the New Term Is Counted</h2>
<p>The new 3-year term starts as follows (Article 15(5)):</p>
<ul>
<li><strong>Issued within the existing term</strong> — 3 years from the day after the existing expiry date, so renewing early loses nothing.</li>
<li><strong>Issued after the term ended</strong> — 3 years from the issue date, leaving a gap with no valid certificate.</li>
</ul>
<p>For example, if a term ends on 31 March, a certificate issued before then starts the new term on 1 April; one issued on 20 April starts it on 20 April, with no valid certificate from 1 April to 20 April. Programmes requiring a valid certificate may not recognise Mainbiz status in that gap.</p>
<p>If you miss the 30-day window, the extension procedure is closed. The notice has no later extension rule, so returning appears to require new selection: a self-diagnosis of 600 points or more, then an on-site assessment against Table 1 with a pass mark of 700 points (Articles 7(1), 7(2) and 11(1)). A renewed certificate keeps the original number with an R prefix (Article 15(7)), and the regional office records the extension on Mainbiz-net (Article 19).</p>

<h2>Changes During the Term — Reissuance and Succession</h2>
<p>If company details change, the company may apply to the regional office for reissuance using Form 4 (Article 13(1)):</p>
<table><thead><tr><th>Change</th><th>Action</th><th>Basis</th></tr></thead><tbody>
<tr><td>Trade name, location or representative (not a sole proprietor's representative)</td><td>Apply for reissuance</td><td>Notice Art. 13(1)1</td></tr>
<tr><td>Loss or damage of the certificate</td><td>Apply for reissuance</td><td>Notice Art. 13(1)2</td></tr>
<tr><td>Incorporation, acquisition, merger, consolidation or change of entity type</td><td>Apply for reissuance to succeed to the selection</td><td>Notice Art. 13(1)3, Art. 14</td></tr>
</tbody></table>
<p>Reissuance is approved within 7 days (Article 13(2) and (3)). It does not extend the term: the reissued certificate keeps the previous validity period, and in a merger the term of the company with the larger equity share applies (Article 13(4)).</p>
<p>Succession requires the conditions in Article 14. When a sole proprietorship incorporates, the same business (KSIC sub-class) must continue, main facilities must be contributed in kind with assets and liabilities taken over, and the former owner must be a full-time director and a shareholder (Articles 14 and 5(1)). In a merger by absorption, succession is possible if the surviving company is a Mainbiz; otherwise it needs the same business, at least 50% of sales and a majority of full-time directors from the absorbed company (Articles 14 and 5(2)). Entity type changes and a representative change after family business succession relief are also covered (Article 14, items 5 and 6). There is no reissuance deadline, but an outdated certificate is hard to use.</p>

<h2>Cancellation Grounds and Follow-up Review</h2>
<p>The Minister may re-assess a selected company against Table 1 where needed (Article 16). The regional office may cancel a selection on the grounds below and must cancel on grounds 1 to 3 (Article 17(1)):</p>
<table><thead><tr><th>Ground</th><th>Nature</th><th>Basis</th></tr></thead><tbody>
<tr><td>Voluntary return</td><td>Mandatory</td><td>Notice Art. 17(1)1</td></tr>
<tr><td>Assessment obtained with false records</td><td>Mandatory</td><td>Notice Art. 17(1)2</td></tr>
<tr><td>Loss of eligibility under Article 3</td><td>Mandatory</td><td>Notice Art. 17(1)3</td></tr>
<tr><td>Management not normalised (closure, suspension, financial restrictions, tax arrears)</td><td>Discretionary</td><td>Notice Art. 17(1)4</td></tr>
<tr><td>Failing criteria after follow-up review</td><td>Discretionary</td><td>Notice Art. 17(1)5</td></tr>
</tbody></table>
<p>Under Article 3(2), companies registered for arrears with the Korea Credit Information Services, under a suspension of bill transactions, in bankruptcy, rehabilitation or liquidation (except those duly performing an approved plan), or with a debt ratio of 1,000% or more or full capital impairment at the previous fiscal year-end are not eligible (items 1 to 5). The 22 June 2026 amendment added item 6: within the last 3 years, public listing for unpaid wages, public naming for industrial accidents, a fair trade corrective order, or a subsidy participation ban.</p>
<p>The management body checks at least 1 time a month whether selected companies fall under a ground and notifies the regional office, which must retrieve the certificate within 15 days of cancellation and publish it on Mainbiz-net (Article 17(2) and (3)).</p>
<p>The texts are on the National Law Information Center (<a href="https://www.law.go.kr/법령/중소기업기술혁신촉진법" target="_blank" rel="noopener">the Act</a>, <a href="https://www.law.go.kr/행정규칙/경영혁신형중소기업(Main-Biz)제도운영규정" target="_blank" rel="noopener">the Main-Biz Operation Regulation</a>), and applications are made on <a href="https://www.smes.go.kr/mainbiz" target="_blank" rel="noopener">Mainbiz-net</a>. Costs vary case by case and are explained precisely during the free consultation.</p>

<div class="faq-section"><h2>FAQ</h2>
<div class="faq-item"><p class="faq-q">Q. Is a Mainbiz certificate extended automatically?</p><p class="faq-a">A. No. You must apply (Article 15(1)) and score 700 points or more (Article 15(4)).</p></div>
<div class="faq-item"><p class="faq-q">Q. Can I still apply after my certificate has expired?</p><p class="faq-a">A. Yes, within 30 days after expiry (Article 15(1)). The new term then runs for 3 years from the issue date under Article 15(5), leaving a gap.</p></div>
<div class="faq-item"><p class="faq-q">Q. By when must I apply to be renewed before expiry?</p><p class="faq-a">A. At least 35 days before expiry (proviso to Article 15(1)). The new term then starts on the day after the existing expiry date.</p></div>
<div class="faq-item"><p class="faq-q">Q. Does reissuance after a name or representative change give a new 3-year term?</p><p class="faq-a">A. No. Under Article 13(4) the previous term is kept; in a merger the term of the company with the larger equity share applies. Approval comes within 7 days (Article 13(2)).</p></div>
<div class="faq-item"><p class="faq-q">Q. What if my debt ratio exceeds 1,000% during the term?</p><p class="faq-a">A. Article 3(2)4 bars eligibility at 1,000% or more, and Article 17(1)3 makes loss of eligibility a mandatory cancellation ground.</p></div>
</div>

<div class="cta-block">
 <h3>Is your Mainbiz term ending, or have your company details changed?</h3>
 <p>We review your certificate and records and map the timing, diagnosis items and reissuance or succession conditions. Call 02-363-2251, weekdays 09:30–17:30 KST.</p>
 <a href="/contact?utm_source=blog&utm_medium=cta&utm_campaign=mainbiz-renewal-and-validity">Request a free consultation</a>
</div>

<p class="author-block">Yuseon Administrative Scrivener Office (Chief Scrivener Jeong Yuseon) · Based on the Act on the Promotion of Technological Innovation of Small and Medium Enterprises (Act No. 21289, in force 1 July 2026), its Enforcement Decree (Presidential Decree No. 36699, in force 22 September 2026) and Ministry of SMEs and Startups Notice No. 2026-45 (in force 22 June 2026) · Last reviewed 3 October</p>`,
  },

  zh: {
    title: '韩国Mainbiz认证有效期与续期 — 延长申请时间、评价标准与撤销事由',
    category: '企业认证',
    metaTitle: '韩国Mainbiz认证有效期与续期 — 延长申请与撤销事由',
    metaDescription: '依据韩国中小风险企业部告示，说明Mainbiz（经营创新型中小企业）确认书3年有效期、到期前90日至到期后30日的延长申请、700分评价标准、新有效期计算、变更补发与撤销事由。',
    excerpt: 'Mainbiz确认书自签发日起3年有效。本文依据告示原文整理何时申请延长、续期评价看什么、新有效期如何计算，以及有效期内的变更与撤销事由。',
    content: `<div class="toc"><p>目录</p><ol><li>Mainbiz确认的法律依据与有效期</li><li>有效期延长的申请时间</li><li>延长评价与合格分数</li><li>续期确认书的新有效期计算</li><li>有效期内的变更 — 补发与承继</li><li>撤销事由与事后管理</li><li>常见问题</li></ol></div>
<p><strong>韩国Mainbiz（经营创新型中小企业，경영혁신형 중소기업）确认书自签发日起3年有效。</strong>要继续保持，须在到期前90日至到期后30日内申请延长，并在评价中取得700分以上。延长评价使用另行规定的诊断评价表，新有效期的起算日取决于续期确认书的签发时间。</p>
<p>本文依据《中小企业技术创新促进法》（중소기업 기술혁신 촉진법）、同法施行令及中小风险企业部告示《经营创新型中小企业（Main-Biz）制度运营规定》原文整理。俗称的"续期"在告示中称为"有效期延长"。</p>

<h2>Mainbiz确认的法律依据与有效期</h2>
<p>该法第2条第4项之2规定，经营创新型中小企业是由长官依第15条之3选定的企业；施行令第13条规定长官公告关于经营创新活动及成果的评价标准并选定优秀企业。法律和施行令都没有有效期数字，有效期由告示规定（告示第1条）。告示修订较频繁，现行版本为2026年6月22日发布的第2026-45号。</p>
<div class="highlight-box">《Main-Biz制度运营规定》第12条第3款：有效期至确认书签发日起满3年之日为止。但通过PMS认证被选定的企业，自签发日起至PMS认证有效期届满日为止。</div>
<p>PMS认证3级以上且认证后1年以内的企业，可凭韩国生产性本部的审查结果获选（第2条、第7条第4款），其有效期随PMS认证而定。确认书由总公司所在地的地方中小风险企业厅签发，可在Mainbiz网和中小风险24下载，另有英文版和中文版（第12条第1款、第2款、第4款）。</p>

<h2>有效期延长的申请时间</h2>
<p>管理机构（社）韩国经营创新中小企业协会须在到期日90日前通知企业（第2条、第15条第1款）。企业在Mainbiz网重新录入资料、完成自我诊断后申请，管理机构在3日内分配评价机构。</p>
<table><thead><tr><th>时间点</th><th>内容</th><th>依据</th></tr></thead><tbody>
<tr><td>到期前90日之前</td><td>管理机构通知到期</td><td>告示第15条第1款</td></tr>
<tr><td>自到期前90日起</td><td>可申请延长</td><td>告示第15条第1款</td></tr>
<tr><td>到期前35日之前</td><td>希望到期前获得确认的申请期限</td><td>告示第15条第1款但书</td></tr>
<tr><td>到期日</td><td>原确认书有效期结束</td><td>告示第12条第3款</td></tr>
<tr><td>到期后30日以内</td><td>延长申请最后期限</td><td>告示第15条第1款</td></tr>
</tbody></table>
<p>尤其关键的是"到期前35日"：希望在到期日前取得确认的企业须在此之前申请。从申请到登记评价结果为21日，从登记到续期签发为7日（第15条第3款、第4款）。告示没有"未收到通知可延长期限"的规定，到期日须自行管理。经PMS获选的企业在期限内维持PMS认证的，按PMS审查结果重新选定（第15条第2款）。</p>

<h2>延长评价与合格分数</h2>
<p>首次选定依附表1评价指标，延长依附表2经营创新诊断评价表（第6条）。附表2分为经营创新基础、活动、成果三个方向，制造业重新选定配分分别为350分、400分、250分，满分1,000分，核心是过去3年的创新成果记录。</p>
<table><thead><tr><th>类型（附表2）</th><th>分数段</th><th>能否延长</th></tr></thead><tbody>
<tr><td>创造型</td><td>900分~1,000分</td><td>可以（700分以上）</td></tr>
<tr><td>成长型</td><td>800分~899分</td><td>可以（700分以上）</td></tr>
<tr><td>基本型</td><td>700分~799分</td><td>可以（700分以上）</td></tr>
<tr><td>基础型（预备Mainbiz）</td><td>600分~699分</td><td>不可（未满700分）</td></tr>
</tbody></table>
<div class="highlight-box">《Main-Biz制度运营规定》第15条第4款：可延长选定的企业为依第3款评价取得700分以上的企业；地方中小风险企业厅长须自评价机构登记结果之日起7日内续期签发确认书。</div>
<p>评价由信用保证基金、技术保证基金或韩国生产性本部实施，也可委托管理机构（第2条、第15条第8款）。结果须在申请日起21日内登记；因未缴评价费用或企业要求推迟而产生的期间可不计入，最长90日（第15条第3款、第10条第2款）。未达700分的会收到不能延长的通知（第15条第6款）。</p>
<p>依第15条之3第3款准用的该法第15条第4款，申请企业负担告示规定的评价费用：延长评价为40万韩元（另加增值税）（告示第18条第1款第2项，以2026年10月3日现行告示为准），缴给评价机构，可能随告示修订而变化。</p>

<h2>续期确认书的新有效期计算</h2>
<p>新的3年按下列方式起算（第15条第5款）：</p>
<ul>
<li><strong>在原有效期内签发</strong> — 自原到期日次日起3年，提早续期不损失剩余期间。</li>
<li><strong>在原有效期届满后签发</strong> — 自签发日起3年，中间会出现空档。</li>
</ul>
<p>例如到期日为3月31日，之前签发的新有效期自4月1日起；4月20日才签发的，自4月20日起，4月1日至4月20日之间没有有效确认书，以确认书有效为条件的支援事业可能不予认可。</p>
<p>错过到期后30日的，延长程序即不再适用。告示没有之后的延长规定，应理解为须回到新选定程序：自我诊断600分以上后申请现场评价，按附表1评价，合格分数700分（第7条第1款、第2款，第11条第1款）。续期确认书沿用原编号并加R（第15条第7款），由地方厅登记到Mainbiz网（第19条）。</p>

<h2>有效期内的变更 — 补发与承继</h2>
<p>企业信息变更的，可用附件第4号格式向地方厅申请补发（第13条第1款）：</p>
<table><thead><tr><th>变更类型</th><th>应办事项</th><th>依据</th></tr></thead><tbody>
<tr><td>商号、所在地或代表人变更（个人经营者代表人除外）</td><td>申请补发</td><td>告示第13条第1款第1项</td></tr>
<tr><td>确认书遗失、毁损</td><td>申请补发</td><td>告示第13条第1款第2项</td></tr>
<tr><td>法人转换、收购合并、整合、组织变更</td><td>为承继选定申请补发</td><td>告示第13条第1款第3项、第14条</td></tr>
</tbody></table>
<p>补发在7日内批准（第13条第2款、第3款），但不延长有效期：沿用原有效期，合并时以持股比例较高企业为准（第13条第4款）。个人企业转为法人的，须同时满足同一业种（小类）继续经营、主要设施实物出资并承继资产负债、原代表人任专职董事且为股东（第14条、第5条第1款）。吸收合并时存续企业是Mainbiz即可承继，否则须满足业种相同、销售额占50%以上、专职董事过半等条件（第14条、第5条第2款）。组织变更及家业继承扣除后的代表人变更也可承继（第14条第5项、第6项）。告示未规定补发期限，但信息不符的确认书难以使用。</p>

<h2>撤销事由与事后管理</h2>
<p>长官认为必要时可按附表1重新评价（第16条）。地方厅可在下列情形撤销选定，第1项至第3项必须撤销（第17条第1款）：</p>
<table><thead><tr><th>撤销事由</th><th>性质</th><th>依据</th></tr></thead><tbody>
<tr><td>企业自愿交回</td><td>必须撤销</td><td>告示第17条第1款第1项</td></tr>
<tr><td>以虚假业绩接受评价</td><td>必须撤销</td><td>告示第17条第1款第2项</td></tr>
<tr><td>丧失第3条申请资格</td><td>必须撤销</td><td>告示第17条第1款第3项</td></tr>
<tr><td>停业、停产、金融限制、欠税等致经营未正常化</td><td>可以撤销</td><td>告示第17条第1款第4项</td></tr>
<tr><td>事后管理结果不符合标准</td><td>可以撤销</td><td>告示第17条第1款第5项</td></tr>
</tbody></table>
<p>依第3条第2款，登记欠缴信息、票据停止交易、破产·回生·清算（正常履行回生计划的除外）、上一会计年度末负债比率1,000%以上或完全资本侵蚀的企业无申请资格（第1项至第5项）。2026年6月22日新增第6项：最近3年内被公开为欠薪雇主、被公布产业灾害、因公平交易法令受纠正命令或因补助金法受参与限制。</p>
<p>管理机构每月至少1次确认撤销事由并通报地方厅；撤销后地方厅须在15日内收回确认书并在Mainbiz网公告（第17条第2款、第3款）。原文见<a href="https://www.law.go.kr/법령/중소기업기술혁신촉진법" target="_blank" rel="noopener">中小企业技术创新促进法</a>、<a href="https://www.law.go.kr/행정규칙/경영혁신형중소기업(Main-Biz)제도운영규정" target="_blank" rel="noopener">Main-Biz制度运营规定</a>，申请在<a href="https://www.smes.go.kr/mainbiz" target="_blank" rel="noopener">Mainbiz网</a>办理。费用因个案而异，将在免费咨询时准确说明。</p>

<div class="faq-section"><h2>常见问题</h2>
<div class="faq-item"><p class="faq-q">Q. 有效期届满后会自动延长吗？</p><p class="faq-a">A. 不会。须依第15条第1款申请，并依第15条第4款取得700分以上。</p></div>
<div class="faq-item"><p class="faq-q">Q. 到期后还能申请吗？</p><p class="faq-a">A. 到期后30日内可以（第15条第1款），但依第15条第5款新有效期自签发日起3年，会出现空档。</p></div>
<div class="faq-item"><p class="faq-q">Q. 想在到期前拿到续期确认书，最晚何时申请？</p><p class="faq-a">A. 到期前35日之前（第15条第1款但书），新有效期自原到期日次日起3年。</p></div>
<div class="faq-item"><p class="faq-q">Q. 变更商号或代表人后补发，有效期会重新计算3年吗？</p><p class="faq-a">A. 不会。依第13条第4款沿用原有效期，合并时以持股比例较高企业为准；补发在7日内批准（第13条第2款）。</p></div>
<div class="faq-item"><p class="faq-q">Q. 有效期内负债比率超过1,000%会怎样？</p><p class="faq-a">A. 第3条第2款第4项将1,000%以上列为无申请资格，第17条第1款第3项将丧失资格列为必须撤销的事由。</p></div>
</div>

<div class="cta-block">
 <h3>Mainbiz即将到期或企业信息有变更？</h3>
 <p>유선행정사사무소会先查看确认书与相关资料，整理申请时间、诊断评价准备事项以及补发、承继条件。电话 02-363-2251，平日 09:30~17:30 KST。</p>
 <a href="/contact?utm_source=blog&utm_medium=cta&utm_campaign=mainbiz-renewal-and-validity">申请免费咨询</a>
</div>

<p class="author-block">유선행정사사무소（代表行政士 정유선）· 依据《中小企业技术创新促进法》（法律第21289号，2026年7月1日施行）、同法施行令（总统令第36699号，2026年9月22日施行）及中小风险企业部告示第2026-45号（2026年6月22日施行）原文撰写 · 最终审阅日 10月3日</p>`,
  },

  ja: {
    title: '韓国メインビズ認証の有効期間と更新 — 延長申請の時期・評価基準・選定取消事由',
    category: '企業認証',
    metaTitle: '韓国メインビズ認証の有効期間と更新 — 延長申請と取消事由',
    metaDescription: '韓国の中小ベンチャー企業部告示に基づき、メインビズ（経営革新型中小企業）確認書の有効期間3年、満了90日前から満了後30日までの延長申請、700点の評価基準、新しい有効期間の計算、変更時の再発給と選定取消事由を整理しました。',
    excerpt: 'メインビズ確認書は発給日から3年で効力が切れます。延長申請の時期、更新評価の内容、新しい有効期間の数え方、有効期間中の変更と選定取消事由を告示の原文に基づき整理しました。',
    content: `<div class="toc"><p>目次</p><ol><li>メインビズ確認の法的根拠と有効期間</li><li>有効期間延長の申請時期</li><li>延長評価 — 経営革新診断評価表と基準点</li><li>更新確認書の新しい有効期間の計算</li><li>有効期間中の変更 — 再発給と選定の承継</li><li>選定取消事由と事後管理</li><li>よくあるご質問</li></ol></div>
<p><strong>韓国のメインビズ（経営革新型中小企業、경영혁신형 중소기업）確認書の有効期間は、発給日から3年です。</strong>維持するには、満了の90日前から満了後30日以内に有効期間の延長を申請し、評価で700点以上を得る必要があります。延長評価は別の経営革新診断評価表で行われ、更新確認書をいつ受け取るかで新しい有効期間の始期が変わります。</p>
<p>本稿は「中小企業技術革新促進法」（중소기업 기술혁신 촉진법）、同法施行令、中小ベンチャー企業部告示「経営革新型中小企業（Main-Biz）制度運営規定」の原文に基づき、有効期間・延長・変更・取消に絞って整理しました。一般に「更新」と呼ばれる手続は、告示上は「有効期間の延長」です。</p>

<h2>メインビズ確認の法的根拠と有効期間</h2>
<p>同法第2条第4号の2は、経営革新型中小企業を第15条の3により長官が選定した企業と定義し、施行令第13条は長官が経営革新活動と成果に関する評価基準を公告して優秀な企業を選定するよう定めています。法律にも施行令にも有効期間の数字はなく、告示が定めています（告示第1条）。告示は改正が多いため、現行版（2026年6月22日発令の第2026-45号）を毎回確認しましょう。</p>
<div class="highlight-box">「Main-Biz制度運営規定」第12条第3項：有効期間は、確認書の発給日から3年となる日までとする。ただし、PMS認証を通じてメインビズに選定された企業の場合は、確認書の発給日からPMS認証の有効期間満了日までとする。</div>
<p>PMS認証（産業発展法に基づく生産性経営体制認証）3等級以上で認証後1年以内の企業は、韓国生産性本部の審査結果で選定を受けられ（第2条、第7条第4項）、その有効期間はPMS認証の期間に連動します。確認書は本社所在地の地方中小ベンチャー企業庁が発給し、メインビズネットと中小ベンチャー24で取得でき、英文・中文版もあります（第12条第1項・第2項・第4項）。</p>

<h2>有効期間延長の申請時期</h2>
<p>管理機関である（社）韓国経営革新中小企業協会は、満了日の90日前までに企業へ通知しなければなりません（第2条、第15条第1項）。企業はメインビズネットで一般現況・財務状態を再入力し、自己診断を行って申請します。管理機関は3日以内に評価機関を割り当てます。</p>
<table><thead><tr><th>時点</th><th>内容</th><th>根拠</th></tr></thead><tbody>
<tr><td>満了90日前まで</td><td>管理機関が満了を通知</td><td>告示第15条第1項</td></tr>
<tr><td>満了90日前から</td><td>延長申請が可能</td><td>告示第15条第1項</td></tr>
<tr><td>満了35日前まで</td><td>満了日前に確認を受けたい企業の申請期限</td><td>告示第15条第1項ただし書</td></tr>
<tr><td>満了日</td><td>既存確認書の有効期間が終了</td><td>告示第12条第3項</td></tr>
<tr><td>満了後30日以内</td><td>延長申請の最終期限</td><td>告示第15条第1項</td></tr>
</tbody></table>
<p>特に重要なのは「満了35日前まで」です。満了日前に確認を受けたい企業はこの日までに申請しなければなりません。申請から評価結果の登録まで21日、登録から更新発給まで7日が規定の処理期間です（第15条第3項・第4項）。通知が届かなかった場合に期間を延ばす規定はないため、満了日は自社で管理してください。PMSで選定された企業が期限内にPMS認証を維持していれば、PMS審査結果による再選定として処理されます（第15条第2項）。</p>

<h2>延長評価 — 経営革新診断評価表と基準点</h2>
<p>最初の選定は別表1の評価指標、延長は別表2の経営革新診断評価表で評価します（第6条）。別表2は経営革新インフラ・活動・成果の三つの戦略方向で構成され、製造業の再選定配点表ではそれぞれ350点、400点、250点、満点1,000点です。過去3年間の革新活動と、その成果が数字で残っているかが評価の中心です。</p>
<table><thead><tr><th>類型（別表2）</th><th>点数帯</th><th>延長の可否</th></tr></thead><tbody>
<tr><td>創造型</td><td>900点〜1,000点</td><td>可（700点以上）</td></tr>
<tr><td>成長型</td><td>800点〜899点</td><td>可（700点以上）</td></tr>
<tr><td>基本型</td><td>700点〜799点</td><td>可（700点以上）</td></tr>
<tr><td>基礎型（予備メインビズ企業）</td><td>600点〜699点</td><td>不可（700点未満）</td></tr>
</tbody></table>
<div class="highlight-box">「Main-Biz制度運営規定」第15条第4項：メインビズ選定を延長することができる対象企業は、第3項による評価結果700点以上の点数を獲得した企業とし、地方中小ベンチャー企業庁長は、評価機関が評価結果を登録した日から7日以内に確認書を更新発給しなければならない。</div>
<p>評価は信用保証基金、技術保証基金、韓国生産性本部のいずれかが行い、管理機関に委託することもできます（第2条、第15条第8項）。評価結果は申請日から21日以内に登録されますが、評価費用の未納や企業の延期要請で生じた期間は最大90日まで処理期間から除くことができます（第15条第3項、第10条第2項）。700点未満の場合は延長できない旨が通知されます（第15条第6項）。</p>
<p>第15条の3第3項が準用する同法第15条第4項により、企業は告示で定める評価費用を負担します。延長のための診断評価は40万ウォン（付加価値税別）です（告示第18条第1項第2号、2026年10月3日時点の現行告示基準）。評価機関に納める法定の評価費用で、告示改正により変わることがあります。</p>

<h2>更新確認書の新しい有効期間の計算</h2>
<p>延長後の3年は次のように起算されます（第15条第5項）。</p>
<ul>
<li><strong>既存の有効期間内に発給された場合</strong> — 既存の満了日の翌日から3年。早めに更新しても残りの期間は失われません。</li>
<li><strong>有効期間が終わった後に発給された場合</strong> — 発給日から3年。満了日と発給日の間に空白が生じます。</li>
</ul>
<p>たとえば満了日が3月31日なら、それ以前の発給では4月1日から3年、4月20日の発給では4月20日から3年となり、4月1日から4月20日までは有効な確認書がありません。確認書の有効性を要件とする支援事業や入札の加点では、この期間にメインビズを主張しにくくなります。</p>
<p>満了後30日を過ぎると延長手続は利用できません。それ以降の延長規定はないため、自己診断600点以上の後に現場評価を受ける新規選定手続に戻る必要があると読めます（別表1で評価、基準点700点。第7条第1項・第2項、第11条第1項）。更新確認書は最初の番号の前にRを付けて新規指定と区別し（第15条第7項）、延長の事実は地方庁がメインビズネットに登録します（第19条）。</p>

<h2>有効期間中の変更 — 再発給と選定の承継</h2>
<p>会社の情報が変わった場合は、別紙第4号様式で地方庁に再発給を申請できます（第13条第1項）。</p>
<table><thead><tr><th>変更の類型</th><th>すべきこと</th><th>根拠</th></tr></thead><tbody>
<tr><td>商号・所在地・代表者の変更（個人事業者の代表者変更を除く）</td><td>再発給申請</td><td>告示第13条第1項第1号</td></tr>
<tr><td>確認書の紛失・毀損</td><td>再発給申請</td><td>告示第13条第1項第2号</td></tr>
<tr><td>法人転換、買収・合併、統合、組織変更</td><td>選定承継のための再発給申請</td><td>告示第13条第1項第3号、第14条</td></tr>
</tbody></table>
<p>再発給は申請から7日以内に承認されますが（第13条第2項・第3項）、有効期間は延びません。従前の有効期間のままで、合併では持分比率の高い企業の有効期間によります（第13条第4項）。</p>
<p>承継には第14条の要件が必要です。個人企業の法人転換では、同一業種（韓国標準産業分類の小分類）の継続、主要生産施設の現物出資と資産・負債の承継、元代表者の常勤取締役としての経営参加、元代表者が株主であることをすべて満たす必要があります（第14条、第5条第1項）。吸収合併は存続企業がメインビズなら承継でき、そうでなければ業種の同一性、売上比率50%以上、常勤取締役の過半数参加が必要です（第14条、第5条第2項）。組織変更と家業相続控除後の代表者変更も承継事由です（第14条第5号・第6号）。再発給の申請期限は告示にありませんが、実態と異なる確認書は使いにくいため早めの整理をお勧めします。</p>

<h2>選定取消事由と事後管理</h2>
<p>長官は必要に応じて別表1の指標で運営状況を評価できます（第16条）。地方庁は次の事由で選定を取り消すことができ、第1号から第3号までは必ず取り消さなければなりません（第17条第1項）。</p>
<table><thead><tr><th>取消事由</th><th>性格</th><th>根拠</th></tr></thead><tbody>
<tr><td>自ら返納した場合</td><td>必要的取消</td><td>告示第17条第1項第1号</td></tr>
<tr><td>虚偽の実績で評価を受けた場合</td><td>必要的取消</td><td>告示第17条第1項第2号</td></tr>
<tr><td>第3条の申請資格を喪失した場合</td><td>必要的取消</td><td>告示第17条第1項第3号</td></tr>
<tr><td>休業・廃業、操業中断、金融規制、国税滞納等で経営が正常化されない場合</td><td>裁量的取消</td><td>告示第17条第1項第4号</td></tr>
<tr><td>事後管理の結果、選定基準に適合しなくなった場合</td><td>裁量的取消</td><td>告示第17条第1項第5号</td></tr>
</tbody></table>
<p>第3条第2項により、滞納情報等に登録中の企業、手形取引停止処分を受けた企業、破産・回生・清算中の企業（回生計画を正常に履行中の企業を除く）、直前事業年度末の負債比率1,000%以上または完全資本蚕食の企業は申請資格がありません（第1号〜第5号）。2026年6月22日の改正で第6号が新設され、最近3年以内の賃金未払事業主の名簿公開、産業災害の公表、公正取引関連法令違反による是正命令、補助金法違反による参加制限も対象になりました。</p>
<p>管理機関は毎月1回以上、取消事由の該当を確認して地方庁に通知し、取消後、地方庁は15日以内に確認書の返納を受けてメインビズネットで公告します（第17条第2項・第3項）。法令原文は<a href="https://www.law.go.kr/법령/중소기업기술혁신촉진법" target="_blank" rel="noopener">中小企業技術革新促進法</a>、<a href="https://www.law.go.kr/행정규칙/경영혁신형중소기업(Main-Biz)제도운영규정" target="_blank" rel="noopener">Main-Biz制度運営規定</a>で、申請は<a href="https://www.smes.go.kr/mainbiz" target="_blank" rel="noopener">メインビズネット</a>で行えます。費用は事案ごとに異なるため、無料相談時に正確にご案内します。</p>

<div class="faq-section"><h2>よくあるご質問</h2>
<div class="faq-item"><p class="faq-q">Q. 有効期間が切れると自動的に延長されますか。</p><p class="faq-a">A. いいえ。第15条第1項により申請が必要で、第15条第4項により700点以上を得てはじめて更新発給されます。</p></div>
<div class="faq-item"><p class="faq-q">Q. 有効期間が過ぎていても延長申請はできますか。</p><p class="faq-a">A. 満了後30日以内なら可能です（第15条第1項）。ただし第15条第5項により新しい有効期間は発給日から3年となり、空白期間が生じます。</p></div>
<div class="faq-item"><p class="faq-q">Q. 満了日前に更新確認書を受け取るには、いつまでに申請すればよいですか。</p><p class="faq-a">A. 満了35日前までです（第15条第1項ただし書）。この場合、新しい有効期間は既存の満了日の翌日から3年です。</p></div>
<div class="faq-item"><p class="faq-q">Q. 商号や代表者の変更で再発給を受けると、有効期間も新たに3年になりますか。</p><p class="faq-a">A. いいえ。第13条第4項により従前の有効期間のままで、合併では持分比率の高い企業の有効期間によります。承認は7日以内です（第13条第2項）。</p></div>
<div class="faq-item"><p class="faq-q">Q. 有効期間中に負債比率が1,000%を超えるとどうなりますか。</p><p class="faq-a">A. 第3条第2項第4号は1,000%以上を申請資格がない場合とし、第17条第1項第3号は資格喪失を必ず取り消すべき事由としています。</p></div>
</div>

<div class="cta-block">
 <h3>メインビズの満了日が近い、または会社情報が変わった方へ</h3>
 <p>確認書と関連資料を確認し、延長申請の時期、診断評価の準備項目、再発給・承継の要件をユソン行政士事務所が先に整理します。電話 02-363-2251、平日 09:30〜17:30 KST。</p>
 <a href="/contact?utm_source=blog&utm_medium=cta&utm_campaign=mainbiz-renewal-and-validity">無料相談を申し込む</a>
</div>

<p class="author-block">ユソン行政士事務所（代表行政士 チョン・ユソン）・「中小企業技術革新促進法」（法律第21289号、2026年7月1日施行）、同法施行令（大統領令第36699号、2026年9月22日施行）および中小ベンチャー企業部告示第2026-45号（2026年6月22日施行）の原文に基づき作成・最終確認日 10月3日</p>`,
  },
}
