import * as z from 'zod';

export const schema = z
  .object({
    'confirm-password': z
      .string()
      .min(1, { message: 'confirm password is required' }),
    email: z
      .string()
      .email()
      .min(1, { message: 'email is required' }),
    password: z
      .string()
      .min(1, { message: 'password is required' }),
  });
  // .refine(
  //   (obj) => obj.password === obj['confirm-password'],
  //   {
  //     message: 'password and confirm password must be equal',
  //     path: [
  //       'confirm-password',
  //       // 'password',
  //     ],
  //   },
  // )
  // .refine(
  //   (obj) => obj.password === obj['confirm-password'],
  //   {
  //     message: 'password and confirm password must be equal',
  //     path: [
  //       'password',
  //       // 'confirm-password',
  //     ],
  //   },
  // );

export type Schema = z.infer<typeof schema>;
