import path from 'path';
import initStoryshots from '@storybook/addon-storyshots';

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
  storyKindRegex: /^@mqs\/react-server-components\/components\/Icon$/,
});
