import { ReactTestingProps, spreadReactTestingProps } from '@mqs/react-testing-lib';
import { DetailedHTMLProps, LabelHTMLAttributes, ReactNode } from 'react';
import cx, { Argument as ClassName } from 'classnames';

export interface LabelProps
  extends ReactTestingProps,
  DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> {
  children: ReactNode,
  center?: boolean,
  cx?: ClassName,
}

export function Label({
  children,
  className,
  cx: cxProp,
  testId,
  ...rest
}: LabelProps) {
  return (
    <label
      className={cx(
        'label',
        className,
        cxProp,
      )}
      {...spreadReactTestingProps({ testId })} // eslint-disable-line react/jsx-props-no-spreading
      {...rest} // eslint-disable-line react/jsx-props-no-spreading
    >
      { children }
    </label>
  );
}
