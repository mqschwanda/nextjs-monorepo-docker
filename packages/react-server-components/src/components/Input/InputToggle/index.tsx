import { ReactTestingProps, spreadReactTestingProps } from '@mqs/react-testing-lib';
import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import cx from 'classnames';
import { ReactCxProps, buildEnumCx } from '@mqs/react-utils';

export enum InputToggleVariantColor {
  accent = 'toggle-accent',
  error = 'toggle-error',
  info = 'toggle-info',
  primary = 'toggle-primary',
  secondary = 'toggle-secondary',
  success = 'toggle-success',
  warning = 'toggle-warning',
}

export enum InputToggleVariantSize {
  lg = 'toggle-lg',
  md = 'toggle-md',
  sm = 'toggle-sm',
  xs = 'toggle-xs',
}

export interface InputToggleProps
  extends ReactTestingProps,
  ReactCxProps,
  Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'type'> {
  variantColor?: keyof typeof InputToggleVariantColor,
  variantSize?: keyof typeof InputToggleVariantSize,
}

export function InputToggle({
  className,
  cx: cxProp,
  variantColor,
  variantSize,
  testId,
  ...rest
}: InputToggleProps) {
  return (
    <input
      className={cx(
        'toggle',
        buildEnumCx(
          InputToggleVariantColor,
          variantColor,
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
