import { RoleKey } from '@mqs/prisma/client';
import { Tokens } from '@mqs/tokens';
import { cookies, headers } from 'next/headers';
import { notFound, redirect } from 'next/navigation';
import qs from 'query-string';

// eslint-disable-next-line consistent-return
export default async function authenticate({
  roles,
}: {
  roles?: Array<RoleKey>,
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
      const userRoles = user.roles.map(({ role: { key } }) => key);
      if (roles.every((role) => userRoles.includes(role))) {
        return user;
      }

      notFound();
    }

    return user;
  } catch (error) {
    redirect(`/auth/refresh?${query}`);
  }
}
