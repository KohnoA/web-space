/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'scontent-waw1-1.cdninstagram.com'
      }
    ]
  }
}

module.exports = nextConfig
