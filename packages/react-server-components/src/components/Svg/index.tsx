import { spreadReactTestingProps, ReactTestingProps } from '@mqs/react-testing-lib';
import cx from 'classnames';
import { SVGProps } from 'react';
import { ReactCxProps, buildEnumCx } from '@mqs/react-utils';
import { SvgVariantFillColor, SvgVariantStrokeColor, SvgVariantStrokeWidth } from './types';

/**
 * Props for the `<Svg />` component.
 */
export interface SvgProps
  extends ReactTestingProps,
  ReactCxProps,
  Omit<SVGProps<SVGSVGElement>, 'stroke' | 'fill' | 'cx'> {
  /**
   * Svg fill color
   */
  variantFillColor?: keyof typeof SvgVariantFillColor,
  /**
   * Svg stroke color
   */
  variantStrokeColor?: keyof typeof SvgVariantStrokeColor,
  /**
   * Svg stroke width
   */
  variantStrokeWidth?: keyof typeof SvgVariantStrokeWidth,
}

/**
 * Scalable Vector Graphics component.
 *
 * See [SVG docs](https://developer.mozilla.org/en-US/docs/Web/SVG).
 */
export function Svg({
  children,
  className,
  cx: cxProp,
  testId,
  variantFillColor = 'inherit',
  variantStrokeColor = 'inherit',
  variantStrokeWidth = 1,
  xmlns = 'http://www.w3.org/2000/svg',
  ...rest
}: SvgProps) {
  return (
    <svg
      className={cx(
        buildEnumCx(
          SvgVariantFillColor,
          variantFillColor,
        ),
        buildEnumCx(
          SvgVariantStrokeColor,
          variantStrokeColor,
        ),
        buildEnumCx(
          SvgVariantStrokeWidth,
          variantStrokeWidth,
        ),
        className,
        cxProp,
      )}
      fill='currentColor'
      stroke='currentColor'
      xmlns={xmlns}
      {...spreadReactTestingProps({ testId })} // eslint-disable-line react/jsx-props-no-spreading
      {...rest} // eslint-disable-line react/jsx-props-no-spreading
    >
      { children }
    </svg>
  );
}
