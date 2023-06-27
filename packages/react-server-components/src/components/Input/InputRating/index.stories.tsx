import type { Meta } from '@storybook/react';
import { StoryObjReact, filterEnumForStorybook } from '@mqs/storybook-utils';
import {
  FormControl,
  InputRating,
  InputRatingVariantColor,
  InputRatingVariantMask,
  InputRatingVariantSize,
} from '@';

const meta: Meta<typeof InputRating> = {
  component: InputRating,
  title: '@mqs/react-server-components/components/Input/InputRating',
};

export default meta;

type InputRatingStoryObj = StoryObjReact<typeof InputRating>;

export const InputRatingExample: InputRatingStoryObj = {
  args: {
    max: 5,
    name: 'InputRatingExample',
  },
  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export const InputRatingColorExample: InputRatingStoryObj = {
  args: {
    max: 5,
    name: 'InputRatingColorExample',
  },
  parameters: {
    controls: {
      hideNoControlsWarning: true,
    },
  },
  render: ({
    name,
    ...props
  }) => filterEnumForStorybook(InputRatingVariantColor).map((variantColor) => (
    <FormControl
      cx='my-4'
      label={variantColor}
    >
      <InputRating
        name={`${name}-${variantColor}`}
        variantColor={variantColor}
        {...props} // eslint-disable-line react/jsx-props-no-spreading
      />
    </FormControl>
  )),
};

export const InputRatingMaskExample: InputRatingStoryObj = {
  args: {
    max: 5,
    name: 'InputRatingMaskExample',
  },
  parameters: {
    controls: {
      hideNoControlsWarning: true,
    },
  },
  render: ({
    name,
    ...props
  }) => filterEnumForStorybook(InputRatingVariantMask).map((variantMask) => (
    <FormControl
      cx='my-4'
      label={variantMask}
    >
      <InputRating
        name={`${name}-${variantMask}`}
        variantMask={variantMask}
        {...props} // eslint-disable-line react/jsx-props-no-spreading
      />
    </FormControl>
  )),
};

export const InputRatingSizeExample: InputRatingStoryObj = {
  args: {
    max: 5,
    name: 'InputRatingSizeExample',
  },
  parameters: {
    controls: {
      hideNoControlsWarning: true,
    },
  },
  render: ({
    name,
    ...props
  }) => filterEnumForStorybook(InputRatingVariantSize).map((variantSize) => (
    <FormControl
      cx='my-4'
      label={variantSize}
    >
      <InputRating
        name={`${name}-${variantSize}`}
        variantSize={variantSize}
        {...props} // eslint-disable-line react/jsx-props-no-spreading
      />
    </FormControl>
  )),
};
