module.exports = {
  extends: [
    '@mqs/custom-server',
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
