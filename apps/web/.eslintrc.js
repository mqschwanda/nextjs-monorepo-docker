module.exports = {
  extends: [
    '@mqs/custom-client',
    'next',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
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
