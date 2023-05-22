import { DetailedHTMLProps, HTMLAttributes } from 'react';
import cx, { Argument as ClassName } from 'classnames';
import Link from 'next/link';

interface Props extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, 'children'> {
  cx?: ClassName
}

const MENU_ITEMS = [
  {
    href: '/home',
    label: 'Home',
  },
  {
    href: '/about',
    label: 'About',
  },
] as const;

const PROFILE_ITEMS = [
  {
    href: '/auth/sign-up',
    label: 'Sign Up',
  },
  {
    href: '/auth/sign-in',
    label: 'Sign In',
  },
] as const;

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
        <Link
          href='/home'
          legacyBehavior
          passHref
        >
          <a
            className='btn btn-ghost normal-case text-xl'
            href='/home'
          >
            { 'Web' }
          </a>
        </Link>
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
              <Link
                href={href}
                legacyBehavior
                passHref
              >
                <a
                  className='btn btn-ghost normal-case text-xl'
                  href={href}
                >
                  { label }
                </a>
              </Link>
            </li>
          )) }
        </ul>
      </div>
      <div
        className='flex-none'
      >
        <ul
          className='menu menu-horizontal px-1'
        >
          { PROFILE_ITEMS.map(({
            href,
            label,
          }) => (
            <li
              key={label}
            >
              <Link
                href={href}
                legacyBehavior
                passHref
              >
                <a
                  className='btn btn-ghost normal-case text-xl'
                  href={href}
                >
                  { label }
                </a>
              </Link>
            </li>
          )) }
        </ul>
      </div>
    </nav>
  );
}
