import { zod } from '@mqs/zod';

export const signUpSchema = zod
  .object({
    'confirm-password': zod
      .string()
      .min(1, { message: 'confirm password is required' }),
    email: zod
      .string()
      .email()
      .min(1, { message: 'email is required' }),
    nameFirst: zod
      .string()
      .min(1, { message: 'first name is required' }),
    nameLast: zod
      .string()
      .min(1, { message: 'last name is required' }),
    password: zod
      .string()
      .min(1, { message: 'password is required' }),
  })
  .refine(
    (obj) => obj.password === obj['confirm-password'],
    {
      message: 'password and confirm password must be equal',
      path: [
        'confirm-password',
      ],
    },
  )
  .refine(
    (obj) => obj.password === obj['confirm-password'],
    {
      message: 'password and confirm password must be equal',
      path: [
        'password',
      ],
    },
  );

export type SignUpSchema = zod.infer<typeof signUpSchema>;
