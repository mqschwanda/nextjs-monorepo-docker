import { Resolvers } from '@mqs/graphql-schema';
import { ContextType } from 'context';
import countdown from './countdown';

const Subscription: Required<NonNullable<Resolvers<ContextType>['Subscription']>> = {
  countdown,
};

export default Subscription;
