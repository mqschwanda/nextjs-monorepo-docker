import type { StoryshotsOptions } from '@storybook/addon-storyshots/dist/api/StoryshotsOptions';
import initAddonStoryshots from '@storybook/addon-storyshots';

/**
 * Options for the `initStoryshots` function.
 */
export type InitStoryshotsOptions = StoryshotsOptions & {
  /**
   * If the snapshot tests fail when react logs a key error.
   *
   * Set this to `false` if stories avoid using the key because it would show up in the code example.
   *
   * @default true
   */
  failOnReactKeyError?: boolean
};

/**
 * A wrapper for the `@storybook/addon-storyshots` module
 *
 * See [addon storyshots docs](https://storybook.js.org/addons/@storybook/addon-storyshots) for more information.
 */
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

  initAddonStoryshots(options);
}
