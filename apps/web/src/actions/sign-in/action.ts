'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { UserCookie } from 'utilities/cookies';
import { getFormDataForZod } from '@mqs/zod';
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
      // password,
    },
  } = validation;

  const [username] = email.toString().split('@');

  const user: UserCookie = {
    email,
    username,
  };

  cookies().set('user', JSON.stringify(user));

  revalidatePath('/');
  redirect('/user/profile');
}
