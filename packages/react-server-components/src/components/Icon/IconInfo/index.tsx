import { Svg } from '@/components/Svg';
import { IconProps } from '@/components/Icon/types';

/**
 * Svg 'info' icon.
 *
 * See [interactive docs](https://mqschwanda.github.io/nextjs-monorepo-docker/?path=/docs/mqs-react-server-components-components-icon--docs) for more information.
 */
export function IconInfo({
  testId = 'IconInfo',
  variantFillColor = 'none',
  variantStrokeColor = 'current',
  ...rest
}: IconProps) {
  return (
    <Svg
      testId={testId}
      variantFillColor={variantFillColor}
      variantStrokeColor={variantStrokeColor}
      viewBox='0 0 24 24'
      {...rest} // eslint-disable-line react/jsx-props-no-spreading
    >
      <path
        d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
      />
    </Svg>
  );
}
