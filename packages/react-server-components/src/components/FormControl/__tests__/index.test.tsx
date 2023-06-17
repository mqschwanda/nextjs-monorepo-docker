import { render } from '@testing-library/react';
import initStoryshots from '@/__tests__/initStoryshots';
import { InputText, FormControl } from '@';

initStoryshots({
  storyKindRegex: /^@mqs\/react-server-components\/components\/FormControl$/,
});

describe('@mqs/react-server-components', () => {
  describe('components', () => {
    describe('<FormControl />', () => {
      it('renders', () => {
        const testId = FormControl.name;

        const { getByTestId, asFragment } = render((
          <FormControl
            className='test'
          >
            <InputText
              placeholder='Type here'
            />
          </FormControl>
        ));

        const element = getByTestId(testId);
        expect(element).toBeTruthy();

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
});
