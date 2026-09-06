import type { NextConfig } from "next";

// Cache bust: 20260530
const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**.supabase.co' },
    ],
  },
  async redirects() {
    return [
      // /ko → / (no Korean sub-path exists; handles old links and crawlers)
      { source: '/ko', destination: '/', permanent: true },
      { source: '/ko/:path*', destination: '/:path*', permanent: true },
      // Duplicate content 301 redirects
      { source: '/blog/cosmetics-pharmaceutical-license-guide', destination: '/blog/cosmetics-responsible-distributor', permanent: true },
      { source: '/blog/venture-vs-innobiz-comparison-guide', destination: '/blog/venture-innobiz-certification-guide', permanent: true },
      { source: '/blog/corporate-rnd-center-requirements-2026', destination: '/blog/corporate-research-lab-establishment-guide', permanent: true },
      { source: '/blog/freight-forwarder-capital-bond', destination: '/blog/international-logistics-capital-funding-guide', permanent: true },
      { source: '/blog/currency-exchange-registration', destination: '/blog/currency-exchange-registration-guide', permanent: true },
      { source: '/blog/hostel-registration-facility', destination: '/blog/hostel-registration-guide', permanent: true },
      { source: '/blog/foreigner-urban-homestay-registration', destination: '/blog/urban-guesthouse-registration-guide', permanent: true },
      { source: '/blog/hanok-stay-registration-requirements', destination: '/blog/hanok-experience-registration-guide', permanent: true },
      { source: '/blog/nonprofit-association-permit', destination: '/blog/nonprofit-corporation-establishment-guide', permanent: true },
      { source: '/blog/tobacco-import-registration', destination: '/blog/tobacco-import-sales-guide', permanent: true },
      { source: '/blog/e-cigarette-import-permit', destination: '/blog/e-cigarette-import-license-guide', permanent: true },
      { source: '/blog/women-owned-business-certification', destination: '/blog/women-enterprise-certification-guide', permanent: true },
      { source: '/blog/g2b-registration-procedure', destination: '/blog/procurement-narajangteo-registration-guide', permanent: true },
    ]
  },
};

export default nextConfig;
