import { render } from '@testing-library/react';
import initStoryshots from '@/__tests__/initStoryshots';
import { LoadingIndicator } from '@';

initStoryshots({
  failOnReactKeyError: false,
  storyKindRegex: /^@mqs\/react-server-components\/components\/LoadingIndicator$/,
});

describe('@mqs/react-server-components', () => {
  describe('components', () => {
    describe('<LoadingIndicator />', () => {
      it('renders', () => {
        const testId = LoadingIndicator.name;

        const { getByTestId, asFragment } = render((
          <LoadingIndicator
            className='test'
            testId={testId}
          />
        ));

        const element = getByTestId(testId);
        expect(element).toBeTruthy();

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
});
