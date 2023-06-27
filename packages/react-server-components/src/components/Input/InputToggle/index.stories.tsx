import type { Meta } from '@storybook/react';
import { StoryObjReact, filterEnumForStorybook } from '@mqs/storybook-utils';
import {
  FormControl,
  InputToggle,
  InputToggleVariantColor,
  InputToggleVariantSize,
} from '@';

const meta: Meta<typeof InputToggle> = {
  component: InputToggle,
  title: '@mqs/react-server-components/components/Input/InputToggle',
};

export default meta;

type InputToggleStoryObj = StoryObjReact<typeof InputToggle>;

export const InputToggleExample: InputToggleStoryObj = {
  args: {

  },
  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export const InputToggleColorExample: InputToggleStoryObj = {
  args: {

  },
  parameters: {
    controls: {
      hideNoControlsWarning: true,
    },
  },
  render: (props) => filterEnumForStorybook(InputToggleVariantColor).map((variantColor) => (
    <FormControl
      cx='my-4'
      label={variantColor}
    >
      <InputToggle
        variantColor={variantColor}
        {...props} // eslint-disable-line react/jsx-props-no-spreading
      />
    </FormControl>
  )),
};

export const InputToggleSizeExample: InputToggleStoryObj = {
  args: {

  },
  parameters: {
    controls: {
      hideNoControlsWarning: true,
    },
  },
  render: (props) => filterEnumForStorybook(InputToggleVariantSize).map((variantSize) => (
    <FormControl
      cx='my-4'
      label={variantSize}
    >
      <InputToggle
        variantSize={variantSize}
        {...props} // eslint-disable-line react/jsx-props-no-spreading
      />
    </FormControl>
  )),
};
