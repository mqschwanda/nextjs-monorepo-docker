import { Svg } from '@/components/Svg';
import { IconProps } from '@/components/Icon/types';

export function IconClose({
  variantFillColor = 'none',
  variantStrokeColor = 'current',
  ...rest
}: IconProps) {
  return (
    <Svg
      variantFillColor={variantFillColor}
      variantStrokeColor={variantStrokeColor}
      viewBox='0 0 24 24'
      {...rest} // eslint-disable-line react/jsx-props-no-spreading
    >
      <path
        d='M6 18L18 6M6 6l12 12'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
      />
    </Svg>
  );
}
