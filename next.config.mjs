/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.firstpost.com',
      },
    ],
  },
};

export default nextConfig;
