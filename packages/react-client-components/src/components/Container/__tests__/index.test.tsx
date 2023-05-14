import { render } from '@testing-library/react';
import { Container } from '..';

describe('@mqs/react-client-components', () => {
  describe('components', () => {
    describe('<Container />', () => {
      it('renders', () => {
        const testId = 'Container';
        const chilren = 'children...';

        const { getByTestId, asFragment } = render((
          <Container
            testId={testId}
          >
            { chilren }
          </Container>
        ));

        const element = getByTestId(testId);
        expect(element).toBeTruthy();

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
});
