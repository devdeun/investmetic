/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['msw'],
  webpack: (config, { isServer }) => {
    if (isServer) {
      if (Array.isArray(config.resolve.alias)) {
        config.resolve.alias.push({ name: 'msw/browser', alias: false })
      } else {
        config.resolve.alias['msw/browser'] = false
      }
    } else {
      if (Array.isArray(config.resolve.alias)) {
        config.resolve.alias.push({ name: 'msw/node', alias: false })
      } else {
        config.resolve.alias['msw/node'] = false
      }
    }
    return config
  },
  sassOptions: {
    includePaths: ['./shared/styles'],
    prependData: `
    @import "@/shared/styles/base/variables";
    @import "@/shared/styles/base/mixins";
    @import "@/shared/styles/base/functions";
  `,
  },
  async rewrites() {
    if (process.env.NODE_ENV === 'development') {
      return []
    }

    return [
      {
        source: '/api/:path*',
        destination: `${process.env.API_HOST}/api/:path*`,
      },
    ]
  },
}

export default nextConfig
