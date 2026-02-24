import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        // Remove CSP for Sanity Studio — it needs to load remote scripts/styles
        source: "/studio/:path*",
        headers: [{ key: "Content-Security-Policy", value: "" }],
      },
    ];
  },
};

export default nextConfig;
