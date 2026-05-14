import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'inhega.co.kr' }],
        destination: 'https://www.inhega.co.kr/:path*',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
