import { prisma } from '@mqs/prisma/client';
import { format } from 'date-fns';

async function getJobs() {
  const jobs = await prisma.job.findMany({
    select: {
      id: true,
      key: true,
      name: true,
      ranJobs: {
        orderBy: {
          ranAt: 'desc',
        },
        take: 1,
      },
    },
  });

  return jobs;
}

export default async function JobsTableBody() {
  const jobs = await getJobs();

  return (
    <tbody>
      { jobs.map(({
        name,
        id,
        ranJobs,
      }) => {
        const [ranJob] = ranJobs;

        return (
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
                { ranJob ? format(ranJob.ranAt, 'MM/dd/yyyy HH:mm:ss O') : null }
              </span>
            </td>
            <td
              className='text-ellipsis overflow-hidden'
            >
              <span>
                { ranJob?.finishedAt ? format(ranJob.finishedAt, 'MM/dd/yyyy HH:mm:ss O') : null }
              </span>
            </td>
            <td
              className='text-ellipsis overflow-hidden'
            >
              <span>
                { ranJob?.failedAt ? format(ranJob.failedAt, 'MM/dd/yyyy HH:mm:ss O') : null }
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
        );
      }) }
    </tbody>
  );
}
