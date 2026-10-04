import Link from 'next/link'
import styles from './Footer.module.css'
import { EmailOff } from '@/components/ui/EmailOff'
import FooterServiceGroups from './FooterServiceGroups'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className="container">
          <div className={styles.topGrid}>
            {/* Brand Column */}
            <div className={styles.brandCol}>
              <div className={styles.logo}>
                <div className={styles.logoMark}><img src="/logo.webp" alt="유선행정사사무소 로고" style={{width:"100%",height:"100%",objectFit:"contain",borderRadius:"inherit"}} /></div>
                <div className={styles.logoText}>
                  <span className={styles.logoMain}>유선행정사사무소</span>
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
                  <EmailOff><a href="mailto:teamone1163@gmail.com">teamone1163@gmail.com</a></EmailOff>
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

            {/* Services Columns — 분야 그룹 링크, 정본 lib/service-directory.ts (0949 추가) */}
            <FooterServiceGroups locale="ko" />

            {/* Company Column */}
            <div className={styles.linksCol}>
              <p className={styles.colTitle}>회사</p>
              <ul className={styles.linkList}>
                <li><Link prefetch={false} href="/about" className={styles.link}>회사소개</Link></li>
                <li><Link prefetch={false} href="/blog" className={styles.link}>블로그</Link></li>
                <li><Link prefetch={false} href="/news" className={styles.link}>인허가 뉴스</Link></li>
                <li><Link prefetch={false} href="/contact" className={styles.link}>상담문의</Link></li>
                <li><Link prefetch={false} href="/quote" className={styles.link}>견적 문의</Link></li>
              </ul>

              <p className={styles.colTitle} style={{ marginTop: '1.5rem' }}>법적 정보</p>
              <ul className={styles.linkList}>
                <li><Link prefetch={false} href="/privacy" className={styles.link}>개인정보처리방침</Link></li>
                <li><Link prefetch={false} href="/terms" className={styles.link}>이용약관</Link></li>
              </ul>

              <p className={styles.colTitle} style={{ marginTop: '1.5rem' }}>언어 / Language</p>
              <ul className={styles.linkList}>
                <li><Link prefetch={false} href="/en" className={styles.link}>English</Link></li>
                <li><Link prefetch={false} href="/zh" className={styles.link}>中文 (简体)</Link></li>
                <li><Link prefetch={false} href="/ja" className={styles.link}>日本語</Link></li>
              </ul>

            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <div className={styles.bottomInner}>
            <p className={styles.copyright}>
              © 2018 유선행정사사무소. All rights reserved.
            </p>
            <p className={styles.registration}>
              사업자등록번호: 722-39-01297 | 대표 행정사: 정유선 | 서울특별시 중구 퇴계로 324, 3층
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
