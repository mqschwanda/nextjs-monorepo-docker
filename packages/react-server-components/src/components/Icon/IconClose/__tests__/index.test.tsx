import { render } from '@testing-library/react';
import { IconClose } from '@';

describe('@mqs/react-server-components', () => {
  describe('components', () => {
    describe('Icon', () => {
      describe('<IconClose />', () => {
        it('renders', () => {
          const testId = IconClose.name;

          const { getByTestId, asFragment } = render((
            <IconClose
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
