import { ReactTestingProps, spreadReactTestingProps } from '@mqs/react-testing-lib';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import cx from 'classnames';
import { ReactCxProps, buildEnumCx } from '@mqs/react-utils';

/**
 * Background color for the alert.
 */
export enum AlertVariantBackgroundColor {
  /**
   * Alert with `info` color.
   */
  info = 'alert-info',
  /**
   * Alert with `success` color.
   */
  success = 'alert-success',
  /**
   * Alert with `warning` color.
   */
  warning = 'alert-warning',
  /**
   * Alert with `error` color.
   */
  error = 'alert-error',
}

/**
 * Props for the `<Alert />` component.
 */
export interface AlertProps
  extends ReactTestingProps,
  ReactCxProps,
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  /**
   * Background color for the alert.
   */
  variantBackgroundColor?: keyof typeof AlertVariantBackgroundColor,
}

/**
 * Alert informs users about important events.
 *
 * @see https://mqschwanda.github.io/nextjs-monorepo-docker/?path=/docs/mqs-react-server-components-components-alert--docs
 */
export function Alert({
  children,
  className,
  cx: cxProp,
  testId = 'Alert',
  variantBackgroundColor,
  ...rest
}: AlertProps) {
  return (
    <div
      className={cx(
        'alert',
        buildEnumCx(
          AlertVariantBackgroundColor,
          variantBackgroundColor,
        ),
        className,
        cxProp,
      )}
      {...spreadReactTestingProps({ testId })} // eslint-disable-line react/jsx-props-no-spreading
      {...rest} // eslint-disable-line react/jsx-props-no-spreading
    >
      { children }
    </div>
  );
}
