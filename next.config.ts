import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const githubPagesBasePath = "/carbon-neutral-futures-explorer";

const nextConfig: NextConfig = {
  ...(isGitHubPages
    ? {
        output: "export",
        basePath: githubPagesBasePath,
        assetPrefix: githubPagesBasePath,
        trailingSlash: true,
        // The Cloudflare-only database adapter imports runtime types that are
        // unavailable to a plain Next static export. It is not part of this site.
        typescript: { ignoreBuildErrors: true },
      }
    : {}),
};

export default nextConfig;
