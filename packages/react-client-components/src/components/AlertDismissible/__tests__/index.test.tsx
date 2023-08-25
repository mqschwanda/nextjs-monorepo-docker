import {
  act, fireEvent, render, waitFor,
} from '@testing-library/react';
import { AlertDismissible } from '@';

describe('@mqs/react-server-components', () => {
  describe('components', () => {
    describe('<AlertDismissible />', () => {
      it('renders', () => {
        const testId = AlertDismissible.name;
        const children = 'children...';

        const { getByTestId, asFragment } = render((
          <AlertDismissible
            className='test'
            variantBackgroundColor='info'
          >
            { children }
          </AlertDismissible>
        ));

        const element = getByTestId(testId);
        expect(element).toBeTruthy();
        expect(element.classList.contains('hidden')).toBe(false);

        expect(asFragment()).toMatchSnapshot();
      });

      it('hides when dismiss button is clicked', () => {
        const testId = AlertDismissible.name;
        const children = 'children...';

        const { getByTestId } = render((
          <AlertDismissible
            className='test'
            variantBackgroundColor='info'
          >
            { children }
          </AlertDismissible>
        ));

        const element = getByTestId(testId);
        expect(element).toBeTruthy();
        expect(element.classList.contains('hidden')).toBe(false);

        const [button] = element.getElementsByTagName('button');
        act(() => {
          fireEvent.click(button);
        });

        expect(element.classList.contains('hidden')).toBe(true);
      });

      it('hides when dismiss button is clicked and onClickDismiss prop returns true', async () => {
        const testId = AlertDismissible.name;
        const children = 'children...';
        const onClickDismiss = () => true;

        const { getByTestId } = render((
          <AlertDismissible
            className='test'
            onClickDismiss={onClickDismiss}
            variantBackgroundColor='info'
          >
            { children }
          </AlertDismissible>
        ));

        const element = getByTestId(testId);
        expect(element).toBeTruthy();
        expect(element.classList.contains('hidden')).toBe(false);

        const [button] = element.getElementsByTagName('button');
        act(() => {
          fireEvent.click(button);
        });

        // TODO: cleanup tests and figure out why waitFor needed to be added
        await waitFor(() => {
          expect(element.classList.contains('hidden')).toBe(true);
        });
      });

      it('does not hide when dismiss button is clicked and onClickDismiss prop returns false', () => {
        const testId = AlertDismissible.name;
        const children = 'children...';
        const onClickDismiss = () => false;

        const { getByTestId } = render((
          <AlertDismissible
            className='test'
            onClickDismiss={onClickDismiss}
            variantBackgroundColor='info'
          >
            { children }
          </AlertDismissible>
        ));

        const element = getByTestId(testId);
        expect(element).toBeTruthy();
        expect(element.classList.contains('hidden')).toBe(false);

        const [button] = element.getElementsByTagName('button');
        act(() => {
          fireEvent.click(button);
        });

        expect(element.classList.contains('hidden')).toBe(false);
      });
    });
  });
});
