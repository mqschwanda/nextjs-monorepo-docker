import { zod } from '@mqs/zod';

export const signInSchema = zod
  .object({
    email: zod
      .string()
      .email()
      .min(1, { message: 'email is required' }),
    password: zod
      .string()
      .min(1, { message: 'password is required' }),
  });

export type SignInSchema = zod.infer<typeof signInSchema>;
