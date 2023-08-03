import { RoleKey } from '@mqs/prisma/client';
import {
  Card,
  Container,
} from '@mqs/react-server-components';
import { Suspense } from 'react';
import authenticate from 'utilities/authenticate';
import UsersTableBodyLoading from './_partials/UsersTableBodyLoading';
import UsersTableBody from './_partials/UsersTableBody';

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
          <table
            className='table table-fixed table-pin-rows'
          >
            <thead>
              <tr>
                <th
                  className='w-[200px]'
                >
                  { 'Email' }
                </th>
                <th>
                  { 'Created At' }
                </th>
                <th
                  className='w-[150px]'
                >
                  { 'Last Name' }
                </th>
                <th
                  className='w-[150px]'
                >
                  { 'First Name' }
                </th>
                <th
                  className='w-[100px]'
                >
                  { 'Roles' }
                </th>
              </tr>
            </thead>
            <Suspense
              fallback={<UsersTableBodyLoading />}
            >
              <UsersTableBody />
            </Suspense>
          </table>
        </div>
      </Card>
    </Container>
  );
}
