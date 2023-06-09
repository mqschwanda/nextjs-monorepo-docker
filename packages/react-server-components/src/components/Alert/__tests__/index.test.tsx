import { render } from '@testing-library/react';
import initStoryshots from '@/__tests__/initStoryshots';
import { Alert } from '@';

initStoryshots({
  storyKindRegex: /^@mqs\/react-server-components\/components\/Alert$/,
});

describe('@mqs/react-server-components', () => {
  describe('components', () => {
    describe('<Alert />', () => {
      it('renders', () => {
        const testId = Alert.name;
        const children = 'children...';

        const { getByTestId, asFragment } = render((
          <Alert
            className='test'
            variantBackgroundColor='info'
          >
            { children }
          </Alert>
        ));

        const element = getByTestId(testId);
        expect(element).toBeTruthy();

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
});
