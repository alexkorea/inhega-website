import Image from 'next/image'
import Link from 'next/link'
import { EmailOff } from '@/components/ui/EmailOff'

export const metadata = {
  title: '회사소개 | 인허가 전문 행정사 — 유선행정사사무소',
  description: '유선행정사사무소. 대표 정유선 행정사 및 전문 팀이 처음부터 끝까지 책임집니다.',
  alternates: {
    canonical: 'https://inhega.co.kr/about',
    languages: {
      'ko': 'https://inhega.co.kr/about',
      'en': 'https://inhega.co.kr/en/about',
      'zh': 'https://inhega.co.kr/zh/about',
      'ja': 'https://inhega.co.kr/ja/about',
      'x-default': 'https://inhega.co.kr/about',
    },
  },
  openGraph: {
    title: '회사소개 | 인허가 전문 행정사 — 유선행정사사무소',
    description: '유선행정사사무소. 3인의 행정사가 처음부터 끝까지 책임집니다.',
    url: 'https://inhega.co.kr/about',
    images: [{ url: '/images/hero-seoul.png', width: 1200, height: 630, alt: '유선행정사사무소 팀' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: '회사소개 | 인허가 전문 행정사 — 유선행정사사무소', images: ['/images/hero-seoul.png'] },
}

const ABOUT_FAQ_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "외국인도 사업 인허가를 받을 수 있나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "외국인도 적법한 체류 자격과 사업자등록을 완료하면 대부분의 인허가를 받을 수 있습니다. 다만 업종에 따라 외국인 제한이 있어 사전 확인이 필요합니다."
      }
    },
    {
      "@type": "Question",
      "name": "행정사 인허가 비용은 어떻게 안내하나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "법정 수수료는 업종별 페이지에서, 대행 보수는 업종 복잡도와 서류 범위에 따라 달라 상담 후 안내합니다."
      }
    }
  ]
}

const team = [
  { name: '정유선', title: '대표행정사', specialty: '출입국 / 인허가전문', lang: 'KR · EN', photo: '/images/team/jungyus.webp' },
  { name: '정희정', title: '행정사', specialty: '출입국 / 인허가전문', lang: 'KR · EN', photo: '/images/team/junghj.webp' },
  { name: '김정은', title: '행정사', specialty: '출입국 / 인허가전문', lang: 'KR · EN · 中文 · 日本語', photo: '/images/team/kimje.webp' },
  { name: '이원중', title: '행정사', specialty: '출입국 / 인허가전문', lang: 'KR · EN · 中文 · 日本語', photo: '/images/team/leewj.webp' },
  { name: '백승수', title: '사무장', specialty: '은행 업무 담당', lang: 'KR · EN', photo: '/images/team/baekss.webp' },
  { name: '김영주', title: '실장', specialty: '사업자등록증 업무', lang: 'KR · EN', photo: '/images/team/kimyj.webp' },
  { name: '허경', title: '실장', specialty: '중국어 통역·번역', lang: '中文 · KR · EN', photo: '/images/team/hukyung.webp' },
]

const teamAdmins = team.filter((m) => m.title.includes('행정사'))
const teamStaff = team.filter((m) => !m.title.includes('행정사'))

