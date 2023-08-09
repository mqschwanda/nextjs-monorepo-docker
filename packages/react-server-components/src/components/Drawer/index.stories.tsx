import type { Meta } from '@storybook/react';
import type { StoryObjReact } from '@mqs/storybook-utils';
import {
  Drawer, DrawerButtonToggle,
} from '@';

const meta: Meta<typeof Drawer> = {
  component: Drawer,
  title: '@mqs/react-server-components/components/Drawer',
};

export default meta;

type DrawerStoryObj = StoryObjReact<typeof Drawer>;

const childrenArgs = 'content';

const menuArgs = (
  <ul
    className='menu p-4 w-80 h-full bg-base-200'
  >
    <li>
      <button
        type='button'
      >
        { 'Navbar Item 1' }
      </button>
    </li>
    <li>
      <button
        type='button'
      >
        { 'Navbar Item 2' }
      </button>
    </li>
  </ul>
);

export const DrawerExample: DrawerStoryObj = {
  args: {
    children: childrenArgs,
    id: 'DrawerExample',
    menu: menuArgs,
  },
  parameters: {
    controls: {
      hideNoControlsWarning: true,
    },
  },
  render: ({
    children,
    ...props
  }) => (
    <Drawer
      {...props} // eslint-disable-line react/jsx-props-no-spreading
    >
      <DrawerButtonToggle
        drawerId={props.id}
        responsive={props.responsive}
      />
      { children }
    </Drawer>
  ),
};

export const DrawerRightSideExample: DrawerStoryObj = {
  args: {
    children: childrenArgs,
    id: 'DrawerRightSideExample',
    menu: menuArgs,
    rightSide: true,
  },
  parameters: {
    controls: {
      hideNoControlsWarning: true,
    },
  },
  render: ({
    children,
    ...props
  }) => (
    <Drawer
      {...props} // eslint-disable-line react/jsx-props-no-spreading
    >
      <DrawerButtonToggle
        drawerId={props.id}
        responsive={props.responsive}
      />
      { children }
    </Drawer>
  ),
};

export const DrawerResponsiveExample: DrawerStoryObj = {
  args: {
    children: childrenArgs,
    id: 'DrawerResponsiveExample',
    menu: menuArgs,
    responsive: true,
  },
  parameters: {
    controls: {
      hideNoControlsWarning: true,
    },
  },
  render: ({
    children,
    ...props
  }) => (
    <Drawer
      {...props} // eslint-disable-line react/jsx-props-no-spreading
    >
      <DrawerButtonToggle
        drawerId={props.id}
        responsive={props.responsive}
      />
      { children }
    </Drawer>
  ),
};
