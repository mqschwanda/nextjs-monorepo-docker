import { ReactTestingProps, spreadReactTestingProps } from '@mqs/react-testing-lib';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import cx, { Argument as ClassName } from 'classnames';

export interface IconInfoProps
  extends ReactTestingProps,
  Omit<DetailedHTMLProps<HTMLAttributes<SVGSVGElement>, SVGSVGElement>, 'children'> {
  cx?: ClassName
}

export function IconInfo({
  className,
  cx: cxProp,
  testId,
  ...rest
}: IconInfoProps) {
  return (
    <svg
      className={cx(
        'stroke-current',
        className,
        cxProp,
      )}
      fill='none'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      {...spreadReactTestingProps({ testId })} // eslint-disable-line react/jsx-props-no-spreading
      {...rest} // eslint-disable-line react/jsx-props-no-spreading
    >
      <path
        d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
      />
    </svg>
  );
}
