import {
  Card,
  CardBody,
  CardProps,
  CardTitle,
} from '@mqs/react-server-components';
import Image from 'next/image';
import authenticate from 'utilities/authenticate';

export interface UserCardProps extends Omit<CardProps, 'side' | 'children'> {

}

export default async function UserCard(props: UserCardProps) {
  const user = await authenticate();

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
