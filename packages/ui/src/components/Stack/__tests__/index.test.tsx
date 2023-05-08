import { render } from '@testing-library/react';
import { Stack } from '..';

describe('<Stack />', () => {
  it('renders correctly', () => {
    const testId = 'Stack';

    const { getByTestId, asFragment } = render((
      <Stack
        testId={testId}
      >
        <div>
          one
        </div>
        <div>
          two
        </div>
      </Stack>
    ));

    const element = getByTestId(testId);
    expect(element).toBeTruthy();

    expect(asFragment()).toMatchSnapshot();
  });
});
