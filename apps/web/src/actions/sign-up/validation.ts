import * as z from '@mqs/zod';

export const signUpSchema = z
  .object({
    'confirm-password': z
      .string()
      .min(1, { message: 'confirm password is required' }),
    email: z
      .string()
      .email()
      .min(1, { message: 'email is required' }),
    nameFirst: z
      .string()
      .min(1, { message: 'first name is required' }),
    nameLast: z
      .string()
      .min(1, { message: 'last name is required' }),
    password: z
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

export type SignUpSchema = z.infer<typeof signUpSchema>;
