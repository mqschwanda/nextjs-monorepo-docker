import type { Meta, StoryObj } from '@storybook/react';
import { filterEnumForStorybook } from '@mqs/storybook-utils';
import {
  Button,
  ButtonVariantColor,
  ButtonVariantShape,
  ButtonVariantSize,
} from '@';

const meta: Meta<typeof Button> = {
  component: Button,
  title: '@mqs/react-server-components/components/Button',
};

export default meta;

type ButtonStoryObj = StoryObj<typeof Button>;

export const ButtonExample: ButtonStoryObj = {
  args: {
    children: 'Click Me!',
  },
  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export const ButtonColorExample: ButtonStoryObj = {
  parameters: {
    controls: {
      hideNoControlsWarning: true,
    },
  },
  // @ts-expect-error
  render: () => filterEnumForStorybook(ButtonVariantColor).map((variantColor) => (
    <Button
      variantColor={variantColor}
    >
      { variantColor }
    </Button>
  )),
};

export const ButtonSizeExample: ButtonStoryObj = {
  parameters: {
    controls: {
      hideNoControlsWarning: true,
    },
  },
  // @ts-expect-error
  render: () => filterEnumForStorybook(ButtonVariantSize).map((variantSize) => (
    <Button
      variantSize={variantSize}
    >
      { variantSize }
    </Button>
  )),
};

export const ButtonShapeExample: ButtonStoryObj = {
  parameters: {
    controls: {
      hideNoControlsWarning: true,
    },
  },
  // @ts-expect-error
  render: () => filterEnumForStorybook(ButtonVariantShape).map((variantShape) => (
    <Button
      variantShape={variantShape}
    >
      { variantShape.charAt(0) }
    </Button>
  )),
};

export const ButtonWideExample: ButtonStoryObj = {
  parameters: {
    controls: {
      hideNoControlsWarning: true,
    },
  },
  render: () => (
    <Button
      wide
    >
      { 'Wide' }
    </Button>
  ),
};

export const ButtonLoadingExample: ButtonStoryObj = {
  parameters: {
    controls: {
      hideNoControlsWarning: true,
    },
  },
  render: () => (
    <Button
      loading
    >
      { 'Loading' }
    </Button>
  ),
};

export const ButtonNoAnimationExample: ButtonStoryObj = {
  parameters: {
    controls: {
      hideNoControlsWarning: true,
    },
  },
  render: () => (
    <Button
      noAnimation
    >
      { 'No Animation' }
    </Button>
  ),
};
