import { Resolvers } from '@mqs/graphql-schema';
import { RoleKey, prisma } from '@mqs/prisma/client';
import { ContextType } from '@/context';
import { authenticate, compose } from '@/resolvers/middleware';

type QueryJobs = NonNullable<NonNullable<Resolvers<ContextType>['Query']>['jobs']>;

const queryJobs: QueryJobs = async (_parent, args, context, _info) => {
  const jobs = await prisma.job.findMany({
    orderBy: {
      startedAt: 'desc',
    },
  });

  return jobs.map((job) => {
    const { name } = context.jobs[job.key];

    return {
      name,
      ...job,
    };
  });
};

export default compose(
  authenticate({
    roles: [
      RoleKey.Admin,
    ],
  }),
)(
  queryJobs,
);
