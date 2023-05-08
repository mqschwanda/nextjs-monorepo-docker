import { render } from '@testing-library/react';
import { Container } from '..';

describe('<Container />', () => {
  it('renders correctly', () => {
    const testId = 'Container';
    const chilren = 'children...';

    const { getByTestId, asFragment } = render((
      <Container
        testId={testId}
      >
        { chilren }
      </Container>
    ));

    const element = getByTestId(testId);
    expect(element).toBeTruthy();

    expect(asFragment()).toMatchSnapshot();
  });
});
