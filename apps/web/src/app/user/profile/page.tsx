import {
  Card,
  CardBody,
  CardTitle,
  Container,
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

export const metadata = {
  title: 'User Profile',
};

export default function Page() {
  const user = getUserCookie();

  return (
    <Container
      center
      cx={[
        'py-4',
      ]}
    >
      <h1
        className='text-5xl font-bold'
      >
        { 'User Profile' }
      </h1>
      <div>
        <Card
          side
        >
          <figure>
            <Image
              alt={user?.email || 'profile-image'}
              height='150'
              src='/assets/images/stock-profile-image.jpg'
              width='150'
            />
          </figure>
          <CardBody>
            <CardTitle>
              { user?.username }
            </CardTitle>
          </CardBody>
        </Card>
      </div>
    </Container>
  );
}
