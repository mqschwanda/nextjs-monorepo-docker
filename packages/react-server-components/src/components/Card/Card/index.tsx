import { ReactTestingProps, spreadReactTestingProps } from '@mqs/react-testing-lib';
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import cx, { Argument as ClassName } from 'classnames';

export interface CardProps
  extends ReactTestingProps,
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode,
  compact?: boolean,
  cx?: ClassName,
  side?: boolean,
}

export function Card({
  children,
  className,
  compact,
  cx: cxProp,
  testId,
  side,
  ...rest
}: CardProps) {
  return (
    <div
      className={cx(
        'card',
        'shadow-xl',
        compact ? 'card-compact' : undefined,
        side ? 'card-side' : undefined,
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
