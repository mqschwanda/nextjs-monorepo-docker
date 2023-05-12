module.exports = {
  extends: [
    '@mqs/custom-client',
  ],
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
          '**/__tests__/**/*',
        ],
      },
    ],
  },
};
