import { ReactTestingProps, spreadReactTestingProps } from '@mqs/react-testing-lib';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import cx from 'classnames';
import { ReactCxProps } from '@mqs/react-utils';

/**
 * Props for the `<ModalBody />` component.
 */
export interface ModalBodyProps
  extends ReactTestingProps,
  ReactCxProps,
  Omit<DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement>, 'method'> {

}

/**
 * Container for content inside `<Modal />` component.
 *
 * See [interactive docs](https://mqschwanda.github.io/nextjs-monorepo-docker/?path=/docs/mqs-react-server-components-components-modal--docs) for more information.
 */
export function ModalBody({
  children,
  className,
  cx: cxProp,
  testId = 'ModalBody',
  ...rest
}: ModalBodyProps) {
  return (
    <form
      className={cx(
        'modal-box',
        className,
        cxProp,
      )}
      method='dialog'
      {...spreadReactTestingProps({ testId })} // eslint-disable-line react/jsx-props-no-spreading
      {...rest} // eslint-disable-line react/jsx-props-no-spreading
    >
      { children }
    </form>
  );
}
