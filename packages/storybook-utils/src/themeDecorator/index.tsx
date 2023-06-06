import type { ReactRenderer } from '@storybook/react';
import type { DecoratorFunction, InputType } from '@storybook/types';

export const themeGlobalType: InputType = {
  defaultValue: 'light',
  description: 'Global Theme',
  toolbar: {
    dynamicTitle: false,
    icon: 'paintbrush',
    items: [
      'light',
      'dark',
    ],
    title: 'Theme',
  },
};

export const themeDecorator: DecoratorFunction<ReactRenderer> = (Story, context) => {
  const [element] = document.getElementsByTagName('html');

  element.setAttribute('data-theme', context.globals.theme);

  return ( // @ts-ignore
    <Story />
  );
};
