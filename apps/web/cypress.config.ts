import { defineConfig } from 'cypress';

export default defineConfig({
  component: {
    devServer: {
      bundler: 'webpack',
      framework: 'next',
    },
  },
  e2e: {
    baseUrl: 'http://localhost:3001',
  },
});
