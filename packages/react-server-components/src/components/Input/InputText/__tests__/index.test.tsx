import { render } from '@testing-library/react';
import path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { InputText } from '@';

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
  configPath: path.resolve(__dirname, '../../../../../../storybook/.storybook'),
  storyKindRegex: /^@mqs\/react-server-components\/components\/Input\/InputText$/,
});

describe('@mqs/react-server-components', () => {
  describe('components', () => {
    describe('<InputText />', () => {
      it('renders', () => {
        const testId = InputText.name;

        const { getByTestId, asFragment } = render((
          <InputText
            className='test'
            testId={testId}
          />
        ));

        const element = getByTestId(testId);
        expect(element).toBeTruthy();

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
});
