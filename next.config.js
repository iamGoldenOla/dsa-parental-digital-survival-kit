/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'], // Add any image domains you'll use
  },
  // Enable static exports if needed
  output: 'standalone',
}

module.exports = nextConfig 