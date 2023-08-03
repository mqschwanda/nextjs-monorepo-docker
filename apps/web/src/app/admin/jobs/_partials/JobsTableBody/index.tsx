'use client';

import { useJobsQuery } from '@mqs/graphql-client';
import { format } from 'date-fns';
import JobsTableBodyLoading from '../JobsTableBodyLoading';

export default function JobsTableBody() {
  const { data, loading } = useJobsQuery();

  if (loading) {
    return (
      <JobsTableBodyLoading />
    );
  }

  return (
    <tbody>
      { data?.jobs.map(({
        name,
        id,
        ranJob,
      }) => (
        <tr
          key={id}
        >
          <td
            className='text-ellipsis overflow-hidden'
          >
            <span>
              { name }
            </span>
          </td>
          <td
            className='text-ellipsis overflow-hidden'
          >
            <span>
              { ranJob ? format(new Date(ranJob.startedAt), 'MM/dd/yyyy HH:mm:ss O') : null }
            </span>
          </td>
          <td
            className='text-ellipsis overflow-hidden'
          >
            <span>
              { ranJob?.finishedAt ? format(new Date(ranJob.finishedAt), 'MM/dd/yyyy HH:mm:ss O') : null }
            </span>
          </td>
          <td
            className='text-ellipsis overflow-hidden'
          >
            <span>
              { ranJob?.failedAt ? format(new Date(ranJob.failedAt), 'MM/dd/yyyy HH:mm:ss O') : null }
            </span>
          </td>
          <td
            className='text-ellipsis overflow-hidden'
          >
            <span>
              { '-' }
            </span>
          </td>
        </tr>
      )) }
    </tbody>
  );
}
