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
   */
  error?: ReactNode,
  /**
   * React node that is rendered as the primary label above the child input.
   */
  label?: ReactNode,
}

/**
 * Input container
 */
export function FormControl({
  children,
  className,
  cx: cxProp,
  description,
  error = '',
  id,
  label,
  testId,
  ...rest
}: FormControlProps) {
  return (
    <div
      className={cx(
        'form-control',
        className,
        cxProp,
      )}
      id={id}
      {...spreadReactTestingProps({ testId })} // eslint-disable-line react/jsx-props-no-spreading
      {...rest} // eslint-disable-line react/jsx-props-no-spreading
    >
      { label ? (
        <Label
          htmlFor={id}
        >
          { label }
        </Label>
      ) : null }
      { children }
      { error || description ? (
        <Label
          htmlFor={id}
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
