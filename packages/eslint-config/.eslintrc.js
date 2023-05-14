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
    'import/no-import-module-exports': ['off'],
  },
};
