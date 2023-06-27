import { render } from '@testing-library/react';
import { InputToggle } from '@';
import initStoryshots from '@/__tests__/initStoryshots';

initStoryshots({
  failOnReactKeyError: false,
  storyKindRegex: /^@mqs\/react-server-components\/components\/Input\/InputToggle$/,
});

describe('@mqs/react-server-components', () => {
  describe('components', () => {
    describe('<InputToggle />', () => {
      it('renders', () => {
        const testId = InputToggle.name;

        const { getByTestId, asFragment } = render((
          <InputToggle
            className='test'
          />
        ));

        const element = getByTestId(testId);
        expect(element).toBeTruthy();

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
});
