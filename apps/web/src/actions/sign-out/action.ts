'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { getFormDataForZod } from '@mqs/zod';
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

  // TODO: handle sign out

  cookies().set('user', '');

  revalidatePath('/');
  redirect('/');
}
