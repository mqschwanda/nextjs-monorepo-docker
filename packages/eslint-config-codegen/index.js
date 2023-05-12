module.exports = {
  extends: [
    '@mqs/eslint-config-custom-client',
  ],
  ignorePatterns: [
    '!__generated__'
  ],
  rules: {
    "import/no-duplicates": [
      'off'
    ],
    "@typescript-eslint/no-use-before-define": [
      'off'
    ],
    "@typescript-eslint/no-unused-vars": [
      'off'
    ],
    "max-len": [
      'off'
    ]
  },
};
