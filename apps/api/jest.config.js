module.exports = {
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.jest.json',
    },
  },
  // Module file extensions for importing
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node',
  ],
  moduleNameMapper: {
    '@mqs/graphql-schema/loadSchema': '<rootDir>/../../node_modules/@mqs/graphql-schema/dist/loadSchema',
  },
  preset: '@mqs/jest-presets/jest/node',
  // The root of your source code, typically /src
  // `<rootDir>` is a token Jest substitutes
  roots: [
    '<rootDir>/src',
  ],
  // Runs special logic, such as cleaning up components
  // when using React Testing Library and adds special
  // extended assertions to Jest
  setupFilesAfterEnv: [
    // "@testing-library/react/cleanup-after-each",
    // "@testing-library/jest-dom/extend-expect"
  ],
  // Test spec file resolution pattern
  // Matches parent folder `__tests__` and filename
  // should contain `test` or `spec`.
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  // Jest transformations -- this adds support for TypeScript
  // using ts-jest
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
};
