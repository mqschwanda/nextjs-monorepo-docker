import { ReactTestingProps, spreadReactTestingProps } from '@mqs/react-testing-lib';
import { DetailedHTMLProps, LabelHTMLAttributes, ReactNode } from 'react';
import cx from 'classnames';
import { ReactCxProps } from '@mqs/react-utils';

export interface LabelProps
  extends ReactTestingProps,
  ReactCxProps,
  DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> {
  children: ReactNode,
  center?: boolean,
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
