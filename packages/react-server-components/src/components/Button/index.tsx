import { ReactTestingProps, spreadReactTestingProps } from '@mqs/react-testing-lib';
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import cx, { Argument as ClassName } from 'classnames';
import { buildEnumCx } from '@/utilities';

export enum ButtonVariantColor {
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

export enum ButtonVariantSize {
  lg = 'btn-lg',
  sm = 'btn-sm',
  xs = 'btn-xs',
}

export enum ButtonVariantShape {
  circle = 'btn-circle',
  square = 'btn-square',
}

export interface ButtonProps
  extends ReactTestingProps,
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  cx?: ClassName,
  loading?: boolean,
  noAnimation?: boolean,
  variantColor?: keyof typeof ButtonVariantColor,
  variantShape?: keyof typeof ButtonVariantShape,
  variantSize?: keyof typeof ButtonVariantSize,
  wide?: boolean,
}

export function Button({
  children,
  className,
  variantColor,
  cx: cxProp,
  disabled,
  loading,
  noAnimation,
  variantShape,
  variantSize,
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
          ButtonVariantColor,
          variantColor,
        ),
        buildEnumCx(
          ButtonVariantShape,
          variantShape,
        ),
        buildEnumCx(
          ButtonVariantSize,
          variantSize,
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
