import { render } from '@testing-library/react';
import { InputRating } from '@';
import initStoryshots from '@/__tests__/initStoryshots';
import { getMaskHalfClassName } from '@/components/Input/InputRating/utils';

initStoryshots({
  failOnReactKeyError: false,
  storyKindRegex: /^@mqs\/react-server-components\/components\/Input\/InputRating$/,
});

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
      describe('utils', () => {
        describe('getMaskHalfClassName', () => {
          it('returns undefined when half is false', () => {
            const value = getMaskHalfClassName({
              half: false,
            });

            expect(value).toBeUndefined();
          });

          it('returns undefined when index is 0', () => {
            const value = getMaskHalfClassName({
              half: true,
              i: 0,
            });

            expect(value).toBeUndefined();
          });

          it('returns mask-half-1 when index is odd', () => {
            const value = getMaskHalfClassName({
              half: true,
              i: 1,
            });

            expect(value).toBe('mask-half-1');
          });

          it('returns mask-half-2 when index is even', () => {
            const value = getMaskHalfClassName({
              half: true,
              i: 2,
            });

            expect(value).toBe('mask-half-2');
          });
        });
      });
    });
  });
});
