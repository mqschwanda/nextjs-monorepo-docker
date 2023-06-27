import { render } from '@testing-library/react';
import { InputTextarea } from '@';
import initStoryshots from '@/__tests__/initStoryshots';

initStoryshots({
  failOnReactKeyError: false,
  storyKindRegex: /^@mqs\/react-server-components\/components\/Input\/InputTextarea$/,
});

describe('@mqs/react-server-components', () => {
  describe('components', () => {
    describe('<InputTextarea />', () => {
      it('renders', () => {
        const testId = InputTextarea.name;

        const { getByTestId, asFragment } = render((
          <InputTextarea
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
