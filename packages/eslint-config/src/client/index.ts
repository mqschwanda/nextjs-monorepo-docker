import { Linter } from 'eslint';

const config: Linter.Config = {
  extends: [
    // 'next',
    'turbo',
    'prettier',
    'airbnb',
    'airbnb-typescript',
  ],
  ignorePatterns: [
    'dist',
    'build',
    '__generated__',
  ],
  overrides: [
    {
      env: {
        jest: true,
      },
      files: [
        '**/__tests__/**/*',
      ],
    },
  ],
  rules: {
    '@typescript-eslint/naming-convention': [
      'error',
      {
        format: null,
        leadingUnderscore: 'allow',
        selector: 'default',
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          './eslintrc.js',
          './jest.config.ts',
          '**/__tests__/**/*',
        ],
      },
    ],
    'jsx-quotes': [
      'error',
      'prefer-single',
    ],
    'no-plusplus': [
      'off',
    ],
    'no-underscore-dangle': [
      'error',
      {
        allow: [
          '_id',
        ],
      },
    ],
    'react/jsx-curly-spacing': [
      'error',
      {
        attributes: {
          when: 'never',
        },
        children: {
          when: 'always',
        },
        when: 'always',
      },
    ],
    'react/jsx-first-prop-new-line': [
      'error',
      'always',
    ],
    'react/jsx-max-props-per-line': [
      'error',
      {
        maximum: 1,
        when: 'always',
      },
    ],
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: false,
        ignoreCase: true,
        noSortAlphabetically: false,
        reservedFirst: false,
        shorthandFirst: false,
        shorthandLast: false,
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'sort-keys': [
      'error',
      'asc',
      {
        caseSensitive: false,
        minKeys: 2,
        natural: true,
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};

export {};
module.exports = config;
