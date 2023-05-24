import { render } from '@testing-library/react';
import { InputText } from '../../Input';
import { FormControl } from '..';

describe('@mqs/react-server-components', () => {
  describe('components', () => {
    describe('<FormControl />', () => {
      it('renders', () => {
        const testId = FormControl.name;

        const { getByTestId, asFragment } = render((
          <FormControl
            className='test'
            testId={testId}
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
