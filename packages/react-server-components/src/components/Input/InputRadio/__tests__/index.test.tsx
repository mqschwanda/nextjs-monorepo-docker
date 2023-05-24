import { render } from '@testing-library/react';
import { InputRadio } from '..';

describe('@mqs/react-server-components', () => {
  describe('components', () => {
    describe('<InputRadio />', () => {
      it('renders', () => {
        const testId = InputRadio.name;

        const { getByTestId, asFragment } = render((
          <InputRadio
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
