import { ReactTestingProps, spreadReactTestingProps } from '@mqs/react-testing-lib';
import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import cx from 'classnames';
import { ReactCxProps, buildEnumCx } from '@mqs/react-utils';
import { InputCheckboxVariantColor, InputCheckboxVariantSize } from './types';

export {
  InputCheckboxVariantColor,
  InputCheckboxVariantSize,
};

/**
 * Props for the `<InputCheckbox />` component.
 */
export interface InputCheckboxProps
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
  variantColor?: keyof typeof InputCheckboxVariantColor,
  /**
   * size
   *
   * @default 'md'
   */
  variantSize?: keyof typeof InputCheckboxVariantSize,
}

/**
 * used to select or deselect a value.
 *
 * See [interactive docs](https://mqschwanda.github.io/nextjs-monorepo-docker/?path=/docs/mqs-react-server-components-components-input-inputcheckbox--docs) for more information.
 */
export function InputCheckbox({
  className,
  cx: cxProp,
  error = false,
  variantColor = 'primary',
  variantSize = 'md',
  testId = 'InputCheckbox',
  ...rest
}: InputCheckboxProps) {
  return (
    <input
      className={cx(
        'checkbox',
        buildEnumCx(
          InputCheckboxVariantColor,
          error ? 'error' : variantColor,
        ),
        buildEnumCx(
          InputCheckboxVariantSize,
          variantSize,
        ),
        className,
        cxProp,
      )}
      type='checkbox'
      {...spreadReactTestingProps({ testId })} // eslint-disable-line react/jsx-props-no-spreading
      {...rest} // eslint-disable-line react/jsx-props-no-spreading
    />
  );
}
