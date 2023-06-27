import { render } from '@testing-library/react';
import { InputRange } from '@';
import initStoryshots from '@/__tests__/initStoryshots';

initStoryshots({
  failOnReactKeyError: false,
  storyKindRegex: /^@mqs\/react-server-components\/components\/Input\/InputRange$/,
});

describe('@mqs/react-server-components', () => {
  describe('components', () => {
    describe('<InputRange />', () => {
      it('renders', () => {
        const testId = InputRange.name;
        const min = 0;
        const max = 100;

        const { getByTestId, asFragment } = render((
          <InputRange
            className='test'
            max={max}
            min={min}
          />
        ));

        const element = getByTestId(testId);
        expect(element).toBeTruthy();

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
});
