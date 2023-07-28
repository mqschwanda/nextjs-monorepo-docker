'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { getFormDataForZod } from '@mqs/zod';
import { prisma } from '@mqs/prisma/client';
import jwt from 'jsonwebtoken';
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

  if (process.env.JWT_SECRET === undefined) {
    return {
      errors: {
        fieldErrors: {},
        formErrors: ['an unexpected error occurred'],
      },
    };
  }

  const token = jwt.sign(user, process.env.JWT_SECRET);
  await prisma.jwt.create({
    data: {
      userId: user.id,
      value: token,
    },
  });
  cookies().set('token', token);

  revalidatePath('/');
  redirect('/user/profile');
}
