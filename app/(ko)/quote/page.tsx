import QuoteForm from './QuoteForm'
import BreadcrumbLd from '@/components/seo/BreadcrumbLd'

export default function QuotePage() {
  return (
    <>
      <BreadcrumbLd items={[{ name: '홈', path: '/' }, { name: '견적 문의', path: '/quote' }]} />
      <QuoteForm />
    </>
  )
}
