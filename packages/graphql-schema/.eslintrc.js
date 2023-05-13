module.exports = {
  extends: [
    '@mqs/eslint-config/client',
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
          './eslintrc.codegen.js',
          './eslintrc.js',
          './codegen.ts',
          '**/__tests__/**/*',
        ],
      },
    ],
  },
};
