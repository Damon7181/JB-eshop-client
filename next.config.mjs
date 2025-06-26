/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "www.eschgfeller.eu",
      },
    ],
  },
};

export default nextConfig;
