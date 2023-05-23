import { ReactTestingProps, spreadReactTestingProps } from '@mqs/react-testing-lib';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import cx, { Argument as ClassName } from 'classnames';

export interface SkeletonProps
  extends ReactTestingProps,
  Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'children'> {
  cx?: ClassName,
}

export function Skeleton({
  className,
  cx: cxProp,
  testId,
  ...rest
}: SkeletonProps) {
  return (
    <div
      className={cx(
        'animate-pulse',
        'bg-neutral-content',
        className,
        cxProp,
      )}
      {...spreadReactTestingProps({ testId })} // eslint-disable-line react/jsx-props-no-spreading
      {...rest} // eslint-disable-line react/jsx-props-no-spreading
    />
  );
}
