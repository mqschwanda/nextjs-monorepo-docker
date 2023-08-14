import { Resolvers } from '@mqs/graphql-schema';
import { ContextType } from 'context';

type SubscriptionCountdown = NonNullable<NonNullable<Resolvers<ContextType>['Subscription']>['countdown']>;

const subscriptionCountdown: SubscriptionCountdown = {
  async* subscribe(_parent, args, _context, _info) {
    for (let i = args.from; i >= 0; i--) {
      // eslint-disable-next-line no-await-in-loop
      await new Promise((resolve) => {
        setTimeout(resolve, 1000);
      });
      yield { countdown: i };
    }
  },
};

export default subscriptionCountdown;
