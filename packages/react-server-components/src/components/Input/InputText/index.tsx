import { ReactTestingProps, spreadReactTestingProps } from '@mqs/react-testing-lib';
import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import cx from 'classnames';
import { ReactCxProps, buildEnumCx } from '@/utilities';

/**
 * InputText color and style.
 */
export enum InputTextVariantColor {
  /**
   * Input with `accent` color
   */
  accent = 'input-accent',
  /**
   * Input with `error` color
   */
  error = 'input-error',
  /**
   * Input with `ghost` style
   */
  ghost = 'input-ghost',
  /**
   * Input with `info` color
   */
  info = 'input-info',
  /**
   * Input with `primary` color
   */
  primary = 'input-primary',
  /**
   * Input with `secondary` color
   */
  secondary = 'input-secondary',
  /**
   * Input with `success` color
   */
  success = 'input-success',
  /**
   * Input with `warning` color
   */
  warning = 'input-warning',
}

/**
 * InputText size.
 */
export enum InputTextVariantSize {
  /**
   * Large size for input
   */
  lg = 'input-lg',
  /**
   * Medium (default) size for input
   */
  md = 'input-md',
  /**
   * Small size for input
   */
  sm = 'input-sm',
  /**
   * Extra small size for input
   */
  xs = 'input-xs',
}

/**
 * Props for the `<InputText />` component.
 */
export interface InputTextProps
  extends ReactTestingProps,
  ReactCxProps,
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  /**
   * Adds border to input
   */
  bordered?: boolean,
  /**
   * Override the `variantColor` prop with the error style.
   */
  error?: boolean,
  /**
   * color and style
   */
  variantColor?: keyof typeof InputTextVariantColor,
  /**
   * size
   *
   * @default 'md'
   */
  variantSize?: keyof typeof InputTextVariantSize,
}

/**
 * a simple input field.
 */
export function InputText({
  bordered,
  className,
  cx: cxProp,
  error,
  variantColor,
  variantSize = 'md',
  testId,
  ...rest
}: InputTextProps) {
  return (
    <input
      className={cx(
        'input',
        bordered ? 'input-bordered' : undefined,
        buildEnumCx(
          InputTextVariantColor,
          error ? 'error' : variantColor,
        ),
        buildEnumCx(
          InputTextVariantSize,
          variantSize,
        ),
        className,
        cxProp,
      )}
      {...spreadReactTestingProps({ testId })} // eslint-disable-line react/jsx-props-no-spreading
      {...rest} // eslint-disable-line react/jsx-props-no-spreading
    />
  );
}
