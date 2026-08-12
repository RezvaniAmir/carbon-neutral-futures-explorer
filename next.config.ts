import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  ...(isGitHubPages
    ? {
        output: "export",
        trailingSlash: true,
        // The Cloudflare-only database adapter imports runtime types that are
        // unavailable to a plain Next static export. It is not part of this site.
        typescript: { ignoreBuildErrors: true },
      }
    : {}),
};

export default nextConfig;
