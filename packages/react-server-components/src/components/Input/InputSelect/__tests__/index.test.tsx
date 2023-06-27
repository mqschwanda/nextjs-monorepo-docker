import { render } from '@testing-library/react';
import { InputSelect } from '@';
import initStoryshots from '@/__tests__/initStoryshots';

initStoryshots({
  failOnReactKeyError: false,
  storyKindRegex: /^@mqs\/react-server-components\/components\/Input\/InputSelect$/,
});

describe('@mqs/react-server-components', () => {
  describe('components', () => {
    describe('<InputSelect />', () => {
      it('renders', () => {
        const testId = InputSelect.name;

        const { getByTestId, asFragment } = render((
          <InputSelect
            className='test'
          >
            <option>
              { 'One' }
            </option>
            <option>
              { 'Two' }
            </option>
            <option>
              { 'Three' }
            </option>
          </InputSelect>
        ));

        const element = getByTestId(testId);
        expect(element).toBeTruthy();

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
});
