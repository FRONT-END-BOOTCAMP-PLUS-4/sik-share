import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
   domains: [
      "lh3.googleusercontent.com",
      "k.kakaocdn.net",
    ]
  },
  transpilePackages: ['three'],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "k.kakaocdn.net",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "phinf.pstatic.net",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "jxehepesvdmpvgnpxoxn.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
    ]
  },
};

export default nextConfig;
