module.exports = {
  root: true,
  extends: ["eslint-config-codegen"],
  parserOptions: {
    project: [
      './tsconfig.json',
    ],
  },
};
