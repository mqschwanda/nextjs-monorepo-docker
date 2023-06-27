import { ReactTestingProps, spreadReactTestingProps } from '@mqs/react-testing-lib';
import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import cx from 'classnames';
import { ReactCxProps, buildEnumCx } from '@mqs/react-utils';
import { InputFileVariantColor, InputFileVariantSize } from './types';

export {
  InputFileVariantColor,
  InputFileVariantSize,
};

/**
 * Props for the `<InputFile />` component.
 */
export interface InputFileProps
  extends ReactTestingProps,
  ReactCxProps,
  Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'type'> {
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
  variantColor?: keyof typeof InputFileVariantColor,
  /**
   * size
   *
   * @default 'md'
   */
  variantSize?: keyof typeof InputFileVariantSize,
}

/**
 * an input field for uploading files.
 *
 * See [interactive docs](https://mqschwanda.github.io/nextjs-monorepo-docker/?path=/docs/mqs-react-server-components-components-input-inputfile--docs) for more information.
 */
export function InputFile({
  bordered = true,
  className,
  cx: cxProp,
  error = false,
  variantColor = 'primary',
  variantSize = 'md',
  testId = 'InputFile',
  ...rest
}: InputFileProps) {
  return (
    <input
      className={cx(
        'file-input',
        bordered ? 'file-input-bordered' : undefined,
        buildEnumCx(
          InputFileVariantColor,
          error ? 'error' : variantColor,
        ),
        buildEnumCx(
          InputFileVariantSize,
          variantSize,
        ),
        className,
        cxProp,
      )}
      type='file'
      {...spreadReactTestingProps({ testId })} // eslint-disable-line react/jsx-props-no-spreading
      {...rest} // eslint-disable-line react/jsx-props-no-spreading
    />
  );
}
