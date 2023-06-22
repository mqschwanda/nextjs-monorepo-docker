import { initStoryshots as initStoryshotsMqs, InitStoryshotsOptions as InitStoryshotsOptionsMqs } from '@mqs/storybook-utils';
import path from 'path';

/**
 * Path to workspace storybook config
 */
const configPath = path.resolve(__dirname, '../../../storybook/.storybook');

/**
 * Options for the `initStoryshots` function.
 */
export type InitStoryshotsOptions = Omit<InitStoryshotsOptionsMqs, 'configPath'>;

/**
 * A wrapper for the `@mqs/storybook-utils` `initStoryshots` function which is a wrapper for the `@storybook/addon-storyshots` module
 *
 * See [addon storyshots docs](https://storybook.js.org/addons/@storybook/addon-storyshots) for more information.
 */
export default function initStoryshots(options: InitStoryshotsOptions) {
  initStoryshotsMqs({
    ...options,
    configPath,
  });
}
