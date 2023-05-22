'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

export default async function signOut(_data: FormData) {
  'use server';

  cookies().set('user', '');

  revalidatePath('/');
  redirect('/');
}
