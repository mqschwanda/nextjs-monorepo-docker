import type { Config } from 'jest';

const config: Config = {
  preset: '@mqs/jest-presets/node',
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
