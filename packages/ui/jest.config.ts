import type { Config } from 'jest';

const config: Config = {
  preset: '@mqs/jest-presets/jest/node',
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
