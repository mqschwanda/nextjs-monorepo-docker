import { RoleKey } from '@mqs/prisma/client';
import {
  Card,
  Container,
} from '@mqs/react-server-components';
import { Suspense } from 'react';
import authenticate from 'utilities/authenticate';
import LogsTableBodyLoading from './_partials/LogsTableBodyLoading';
import LogsTableBody from './_partials/LogsTableBody';

export const metadata = {
  title: 'Logs',
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
        { 'Logs' }
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
                <th>
                  { 'Message' }
                </th>
                <th
                  className='w-[100px] text-center'
                >
                  { 'Type' }
                </th>
                <th
                  className='w-[220px] text-center'
                >
                  { 'Created At' }
                </th>
                <th
                  className='w-[200px] text-center'
                >
                  { 'Payload' }
                </th>
              </tr>
            </thead>
            <Suspense
              fallback={<LogsTableBodyLoading />}
            >
              <LogsTableBody />
            </Suspense>
          </table>
        </div>
      </Card>
    </Container>
  );
}
