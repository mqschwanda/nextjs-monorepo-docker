import prisma, { User } from '@mqs/prisma/client';
import {
  Card,
  CardBody,
  CardProps,
  CardTitle,
} from '@mqs/react-server-components';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import logger from '@mqs/logger';

export interface UserCardProps extends Omit<CardProps, 'side' | 'children'> {
  userId: number,
}

export default async function UserCard({
  userId,
  ...props
}: UserCardProps) {
  let user: User | null = null;

  try {
    user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
  } catch (e) {
    const error = e as Error;

    logger.error({
      message: error.message,
      payload: error,
    });
  }

  if (!user) {
    notFound();
  }

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
