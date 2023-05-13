module.exports = {
  extends: [
    '@mqs/eslint-config/client',
  ],
  ignorePatterns: [
    '!__generated__',
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'off',
    ],
    '@typescript-eslint/no-use-before-define': [
      'off',
    ],
    'import/no-duplicates': [
      'off',
    ],
    'max-len': [
      'off',
    ],
  },
};
