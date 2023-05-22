import { render } from '@testing-library/react';
import { IconInfo } from '..';

describe('@mqs/react-server-components', () => {
  describe('components', () => {
    describe('<IconInfo />', () => {
      it('renders', () => {
        const testId = IconInfo.name;

        const { getByTestId, asFragment } = render((
          <IconInfo
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
