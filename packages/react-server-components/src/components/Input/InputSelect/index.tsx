import { ReactTestingProps, spreadReactTestingProps } from '@mqs/react-testing-lib';
import { DetailedHTMLProps, SelectHTMLAttributes } from 'react';
import cx from 'classnames';
import { ReactCxProps, buildEnumCx } from '@mqs/react-utils';

export enum InputSelectVariantColor {
  accent = 'select-accent',
  error = 'select-error',
  ghost = 'select-ghost',
  info = 'select-info',
  primary = 'select-primary',
  secondary = 'select-secondary',
  success = 'select-success',
  warning = 'select-warning',
}

export enum InputSelectVariantSize {
  lg = 'select-lg',
  md = 'select-md',
  sm = 'select-sm',
  xs = 'select-xs',
}

export interface InputSelectProps
  extends ReactTestingProps,
  ReactCxProps,
  DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
  bordered?: boolean,
  variantColor?: keyof typeof InputSelectVariantColor,
  variantSize?: keyof typeof InputSelectVariantSize,
}

export function InputSelect({
  bordered,
  className,
  cx: cxProp,
  variantColor,
  variantSize,
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
          variantColor,
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
