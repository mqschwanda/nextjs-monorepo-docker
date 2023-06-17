import { render } from '@testing-library/react';
import initStoryshots from '@/__tests__/initStoryshots';
import { Label } from '@';

initStoryshots({
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
