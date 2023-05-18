import { ReactTestingProps, spreadReactTestingProps } from '@mqs/react-testing-lib';
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import cx from 'classnames';

export interface ButtonProps
  extends ReactTestingProps,
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {

}

export function Button({
  children,
  className,
  testId,
  type = 'button',
  ...rest
}: ButtonProps) {
  return (
    <button
      className={cx(
        className,
        'btn',
      )}
      type={type} // eslint-disable-line react/button-has-type
      {...spreadReactTestingProps({ testId })} // eslint-disable-line react/jsx-props-no-spreading
      {...rest} // eslint-disable-line react/jsx-props-no-spreading
    >
      { children }
    </button>
  );
}
