import type { Config } from 'jest';

const config: Config = {
  moduleNameMapper: {
    '@mqs/graphql-schema/loadSchema': '<rootDir>/../../node_modules/@mqs/graphql-schema/dist/loadSchema',
  },
  preset: '@mqs/jest-preset/node',
  setupFilesAfterEnv: [
    './src/__tests__/scripts/setupFilesAfterEnv.ts',
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
