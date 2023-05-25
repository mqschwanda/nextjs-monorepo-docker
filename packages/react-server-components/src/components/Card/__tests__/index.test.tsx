import { render } from '@testing-library/react';
import {
  Button,
  Card,
  CardTitle,
  CardBody,
  CardActions,
} from '@';

describe('@mqs/react-server-components', () => {
  describe('components', () => {
    describe('<Card />', () => {
      it('renders', () => {
        const testId = Card.name;
        const children = 'children...';

        const { getByTestId, asFragment } = render((
          <Card
            className='test'
            testId={testId}
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
