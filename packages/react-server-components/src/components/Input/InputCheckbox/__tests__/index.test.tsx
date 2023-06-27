import { render } from '@testing-library/react';
import { InputCheckbox } from '@';
import initStoryshots from '@/__tests__/initStoryshots';

initStoryshots({
  failOnReactKeyError: false,
  storyKindRegex: /^@mqs\/react-server-components\/components\/Input\/InputCheckbox$/,
});

describe('@mqs/react-server-components', () => {
  describe('components', () => {
    describe('<InputCheckbox />', () => {
      it('renders', () => {
        const testId = InputCheckbox.name;

        const { getByTestId, asFragment } = render((
          <InputCheckbox
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
