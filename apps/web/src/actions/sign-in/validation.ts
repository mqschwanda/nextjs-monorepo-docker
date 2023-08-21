import { zod } from '@mqs/zod';

export const signInSchema = zod
  .object({
    email: zod.mqs.email({
      key: 'email',
    }),
    password: zod.mqs.password({
      key: 'password',
    }),
  })
  .required();

export type SignInSchema = zod.infer<typeof signInSchema>;
