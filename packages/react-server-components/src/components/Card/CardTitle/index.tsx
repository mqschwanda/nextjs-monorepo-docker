import { ReactTestingProps, spreadReactTestingProps } from '@mqs/react-testing-lib';
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import cx, { Argument as ClassName } from 'classnames';

export interface CardTitleProps
  extends ReactTestingProps,
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode,
  cx?: ClassName,
}

export function CardTitle({
  children,
  className,
  cx: cxProp,
  testId,
  ...rest
}: CardTitleProps) {
  return (
    <span
      className={cx(
        'card-title',
        className,
        cxProp,
      )}
      {...spreadReactTestingProps({ testId })} // eslint-disable-line react/jsx-props-no-spreading
      {...rest} // eslint-disable-line react/jsx-props-no-spreading
    >
      { children }
    </span>
  );
}
