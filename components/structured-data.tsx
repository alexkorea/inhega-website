export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "비전행정사사무소",
    alternateName: "VISION Administrative Office",
    url: "https://inhega.co.kr",
    telephone: "02-363-2251",
    email: "5000meter@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "퇴계로 324, 3층 (성우빌딩)",
      addressLocality: "중구",
      addressRegion: "서울특별시",
      postalCode: "04620",
      addressCountry: "KR",
    },
    image: "https://inhega.co.kr/og-image.png",
    serviceType: [
      "국제물류주선업",
      "환전업 등록",
      "외국인도시민박업",
      "호스텔업",
      "한옥체험업",
      "건축물 용도변경",
      "식품제조가공업",
      "여성기업인증",
      "비영리사단법인",
      "담배수입판매업 등록",
      "기업 인증(벤처/이노비즈)",
      "식품 인허가 & HACCP",
      "의약외품/화장품 허가",
      "조달청 나라장터 등록",
      "기업부설연구소 설립",
      "전자담배 수입허가",
    ],
    areaServed: {
      "@type": "Country",
      name: "KR",
    },
    priceRange: "$$",
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export function WebSiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "비전행정사사무소",
    alternateName: "VISION Administrative Office",
    url: "https://inhega.co.kr",
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export function ServiceJsonLd({
  name,
  description,
  url,
}: {
  name: string
  description: string
  url: string
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    name,
    description,
    url,
    provider: {
      "@type": "ProfessionalService",
      name: "비전행정사사무소",
      url: "https://inhega.co.kr",
    },
    areaServed: {
      "@type": "Country",
      name: "KR",
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export function ArticleJsonLd({
  title,
  description,
  url,
  image,
  datePublished,
  dateModified,
}: {
  title: string
  description: string
  url: string
  image: string
  datePublished: string
  dateModified?: string
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    image,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Organization",
      name: "비전행정사사무소",
      url: "https://inhega.co.kr",
    },
    publisher: {
      "@type": "Organization",
      name: "비전행정사사무소",
      url: "https://inhega.co.kr",
      logo: {
        "@type": "ImageObject",
        url: "https://inhega.co.kr/og-image.png",
      },
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[]
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export function FaqJsonLd({
  questions,
}: {
  questions: { question: string; answer: string }[]
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
