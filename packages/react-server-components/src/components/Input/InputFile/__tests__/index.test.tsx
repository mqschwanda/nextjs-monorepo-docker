import { render } from '@testing-library/react';
import { InputFile } from '@';
import initStoryshots from '@/__tests__/initStoryshots';

initStoryshots({
  failOnReactKeyError: false,
  storyKindRegex: /^@mqs\/react-server-components\/components\/Input\/InputFile$/,
});

describe('@mqs/react-server-components', () => {
  describe('components', () => {
    describe('<InputFile />', () => {
      it('renders', () => {
        const testId = InputFile.name;

        const { getByTestId, asFragment } = render((
          <InputFile
            className='test'
          />
        ));

        const element = getByTestId(testId);
        expect(element).toBeTruthy();

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
});
