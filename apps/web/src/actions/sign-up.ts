'use server';

import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';

export default async function signUp(data: FormData) {
  'use server';

  const email = data.get('email');
  // const password = data.get('password');
  // const confirmPassword = data.get('confirm-password');

  const user = {
    email,
  };

  // @ts-ignore - Property 'set' does not exist on type 'ReadonlyRequestCookies'.
  cookies().set({
    user,
  });

  revalidatePath('/');

  return {
    user,
  };
}
