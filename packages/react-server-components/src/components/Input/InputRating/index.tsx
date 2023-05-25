import { ReactTestingProps, spreadReactTestingProps } from '@mqs/react-testing-lib';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import cx, { Argument as ClassName } from 'classnames';
import { buildEnumCx } from '@/utilities';

export enum InputRatingVariantColor {
  accent = 'bg-accent',
  error = 'bg-error',
  info = 'bg-info',
  primary = 'bg-primary',
  secondary = 'bg-secondary',
  success = 'bg-success',
  warning = 'bg-warning',
}

export enum InputRatingVariantMask {
  squircle = 'mask-squircle',
  heart = 'mask-heart',
  hexagon = 'mask-hexagon',
  'hexagon-2' = 'mask-hexagon-2',
  decagon = 'mask-decagon',
  pentagon = 'mask-pentagon',
  diamond = 'mask-diamond',
  square = 'mask-square',
  circle = 'mask-circle',
  parallelogram = 'mask-parallelogram',
  'parallelogram-2' = 'mask-parallelogram-2',
  'parallelogram-3' = 'mask-parallelogram-3',
  'parallelogram-4' = 'mask-parallelogram-4',
  star = 'mask-star',
  'star-2' = 'mask-star-2',
  triangle = 'mask-triangle',
  'triangle-2' = 'mask-triangle-2',
  'triangle-3' = 'mask-triangle-3',
  'triangle-4' = 'mask-triangle-4',
}

export enum InputRatingVariantSize {
  lg = 'rating-lg',
  md = 'rating-md',
  sm = 'rating-sm',
  xs = 'rating-xs',
}

export interface InputRatingProps
  extends ReactTestingProps,
  Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'children'> {
  cx?: ClassName,
  half?: boolean,
  max: number,
  min?: number,
  name: string,
  variantColor?: keyof typeof InputRatingVariantColor,
  variantMask?: keyof typeof InputRatingVariantMask,
  variantSize?: keyof typeof InputRatingVariantSize,
}

export function InputRating({
  className,
  cx: cxProp,
  half,
  max,
  min = 0,
  name,
  testId,
  variantColor,
  variantMask = 'star',
  variantSize,
  ...rest
}: InputRatingProps) {
  if (!Number.isInteger(min)) {
    throw new Error('min prop must be integer');
  }

  if (!Number.isInteger(max)) {
    throw new Error('min prop must be integer');
  }

  return (
    <div
      className={cx(
        'rating',
        half ? 'rating-half' : undefined,
        buildEnumCx(
          InputRatingVariantSize,
          variantSize,
        ),
        className,
        cxProp,
      )}
      {...spreadReactTestingProps({ testId })} // eslint-disable-line react/jsx-props-no-spreading
      {...rest} // eslint-disable-line react/jsx-props-no-spreading
    >
      { Array.from({ length: (half ? max * 2 : max) + 1 }, (_, i) => i).map((i) => (
        <input
          className={cx(
            'mask',
            half && i > 0 ? (i % 2 ? 'mask-half-1' : 'mask-half-2') : undefined, // eslint-disable-line no-nested-ternary
            min === 0 && i === 0 ? 'rating-hidden' : undefined,
            buildEnumCx(
              InputRatingVariantColor,
              variantColor,
            ),
            buildEnumCx(
              InputRatingVariantMask,
              variantMask,
            ),
          )}
          key={i}
          name={name}
          type='radio'
        />
      )) }
    </div>
  );
}
