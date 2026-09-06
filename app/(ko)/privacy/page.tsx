export const metadata = {
  title: '개인정보처리방침 | 비전행정사사무소',
}

export default function PrivacyPage() {
  return (
    <div style={{ paddingTop: '72px' }}>
      <section style={{ background: 'var(--navy)', padding: '4rem 0 3rem' }}>
        <div className="container">
          <h1 className="text-display" style={{ color: 'white' }}>개인정보처리방침</h1>
          <p style={{ color: 'rgba(255,255,255,0.55)', marginTop: '0.75rem', fontSize: '0.9rem' }}>
            시행일: 2025년 1월 1일
          </p>
        </div>
      </section>
      <section className="section bg-cream">
        <div className="container-narrow">
          <div style={{ background: 'var(--white)', borderRadius: '16px', padding: '3rem', border: '1px solid var(--border)', lineHeight: 1.9, color: 'var(--charcoal)' }}>
            {[
              {
                title: '1. 개인정보의 처리 목적',
                content: '비전행정사사무소(이하 "사무소")는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보 보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.\n\n• 상담 서비스 제공 및 문의 처리\n• 인허가 대행 서비스 계약 이행\n• 법령 의무 준수'
              },
              {
                title: '2. 처리하는 개인정보의 항목',
                content: '• 필수 항목: 이름, 연락처(전화번호)\n• 선택 항목: 이메일 주소, 사업자등록번호\n• 자동 수집 항목: IP 주소, 접속 로그, 쿠키'
              },
              {
                title: '3. 개인정보의 처리 및 보유 기간',
                content: '사무소는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의 받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.\n\n• 상담 문의 기록: 3년\n• 서비스 계약 관련 정보: 계약 종료 후 5년\n• 전자상거래법상 보존 기간에 따른 정보: 5년'
              },
              {
                title: '4. 개인정보의 제3자 제공',
                content: '사무소는 정보주체의 개인정보를 제1조(개인정보의 처리 목적)에서 명시한 범위 내에서만 처리하며, 정보주체의 동의, 법률의 특별한 규정 등 개인정보 보호법 제17조 및 제18조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.'
              },
              {
                title: '5. 정보주체의 권리·의무 및 행사방법',
                content: '정보주체는 사무소에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.\n\n• 개인정보 열람 요구\n• 오류 등이 있을 경우 정정 요구\n• 삭제 요구\n• 처리 정지 요구'
              },
              {
                title: '6. 개인정보 보호책임자',
                content: '사무소는 개인정보 처리에 관한 업무를 총괄하여 책임지고, 정보주체의 개인정보 관련 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.\n\n• 개인정보 보호책임자: 비전행정사사무소 대표\n• 이메일: 5000meter@gmail.com\n• 메신저: alexkorea'
              },
            ].map((section) => (
              <div key={section.title} style={{ marginBottom: '2.5rem' }}>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.125rem', color: 'var(--navy)', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border)' }}>
                  {section.title}
                </h2>
                <p style={{ fontSize: '0.9375rem', lineHeight: 1.9, whiteSpace: 'pre-line', color: 'var(--slate)' }}>
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
