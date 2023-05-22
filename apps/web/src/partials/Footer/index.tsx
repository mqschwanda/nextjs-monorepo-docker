import { DetailedHTMLProps, HTMLAttributes } from 'react';
import cx, { Argument as ClassName } from 'classnames';

interface Props extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, 'children'> {
  cx?: ClassName
}

export default function Footer({
  className,
  cx: cxProp,
  ...rest
}: Props) {
  return (
    <footer
      className={cx(
        className,
        'bg-neutral',
        'footer',
        'items-center',
        'p-4',
        'text-neutral-content',
        cxProp,
      )}
      {...rest} // eslint-disable-line react/jsx-props-no-spreading
    >
      <div
        className='items-center grid-flow-col'
      >
        <span
          className='opacity-75'
        >
          &#169;
          { ' ' }
          { new Date().getFullYear() }
          { ' ' }
          { 'copyright:' }
          { ' ' }
          <a
            className='link'
            href='https://github.com/mqschwanda'
            target='_blank'
          >
            { 'MQSchwanda' }
          </a>
        </span>
      </div>
      <div
        className='grid-flow-col gap-4 md:place-self-center md:justify-self-end'
      >
        <span
          className='opacity-75'
        >
          { 'Source code on' }
          { ' ' }
          <a
            className='link'
            href='https://github.com/mqschwanda/nextjs-monorepo-docker'
            target='_blank'
          >
            { 'Github' }
          </a>
        </span>
      </div>
    </footer>
  );
}
