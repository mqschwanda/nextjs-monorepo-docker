import { render } from '@testing-library/react';
import initStoryshots from '@/__tests__/initStoryshots';
import {
  Menu,
  MenuTitle,
  MenuItem,
} from '@';

initStoryshots({
  storyKindRegex: /^@mqs\/react-server-components\/components\/Menu$/,
});

describe('@mqs/react-server-components', () => {
  describe('components', () => {
    describe('<Menu />', () => {
      it('renders', () => {
        const testId = Menu.name;
        /* eslint-disable jsx-a11y/anchor-is-valid */
        const children = (
          <>
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
          </>
        );
        /* eslint-enable jsx-a11y/anchor-is-valid */

        const { getByTestId, asFragment } = render((
          <Menu
            className='test'
            testId={testId}
          >
            { children }
          </Menu>
        ));

        const element = getByTestId(testId);
        expect(element).toBeTruthy();

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
});
