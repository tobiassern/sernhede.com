/** @type {import('next').NextConfig} */
const nextConfig = {
  runtime: 'experimental-edge',
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
