module.exports = {
  env: {
    'cypress/globals': true,
  },
  extends: [
    '@mqs/eslint-config/client',
    'next',
    'plugin:cypress/recommended',
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
  plugins: [
    'cypress',
  ],
  root: true,
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          './eslintrc.js',
          './next.config.js',
          './cypress.config.ts',
          './cypress/**',
          '**/__tests__/**/*',
        ],
      },
    ],
  },
};
