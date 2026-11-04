import ServiceListPage, { serviceListMetadata } from '@/components/services/ServiceListPage'

// AI-RECO-2 E-2: 처리 업무 전체 목록 — 정적 경로가 [slug] 보다 우선한다('all' 은 업무 slug 가 아님).
export const metadata = serviceListMetadata('zh')

export default function ZHServiceListRoute() {
  return <ServiceListPage locale="zh" />
}
