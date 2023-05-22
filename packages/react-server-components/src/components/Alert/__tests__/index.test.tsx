import { render } from '@testing-library/react';
import { Alert } from '..';

describe('@mqs/react-server-components', () => {
  describe('components', () => {
    describe('<Alert />', () => {
      it('renders', () => {
        const testId = Alert.name;
        const chilren = 'children...';

        const { getByTestId, asFragment } = render((
          <Alert
            className='test'
            testId={testId}
            variant='info'
          >
            { chilren }
          </Alert>
        ));

        const element = getByTestId(testId);
        expect(element).toBeTruthy();

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
});
