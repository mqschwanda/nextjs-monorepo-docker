import type { Meta, StoryObj } from '@storybook/react';
import { Alert, Button } from '..';

const meta: Meta<typeof Alert> = {
  component: Alert,
  title: '@mqs/react-server-components/components/Alert',
};

export default meta;

type AlertStoryObj = StoryObj<typeof Alert>;

export const AlertExample: AlertStoryObj = {
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mollis.',
  },
  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export const AlertInfoExample: AlertStoryObj = {
  parameters: {
    controls: {
      hideNoControlsWarning: true,
    },
  },
  render: () => (
    <Alert
      variantColor='info'
    >
      <div>
        <svg
          className='stroke-current flex-shrink-0 w-6 h-6'
          fill='none'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
          />
        </svg>
        <span>{ 'New software update available.' }</span>
      </div>
    </Alert>
  ),
};

export const AlertSuccessExample: AlertStoryObj = {
  parameters: {
    controls: {
      hideNoControlsWarning: true,
    },
  },
  render: () => (
    <Alert
      variantColor='success'
    >
      <div>
        <svg
          className='stroke-current flex-shrink-0 h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
          />
        </svg>
        <span>{ 'Your purchase has been confirmed!' }</span>
      </div>
    </Alert>
  ),
};

export const AlertWarningExample: AlertStoryObj = {
  parameters: {
    controls: {
      hideNoControlsWarning: true,
    },
  },
  render: () => (
    <Alert
      variantColor='warning'
    >
      <div>
        <svg
          className='stroke-current flex-shrink-0 h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
          />
        </svg>
        <span>{ 'Warning: Invalid email address!' }</span>
      </div>
    </Alert>
  ),
};

export const AlertErrorExample: AlertStoryObj = {
  parameters: {
    controls: {
      hideNoControlsWarning: true,
    },
  },
  render: () => (
    <Alert
      variantColor='error'
    >
      <div>
        <svg
          className='stroke-current flex-shrink-0 h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
          />
        </svg>
        <span>{ 'Error! Task failed successfully.' }</span>
      </div>
    </Alert>
  ),
};

export const AlertWithButtonsExample: AlertStoryObj = {
  parameters: {
    controls: {
      hideNoControlsWarning: true,
    },
  },
  render: () => (
    <Alert>
      <div>
        <svg
          className='stroke-info flex-shrink-0 w-6 h-6'
          fill='none'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
          />
        </svg>
        <span>{ 'we use cookies for no reason.' }</span>
      </div>
      <div
        className='flex-none'
      >
        <Button
          variantColor='ghost'
          variantSize='sm'
        >
          { 'Deny' }
        </Button>
        <Button
          variantColor='primary'
          variantSize='sm'
        >
          { 'Accept' }
        </Button>
      </div>
    </Alert>
  ),
};

export const AlertWithTitleAndDescriptionExample: AlertStoryObj = {
  parameters: {
    controls: {
      hideNoControlsWarning: true,
    },
  },
  render: () => (
    <Alert>
      <div>
        <svg
          className='stroke-info flex-shrink-0 w-6 h-6'
          fill='none'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
          />
        </svg>
        <div>
          <h3
            className='font-bold'
          >
            { 'New message!' }
          </h3>
          <div
            className='text-xs'
          >
            { 'You have 1 unread message' }
          </div>
        </div>
      </div>
      <div
        className='flex-none'
      >
        <Button
          variantSize='sm'
        >
          { 'See' }
        </Button>
      </div>
    </Alert>
  ),
};
