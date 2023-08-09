import { NextLinkWrapper } from '@mqs/react-client-components';
import {
  Drawer, DrawerButtonToggle, Menu, MenuItem, MenuTitle,
} from '@mqs/react-server-components';
import { type ReactNode } from 'react';

interface AdminLayoutProps {
  children: ReactNode
}

export default function AdminLayout({
  children,
}: AdminLayoutProps) {
  const drawerId = 'admin-drawer';

  return (
    <Drawer
      id={drawerId}
      menu={(
        <Menu
          cx={[
            'bg-base-200',
            'h-full',
            'lg:pt-0',
            'p-4',
            'pt-20',
            'w-80',
          ]}
        >
          <MenuTitle>
            { ' Admin Menu' }
          </MenuTitle>
          <MenuItem>
            <NextLinkWrapper
              href='/admin/users'
            >
              <a
                href='/admin/users'
              >
                { 'Users' }
              </a>
            </NextLinkWrapper>
          </MenuItem>
          <MenuItem>
            <NextLinkWrapper
              href='/admin/jobs'
            >
              <a
                href='/admin/jobs'
              >
                { 'Jobs' }
              </a>
            </NextLinkWrapper>
          </MenuItem>
          <MenuItem>
            <NextLinkWrapper
              href='/admin/logs'
            >
              <a
                href='/admin/logs'
              >
                { 'Logs' }
              </a>
            </NextLinkWrapper>
          </MenuItem>
        </Menu>
        )}
      responsive
    >
      <DrawerButtonToggle
        drawerId={drawerId}
        responsive
      />
      { children }
    </Drawer>
  );
}
