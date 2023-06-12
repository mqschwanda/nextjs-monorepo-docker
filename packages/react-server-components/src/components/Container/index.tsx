import { ReactTestingProps, spreadReactTestingProps } from '@mqs/react-testing-lib';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import cx from 'classnames';
import { ReactCxProps } from '@/utilities';

/**
 * Props for the `<Container />` component.
 */
export interface ContainerProps
  extends ReactTestingProps,
  ReactCxProps,
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  /**
  * Set horizontal margin to auto.
  */
  center?: boolean,
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
