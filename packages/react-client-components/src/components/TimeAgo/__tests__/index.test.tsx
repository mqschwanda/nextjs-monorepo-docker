import { render } from '@testing-library/react';
import { TimeAgo } from '@';

describe('@mqs/react-client-components', () => {
  describe('components', () => {
    describe('<TimeAgo />', () => {
      it('renders', () => {
        const testId = TimeAgo.name;

        const { getByTestId, asFragment } = render((
          <TimeAgo
            date={new Date()}
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
