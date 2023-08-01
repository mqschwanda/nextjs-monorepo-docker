import { ReactTestingProps, spreadReactTestingProps } from '@mqs/react-testing-lib';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import cx from 'classnames';
import { ReactCxProps, buildEnumCx } from '@mqs/react-utils';
import { LoadingIndicatorVariantColor, LoadingIndicatorVariantIndicator, LoadingIndicatorVariantSize } from './types';

export {
  LoadingIndicatorVariantColor,
  LoadingIndicatorVariantIndicator,
  LoadingIndicatorVariantSize,
};

/**
 * Props for the `<LoadingIndicator />` component.
 */
export interface LoadingIndicatorProps
  extends ReactTestingProps,
  ReactCxProps,
  DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  /**
   * LoadingIndicator indicator
   *
   * @default spinner
   */
  variantIndicator?: keyof typeof LoadingIndicatorVariantIndicator,
  /**
   * LoadingIndicator indicator color
   *
   * @default undefined
   */
  variantColor?: keyof typeof LoadingIndicatorVariantColor,
  /**
   * LoadingIndicator indicator size
   *
   * @default 'md'
   */
  variantSize?: keyof typeof LoadingIndicatorVariantSize,
}

/**
 * LoadingIndicator shows an animation to indicate that something is loading.
 *
 * See [interactive docs](https://mqschwanda.github.io/nextjs-monorepo-docker/?path=/docs/mqs-react-server-components-components-loadingindicator--docs) for more information.
 */
export function LoadingIndicator({
  className,
  cx: cxProp,
  testId,
  variantColor,
  variantIndicator = 'spinner',
  variantSize = 'md',
  ...rest
}: LoadingIndicatorProps) {
  return (
    <span
      className={cx(
        'loading',
        buildEnumCx(
          LoadingIndicatorVariantColor,
          variantColor,
        ),
        buildEnumCx(
          LoadingIndicatorVariantIndicator,
          variantIndicator,
        ),
        buildEnumCx(
          LoadingIndicatorVariantSize,
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
