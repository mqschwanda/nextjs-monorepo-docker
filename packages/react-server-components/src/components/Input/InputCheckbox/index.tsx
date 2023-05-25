import { ReactTestingProps, spreadReactTestingProps } from '@mqs/react-testing-lib';
import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import cx, { Argument as ClassName } from 'classnames';
import { buildEnumCx } from '../../../utilities';

export enum InputCheckboxVariantColor {
  accent = 'checkbox-accent',
  error = 'checkbox-error',
  info = 'checkbox-info',
  primary = 'checkbox-primary',
  secondary = 'checkbox-secondary',
  success = 'checkbox-success',
  warning = 'checkbox-warning',
}

export enum InputCheckboxVariantSize {
  lg = 'checkbox-lg',
  md = 'checkbox-md',
  sm = 'checkbox-sm',
  xs = 'checkbox-xs',
}

export interface InputCheckboxProps
  extends ReactTestingProps,
  Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'type'> {
  variantColor?: keyof typeof InputCheckboxVariantColor,
  variantSize?: keyof typeof InputCheckboxVariantSize,
  cx?: ClassName,
}

export function InputCheckbox({
  className,
  cx: cxProp,
  variantColor,
  variantSize,
  testId,
  ...rest
}: InputCheckboxProps) {
  return (
    <input
      className={cx(
        'checkbox',
        buildEnumCx(
          InputCheckboxVariantColor,
          variantColor,
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