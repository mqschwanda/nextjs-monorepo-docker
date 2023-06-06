import {
  Card,
  CardBody,
  CardProps,
  CardTitle,
} from '@mqs/react-server-components';
import { cookies } from 'next/headers';
import Image from 'next/image';
import { UserCookie } from 'utilities/cookies';

function getUserCookie() {
  const { value } = cookies().get('user') || {};

  if (!value) {
    return null;
  }

  return JSON.parse(value) as UserCookie;
}

export interface UserCardProps extends Omit<CardProps, 'side' | 'children'> {

}

export default function UserCard(props: UserCardProps) {
  const user = getUserCookie();

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
          { user?.username }
        </CardTitle>
      </CardBody>
    </Card>
  );
}
