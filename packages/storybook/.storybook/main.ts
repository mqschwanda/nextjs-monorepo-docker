import type { StorybookConfig } from '@storybook/react-webpack5';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import path from 'path';

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
  webpackFinal: (config) => {
    if (!config.resolve) {
      config.resolve = {};
    }

    config.resolve.plugins = [
      ...config.resolve.plugins || [],
      new TsconfigPathsPlugin({
        // TODO: extend config for all workspaces
        configFile: path.resolve(__dirname, "../../react-server-components/tsconfig.json"),
        extensions: config.resolve.extensions,
      }),
    ]

    return config
  }
};
export default config;
