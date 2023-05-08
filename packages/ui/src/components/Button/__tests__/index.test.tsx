import { render, fireEvent } from '@testing-library/react';
import { Button } from '..';

describe('<Button />', () => {
  it('renders correctly', () => {
    const testId = 'Button';
    const chilren = 'children...';
    const handleClick = jest.fn();

    const { getByTestId, asFragment } = render((
      <Button
        onClick={handleClick}
        testId={testId}
      >
        { chilren }
      </Button>
    ));

    const element = getByTestId(testId);
    expect(element).toBeTruthy();

    fireEvent.click(element);
    expect(handleClick).toBeCalled();

    expect(asFragment()).toMatchSnapshot();
  });
});
