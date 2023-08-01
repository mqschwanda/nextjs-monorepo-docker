import type { Meta } from '@storybook/react';
import { StoryObjReact, filterEnumForStorybook } from '@mqs/storybook-utils';
import {
  LoadingIndicator,
  LoadingIndicatorVariantColor,
  LoadingIndicatorVariantIndicator,
  LoadingIndicatorVariantSize,
} from '@';

const meta: Meta<typeof LoadingIndicator> = {
  component: LoadingIndicator,
  title: '@mqs/react-server-components/components/LoadingIndicator',
};

export default meta;

type LoadingIndicatorStoryObj = StoryObjReact<typeof LoadingIndicator>;

export const LoadingIndicatorExample: LoadingIndicatorStoryObj = {
  args: {},
  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export const LoadingIndicatorColorExample: LoadingIndicatorStoryObj = {
  parameters: {
    controls: {
      hideNoControlsWarning: true,
    },
  },
  render: () => filterEnumForStorybook(LoadingIndicatorVariantColor).map((variantColor) => (
    <LoadingIndicator
      variantColor={variantColor}
    >
      { variantColor }
    </LoadingIndicator>
  )),
};

export const LoadingIndicatorSizeExample: LoadingIndicatorStoryObj = {
  parameters: {
    controls: {
      hideNoControlsWarning: true,
    },
  },
  render: () => filterEnumForStorybook(LoadingIndicatorVariantSize).map((variantSize) => (
    <LoadingIndicator
      variantSize={variantSize}
    >
      { variantSize }
    </LoadingIndicator>
  )),
};

export const LoadingIndicatorShapeExample: LoadingIndicatorStoryObj = {
  parameters: {
    controls: {
      hideNoControlsWarning: true,
    },
  },
  render: () => filterEnumForStorybook(LoadingIndicatorVariantIndicator).map((variantIndicator) => (
    <LoadingIndicator
      variantIndicator={variantIndicator}
    >
      { variantIndicator }
    </LoadingIndicator>
  )),
};
