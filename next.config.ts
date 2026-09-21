import type { NextConfig } from "next";
import { BLOG_REDIRECTS, SERVICE_REDIRECTS } from "./lib/blog-redirects";

// Cache bust: 20260530
const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // /_next/image is a no-op on Cloudflare Pages: verified 2026-09-22 that
    // w=256, w=640 and w=1200 all return the identical 1,127,455-byte source
    // PNG. Keeping it on only added a worker hop per image while shipping the
    // full-size original. Assets are pre-sized to WebP by
    // `node scripts/optimize-images.mjs` instead.
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: '**.supabase.co' },
    ],
  },
  async redirects() {
    return [
      // /ko → / (no Korean sub-path exists; handles old links and crawlers)
      { source: '/ko', destination: '/', permanent: true },
      { source: '/ko/:path*', destination: '/:path*', permanent: true },
      // Duplicate-content + date-cleanup 301s — shared with app/sitemap.ts so the
      // sitemap can never list a URL that redirects.
      ...BLOG_REDIRECTS.map((r) => ({ ...r, permanent: true })),
      // 삭제·개명된 옛 서비스 페이지 301 (GSC 404 정리 2026-09-17)
      ...SERVICE_REDIRECTS.map((r) => ({ ...r, permanent: true })),
    ]
  },
};

export default nextConfig;
