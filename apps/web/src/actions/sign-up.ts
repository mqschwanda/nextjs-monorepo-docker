'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

export default async function signUp(data: FormData) {
  'use server';

  const email = data.get('email');
  // const password = data.get('password');
  // const confirmPassword = data.get('confirm-password');

  const user = {
    email,
  };

  cookies().set('user', JSON.stringify(user));

  revalidatePath('/');

  redirect('/');
}
