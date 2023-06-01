import { ReactTestingProps, spreadReactTestingProps } from '@mqs/react-testing-lib';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import cx, { Argument as ClassName } from 'classnames';
import { buildEnumCx } from '@/utilities';

/**
 * Image style for the card.
 */
export enum CardVariantImage {
  /**
   * The image in <figure> element will be the background.
   */
  full = 'image-full',
  /**
   * The image in <figure> will be on to the side.
   */
  side = 'card-side',
}

/**
 * Padding size for the card.
 */
export enum CardVariantPadding {
  /**
   * Applies smaller padding.
   */
  compact = 'card-compact',
  /**
   * Applies default paddings.
   */
  normal = 'card-normal',
}

/**
 * Props for the `<Card />` component.
 */
export interface CardProps
  extends ReactTestingProps,
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  /**
   * Adds border to card.
   */
  bordered?: boolean,
  /**
   * Argument passed into classnames function.
   *
   * See [classnames docs](https://github.com/JedWatson/classnames).
   */
  cx?: ClassName,
  /**
   * Image style for the card.
   */
  variantImage?: keyof typeof CardVariantImage,
  /**
   * Padding size for the card.
   */
  variantPadding?: keyof typeof CardVariantPadding,
}

/**
 * Cards are used to group and display content in a way that is easily readable.
 */
export function Card({
  bordered,
  children,
  className,
  cx: cxProp,
  testId,
  variantImage,
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
