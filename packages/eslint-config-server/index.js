module.exports = {
  extends: [
    '@mqs/client',
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
