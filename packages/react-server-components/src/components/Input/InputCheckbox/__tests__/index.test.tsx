import { render } from '@testing-library/react';
import { InputCheckbox } from '..';

describe('@mqs/react-server-components', () => {
  describe('components', () => {
    describe('<InputCheckbox />', () => {
      it('renders', () => {
        const testId = InputCheckbox.name;

        const { getByTestId, asFragment } = render((
          <InputCheckbox
            className='test'
            testId={testId}
          />
        ));

        const element = getByTestId(testId);
        expect(element).toBeTruthy();

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
});
