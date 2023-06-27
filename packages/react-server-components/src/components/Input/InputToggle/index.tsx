import { ReactTestingProps, spreadReactTestingProps } from '@mqs/react-testing-lib';
import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import cx from 'classnames';
import { ReactCxProps, buildEnumCx } from '@mqs/react-utils';
import { InputToggleVariantColor, InputToggleVariantSize } from './types';

export { InputToggleVariantColor, InputToggleVariantSize };

/**
 * Props for the `<InputToggle />` component.
 */
export interface InputToggleProps
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
  variantColor?: keyof typeof InputToggleVariantColor,
  /**
   * size
   *
   * @default 'md'
   */
  variantSize?: keyof typeof InputToggleVariantSize,
}

/**
 * a checkbox that is styled to look like a switch button.
 *
 * See [interactive docs](https://mqschwanda.github.io/nextjs-monorepo-docker/?path=/docs/mqs-react-server-components-components-input-inputoggle--docs) for more information.
 */
export function InputToggle({
  className,
  cx: cxProp,
  error = false,
  variantColor = 'primary',
  variantSize = 'md',
  testId = 'InputToggle',
  ...rest
}: InputToggleProps) {
  return (
    <input
      className={cx(
        'toggle',
        buildEnumCx(
          InputToggleVariantColor,
          error ? 'error' : variantColor,
        ),
        buildEnumCx(
          InputToggleVariantSize,
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
