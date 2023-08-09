import { ReactTestingProps, spreadReactTestingProps } from '@mqs/react-testing-lib';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import cx from 'classnames';
import { ReactCxProps, buildEnumCx } from '@mqs/react-utils';
import {
  MenuItemVariantState,
} from './types';

export {
  MenuItemVariantState,
};

/**
 * Props for the `<MenuItem />` component.
 */
export interface MenuItemProps
  extends ReactTestingProps,
  ReactCxProps,
  DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  /**
   * Direction for the `<MenuItem />` components inside `<MenuItem />`.
   *
   * @default 'md'
   */
  variantState?: keyof typeof MenuItemVariantState,
}

/**
 * Menu item is used to display a link inside the `<Menu />` component.
 *
 * See [interactive docs](https://mqschwanda.github.io/nextjs-monorepo-docker/?path=/docs/mqs-react-server-components-components-menu--docs) for more information.
 */
export function MenuItem({
  children,
  className,
  cx: cxProp,
  testId = 'MenuItem',
  variantState,
  ...rest
}: MenuItemProps) {
  return (
    <li
      className={cx(
        buildEnumCx(
          MenuItemVariantState,
          variantState,
        ),
        className,
        cxProp,
      )}
      {...spreadReactTestingProps({ testId })} // eslint-disable-line react/jsx-props-no-spreading
      {...rest} // eslint-disable-line react/jsx-props-no-spreading
    >
      { children }
    </li>
  );
}
