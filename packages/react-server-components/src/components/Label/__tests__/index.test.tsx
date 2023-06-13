import { render } from '@testing-library/react';
import path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { Label } from '@';

initStoryshots({
  configPath: path.resolve(__dirname, '../../../../../storybook/.storybook'),
  storyKindRegex: /^@mqs\/react-server-components\/components\/Label$/,
});

describe('@mqs/react-server-components', () => {
  describe('components', () => {
    describe('<Label />', () => {
      it('renders', () => {
        const testId = Label.name;

        const { getByTestId, asFragment } = render((
          <Label
            className='test'
          >
            <span
              className='label-text'
            >
              { 'What is your name?' }
            </span>
            <span
              className='label-text-alt'
            >
              { 'Top Right label' }
            </span>
          </Label>
        ));

        const element = getByTestId(testId);
        expect(element).toBeTruthy();

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
});
