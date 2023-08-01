import { RoleKey } from '@mqs/prisma/client';
import {
  Card,
  Container,
} from '@mqs/react-server-components';
import { Suspense } from 'react';
import authenticate from 'utilities/authenticate';
import UsersTableLoading from './_partials/UsersTableLoading';
import UsersTable from './_partials/UsersTable';

export const metadata = {
  title: 'Users',
};

export default async function Page() {
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
        id='admin-title'
      >
        { 'Users' }
      </h1>

      <Card>
        <div
          className='overflow-x-auto h-[500px]'
        >
          <Suspense
            fallback={<UsersTableLoading />}
          >
            <UsersTable />
          </Suspense>
        </div>
      </Card>
    </Container>
  );
}
