import type { Meta } from '@storybook/react';
import { StoryObjReact } from '@mqs/storybook-utils';
import {
  IconClose,
  IconInfo,
  IconType,
  Typography,
} from '@';

const meta: Meta<IconType> = {
  title: '@mqs/react-server-components/components/Icon',
};

export default meta;

type IconStoryObj = StoryObjReact<IconType>;

export const IconExample: IconStoryObj = {
  args: {
    cx: 'h-6 w-6',
  },
  parameters: {
    controls: {
      hideNoControlsWarning: true,
    },
  },
  render: (props) => [
    IconClose,
    IconInfo,
  ].map((Component) => (
    <>
      <Typography>
        { Component.name }
      </Typography>
      <Component
        {...props} // eslint-disable-line react/jsx-props-no-spreading
      />
      <br />
    </>
  )),
};
