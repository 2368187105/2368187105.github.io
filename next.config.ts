import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";
const repoName = "math-web";

const nextConfig: NextConfig = {
  output: "export",

  basePath: isGitHubPages ? `/${repoName}` : "",
  assetPrefix: isGitHubPages ? `/${repoName}/` : "",

  trailingSlash: true,

  images: {
    unoptimized: true,
  },
};

export default nextConfig;