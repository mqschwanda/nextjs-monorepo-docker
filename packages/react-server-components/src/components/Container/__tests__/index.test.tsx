import { render } from '@testing-library/react';
import initStoryshots from '@/__tests__/initStoryshots';
import { Container } from '@';

initStoryshots({
  storyKindRegex: /^@mqs\/react-server-components\/components\/Container$/,
});

describe('@mqs/react-server-components', () => {
  describe('components', () => {
    describe('<Container />', () => {
      it('renders', () => {
        const testId = Container.name;
        const children = 'children...';

        const { getByTestId, asFragment } = render((
          <Container
            className='test'
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
