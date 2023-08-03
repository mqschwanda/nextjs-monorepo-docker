import { render } from '@testing-library/react';
import { IconInfo } from '@';

describe('@mqs/react-server-components', () => {
  describe('components', () => {
    describe('Icon', () => {
      describe('<IconInfo />', () => {
        it('renders', () => {
          const testId = IconInfo.name;

          const { getByTestId, asFragment } = render((
            <IconInfo
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
});
