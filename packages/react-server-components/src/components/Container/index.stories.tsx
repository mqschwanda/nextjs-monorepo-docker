import type { Meta } from '@storybook/react';
import type { StoryObjReact } from '@mqs/storybook-utils';
import {
  Container,
} from '@';

const meta: Meta<typeof Container> = {
  component: Container,
  title: '@mqs/react-server-components/components/Container',
};

export default meta;

type ContainerStoryObj = StoryObjReact<typeof Container>;

export const ContainerExample: ContainerStoryObj = {
  args: {
    center: false,
    children: 'I am a container',
  },
  parameters: {
    controls: {
      expanded: true,
    },
  },
};
