import { ReactTestingProps, spreadReactTestingProps } from '@mqs/react-testing-lib';
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import cx, { Argument as ClassName } from 'classnames';

export interface ContainerProps
  extends ReactTestingProps,
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode,
  center?: boolean,
  cx?: ClassName,
}

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
