import { UserRole } from '@mqs/prisma/client';
import { Tokens } from '@mqs/tokens';
import { cookies, headers } from 'next/headers';
import { notFound, redirect } from 'next/navigation';
import qs from 'query-string';

// eslint-disable-next-line consistent-return
export default async function authenticate({
  roles,
}: {
  roles?: UserRole,
} = {}) {
  const invokePath = headers().get('x-invoke-path');
  const { value: accessTokenCookie } = cookies().get(Tokens.audienceAccess) || {};

  const query = qs.stringify({
    redirect: invokePath,
  });

  if (!accessTokenCookie) {
    redirect(`/auth/sign-in?${query}`);
  }

  try {
    const { user } = await Tokens.verifyAccessToken(accessTokenCookie);

    if (roles) {
      if (user.roles.includes(roles)) {
        return user;
      }

      notFound();
    }

    return user;
  } catch (error) {
    redirect(`/auth/refresh?${query}`);
  }
}
