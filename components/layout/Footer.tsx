import Link from 'next/link'
import styles from './Footer.module.css'

const services = [
  { label: '국제물류주선업', href: '/services/logistics' },
  { label: '환전업 등록', href: '/services/currency-exchange' },
  { label: '외국인도시민박업', href: '/services/urban-guesthouse' },
  { label: '호스텔업', href: '/services/hostel' },
  { label: '한옥체험업', href: '/services/hanok' },
  { label: '건축물 용도변경', href: '/services/building-usage' },
  { label: '식품제조가공업', href: '/services/food-manufacturing' },
  { label: '여성기업인증', href: '/services/women-enterprise' },
  { label: '비영리사단법인', href: '/services/nonprofit' },
  { label: '담배수입판매업', href: '/services/tobacco' },
  { label: '기업인증(벤처/이노비즈)', href: '/services/venture-cert' },
  { label: '식품인허가 & HACCP', href: '/services/haccp' },
  { label: '의약외품/화장품 허가', href: '/services/cosmetics' },
  { label: '조달청 나라장터', href: '/services/procurement' },
  { label: '기업부설연구소', href: '/services/research-lab' },
  { label: '전자담배 수입허가', href: '/services/ecig' },
  { label: '지정스포츠클럽', href: '/services/sports-club' },
  { label: '위치기반서비스사업신고', href: '/services/location-based-service' },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className="container">
          <div className={styles.topGrid}>
            {/* Brand Column */}
            <div className={styles.brandCol}>
              <div className={styles.logo}>
                <div className={styles.logoMark}>V</div>
                <div className={styles.logoText}>
                  <span className={styles.logoMain}>비전행정사사무소</span>
                  <span className={styles.logoSub}>인허가 전문</span>
                </div>
              </div>
              <p className={styles.tagline}>
                전문 행정사 6인이<br />
                귀하의 인허가를 책임집니다.
              </p>
              <div className={styles.contact}>
                <div className={styles.contactItem}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                  <a href="tel:02-363-2251">02-363-2251</a>
                </div>
                <div className={styles.contactItem}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  <a href="mailto:5000meter@gmail.com">5000meter@gmail.com</a>
                </div>
                <div className={styles.contactItem}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <span>서울특별시 중구 퇴계로 324, 3층</span>
                </div>
                <div className={styles.contactItem}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/><path d="M8 12h8M12 8v8"/>
                  </svg>
                  <span>카카오·라인·위챗·왓츠앱: alexkorea</span>
                </div>
              </div>
            </div>

            {/* Services Column */}
            <div className={styles.linksCol}>
              <p className={styles.colTitle}>서비스</p>
              <ul className={styles.linkList}>
                {services.slice(0, 8).map((s) => (
                  <li key={s.href}>
                    <Link href={s.href} className={styles.link}>{s.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.linksCol}>
              <p className={styles.colTitle}>&nbsp;</p>
              <ul className={styles.linkList} style={{ marginTop: 0 }}>
                {services.slice(8).map((s) => (
                  <li key={s.href}>
                    <Link href={s.href} className={styles.link}>{s.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div className={styles.linksCol}>
              <p className={styles.colTitle}>회사</p>
              <ul className={styles.linkList}>
                <li><Link href="/about" className={styles.link}>회사소개</Link></li>
                <li><Link href="/blog" className={styles.link}>블로그</Link></li>
                <li><Link href="/contact" className={styles.link}>상담문의</Link></li>
                <li><Link href="/quote" className={styles.link}>견적 문의</Link></li>
              </ul>

              <p className={styles.colTitle} style={{ marginTop: '1.5rem' }}>법적 정보</p>
              <ul className={styles.linkList}>
                <li><Link href="/privacy" className={styles.link}>개인정보처리방침</Link></li>
                <li><Link href="/terms" className={styles.link}>이용약관</Link></li>
              </ul>

              <p className={styles.colTitle} style={{ marginTop: '1.5rem' }}>언어 / Language</p>
              <ul className={styles.linkList}>
                <li><Link href="/en" className={styles.link}>English</Link></li>
                <li><Link href="/zh" className={styles.link}>中文 (简体)</Link></li>
                <li><Link href="/ja" className={styles.link}>日本語</Link></li>
              </ul>

            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <div className={styles.bottomInner}>
            <p className={styles.copyright}>
              © 2018 비전행정사사무소. All rights reserved.
            </p>
            <p className={styles.registration}>
              사업자등록번호: 405-05-54079 | 대표 행정사: 이원중 | 서울특별시 중구 퇴계로 324, 3층
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
