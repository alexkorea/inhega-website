/**
 * 컨테이너를 꽉 채우는 반응형 이미지.
 *
 * next/image 를 쓰지 않는 이유: 이 프로젝트는 images.unoptimized=true 다
 * (CF Pages 에는 /_next/image 최적화기가 없어 어떤 w= 를 줘도 원본 바이트를 돌려준다).
 * unoptimized 인 next/image 는 srcSet 을 만들지 않으므로 데스크톱용 한 장이
 * 412px 모바일에도 그대로 간다. 그래서 scripts/build-responsive-images.mjs 가
 * 미리 만들어 둔 폭별 WebP 를 네이티브 img 의 srcSet 으로 직접 건넨다.
 */
type Props = {
  /** 폭 접미사를 뺀 공통 경로. 예: "/images/hero-seoul-20260923" */
  base: string
  /** 작은 쪽 폭(px). src 기본값이자 srcSet 의 첫 후보. */
  small: number
  /** 큰 쪽 폭(px). */
  large: number
  alt: string
  sizes: string
  /** LCP 요소면 true. 프리로드 + fetchpriority=high 를 준다. */
  priority?: boolean
  objectPosition?: string
}

export function FillImage({ base, small, large, alt, sizes, priority = false, objectPosition }: Props) {
  // small === large 면 후보가 하나뿐인 자산(예: 고정 크기 QR)이다.
  const srcSet =
    small === large
      ? `${base}-${small}.webp ${small}w`
      : `${base}-${small}.webp ${small}w, ${base}-${large}.webp ${large}w`
  const src = `${base}-${small}.webp`

  return (
    <>
      {/* next/image 의 priority 가 넣어주던 프리로드를 직접 넣는다(React 19 가 head 로
          끌어올린다). imageSrcSet/imageSizes 를 함께 줘야 img 와 같은 후보를 고른다 —
          빠뜨리면 두 장을 받는다. */}
      {priority ? (
        <link
          rel="preload"
          as="image"
          href={src}
          imageSrcSet={srcSet}
          imageSizes={sizes}
          fetchPriority="high"
        />
      ) : null}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding="async"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          ...(objectPosition ? { objectPosition } : null),
        }}
      />
    </>
  )
}

/** `/images/service-x.webp` → `/images/service-x-20260923` (뒤에 `-<폭>.webp` 가 붙는다) */
export function responsiveBase(src: string) {
  return src.replace(/\.(webp|png|jpe?g)$/i, '') + '-20260923'
}

/**
 * `/images/service-x.webp` → `/images/service-x-flat-20261003` — 서비스 상세 히어로 전용.
 * 단색 오버레이 rgba(11,31,58,.72) 를 미리 합성한 파일이다(scripts/build-service-hero-flat.mjs).
 * 이걸 쓰는 곳에는 오버레이 div 를 두지 말 것 — 두 번 어두워진다.
 */
export function serviceHeroBase(src: string) {
  return src.replace(/\.(webp|png|jpe?g)$/i, '') + '-flat-20261003'
}
