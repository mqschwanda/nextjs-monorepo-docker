import { SvgProps } from '@/components/Svg';

/**
 * Generic props for any icon component.
 */
export type IconProps = Omit<SvgProps, 'children'>;

/**
 * Generic type for any icon component.
 */
export type IconType = (props: IconProps) => JSX.Element;
