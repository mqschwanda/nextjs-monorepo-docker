'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { cookies, headers } from 'next/headers';
import { getFormDataForZod } from '@mqs/zod';
import { prisma } from '@mqs/prisma/client';
import { Tokens } from '@mqs/tokens';
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
        formErrors: ['not authorized'],
      },
    };
  }

  const user = await prisma.user.findUniqueOrThrow({
    where: {
      email,
    },
  });

  const authenticationToken = await Tokens.signAuthenticationToken({
    data: {
      userId: user.id,
    },
  });

  cookies().set(
    'authentication',
    authenticationToken.value,
    {
      httpOnly: true,
    },
  );
  cookies().set(
    'refresh',
    authenticationToken.refreshToken.value,
    {
      httpOnly: true,
    },
  );

  let redirectPath = '/';
  const referer = headers().get('referer');
  if (referer) {
    const url = new URL(referer);
    const redirectEncoded = url.searchParams.get('redirect');
    if (redirectEncoded) {
      redirectPath = decodeURIComponent(redirectEncoded);
    }
  }

  revalidatePath(redirectPath);
  redirect(redirectPath);
}
