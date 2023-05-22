'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { UserCookie } from 'utilities/cookies';

export default async function signIn(data: FormData) {
  'use server';

  const email = data.get('email');
  // const password = data.get('password');

  if (!email || typeof email !== 'string') {
    // TODO: validation
    return;
  }

  const [username] = email.toString().split('@');

  const user: UserCookie = {
    email,
    username,
  };

  cookies().set('user', JSON.stringify(user));

  revalidatePath('/');
  redirect('/user/profile');
}
