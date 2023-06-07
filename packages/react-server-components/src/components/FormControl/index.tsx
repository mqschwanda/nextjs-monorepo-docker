import { ReactTestingProps, spreadReactTestingProps } from '@mqs/react-testing-lib';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import cx, { Argument as ClassName } from 'classnames';

/**
 * Props for the `<FormControl />` component.
 */
export interface FormControlProps
  extends ReactTestingProps,
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  /**
   * Argument passed into classnames function.
   *
   * See [classnames docs](https://github.com/JedWatson/classnames).
   */
  cx?: ClassName,
}

/**
 * Input container
 */
export function FormControl({
  children,
  className,
  cx: cxProp,
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
      {...spreadReactTestingProps({ testId })} // eslint-disable-line react/jsx-props-no-spreading
      {...rest} // eslint-disable-line react/jsx-props-no-spreading
    >
      { children }
    </div>
  );
}
