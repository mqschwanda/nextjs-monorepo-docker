import { JobKey, RoleKey } from '@mqs/prisma/client';
import {
  Card,
  Container,
} from '@mqs/react-server-components';
import authenticate from 'utilities/authenticate';
import JobsTableBodyRow from './_partials/JobsTableBodyRow';

export const metadata = {
  title: 'Jobs',
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
        { 'Jobs' }
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
                  { 'Name' }
                </th>
                <th
                  className='w-[200px] text-center'
                >
                  { 'Started At' }
                </th>
                <th
                  className='w-[200px] text-center'
                >
                  { 'Finished At' }
                </th>
                <th
                  className='w-[200px] text-center'
                >
                  { 'Failed At' }
                </th>
                <th
                  className='w-[200px] text-center'
                >
                  { 'Canceled At' }
                </th>
                <th
                  className='w-[200px] text-center'
                >
                  { 'Actions' }
                </th>
              </tr>
            </thead>
            <tbody>
              { Object.values(JobKey).map((key) => (
                <JobsTableBodyRow
                  jobKey={key}
                  key={key}
                />
              )) }
            </tbody>
          </table>
        </div>
      </Card>
    </Container>
  );
}
