import { FillImage } from '@/components/ui/FillImage'
import Link from 'next/link'
import styles from './page.module.css'
import { getDirectoryCount } from '@/lib/service-directory'
import ServiceDirectory from '@/components/services/ServiceDirectory'
import TeamSection from '@/components/layout/TeamSection'
import QRSection from '@/components/layout/QRSection'

// `alternates` replaces the layout's whole object, so `languages` must be repeated here
// or the KO home ships without any hreflang.
// I5(2026-10-03) — 홈 title·description. 레이아웃 기본값을 홈에서만 덮는다.
// INH-LAYOUT(10-05, 보스 msg 2273·2275): 히어로·title 의 외국인 한정 문구를 '인허가 전문 행정사'로, ko 는 고객을 외국인으로 좁히지 않는다.
const HOME_TITLE = '인허가 전문 행정사 — 인허가 절차·서류 | 유선행정사사무소'
const HOME_DESC = '위치기반서비스사업, 국제물류주선업, 건축물용도변경, 기업부설연구소, 전자담배수입허가, 비영리사단법인, 지정스포츠클럽, 호스텔업 등 사업 인허가·등록·신고를 행정사가 업종별 절차와 서류 기준으로 안내하고 접수까지 전담합니다. 한·영·중·일 상담이 가능합니다.'

// 홈 FAQ — 화면 FAQ 와 FAQPage JSON-LD 는 이 배열 하나에서 나온다(레이아웃 전역 FAQ 는 제거됨).
const homeFaqs = [
  { q: '사업자등록 전에 인허가를 먼저 받아야 하나요?', a: '업종에 따라 인허가·등록·신고 시점이 달라 사업자등록과의 선후가 다릅니다. 업종별 서비스 페이지의 등록 절차를 확인한 뒤 순서를 정합니다.' },
  { q: '영업 양도양수나 영업자 지위승계도 행정사가 신고하나요?', a: '업종마다 지위승계 신고 절차가 있으며 서류 작성과 접수는 대행할 수 있습니다. 승계 기한과 서류는 업종 법령에 따라 달라 해당 서비스 페이지에서 확인합니다.' },
  { q: '행정사에게 인허가를 맡기면 어디까지 해 주나요?', a: '업무범위는 서류 작성·접수 대행과 보완 요청 대응까지이며, 소송·행정심판 대리는 행정사 업무 범위 밖입니다. 업종별 요건 검토와 서류 작성, 관청 접수와 보완 요청 대응을 맡습니다.' },
]

const homeFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: homeFaqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}

export const metadata = {
  title: HOME_TITLE,
  description: HOME_DESC,
  openGraph: {
    title: HOME_TITLE,
    description: HOME_DESC,
    url: 'https://inhega.co.kr',
    siteName: '유선행정사사무소',
    locale: 'ko_KR',
    type: 'website',
    images: [{ url: '/images/hero-seoul.png', width: 1200, height: 630, alt: '인허가 행정사 유선행정사사무소' }],
  },
  twitter: { card: 'summary_large_image', title: HOME_TITLE, description: HOME_DESC, images: ['/images/hero-seoul.png'] },
  alternates: {
    canonical: 'https://inhega.co.kr',
    languages: {
      'ko': 'https://inhega.co.kr',
      'en': 'https://inhega.co.kr/en',
      'zh': 'https://inhega.co.kr/zh',
      'ja': 'https://inhega.co.kr/ja',
      'x-default': 'https://inhega.co.kr',
    },
  },
}

const stats = [
  { value: '24h', label: '평균 응답 시간' },
]

const process = [
  { num: '01', title: '초기 상담', desc: '사업 현황과 필요 인허가를 정확히 파악합니다. 초기 상담은 무료입니다.' },
  { num: '02', title: '서류 준비', desc: '필요 서류 목록을 제공하고 작성·준비를 전문가가 도와드립니다.' },
  { num: '03', title: '접수 대행', desc: '관할 관청에 서류를 제출하고 처리 과정을 실시간 모니터링합니다.' },
  { num: '04', title: '심사 대응', desc: '보완 요청·추가 서류 등 심사 과정의 모든 대응을 행정사가 처리합니다.' },
  { num: '05', title: '허가 완료', desc: '인허가 완료 후 등록증 전달 및 사후 관리·갱신 알림 서비스를 제공합니다.' },
]

