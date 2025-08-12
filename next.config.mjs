/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // Optional: If you have issues with image optimization during static export,
  // you can disable it:
  images: {
    unoptimized: true,
  },
};
export default nextConfig;
