module.exports = {
  extends: [
    'custom',
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
