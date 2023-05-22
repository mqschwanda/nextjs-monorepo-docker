'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

export default async function signIn(data: FormData) {
  'use server';

  const email = data.get('email');
  // const password = data.get('password');

  if (!email) {
    // TODO: validation
    return;
  }

  const [username] = email.toString().split('@');

  const user = {
    email,
    username,
  };

  cookies().set('user', JSON.stringify(user));

  revalidatePath('/');
  redirect('/');
}
