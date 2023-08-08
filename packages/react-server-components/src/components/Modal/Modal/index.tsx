import { ReactTestingProps, spreadReactTestingProps } from '@mqs/react-testing-lib';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import cx from 'classnames';
import { ReactCxProps } from '@mqs/react-utils';

/**
 * Props for the `<Modal />` component.
 */
export interface ModalProps
  extends ReactTestingProps,
  ReactCxProps,
  DetailedHTMLProps<HTMLAttributes<HTMLDialogElement>, HTMLDialogElement> {
  /**
   * Should the modal close when the backdrop outside the modal is clicked.
   *
   * @default true
   */
  closeWhenClickedOutside?: boolean;
}

/**
 * Modal is used to show a dialog or a box when you click a button.
 *
 * See [interactive docs](https://mqschwanda.github.io/nextjs-monorepo-docker/?path=/docs/mqs-react-server-components-components-modal--docs) for more information.
 */
export function Modal({
  children,
  className,
  cx: cxProp,
  testId = 'Modal',
  closeWhenClickedOutside = true,
  ...rest
}: ModalProps) {
  return (
    <dialog
      className={cx(
        'modal',
        className,
        cxProp,
      )}
      {...spreadReactTestingProps({ testId })} // eslint-disable-line react/jsx-props-no-spreading
      {...rest} // eslint-disable-line react/jsx-props-no-spreading
    >
      { children }
      { closeWhenClickedOutside ? (
        <form
          className='modal-backdrop'
          method='dialog'
        >
          <button
            type='submit'
          >
            { 'close' }
          </button>
        </form>
      ) : null }
    </dialog>
  );
}
