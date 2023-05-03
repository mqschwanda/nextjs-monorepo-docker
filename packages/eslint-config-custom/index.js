module.exports = {
  extends: [
    // 'next',
    'turbo',
    'prettier',
    'airbnb',
    'airbnb-typescript',
  ],
  parserOptions: {
    babelOptions: {
      presets: [require.resolve('next/babel')],
    },
  },
  rules: {
    "import/no-extraneous-dependencies": [
      "error",
      // {
      //   "devDependencies": [
      //     "**/*.test.*",
      //     "**/__test__/*",
      //     "jest.config.*",
      //     "jest.setup.*",
      //     "codegen.ts"
      //   ]
      // }
    ],
    "no-plusplus": [
      "off"
    ],
    "no-underscore-dangle": [
      "error",
      {
        "allow": [
          "_id"
        ]
      }
    ],
    "react/react-in-jsx-scope": "off",
    "react/jsx-first-prop-new-line": [
      "error",
      "always"
    ],
    "react/jsx-max-props-per-line": [
      "error",
      {
        "maximum": 1,
        "when": "always"
      }
    ],
    "react/jsx-sort-props": [
      "error",
      {
        "callbacksLast": false,
        "shorthandFirst": false,
        "shorthandLast": false,
        "ignoreCase": true,
        "noSortAlphabetically": false,
        "reservedFirst": false,
      }
    ],
    "jsx-quotes": [
      "error",
      "prefer-single"
    ],
    "react/jsx-curly-spacing": [
      "error",
      {
        "when": "always",
        "children": {
          "when": "always"
        },
        "attributes": {
          "when": "never"
        }
      }
    ],
    "sort-keys": [
      "error",
      "asc",
      {
        "caseSensitive": false,
        "natural": true,
        "minKeys": 2
      }
    ],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        "format": null,
        "leadingUnderscore": "allow",
        "selector": "default"
      }
    ],
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        "argsIgnorePattern": "^_",
        "caughtErrorsIgnorePattern": "^_",
        "destructuredArrayIgnorePattern": "^_",
        "varsIgnorePattern": "^_"
      }
    ]
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
