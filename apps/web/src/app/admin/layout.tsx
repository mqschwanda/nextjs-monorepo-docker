import { NextLinkWrapper } from '@mqs/react-client-components';
import { Drawer, DrawerButtonToggle } from '@mqs/react-server-components';
import { type ReactNode } from 'react';

interface AdminLayoutProps {
  children: ReactNode
}

export default function AdminLayout({
  children,
}: AdminLayoutProps) {
  return (
    <Drawer
      id='admin-drawer'
      menu={(
        <ul
          className='menu p-4 pt-20 lg:pt-0 w-80 h-full bg-base-200'
        >
          <li>
            <NextLinkWrapper
              href='/admin/users'
            >
              <a
                className='link link-primary'
                href='/admin/users'
              >
                { 'users' }
              </a>
            </NextLinkWrapper>
          </li>
          <li>
            <NextLinkWrapper
              href='/admin/jobs'
            >
              <a
                className='link link-primary'
                href='/admin/jobs'
              >
                { 'jobs' }
              </a>
            </NextLinkWrapper>
          </li>
          <li>
            <NextLinkWrapper
              href='/admin/logs'
            >
              <a
                className='link link-primary'
                href='/admin/logs'
              >
                { 'logs' }
              </a>
            </NextLinkWrapper>
          </li>
        </ul>
        )}
      responsive
    >
      <DrawerButtonToggle
        drawerId='admin-drawer'
        responsive
      />
      { children }
    </Drawer>
  );
}
