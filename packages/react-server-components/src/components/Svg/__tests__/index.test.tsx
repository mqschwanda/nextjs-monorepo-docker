import { render } from '@testing-library/react';
import initStoryshots from '@/__tests__/initStoryshots';
import { Svg } from '@';

initStoryshots({
  storyKindRegex: /^@mqs\/react-server-components\/components\/Svg$/,
});

describe('@mqs/react-server-components', () => {
  describe('components', () => {
    describe('<Svg />', () => {
      it('renders', () => {
        const testId = Svg.name;

        const { getByTestId, asFragment } = render((
          <Svg
            className='test'
          >
            <path
              d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
            />
          </Svg>
        ));

        const element = getByTestId(testId);
        expect(element).toBeTruthy();

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
});
