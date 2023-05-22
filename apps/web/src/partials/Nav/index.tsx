import { DetailedHTMLProps, HTMLAttributes } from 'react';
import cx, { Argument as ClassName } from 'classnames';
import Link from 'next/link';
import Image from 'next/image';

interface Props extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, 'children'> {
  cx?: ClassName
  user?: {
    email: string,
    username: string,
  }
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

const AUTH_ITEMS = [
  {
    href: '/auth/sign-up',
    label: 'Sign Up',
  },
  {
    href: '/auth/sign-in',
    label: 'Sign In',
  },
] as const;

const PROFILE_ITEMS = [
  {
    href: '/user/profile',
    label: 'Profile',
  },
  {
    href: '/auth/sign-out',
    label: 'Sign Out',
  },
] as const;

export default function Nav({
  className,
  cx: cxProp,
  user,
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
        { user ? (
          <div
            className='dropdown dropdown-end'
          >
            <label
              className='btn btn-ghost btn-circle avatar'
              htmlFor='profile-menu'
              tabIndex={0}
            >
              <div
                className='w-10 rounded-full'
              >
                <Image
                  alt='profile-image'
                  height={50}
                  src='/assets/images/stock-profile-image.jpg'
                  width={50}
                />
              </div>
            </label>
            <ul
              className='mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52'
              id='profile-menu'
              tabIndex={0}
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
        ) : (
          <ul
            className='menu menu-horizontal px-1'
          >
            { AUTH_ITEMS.map(({
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
        ) }
      </div>
    </nav>
  );
}
