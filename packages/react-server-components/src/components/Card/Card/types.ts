/**
 * Image style for the `<Card />` component.
 */
export enum CardVariantImage {
  /**
   * The image in `<figure>` element will be rendered normally.
   */
  normal = '',
  /**
   * The image in `<figure>` element will be the background.
   */
  full = 'image-full',
  /**
   * The image in `<figure>` will be on to the side.
   */
  side = 'card-side',
}

/**
 * Padding size for the `<Card />` component.
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
