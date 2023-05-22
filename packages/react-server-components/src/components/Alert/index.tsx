import { ReactTestingProps, spreadReactTestingProps } from '@mqs/react-testing-lib';
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import cx, { Argument as ClassName } from 'classnames';
import { buildEnumCx } from '../../utilities';

export enum AlertVariant {
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
  variant?: keyof typeof AlertVariant,
}

export function Alert({
  children,
  className,
  cx: cxProp,
  testId,
  variant,
  ...rest
}: AlertProps) {
  return (
    <div
      className={cx(
        'alert',
        buildEnumCx(
          AlertVariant,
          variant,
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
