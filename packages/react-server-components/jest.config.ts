import type { Config } from 'jest';

const config: Config = {
  moduleNameMapper: {
    '^.+\\.module\\.css$': 'identity-obj-proxy',
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
