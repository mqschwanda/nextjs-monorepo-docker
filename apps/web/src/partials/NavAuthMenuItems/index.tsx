'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { NextLinkWrapper } from '@mqs/react-client-components';
import { useMeQuery } from '@mqs/graphql-client';
import { Menu, MenuItem } from '@mqs/react-server-components';
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
        <Menu
          cx={[
            'bg-base-100',
            'dropdown-content',
            'menu-compact',
            'mt-3',
            'p-2',
            'rounded-box',
            'shadow',
            'w-52',
          ]}
          id='nav-auth-menu-profile'
          tabIndex={0}
        >
          { PROFILE_ITEMS
            .filter(({ roleKeys }) => (
              !roleKeys
              || roleKeys.every((roleKey) => data.me?.roleKeys.includes(roleKey))
            ))
            .map(({
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
    );
  }

  return (
    <Menu
      cx={[
        'px-1',
      ]}
      id='nav-auth-menu-auth'
      variantDirection='horizontal'
    >
      { AUTH_ITEMS.map(({
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
  );
}
