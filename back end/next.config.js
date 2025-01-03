/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.klikindomaret.com',
      }
    ]
  }
}

module.exports = nextConfig
