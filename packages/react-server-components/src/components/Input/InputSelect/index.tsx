import { ReactTestingProps, spreadReactTestingProps } from '@mqs/react-testing-lib';
import { DetailedHTMLProps, SelectHTMLAttributes } from 'react';
import cx from 'classnames';
import { ReactCxProps, buildEnumCx } from '@mqs/react-utils';
import { InputSelectVariantColor, InputSelectVariantSize } from './types';

export { InputSelectVariantColor, InputSelectVariantSize };

/**
 * Props for the `<InputSelect />` component.
 */
export interface InputSelectProps
  extends ReactTestingProps,
  ReactCxProps,
  DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
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
  variantColor?: keyof typeof InputSelectVariantColor,
  /**
   * size
   *
   * @default 'md'
   */
  variantSize?: keyof typeof InputSelectVariantSize,
}

/**
 * a component used to pick a value from a list of options.
 *
 * See [interactive docs](https://mqschwanda.github.io/nextjs-monorepo-docker/?path=/docs/mqs-react-server-components-components-input-inputselect--docs) for more information.
 */
export function InputSelect({
  bordered,
  className,
  cx: cxProp,
  error = false,
  variantColor = 'primary',
  variantSize = 'md',
  testId = 'InputSelect',
  ...rest
}: InputSelectProps) {
  return (
    <select
      className={cx(
        'select',
        bordered ? 'select-bordered' : undefined,
        buildEnumCx(
          InputSelectVariantColor,
          error ? 'error' : variantColor,
        ),
        buildEnumCx(
          InputSelectVariantSize,
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
