import {
  Card,
  CardBody,
  CardProps,
  CardTitle,
} from '@mqs/react-server-components';
import { cookies } from 'next/headers';
import Image from 'next/image';
import { prisma } from '@mqs/prisma/client';
import jwtVerify from 'utilities/jwt/jwtVerify';
import { redirect } from 'next/navigation';
import qs from 'query-string';

async function getUser() {
  const { value } = cookies().get('token') || {};

  const query = qs.stringify({
    redirect: '/user/profile',
  });

  const redirectPath = `/auth/sign-in?${query}`;

  if (!value) {
    redirect(redirectPath);
  }

  let token;

  try {
    token = jwtVerify(value);
  } catch (error) {
    if (error) {
      redirect(redirectPath);
    }
  }

  if (!token) {
    throw new Error('an unexpected error occurred');
  }

  const jwt = await prisma.jwt.findFirstOrThrow({
    select: {
      user: true,
    },
    where: {
      value,
    },
  });

  if (token.data.userId !== jwt.user.id) {
    throw new Error('an unexpected error occurred');
  }

  return jwt.user;
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
