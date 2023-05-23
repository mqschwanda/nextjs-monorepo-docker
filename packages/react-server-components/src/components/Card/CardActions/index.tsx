import { ReactTestingProps, spreadReactTestingProps } from '@mqs/react-testing-lib';
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import cx, { Argument as ClassName } from 'classnames';

export interface CardActionsProps
  extends ReactTestingProps,
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode,
  cx?: ClassName,
}

export function CardActions({
  children,
  className,
  cx: cxProp,
  testId,
  ...rest
}: CardActionsProps) {
  return (
    <div
      className={cx(
        'card-actions',
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
