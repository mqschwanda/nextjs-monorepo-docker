import { ReactTestingProps, spreadReactTestingProps } from '@mqs/react-testing-lib';
import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import cx, { Argument as ClassName } from 'classnames';
import { buildEnumCx } from '@/utilities';

export enum InputTextVariantColor {
  accent = 'input-accent',
  error = 'input-error',
  ghost = 'input-ghost',
  info = 'input-info',
  primary = 'input-primary',
  secondary = 'input-secondary',
  success = 'input-success',
  warning = 'input-warning',
}

export enum InputTextVariantSize {
  lg = 'input-lg',
  md = 'input-md',
  sm = 'input-sm',
  xs = 'input-xs',
}

export interface InputTextProps
  extends ReactTestingProps,
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  bordered?: boolean,
  variantColor?: keyof typeof InputTextVariantColor,
  variantSize?: keyof typeof InputTextVariantSize,
  cx?: ClassName,
}

export function InputText({
  bordered,
  className,
  cx: cxProp,
  variantColor,
  variantSize,
  testId,
  ...rest
}: InputTextProps) {
  return (
    <input
      className={cx(
        'input',
        bordered ? 'input-bordered' : undefined,
        buildEnumCx(
          InputTextVariantColor,
          variantColor,
        ),
        buildEnumCx(
          InputTextVariantSize,
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
