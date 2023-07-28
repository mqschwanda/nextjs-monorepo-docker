import {
  Card,
  CardBody,
  CardProps,
  CardTitle,
} from '@mqs/react-server-components';
import { cookies } from 'next/headers';
import Image from 'next/image';
import { prisma } from '@mqs/prisma/client';

async function getUser() {
  const { value } = cookies().get('token') || {};

  if (!value) {
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
