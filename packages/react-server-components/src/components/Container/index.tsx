import { ReactTestingProps, spreadReactTestingProps } from '@mqs/react-testing-lib';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import cx, { Argument as ClassName } from 'classnames';

/**
 * Props for the `<Container />` component.
 */
export interface ContainerProps
  extends ReactTestingProps,
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  /**
  * Set horizontal margin to auto.
  */
  center?: boolean,
  /**
   * Argument passed into classnames function.
   *
   * See [classnames docs](https://github.com/JedWatson/classnames).
   */
  cx?: ClassName,
}

/**
 * A component for fixing an element's width to the current breakpoint.
 */
export function Container({
  children,
  className,
  center,
  cx: cxProp,
  testId,
  ...rest
}: ContainerProps) {
  return (
    <div
      className={cx(
        'container',
        center ? 'mx-auto' : undefined,
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
