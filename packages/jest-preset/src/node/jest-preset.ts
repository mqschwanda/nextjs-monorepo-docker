import type { Config } from 'jest';
import path from 'path';

const config: Config = {
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
    '\\.(css|less|sass|scss)$': '@mqs/jest-preset/stubs/css.js',
  },
  modulePathIgnorePatterns: [
    '<rootDir>/test/__fixtures__',
    '<rootDir>/node_modules',
    '<rootDir>/dist',
  ],
  preset: 'ts-jest',
  roots: [
    '<rootDir>',
  ],
  // Test spec file resolution pattern
  // Matches parent folder `__tests__` and filename
  // should contain `test` or `spec`.
  testRegex: '(/__tests__/.*(\\.|/)(test|spec))\\.tsx?$',
  transform: {
    '^.+\\.jsx?$': [
      'babel-jest',
      {
        configFile: path.resolve(__dirname, 'babel-config'),
      },
    ],
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        babel: false,
      },
    ],
  },
  transformIgnorePatterns: [
    'node_modules/?!serialize-error', // TODO: cleanup serialize error package for jest
  ],
};

export default config;
