import { ReactTestingProps, spreadReactTestingProps } from '@mqs/react-testing-lib';
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import cx from 'classnames';
import { ReactCxProps, buildEnumCx } from '@mqs/react-utils';

/**
 * Button color and style.
 */
export enum ButtonVariantColor {
  /**
   * Button with `accent` color.
   */
  accent = 'btn-accent',
  /**
   * Button with `error` color.
   */
  error = 'btn-error',
  /**
   * Button with ghost style.
   */
  ghost = 'btn-ghost',
  /**
   * Button with a glass effect.
   */
  glass = 'glass',
  /**
   * Button with `info` color.
   */
  info = 'btn-info',
  /**
   * Button styled as a link.
   */
  link = 'btn-link',
  /**
   * Button with `neutral` color.
   */
  neutral = 'btn-neutral',
  /**
   * Button with `primary` color.
   */
  primary = 'btn-primary',
  /**
   * Button with `secondary` color.
   */
  secondary = 'btn-secondary',
  /**
   * Button with `success` color.
   */
  success = 'btn-success',
  /**
   * Button with `warning` color.
   */
  warning = 'btn-warning',
}

/**
 * Button size
 */
export enum ButtonVariantSize {
  /**
   * Large button
   */
  lg = 'btn-lg',
  /**
   * Medium button (default)
   */
  md = 'btn-md',
  /**
   * Small button
   */
  sm = 'btn-sm',
  /**
   * Extra small button
   */
  xs = 'btn-xs',
}

/**
 * Button shape
 */
export enum ButtonVariantShape {
  /**
   * Circle button with a 1:1 ratio.
   */
  circle = 'btn-circle',
  /**
   * Square button with a 1:1 ratio.
   */
  square = 'btn-square',
}

/**
 * Props for the `<Button />` component.
 */
export interface ButtonProps
  extends ReactTestingProps,
  ReactCxProps,
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  /**
   * Force button to show active state.
   */
  active?: boolean,
  /**
   * Force button to show disabled state.
   */
  disabled?: boolean,
  /**
   * Button with loading spinner.
   */
  loading?: boolean,
  /**
   * Disables click animation.
   */
  noAnimation?: boolean,
  /**
   * Button color and style.
   */
  variantColor?: keyof typeof ButtonVariantColor,
  /**
   * Button shape
   */
  variantShape?: keyof typeof ButtonVariantShape,
  /**
   * Button size
   * @default md
   */
  variantSize?: keyof typeof ButtonVariantSize,
  /**
   * Wide button (more horizontal padding).
   */
  wide?: boolean,
}

/**
 * Buttons allow the user to take actions or make choices.
 */
export function Button({
  active,
  children,
  className,
  cx: cxProp,
  disabled,
  loading,
  noAnimation,
  variantColor,
  variantShape,
  variantSize = 'md',
  testId = 'Button',
  type = 'button',
  wide,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={cx(
        'btn',
        active ? 'btn-active' : undefined,
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
