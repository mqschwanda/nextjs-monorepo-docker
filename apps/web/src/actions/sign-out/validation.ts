import { zod } from '@mqs/zod';

export const signOutSchema = zod
  .object({
    email: zod
      .string()
      .email()
      .min(1, { message: 'email is required' }),
  });

export type SignOutSchema = zod.infer<typeof signOutSchema>;
