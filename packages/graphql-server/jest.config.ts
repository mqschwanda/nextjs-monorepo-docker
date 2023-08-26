import type { Config } from 'jest';
import { jestDirectoryFiles, pathsToModuleNameMapper } from '@mqs/jest-preset/utilities';
import tsconfig from './tsconfig.json';

const config: Config = {
  moduleNameMapper: {
    '@mqs/graphql-schema/loadSchema': '<rootDir>/../../node_modules/@mqs/graphql-schema/dist/loadSchema',
    ...pathsToModuleNameMapper(
      tsconfig.compilerOptions.paths,
      {
        prefix: '<rootDir>/src/',
      },
    ),
  },
  preset: '@mqs/jest-preset/node',
  setupFilesAfterEnv: [
    ...jestDirectoryFiles('setupFilesAfterEnv'),
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
