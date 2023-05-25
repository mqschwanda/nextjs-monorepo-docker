import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  babel: () => ({
    "sourceType": "unambiguous",
    "presets": [
      [
        "@babel/preset-env",
        {
          "targets": {
            "chrome": 100
          }
        }
      ],
      "@babel/preset-typescript",
      [
        '@babel/preset-react',
        {
          runtime: 'automatic',
        }
      ],
    ],
    "plugins": []
  }),
  core: {
    disableTelemetry: true,
  },
  docs: {
    autodocs: true,
  },
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  stories: [
    '../../**/*.stories.@(js|jsx|ts|tsx)',
  ],
};
export default config;
