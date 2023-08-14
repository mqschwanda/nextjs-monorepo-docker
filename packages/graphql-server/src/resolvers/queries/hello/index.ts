import { Resolvers } from '@mqs/graphql-schema';
import { ContextType } from '@/context';
import { compose } from '@/resolvers/middleware';

type QueryHello = NonNullable<NonNullable<Resolvers<ContextType>['Query']>['hello']>;

const queryHello: QueryHello = async (_parent, args, _context, _info) => `Hello ${args.name}`;

export default compose()(
  queryHello,
);
