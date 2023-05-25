import { ReactTestingProps, spreadReactTestingProps } from '@mqs/react-testing-lib';
import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import cx, { Argument as ClassName } from 'classnames';
import { buildEnumCx } from '../../../utilities';

export enum InputRangeVariantColor {
  accent = 'range-accent',
  error = 'range-error',
  info = 'range-info',
  primary = 'range-primary',
  secondary = 'range-secondary',
  success = 'range-success',
  warning = 'range-warning',
}

export enum InputRangeVariantSize {
  lg = 'range-lg',
  md = 'range-md',
  sm = 'range-sm',
  xs = 'range-xs',
}

export interface InputRangeProps
  extends ReactTestingProps,
  Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'max' | 'min' | 'type'> {
  cx?: ClassName,
  max: number,
  min: number,
  variantColor?: keyof typeof InputRangeVariantColor,
  variantSize?: keyof typeof InputRangeVariantSize,
}

export function InputRange({
  className,
  cx: cxProp,
  max,
  min,
  testId,
  variantColor,
  variantSize,
  ...rest
}: InputRangeProps) {
  return (
    <input
      className={cx(
        'range',
        buildEnumCx(
          InputRangeVariantColor,
          variantColor,
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
