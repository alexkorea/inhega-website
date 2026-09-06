import Image from 'next/image'

type Locale = 'ko' | 'en' | 'zh' | 'ja'

const sectionData: Record<Locale, { title: string; subtitle: string }> = {
  ko: {
    title: 'QR로 바로 상담',
    subtitle: '스마트폰 카메라로 QR 코드를 스캔하시면 즉시 상담이 시작됩니다. 한·영·중·일 모두 가능합니다.',
  },
  en: {
    title: 'Instant Chat via QR',
    subtitle: 'Scan the QR code with your smartphone camera to start a consultation instantly. Available in Korean, English, Chinese, and Japanese.',
  },
  zh: {
    title: '扫码即时咨询',
    subtitle: '用智能手机扫描二维码即可立即开始咨询。支持韩·英·中·日语。',
  },
  ja: {
    title: 'QRコードでご相談',
    subtitle: 'スマートフォンのカメラでQRコードをスキャンするとすぐにご相談いただけます。韓·英·中·日対応。',
  },
}

const qrItems = [
  { src: '/images/qr/kakao.jpg', label: 'KakaoTalk' },
  { src: '/images/qr/wechat.jpg', label: 'WeChat' },
  { src: '/images/qr/line.jpg', label: 'LINE' },
  { src: '/images/qr/whatsapp.jpg', label: 'WhatsApp' },
]

export default function QRSection({ locale }: { locale: Locale }) {
  const s = sectionData[locale]

  return (
    <section style={{ padding: '4rem 0', background: '#f8f8f8' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }} className="fade-up">
          <h2 className="text-h2" style={{ marginBottom: '0.75rem' }}>{s.title}</h2>
          <p style={{ fontSize: '0.9rem', color: '#555', maxWidth: '500px', margin: '0 auto', lineHeight: 1.6 }}>{s.subtitle}</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1rem',
          maxWidth: '800px',
          margin: '0 auto',
        }}
          className="fade-up qr-grid"
        >
          {qrItems.map((item) => (
            <div
              key={item.label}
              style={{
                background: '#ffffff',
                border: '1px solid #e5e7eb',
                borderRadius: '12px',
                padding: '1.25rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.75rem',
                boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
              }}
            >
              <div style={{ position: 'relative', width: '110px', height: '110px', borderRadius: '8px', overflow: 'hidden' }}>
                <Image
                  src={item.src}
                  alt={item.label + ' QR'}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <span style={{ fontSize: '0.875rem', fontWeight: 700, color: '#235099' }}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 560px) {
          .qr-grid { grid-template-columns: repeat(2, 1fr) !important; max-width: 360px !important; }
        }
      `}</style>
    </section>
  )
}
