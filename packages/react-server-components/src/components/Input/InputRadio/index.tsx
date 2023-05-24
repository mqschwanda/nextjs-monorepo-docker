import { ReactTestingProps, spreadReactTestingProps } from '@mqs/react-testing-lib';
import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import cx, { Argument as ClassName } from 'classnames';
import { buildEnumCx } from '../../../utilities';

enum InputRadioVariantColor {
  accent = 'radio-accent',
  error = 'radio-error',
  info = 'radio-info',
  primary = 'radio-primary',
  secondary = 'radio-secondary',
  success = 'radio-success',
  warning = 'radio-warning',
}

enum InputRadioVariantSize {
  lg = 'radio-lg',
  md = 'radio-md',
  sm = 'radio-sm',
  xs = 'radio-xs',
}

export interface InputRadioProps
  extends ReactTestingProps,
  Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'type'> {
  variantColor?: keyof typeof InputRadioVariantColor,
  variantSize?: keyof typeof InputRadioVariantSize,
  cx?: ClassName,
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
