'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { NextLinkWrapper } from '@mqs/react-client-components';
import { useMeQuery } from '@mqs/graphql-client';
import { AUTH_ITEMS, PROFILE_ITEMS } from './constants';

interface Props {

}

export default function NavAuthMenuItems(_props: Props) {
  const { data, refetch, loading } = useMeQuery({
    fetchPolicy: 'no-cache',
  });
  const pathname = usePathname();

  useEffect(
    () => {
      refetch();
    },
    [ // eslint-disable-line react-hooks/exhaustive-deps
      pathname,
    ],
  );

  if (loading) {
    // TODO: handle loading state
    return null;
  }

  if (data?.me) {
    return (
      <div
        className='dropdown dropdown-end'
      >
        <label
          className='btn btn-ghost btn-circle avatar'
          htmlFor='nav-auth-menu-profile'
          tabIndex={0}
        >
          <div
            className='w-10 rounded-full'
          >
            <Image
              alt={data.me.email}
              height={50}
              src='/assets/images/stock-profile-image.jpg'
              width={50}
            />
          </div>
        </label>
        <ul
          className='mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52'
          id='nav-auth-menu-profile'
          tabIndex={0}
        >
          { PROFILE_ITEMS.map(({
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
    );
  }

  return (
    <ul
      className='menu menu-horizontal px-1'
      id='nav-auth-menu-auth'
    >
      { AUTH_ITEMS.map(({
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
  );
}
