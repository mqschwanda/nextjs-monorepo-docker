import {
  Card,
  CardBody,
  CardProps,
  CardTitle,
} from '@mqs/react-server-components';
import { cookies } from 'next/headers';
import Image from 'next/image';
import jwt from 'jsonwebtoken';
import { User } from '@mqs/prisma/client';

function getUser() {
  const { value } = cookies().get('token') || {};

  if (!value) {
    return null;
  }

  if (process.env.JWT_SECRET === undefined) {
    throw new Error('an unexpected error occurred');
  }

  const user = jwt.verify(value, process.env.JWT_SECRET);

  return user as User;
}

export interface UserCardProps extends Omit<CardProps, 'side' | 'children'> {

}

export default function UserCard(props: UserCardProps) {
  const user = getUser();

  return (
    <Card
      variantImage='side'
      {...props} // eslint-disable-line react/jsx-props-no-spreading
    >
      <figure>
        <Image
          alt={user?.email || 'profile-image'}
          className='w-[150px] h-[150px]'
          height={150}
          src='/assets/images/stock-profile-image.jpg'
          width={150}
        />
      </figure>
      <CardBody>
        <CardTitle>
          { `${user?.nameFirst} ${user?.nameLast}` }
        </CardTitle>
        <ul>
          <li>
            { user?.email }
          </li>
        </ul>
      </CardBody>
    </Card>
  );
}
