import type { Preview } from '@storybook/react';
import '@mqs/style/style.css';
import { themeDecorator, themeGlobalType } from '@mqs/storybook-utils';

const preview: Preview = {
  decorators: [themeDecorator],
  globalTypes: {
    theme: themeGlobalType,
  },
  parameters: {
    actions: {
      argTypesRegex: '^on[A-Z].*'
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      source: {
        type: 'dynamic',
      }
    }
  },
};

export default preview;
