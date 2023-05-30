module.exports = {
  extends: [
    '@mqs/eslint-config/client',
  ],
  parserOptions: {
    project: [
      './tsconfig.eslint.json',
    ],
  },
  root: true,
  rules: {
    'import/prefer-default-export': [
      'off',
    ],
    'no-console': [
      'off',
    ],
  },
};
