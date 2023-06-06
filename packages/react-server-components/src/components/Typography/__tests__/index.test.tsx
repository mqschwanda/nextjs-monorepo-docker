import { render } from '@testing-library/react';
import { Typography } from '@';

describe('@mqs/react-server-components', () => {
  describe('components', () => {
    describe('<Typography />', () => {
      it('renders', () => {
        const testId = Typography.name;
        const children = 'children...';

        const { getByTestId, asFragment } = render((
          <Typography
            className='test'
            testId={testId}
          >
            { children }
          </Typography>
        ));

        const element = getByTestId(testId);
        expect(element).toBeTruthy();

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
});
