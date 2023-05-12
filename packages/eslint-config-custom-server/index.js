module.exports = {
  extends: [
    '@mqs/custom',
    "eslint:recommended"
  ],
  env: {
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
};
