import type { Preview, ReactRenderer } from '@storybook/react';
import '@mqs/style/style.css';
import { DecoratorFunction } from '@storybook/types';

const themeDecorator: DecoratorFunction<ReactRenderer> = (Story, context) => {
  console.log()

  let theme = 'light';

  if (context.globals.theme === 'dark') {
    theme = 'dark';
  }


  const [element] = document.getElementsByTagName('html');

  element.setAttribute('data-theme', theme);

  return ( // @ts-ignore
    <Story />
  );
}

const preview: Preview = {
  decorators: [themeDecorator],
  globalTypes: {
    theme: {
      description: 'Global Theme',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'paintbrush',
        items: [
          'light',
          'dark'
        ],
        dynamicTitle: false,
      },
    },
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
