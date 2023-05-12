module.exports = {
  extends: [
    '@mqs/custom',
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
    'import/prefer-default-export': [
      'off',
    ],
  },
};
