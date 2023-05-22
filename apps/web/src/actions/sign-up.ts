'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

export default async function signUp(data: FormData) {
  'use server';

  const email = data.get('email');

  if (!email || typeof email !== 'string') {
    // TODO: validation
    return;
  }

  const [username] = email.toString().split('@');
  // TODO: handle password
  // const password = data.get('password');
  // const confirmPassword = data.get('confirm-password');

  const user = {
    email,
    username,
  };

  // TODO: handle user insert into database

  cookies().set('user', JSON.stringify(user));

  revalidatePath('/');
  redirect('/user/profile');
}
