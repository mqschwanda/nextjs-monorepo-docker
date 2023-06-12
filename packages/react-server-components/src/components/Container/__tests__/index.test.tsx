import { render } from '@testing-library/react';
import path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { Container } from '@';

initStoryshots({
  configPath: path.resolve(__dirname, '../../../../../storybook/.storybook'),
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
