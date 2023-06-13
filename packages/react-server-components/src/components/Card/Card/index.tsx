import { ReactTestingProps, spreadReactTestingProps } from '@mqs/react-testing-lib';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import cx from 'classnames';
import { ReactCxProps, buildEnumCx } from '@mqs/react-utils';
import { CardVariantImage, CardVariantPadding } from './types';

export { CardVariantImage, CardVariantPadding };

/**
 * Props for the `<Card />` component.
 */
export interface CardProps
  extends ReactTestingProps,
  ReactCxProps,
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  /**
   * Adds border to card.
   *
   * @default false
   */
  bordered?: boolean,
  /**
   * Image style for the card.
   *
   * @default 'normal'
   */
  variantImage?: keyof typeof CardVariantImage,
  /**
   * Padding size for the card.
   *
   * @default 'normal'
   */
  variantPadding?: keyof typeof CardVariantPadding,
}

/**
 * Cards are used to group and display content in a way that is easily readable.
 *
 * See [interactive docs](https://mqschwanda.github.io/nextjs-monorepo-docker/?path=/docs/mqs-react-server-components-components-card--docs) for more information.
 */
export function Card({
  bordered = false,
  children,
  className,
  cx: cxProp,
  testId = 'Card',
  variantImage = 'normal',
  variantPadding = 'normal',
  ...rest
}: CardProps) {
  return (
    <div
      className={cx(
        'card',
        'shadow-xl',
        bordered ? 'card-bordered' : undefined,
        buildEnumCx(
          CardVariantImage,
          variantImage,
        ),
        buildEnumCx(
          CardVariantPadding,
          variantPadding,
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
