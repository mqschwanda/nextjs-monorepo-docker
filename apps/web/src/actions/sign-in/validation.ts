import * as z from '@mqs/zod';

export const signInSchema = z
  .object({
    email: z
      .string()
      .email()
      .min(1, { message: 'email is required' }),
    password: z
      .string()
      .min(1, { message: 'password is required' }),
  });

export type SignInSchema = z.infer<typeof signInSchema>;
