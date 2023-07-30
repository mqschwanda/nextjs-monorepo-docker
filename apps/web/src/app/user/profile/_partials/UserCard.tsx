import {
  Card,
  CardBody,
  CardProps,
  CardTitle,
} from '@mqs/react-server-components';
import { cookies } from 'next/headers';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import qs from 'query-string';
import { Tokens } from '@mqs/tokens';

async function getUser() { // eslint-disable-line consistent-return
  const { value: accessTokenCookie } = cookies().get(Tokens.audienceAccess) || {};

  const query = qs.stringify({
    redirect: '/user/profile',
  });

  const signInPath = `/auth/sign-in?${query}`;

  if (!accessTokenCookie) {
    redirect(signInPath);
  }

  try {
    const accessToken = await Tokens.verifyAccessToken(accessTokenCookie);

    return accessToken.user;
  } catch (error) {
    redirect(`/auth/refresh?${query}`);
  }
}

export interface UserCardProps extends Omit<CardProps, 'side' | 'children'> {

}

export default async function UserCard(props: UserCardProps) {
  const user = await getUser();

  return (
    <Card
      variantImage='side'
      {...props} // eslint-disable-line react/jsx-props-no-spreading
    >
      <figure>
        <Image
          alt={user.email || 'profile-image'}
          className='w-[150px] h-[150px]'
          height={150}
          src='/assets/images/stock-profile-image.jpg'
          width={150}
        />
      </figure>
      <CardBody>
        <CardTitle>
          { `${user.nameFirst} ${user.nameLast}` }
        </CardTitle>
        <ul>
          <li>
            { user.email }
          </li>
        </ul>
      </CardBody>
    </Card>
  );
}
