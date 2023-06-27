import { ReactTestingProps, spreadReactTestingProps } from '@mqs/react-testing-lib';
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import cx from 'classnames';
import { ReactCxProps } from '@mqs/react-utils';
import { Label } from '@/components/Label';

/**
 * Props for the `<FormControl />` component.
 */
export interface FormControlProps
  extends ReactTestingProps,
  ReactCxProps,
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  /**
   * React node that is rendered as the label below the child input.
   */
  description?: ReactNode,
  /**
   * React node that is rendered as the error label below the child input.
   *
   * The error prop will render instead of the description prop if both are present.
   *
   * @default ''
   */
  error?: ReactNode,
  /**
   * The id of the element the labels are bound to.
   */
  htmlFor?: string,
  /**
   * React node that is rendered as the primary label above the child input.
   */
  label?: ReactNode,
}

/**
 * Input container
 *
 * See [interactive docs](https://mqschwanda.github.io/nextjs-monorepo-docker/?path=/docs/mqs-react-server-components-components-formcontrol--docs) for more information.
 */
export function FormControl({
  children,
  className,
  cx: cxProp,
  description,
  error = '',
  htmlFor,
  label,
  testId = 'FormControl',
  ...rest
}: FormControlProps) {
  return (
    <div
      className={cx(
        'form-control',
        className,
        cxProp,
      )}
      {...spreadReactTestingProps({ testId })} // eslint-disable-line react/jsx-props-no-spreading
      {...rest} // eslint-disable-line react/jsx-props-no-spreading
    >
      { label ? (
        <Label
          htmlFor={htmlFor}
        >
          <span
            className='label-text'
          >
            { label }
          </span>
        </Label>
      ) : null }
      { children }
      { error || description ? (
        <Label
          htmlFor={htmlFor}
        >
          <span
            className={cx(
              'label-text-alt',
              error ? 'text-error' : undefined,
            )}
          >
            { error || description }
          </span>
        </Label>
      ) : null }
    </div>
  );
}
