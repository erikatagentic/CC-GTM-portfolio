import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/grimoire", destination: "/work", permanent: true },
      { source: "/chronicles", destination: "/", permanent: true },
      { source: "/quest-log", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
