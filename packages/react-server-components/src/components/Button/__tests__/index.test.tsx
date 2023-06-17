import { render } from '@testing-library/react';
import initStoryshots from '@/__tests__/initStoryshots';
import { Button } from '@';

initStoryshots({
  failOnReactKeyError: false,
  storyKindRegex: /^@mqs\/react-server-components\/components\/Button$/,
});

describe('@mqs/react-server-components', () => {
  describe('components', () => {
    describe('<Button />', () => {
      it('renders', () => {
        const testId = Button.name;
        const children = 'children...';

        const { getByTestId, asFragment } = render((
          <Button
            className='test'
          >
            { children }
          </Button>
        ));

        const element = getByTestId(testId);
        expect(element).toBeTruthy();

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
});
