'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { getFormDataForZod } from '@mqs/zod';
import { prisma } from '@mqs/prisma/client';
import jwtVerify from 'utilities/jwt/jwtVerify';
import { signOutSchema } from './validation';

// eslint-disable-next-line consistent-return
export default async function signOutAction(formData: FormData) {
  'use server';

  const validation = signOutSchema.safeParse(
    getFormDataForZod(formData, signOutSchema),
  );

  if (!validation.success) {
    return {
      errors: validation.error.flatten(),
    };
  }

  const token = cookies().get('token');
  if (!token) {
    return {
      errors: {
        fieldErrors: {},
        formErrors: ['an unexpected error occurred'],
      },
    };
  }

  const { value } = token;

  const verified = jwtVerify(value, { ignoreExpiration: true });

  await prisma.authenticationToken.delete({
    select: {
      user: true,
    },
    where: {
      user: {
        email: validation.data.email,
      },
      userId: verified.data.userId,
      value,
    },
  });
  cookies().delete('token');

  revalidatePath('/');
  redirect('/');
}
