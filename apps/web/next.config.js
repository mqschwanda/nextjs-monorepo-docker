const path = require('path');

module.exports = {
  experimental: {
    appDir: true,
    outputFileTracingRoot: path.join(__dirname, '../../'),
    typedRoutes: true,
  },
  output: 'standalone',
  reactStrictMode: true,
  transpilePackages: [
    'ui',
  ],
};
