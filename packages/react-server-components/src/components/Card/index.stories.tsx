import type { Meta, StoryObj } from '@storybook/react';
import {
  Button,
  Card,
  CardActions,
  CardBody,
  CardTitle,
  IconClose,
} from '@';

const meta: Meta<typeof Card> = {
  component: Card,
  title: '@mqs/react-server-components/components/Card',
};

export default meta;

type CardStoryObj = StoryObj<typeof Card>;

export const CardExample: CardStoryObj = {
  parameters: {
    controls: {
      hideNoControlsWarning: true,
    },
  },
  render: () => (
    <Card>
      <figure>
        <img
          alt='Kittens'
          src='http://placekitten.com/1000/400'
        />
      </figure>
      <CardBody>
        <CardTitle>
          { 'Kittens!' }
        </CardTitle>
        <p>{ 'Kittens learn to walk when they are around three weeks old.' }</p>
        <CardActions
          cx={[
            'justify-end',
          ]}
        >
          <Button
            variantColor='primary'
          >
            { 'See More Kittens' }
          </Button>
        </CardActions>
      </CardBody>
    </Card>
  ),
};

export const CardCompactExample: CardStoryObj = {
  parameters: {
    controls: {
      hideNoControlsWarning: true,
    },
  },
  render: () => (
    <Card
      variantPadding='compact'
    >
      <figure>
        <img
          alt='Kittens'
          src='http://placekitten.com/1000/400'
        />
      </figure>
      <CardBody>
        <CardTitle>
          { 'Kittens!' }
        </CardTitle>
        <p>{ 'Kittens learn to walk when they are around three weeks old.' }</p>
        <CardActions
          cx={[
            'justify-end',
          ]}
        >
          <Button
            variantColor='primary'
          >
            { 'See More Kittens' }
          </Button>
        </CardActions>
      </CardBody>
    </Card>
  ),
};

export const CardWithBadgeExample: CardStoryObj = {
  parameters: {
    controls: {
      hideNoControlsWarning: true,
    },
  },
  render: () => (
    <Card>
      <figure>
        <img
          alt='Kittens'
          src='http://placekitten.com/1000/400'
        />
      </figure>
      <CardBody>
        <CardTitle>
          { 'Kittens!' }
          <div
            className='badge badge-secondary'
          >
            { 'Cute!' }
          </div>
        </CardTitle>
        <p>{ 'Kittens learn to walk when they are around three weeks old.' }</p>
        <CardActions
          cx={[
            'justify-end',
          ]}
        >
          <Button
            variantColor='primary'
          >
            { 'See More Kittens' }
          </Button>
        </CardActions>
      </CardBody>
    </Card>
  ),
};

export const CardWithBottomImageExample: CardStoryObj = {
  parameters: {
    controls: {
      hideNoControlsWarning: true,
    },
  },
  render: () => (
    <Card>
      <CardBody>
        <CardTitle>
          { 'Kittens!' }
        </CardTitle>
        <p>{ 'Kittens learn to walk when they are around three weeks old.' }</p>
        <CardActions
          cx={[
            'justify-end',
          ]}
        >
          <Button
            variantColor='primary'
          >
            { 'See More Kittens' }
          </Button>
        </CardActions>
      </CardBody>
      <figure>
        <img
          alt='Kittens'
          src='http://placekitten.com/1000/400'
        />
      </figure>
    </Card>
  ),
};

export const CardWithCenteredContentExample: CardStoryObj = {
  parameters: {
    controls: {
      hideNoControlsWarning: true,
    },
  },
  render: () => (
    <Card>
      <figure>
        <img
          alt='Kittens'
          src='http://placekitten.com/1000/400'
        />
      </figure>
      <CardBody
        cx={[
          'items-center',
          'text-center',
        ]}
      >
        <CardTitle>
          { 'Kittens!' }
        </CardTitle>
        <p>{ 'Kittens learn to walk when they are around three weeks old.' }</p>
        <CardActions>
          <Button
            variantColor='primary'
          >
            { 'See More Kittens' }
          </Button>
        </CardActions>
      </CardBody>
    </Card>
  ),
};

