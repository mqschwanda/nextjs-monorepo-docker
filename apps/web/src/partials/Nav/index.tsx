import { DetailedHTMLProps, HTMLAttributes } from 'react';
import cx, { Argument as ClassName } from 'classnames';
import { NextLinkWrapper } from '@mqs/react-client-components';
import { Menu, MenuItem } from '@mqs/react-server-components';
import NavAuthMenuItems from 'partials/NavAuthMenuItems';
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
        <Menu
          cx={[
            'px-1',
          ]}
          variantDirection='horizontal'
        >
          { MENU_ITEMS.map(({
            href,
            label,
          }) => (
            <MenuItem
              key={label}
            >
              <NextLinkWrapper
                href={href}
              >
                <a
                  className='text-xl'
                  href={href}
                >
                  { label }
                </a>
              </NextLinkWrapper>
            </MenuItem>
          )) }
        </Menu>
      </div>
      <div
        className='flex-none'
      >
        <NavAuthMenuItems />
      </div>
    </nav>
  );
}
