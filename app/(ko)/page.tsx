import { FillImage, responsiveBase } from '@/components/ui/FillImage'
import Link from 'next/link'
import styles from './page.module.css'
import { getServiceCatalog } from '@/lib/services-catalog'
import TeamSection from '@/components/layout/TeamSection'
import QRSection from '@/components/layout/QRSection'

// `alternates` replaces the layout's whole object, so `languages` must be repeated here
// or the KO home ships without any hreflang.
export const metadata = {
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
  { value: '100+', label: '성공적인 인허가 지원' },
  { value: '50+', label: '다양한 업종 경험' },
  { value: '98%', label: '고객 만족도' },
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

// 서비스 목록 단일 정본 — lib/services-catalog.ts (하드코딩 금지, 2026-09-22).
// 보스 확정 대기분(DEPLOY_HOLD_SLUGS)은 카탈로그 단계에서 이미 제외돼 있다.
const featuredServices = getServiceCatalog('ko')

export default function HomePage() {
  return (
    <div className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <FillImage
            base="/images/hero-seoul-20260923"
            small={768}
            large={1024}
            alt="서울 도심 전경"
            sizes="100vw"
            priority
            objectPosition="center"
          />
          <div className={styles.heroOverlay} />
        </div>

        <div className={`container ${styles.heroContent}`}>
          <div className={styles.heroLeft}>
            <span className={`badge badge-white fade-up`}>인허가 전문 행정사사무소</span>
            <h1 className={`${styles.heroTitle} fade-up delay-1`}>
              복잡한 인허가,<br />
              <em>전문가에게</em> 맡기세요
            </h1>
            <p className={`${styles.heroDesc} fade-up delay-2`}>
              50개 이상 업종, 100건 이상의 인허가 처리 경험을 보유한<br />
              유선행정사사무소가 처음부터 끝까지 책임집니다.
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
          </div>

          <div className={styles.bentoGrid}>
            {featuredServices.map((svc, i) => (
              <Link
                prefetch={false}
                key={svc.slug}
                href={`/services/${svc.slug}`}
                className={`${styles.bentoCard} fade-up delay-${Math.min(i + 1, 6)}`}
              >
                <div className={styles.bentoImage}>
                  <FillImage
                    base={responsiveBase(svc.image)}
                    small={500}
                    large={800}
                    alt={svc.title}
                    sizes="(max-width: 900px) 100vw, 33vw"
                  />
                  <div className={styles.bentoOverlay} />
                </div>
                <div className={styles.bentoBody}>
                  <span className={`badge badge-white ${styles.bentoBadge}`}>{svc.category}</span>
                  <h3 className={styles.bentoTitle}>{svc.shortTitle}</h3>
                  <p className={styles.bentoDesc}>{svc.description.substring(0, 60)}...</p>
                  <span className={styles.bentoLink}>
                    자세히 보기
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="fade-up" style={{ textAlign: 'center', marginTop: '3rem', padding: '2rem', background: 'var(--white)', borderRadius: '16px', border: '1px solid var(--border)' }}>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.125rem, 2vw, 1.5rem)', fontWeight: 700, color: 'var(--navy)' }}>
              전문서비스 — 모든 인허가 분야를 한곳에서 해결합니다.
            </p>
          </div>
        </div>
      </section>

      {/* WHY AN ADMIN ATTORNEY */}
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
