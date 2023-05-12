module.exports = {
  extends:
  [
    'eslint-config-codegen',
  ],
  parserOptions: {
    project: [
      './tsconfig.eslint.json',
    ],
  },
  root: true,
};
