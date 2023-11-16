/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ["scontent-waw1-1.cdninstagram.com"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.cdninstagram.com',
        // pathname: '/v/t51.29350-15/**',
      }
    ]
  }
}

module.exports = nextConfig
