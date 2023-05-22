import { ReactTestingProps, spreadReactTestingProps } from '@mqs/react-testing-lib';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import cx, { Argument as ClassName } from 'classnames';

export interface IconCloseProps
  extends ReactTestingProps,
  Omit<DetailedHTMLProps<HTMLAttributes<SVGSVGElement>, SVGSVGElement>, 'children'> {
  cx?: ClassName
}

export function IconClose({
  className,
  cx: cxProp,
  testId,
  ...rest
}: IconCloseProps) {
  return (
    <svg
      className={cx(
        'stroke-current',
        className,
        cxProp,
      )}
      fill='none'
      stroke='currentColor'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      {...spreadReactTestingProps({ testId })} // eslint-disable-line react/jsx-props-no-spreading
      {...rest} // eslint-disable-line react/jsx-props-no-spreading
    >
      <path
        d='M6 18L18 6M6 6l12 12'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
      />
    </svg>
  );
}
