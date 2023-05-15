module.exports = {
  extends: [
    '@mqs/eslint-config/client',
    'next',
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
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          './eslintrc.js',
          './next.config.js',
          '**/__tests__/**/*',
        ],
      },
    ],
  },
};
