import { render } from '@testing-library/react';
import { Label } from '..';

describe('@mqs/react-server-components', () => {
  describe('components', () => {
    describe('<Label />', () => {
      it('renders', () => {
        const testId = Label.name;

        const { getByTestId, asFragment } = render((
          <Label
            className='test'
            testId={testId}
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
