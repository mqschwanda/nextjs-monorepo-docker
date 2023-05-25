import { ReactTestingProps, spreadReactTestingProps } from '@mqs/react-testing-lib';
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import cx, { Argument as ClassName } from 'classnames';
import { buildEnumCx } from '../../utilities';

export enum AlertVariantColor {
  info = 'alert-info',
  success = 'alert-success',
  warning = 'alert-warning',
  error = 'alert-error',
}

export interface AlertProps
  extends ReactTestingProps,
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode,
  cx?: ClassName
  variantColor?: keyof typeof AlertVariantColor,
}

export function Alert({
  children,
  className,
  cx: cxProp,
  testId,
  variantColor,
  ...rest
}: AlertProps) {
  return (
    <div
      className={cx(
        'alert',
        buildEnumCx(
          AlertVariantColor,
          variantColor,
        ),
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
