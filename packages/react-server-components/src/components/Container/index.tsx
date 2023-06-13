import { ReactTestingProps, spreadReactTestingProps } from '@mqs/react-testing-lib';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import cx from 'classnames';
import { ReactCxProps } from '@mqs/react-utils';

/**
 * Props for the `<Container />` component.
 */
export interface ContainerProps
  extends ReactTestingProps,
  ReactCxProps,
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  /**
  * Set horizontal margin to auto.
  *
  * @default false
  */
  center?: boolean,
}

/**
 * A component for fixing an element's width to the current breakpoint.
 *
 * See [interactive docs](https://mqschwanda.github.io/nextjs-monorepo-docker/?path=/docs/mqs-react-server-components-components-container--docs) for more information.
 */
export function Container({
  children,
  className,
  center = false,
  cx: cxProp,
  testId = 'Container',
  ...rest
}: ContainerProps) {
  return (
    <div
      className={cx(
        'container',
        center ? 'mx-auto' : undefined,
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