export const CardWithImageOverlayExample: CardStoryObj = {
  parameters: {
    controls: {
      hideNoControlsWarning: true,
    },
  },
  render: () => (
    <Card
      variantImage='full'
    >
      <figure>
        <img
          alt='Kittens'
          src='http://placekitten.com/1000/400'
        />
      </figure>
      <CardBody>
        <CardTitle>
          { 'Kittens!' }
        </CardTitle>
        <p>{ 'Kittens learn to walk when they are around three weeks old.' }</p>
        <CardActions
          cx={[
            'justify-end',
          ]}
        >
          <Button
            variantColor='primary'
          >
            { 'See More Kittens' }
          </Button>
        </CardActions>
      </CardBody>
    </Card>
  ),
};

export const CardWithNoImageExample: CardStoryObj = {
  parameters: {
    controls: {
      hideNoControlsWarning: true,
    },
  },
  render: () => (
    <Card>
      <CardBody>
        <CardTitle>
          { 'Kittens!' }
        </CardTitle>
        <p>{ 'Kittens learn to walk when they are around three weeks old.' }</p>
        <CardActions
          cx={[
            'justify-end',
          ]}
        >
          <Button
            variantColor='primary'
          >
            { 'See More Kittens' }
          </Button>
        </CardActions>
      </CardBody>
    </Card>
  ),
};

export const CardWithCustomColorExample: CardStoryObj = {
  parameters: {
    controls: {
      hideNoControlsWarning: true,
    },
  },
  render: () => (
    <Card
      cx={[
        'bg-primary',
        'text-primary-content',
      ]}
    >
      <CardBody>
        <CardTitle>
          { 'Kittens!' }
        </CardTitle>
        <p>{ 'Kittens learn to walk when they are around three weeks old.' }</p>
        <CardActions
          cx={[
            'justify-end',
          ]}
        >
          <Button>
            { 'See More Kittens' }
          </Button>
        </CardActions>
      </CardBody>
    </Card>
  ),
};

export const CardWithNeutralColorExample: CardStoryObj = {
  parameters: {
    controls: {
      hideNoControlsWarning: true,
    },
  },
  render: () => (
    <Card
      cx={[
        'bg-neutral',
        'text-neutral-content',
      ]}
    >
      <CardBody>
        <CardTitle>
          { 'Kittens!' }
        </CardTitle>
        <p>{ 'Kittens learn to walk when they are around three weeks old.' }</p>
        <CardActions
          cx={[
            'justify-end',
          ]}
        >
          <Button
            variantColor='primary'
          >
            { 'See More Kittens' }
          </Button>
        </CardActions>
      </CardBody>
    </Card>
  ),
};

export const CardWithActionOnTopExample: CardStoryObj = {
  parameters: {
    controls: {
      hideNoControlsWarning: true,
    },
  },
  render: () => (
    <Card>
      <CardBody>
        <CardActions
          cx={[
            'justify-end',
          ]}
        >
          <Button
            variantShape='square'
            variantSize='sm'
          >
            <IconClose />
          </Button>
        </CardActions>
        <p>{ 'We are using cookies for no reason.' }</p>
      </CardBody>
    </Card>
  ),
};

export const CardWithGlassExample: CardStoryObj = {
  parameters: {
    controls: {
      hideNoControlsWarning: true,
    },
  },
  render: () => (
    <Card
      cx='glass'
    >
      <figure>
        <img
          alt='Kittens'
          src='http://placekitten.com/1000/400'
        />
      </figure>
      <CardBody>
        <CardTitle>
          { 'Kittens!' }
        </CardTitle>
        <p>{ 'Kittens learn to walk when they are around three weeks old.' }</p>
        <CardActions
          cx={[
            'justify-end',
          ]}
        >
          <Button
            variantColor='primary'
          >
            { 'See More Kittens' }
          </Button>
        </CardActions>
      </CardBody>
    </Card>
  ),
};

export const CardWithImageOnSideExample: CardStoryObj = {
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
        <img
          alt='Kittens'
          src='http://placekitten.com/250/500'
        />
      </figure>
      <CardBody>
        <CardTitle>
          { 'Kittens!' }
        </CardTitle>
        <p>{ 'Kittens learn to walk when they are around three weeks old.' }</p>
        <CardActions
          cx={[
            'justify-end',
          ]}
        >
          <Button
            variantColor='primary'
          >
            { 'See More Kittens' }
          </Button>
        </CardActions>
      </CardBody>
    </Card>
  ),
};
