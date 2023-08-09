import { ReactTestingProps, spreadReactTestingProps } from '@mqs/react-testing-lib';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import cx from 'classnames';
import { ReactCxProps } from '@mqs/react-utils';

/**
 * Props for the `<Drawer />` component.
 */
export interface DrawerProps
  extends ReactTestingProps,
  ReactCxProps,
  Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'id'> {
  /**
   *
   */
  id: string;
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
  id,
  children,
  className,
  cx: cxProp,
  responsive = false,
  rightSide = false,
  testId = 'Drawer',
  ...rest
}: DrawerProps) {
  const toggleId = `${id}-toggle`;

  return (
    <div
      className={cx(
        'drawer',
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
        className='drawer-content flex flex-col items-center justify-center'
      >
        { /* Page content here */ }
        <label
          className={cx(
            'btn',
            'btn-primary',
            'drawer-button',
            responsive ? 'lg:hidden' : undefined,
          )}
          htmlFor={toggleId}
        >
          { 'Open drawer' }
        </label>
      </div>
      <div
        className='drawer-side'
      >
        { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
        <label
          className='drawer-overlay'
          htmlFor={toggleId}
        />
        { children }
      </div>
    </div>
  );
}
