import Image from 'next/image'

type Locale = 'ko' | 'en' | 'zh' | 'ja'

const sectionData: Record<Locale, { title: string; subtitle: string }> = {
  ko: {
    title: '유선행정사사무소 전문가 소개',
    subtitle: '담당 행정사가 케이스 처음부터 끝까지 직접 진행합니다. 상담 후 담당자가 지정됩니다.',
  },
  en: {
    title: 'Meet Our Specialists',
    subtitle: "Your assigned specialist handles your case from start to finish. You'll be matched after your initial consultation.",
  },
  zh: {
    title: '专家团队介绍',
    subtitle: '负责行政士从案件开始到结束全程直接负责。咨询后指定专属负责人。',
  },
  ja: {
    title: '専門家紹介',
    subtitle: '担当行政書士がケースの最初から最後まで直接対応します。ご相談後に担当者が決まります。',
  },
}

type Member = {
  nameKo: string
  name: Record<Locale, string>
  photo: string
  title: Record<Locale, string>
  specialty: Record<Locale, string>
  langs: string[]
}

const admins: Member[] = [
  {
    nameKo: '정유선',
    name: { ko: '정유선', en: 'Jung Yu-sun', zh: '郑有善', ja: '鄭有善' },
    photo: '/team/jungyus.webp',
    title: { ko: '대표행정사', en: 'Chief Admin Agent', zh: '代表行政士', ja: '代表行政書士' },
    specialty: { ko: '출입국 / 인허가전문', en: 'Immigration & Licensing', zh: '出入境 / 许可证专业', ja: '出入国・許認可専門' },
    langs: ['KR', 'EN'],
  },
  {
    nameKo: '정희정',
    name: { ko: '정희정', en: 'Jung Hee-jung', zh: '郑熙晶', ja: '鄭熙晶' },
    photo: '/team/junghj.webp',
    title: { ko: '행정사', en: 'Admin Agent', zh: '行政士', ja: '行政書士' },
    specialty: { ko: '출입국 / 인허가전문', en: 'Immigration & Licensing', zh: '出入境 / 许可证专业', ja: '出入国・許認可専門' },
    langs: ['KR', 'EN'],
  },
  {
    nameKo: '김정은',
    name: { ko: '김정은', en: 'Kim Jung-eun', zh: '金正恩', ja: '金正恩' },
    photo: '/team/kimje.webp',
    title: { ko: '행정사', en: 'Admin Agent', zh: '行政士', ja: '行政書士' },
    specialty: { ko: '출입국 / 인허가전문', en: 'Immigration & Licensing', zh: '出入境 / 许可证专业', ja: '出入国・許認可専門' },
    langs: ['KR', 'EN', '中文', '日本語'],
  },
  {
    nameKo: '이원중',
    name: { ko: '이원중', en: 'Lee Won-jung', zh: '李元中', ja: '李元重' },
    photo: '/team/leewj.webp',
    title: { ko: '행정사', en: 'Admin Agent', zh: '行政士', ja: '行政書士' },
    specialty: { ko: '출입국 / 인허가전문', en: 'Immigration & Licensing', zh: '出入境 / 许可证专业', ja: '出入国・許認可専門' },
    langs: ['KR', 'EN', '中文', '日本語'],
  },
]

