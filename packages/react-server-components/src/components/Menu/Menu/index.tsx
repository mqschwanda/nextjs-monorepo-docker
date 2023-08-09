import { ReactTestingProps, spreadReactTestingProps } from '@mqs/react-testing-lib';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import cx from 'classnames';
import { ReactCxProps, buildEnumCx } from '@mqs/react-utils';
import {
  MenuVariantDirection,
  MenuVariantSize,
} from './types';

export {
  MenuVariantDirection,
  MenuVariantSize,
};

/**
 * Props for the `<Menu />` component.
 */
export interface MenuProps
  extends ReactTestingProps,
  ReactCxProps,
  DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
  /**
   * Adds border to menu.
   *
   * @default false
   */
  bordered?: boolean,
  /**
   * Direction for the `<MenuItem />` components inside `<Menu />`.
   *
   * @default 'md'
   */
  variantDirection?: keyof typeof MenuVariantDirection,
  /**
   * `<Menu />` component size
   *
   * @default 'vertical'
   */
  variantSize?: keyof typeof MenuVariantSize,
}

/**
 * Menu is used to display a list of links vertically or horizontally.
 *
 * See [interactive docs](https://mqschwanda.github.io/nextjs-monorepo-docker/?path=/docs/mqs-react-server-components-components-menu--docs) for more information.
 */
export function Menu({
  bordered = false,
  children,
  className,
  cx: cxProp,
  testId = 'Menu',
  variantDirection = 'vertical',
  variantSize = 'md',
  ...rest
}: MenuProps) {
  return (
    <ul
      className={cx(
        'menu',
        bordered ? 'menu-bordered' : undefined,
        buildEnumCx(
          MenuVariantDirection,
          variantDirection,
        ),
        buildEnumCx(
          MenuVariantSize,
          variantSize,
        ),
        className,
        cxProp,
      )}
      {...spreadReactTestingProps({ testId })} // eslint-disable-line react/jsx-props-no-spreading
      {...rest} // eslint-disable-line react/jsx-props-no-spreading
    >
      { children }
    </ul>
  );
}
