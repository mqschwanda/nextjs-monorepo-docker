import { fireEvent, render } from '@testing-library/react';
import { AlertDismissable } from '..';

describe('@mqs/react-server-components', () => {
  describe('components', () => {
    describe('<AlertDismissable />', () => {
      it('renders', () => {
        const testId = AlertDismissable.name;
        const chilren = 'children...';

        const { getByTestId, asFragment } = render((
          <AlertDismissable
            className='test'
            testId={testId}
            variant='info'
          >
            { chilren }
          </AlertDismissable>
        ));

        const element = getByTestId(testId);
        expect(element).toBeTruthy();
        expect(element.classList.contains('hidden')).toBe(false);

        expect(asFragment()).toMatchSnapshot();
      });

      it('hides when dismisse button is clicked', () => {
        const testId = AlertDismissable.name;
        const chilren = 'children...';

        const { getByTestId } = render((
          <AlertDismissable
            className='test'
            testId={testId}
            variant='info'
          >
            { chilren }
          </AlertDismissable>
        ));

        const element = getByTestId(testId);
        expect(element).toBeTruthy();
        expect(element.classList.contains('hidden')).toBe(false);

        const [button] = element.getElementsByTagName('button');
        fireEvent.click(button);

        expect(element.classList.contains('hidden')).toBe(true);
      });

      it('hides when dismisse button is clicked and onClickDismiss prop returns true', () => {
        const testId = AlertDismissable.name;
        const chilren = 'children...';
        const onClickDismiss = () => true;

        const { getByTestId } = render((
          <AlertDismissable
            className='test'
            onClickDismiss={onClickDismiss}
            testId={testId}
            variant='info'
          >
            { chilren }
          </AlertDismissable>
        ));

        const element = getByTestId(testId);
        expect(element).toBeTruthy();
        expect(element.classList.contains('hidden')).toBe(false);

        const [button] = element.getElementsByTagName('button');
        fireEvent.click(button);

        expect(element.classList.contains('hidden')).toBe(true);
      });

      it('does not hide when dismisse button is clicked and onClickDismiss prop returns false', () => {
        const testId = AlertDismissable.name;
        const chilren = 'children...';
        const onClickDismiss = () => false;

        const { getByTestId } = render((
          <AlertDismissable
            className='test'
            onClickDismiss={onClickDismiss}
            testId={testId}
            variant='info'
          >
            { chilren }
          </AlertDismissable>
        ));

        const element = getByTestId(testId);
        expect(element).toBeTruthy();
        expect(element.classList.contains('hidden')).toBe(false);

        const [button] = element.getElementsByTagName('button');
        fireEvent.click(button);

        expect(element.classList.contains('hidden')).toBe(false);
      });
    });
  });
});