const staff: Member[] = [
  {
    nameKo: '백승수',
    name: { ko: '백승수', en: 'Baek Seung-su', zh: '白胜秀', ja: '白勝秀' },
    photo: '/team/baekss.webp',
    title: { ko: '사무장', en: 'Office Manager', zh: '事务长', ja: '事務長' },
    specialty: { ko: '은행 업무 담당', en: 'Banking Affairs', zh: '银行业务负责', ja: '銀行業務担当' },
    langs: ['KR', 'EN'],
  },
  {
    nameKo: '김영주',
    name: { ko: '김영주', en: 'Kim Young-ju', zh: '金英珠', ja: '金英珠' },
    photo: '/team/kimyj.webp',
    title: { ko: '실장', en: 'Director', zh: '室长', ja: '室長' },
    specialty: { ko: '사업자등록증 업무', en: 'Business Registration', zh: '营业执照业务', ja: '事業者登録業務' },
    langs: ['KR', 'EN'],
  },
  {
    nameKo: '허경',
    name: { ko: '허경', en: 'Heo Kyung', zh: '许京', ja: '許京' },
    photo: '/team/hukyung.webp',
    title: { ko: '실장', en: 'Director', zh: '室长', ja: '室長' },
    specialty: { ko: '중국어 통역·번역', en: 'Chinese Interpretation', zh: '中文翻译·口译', ja: '中国語通訳・翻訳' },
    langs: ['中文', 'KR', 'EN'],
  },
]

function MemberCard({ member, locale, size = 'lg' }: { member: Member; locale: Locale; size?: 'lg' | 'md' }) {
  // INH-PHOTO60(보스 msg 2351): 사진 원 120→88급, 7명 한 줄 — 높이 867→ 절반 이하
  const photoSize = 88
  return (
    <div style={{ textAlign: 'center', padding: '0.5rem 0.25rem' }}>
      <div style={{
        position: 'relative',
        width: `min(${photoSize}px, 100%)`,
        aspectRatio: '1 / 1',
        borderRadius: '50%',
        overflow: 'hidden',
        margin: '0 auto 0.5rem',
        border: '3px solid #e8edf5',
        background: '#f0f4fa',
        flexShrink: 0,
      }}>
        <Image
          src={member.photo}
          alt={member.name[locale]}
          fill
          style={{ objectFit: 'cover', objectPosition: 'top' }}
        />
      </div>
      <p style={{ fontSize: '0.72rem', color: '#235099', fontWeight: 700, marginBottom: '0.25rem', letterSpacing: '0.02em' }}>
        {member.title[locale]}
      </p>
      <p style={{ fontSize: size === 'lg' ? '1.0625rem' : '0.9375rem', fontWeight: 700, color: '#111827', marginBottom: '0.3rem', lineHeight: 1.3 }}>
        {member.name[locale]}
      </p>
      <p style={{ fontSize: '0.75rem', color: '#6b7280', marginBottom: '0.4rem' }}>
        {member.specialty[locale]}
      </p>
      <p style={{ fontSize: '0.7rem', color: '#9ca3af', letterSpacing: '0.01em' }}>
        {member.langs.join(' · ')}
      </p>
    </div>
  )
}

export default function TeamSection({ locale }: { locale: Locale }) {
  const s = sectionData[locale]

  return (
    <section style={{ padding: 'var(--section-py-md) 0', background: '#ffffff' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 'var(--section-head-gap)' }} className="fade-up">
          <span className="badge badge-burgundy text-label">
            {locale === 'ko' ? '전문가 소개' : locale === 'en' ? 'Our Team' : locale === 'zh' ? '专家团队' : '専門家紹介'}
          </span>
          <h2 className="text-h2" style={{ marginTop: '0.75rem', marginBottom: '0.75rem' }}>{s.title}</h2>
          <p style={{ fontSize: '0.9rem', color: '#6b7280', maxWidth: '520px', margin: '0 auto' }}>{s.subtitle}</p>
        </div>

        {/* 7명 한 줄(PC) — 행정사 4 + 직원 3 순서 그대로. 900px 이하 4열 두 줄 */}
        <div
          className="fade-up team-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(7, minmax(0, 1fr))',
            gap: '0.25rem 0.75rem',
            maxWidth: 'var(--content-max)',
            margin: '0 auto',
          }}
        >
          {admins.map((m) => (
            <MemberCard key={m.nameKo} member={m} locale={locale} size="lg" />
          ))}
          {staff.map((m) => (
            <MemberCard key={m.nameKo} member={m} locale={locale} size="md" />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .team-grid { grid-template-columns: repeat(4, minmax(0, 1fr)) !important; }
        }
      `}</style>
    </section>
  )
}
