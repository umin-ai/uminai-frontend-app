import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  compiler: {
    styledComponents: true,
  },
  async rewrites() {
    return [
      {
        source: "/images/:path*",
        destination: "/public/images/:path*",
      }
    ]
  }
};

export default nextConfig;
