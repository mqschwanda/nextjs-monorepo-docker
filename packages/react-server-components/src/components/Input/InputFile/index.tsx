import { ReactTestingProps, spreadReactTestingProps } from '@mqs/react-testing-lib';
import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import cx from 'classnames';
import { ReactCxProps, buildEnumCx } from '@mqs/react-utils';

export enum InputFileVariantColor {
  accent = 'file-input-accent',
  error = 'file-input-error',
  ghost = 'file-input-ghost',
  info = 'file-input-info',
  primary = 'file-input-primary',
  secondary = 'file-input-secondary',
  success = 'file-input-success',
  warning = 'file-input-warning',
}

export enum InputFileVariantSize {
  lg = 'file-input-lg',
  md = 'file-input-md',
  sm = 'file-input-sm',
  xs = 'file-input-xs',
}

export interface InputFileProps
  extends ReactTestingProps,
  ReactCxProps,
  Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'type'> {
  bordered?: boolean,
  variantColor?: keyof typeof InputFileVariantColor,
  variantSize?: keyof typeof InputFileVariantSize,
}

export function InputFile({
  bordered,
  className,
  cx: cxProp,
  variantColor,
  variantSize,
  testId = 'InputFile',
  ...rest
}: InputFileProps) {
  return (
    <input
      className={cx(
        'file-input',
        bordered ? 'file-input-bordered' : undefined,
        buildEnumCx(
          InputFileVariantColor,
          variantColor,
        ),
        buildEnumCx(
          InputFileVariantSize,
          variantSize,
        ),
        className,
        cxProp,
      )}
      type='file'
      {...spreadReactTestingProps({ testId })} // eslint-disable-line react/jsx-props-no-spreading
      {...rest} // eslint-disable-line react/jsx-props-no-spreading
    />
  );
}
