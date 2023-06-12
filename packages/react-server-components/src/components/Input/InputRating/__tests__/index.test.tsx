import { render } from '@testing-library/react';
import { InputRating } from '@';

describe('@mqs/react-server-components', () => {
  describe('components', () => {
    describe('<InputRating />', () => {
      it('renders', () => {
        const testId = InputRating.name;

        const { getByTestId, asFragment } = render((
          <InputRating
            className='test'
            max={5}
            name='test-rating'
          />
        ));

        const element = getByTestId(testId);
        expect(element).toBeTruthy();

        expect(asFragment()).toMatchSnapshot();
      });

      it('renders halves', () => {
        const testId = InputRating.name;

        const { getByTestId, asFragment } = render((
          <InputRating
            className='test'
            half
            max={5}
            name='test-rating'
          />
        ));

        const element = getByTestId(testId);
        expect(element).toBeTruthy();

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
});
