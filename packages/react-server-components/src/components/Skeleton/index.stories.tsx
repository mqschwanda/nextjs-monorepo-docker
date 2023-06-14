import type { Meta } from '@storybook/react';
import { StoryObjReact } from '@mqs/storybook-utils';
import {
  Card,
  CardBody,
  CardTitle,
  SkeletonDiv,
  SkeletonSpan,
} from '@';

const meta: Meta = {
  title: '@mqs/react-server-components/components/Skeleton',
};

export default meta;

type SkeletonStoryObj = StoryObjReact<any>;

/**
 * Example of a card with content that is still loading that leverages the `<SkeletonDiv />` and `<SkeletonSpan />` components.
 */
export const SkeletonCardExample: SkeletonStoryObj = {
  parameters: {
    controls: {
      hideNoControlsWarning: true,
    },
  },
  render: () => (
    <Card
      variantImage='side'
    >
      <figure>
        <SkeletonDiv
          cx={[
            'h-[200px]',
            'w-[200px]',
          ]}
        />
      </figure>
      <CardBody>
        <CardTitle>
          <SkeletonSpan
            cx={[
              'w-[150px]',
            ]}
          />
        </CardTitle>
        <p>
          <SkeletonSpan
            cx={[
              'w-full',
            ]}
          />
        </p>
        <p>
          <SkeletonSpan
            cx={[
              'w-full',
            ]}
          />
        </p>
        <p>
          <SkeletonSpan
            cx={[
              'w-full',
            ]}
          />
        </p>
      </CardBody>
    </Card>
  ),
};
