import * as z from '@mqs/zod';

export const signOutSchema = z
  .object({
    email: z
      .string()
      .email()
      .min(1, { message: 'email is required' }),
  });

export type SignOutSchema = z.infer<typeof signOutSchema>;
