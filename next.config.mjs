
/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,

  async redirects() {
    return [
      {
        source: "/foundscan/",
        destination: "/foundscan",
        permanent: true,
      },
    ]
  },

  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nebbxxlannila5yf.public.blob.vercel-storage.com",
      },
    ],
  },
}

export default nextConfig
