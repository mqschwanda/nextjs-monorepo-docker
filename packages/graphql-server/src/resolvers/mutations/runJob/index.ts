import { Resolvers } from '@mqs/graphql-schema';
import { RoleKey, prisma } from '@mqs/prisma/client';
import { ContextType } from '@/context';
import { authenticate, compose } from '@/resolvers/middleware';

type MutationRunJob = NonNullable<NonNullable<Resolvers<ContextType>['Mutation']>['runJob']>;

const mutationRunJob: MutationRunJob = async (_parent, args, context, _info) => {
  const {
    key,
  } = args;

  const job = await prisma.job.findFirstOrThrow({
    orderBy: {
      startedAt: 'desc',
    },
    where: {
      key,
    },
  });

  context.jobs[key].run();
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
  mutationRunJob,
);
