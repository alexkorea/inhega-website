import Link from 'next/link'
import TeamSection from './TeamSection'

type Locale = 'ko' | 'en' | 'zh' | 'ja'

type ExpertiseItem = { title: string; desc: string }
type ContactRow = { label: string; value: string }
type StatItem = { value: string; label: string }

type LocaleData = {
  badge: string
  h1: string[]
  heroBody: string
  stats: StatItem[]
  greetingBadge: string
  greetingText: string[]
  greetingAuthor: string
  greetingTitle: string
  expertiseBadge: string
  expertiseH2: string
  expertiseItems: ExpertiseItem[]
  locationBadge: string
  locationH2: string
  contactRows: ContactRow[]
  ctaPrimary: string
  ctaSecondary: string
  contactHref: string
  quoteHref: string
}

const d: Record<Locale, LocaleData> = {
  ko: {
    badge: '회사소개',
    h1: ['인허가 전문,', '비전행정사사무소'],
    heroBody: '비전행정사사무소는 50개 이상의 업종, 100건 이상의 인허가 처리 경험을 보유한 전문 행정사 사무소입니다. 대표 이원중 행정사를 포함한 6인의 행정사와 3인의 실무 사무장들이 처음부터 끝까지 책임집니다.',
    stats: [
      { value: '100+', label: '성공적인 인허가 지원' },
      { value: '50+', label: '다양한 업종 경험' },
      { value: '98%', label: '고객 만족도' },
      { value: '24h', label: '평균 응답 시간' },
    ],
    greetingBadge: '대표 인사말',
    greetingText: [
      '사업을 시작하거나 확장하는 과정에서 인허가 문제로 어려움을 겪으시는 분들을 많이 만났습니다. 복잡한 법령, 까다로운 서류, 길고 불투명한 처리 과정 앞에서 막막함을 느끼시는 것은 당연한 일입니다.',
      '비전행정사사무소는 그 막막함을 해결하는 전문 파트너입니다. 저희는 단순히 서류를 제출하는 대행사가 아닙니다. 귀하의 사업 목표를 이해하고, 최적의 경로로 인허가를 완성하여 사업의 성공을 함께 만들어가겠습니다.',
    ],
    greetingAuthor: '대표 행정사 이원중',
    greetingTitle: '비전행정사사무소 대표 | 사업자등록번호 405-05-54079',
    expertiseBadge: '전문 분야',
    expertiseH2: '6대 핵심 전문 분야',
    expertiseItems: [
      { title: '물류·유통 인허가', desc: '국제물류주선업, 담배수입판매업, 전자담배 등' },
      { title: '금융·외환 등록', desc: '환전업 등록, 외국환 관련 신고' },
      { title: '숙박·관광 등록', desc: '민박업, 호스텔, 한옥체험업 일괄 처리' },
      { title: '식품·위생 허가', desc: 'HACCP, 식품제조업, 의약외품 허가' },
      { title: '기업인증 대행', desc: '벤처, 이노비즈, 여성기업, 연구소 설립' },
      { title: '공공조달 등록', desc: '나라장터 공급업체 등록 및 입찰 지원' },
    ],
    locationBadge: '오시는 길',
    locationH2: '찾아오시는 방법',
    contactRows: [
      { label: '주소', value: '(04614) 서울특별시 중구 퇴계로 324, 3층 (성우빌딩) | 동대문역사문화공원역 4번출구 10미터' },
      { label: '이메일', value: '5000meter@gmail.com' },
      { label: '메신저', value: '카카오·라인·위챗·왓츠앱 ID: alexkorea' },
      { label: '업무시간', value: '평일 09:30 – 17:30 (KST)\n토·일·공휴일 휴무' },
    ],
    ctaPrimary: '상담 문의',
    ctaSecondary: '견적 문의',
    contactHref: '/contact',
    quoteHref: '/quote',
  },
  en: {
    badge: 'About',
    h1: ['Visa & Licensing Specialists,', 'Vision Admin Office'],
    heroBody: 'Vision Admin Office holds expertise across 50+ industries and 100+ completed licensing cases. Chief Admin Agent Lee Won-jung leads a team of 6 licensed agents and 3 office managers who handle every case from start to finish.',
    stats: [
      { value: '100+', label: 'Successful Cases' },
      { value: '50+', label: 'Industries' },
      { value: '98%', label: 'Client Satisfaction' },
      { value: '24h', label: 'Avg Response Time' },
    ],
    greetingBadge: "Director's Message",
    greetingText: [
      "I've met many people who struggled with licensing issues while starting or expanding their business. Feeling overwhelmed by complex regulations, demanding paperwork, and long, opaque processes is completely understandable.",
      "Vision Admin Office is your dedicated partner to overcome those challenges. We are not simply a document-filing agency. We take the time to understand your business goals and find the most efficient path to complete your licensing — so your business can succeed.",
    ],
    greetingAuthor: 'Chief Admin Agent Lee Won-jung',
    greetingTitle: 'Vision Admin Office | Business No. 405-05-54079',
    expertiseBadge: 'Expertise',
    expertiseH2: '6 Core Specialty Areas',
    expertiseItems: [
      { title: 'Logistics & Distribution', desc: 'International freight forwarding, tobacco import/sales, e-cigarettes, etc.' },
      { title: 'Finance & Foreign Exchange', desc: 'Currency exchange registration, foreign exchange-related filings' },
      { title: 'Accommodation & Tourism', desc: 'Minbak, hostel, and Hanok experience business registration' },
      { title: 'Food & Hygiene Permits', desc: 'HACCP, food manufacturing, pharmaceutical quasi-drug approvals' },
      { title: 'Corporate Certification', desc: 'Venture, INNOBIZ, women-owned enterprise, research lab establishment' },
      { title: 'Public Procurement', desc: 'KONEPS vendor registration and bidding support' },
    ],
    locationBadge: 'Location',
    locationH2: 'How to Find Us',
    contactRows: [
      { label: 'Address', value: '3F Seongwoo Bldg, 324 Toegye-ro, Jung-gu, Seoul (04614) | 10m from Exit 4, Dongdaemun History & Culture Park Station' },
      { label: 'Email', value: '5000meter@gmail.com' },
      { label: 'Messenger', value: 'KakaoTalk · LINE · WeChat · WhatsApp ID: alexkorea' },
      { label: 'Hours', value: 'Mon–Fri 09:30–17:30 (KST)\nSat, Sun & Public Holidays: Closed' },
    ],
    ctaPrimary: 'Contact Us',
    ctaSecondary: 'Get a Quote',
    contactHref: '/en/contact',
    quoteHref: '/en/quote',
  },
  zh: {
    badge: '公司介绍',
    h1: ['许可证专业，', '比前行政士事务所'],
    heroBody: '比前行政士事务所拥有50个以上业种、100件以上许可证处理经验。代表李元中行政士及6名专业行政士与3名实务事务长，从始至终全程负责。',
    stats: [
      { value: '100+', label: '成功案例' },
      { value: '50+', label: '业种经验' },
      { value: '98%', label: '客户满意度' },
      { value: '24h', label: '平均响应时间' },
    ],
    greetingBadge: '代表致辞',
    greetingText: [
      '在创业或拓展业务的过程中，我们接待了许多因许可证问题而苦恼的客户。面对复杂的法规、繁琐的文件和漫长不透明的审批流程，感到迷茫是完全正常的。',
      '比前行政士事务所是帮助您克服这些困难的专业伙伴。我们不仅仅是一家文件代理机构，我们深入了解您的业务目标，寻找最优路径完成许可证申请，助力您的事业取得成功。',
    ],
    greetingAuthor: '代表行政士 李元中',
    greetingTitle: '比前行政士事务所 代表 | 营业执照号: 405-05-54079',
    expertiseBadge: '专业领域',
    expertiseH2: '六大核心专业领域',
    expertiseItems: [
      { title: '物流·流通许可', desc: '国际货运代理、烟草进口销售、电子烟等' },
      { title: '金融·外汇登记', desc: '外汇兑换业登记、外汇相关申报' },
      { title: '住宿·观光登记', desc: '民宿、青年旅舍、韩屋体验业一站式处理' },
      { title: '食品·卫生许可', desc: 'HACCP、食品制造业、准药品许可' },
      { title: '企业认证代理', desc: '创业企业、创新企业、女性企业、研究所设立' },
      { title: '政府采购登记', desc: '国家采购网供应商登记及投标支持' },
    ],
    locationBadge: '来访指南',
    locationH2: '如何前来',
    contactRows: [
      { label: '地址', value: '首尔特别市中区退溪路324号成宇大厦3层(04614) | 东大门历史文化公园站4号出口步行10米' },
      { label: '邮件', value: '5000meter@gmail.com' },
      { label: '即时通讯', value: 'KakaoTalk · LINE · WeChat · WhatsApp ID: alexkorea' },
      { label: '营业时间', value: '周一至周五 09:30–17:30 (KST)\n周六、周日及法定节假日休息' },
    ],
    ctaPrimary: '预约咨询',
    ctaSecondary: '询价',
    contactHref: '/zh/contact',
    quoteHref: '/zh/quote',
  },
  ja: {
    badge: '事務所案内',
    h1: ['許認可専門、', 'ビジョン行政書士事務所'],
    heroBody: 'ビジョン行政書士事務所は50以上の業種、100件以上の許認可処理経験を持つ専門行政書士事務所です。代表の李元重行政書士を含む6名の行政書士と3名の事務スタッフが最初から最後まで責任を持って対応いたします。',
    stats: [
      { value: '100+', label: '成功実績' },
      { value: '50+', label: '業種対応' },
      { value: '98%', label: '顧客満足度' },
      { value: '24h', label: '平均応答時間' },
    ],
    greetingBadge: '代表挨拶',
    greetingText: [
      '創業や事業拡張の過程で、許認可の問題にお困りの方を多く見てきました。複雑な法令、煩雑な書類、長くて不透明な手続きの前に途方に暮れるのは当然のことです。',
      'ビジョン行政書士事務所は、その不安を解消するための専門パートナーです。私たちは単なる書類提出代行業者ではありません。お客様のビジネス目標をしっかり理解した上で、最適なルートで許認可を完成させ、事業の成功を共に実現いたします。',
    ],
    greetingAuthor: '代表行政書士 李元重',
    greetingTitle: 'ビジョン行政書士事務所 代表 | 事業者番号: 405-05-54079',
    expertiseBadge: '専門分野',
    expertiseH2: '6つの核心専門分野',
    expertiseItems: [
      { title: '物流・流通許認可', desc: '国際物流取次業、たばこ輸入販売業、電子たばこ等' },
      { title: '金融・外国為替登録', desc: '両替業登録、外国為替関連申告' },
      { title: '宿泊・観光登録', desc: '民泊、ホステル、韓屋体験業の一括処理' },
      { title: '食品・衛生許可', desc: 'HACCP、食品製造業、医薬部外品許可' },
      { title: '企業認証代行', desc: 'ベンチャー、イノビズ、女性企業、研究所設立' },
      { title: '公共調達登録', desc: '国家調達システム（KONEPS）供給業者登録・入札支援' },
    ],
    locationBadge: 'アクセス',
    locationH2: 'お越しの方へ',
    contactRows: [
      { label: '住所', value: 'ソウル特別市中区退溪路324 成宇ビル3F (04614) | 東大門歴史文化公園駅4番出口 徒歩10m' },
      { label: 'メール', value: '5000meter@gmail.com' },
      { label: 'メッセンジャー', value: 'KakaoTalk · LINE · WeChat · WhatsApp ID: alexkorea' },
      { label: '営業時間', value: '月〜金 09:30–17:30（KST）\n土・日・祝日休み' },
    ],
    ctaPrimary: 'お問い合わせ',
    ctaSecondary: '見積もり依頼',
    contactHref: '/ja/contact',
    quoteHref: '/ja/quote',
  },
}

