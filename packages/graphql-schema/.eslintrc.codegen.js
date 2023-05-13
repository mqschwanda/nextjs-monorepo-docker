module.exports = {
  extends:
  [
    '@mqs/eslint-config/codegen',
  ],
  parserOptions: {
    project: [
      './tsconfig.eslint.json',
    ],
  },
  root: true,
};
