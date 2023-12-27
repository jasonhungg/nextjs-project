/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // reactStrictMode: true,

  // // Add basePath
  // basePath: '/nextjs-project',
  // basePath: '/nextjs-project/',
  images: {
    loader: 'akamai',
    path: '',
  },
  assetPrefix: './',
};

module.exports = nextConfig;
