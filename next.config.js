/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "images.pexels.com"], // Add any image domains you'll use
    unoptimized: true, // Required for static export
  },
  // Enable static exports for deployment
  output: "export",
  trailingSlash: true,
  // Remove GitHub Pages specific configuration for local development
  // assetPrefix: process.env.NODE_ENV === "production" ? "/dsa-parental-digital-survival-kit" : "",
  // basePath: process.env.NODE_ENV === "production" ? "/dsa-parental-digital-survival-kit" : "",
};

module.exports = nextConfig;
