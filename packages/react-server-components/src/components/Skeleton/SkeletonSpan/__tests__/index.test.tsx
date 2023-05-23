import { render } from '@testing-library/react';
import { SkeletonSpan } from '..';

describe('@mqs/react-server-components', () => {
  describe('components', () => {
    describe('<SkeletonSpan />', () => {
      it('renders', () => {
        const testId = SkeletonSpan.name;

        const { getByTestId, asFragment } = render((
          <SkeletonSpan
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
