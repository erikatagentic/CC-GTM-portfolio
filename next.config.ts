import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/grimoire", destination: "/", permanent: true },
      { source: "/work", destination: "/", permanent: true },
      { source: "/chronicles", destination: "/", permanent: true },
      { source: "/quest-log", destination: "/", permanent: true },
      { source: "/character-sheet", destination: "/", permanent: true },
      { source: "/armory", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
