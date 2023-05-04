module.exports = {
  extends: [
    'eslint-config-custom',
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
