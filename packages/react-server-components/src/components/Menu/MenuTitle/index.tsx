import { MenuItem, MenuItemProps } from '../MenuItem';

/**
 * Props for the `<MenuTitle />` component.
 */
export interface MenuTitleProps
  extends Omit<MenuItemProps, 'variantState'> {

}

/**
 * Menu title is used to display a title inside the `<Menu />` component.
 *
 * See [interactive docs](https://mqschwanda.github.io/nextjs-monorepo-docker/?path=/docs/mqs-react-server-components-components-menu--docs) for more information.
 */
export function MenuTitle({
  children,
  cx: cxProp,
  testId = 'MenuTitle',
  ...rest
}: MenuTitleProps) {
  return (
    <MenuItem
      cx={[
        'menu-title',
        cxProp,
      ]}
      testId={testId}
      {...rest} // eslint-disable-line react/jsx-props-no-spreading
    >
      { children }
    </MenuItem>
  );
}
