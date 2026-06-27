/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Static Export Ready for Vercel / CDN
  images: {
    unoptimized: true, // Required for static export
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
