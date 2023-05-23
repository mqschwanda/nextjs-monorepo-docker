import { ReactTestingProps, spreadReactTestingProps } from '@mqs/react-testing-lib';
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import cx, { Argument as ClassName } from 'classnames';

export interface CardBodyProps
  extends ReactTestingProps,
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode,
  cx?: ClassName,
}

export function CardBody({
  children,
  className,
  cx: cxProp,
  testId,
  ...rest
}: CardBodyProps) {
  return (
    <div
      className={cx(
        'card-body',
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
