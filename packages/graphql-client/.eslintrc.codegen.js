module.exports = {
  extends: [
    '@mqs/eslint-config-codegen',
  ],
  parserOptions: {
    project: [
      './tsconfig.json',
    ],
  },
  root: true,
};
