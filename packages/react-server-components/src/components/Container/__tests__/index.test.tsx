import { render } from '@testing-library/react';
import { Container } from '@';

describe('@mqs/react-server-components', () => {
  describe('components', () => {
    describe('<Container />', () => {
      it('renders', () => {
        const testId = Container.name;
        const children = 'children...';

        const { getByTestId, asFragment } = render((
          <Container
            className='test'
            testId={testId}
          >
            { children }
          </Container>
        ));

        const element = getByTestId(testId);
        expect(element).toBeTruthy();

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
});
