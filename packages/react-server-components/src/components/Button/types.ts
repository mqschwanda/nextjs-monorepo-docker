/**
 * `<Button />` component color and style.
 */
export enum ButtonVariantColor {
  /**
   * Button with `accent` color.
   */
  accent = 'btn-accent',
  /**
   * Button with `error` color.
   */
  error = 'btn-error',
  /**
   * Button with ghost style.
   */
  ghost = 'btn-ghost',
  /**
   * Button with a glass effect.
   */
  glass = 'glass',
  /**
   * Button with `info` color.
   */
  info = 'btn-info',
  /**
   * Button styled as a link.
   */
  link = 'btn-link',
  /**
   * Button with `neutral` color.
   */
  neutral = 'btn-neutral',
  /**
   * Button with `primary` color.
   */
  primary = 'btn-primary',
  /**
   * Button with `secondary` color.
   */
  secondary = 'btn-secondary',
  /**
   * Button with `success` color.
   */
  success = 'btn-success',
  /**
   * Button with `warning` color.
   */
  warning = 'btn-warning',
}

/**
 * `<Button />` component size
 */
export enum ButtonVariantSize {
  /**
   * Large button
   */
  lg = 'btn-lg',
  /**
   * Medium button (default)
   */
  md = 'btn-md',
  /**
   * Small button
   */
  sm = 'btn-sm',
  /**
   * Extra small button
   */
  xs = 'btn-xs',
}

/**
 * `<Button />` component shape
 */
export enum ButtonVariantShape {
  /**
   * Circle button with a 1:1 ratio.
   */
  circle = 'btn-circle',
  /**
   * Square button with a 1:1 ratio.
   */
  square = 'btn-square',
}
