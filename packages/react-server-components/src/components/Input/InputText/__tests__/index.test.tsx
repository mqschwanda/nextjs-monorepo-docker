import { render } from '@testing-library/react';
import initStoryshots from '@/__tests__/initStoryshots';
import { InputText } from '@';

initStoryshots({
  failOnReactKeyError: false,
  storyKindRegex: /^@mqs\/react-server-components\/components\/Input\/InputText$/,
});

describe('@mqs/react-server-components', () => {
  describe('components', () => {
    describe('<InputText />', () => {
      it('renders', () => {
        const testId = InputText.name;

        const { getByTestId, asFragment } = render((
          <InputText
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
