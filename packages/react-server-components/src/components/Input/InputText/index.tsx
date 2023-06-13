import { ReactTestingProps, spreadReactTestingProps } from '@mqs/react-testing-lib';
import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import cx from 'classnames';
import { ReactCxProps, buildEnumCx } from '@mqs/react-utils';
import { InputTextVariantColor, InputTextVariantSize } from './types';

export { InputTextVariantColor, InputTextVariantSize };

/**
 * Props for the `<InputText />` component.
 */
export interface InputTextProps
  extends ReactTestingProps,
  ReactCxProps,
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  /**
   * Adds border to input
   *
   * @default true
   */
  bordered?: boolean,
  /**
   * Override the `variantColor` prop with the error style.
   *
   * @default false
   */
  error?: boolean,
  /**
   * color and style
   *
   * @default 'primary'
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
 *
 * See [interactive docs](https://mqschwanda.github.io/nextjs-monorepo-docker/?path=/docs/mqs-react-server-components-components-input-inputtext--docs) for more information.
 */
export function InputText({
  bordered = true,
  className,
  cx: cxProp,
  error = false,
  variantColor = 'primary',
  variantSize = 'md',
  testId = 'InputText',
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
