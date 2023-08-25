import type { Config } from 'jest';

const config: Config = {
  preset: '@mqs/jest-preset/node',
  setupFiles: [ // TODO: load dynamically
    '<rootDir>/.jest/setupFiles/env.ts',
  ],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        babel: false,
        tsconfig: './tsconfig.jest.json',
      },
    ],
  },
  transformIgnorePatterns: [
    'node_modules/(?!serialize-error)',
  ],
};

export default config;
