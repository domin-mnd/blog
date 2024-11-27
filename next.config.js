const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => [
    {
      source: '/cdn/:path*',
      destination: '/api/cdn/:path*',
    },
  ],
  redirects: async () => [
    {
      source: "/me",
      destination: "https://domin.lol/",
      basePath: false,
      permanent: true,
    },
  ],
  // experimental: {
  //   appDir: true,
  // },
};

module.exports = withVanillaExtract(nextConfig);
