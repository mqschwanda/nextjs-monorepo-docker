const path = require('path');

/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  compiler: {
    emotion: false,
    experimentalDecorators: false,
    reactRemoveProperties: false,
    removeConsole: true,
    styledComponents: false,
  },
  experimental: {
    appDir: true,
    outputFileTracingRoot: path.join(__dirname, '../../'),
    serverComponentsExternalPackages: [
      '@mqs/react-server-components',
    ],
    swcTraceProfiling: true,
    typedRoutes: true,
  },
  output: 'standalone',
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: [
    '@mqs/graphql-client',
    '@mqs/logger',
    '@mqs/react-client-components',
    '@mqs/react-server-components',
  ],
};
