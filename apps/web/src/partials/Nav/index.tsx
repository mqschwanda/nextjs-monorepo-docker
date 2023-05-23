import { DetailedHTMLProps, HTMLAttributes } from 'react';
import cx, { Argument as ClassName } from 'classnames';
import NavAuthMenuItems from 'partials/NavAuthMenuItems';
import { NextLinkWrapper } from '@mqs/react-client-components';
import { MENU_ITEMS } from './constants';

interface Props extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, 'children'> {
  cx?: ClassName
}

export default function Nav({
  className,
  cx: cxProp,
  ...rest
}: Props) {
  return (
    <nav
      className={cx(
        className,
        'bg-primary',
        'navbar',
        'text-primary-content',
        'w-full',
        cxProp,
      )}
      {...rest} // eslint-disable-line react/jsx-props-no-spreading
    >
      <div
        className='flex-1'
      >
        <NextLinkWrapper
          href='/home'
        >
          <a
            className='btn btn-ghost normal-case text-xl'
            href='/home'
          >
            { 'Web' }
          </a>
        </NextLinkWrapper>
      </div>
      <div
        className='flex-none'
      >
        <ul
          className='menu menu-horizontal px-1'
        >
          { MENU_ITEMS.map(({
            href,
            label,
          }) => (
            <li
              key={label}
            >
              <NextLinkWrapper
                href={href}
              >
                <a
                  className='btn btn-ghost normal-case text-xl'
                  href={href}
                >
                  { label }
                </a>
              </NextLinkWrapper>
            </li>
          )) }
        </ul>
      </div>
      <div
        className='flex-none'
      >
        <NavAuthMenuItems />
      </div>
    </nav>
  );
}
