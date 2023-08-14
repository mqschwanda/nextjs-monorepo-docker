import { Resolvers } from '@mqs/graphql-schema';
import { RoleKey, prisma } from '@mqs/prisma/client';
import { ContextType } from '@/context';
import { authenticate, compose } from '@/resolvers/middleware';

type QueryJob = NonNullable<NonNullable<Resolvers<ContextType>['Query']>['job']>;

const queryJob: QueryJob = async (_parent, args, context, _info) => {
  const {
    key,
  } = args;

  const job = await prisma.job.findFirstOrThrow({
    orderBy: {
      startedAt: 'desc',
    },
    take: 1,
    where: {
      key,
    },
  });

  const { name } = context.jobs[key];

  return {
    name,
    ...job,
  };
};

export default compose(
  authenticate({
    roles: [
      RoleKey.Admin,
    ],
  }),
)(
  queryJob,
);
