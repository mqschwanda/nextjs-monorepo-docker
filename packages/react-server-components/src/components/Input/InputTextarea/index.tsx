import { ReactTestingProps, spreadReactTestingProps } from '@mqs/react-testing-lib';
import { DetailedHTMLProps, TextareaHTMLAttributes } from 'react';
import cx from 'classnames';
import { ReactCxProps, buildEnumCx } from '@mqs/react-utils';

export enum InputTextareaVariantColor {
  accent = 'textarea-accent',
  error = 'textarea-error',
  ghost = 'textarea-ghost',
  info = 'textarea-info',
  primary = 'textarea-primary',
  secondary = 'textarea-secondary',
  success = 'textarea-success',
  warning = 'textarea-warning',
}

export enum InputTextareaVariantSize {
  lg = 'textarea-lg',
  md = 'textarea-md',
  sm = 'textarea-sm',
  xs = 'textarea-xs',
}

export interface InputTextareaProps
  extends ReactTestingProps,
  ReactCxProps,
  DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  bordered?: boolean,
  variantColor?: keyof typeof InputTextareaVariantColor,
  variantSize?: keyof typeof InputTextareaVariantSize,
}

export function InputTextarea({
  bordered,
  className,
  cx: cxProp,
  variantColor,
  variantSize,
  testId = 'InputTextarea',
  ...rest
}: InputTextareaProps) {
  return (
    <textarea
      className={cx(
        'textarea',
        bordered ? 'textarea-bordered' : undefined,
        buildEnumCx(
          InputTextareaVariantColor,
          variantColor,
        ),
        buildEnumCx(
          InputTextareaVariantSize,
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
