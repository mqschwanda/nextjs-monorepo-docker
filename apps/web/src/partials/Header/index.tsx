import { DetailedHTMLProps, HTMLAttributes } from 'react';
import cx, { Argument as ClassName } from 'classnames';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  cx?: ClassName
}

export default function Header({
  children,
  className,
  cx: cxProp,
  ...rest
}: Props) {
  return (
    <header
      className={cx(
        'bg-base-100',
        'flex-col',
        'flex',
        'justify-center',
        'sticky',
        'top-0',
        'w-full',
        'z-30',
        className,
        cxProp,
      )}
      {...rest} // eslint-disable-line react/jsx-props-no-spreading
    >
      { children }
    </header>
  );
}
