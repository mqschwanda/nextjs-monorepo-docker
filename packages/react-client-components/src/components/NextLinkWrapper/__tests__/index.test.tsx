import { render } from '@testing-library/react';
import { NextLinkWrapper } from '@';

describe('@mqs/react-client-components', () => {
  describe('components', () => {
    describe('<NextLinkWrapper />', () => {
      it('renders', () => {
        const testId = NextLinkWrapper.name;
        const children = 'children...';
        const href = '/home';

        const { getByTestId, asFragment } = render((
          <NextLinkWrapper
            href={href}
            testId={testId}
          >
            <a
              href={href}
            >
              { children }
            </a>
          </NextLinkWrapper>
        ));

        const element = getByTestId(testId);
        expect(element).toBeTruthy();

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
});
