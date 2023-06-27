import { ReactTestingProps, spreadReactTestingProps } from '@mqs/react-testing-lib';
import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import cx from 'classnames';
import { ReactCxProps, buildEnumCx } from '@mqs/react-utils';
import { InputRadioVariantColor, InputRadioVariantSize } from './types';

export {
  InputRadioVariantColor,
  InputRadioVariantSize,
};

/**
 * Props for the `<InputRadio />` component.
 */
export interface InputRadioProps
  extends ReactTestingProps,
  ReactCxProps,
  Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'type'> {
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
  variantColor?: keyof typeof InputRadioVariantColor,
  /**
   * size
   *
   * @default 'md'
   */
  variantSize?: keyof typeof InputRadioVariantSize,
}

/**
 * allow the user to select one option from a set.
 *
 * See [interactive docs](https://mqschwanda.github.io/nextjs-monorepo-docker/?path=/docs/mqs-react-server-components-components-input-inputradio--docs) for more information.
 */
export function InputRadio({
  className,
  cx: cxProp,
  error = false,
  variantColor = 'primary',
  variantSize = 'md',
  testId = 'InputRadio',
  ...rest
}: InputRadioProps) {
  return (
    <input
      className={cx(
        'radio',
        buildEnumCx(
          InputRadioVariantColor,
          error ? 'error' : variantColor,
        ),
        buildEnumCx(
          InputRadioVariantSize,
          variantSize,
        ),
        className,
        cxProp,
      )}
      type='radio'
      {...spreadReactTestingProps({ testId })} // eslint-disable-line react/jsx-props-no-spreading
      {...rest} // eslint-disable-line react/jsx-props-no-spreading
    />
  );
}
