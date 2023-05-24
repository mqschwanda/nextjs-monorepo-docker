import { render } from '@testing-library/react';
import { InputFile } from '..';

describe('@mqs/react-server-components', () => {
  describe('components', () => {
    describe('<InputFile />', () => {
      it('renders', () => {
        const testId = InputFile.name;

        const { getByTestId, asFragment } = render((
          <InputFile
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
