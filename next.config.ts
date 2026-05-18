import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  output: "standalone",
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
