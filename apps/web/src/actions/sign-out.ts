'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

export default async function signOut(_data: FormData) {
  'use server';

  // TODO: validation

  // TODO: handle sign out

  cookies().set('user', '');

  revalidatePath('/');
  redirect('/');
}
