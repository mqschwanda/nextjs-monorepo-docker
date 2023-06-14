import path from 'path';
import initStoryshots from '@storybook/addon-storyshots';

initStoryshots({
  configPath: path.resolve(__dirname, '../../../../../storybook/.storybook'),
  storyKindRegex: /^@mqs\/react-server-components\/components\/Skeleton$/,
});
