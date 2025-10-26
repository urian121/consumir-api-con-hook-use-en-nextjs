import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'devsapihub.com',
      },
    ],
  },
};

export default nextConfig;
