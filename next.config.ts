import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export", // Enables `next export`
  basePath: "",
  images: {
    unoptimized: true,
  },

  trailingSlash: true, // Helps avoid routing issues on GitHub Pages
};

export default nextConfig;
