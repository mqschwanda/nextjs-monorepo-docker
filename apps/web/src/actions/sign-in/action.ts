'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { UserCookie } from 'utilities/cookies';
import { getFormDataForZod } from '@mqs/zod';
import { prisma } from '@mqs/prisma/client';
import { signInSchema } from './validation';

// eslint-disable-next-line consistent-return
export default async function signInAction(formData: FormData) {
  'use server';

  const validation = signInSchema.safeParse(
    getFormDataForZod(formData, signInSchema),
  );

  if (!validation.success) {
    return {
      errors: validation.error.flatten(),
    };
  }

  const {
    data: {
      email,
      password,
    },
  } = validation;

  const isPasswordValid = await prisma.user.isPasswordValid({
    email,
    password,
  });

  if (!isPasswordValid) {
    return {
      errors: {
        fieldErrors: {
          email: ['not authorized'],
          password: ['not authorized'],
        },
        formErrors: [],
      },
    };
  }

  const user = await prisma.user.findUniqueOrThrow({
    where: {
      email,
    },
  });

  const cookie: UserCookie = {
    email: user.email,
    nameFirst: user.nameFirst,
    nameLast: user.nameLast,
  };

  cookies().set('user', JSON.stringify(cookie));

  revalidatePath('/');
  redirect('/user/profile');
}
