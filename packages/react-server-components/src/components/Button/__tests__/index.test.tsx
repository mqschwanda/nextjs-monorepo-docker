import { render } from '@testing-library/react';
import { Button } from '..';

describe('@mqs/react-server-components', () => {
  describe('components', () => {
    describe('<Button />', () => {
      it('renders', () => {
        const testId = 'Button';
        const chilren = 'children...';

        const { getByTestId, asFragment } = render((
          <Button
            className='test'
            testId={testId}
          >
            { chilren }
          </Button>
        ));

        const element = getByTestId(testId);
        expect(element).toBeTruthy();

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
});
