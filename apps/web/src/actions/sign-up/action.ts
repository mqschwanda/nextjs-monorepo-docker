'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { getFormDataForZod } from '@mqs/zod';
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
    },
  } = validation;
  const [username] = email.split('@');

  const user = {
    email,
    username,
  };

  // TODO: handle user insert into database
  // TODO: handle password hash

  cookies().set('user', JSON.stringify(user));

  revalidatePath('/');
  redirect('/user/profile');
}
