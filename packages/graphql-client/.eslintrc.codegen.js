module.exports = {
  extends: [
    'eslint-config-codegen',
  ],
  parserOptions: {
    project: [
      './tsconfig.json',
    ],
  },
  root: true,
};
