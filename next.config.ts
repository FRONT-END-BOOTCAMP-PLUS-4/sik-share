import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
   domains: [
      "lh3.googleusercontent.com",
      "k.kakaocdn.net",
    ]
  },
  transpilePackages: ['three'],
};

export default nextConfig;
