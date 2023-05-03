module.exports = {
  root: true,
  extends: [
    "custom",
    'next/core-web-vitals',
  ],
  parserOptions: {
    project: [
      './tsconfig.json',
    ],
  },
};
