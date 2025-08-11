import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone", // or 'export' if static
  images: {
    unoptimized: true, // if you're having image-related layout issues
  },
};

export default nextConfig;
