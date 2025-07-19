import type { NextConfig } from "next";

const isGithubPages = process.env.NODE_ENV === 'production';

const repo = 'react-showcase';

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGithubPages ? `/${repo}` : '',
  assetPrefix: isGithubPages ? `/${repo}/` : '',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
