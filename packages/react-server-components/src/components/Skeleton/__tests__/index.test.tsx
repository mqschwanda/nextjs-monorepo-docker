import { render } from '@testing-library/react';
import { Skeleton } from '..';

describe('@mqs/react-server-components', () => {
  describe('components', () => {
    describe('<Skeleton />', () => {
      it('renders', () => {
        const testId = Skeleton.name;

        const { getByTestId, asFragment } = render((
          <Skeleton
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
