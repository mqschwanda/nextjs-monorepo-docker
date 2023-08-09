import { ReactTestingProps, spreadReactTestingProps } from '@mqs/react-testing-lib';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import cx from 'classnames';
import { ReactCxProps } from '@mqs/react-utils';
import getDrawerToggleId from '../helpers/getDrawerTaggleId';

/**
 * Props for the `<DrawerButtonToggle />` component.
 */
export interface DrawerButtonToggleProps
  extends ReactTestingProps,
  ReactCxProps,
  DetailedHTMLProps<HTMLAttributes<HTMLLabelElement>, HTMLLabelElement> {
  /**
   * Specifies the unique id for the `<Drawer />` component
   */
  drawerId: string;
  /**
   * Sidebar is always visible on large screen but can be toggled on smaller screens
   *
   * @default false
   */
  responsive?: boolean;
}

/**
 * Toggle button for the `<Drawer />` component
 *
 * See [interactive docs](https://mqschwanda.github.io/nextjs-monorepo-docker/?path=/docs/mqs-react-server-components-components-drawer--docs) for more information.
 */
export function DrawerButtonToggle({
  children = 'Open drawer',
  className,
  cx: cxProp,
  drawerId,
  responsive = false,
  testId = 'Drawer',
  ...rest
}: DrawerButtonToggleProps) {
  return (
    <label
      className={cx(
        'btn',
        'btn-primary',
        'drawer-button',
        responsive ? 'lg:hidden' : undefined,
        className,
        cxProp,
      )}
      htmlFor={getDrawerToggleId(drawerId)}
      {...spreadReactTestingProps({ testId })} // eslint-disable-line react/jsx-props-no-spreading
      {...rest} // eslint-disable-line react/jsx-props-no-spreading
    >
      { children }
    </label>
  );
}
