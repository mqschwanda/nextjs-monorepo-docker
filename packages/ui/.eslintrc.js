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
          './jest.config.js',
          '**/__tests__/**/*',
        ],
      },
    ],
    'import/prefer-default-export': [
      'off',
    ],
  },
};
