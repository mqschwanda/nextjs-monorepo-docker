import { render } from '@testing-library/react';
import { InputText } from '@';

describe('@mqs/react-server-components', () => {
  describe('components', () => {
    describe('<InputText />', () => {
      it('renders', () => {
        const testId = InputText.name;

        const { getByTestId, asFragment } = render((
          <InputText
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
