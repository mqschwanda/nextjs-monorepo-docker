import { render } from '@testing-library/react';
import initStoryshots from '@/__tests__/initStoryshots';
import {
  Drawer,
} from '@';

initStoryshots({
  storyKindRegex: /^@mqs\/react-server-components\/components\/Drawer$/,
});

describe('@mqs/react-server-components', () => {
  describe('components', () => {
    describe('<Drawer />', () => {
      it('renders', () => {
        const testId = Drawer.name;
        const children = 'children...';

        const { getByTestId, asFragment } = render((
          <Drawer
            className='test'
            id={testId}
            testId={testId}
          >
            { children }
          </Drawer>
        ));

        const element = getByTestId(testId);
        expect(element).toBeTruthy();

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
});
