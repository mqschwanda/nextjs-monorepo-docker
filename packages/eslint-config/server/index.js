module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    '@mqs/eslint-config/client',
    'eslint:recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
};