const expertise = [
  { title: '물류·유통 인허가', desc: '국제물류주선업, 담배수입판매업, 전자담배 등' },
  { title: '금융·외환 등록', desc: '환전업 등록, 외국환 관련 신고' },
  { title: '숙박·관광 등록', desc: '민박업, 호스텔, 한옥체험업 일괄 처리' },
  { title: '식품·위생 허가', desc: 'HACCP, 식품제조업, 의약외품 허가' },
  { title: '기업인증 대행', desc: '벤처, 이노비즈, 여성기업, 연구소 설립' },
  { title: '공공조달 등록', desc: '나라장터 공급업체 등록 및 입찰 지원' },
]

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section style={{ background: 'var(--navy)', padding: '1.75rem 0 var(--section-py-md)', paddingTop: 'calc(72px + 1.75rem)' }}>
        <div className="container">
          <div className="about-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem', alignItems: 'center' }}>
            <div>
              <span className="badge badge-white text-label fade-up">회사소개</span>
              <h1 className="text-display fade-up delay-1" style={{ color: 'white', marginTop: '1rem' }}>
                인허가 전문 행정사,<br />유선행정사사무소
              </h1>
              <span className="accent-line fade-up delay-2" style={{ marginTop: '1.5rem', background: 'var(--burgundy)' }} />
              <p className="text-body-lg fade-up delay-2" style={{ color: 'rgba(255,255,255,0.65)', marginTop: '1.5rem' }}>
                유선행정사사무소는 업종별 사업 인허가를 처음부터 끝까지 맡는 전문 행정사 사무소입니다. 대표 정유선 행정사를 포함한 4인의 행정사와 3인의 실무 사무장이 6대 핵심 분야(물류·유통, 금융·외환, 숙박·관광, 식품·위생, 기업인증, 공공조달)의 인허가를 지원합니다.
              </p>
            </div>
            <div className="fade-in delay-3" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {[
                { src: '/images/qr/kakao.jpg', label: '카카오톡' },
                { src: '/images/qr/line.jpg', label: '라인' },
                { src: '/images/qr/wechat.jpg', label: '위챗' },
                { src: '/images/qr/whatsapp.jpg', label: '왓츠앱' },
              ].map((qr) => (
                <div key={qr.label} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '12px', padding: '1.25rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
                  <img src={qr.src} alt={qr.label + ' QR'} style={{ width: '110px', height: '110px', borderRadius: '8px', objectFit: 'cover' }} />
                  <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'rgba(255,255,255,0.75)' }}>{qr.label}</span>
                </div>
              ))}
              <p style={{ gridColumn: '1/-1', fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', textAlign: 'center' }}>ID: alexkorea</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: 'var(--burgundy)', padding: 'var(--section-py-md) 0' }}>
        <div className="container">
          <div className="about-stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
            {[
              { value: '24h', label: '평균 응답 시간' },
            ].map((s) => (
              <div key={s.label} className="fade-up" style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.25rem', fontWeight: 700, color: 'white', lineHeight: 1 }}>
                  {s.value}
                </div>
                <div style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.65)', marginTop: '0.5rem' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Greeting */}
      <section className="section bg-cream">
        <div className="container-narrow">
          <div className="fade-up" style={{ textAlign: 'center', marginBottom: 'var(--section-head-gap)' }}>
            <span className="badge badge-burgundy text-label">대표 인사말</span>
          </div>
          <blockquote className="fade-up delay-1" style={{
            background: 'var(--white)', borderRadius: '20px', padding: '1.75rem',
            border: '1px solid var(--border)', position: 'relative',
            borderLeft: '4px solid var(--burgundy)'
          }}>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.0625rem', lineHeight: 2, color: 'var(--charcoal)', marginBottom: '2rem' }}>
              사업을 시작하거나 확장하는 과정에서 인허가 문제로 어려움을 겪으시는 분들을 많이 만났습니다.
              복잡한 법령, 까다로운 서류, 길고 불투명한 처리 과정 앞에서 막막함을 느끼시는 것은 당연한 일입니다.
              <br /><br />
              유선행정사사무소는 그 막막함을 해결하는 전문 파트너입니다. 저희는 단순히 서류를 제출하는 대행사가 아닙니다.
              귀하의 사업 목표를 이해하고, 최적의 경로로 인허가를 완성하여 사업의 성공을 함께 만들어가겠습니다.
            </p>
            <footer style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <img src="/images/team/jungyus.webp" alt="정유선 대표 행정사" style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover' }} />
              <div>
                <p style={{ fontWeight: 700, color: 'var(--charcoal)' }}>대표 행정사 정유선</p>
                <p style={{ fontSize: '0.875rem', color: 'var(--slate)' }}>유선행정사사무소 대표 | 사업자등록번호 722-39-01297</p>
              </div>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Team */}
      <section style={{ background: '#F7F9FC', padding: '80px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px' }}>
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 36px' }}>
            <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#235099', marginBottom: '8px' }}>전문가 소개</div>
            <h2 style={{ fontSize: '36px', margin: '0 0 12px', letterSpacing: '-0.015em', color: '#235099' }}>유선행정사사무소 전문가 소개</h2>
            <p style={{ fontSize: '15px', color: '#4B5563', lineHeight: 1.7, wordBreak: 'keep-all' }}>담당 행정사가 케이스 처음부터 끝까지 직접 진행합니다. 상담후 담당자가 지정됩니다.</p>
          </div>
          <div style={{ marginBottom: 'var(--section-head-gap)' }}>
            <h3 style={{ textAlign: 'center', fontSize: '16px', fontWeight: 700, color: '#235099', marginBottom: '1.25rem' }}>행정사</h3>
            <div className="vk-team-grid" style={{ display: 'flex', flexWrap: 'wrap', gap: '32px', justifyContent: 'center', maxWidth: '900px', margin: '0 auto' }}>
              {teamAdmins.map((m) => (
                <div key={m.name} style={{ textAlign: 'center', flex: '0 0 160px', minWidth: '140px' }}>
                <div style={{ width: '144px', height: '144px', margin: '0 auto 14px', borderRadius: '50%', overflow: 'hidden', background: '#dce8f5', border: '2px solid #E5E7EB', boxShadow: '0 1px 3px rgba(11,31,58,.08)' }}>
                  <img src={m.photo} alt={`${m.name} ${m.title}`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
                <div style={{ fontSize: '11px', color: '#235099', fontWeight: 700, letterSpacing: '0.04em' }}>{m.title}</div>
                <h3 style={{ fontSize: '15px', margin: '4px 0 4px', color: '#235099', fontWeight: 700 }}>{m.name}</h3>
                <div style={{ fontSize: '11px', marginTop: '4px', color: '#6B7280', fontFamily: 'monospace' }}>{m.lang}</div>
              </div>
              ))}
            </div>
          </div>
          <div>
            <h3 style={{ textAlign: 'center', fontSize: '16px', fontWeight: 700, color: '#235099', marginBottom: '1.25rem' }}>사무장 · 실장</h3>
            <div className="vk-team-grid" style={{ display: 'flex', flexWrap: 'wrap', gap: '32px', justifyContent: 'center', maxWidth: '720px', margin: '0 auto' }}>
              {teamStaff.map((m) => (
                <div key={m.name} style={{ textAlign: 'center', flex: '0 0 160px', minWidth: '140px' }}>
                <div style={{ width: '144px', height: '144px', margin: '0 auto 14px', borderRadius: '50%', overflow: 'hidden', background: '#dce8f5', border: '2px solid #E5E7EB', boxShadow: '0 1px 3px rgba(11,31,58,.08)' }}>
                  <img src={m.photo} alt={`${m.name} ${m.title}`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
                <div style={{ fontSize: '11px', color: '#235099', fontWeight: 700, letterSpacing: '0.04em' }}>{m.title}</div>
                <h3 style={{ fontSize: '15px', margin: '4px 0 4px', color: '#235099', fontWeight: 700 }}>{m.name}</h3>
                <div style={{ fontSize: '11px', marginTop: '4px', color: '#6B7280', fontFamily: 'monospace' }}>{m.lang}</div>
              </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="section bg-cream">
        <div className="container">
          <div className="section-header section-header-centered fade-up">
            <span className="badge badge-burgundy text-label">전문 분야</span>
            <h2 className="text-h2" style={{ marginTop: '0.75rem' }}>6대 핵심 전문 분야</h2>
            <span className="accent-line" style={{ marginInline: 'auto', marginTop: '1rem' }} />
          </div>
          <div className="about-expertise-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {expertise.map((e, i) => (
              <div key={e.title} className={`fade-up delay-${i + 1}`} style={{
                background: 'var(--white)', borderRadius: '16px', padding: '2rem',
                border: '1px solid var(--border)', borderTop: '3px solid var(--burgundy)'
              }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.0625rem', color: 'var(--navy)', marginBottom: '0.75rem' }}>{e.title}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--slate)', lineHeight: 1.6 }}>{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* I5b 사업 인허가(INH-LAYOUT: ko 는 '외국인' 한정 표현 제거) — 문장은 기존 글·FAQ 인용 (2026-10-03) */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container" style={{ maxWidth: '860px' }}>
          <h2 className="text-h2">사업 인허가는 어떤 업종까지 대행하나요</h2>
          <div className="about-i5b" dangerouslySetInnerHTML={{ __html: "<p>인허가 행정사는 행정사법에 따라 공인된 전문가로, 식품·건축·운수·의료·학원 등 다양한 업종의 허가·신고·등록을 대리합니다. 인허가는 업종마다 근거 법령이 다르고, 담당 기관도 식품위생과·건축과·환경부·소방서 등으로 분산되어 있어 초보자가 혼자 처리하기에는 복잡도가 높습니다. 전문 인허가 행정사는 해당 업종의 법령과 실무를 숙지하고 있어, 서류 준비부터 접수, 보완 대응까지 원스톱으로 처리합니다.</p>" }} />
          <p style={{ marginTop: '1rem' }}>함께 보기: <a href="/services">업종별 인허가 서비스</a> · <a href="/blog/administrative-license-permit-specialist-guide">인허가 행정사 선택 가이드</a></p>
          <h2 className="text-h2" style={{ marginTop: 'var(--block-gap)' }}>자주 묻는 질문</h2>
          <div className="faq-item" style={{ padding: '1rem 0', borderBottom: '1px solid var(--border)' }}><p className="faq-q"><strong>Q. 외국인도 사업 인허가를 받을 수 있나요?</strong></p><p className="faq-a">A. 외국인도 적법한 체류 자격과 사업자등록을 완료하면 대부분의 인허가를 받을 수 있습니다. 다만 업종에 따라 외국인 제한이 있어 사전 확인이 필요합니다.</p></div>
          <div className="faq-item" style={{ padding: '1rem 0', borderBottom: '1px solid var(--border)' }}><p className="faq-q"><strong>Q. 행정사 인허가 비용은 어떻게 안내하나요?</strong></p><p className="faq-a">A. 법정 수수료는 업종별 페이지에서, 대행 보수는 업종 복잡도와 서류 범위에 따라 달라 상담 후 안내합니다.</p></div>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ABOUT_FAQ_LD) }} />
        </div>
      </section>


      {/* Location */}
      <section className="section bg-navy">
        <div className="container">
          <div className="about-location-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem', alignItems: 'center' }}>
            <div className="fade-up">
              <span className="badge badge-white text-label">오시는 길</span>
              <h2 className="text-h2" style={{ color: 'white', marginTop: '1rem' }}>찾아오시는 방법</h2>
              <span className="accent-line" style={{ background: 'var(--burgundy)', marginTop: '1rem' }} />
              <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { label: '주소', value: '(04614) 서울특별시 중구 퇴계로 324, 3층 (성우빌딩) | 동대문역사문화공원역 4번출구 10미터' },
                  { label: '이메일', value: 'help@inhega.co.kr' },
                  { label: '메신저', value: '카카오·라인·위챗·왓츠앱 alexkorea' },
                ].map((c) => (
                  <div key={c.label} style={{ display: 'flex', gap: '1rem' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', color: 'rgba(255,255,255,0.4)', minWidth: '60px', paddingTop: '2px', textTransform: 'uppercase' }}>{c.label}</span>
                    <span style={{ fontSize: '0.9375rem', color: 'rgba(255,255,255,0.75)' }}><EmailOff>{c.value}</EmailOff></span>
                  </div>
                ))}
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', color: 'rgba(255,255,255,0.4)', minWidth: '60px', paddingTop: '2px', textTransform: 'uppercase' }}>업무시간</span>
                  <span style={{ fontSize: '0.9375rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.7 }}>
                    평일 09:30 – 17:30 (KST)<br />토·일·공휴일 휴무
                  </span>
                </div>
              </div>
              <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem' }}>
                <Link href="/contact" className="btn btn-primary">상담 문의</Link>
                <Link href="/quote" className="btn btn-outline-white">견적 문의</Link>
              </div>
            </div>
            <div className="fade-in delay-2" style={{ borderRadius: '16px', overflow: 'hidden', height: '320px' }}>
              <iframe
                src="https://maps.google.com/maps?q=서울특별시+중구+퇴계로+324+성우빌딩&hl=ko&output=embed&z=17"
                width="100%"
                height="320"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="유선행정사사무소 위치"
              />
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .about-hero-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .about-team-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .about-location-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .about-expertise-grid { grid-template-columns: 1fr !important; }
          .about-stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .about-team-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