// inhega.com/index 「왜 인허가 업무에 행정사의 도움이 필요할까요?」 이식 — 원문 4블록 그대로
const whyAttorney = [
  { title: '복잡한 법령과 절차', desc: '업종별로 상이한 법적 요건과 제출 서류를 정확히 파악해야 합니다.' },
  { title: '행정기관의 실무 대응', desc: '보완 요청, 현장 확인 등 관할기관 대응에는 실무 경험이 중요합니다.' },
  { title: '시간과 비용 절감', desc: '오류 없는 서류 준비와 전략적 접근으로 불필요한 시간과 비용을 줄일 수 있습니다.' },
  { title: '허가 실패 리스크 예방', desc: '경험이 부족하면 반려, 지연, 거절 등의 리스크가 높아집니다. 전문행정사의 검토는 곧 안정적인 허가의 시작입니다.' },
]

// 서비스 수 = 기존 24종 + 신규 업종 페이지(0949). "N종" 문구는 전부 이 값 — 하드코딩 금지.
const serviceCount = getDirectoryCount('ko')

export default function HomePage() {
  return (
    <div className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqJsonLd) }} />
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          {/* 어두운 오버레이(rgba(11,31,58,0.72))를 이미지에 미리 합성했다 — 보이는 결과는
              같고 전송량만 95KB -> 39KB 다(LCP 임계경로). 그래서 heroOverlay div 는 없다.
              .hero 의 background-color 가 같은 색이라 이미지가 못 와도 글자는 읽힌다.
              en/ja/zh 는 그라데이션 오버레이라 합성 대상이 아니다(app/page.module.css). */}
          <FillImage
            base="/images/hero-seoul-ko-flat-20260926"
            small={768}
            large={1024}
            alt="서울 도심 전경"
            sizes="100vw"
            priority
            objectPosition="center"
          />
        </div>

        <div className={`container ${styles.heroContent}`}>
          <div className={styles.heroLeft}>
            <span className={`badge badge-white fade-up`}>인허가 전문 행정사사무소</span>
            <h1 className={`${styles.heroTitle} fade-up delay-1`}>
              복잡한 인허가,<br />
              <em>전문가에게</em> 맡기세요
              <span style={{ display: 'block', fontSize: '0.42em', fontWeight: 600, marginTop: '0.75rem', opacity: 0.85 }}>{' — '}인허가 전문 행정사</span>
            </h1>
            {/* I5: 첫 문단 = meta description (같은 문장) */}
            <p className={`${styles.heroDesc} fade-up delay-2`}>
              {HOME_DESC}
            </p>
            <div className={`${styles.heroBtns} fade-up delay-3`}>
              <Link prefetch={false} href="/quote" className="btn btn-primary btn-lg">
                무료 견적 문의
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <Link prefetch={false} href="/contact" className="btn btn-outline-white btn-lg">
                상담 신청
              </Link>
            </div>
          </div>

          <div className={`${styles.heroStats} fade-in delay-4`}>
            {stats.map((s) => (
              <div key={s.label} className={styles.statItem}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.scrollIndicator}>
          <span>스크롤</span>
          <div className={styles.scrollLine} />
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className={styles.trustStrip}>
        <div className="container">
          <div className={styles.trustItems}>
            {[
              { icon: '✓', text: '행정사 공식 등록' },
              { icon: '✓', text: '정부 기관 직접 접수' },
              { icon: '✓', text: '적법 절차 준수' },
              { icon: '✓', text: '처리 현황 실시간 안내' },
              { icon: '✓', text: '처리 결과 사후 관리' },
            ].map((t) => (
              <div key={t.text} className={styles.trustItem}>
                <span className={styles.trustIcon}>{t.icon}</span>
                <span>{t.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QR SECTION */}
      <QRSection locale="ko" />

      {/* TEAM SECTION */}
      <TeamSection locale="ko" />

      {/* SERVICES BENTO */}
      <section className={`section bg-cream`}>
        <div className="container">
          <div className={`section-header fade-up`}>
            <span className="badge badge-navy text-label">전문 서비스</span>
            <h2 className={`text-h2 ${styles.sectionTitle}`}>
              모든 인허가 분야를<br />한 곳에서 해결합니다
            </h2>
            <span className="accent-line" style={{ marginTop: '1rem' }} />
            <p className="text-body-lg" style={{ marginTop: '1rem' }}>
              {serviceCount}종 인허가 업무를 분야별로 확인하고 업종 페이지로 이동하세요.{' '}
              <Link prefetch={false} href="/services" style={{ color: 'var(--navy)', fontWeight: 600, textDecoration: 'underline' }}>전체 서비스 보기</Link>
            </p>
          </div>

          {/* 0949 — 기존 24종 + 신규 업종 전부, 분야 소제목 + 사진 카드 전부 펼침(INH-RESTORE). 정본 lib/service-directory.ts */}
          <ServiceDirectory locale="ko" mode="cards" />

          <div className="fade-up" style={{ textAlign: 'center', marginTop: '3rem', padding: '2rem', background: 'var(--white)', borderRadius: '16px', border: '1px solid var(--border)' }}>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.125rem, 2vw, 1.5rem)', fontWeight: 700, color: 'var(--navy)' }}>
              전문서비스 — 모든 인허가 분야를 한곳에서 해결합니다.
            </p>
          </div>
        </div>
      </section>

      {/* WHY AN ADMIN AGENT */}
      <section className={`section bg-white`}>
        <div className="container">
          <div className={`section-header section-header-centered fade-up`}>
            <span className="badge badge-navy text-label">행정사가 필요한 이유</span>
            <h2 className={`text-h2`}>
              왜 인허가 업무에<br />행정사의 도움이 필요할까요?
            </h2>
            <span className="accent-line accent-line-wide" style={{ marginInline: 'auto', marginTop: '1rem' }} />
          </div>

          <div className={styles.needGrid}>
            {whyAttorney.map((w, i) => (
              <div key={w.title} className={`${styles.needCard} fade-up delay-${i + 1}`}>
                <h3 className={styles.needTitle}>{w.title}</h3>
                <p className={styles.needDesc}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* I5 신설 — 기존 홈·FAQ 문장 인용 */}
      <section className={`section bg-cream`}>
        <div className="container">
          <div style={{ maxWidth: '760px' }}>
            <h2 className={`text-h2 fade-up`}>인허가가 필요한 업종과 사업자등록 전 인허가, 영업자 지위승계·양도양수</h2>
            <span className="accent-line" style={{ marginTop: '1rem' }} />
            <p className={`text-body-lg`} style={{ marginTop: '1rem' }}>업종에 따라 인허가·등록·신고 시점이 달라 사업자등록과의 선후가 다릅니다. 업종별 서비스 페이지의 등록 절차를 확인한 뒤 순서를 정합니다.</p>
            <p className={`text-body-lg`} style={{ marginTop: '1rem' }}>업종마다 지위승계 신고 절차가 있으며 서류 작성과 접수는 대행할 수 있습니다. 승계 기한과 서류는 업종 법령에 따라 달라 해당 서비스 페이지에서 확인합니다.</p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className={`section bg-navy`}>
        <div className="container">
          <div className={`section-header section-header-centered fade-up`}>
            <span className="badge badge-white text-label">진행 과정</span>
            <h2 className={`text-h2 ${styles.sectionTitleWhite}`}>
              5단계로 완성되는<br />인허가 처리
            </h2>
            <span className="accent-line accent-line-wide" style={{ marginInline: 'auto', marginTop: '1rem' }} />
          </div>

          <div className={styles.processGrid}>
            {process.map((p, i) => (
              <div key={p.num} className={`${styles.processCard} fade-up delay-${i + 1}`}>
                <div className={styles.processNum}>{p.num}</div>
                <h3 className={styles.processTitle}>{p.title}</h3>
                <p className={styles.processDesc}>{p.desc}</p>
                {i < process.length - 1 && <div className={styles.processArrow} />}
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* I5 신설 — 기존 홈·FAQ 문장 인용 */}
      <section className={`section bg-cream`}>
        <div className="container">
          <div style={{ maxWidth: '760px' }}>
            <h2 className={`text-h2 fade-up`}>보완 요청 대응과 업종 추가 인허가</h2>
            <span className="accent-line" style={{ marginTop: '1rem' }} />
            <p className={`text-body-lg`} style={{ marginTop: '1rem' }}>보완 요청, 현장 확인 등 관할기관 대응에는 실무 경험이 중요합니다. 보완 요청·추가 서류 등 심사 과정의 모든 대응을 행정사가 처리합니다.</p>
            <p className={`text-body-lg`} style={{ marginTop: '1rem' }}>업무범위는 서류 작성·접수 대행과 보완 요청 대응까지이며, 소송·행정심판 대리는 행정사 업무 범위 밖입니다.</p>
            <p className={`text-body-lg`} style={{ marginTop: '1rem' }}>{serviceCount}종 업종 목록에서 해당 업종을 찾아 허가·등록·신고 구분과 요건을 확인하고, 목록에 없으면 상담으로 확인합니다.</p>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className={`section bg-white`}>
        <div className="container">
          <div style={{ maxWidth: '720px' }}>
            <span className="badge badge-burgundy text-label fade-up">왜 유선행정사사무소인가</span>
            <h2 className={`text-h2 fade-up delay-1`} style={{ marginTop: '1rem' }}>
              믿을 수 있는<br />전문가가 필요합니다
            </h2>
            <span className="accent-line fade-up delay-2" style={{ marginTop: '1rem' }} />
            <p className={`text-body-lg fade-up delay-2`} style={{ marginTop: '1.5rem' }}>
              단순한 서류 대행이 아닙니다. 사업의 성패를 가르는 인허가를
              처음부터 끝까지 책임지는 파트너가 되겠습니다.
            </p>
            <ul className={`${styles.whyList} fade-up delay-3`}>
              {[
                '행정사법에 따른 공식 등록 사무소',
                '담당 행정사 1:1 전담 배정',
                '처리 현황 수시 보고',
                '신청 후 결과까지 책임지는 대응',
                '사후 관리 및 갱신 알림 서비스',
              ].map((item) => (
                <li key={item} className={styles.whyItem}>
                  <span className={styles.whyCheck}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className={`fade-up delay-4`} style={{ marginTop: '2rem' }}>
              <Link prefetch={false} href="/about" className="btn btn-primary">회사 소개 보기</Link>
            </div>
          </div>
        </div>
      </section>


      {/* FAQ — homeFaqs 하나로 화면과 JSON-LD 를 같이 만든다 */}
      <section className={`section bg-cream`}>
        <div className="container" style={{ maxWidth: '880px' }}>
          <span className="badge badge-navy text-label">자주 묻는 질문</span>
          <h2 className={`text-h2`} style={{ marginTop: '0.75rem' }}>FAQ</h2>
          <span className="accent-line" style={{ marginTop: '0.75rem' }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' }}>
            {homeFaqs.map((f) => (
              <div key={f.q} style={{ background: 'var(--white)', borderRadius: '12px', padding: '1.5rem', border: '1px solid var(--border)' }}>
                <p style={{ fontWeight: 700, color: 'var(--navy)', marginBottom: '0.625rem' }}>Q. {f.q}</p>
                <p style={{ fontSize: '0.9rem', color: 'var(--slate)', lineHeight: 1.7 }}>A. {f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className={styles.ctaBanner}>
        <div className="container">
          <div className={`${styles.ctaInner} fade-up`}>
            <div className={styles.ctaText}>
              <h2 className={styles.ctaTitle}>지금 바로 시작하세요</h2>
              <p className={styles.ctaDesc}>첫 상담은 무료입니다. 사업 현황을 알려주시면 최적의 방법을 안내해 드립니다.</p>
            </div>
            <div className={styles.ctaBtns}>
              <Link prefetch={false} href="/quote" className="btn btn-primary btn-lg">무료 견적 받기</Link>
              <Link prefetch={false} href="/contact" className="btn btn-outline-white btn-lg">상담 예약하기</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
