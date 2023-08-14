import { Resolvers } from '@mqs/graphql-schema';
import { RoleKey, prisma } from '@mqs/prisma/client';
import { ContextType } from '@/context';
import { authenticate, compose } from '@/resolvers/middleware';

type MutationCreateLog = NonNullable<NonNullable<Resolvers<ContextType>['Mutation']>['createLog']>;

const mutationCreateLog: MutationCreateLog = async (_parent, args, _context, _info) => {
  const {
    input,
  } = args;

  const log = await prisma.log.create({
    data: {
      ...input,
      payload: input.payload || undefined,
    },
  });

  return log;
};

export default compose(
  authenticate({
    roles: [
      RoleKey.Admin,
    ],
  }),
)(
  mutationCreateLog,
);
