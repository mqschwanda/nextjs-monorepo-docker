import type { Config } from 'jest';
import { pathsToModuleNameMapper } from '@mqs/jest-preset/utilities';
import tsconfig from './tsconfig.json';

const config: Config = {
  moduleNameMapper: {
    ...pathsToModuleNameMapper(
      tsconfig.compilerOptions.paths,
      {
        prefix: '<rootDir>/src/',
      },
    ),
  },
  preset: '@mqs/jest-preset/node',
  roots: [
    '<rootDir>/src',
  ],
  testEnvironment: 'jsdom',
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
