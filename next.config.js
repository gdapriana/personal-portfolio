/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  webpack(config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    }
    return config
  },
  images: {
    domains: ["cdn1.iconfinder.com", "cdn4.iconfinder.com", "seeklogo.com"]
  }
}

module.exports = nextConfig
