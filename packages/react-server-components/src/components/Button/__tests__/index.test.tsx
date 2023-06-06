import { render } from '@testing-library/react';
import path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { Button } from '@';

const consoleError = jest.spyOn(console, 'error');

beforeAll(() => {
  consoleError.mockImplementation((...args) => {
    const [message] = args;
    if (message.includes('Each child in a list should have a unique "key" prop.')) {
      return;
    }

    console.error(...args); // eslint-disable-line no-console
  });
});

afterAll(() => {
  consoleError.mockRestore();
});

initStoryshots({
  configPath: path.resolve(__dirname, '../../../../../storybook/.storybook'),
  storyKindRegex: /^@mqs\/react-server-components\/components\/Button$/,
});

describe('@mqs/react-server-components', () => {
  describe('components', () => {
    describe('<Button />', () => {
      it('renders', () => {
        const testId = Button.name;
        const children = 'children...';

        const { getByTestId, asFragment } = render((
          <Button
            className='test'
            testId={testId}
          >
            { children }
          </Button>
        ));

        const element = getByTestId(testId);
        expect(element).toBeTruthy();

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
});
