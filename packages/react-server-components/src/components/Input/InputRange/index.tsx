import { ReactTestingProps, spreadReactTestingProps } from '@mqs/react-testing-lib';
import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import cx from 'classnames';
import { ReactCxProps, buildEnumCx } from '@mqs/react-utils';
import { InputRangeVariantColor, InputRangeVariantSize } from './types';

export {
  InputRangeVariantColor,
  InputRangeVariantSize,
};

/**
 * Props for the `<InputRange />` component.
 */
export interface InputRangeProps
  extends ReactTestingProps,
  ReactCxProps,
  Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'max' | 'min' | 'type'> {
  /**
   * Override the `variantColor` prop with the error style.
   *
   * @default false
   */
  error?: boolean,
  /**
   * the maximum possible value.
   *
   * @default 100
   */
  max?: number,
  /**
   * the minimum possible value.
   *
   * @default 0
   */
  min?: number,
  /**
   * color and style
   *
   * @default 'primary'
   */
  variantColor?: keyof typeof InputRangeVariantColor,
  /**
   * size
   *
   * @default 'md'
   */
  variantSize?: keyof typeof InputRangeVariantSize,
}

/**
 * a slider is used to select a value by sliding a handle.
 *
 * See [interactive docs](https://mqschwanda.github.io/nextjs-monorepo-docker/?path=/docs/mqs-react-server-components-components-input-inputrange--docs) for more information.
 */
export function InputRange({
  className,
  cx: cxProp,
  error = false,
  max = 100,
  min = 0,
  testId = 'InputRange',
  variantColor = 'primary',
  variantSize = 'md',
  ...rest
}: InputRangeProps) {
  return (
    <input
      className={cx(
        'range',
        buildEnumCx(
          InputRangeVariantColor,
          error ? 'error' : variantColor,
        ),
        buildEnumCx(
          InputRangeVariantSize,
          variantSize,
        ),
        className,
        cxProp,
      )}
      max={max}
      min={min}
      type='range'
      {...spreadReactTestingProps({ testId })} // eslint-disable-line react/jsx-props-no-spreading
      {...rest} // eslint-disable-line react/jsx-props-no-spreading
    />
  );
}
