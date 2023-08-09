import type { Meta } from '@storybook/react';
import type { StoryObjReact } from '@mqs/storybook-utils';
import {
  Menu,
  MenuTitle,
  MenuItem,
} from '@';

const meta: Meta<typeof Menu> = {
  component: Menu,
  title: '@mqs/react-server-components/components/Menu',
};

export default meta;

type MenuStoryObj = StoryObjReact<typeof Menu>;

export const MenuExample: MenuStoryObj = {
  parameters: {
    controls: {
      hideNoControlsWarning: true,
    },
  },
  render: (props) => (
    <Menu
      {...props} // eslint-disable-line react/jsx-props-no-spreading
    >
      { /* eslint-disable jsx-a11y/anchor-is-valid */ }
      <MenuTitle>
        <a
          href='#'
        >
          { 'Kittens!' }
        </a>
      </MenuTitle>
      <MenuItem>
        <a
          href='#'
        >
          { 'Normal Kitten' }
        </a>
      </MenuItem>
      <MenuItem
        variantState='active'
      >
        <a
          href='#'
        >
          { 'Active Kitten' }
        </a>
      </MenuItem>
      <MenuItem
        variantState='disabled'
      >
        <a
          href='#'
        >
          { 'Disabled Kitten' }
        </a>
      </MenuItem>
      <MenuItem
        variantState='focus'
      >
        <a
          href='#'
        >
          { 'Focused Kitten' }
        </a>
      </MenuItem>
      { /* eslint-enable jsx-a11y/anchor-is-valid */ }
    </Menu>
  ),
};
