import type { Meta } from '@storybook/react';
import { StoryObjReact, filterEnumForStorybook } from '@mqs/storybook-utils';
import {
  FormControl,
  InputTextarea,
  InputTextareaVariantColor,
  InputTextareaVariantSize,
} from '@';

const meta: Meta<typeof InputTextarea> = {
  component: InputTextarea,
  title: '@mqs/react-server-components/components/Input/InputTextarea',
};

export default meta;

type InputTextareaStoryObj = StoryObjReact<typeof InputTextarea>;

export const InputTextareaExample: InputTextareaStoryObj = {
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

export const InputTextareaColorExample: InputTextareaStoryObj = {
  args: {
    bordered: true,
    placeholder: 'type here...',
  },
  parameters: {
    controls: {
      hideNoControlsWarning: true,
    },
  },
  render: (props) => filterEnumForStorybook(InputTextareaVariantColor).map((variantColor) => (
    <FormControl
      cx='my-4'
      label={variantColor}
    >
      <InputTextarea
        variantColor={variantColor}
        {...props} // eslint-disable-line react/jsx-props-no-spreading
      />
    </FormControl>
  )),
};

export const InputTextareaSizeExample: InputTextareaStoryObj = {
  args: {
    bordered: true,
    placeholder: 'type here...',
  },
  parameters: {
    controls: {
      hideNoControlsWarning: true,
    },
  },
  render: (props) => filterEnumForStorybook(InputTextareaVariantSize).map((variantSize) => (
    <FormControl
      cx='my-4'
      label={variantSize}
    >
      <InputTextarea
        variantSize={variantSize}
        {...props} // eslint-disable-line react/jsx-props-no-spreading
      />
    </FormControl>
  )),
};
