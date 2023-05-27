import { render } from '@testing-library/react';
import { Typography } from '@';

describe('@mqs/react-client-components', () => {
  describe('components', () => {
    describe('<Typography />', () => {
      it('renders', () => {
        const testId = Typography.name;
        const chilren = 'children...';

        const { getByTestId, asFragment } = render((
          <Typography
            testId={testId}
          >
            { chilren }
          </Typography>
        ));

        const element = getByTestId(testId);
        expect(element).toBeTruthy();

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
});
