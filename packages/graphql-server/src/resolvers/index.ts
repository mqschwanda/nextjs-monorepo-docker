import { Resolvers } from '@mqs/graphql-schema';
import { ContextType } from 'context';
import { DateScalar, JSONScalar, JsonPrisma } from './scalars';
import Query from './queries';
import Mutation from './mutations';
import Subscription from './subscriptions';

const resolvers: Resolvers<ContextType> = {
  Date: DateScalar,
  JSON: JSONScalar,
  JsonPrisma,
  Mutation,
  Query,
  Subscription,
};

export default resolvers;
