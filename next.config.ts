import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "react-showcase",
  images: {
    unoptimized: true
  }
};

export default nextConfig;
