/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable Next.js image optimization
    domains: ["cdn.sanity.io"], // Keep your current domains
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        pathname: "/images/**"
      }
    ]
  }
};

module.exports = nextConfig;
