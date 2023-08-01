import { Tokens } from '@mqs/tokens';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import qs from 'query-string';

export async function GET(request: Request) { // eslint-disable-line import/prefer-default-export
  const url = new URL(request.url);
  const redirectPath = url.searchParams.get('redirect');

  const { value: accessTokenCookie } = cookies().get(Tokens.audienceAccess) || {};
  const { value: refreshTokenCookie } = cookies().get(Tokens.audienceRefresh) || {};

  const query = qs.stringify({
    redirect: redirectPath,
  });

  const signInPath = `/auth/sign-in?${query}`;

  if (
    !accessTokenCookie
    || !refreshTokenCookie
  ) {
    redirect(signInPath);
  }

  try {
    const accessToken = await Tokens.authenticate(
      accessTokenCookie,
      refreshTokenCookie,
    );

    cookies().set(
      Tokens.audienceAccess,
      accessToken.value,
      {
        httpOnly: true,
      },
    );
    cookies().set(
      Tokens.audienceRefresh,
      accessToken.refreshToken.value,
      {
        httpOnly: true,
      },
    );
  } catch (error) {
    redirect(signInPath);
  }

  redirect(redirectPath || '/home');
}
