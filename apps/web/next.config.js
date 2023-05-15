const path = require('path');

module.exports = {
  experimental: {
    appDir: true,
    outputFileTracingRoot: path.join(__dirname, '../../'),
    serverComponentsExternalPackages: [
      '@mqs/react-server-components',
    ],
    typedRoutes: true,
  },
  output: 'standalone',
  reactStrictMode: true,
  transpilePackages: [
    '@mqs/graphql-client',
    '@mqs/logger',
    '@mqs/react-client-components',
    '@mqs/react-server-components',
  ],
};
