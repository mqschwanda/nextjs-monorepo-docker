import prisma from '@mqs/prisma/client';
import JobsTableBodyRow from '../JobsTableBodyRow';

async function getJobs() {
  const jobs = await prisma.job.findMany({
    select: {
      key: true,
    },
  });

  return jobs;
}

export default async function JobsTableBody() {
  const jobs = await getJobs();

  return (
    <tbody>
      { jobs.map(({ key }) => (
        <JobsTableBodyRow
          jobKey={key}
          key={key}
        />
      )) }
    </tbody>
  );
}
