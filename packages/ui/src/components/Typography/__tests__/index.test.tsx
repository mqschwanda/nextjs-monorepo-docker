import { render } from '@testing-library/react';
import { Typography } from '..';

describe('<Typography />', () => {
  it('renders correctly', () => {
    const testId = 'Typography';
    const chilren = 'children...';

    const { getByTestId, asFragment } = render((
      <Typography
        testId={testId}
      >
        { chilren }
      </Typography>
    ));

    const element = getByTestId(testId);
    expect(element).toBeTruthy();

    expect(asFragment()).toMatchSnapshot();
  });
});
