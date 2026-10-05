import Link from 'next/link'
import styles from './Footer.module.css'
import { EmailOff } from '@/components/ui/EmailOff'
import FooterServiceGroups from './FooterServiceGroups'
import LangFlags from '@/components/ui/LangFlags'

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
              <p className={styles.tagline}>전문 행정사 6인이 귀하의 인허가를 책임집니다.</p>
              {/* INH-LAYOUT(보스 msg 2271) — 회사 정보 압축: 상호·대표·사업자번호 / 주소·전화·이메일 / 메신저.
                  사업자등록번호는 풋터 안에 있어야 한다(bizno-footer-gate). */}
              <div className={styles.bizInfo}>
                <p>
                  <span>유선행정사사무소</span>
                  <span>대표 행정사 정유선</span>
                  <span>사업자등록번호 722-39-01297</span>
                </p>
                <p>
                  <span>서울특별시 중구 퇴계로 324, 3층</span>
                  <span>전화 <a href="tel:02-363-2251">02-363-2251</a></span>
                  <span><EmailOff><a href="mailto:help@inhega.co.kr">help@inhega.co.kr</a></EmailOff></span>
                </p>
                <p>
                  <span>카카오·라인·위챗·왓츠앱: alexkorea</span>
                </p>
              </div>
              <LangFlags locale="ko" className={styles.footerLang} />
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
          </div>
        </div>
      </div>
    </footer>
  )
}
