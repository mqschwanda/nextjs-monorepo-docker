import type { Meta } from '@storybook/react';
import { StoryObjReact, filterEnumForStorybook } from '@mqs/storybook-utils';
import {
  FormControl,
  InputRange,
  InputRangeVariantColor,
  InputRangeVariantSize,
} from '@';

const meta: Meta<typeof InputRange> = {
  component: InputRange,
  title: '@mqs/react-server-components/components/Input/InputRange',
};

export default meta;

type InputRangeStoryObj = StoryObjReact<typeof InputRange>;

export const InputRangeExample: InputRangeStoryObj = {
  args: {

  },
  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export const InputRangeColorExample: InputRangeStoryObj = {
  args: {

  },
  parameters: {
    controls: {
      hideNoControlsWarning: true,
    },
  },
  render: (props) => filterEnumForStorybook(InputRangeVariantColor).map((variantColor) => (
    <FormControl
      cx='my-4'
      label={variantColor}
    >
      <InputRange
        variantColor={variantColor}
        {...props} // eslint-disable-line react/jsx-props-no-spreading
      />
    </FormControl>
  )),
};

export const InputRangeSizeExample: InputRangeStoryObj = {
  args: {

  },
  parameters: {
    controls: {
      hideNoControlsWarning: true,
    },
  },
  render: (props) => filterEnumForStorybook(InputRangeVariantSize).map((variantSize) => (
    <FormControl
      cx='my-4'
      label={variantSize}
    >
      <InputRange
        variantSize={variantSize}
        {...props} // eslint-disable-line react/jsx-props-no-spreading
      />
    </FormControl>
  )),
};
