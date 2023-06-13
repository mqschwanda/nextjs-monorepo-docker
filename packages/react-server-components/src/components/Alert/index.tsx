import { ReactTestingProps, spreadReactTestingProps } from '@mqs/react-testing-lib';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import cx from 'classnames';
import { ReactCxProps, buildEnumCx } from '@mqs/react-utils';
import { AlertVariantBackgroundColor } from './types';

export { AlertVariantBackgroundColor };

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
 * See [interactive docs](https://mqschwanda.github.io/nextjs-monorepo-docker/?path=/docs/mqs-react-server-components-components-alert--docs) for more information.
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
