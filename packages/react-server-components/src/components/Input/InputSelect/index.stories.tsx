import type { Meta } from '@storybook/react';
import { StoryObjReact, filterEnumForStorybook } from '@mqs/storybook-utils';
import {
  FormControl,
  InputSelect,
  InputSelectVariantColor,
  InputSelectVariantSize,
} from '@';

const meta: Meta<typeof InputSelect> = {
  component: InputSelect,
  title: '@mqs/react-server-components/components/Input/InputSelect',
};

export default meta;

type InputSelectStoryObj = StoryObjReact<typeof InputSelect>;

const children = [
  <option
    disabled
    selected
  >
    { 'Pick your favorite Simpson' }
  </option>,
  <option>
    { 'Homer' }
  </option>,
  <option>
    { 'Marge' }
  </option>,
  <option>
    { 'Bart' }
  </option>,
  <option>
    { 'Lisa' }
  </option>,
  <option>
    { 'Maggie' }
  </option>,
];

export const InputSelectExample: InputSelectStoryObj = {
  args: {
    bordered: true,
    children,
  },
  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export const InputSelectColorExample: InputSelectStoryObj = {
  args: {
    bordered: true,
    children,
  },
  parameters: {
    controls: {
      hideNoControlsWarning: true,
    },
  },
  render: (props) => filterEnumForStorybook(InputSelectVariantColor).map((variantColor) => (
    <FormControl
      cx='my-4'
      label={variantColor}
    >
      <InputSelect
        variantColor={variantColor}
        {...props} // eslint-disable-line react/jsx-props-no-spreading
      />
    </FormControl>
  )),
};

export const InputSelectSizeExample: InputSelectStoryObj = {
  args: {
    bordered: true,
    children,
  },
  parameters: {
    controls: {
      hideNoControlsWarning: true,
    },
  },
  render: (props) => filterEnumForStorybook(InputSelectVariantSize).map((variantSize) => (
    <FormControl
      cx='my-4'
      label={variantSize}
    >
      <InputSelect
        variantSize={variantSize}
        {...props} // eslint-disable-line react/jsx-props-no-spreading
      />
    </FormControl>
  )),
};
