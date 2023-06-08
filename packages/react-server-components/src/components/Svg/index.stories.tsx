import type { Meta } from '@storybook/react';
import { StoryObjReact } from '@mqs/storybook-utils';
import { Svg } from '@';

const meta: Meta<typeof Svg> = {
  component: Svg,
  title: '@mqs/react-server-components/components/Svg',
};

export default meta;

type SvgStoryObj = StoryObjReact<typeof Svg>;

export const SvgExample: SvgStoryObj = {
  args: {
    cx: 'h-6 w-6',
    variantFillColor: 'none',
    variantStrokeColor: 'current',
    viewBox: '0 0 24 24',
  },
  parameters: {
    controls: {
      hideNoControlsWarning: true,
    },
  },
  render: (props) => (
    <Svg
      {...props} // eslint-disable-line react/jsx-props-no-spreading
    >
      <path
        d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
      />
    </Svg>
  ),
};
