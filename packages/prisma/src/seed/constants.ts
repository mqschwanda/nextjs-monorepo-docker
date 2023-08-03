import { JobKey } from '@prisma/client';

export const ADMIN_USER = {
  email: 'admin@email.com',
  nameFirst: 'Admin',
  nameLast: 'Smith',
  password: 'password',
} as const;
export const USER = {
  email: 'user@email.com',
  nameFirst: 'John',
  nameLast: 'Smith',
  password: 'password',
} as const;

export const JOBS = [
  {
    key: JobKey.InvalidateStaleTokens,
    name: 'Invalidate stale tokens',
  },
];
