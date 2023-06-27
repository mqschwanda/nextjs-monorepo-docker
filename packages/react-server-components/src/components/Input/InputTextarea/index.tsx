import { ReactTestingProps, spreadReactTestingProps } from '@mqs/react-testing-lib';
import { DetailedHTMLProps, TextareaHTMLAttributes } from 'react';
import cx from 'classnames';
import { ReactCxProps, buildEnumCx } from '@mqs/react-utils';
import { InputTextareaVariantColor, InputTextareaVariantSize } from './types';

export { InputTextareaVariantColor, InputTextareaVariantSize };

/**
 * Props for the `<InputTextarea />` component.
 */
export interface InputTextareaProps
  extends ReactTestingProps,
  ReactCxProps,
  DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
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
  variantColor?: keyof typeof InputTextareaVariantColor,
  /**
   * size
   *
   * @default 'md'
   */
  variantSize?: keyof typeof InputTextareaVariantSize,
}

/**
 * an input that allows users to enter text in multiple lines.
 *
 * See [interactive docs](https://mqschwanda.github.io/nextjs-monorepo-docker/?path=/docs/mqs-react-server-components-components-input-inputtextarea--docs) for more information.
 */
export function InputTextarea({
  bordered,
  className,
  cx: cxProp,
  error = false,
  variantColor = 'primary',
  variantSize = 'md',
  testId = 'InputTextarea',
  ...rest
}: InputTextareaProps) {
  return (
    <textarea
      className={cx(
        'textarea',
        bordered ? 'textarea-bordered' : undefined,
        buildEnumCx(
          InputTextareaVariantColor,
          error ? 'error' : variantColor,
        ),
        buildEnumCx(
          InputTextareaVariantSize,
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
