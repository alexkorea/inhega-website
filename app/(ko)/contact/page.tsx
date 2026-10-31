import ContactForm from './ContactForm'
import BreadcrumbLd from '@/components/seo/BreadcrumbLd'

export default function ContactPage() {
  return (
    <>
      <BreadcrumbLd items={[{ name: '홈', path: '/' }, { name: '상담문의', path: '/contact' }]} />
      <ContactForm />
    </>
  )
}
