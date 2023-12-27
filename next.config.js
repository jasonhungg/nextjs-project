const isRunningLocally = process.env.NEXT_PUBLIC_RUNNING_LOCALLY === 'true';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: isRunningLocally ? '' : '/nextjs-project',
};

module.exports = nextConfig;
