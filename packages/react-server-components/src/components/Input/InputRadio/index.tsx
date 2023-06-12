import { ReactTestingProps, spreadReactTestingProps } from '@mqs/react-testing-lib';
import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import cx from 'classnames';
import { ReactCxProps, buildEnumCx } from '@mqs/react-utils';

export enum InputRadioVariantColor {
  accent = 'radio-accent',
  error = 'radio-error',
  info = 'radio-info',
  primary = 'radio-primary',
  secondary = 'radio-secondary',
  success = 'radio-success',
  warning = 'radio-warning',
}

export enum InputRadioVariantSize {
  lg = 'radio-lg',
  md = 'radio-md',
  sm = 'radio-sm',
  xs = 'radio-xs',
}

export interface InputRadioProps
  extends ReactTestingProps,
  ReactCxProps,
  Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'type'> {
  variantColor?: keyof typeof InputRadioVariantColor,
  variantSize?: keyof typeof InputRadioVariantSize,
}

export function InputRadio({
  className,
  cx: cxProp,
  variantColor,
  variantSize,
  testId,
  ...rest
}: InputRadioProps) {
  return (
    <input
      className={cx(
        'radio',
        buildEnumCx(
          InputRadioVariantColor,
          variantColor,
        ),
        buildEnumCx(
          InputRadioVariantSize,
          variantSize,
        ),
        className,
        cxProp,
      )}
      type='radio'
      {...spreadReactTestingProps({ testId })} // eslint-disable-line react/jsx-props-no-spreading
      {...rest} // eslint-disable-line react/jsx-props-no-spreading
    />
  );
}
