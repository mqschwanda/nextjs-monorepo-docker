import { SvgProps } from '@/components/Svg';

export type IconProps = Omit<SvgProps, 'children'>;
export type IconType = (props: IconProps) => JSX.Element;
