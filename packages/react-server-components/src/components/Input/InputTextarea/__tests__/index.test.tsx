import { render } from '@testing-library/react';
import { InputTextarea } from '..';

describe('@mqs/react-server-components', () => {
  describe('components', () => {
    describe('<InputTextarea />', () => {
      it('renders', () => {
        const testId = InputTextarea.name;

        const { getByTestId, asFragment } = render((
          <InputTextarea
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
