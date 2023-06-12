import type { Meta } from '@storybook/react';
import { StoryObjReact, filterEnumForStorybook } from '@mqs/storybook-utils';
import {
  FormControl,
  InputText,
  InputTextVariantColor,
  InputTextVariantSize,
} from '@';

const meta: Meta<typeof InputText> = {
  component: InputText,
  title: '@mqs/react-server-components/components/Input/InputText',
};

export default meta;

type InputTextStoryObj = StoryObjReact<typeof InputText>;

export const InputTextExample: InputTextStoryObj = {
  args: {
    bordered: true,
    placeholder: 'type here...',
  },
  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export const InputTextColorExample: InputTextStoryObj = {
  args: {
    bordered: true,
    placeholder: 'type here...',
  },
  parameters: {
    controls: {
      hideNoControlsWarning: true,
    },
  },
  render: (props) => filterEnumForStorybook(InputTextVariantColor).map((variantColor) => (
    <FormControl
      cx='my-4'
      label={variantColor}
    >
      <InputText
        variantColor={variantColor}
        {...props} // eslint-disable-line react/jsx-props-no-spreading
      />
    </FormControl>
  )),
};

export const InputTextSizeExample: InputTextStoryObj = {
  args: {
    bordered: true,
    placeholder: 'type here...',
  },
  parameters: {
    controls: {
      hideNoControlsWarning: true,
    },
  },
  render: (props) => filterEnumForStorybook(InputTextVariantSize).map((variantSize) => (
    <FormControl
      cx='my-4'
      label={variantSize}
    >
      <InputText
        variantSize={variantSize}
        {...props} // eslint-disable-line react/jsx-props-no-spreading
      />
    </FormControl>
  )),
};
