import {
  Container,
} from '@mqs/react-server-components';
import {
  Suspense,
} from 'react';
import UserCard from './_partials/UserCard';
import UserCardLoading from './_partials/UserCardLoading';

export const metadata = {
  title: 'User Profile',
};

export default function Page() {
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
          <UserCard />
        </Suspense>
      </div>
    </Container>
  );
}
