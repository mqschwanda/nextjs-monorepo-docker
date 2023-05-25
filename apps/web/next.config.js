const path = require('path');

/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  compiler: {
    emotion: false,
    reactRemoveProperties: false,
    removeConsole: false,
    styledComponents: false,
  },
  experimental: {
    appDir: true,
    outputFileTracingRoot: path.join(__dirname, '../../'),
    serverActions: true,
    serverComponentsExternalPackages: [
      '@mqs/react-server-components',
    ],
    swcTraceProfiling: true,
    typedRoutes: true,
  },
  output: 'standalone',
  reactStrictMode: true,
  async redirects() {
    return [
      {
        destination: '/home',
        permanent: true,
        source: '/',
      },
    ];
  },
  swcMinify: true,
  transpilePackages: [
    '@mqs/graphql-client',
    '@mqs/logger',
    '@mqs/react-client-components',
    '@mqs/react-server-components',
  ],
  typescript: {
    ignoreBuildErrors: false,
    tsconfigPath: './tsconfig.build.json',
  },
};
