import { zod } from '@mqs/zod';

export const signOutSchema = zod
  .object({
    email: zod.mqs.email({
      key: 'email',
    }),
  })
  .required();

export type SignOutSchema = zod.infer<typeof signOutSchema>;
