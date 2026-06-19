import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
  },
  turbopack: undefined,
}
export default nextConfig
