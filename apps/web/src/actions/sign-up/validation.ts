import { zod } from '@mqs/zod';

export const signUpSchema = zod
  .object({
    'confirm-password': zod.mqs.password({
      key: 'confirm-password',
    }),
    email: zod.mqs.email({
      key: 'email',
    }),
    nameFirst: zod.mqs.name({
      key: 'first name',
    }),
    nameLast: zod.mqs.name({
      key: 'last name',
    }),
    password: zod.mqs.password({
      key: 'password',
    }),
  })
  .required()
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
