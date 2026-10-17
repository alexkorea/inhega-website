// WQA-1007-FIX (맥7·보스 규칙): 고객 화면에 출처·확인일·기준일을 싣지 않는다 — 근거는 원고 데이터(주석)에만 남긴다.
// 외부 링크는 본문 중간에 두지 않고 글 맨 끝 '공식 사이트에서 확인하기' 1곳으로 모은다(DWELL-RULE).
// 원고(lib/blog-posts-data.ts·blog-i18n.ts)는 자동화가 매일 쓰므로 데이터가 아니라 렌더 단계에서 거른다.

// 자사·자매 사이트와 연락 채널은 외부 정보 링크로 보지 않는다.
const KEEP_HOST = /(^|\.)(inhega\.co\.kr|investkorea\.co\.kr|visaskorea\.com|visaskorea\.co\.kr|f4visa\.net|f6visa\.com|kocation\.com|lawinkorea\.com|hanvietvisa\.com|apokorea\.co\.kr|koreamoa\.co\.kr)$|wa\.me|kakao|line\.me|lin\.ee|t\.me|wechat|weixin|naver\.(com|me)|google\.com/

// 맨 끝 공식 링크 후보 — 2026-10-07 curl 실측 200 인 첫 화면만 쓴다(etoos.go.kr 는 도메인 소멸이라 제외).
const OFFICIAL: Record<string, { href: string; ko: string; en: string; zh: string; ja: string }> = {
  'mfds.go.kr': { href: 'https://www.mfds.go.kr', ko: '식품의약품안전처', en: 'Ministry of Food and Drug Safety', zh: '韩国食品药品安全处', ja: '韓国食品医薬品安全処' },
  'nedrug.mfds.go.kr': { href: 'https://nedrug.mfds.go.kr', ko: '의약품안전나라', en: 'MFDS Drug Safety Portal', zh: '韩国药品安全门户', ja: '韓国医薬品安全ポータル' },
  'factoryon.go.kr': { href: 'https://www.factoryon.go.kr', ko: '팩토리온', en: 'FactoryOn', zh: 'FactoryOn 工厂登记系统', ja: 'FactoryOn 工場登録システム' },
  'rnd.or.kr': { href: 'https://www.rnd.or.kr', ko: '한국산업기술진흥협회 연구소·전담부서 신고관리', en: 'KOITA R&D Center Registration', zh: '韩国产业技术振兴协会', ja: '韓国産業技術振興協会' },
  'mois.go.kr': { href: 'https://www.mois.go.kr', ko: '행정안전부', en: 'Ministry of the Interior and Safety', zh: '韩国行政安全部', ja: '韓国行政安全部' },
  'g2b.go.kr': { href: 'https://www.g2b.go.kr', ko: '나라장터', en: 'KONEPS (g2b.go.kr)', zh: '韩国政府采购系统', ja: '韓国電子調達システム' },
}
const PRIO = ['nedrug.mfds.go.kr', 'mfds.go.kr', 'factoryon.go.kr', 'rnd.or.kr', 'g2b.go.kr', 'mois.go.kr']

function hostOf(url: string): string {
  const m = url.match(/^https?:\/\/([^/?#]+)/i)
  return m ? m[1].toLowerCase().replace(/^www\./, '') : ''
}

export type CleanArticle = { html: string; official?: { href: string; label: string } }

export function cleanArticleHtml(html: string, locale: 'ko' | 'en' | 'zh' | 'ja' = 'ko'): CleanArticle {
  let s = html
    .replace(/<!--[\s\S]*?-->/g, '') // 원고 근거 주석은 화면·소스 모두에서 뺀다
    .replace(/\s*[(（]법령 기준일[^)）]*[)）]/g, '')
    .replace(/\s*\(MST \d+[^)]*law\.go\.kr 조회[^)]*\)/g, '')
    .replace(/\s*\(law\.go\.kr\)/g, '')
    .replace(/<div class="source-box">[\s\S]*?<\/div>/g, '')
    .replace(/<p>\s*(최종 수정|Last updated|最終更新|最后更新)[:：]?\s*<time>[^<]*<\/time>\s*<\/p>\s*/g, '')
    .replace(/<h[23][^>]*>\s*(참고 법령 및 공식 출처|참고 출처|공식 출처|출처)\s*<\/h[23]>\s*(<ul>[\s\S]*?<\/ul>)?/g, '')
  const hosts: string[] = []
  s = s.replace(/<a\s[^>]*href="(https?:\/\/[^"]+)"[^>]*>([\s\S]*?)<\/a>/gi, (all, href: string, text: string) => {
    const h = hostOf(href)
    if (!h || KEEP_HOST.test(h)) return all
    hosts.push(h)
    return text
  })
  // NOCITE-ALL-4(보스 msg 3373·3377): 국가법령정보센터(law.go.kr)는 맨 끝 링크로도 싣지 않는다 — 실무 포털(식약처·팩토리온 등)만.
  const key = PRIO.find((k) => hosts.includes(k))
  const o = key ? OFFICIAL[key] : undefined
  return { html: s, official: o ? { href: o.href, label: o[locale] } : undefined }
}
