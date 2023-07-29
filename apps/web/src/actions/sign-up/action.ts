'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { getFormDataForZod } from '@mqs/zod';
import { Prisma, prisma } from '@mqs/prisma/client';
import jwtSign from 'utilities/jwt/jwtSign';
import { signUpSchema } from './validation';

// eslint-disable-next-line consistent-return
export default async function signUpAction(formData: FormData) {
  'use server';

  const validation = signUpSchema.safeParse(
    getFormDataForZod(formData, signUpSchema),
  );

  if (!validation.success) {
    return {
      errors: validation.error.flatten(),
    };
  }

  const {
    data: {
      email,
      nameFirst,
      nameLast,
      password,
    },
  } = validation;

  let user;

  try {
    user = await prisma.user.createWithPassword({
      email,
      nameFirst,
      nameLast,
      password,
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (
        error?.meta?.target
        && Array.isArray(error?.meta?.target)
        && error?.meta?.target.includes('email')
      ) {
        if (error.code === 'P2002') {
          return {
            errors: {
              fieldErrors: {
                email: ['a new user cannot be created with this email'],
              },
              formErrors: [],
            },
          };
        }
      }
    }

    console.log(error);

    return {
      errors: {
        fieldErrors: {},
        formErrors: ['an unexpected error occurred'],
      },
    };
  }

  if (!user) {
    return {
      errors: {
        fieldErrors: {},
        formErrors: ['an unexpected error occurred'],
      },
    };
  }

  const token = jwtSign({
    userId: user.id,
  });
  await prisma.authenticationToken.create({
    data: {
      userId: user.id,
      value: token,
    },
  });
  cookies().set('token', token, {
    httpOnly: true,
  });

  revalidatePath('/');
  redirect('/user/profile');
}
