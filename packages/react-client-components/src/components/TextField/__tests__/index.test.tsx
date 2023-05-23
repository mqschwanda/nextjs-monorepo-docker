import { render } from '@testing-library/react';
import { TextField } from '..';

describe('@mqs/react-client-components', () => {
  describe('components', () => {
    describe('<TextField />', () => {
      it('renders', () => {
        const testId = TextField.name;

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
