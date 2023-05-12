module.exports = {
  extends: [
    '@mqs/client',
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
  },
};
