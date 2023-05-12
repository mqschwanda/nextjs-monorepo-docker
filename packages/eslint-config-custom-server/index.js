module.exports = {
  extends: [
    '@mqs/custom-client',
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
