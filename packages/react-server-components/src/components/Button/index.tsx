import { ReactTestingProps, spreadReactTestingProps } from '@mqs/react-testing-lib';
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import cx from 'classnames';
import { ReactCxProps, buildEnumCx } from '@mqs/react-utils';
import { ButtonVariantColor, ButtonVariantShape, ButtonVariantSize } from './types';

export { ButtonVariantColor, ButtonVariantShape, ButtonVariantSize };

/**
 * Props for the `<Button />` component.
 */
export interface ButtonProps
  extends ReactTestingProps,
  ReactCxProps,
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  /**
   * Force button to show active state.
   *
   * @default false
   */
  active?: boolean,
  /**
   * Force button to show disabled state.
   *
   * @default false
   */
  disabled?: boolean,
  /**
   * Button with loading spinner.
   *
   * @default false
   */
  loading?: boolean,
  /**
   * Disables click animation.
   *
   * @default false
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
   *
   * @default md
   */
  variantSize?: keyof typeof ButtonVariantSize,
  /**
   * Wide button (more horizontal padding).
   *
   * @default false
   */
  wide?: boolean,
}

/**
 * Buttons allow the user to take actions or make choices.
 *
 * See [interactive docs](https://mqschwanda.github.io/nextjs-monorepo-docker/?path=/docs/mqs-react-server-components-components-button--docs) for more information.
 */
export function Button({
  active = false,
  children,
  className,
  cx: cxProp,
  disabled = false,
  loading = false,
  noAnimation = false,
  variantColor,
  variantShape,
  variantSize = 'md',
  testId = 'Button',
  type = 'button',
  wide = false,
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
