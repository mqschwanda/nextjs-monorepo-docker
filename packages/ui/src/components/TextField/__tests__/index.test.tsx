import { render } from '@testing-library/react';
import { TextField } from '..';

describe('@mqs/ui', () => {
  describe('components', () => {
    describe('<TextField />', () => {
      it('renders', () => {
        const testId = 'TextField';

        const { getByTestId, asFragment } = render((
          <TextField
            label='Text Field'
            testId={testId}
            value='value'
          />
        ));

        const element = getByTestId(testId);
        expect(element).toBeTruthy();

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
});
