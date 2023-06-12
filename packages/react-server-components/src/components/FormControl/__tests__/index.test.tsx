import { render } from '@testing-library/react';
import path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { InputText, FormControl } from '@';

initStoryshots({
  configPath: path.resolve(__dirname, '../../../../../storybook/.storybook'),
  storyKindRegex: /^@mqs\/react-server-components\/components\/FormControl$/,
});

describe('@mqs/react-server-components', () => {
  describe('components', () => {
    describe('<FormControl />', () => {
      it('renders', () => {
        const testId = FormControl.name;

        const { getByTestId, asFragment } = render((
          <FormControl
            className='test'
          >
            <InputText
              placeholder='Type here'
            />
          </FormControl>
        ));

        const element = getByTestId(testId);
        expect(element).toBeTruthy();

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
});
