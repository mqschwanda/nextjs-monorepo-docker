import { ReactTestingProps, spreadReactTestingProps } from '@mqs/react-testing-lib';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import cx from 'classnames';
import { ReactCxProps, buildEnumCx } from '@mqs/react-utils';
import { InputRatingVariantColor, InputRatingVariantMask, InputRatingVariantSize } from './types';
import { getMaskHalfClassName } from './utils';

export {
  InputRatingVariantColor,
  InputRatingVariantMask,
  InputRatingVariantSize,
};

/**
 * Props for the `<InputRating />` component.
 */
export interface InputRatingProps
  extends ReactTestingProps,
  ReactCxProps,
  Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'children'> {
  /**
   * Override the `variantColor` prop with the error style.
   *
   * @default false
   */
  error?: boolean,
  /**
   * allow half fill for each option.
   *
   * @default false
   */
  half?: boolean,
  /**
   * the maximum possible rating.
   *
   * @default 5
   */
  max: number,
  /**
   * the minimum possible rating.
   *
   * @default 0
   */
  min?: number,
  /**
   * A string specifying a name for each input control rendered by rating component.
   */
  name: string,
  /**
   * color and style
   *
   * @default 'primary'
   */
  variantColor?: keyof typeof InputRatingVariantColor,
  /**
   * mask shape
   *
   * @default 'star'
   */
  variantMask?: keyof typeof InputRatingVariantMask,
  /**
   * size
   *
   * @default 'md'
   */
  variantSize?: keyof typeof InputRatingVariantSize,
}

/**
 * a set of radio buttons that allow the user to rate something.
 *
 * See [interactive docs](https://mqschwanda.github.io/nextjs-monorepo-docker/?path=/docs/mqs-react-server-components-components-input-inputrating--docs) for more information.
 */
export function InputRating({
  className,
  cx: cxProp,
  error = false,
  half = false,
  max = 5,
  min = 0,
  name,
  testId = 'InputRating',
  variantColor = 'primary',
  variantMask = 'star',
  variantSize = 'md',
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
            getMaskHalfClassName({ half, i }),
            min === 0 && i === 0 ? 'rating-hidden' : undefined,
            buildEnumCx(
              InputRatingVariantColor,
              error ? 'error' : variantColor,
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
