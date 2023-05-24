import { ReactTestingProps, spreadReactTestingProps } from '@mqs/react-testing-lib';
import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import cx, { Argument as ClassName } from 'classnames';
import { buildEnumCx } from '../../../utilities';

enum InputToggleVariantColor {
  accent = 'toggle-accent',
  error = 'toggle-error',
  info = 'toggle-info',
  primary = 'toggle-primary',
  secondary = 'toggle-secondary',
  success = 'toggle-success',
  warning = 'toggle-warning',
}

enum InputToggleVariantSize {
  lg = 'toggle-lg',
  md = 'toggle-md',
  sm = 'toggle-sm',
  xs = 'toggle-xs',
}

export interface InputToggleProps
  extends ReactTestingProps,
  Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'type'> {
  variantColor?: keyof typeof InputToggleVariantColor,
  variantSize?: keyof typeof InputToggleVariantSize,
  cx?: ClassName,
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
