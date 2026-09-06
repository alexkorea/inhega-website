export const metadata = {
  title: '이용약관 | 비전행정사사무소',
}

export default function TermsPage() {
  return (
    <div style={{ paddingTop: '72px' }}>
      <section style={{ background: 'var(--navy)', padding: '4rem 0 3rem' }}>
        <div className="container">
          <h1 className="text-display" style={{ color: 'white' }}>이용약관</h1>
          <p style={{ color: 'rgba(255,255,255,0.55)', marginTop: '0.75rem', fontSize: '0.9rem' }}>
            시행일: 2025년 1월 1일
          </p>
        </div>
      </section>
      <section className="section bg-cream">
        <div className="container-narrow">
          <div style={{ background: 'var(--white)', borderRadius: '16px', padding: '3rem', border: '1px solid var(--border)', lineHeight: 1.9 }}>
            {[
              { title: '제1조 (목적)', content: '이 약관은 비전행정사사무소(이하 "사무소")가 제공하는 인허가 행정 대행 서비스 및 홈페이지 이용에 관한 조건과 절차, 사무소와 이용자 간의 권리·의무 및 책임 사항을 규정함을 목적으로 합니다.' },
              { title: '제2조 (약관의 효력 및 변경)', content: '이 약관은 홈페이지에 게시하여 공시함으로써 효력이 발생합니다. 사무소는 합리적인 사유가 발생할 경우 관련 법령에 위배되지 않는 범위 내에서 약관을 변경할 수 있으며, 변경된 약관은 공지사항을 통해 공시합니다.' },
              { title: '제3조 (서비스의 내용)', content: '사무소가 제공하는 서비스는 다음과 같습니다.\n\n1. 국제물류주선업 등록 대행\n2. 환전업 등록 대행\n3. 각종 숙박업 등록 대행\n4. 식품 인허가 대행\n5. 기업인증 지원\n6. 기타 행정 관련 대행 업무' },
              { title: '제4조 (서비스 이용)', content: '이용자는 홈페이지에서 상담 문의 및 견적 신청을 할 수 있으며, 사무소는 이용자의 요청에 대해 신속하고 성실하게 응답할 의무를 가집니다. 단, 천재지변, 정보통신 장애 등 불가항력적인 사유로 서비스 제공이 불가한 경우에는 그 책임을 지지 않습니다.' },
              { title: '제5조 (면책 조항)', content: '사무소는 다음 각 호에 해당하는 경우 서비스 제공의 의무를 면합니다.\n\n1. 이용자가 제공한 정보가 허위인 경우\n2. 관련 법령의 변경으로 인해 인허가가 불가능해진 경우\n3. 이용자의 귀책 사유로 인한 서비스 지연 또는 불가 경우\n4. 천재지변 등 불가항력적 사유' },
              { title: '제6조 (준거법 및 관할)', content: '이 약관은 대한민국 법령에 따라 규율 및 해석됩니다. 사무소와 이용자 간에 발생한 분쟁에 관한 소송은 민사소송법상의 관할 법원을 제1심 관할 법원으로 합니다.' },
            ].map((s) => (
              <div key={s.title} style={{ marginBottom: '2.5rem' }}>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.125rem', color: 'var(--navy)', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border)' }}>
                  {s.title}
                </h2>
                <p style={{ fontSize: '0.9375rem', lineHeight: 1.9, whiteSpace: 'pre-line', color: 'var(--slate)' }}>
                  {s.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
