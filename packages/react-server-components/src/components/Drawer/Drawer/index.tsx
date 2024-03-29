import { ReactTestingProps, spreadReactTestingProps } from '@mqs/react-testing-lib';
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import cx from 'classnames';
import { ReactCxProps } from '@mqs/react-utils';
import getDrawerToggleId from '../helpers/getDrawerTaggleId';

/**
 * Props for the `<Drawer />` component.
 */
export interface DrawerProps
  extends ReactTestingProps,
  ReactCxProps,
  Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'id' | 'children'> {
  /**
   * The read-only children property returns a live HTMLCollection which contains all of the child elements of the document upon which it was called.
   */
  children: ReactNode;
  /**
   * Specifies the unique id for the `<Drawer />` component
   */
  id: string;
  /**
   * The content that is rendered inside the `<Drawer />` menu
   */
  menu: ReactNode;
  /**
   * Sidebar is always visible on large screen but can be toggled on smaller screens
   *
   * @default false
   */
  responsive?: boolean;
  /**
   * Drawer that opens from right side of page
   *
   * @default false
   */
  rightSide?: boolean;
}

/**
 * Drawer is a grid layout that can show/hide a sidebar on the left or right side of the page.
 *
 * See [interactive docs](https://mqschwanda.github.io/nextjs-monorepo-docker/?path=/docs/mqs-react-server-components-components-drawer--docs) for more information.
 */
export function Drawer({
  children,
  className,
  cx: cxProp,
  id,
  menu,
  responsive = false,
  rightSide = false,
  testId = 'Drawer',
  ...rest
}: DrawerProps) {
  const toggleId = getDrawerToggleId(id);

  return (
    <div
      className={cx(
        'drawer',
        'h-full',
        rightSide ? 'drawer-end' : undefined,
        responsive ? 'lg:drawer-open' : undefined,
        className,
        cxProp,
      )}
      id={id}
      {...spreadReactTestingProps({ testId })} // eslint-disable-line react/jsx-props-no-spreading
      {...rest} // eslint-disable-line react/jsx-props-no-spreading
    >
      <input
        className='drawer-toggle'
        id={toggleId}
        type='checkbox'
      />
      <div
        className='drawer-content'
      >
        { children }
      </div>
      <div
        className={cx(
          'drawer-side',
          'h-full',
          'z-10',
        )}
      >
        { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
        <label
          className='drawer-overlay'
          htmlFor={toggleId}
        />
        { menu }
      </div>
    </div>
  );
}
