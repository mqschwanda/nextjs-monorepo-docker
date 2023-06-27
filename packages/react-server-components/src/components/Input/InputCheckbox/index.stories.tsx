import type { Meta } from '@storybook/react';
import { StoryObjReact, filterEnumForStorybook } from '@mqs/storybook-utils';
import {
  FormControl,
  InputCheckbox,
  InputCheckboxVariantColor,
  InputCheckboxVariantSize,
} from '@';

const meta: Meta<typeof InputCheckbox> = {
  component: InputCheckbox,
  title: '@mqs/react-server-components/components/Input/InputCheckbox',
};

export default meta;

type InputCheckboxStoryObj = StoryObjReact<typeof InputCheckbox>;

export const InputCheckboxExample: InputCheckboxStoryObj = {
  args: {

  },
  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export const InputCheckboxColorExample: InputCheckboxStoryObj = {
  args: {

  },
  parameters: {
    controls: {
      hideNoControlsWarning: true,
    },
  },
  render: (props) => filterEnumForStorybook(InputCheckboxVariantColor).map((variantColor) => (
    <FormControl
      cx='my-4'
      label={variantColor}
    >
      <InputCheckbox
        variantColor={variantColor}
        {...props} // eslint-disable-line react/jsx-props-no-spreading
      />
    </FormControl>
  )),
};

export const InputCheckboxSizeExample: InputCheckboxStoryObj = {
  args: {

  },
  parameters: {
    controls: {
      hideNoControlsWarning: true,
    },
  },
  render: (props) => filterEnumForStorybook(InputCheckboxVariantSize).map((variantSize) => (
    <FormControl
      cx='my-4'
      label={variantSize}
    >
      <InputCheckbox
        variantSize={variantSize}
        {...props} // eslint-disable-line react/jsx-props-no-spreading
      />
    </FormControl>
  )),
};
