module.exports = {
  extends: [
    '@mqs/eslint-config/next',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    babelOptions: {
      presets: [require.resolve('next/babel')],
    },
    project: [
      './tsconfig.eslint.json',
    ],
  },
  root: true,
};
