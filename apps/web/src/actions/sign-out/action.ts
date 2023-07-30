'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { getFormDataForZod } from '@mqs/zod';
import { Tokens } from '@mqs/tokens';
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

  const authenticationTokenCookie = cookies().get('authentication');
  const refreshTokenCookie = cookies().get('refresh');
  if (authenticationTokenCookie) {
    await Tokens.invalidateAuthenticationToken(
      authenticationTokenCookie.value,
      {
        ignoreExpiration: true,
      },
    );
  } else if (refreshTokenCookie) {
    await Tokens.invalidateRefreshToken(
      refreshTokenCookie.value,
      {
        ignoreExpiration: true,
      },
    );
  }

  cookies().delete('authentication');
  cookies().delete('refresh');

  revalidatePath('/');
  redirect('/');
}
