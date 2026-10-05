import { FillImage, serviceHeroBase } from '@/components/ui/FillImage'
import { INDUSTRY_PHOTOS, industryPhotoBase } from '@/lib/service-card-images'

/**
 * 업종 상세 히어로 사진(INH-PHOTO60, 보스 msg 2345 "세부 페이지 사진이 흐려").
 *
 * 예전 히어로는 500·800w 파일에 rgba(11,31,58,.72) 단색을 미리 구운 것(serviceHeroBase)이라
 * 1440 화면에서 800px 을 늘려 쓰고 전체가 어두워 흐려 보였다. 이제 원본(폭 3000px 이상)에서 만든
 * 800·1200·2000·2880w 를 그대로 쓰고, 글 가독성은 아래쪽 그라데이션 한 겹으로만 확보한다.
 * blur·filter·저해상도 placeholder 없음 — 배경색은 사진 도착 전 안전망일 뿐이다.
 *
 * 사진이 없는 업종(배포 보류 4종)만 예전 합성 파일로 떨어진다.
 */
/**
 * 2880w 는 PC 레티나용(1440×2, 맥7 INH-PHOTO60-DEPLOY 판단 ①). 모바일(≤767px)은 사진 폭을 400px 로
 * 신고해 DPR 3 에서도 1200w 까지만 고르게 한다 — 100vw 면 430px×3 폰이 2000w 를 받는다.
 * preload 도 같은 sizes 를 쓴다(FillImage).
 */
const HERO_SIZES = '(max-width: 767px) min(100vw, 400px), 100vw'

export default function IndustryHeroImage({ slug, fallbackImage, alt }: { slug: string; fallbackImage?: string; alt: string }) {
  if (!INDUSTRY_PHOTOS[slug]) {
    if (!fallbackImage) throw new Error(`[IndustryHeroImage] 사진 없음: ${slug}`)
    return (
      <div style={{ position: 'absolute', inset: 0, background: 'rgb(11,31,58)' }}>
        <FillImage base={serviceHeroBase(fallbackImage)} small={500} large={800} alt={alt} sizes="100vw" priority />
      </div>
    )
  }
  return (
    <div style={{ position: 'absolute', inset: 0, background: 'rgb(11,31,58)' }}>
      <FillImage base={industryPhotoBase(slug)} widths={[800, 1200, 2000, 2880]} alt={alt} sizes={HERO_SIZES} priority />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to top, rgba(11,31,58,0.92) 0%, rgba(11,31,58,0.78) 38%, rgba(11,31,58,0.35) 72%, rgba(11,31,58,0.08) 100%)',
        }}
      />
    </div>
  )
}
