import { rssResponse } from '@/lib/rss-feeds'

// NAVER-RSS(10-23): 빌드 때 정적 생성(새 글은 다음 빌드에 반영).
export const dynamic = 'force-static'

export function GET() {
  return rssResponse('ko')
}
