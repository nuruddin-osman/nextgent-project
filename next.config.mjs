/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "4000",
        pathname: "/uploads/**",
      },
      // {
      //   protocol: "https",
      //   hostname: "",
      //   pathname: "/uploads/**",
      // },
    ],
  },
};

export default nextConfig;
