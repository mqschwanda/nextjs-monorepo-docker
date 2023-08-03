import { Svg } from '@/components/Svg';
import { IconProps } from '@/components/Icon/types';

/**
 * Svg 'eye' icon.
 *
 * See [interactive docs](https://mqschwanda.github.io/nextjs-monorepo-docker/?path=/docs/mqs-react-server-components-components-icon--docs) for more information.
 */
export function IconEye({
  testId = 'IconEye',
  variantFillColor = 'current',
  variantStrokeColor = 'current',
  ...rest
}: IconProps) {
  return (
    <Svg
      testId={testId}
      variantFillColor={variantFillColor}
      variantStrokeColor={variantStrokeColor}
      viewBox='0 0 48 48'
      {...rest} // eslint-disable-line react/jsx-props-no-spreading
    >
      <path
        d='M24 9C14 9 5.46 15.22 2 24c3.46 8.78 12 15 22 15 10.01 0 18.54-6.22 22-15-3.46-8.78-11.99-15-22-15zm0 25c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10-4.48 10-10 10zm0-16c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z'
      />
    </Svg>
  );
}
