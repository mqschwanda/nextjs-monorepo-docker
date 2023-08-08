import { render } from '@testing-library/react';
import { JsonView } from '@';

describe('@mqs/react-client-components', () => {
  describe('components', () => {
    describe('<JsonView />', () => {
      it('renders', () => {
        const testId = JsonView.name;

        const { getByTestId, asFragment } = render((
          <JsonView
            src={{
              array: Array.from({ length: 50 }, (_, i) => ({ i: i + 1 })),
              object: {
                nestedObject: {
                  hello: 'world',
                },
              },
              string: 'hello world',
            }}
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
