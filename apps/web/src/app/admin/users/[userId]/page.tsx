import {
  Container,
} from '@mqs/react-server-components';
import {
  Suspense,
} from 'react';
import { RoleKey } from '@mqs/prisma/client';
import authenticate from 'utilities/authenticate';
import UserCard from './_partials/UserCard';
import UserCardLoading from './_partials/UserCardLoading';

export const metadata = {
  title: 'User Profile',
};

type PageProps = {
  params: {
    userId: string
  }
};

export default async function Page({ params }: PageProps) {
  await authenticate({
    roles: [
      RoleKey.Admin,
    ],
  });

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
        <Suspense
          fallback={<UserCardLoading />}
        >
          <UserCard
            userId={Number(params.userId)}
          />
        </Suspense>
      </div>
    </Container>
  );
}
