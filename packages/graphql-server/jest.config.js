module.exports = {
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.jest.json',
    },
  },
  moduleNameMapper: {
    '@mqs/graphql-schema/loadSchema': '<rootDir>/../../node_modules/@mqs/graphql-schema/dist/loadSchema',
  },
  preset: '@mqs/jest-presets/jest/node',
  setupFilesAfterEnv: [
    './jest.setupFilesAfterEnv.ts',
  ],
};
