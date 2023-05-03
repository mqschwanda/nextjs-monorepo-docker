module.exports = {
  root: true,
  extends: ["custom"],
  parserOptions: {
    project: [
      './tsconfig.json',
    ],
  },
  rules: {
    "import/prefer-default-export": [
      "off"
    ]
  }
};
