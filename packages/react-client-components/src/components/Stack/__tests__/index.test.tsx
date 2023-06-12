import { render } from '@testing-library/react';
import { Stack } from '@';

describe('@mqs/react-client-components', () => {
  describe('components', () => {
    describe('<Stack />', () => {
      it('renders', () => {
        const testId = Stack.name;

        const { getByTestId, asFragment } = render((
          <Stack>
            <div>
              { 'one' }
            </div>
            <div>
              { 'two' }
            </div>
          </Stack>
        ));

        const element = getByTestId(testId);
        expect(element).toBeTruthy();

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
});
