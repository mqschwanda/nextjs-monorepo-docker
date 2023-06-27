import { render } from '@testing-library/react';
import { InputRadio } from '@';
import initStoryshots from '@/__tests__/initStoryshots';

initStoryshots({
  failOnReactKeyError: false,
  storyKindRegex: /^@mqs\/react-server-components\/components\/Input\/InputRadio$/,
});

describe('@mqs/react-server-components', () => {
  describe('components', () => {
    describe('<InputRadio />', () => {
      it('renders', () => {
        const testId = InputRadio.name;

        const { getByTestId, asFragment } = render((
          <InputRadio
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