export default function AboutPage({ locale }: { locale: Locale }) {
  const s = d[locale]

  return (
    <div>
      {/* Hero */}
      <section style={{ background: 'var(--navy)', padding: '3rem 0 4rem', paddingTop: 'calc(72px + 3rem)' }}>
        <div className="container">
          <div className="about-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <span className="badge badge-white text-label fade-up">{s.badge}</span>
              <h1 className="text-display fade-up delay-1" style={{ color: 'white', marginTop: '1rem' }}>
                {s.h1[0]}<br />{s.h1[1]}
              </h1>
              <span className="accent-line fade-up delay-2" style={{ marginTop: '1.5rem', background: 'var(--burgundy)' }} />
              <p className="text-body-lg fade-up delay-2" style={{ color: 'rgba(255,255,255,0.65)', marginTop: '1.5rem' }}>
                {s.heroBody}
              </p>
            </div>
            <div className="fade-in delay-3 about-qr-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {[
                { src: '/images/qr/kakao.jpg', label: 'KakaoTalk' },
                { src: '/images/qr/line.jpg', label: 'LINE' },
                { src: '/images/qr/wechat.jpg', label: 'WeChat' },
                { src: '/images/qr/whatsapp.jpg', label: 'WhatsApp' },
              ].map((qr) => (
                <div key={qr.label} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '12px', padding: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
                  <img src={qr.src} alt={qr.label + ' QR'} style={{ width: '90px', height: '90px', borderRadius: '8px', objectFit: 'cover' }} />
                  <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'rgba(255,255,255,0.75)' }}>{qr.label}</span>
                </div>
              ))}
              <p style={{ gridColumn: '1/-1', fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', textAlign: 'center' }}>ID: alexkorea</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: 'var(--burgundy)', padding: '3rem 0' }}>
        <div className="container">
          <div className="about-stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
            {s.stats.map((st) => (
              <div key={st.label} className="fade-up" style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.25rem', fontWeight: 700, color: 'white', lineHeight: 1 }}>{st.value}</div>
                <div style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.65)', marginTop: '0.5rem' }}>{st.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Greeting */}
      <section className="section bg-cream">
        <div className="container-narrow">
          <div className="fade-up" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="badge badge-burgundy text-label">{s.greetingBadge}</span>
          </div>
          <blockquote className="fade-up delay-1" style={{
            background: 'var(--white)', borderRadius: '20px', padding: '3rem',
            border: '1px solid var(--border)', position: 'relative',
            borderLeft: '4px solid var(--burgundy)',
          }}>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.0625rem', lineHeight: 2, color: 'var(--charcoal)', marginBottom: '2rem' }}>
              {s.greetingText[0]}<br /><br />{s.greetingText[1]}
            </p>
            <footer style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <img src="/images/team/leewj.jpg" alt={s.greetingAuthor} style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover' }} />
              <div>
                <p style={{ fontWeight: 700, color: 'var(--charcoal)' }}>{s.greetingAuthor}</p>
                <p style={{ fontSize: '0.875rem', color: 'var(--slate)' }}>{s.greetingTitle}</p>
              </div>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Team */}
      <TeamSection locale={locale} />

      {/* Expertise */}
      <section className="section bg-cream">
        <div className="container">
          <div className="section-header section-header-centered fade-up">
            <span className="badge badge-burgundy text-label">{s.expertiseBadge}</span>
            <h2 className="text-h2" style={{ marginTop: '0.75rem' }}>{s.expertiseH2}</h2>
            <span className="accent-line" style={{ marginInline: 'auto', marginTop: '1rem' }} />
          </div>
          <div className="about-expertise-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {s.expertiseItems.map((e, i) => (
              <div key={e.title} className={`fade-up delay-${i + 1}`} style={{
                background: 'var(--white)', borderRadius: '16px', padding: '2rem',
                border: '1px solid var(--border)', borderTop: '3px solid var(--burgundy)',
              }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.0625rem', color: 'var(--navy)', marginBottom: '0.75rem' }}>{e.title}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--slate)', lineHeight: 1.6 }}>{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="section bg-navy">
        <div className="container">
          <div className="about-location-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div className="fade-up">
              <span className="badge badge-white text-label">{s.locationBadge}</span>
              <h2 className="text-h2" style={{ color: 'white', marginTop: '1rem' }}>{s.locationH2}</h2>
              <span className="accent-line" style={{ background: 'var(--burgundy)', marginTop: '1rem' }} />
              <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {s.contactRows.map((c) => (
                  <div key={c.label} style={{ display: 'flex', gap: '1rem' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', color: 'rgba(255,255,255,0.4)', minWidth: '80px', paddingTop: '2px', textTransform: 'uppercase' }}>{c.label}</span>
                    <span style={{ fontSize: '0.9375rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, whiteSpace: 'pre-line' }}>{c.value}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem' }}>
                <Link href={s.contactHref} className="btn btn-primary">{s.ctaPrimary}</Link>
                <Link href={s.quoteHref} className="btn btn-outline-white">{s.ctaSecondary}</Link>
              </div>
            </div>
            <div className="fade-in delay-2" style={{ borderRadius: '16px', overflow: 'hidden', height: '320px' }}>
              <iframe
                src={`https://maps.google.com/maps?q=37.5641,126.9986&hl=${locale === 'ko' ? 'ko' : locale === 'zh' ? 'zh-CN' : locale === 'ja' ? 'ja' : 'en'}&output=embed&z=17`}
                width="100%"
                height="320"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Vision Admin Office"
              />
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .about-hero-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .about-location-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .about-expertise-grid { grid-template-columns: 1fr !important; }
          .about-stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .about-qr-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </div>
  )
}
