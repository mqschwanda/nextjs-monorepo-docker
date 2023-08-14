import type { Meta } from '@storybook/react';
import type { StoryObjReact } from '@mqs/storybook-utils';
import {
  PlaceholderContent,
} from '@';

const meta: Meta<typeof PlaceholderContent> = {
  component: PlaceholderContent,
  title: '@mqs/react-server-components/components/PlaceholderContent',
};

export default meta;

type ContentBoxStoryObj = StoryObjReact<typeof PlaceholderContent>;

export const ContentBoxExample: ContentBoxStoryObj = {
  args: {
    children: 'I am placeholder content',
    contentDescription: 'I am a description',
    contentTitle: 'I am a title',
  },
  parameters: {
    controls: {
      expanded: true,
    },
  },
};
