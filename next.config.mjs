/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: ['./shared/styles'],
    prependData: `
      @import "@/shared/styles/base/variables";
      @import "@/shared/styles/base/mixins";
      @import "@/shared/styles/base/functions";
    `,
  },
}

export default nextConfig
