import type { Config } from 'jest';

const config: Config = {
  moduleNameMapper: {
    '@mqs/graphql-schema/loadSchema': '<rootDir>/../../node_modules/@mqs/graphql-schema/dist/loadSchema',
  },
  preset: '@mqs/jest-presets/jest/node',
  roots: [
    '<rootDir>/src',
  ],
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        babel: false,
        tsconfig: './tsconfig.jest.json',
      },
    ],
  },
};

export default config;
