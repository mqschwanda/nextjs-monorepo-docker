import type { StoryshotsOptions } from '@storybook/addon-storyshots/dist/api/StoryshotsOptions';
import initAddonStoryshots from '@storybook/addon-storyshots';
import path from 'path';

const configPath = path.resolve(__dirname, '../../../storybook/.storybook');

export type InitStoryshotsOptions = Omit<StoryshotsOptions, 'configPath'> & {
  failOnReactKeyError?: boolean
};

export default function initStoryshots({
  failOnReactKeyError = true,
  ...options
}: InitStoryshotsOptions) {
  if (failOnReactKeyError === false) {
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
  }

  initAddonStoryshots({
    ...options,
    configPath,
  });
}
