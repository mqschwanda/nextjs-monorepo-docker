import { Linter } from 'eslint';

const config: Linter.Config = {
  env: {
    'cypress/globals': true,
    es6: true,
    node: true,
  },
  extends: [
    '@mqs/eslint-config/client',
    'next',
    'plugin:cypress/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'cypress',
  ],
  rules: {
    'import/no-anonymous-default-export': 'warn',
  },
};

export {};
module.exports = config;
