import { render } from '@testing-library/react';
import { SkeletonDiv } from '@';

describe('@mqs/react-server-components', () => {
  describe('components', () => {
    describe('<SkeletonDiv />', () => {
      it('renders', () => {
        const testId = SkeletonDiv.name;

        const { getByTestId, asFragment } = render((
          <SkeletonDiv
            className='test'
          />
        ));

        const element = getByTestId(testId);
        expect(element).toBeTruthy();

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
});
