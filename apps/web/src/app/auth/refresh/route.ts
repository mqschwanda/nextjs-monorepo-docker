import { Tokens } from '@mqs/tokens';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import qs from 'query-string';

export async function GET(request: Request) { // eslint-disable-line import/prefer-default-export
  const url = new URL(request.url);
  const redirectPath = url.searchParams.get('redirect');

  const { value: authenticationTokenCookie } = cookies().get('authentication') || {};
  const { value: refreshTokenCookie } = cookies().get('refresh') || {};

  const query = qs.stringify({
    redirect: redirectPath,
  });

  const signInPath = `/auth/sign-in?${query}`;

  if (
    !authenticationTokenCookie
    || !refreshTokenCookie
  ) {
    redirect(signInPath);
  }

  try {
    const authenticationToken = await Tokens.authenticate(
      authenticationTokenCookie,
      refreshTokenCookie,
    );

    cookies().set(
      'authentication',
      authenticationToken.value,
      {
        httpOnly: true,
      },
    );
    cookies().set(
      'refresh',
      authenticationToken.refreshToken.value,
      {
        httpOnly: true,
      },
    );

    redirect(redirectPath || '/home');
  } catch (error) {
    redirect(signInPath);
  }
}
