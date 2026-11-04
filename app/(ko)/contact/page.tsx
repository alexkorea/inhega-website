import Link from 'next/link'
import ContactForm from './ContactForm'
import BreadcrumbLd from '@/components/seo/BreadcrumbLd'

export default function ContactPage() {
  return (
    <>
      <BreadcrumbLd items={[{ name: '홈', path: '/' }, { name: '상담문의', path: '/contact' }]} />
      <ContactForm />
      {/* AI-RECO-2 E-2: 처리 업무 전체 목록 상호 링크 */}
      <section className="container" style={{ padding: '0 0 var(--section-py-sm)' }}>
        <p><Link prefetch={false} href="/services/all" style={{ color: 'var(--navy)', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: '3px', display: 'inline-flex', alignItems: 'center', minHeight: '44px' }}>처리 업무 전체 목록 보기(정식 명칭·관할 기관·대상)</Link></p>
      </section>
    </>
  )
}
