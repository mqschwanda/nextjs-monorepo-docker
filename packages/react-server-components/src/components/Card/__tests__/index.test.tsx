import { render } from '@testing-library/react';
import initStoryshots from '@/__tests__/initStoryshots';
import {
  Button,
  Card,
  CardTitle,
  CardBody,
  CardActions,
} from '@';

initStoryshots({
  storyKindRegex: /^@mqs\/react-server-components\/components\/Card$/,
});

describe('@mqs/react-server-components', () => {
  describe('components', () => {
    describe('<Card />', () => {
      it('renders', () => {
        const testId = Card.name;
        const children = 'children...';

        const { getByTestId, asFragment } = render((
          <Card
            className='test'
          >
            <figure>
              <img
                alt='test'
                src='/assets/images/test.jpg'
              />
            </figure>
            <CardBody>
              <CardTitle>
                { 'Card Title' }
              </CardTitle>
              <p>
                { children }
              </p>
            </CardBody>
            <CardActions>
              <Button>
                { 'Click Me' }
              </Button>
            </CardActions>
          </Card>
        ));

        const element = getByTestId(testId);
        expect(element).toBeTruthy();

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
});
