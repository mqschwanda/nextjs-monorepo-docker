import { Resolvers } from '@mqs/graphql-schema';
import { RoleKey, prisma } from '@mqs/prisma/client';
import { ContextType } from '@/context';
import { authenticate, compose } from '@/resolvers/middleware';

type QueryLogs = NonNullable<NonNullable<Resolvers<ContextType>['Query']>['logs']>;

const queryLogs: QueryLogs = async (_parent, _args, _context, _info) => {
  const logs = await prisma.log.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  return logs;
};

export default compose(
  authenticate({
    roles: [
      RoleKey.Admin,
    ],
  }),
)(
  queryLogs,
);
