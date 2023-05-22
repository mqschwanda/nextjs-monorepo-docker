import { ReactTestingProps, spreadReactTestingProps } from '@mqs/react-testing-lib';
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import cx, { Argument as ClassName } from 'classnames';
import { buildEnumCx } from '../../utilities';

enum ButtonColor {
  accent = 'btn-accent',
  error = 'btn-error',
  ghost = 'btn-ghost',
  glass = 'glass',
  info = 'btn-info',
  link = 'btn-link',
  primary = 'btn-primary',
  secondary = 'btn-secondary',
  success = 'btn-success',
  warning = 'btn-warning',
}

enum ButtonSize {
  lg = 'btn-lg',
  sm = 'btn-sm',
  xs = 'btn-xs',
}

enum ButtonShape {
  circle = 'btn-circle',
  square = 'btn-square',
}

export interface ButtonProps
  extends ReactTestingProps,
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  color?: keyof typeof ButtonColor,
  cx?: ClassName,
  loading?: boolean,
  noAnimation?: boolean,
  shape?: keyof typeof ButtonShape,
  size?: keyof typeof ButtonSize,
  wide?: boolean,
}

export function Button({
  children,
  className,
  color,
  cx: cxProp,
  disabled,
  loading,
  noAnimation,
  shape,
  size,
  testId,
  type = 'button',
  wide,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={cx(
        'btn',
        disabled ? 'btn-disabled' : undefined,
        loading ? 'loading' : undefined,
        noAnimation ? 'no-animation' : undefined,
        wide ? 'btn-wide' : undefined,
        buildEnumCx(
          ButtonColor,
          color,
        ),
        buildEnumCx(
          ButtonShape,
          shape,
        ),
        buildEnumCx(
          ButtonSize,
          size,
        ),
        className,
        cxProp,
      )}
      disabled={disabled}
      type={type} // eslint-disable-line react/button-has-type
      {...spreadReactTestingProps({ testId })} // eslint-disable-line react/jsx-props-no-spreading
      {...rest} // eslint-disable-line react/jsx-props-no-spreading
    >
      { children }
    </button>
  );
}
