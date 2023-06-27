import type { Meta } from '@storybook/react';
import { StoryObjReact, filterEnumForStorybook } from '@mqs/storybook-utils';
import {
  FormControl,
  InputFile,
  InputFileVariantColor,
  InputFileVariantSize,
} from '@';

const meta: Meta<typeof InputFile> = {
  component: InputFile,
  title: '@mqs/react-server-components/components/Input/InputFile',
};

export default meta;

type InputFileStoryObj = StoryObjReact<typeof InputFile>;

export const InputFileExample: InputFileStoryObj = {
  args: {
    bordered: true,
  },
  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export const InputFileColorExample: InputFileStoryObj = {
  args: {
    bordered: true,
  },
  parameters: {
    controls: {
      hideNoControlsWarning: true,
    },
  },
  render: (props) => filterEnumForStorybook(InputFileVariantColor).map((variantColor) => (
    <FormControl
      cx='my-4'
      label={variantColor}
    >
      <InputFile
        variantColor={variantColor}
        {...props} // eslint-disable-line react/jsx-props-no-spreading
      />
    </FormControl>
  )),
};

export const InputFileSizeExample: InputFileStoryObj = {
  args: {
    bordered: true,
  },
  parameters: {
    controls: {
      hideNoControlsWarning: true,
    },
  },
  render: (props) => filterEnumForStorybook(InputFileVariantSize).map((variantSize) => (
    <FormControl
      cx='my-4'
      label={variantSize}
    >
      <InputFile
        variantSize={variantSize}
        {...props} // eslint-disable-line react/jsx-props-no-spreading
      />
    </FormControl>
  )),
};
