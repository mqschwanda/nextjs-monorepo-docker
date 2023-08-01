import { RoleKey } from '@mqs/graphql-schema/__generated__/graphql';

export const AUTH_ITEMS = [
  {
    href: '/auth/sign-up',
    label: 'Sign Up',
  },
  {
    href: '/auth/sign-in',
    label: 'Sign In',
  },
] as const;

export const PROFILE_ITEMS = [
  {
    href: '/admin',
    label: 'Admin',
    roleKeys: [RoleKey.Admin],
  },
  {
    href: '/user/profile',
    label: 'Profile',
    roleKeys: undefined,
  },
  {
    href: '/auth/sign-out',
    label: 'Sign Out',
    roleKeys: undefined,
  },
] as const;
